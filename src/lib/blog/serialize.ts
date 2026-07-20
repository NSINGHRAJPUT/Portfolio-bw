import type { BlogPostDocument } from "@/lib/db/models/BlogPost";
import type { BlogPostDTO, BlogPostListItem } from "@/types/blog";

export function serializeBlogPost(doc: BlogPostDocument): BlogPostDTO {
  return {
    id: doc._id.toString(),
    title: doc.title,
    slug: doc.slug,
    excerpt: doc.excerpt,
    body: doc.body,
    tags: doc.tags,
    status: doc.status,
    featuredImage: doc.featuredImage || undefined,
    seoTitle: doc.seoTitle || undefined,
    seoDescription: doc.seoDescription || undefined,
    ogImage: doc.ogImage || undefined,
    authorName: doc.authorName,
    publishedAt: doc.publishedAt?.toISOString(),
    createdAt: doc.createdAt.toISOString(),
    updatedAt: doc.updatedAt.toISOString(),
  };
}

export function serializeBlogPostListItem(doc: BlogPostDocument): BlogPostListItem {
  return {
    id: doc._id.toString(),
    title: doc.title,
    slug: doc.slug,
    excerpt: doc.excerpt,
    tags: doc.tags,
    status: doc.status,
    featuredImage: doc.featuredImage || undefined,
    authorName: doc.authorName,
    publishedAt: doc.publishedAt?.toISOString(),
    updatedAt: doc.updatedAt.toISOString(),
  };
}
