"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { BlogPostListItem } from "@/types/blog";

function formatDate(value?: string) {
  if (!value) return "";
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}

interface BlogListSectionProps {
  posts: BlogPostListItem[];
  activeTag?: string;
}

export function BlogListSection({ posts, activeTag }: BlogListSectionProps) {
  return (
    <section className="container-safe py-16">
      <div className="mb-8 space-y-2">
        <p className="section-eyebrow">Blog</p>
        <h2 className="text-3xl font-semibold text-white md:text-4xl">Articles and engineering notes.</h2>
        {activeTag ? (
          <p className="text-sm text-muted">
            Filtering by tag: <span className="text-[var(--primary)]">{activeTag}</span>{" "}
            <Link className="underline" href="/blog">
              Clear
            </Link>
          </p>
        ) : null}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {posts.map((post) => (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            key={post.id}
            transition={{ duration: 0.45, ease: "easeOut" }}
            viewport={{ once: true, margin: "-80px" }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Card className="space-y-4">
              {post.featuredImage ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  alt=""
                  className="h-40 w-full rounded-xl object-cover"
                  src={post.featuredImage}
                />
              ) : null}
              <div className="flex flex-wrap gap-2">
                {post.tags.slice(0, 3).map((tag) => (
                  <Link href={`/blog?tag=${encodeURIComponent(tag)}`} key={tag}>
                    <Badge variant="neutral">{tag}</Badge>
                  </Link>
                ))}
              </div>
              <div className="space-y-1">
                <p className="text-xs text-muted">{formatDate(post.publishedAt)}</p>
                <h3 className="text-xl font-semibold">{post.title}</h3>
              </div>
              <p className="text-sm text-muted">{post.excerpt}</p>
              <Link className="text-sm text-(--primary) hover:underline" href={`/blog/${post.slug}`}>
                Read article
              </Link>
            </Card>
          </motion.div>
        ))}
      </div>

      {!posts.length ? <p className="text-muted">No published posts yet.</p> : null}
    </section>
  );
}
