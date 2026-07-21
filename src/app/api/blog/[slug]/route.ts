import { NextResponse } from "next/server";

import { getPublishedPostBySlug, getRelatedPosts } from "@/lib/blog/queries";
import { publicBlogDetailQuerySchema } from "@/lib/blog/validators";

export const revalidate = 3600;

const CACHE_HEADERS = {
  "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
};

interface RouteContext {
  params: Promise<{ slug: string }>;
}

export async function GET(request: Request, context: RouteContext) {
  try {
    const { slug } = await context.params;
    const { searchParams } = new URL(request.url);
    const parsed = publicBlogDetailQuerySchema.safeParse({
      include: searchParams.get("include") ?? undefined,
    });

    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
    }

    const post = await getPublishedPostBySlug(slug);

    if (!post) {
      return NextResponse.json({ error: "Post not found." }, { status: 404 });
    }

    if (parsed.data.include === "related") {
      const related = await getRelatedPosts(post.slug, post.tags);
      return NextResponse.json({ post, related }, { headers: CACHE_HEADERS });
    }

    return NextResponse.json({ post }, { headers: CACHE_HEADERS });
  } catch (err) {
    console.error("Public blog detail failed", err);
    return NextResponse.json({ error: "Failed to fetch blog post." }, { status: 500 });
  }
}
