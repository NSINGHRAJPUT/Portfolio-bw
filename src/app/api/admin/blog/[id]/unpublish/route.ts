import { NextResponse } from "next/server";

import { requireAdmin } from "@/lib/auth/require-admin";
import { revalidateBlogPaths } from "@/lib/blog/revalidate";
import { serializeBlogPost } from "@/lib/blog/serialize";
import { connectToDatabase } from "@/lib/db/connect";
import { BlogPostModel } from "@/lib/db/models/BlogPost";

interface RouteContext {
  params: Promise<{ id: string }>;
}

export async function PATCH(_request: Request, context: RouteContext) {
  const { error } = await requireAdmin();
  if (error) return error;

  try {
    const { id } = await context.params;
    await connectToDatabase();

    const post = await BlogPostModel.findById(id);
    if (!post) {
      return NextResponse.json({ error: "Post not found." }, { status: 404 });
    }

    const slug = post.slug;
    post.status = "draft";
    await post.save();

    revalidateBlogPaths(slug);

    return NextResponse.json({ post: serializeBlogPost(post) });
  } catch (err) {
    console.error("Unpublish blog post failed", err);
    return NextResponse.json({ error: "Failed to unpublish post." }, { status: 500 });
  }
}
