import Link from "next/link";
import { notFound } from "next/navigation";

import { BlogArticleBody } from "@/components/blog/blog-article-body";
import { Badge } from "@/components/ui/badge";
import { getAdminPostById } from "@/lib/blog/queries";

interface Props {
  params: Promise<{ id: string }>;
}

function formatDate(value?: string) {
  if (!value) return "";
  return new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric" }).format(new Date(value));
}

export default async function AdminBlogPreviewPage({ params }: Props) {
  const { id } = await params;
  const post = await getAdminPostById(id);

  if (!post) notFound();

  return (
    <div className="mx-auto max-w-3xl space-y-6 py-4">
      <div className="flex items-center gap-4">
        <Link className="text-sm text-[var(--primary)] hover:underline" href="/admin/blog">
          ← Back to posts
        </Link>
        <Badge variant={post.status === "published" ? "primary" : "neutral"}>{post.status} · preview</Badge>
        <Link className="ml-auto text-sm text-[var(--primary)] hover:underline" href={`/admin/blog/${id}/edit`}>
          Edit
        </Link>
      </div>

      <div className="space-y-3">
        <p className="text-sm text-white/50">
          {formatDate(post.publishedAt)} · {post.authorName}
        </p>
        <h1 className="text-4xl font-semibold md:text-5xl">{post.title}</h1>
        <p className="text-lg text-white/60">{post.excerpt}</p>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span className="rounded-full border border-white/10 px-3 py-1 text-xs" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      {post.featuredImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img alt="" className="w-full rounded-2xl border border-white/10 object-cover" src={post.featuredImage} />
      ) : null}

      <BlogArticleBody content={post.body} />
    </div>
  );
}
