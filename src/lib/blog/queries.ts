import { connectToDatabase } from "@/lib/db/connect";
import { BlogPostModel, type BlogPostDocument } from "@/lib/db/models/BlogPost";
import { serializeBlogPost, serializeBlogPostListItem } from "@/lib/blog/serialize";
import type { BlogPostDTO, BlogPostListItem } from "@/types/blog";

export async function getPublishedPosts(tag?: string) {
  await connectToDatabase();

  const filter: Record<string, unknown> = { status: "published" };
  if (tag) {
    filter.tags = tag;
  }

  const posts = await BlogPostModel.find(filter)
    .sort({ publishedAt: -1 })
    .lean<BlogPostDocument[]>();

  return posts.map((post) => serializeBlogPostListItem(post as BlogPostDocument));
}

export async function getPublicPosts(params: {
  tag?: string;
  search?: string;
  page?: number;
  limit?: number;
}) {
  await connectToDatabase();

  const page = params.page ?? 1;
  const limit = params.limit ?? 20;
  const filter: Record<string, unknown> = { status: "published" };

  if (params.tag) {
    filter.tags = params.tag;
  }

  if (params.search) {
    filter.$or = [
      { title: { $regex: params.search, $options: "i" } },
      { excerpt: { $regex: params.search, $options: "i" } },
      { slug: { $regex: params.search, $options: "i" } },
    ];
  }

  const [posts, total] = await Promise.all([
    BlogPostModel.find(filter)
      .sort({ publishedAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .lean<BlogPostDocument[]>(),
    BlogPostModel.countDocuments(filter),
  ]);

  return {
    posts: posts.map((post) => serializeBlogPostListItem(post as BlogPostDocument)),
    total,
    page,
    limit,
    totalPages: Math.ceil(total / limit),
  };
}

export async function getPublishedPostBySlug(slug: string) {
  await connectToDatabase();

  const post = await BlogPostModel.findOne({ slug, status: "published" }).lean<BlogPostDocument>();
  if (!post) return null;

  return serializeBlogPost(post as BlogPostDocument);
}

export async function getRelatedPosts(slug: string, tags: string[], limit = 3) {
  await connectToDatabase();

  if (tags.length === 0) return [] as BlogPostListItem[];

  const posts = await BlogPostModel.find({
    slug: { $ne: slug },
    status: "published",
    tags: { $in: tags },
  })
    .sort({ publishedAt: -1 })
    .limit(limit)
    .lean<BlogPostDocument[]>();

  return posts.map((post) => serializeBlogPostListItem(post as BlogPostDocument));
}

export async function getPublishedSlugsForSitemap() {
  await connectToDatabase();

  const posts = await BlogPostModel.find({ status: "published" })
    .select("slug updatedAt publishedAt")
    .lean<{ slug: string; updatedAt: Date; publishedAt?: Date }[]>();

  return posts.map((post) => ({
    slug: post.slug,
    lastModified: post.updatedAt ?? post.publishedAt ?? new Date(),
  }));
}

export async function getAdminPosts(params: {
  status?: "draft" | "published" | "all";
  search?: string;
  tag?: string;
  page?: number;
  limit?: number;
}) {
  await connectToDatabase();

  const page = params.page ?? 1;
  const limit = params.limit ?? 20;
  const filter: Record<string, unknown> = {};

  if (params.status && params.status !== "all") {
    filter.status = params.status;
  }

  if (params.tag) {
    filter.tags = params.tag;
  }

  if (params.search) {
    filter.$or = [
      { title: { $regex: params.search, $options: "i" } },
      { excerpt: { $regex: params.search, $options: "i" } },
      { slug: { $regex: params.search, $options: "i" } },
    ];
  }

  const [posts, total] = await Promise.all([
    BlogPostModel.find(filter)
      .sort({ updatedAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .lean<BlogPostDocument[]>(),
    BlogPostModel.countDocuments(filter),
  ]);

  return {
    posts: posts.map((post) => serializeBlogPostListItem(post as BlogPostDocument)),
    total,
    page,
    limit,
    totalPages: Math.ceil(total / limit),
  };
}

export async function getAdminPostById(id: string): Promise<BlogPostDTO | null> {
  await connectToDatabase();

  const post = await BlogPostModel.findById(id).lean<BlogPostDocument>();
  if (!post) return null;

  return serializeBlogPost(post as BlogPostDocument);
}
