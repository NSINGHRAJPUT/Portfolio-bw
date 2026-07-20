"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import type { BlogPostListItem } from "@/types/blog";

interface BlogListResponse {
  posts: BlogPostListItem[];
  total: number;
  page: number;
  totalPages: number;
}

export function BlogPostTable() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [data, setData] = useState<BlogListResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(searchParams.get("search") ?? "");
  const [status, setStatus] = useState(searchParams.get("status") ?? "all");

  async function loadPosts() {
    setLoading(true);
    const params = new URLSearchParams();
    if (search) params.set("search", search);
    if (status) params.set("status", status);

    const response = await fetch(`/api/admin/blog?${params.toString()}`);
    const json = await response.json();
    setData(json);
    setLoading(false);
  }

  useEffect(() => {
    loadPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, status]);

  async function handlePublishToggle(post: BlogPostListItem) {
    const endpoint =
      post.status === "published"
        ? `/api/admin/blog/${post.id}/unpublish`
        : `/api/admin/blog/${post.id}/publish`;

    await fetch(endpoint, { method: "PATCH" });
    loadPosts();
  }

  async function handleDelete(post: BlogPostListItem) {
    if (!confirm(`Delete "${post.title}" permanently?`)) return;
    await fetch(`/api/admin/blog/${post.id}`, { method: "DELETE" });
    loadPosts();
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Blog Posts</h1>
          <p className="text-sm text-white/50">Manage drafts, published articles, and SEO metadata.</p>
        </div>
        <Link href="/admin/blog/new">
          <Button>New post</Button>
        </Link>
      </div>

      <div className="flex flex-col gap-3 md:flex-row">
        <Input
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by title, slug, excerpt..."
          value={search}
        />
        <select
          className="h-10 rounded-[var(--radius-md)] border border-[var(--border)] bg-surface px-3 text-sm"
          onChange={(e) => setStatus(e.target.value)}
          value={status}
        >
          <option value="all">All statuses</option>
          <option value="draft">Draft</option>
          <option value="published">Published</option>
        </select>
      </div>

      {loading ? (
        <p className="text-white/50">Loading posts...</p>
      ) : (
        <div className="space-y-3">
          {data?.posts.map((post) => (
            <Card className="flex flex-col gap-4 p-5 md:flex-row md:items-center md:justify-between" key={post.id}>
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-lg font-semibold">{post.title}</h2>
                  <Badge variant={post.status === "published" ? "primary" : "neutral"}>{post.status}</Badge>
                </div>
                <p className="text-sm text-white/50">/{post.slug}</p>
                <p className="text-sm text-white/60">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="neutral">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button onClick={() => router.push(`/admin/blog/${post.id}/edit`)} variant="secondary">
                  Edit
                </Button>
                {post.status === "published" ? (
                  <Link href={`/blog/${post.slug}`} target="_blank">
                    <Button variant="secondary">View</Button>
                  </Link>
                ) : (
                  <Link href={`/admin/blog/${post.id}/preview`} target="_blank">
                    <Button variant="secondary">Preview</Button>
                  </Link>
                )}
                <Button onClick={() => handlePublishToggle(post)} variant="secondary">
                  {post.status === "published" ? "Unpublish" : "Publish"}
                </Button>
                <Button onClick={() => handleDelete(post)} variant="ghost">
                  Delete
                </Button>
              </div>
            </Card>
          ))}
          {!data?.posts.length ? <p className="text-white/50">No posts found.</p> : null}
        </div>
      )}
    </div>
  );
}
