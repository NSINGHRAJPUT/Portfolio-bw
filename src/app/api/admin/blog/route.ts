import { NextResponse } from "next/server";

import { requireAdmin } from "@/lib/auth/require-admin";
import { getAdminPosts } from "@/lib/blog/queries";
import { revalidateBlogPaths } from "@/lib/blog/revalidate";
import { ensureUniqueSlug, slugifyTitle } from "@/lib/blog/slug";
import { serializeBlogPost } from "@/lib/blog/serialize";
import { blogListQuerySchema, blogPostInputSchema } from "@/lib/blog/validators";
import { connectToDatabase } from "@/lib/db/connect";
import { BlogPostModel } from "@/lib/db/models/BlogPost";

function emptyToUndefined(value?: string) {
  return value && value.trim() ? value.trim() : undefined;
}

export async function GET(request: Request) {
  const { error } = await requireAdmin();
  if (error) return error;

  const { searchParams } = new URL(request.url);
  const parsed = blogListQuerySchema.safeParse({
    status: searchParams.get("status") ?? "all",
    search: searchParams.get("search") ?? undefined,
    tag: searchParams.get("tag") ?? undefined,
    page: searchParams.get("page") ?? "1",
    limit: searchParams.get("limit") ?? "20",
  });

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const result = await getAdminPosts(parsed.data);
  return NextResponse.json(result);
}

export async function POST(request: Request) {
  const { error } = await requireAdmin();
  if (error) return error;

  try {
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

    const baseSlug = data.slug ? slugifyTitle(data.slug) : slugifyTitle(data.title);
    const slug = await ensureUniqueSlug(baseSlug);

    const publishedAt =
      data.status === "published"
        ? data.publishedAt
          ? new Date(data.publishedAt)
          : new Date()
        : undefined;

    const post = await BlogPostModel.create({
      title: data.title.trim(),
      slug,
      excerpt: data.excerpt.trim(),
      body: data.body,
      tags: data.tags.map((tag) => tag.trim()).filter(Boolean),
      status: data.status,
      featuredImage: emptyToUndefined(data.featuredImage),
      seoTitle: emptyToUndefined(data.seoTitle),
      seoDescription: emptyToUndefined(data.seoDescription),
      ogImage: emptyToUndefined(data.ogImage),
      authorName: data.authorName.trim(),
      publishedAt,
    });

    if (post.status === "published") {
      revalidateBlogPaths(post.slug);
    }

    return NextResponse.json({ post: serializeBlogPost(post) }, { status: 201 });
  } catch (err) {
    console.error("Create blog post failed", err);
    return NextResponse.json({ error: "Failed to create post." }, { status: 500 });
  }
}
