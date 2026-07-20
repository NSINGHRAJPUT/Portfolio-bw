import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BlogArticleBody } from "@/components/blog/blog-article-body";
import { JsonLd } from "@/components/shared/json-ld";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getPublishedPostBySlug, getRelatedPosts } from "@/lib/blog/queries";
import { connectToDatabase } from "@/lib/db/connect";
import { BlogPostModel } from "@/lib/db/models/BlogPost";
import { seoConfig } from "@/config/seo";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getArticleSchema } from "@/lib/seo/schema";

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

export const revalidate = 3600;

export async function generateStaticParams() {
  try {
    await connectToDatabase();
    const posts = await BlogPostModel.find({ status: "published" }).select("slug").lean<{ slug: string }[]>();
    return posts.map((post) => ({ slug: post.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getPublishedPostBySlug(slug);
  if (!article) return {};

  return buildPageMetadata({
    title: article.seoTitle || article.title,
    description: article.seoDescription || article.excerpt,
    path: `/blog/${article.slug}`,
    type: "article",
    keywords: article.tags,
    image: article.ogImage || article.featuredImage,
  });
}

function formatDate(value?: string) {
  if (!value) return "";
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const article = await getPublishedPostBySlug(slug);

  if (!article) {
    notFound();
  }

  const related = await getRelatedPosts(article.slug, article.tags);
  const articleUrl = `${seoConfig.siteUrl}/blog/${article.slug}`;
  const imageUrl = article.ogImage || article.featuredImage;

  return (
    <section className="container-safe py-16">
      <JsonLd
        data={getArticleSchema({
          title: article.title,
          description: article.excerpt,
          url: articleUrl,
          publishedAt: article.publishedAt ?? article.createdAt,
          updatedAt: article.updatedAt,
          image: imageUrl,
        })}
      />

      <div className="mb-8">
        <Link className="text-sm text-[var(--primary)] hover:underline" href="/blog">
          ← Back to blog
        </Link>
      </div>

      <div className="mx-auto max-w-3xl space-y-6">
        <div className="space-y-3">
          <p className="text-sm text-muted">
            {formatDate(article.publishedAt)} · {article.authorName}
          </p>
          <h1 className="text-4xl font-semibold md:text-5xl">{article.title}</h1>
          <p className="text-lg text-muted">{article.excerpt}</p>
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <Link href={`/blog?tag=${encodeURIComponent(tag)}`} key={tag}>
                <span className="rounded-(--radius-pill) border border-(--border) px-3 py-1 text-xs hover:border-[var(--primary)]/40">
                  {tag}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {article.featuredImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            alt=""
            className="w-full rounded-2xl border border-white/10 object-cover"
            src={article.featuredImage}
          />
        ) : null}

        <BlogArticleBody content={article.body} />
      </div>

      {related.length ? (
        <div className="mx-auto mt-16 max-w-3xl space-y-4">
          <h2 className="text-2xl font-semibold">Related posts</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {related.map((post) => (
              <Card className="space-y-2" key={post.id}>
                <h3 className="font-semibold">{post.title}</h3>
                <Link className="text-sm text-[var(--primary)] hover:underline" href={`/blog/${post.slug}`}>
                  Read article
                </Link>
              </Card>
            ))}
          </div>
        </div>
      ) : null}

      <div className="mx-auto mt-16 max-w-3xl">
        <Card className="flex flex-col items-start justify-between gap-4 p-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-xl font-semibold">Ready to build something premium?</h2>
            <p className="text-sm text-muted">Partner with NSRGFX for AI strategy, UX, and engineering.</p>
          </div>
          <Link href="/book-meeting">
            <Button>Book Discovery Call</Button>
          </Link>
        </Card>
      </div>
    </section>
  );
}
