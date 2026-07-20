import { NextResponse } from "next/server";

import { requireAdmin } from "@/lib/auth/require-admin";
import { getAdminPostById } from "@/lib/blog/queries";
import { revalidateBlogPaths } from "@/lib/blog/revalidate";
import { ensureUniqueSlug, slugifyTitle } from "@/lib/blog/slug";
import { serializeBlogPost } from "@/lib/blog/serialize";
import { blogPostInputSchema } from "@/lib/blog/validators";
import { connectToDatabase } from "@/lib/db/connect";
import { BlogPostModel } from "@/lib/db/models/BlogPost";

function emptyToUndefined(value?: string) {
  return value && value.trim() ? value.trim() : undefined;
}

interface RouteContext {
  params: Promise<{ id: string }>;
}

export async function GET(_request: Request, context: RouteContext) {
  const { error } = await requireAdmin();
  if (error) return error;

  const { id } = await context.params;
  const post = await getAdminPostById(id);

  if (!post) {
    return NextResponse.json({ error: "Post not found." }, { status: 404 });
  }

  return NextResponse.json({ post });
}

export async function PUT(request: Request, context: RouteContext) {
  const { error } = await requireAdmin();
  if (error) return error;

  try {
    const { id } = await context.params;
    const body = await request.json();
    const parsed = blogPostInputSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
    }

    const data = parsed.data;

    if (data.status === "published" && !data.body.trim()) {
      return NextResponse.json({ error: "Body is required to publish." }, { status: 400 });
    }

    await connectToDatabase();

    const existing = await BlogPostModel.findById(id);
    if (!existing) {
      return NextResponse.json({ error: "Post not found." }, { status: 404 });
    }

    const previousSlug = existing.slug;
    const baseSlug = data.slug ? slugifyTitle(data.slug) : slugifyTitle(data.title);
    const slug = await ensureUniqueSlug(baseSlug, id);

    existing.title = data.title.trim();
    existing.slug = slug;
    existing.excerpt = data.excerpt.trim();
    existing.body = data.body;
    existing.tags = data.tags.map((tag) => tag.trim()).filter(Boolean);
    existing.status = data.status;
    existing.featuredImage = emptyToUndefined(data.featuredImage);
    existing.seoTitle = emptyToUndefined(data.seoTitle);
    existing.seoDescription = emptyToUndefined(data.seoDescription);
    existing.ogImage = emptyToUndefined(data.ogImage);
    existing.authorName = data.authorName.trim();

    if (data.status === "published") {
      existing.publishedAt = data.publishedAt ? new Date(data.publishedAt) : existing.publishedAt ?? new Date();
    } else {
      existing.publishedAt = data.publishedAt ? new Date(data.publishedAt) : undefined;
    }

    await existing.save();

    revalidateBlogPaths(previousSlug);
    if (existing.slug !== previousSlug) {
      revalidateBlogPaths(existing.slug);
    } else if (existing.status === "published") {
      revalidateBlogPaths(existing.slug);
    } else {
      revalidateBlogPaths();
    }

    return NextResponse.json({ post: serializeBlogPost(existing) });
  } catch (err) {
    console.error("Update blog post failed", err);
    return NextResponse.json({ error: "Failed to update post." }, { status: 500 });
  }
}

export async function DELETE(_request: Request, context: RouteContext) {
  const { error } = await requireAdmin();
  if (error) return error;

  try {
    const { id } = await context.params;
    await connectToDatabase();

    const existing = await BlogPostModel.findById(id);
    if (!existing) {
      return NextResponse.json({ error: "Post not found." }, { status: 404 });
    }

    const slug = existing.slug;
    await existing.deleteOne();

    revalidateBlogPaths(slug);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Delete blog post failed", err);
    return NextResponse.json({ error: "Failed to delete post." }, { status: 500 });
  }
}
