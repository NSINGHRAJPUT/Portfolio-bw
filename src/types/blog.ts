export type BlogPostStatus = "draft" | "published";

export interface BlogPostDTO {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  body: string;
  tags: string[];
  status: BlogPostStatus;
  featuredImage?: string;
  seoTitle?: string;
  seoDescription?: string;
  ogImage?: string;
  authorName: string;
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface BlogPostListItem {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  tags: string[];
  status: BlogPostStatus;
  featuredImage?: string;
  authorName: string;
  publishedAt?: string;
  updatedAt: string;
}

export interface AdminUserDTO {
  id: string;
  email: string;
  name: string;
  role: "admin";
}
