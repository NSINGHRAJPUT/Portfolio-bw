import { NextResponse } from "next/server";

import { getPublicPosts } from "@/lib/blog/queries";
import { publicBlogListQuerySchema } from "@/lib/blog/validators";

export const revalidate = 3600;

const CACHE_HEADERS = {
  "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
};

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const parsed = publicBlogListQuerySchema.safeParse({
      search: searchParams.get("search") ?? undefined,
      tag: searchParams.get("tag") ?? undefined,
      page: searchParams.get("page") ?? "1",
      limit: searchParams.get("limit") ?? "20",
    });

    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
    }

    const result = await getPublicPosts(parsed.data);

    return NextResponse.json(result, { headers: CACHE_HEADERS });
  } catch (err) {
    console.error("Public blog list failed", err);
    return NextResponse.json({ error: "Failed to fetch blog posts." }, { status: 500 });
  }
}
