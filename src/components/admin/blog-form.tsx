"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { ImageUpload } from "@/components/admin/image-upload";
import { RichEditor } from "@/components/admin/rich-editor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { BlogPostDTO } from "@/types/blog";

interface BlogFormProps {
  mode: "create" | "edit";
  initial?: BlogPostDTO;
}

interface FormState {
  title: string;
  slug: string;
  excerpt: string;
  body: string;
  tags: string;
  status: "draft" | "published";
  featuredImage: string;
  seoTitle: string;
  seoDescription: string;
  ogImage: string;
  authorName: string;
  publishedAt: string;
}

function toFormState(post?: BlogPostDTO): FormState {
  return {
    title: post?.title ?? "",
    slug: post?.slug ?? "",
    excerpt: post?.excerpt ?? "",
    body: post?.body ?? "",
    tags: post?.tags.join(", ") ?? "",
    status: post?.status ?? "draft",
    featuredImage: post?.featuredImage ?? "",
    seoTitle: post?.seoTitle ?? "",
    seoDescription: post?.seoDescription ?? "",
    ogImage: post?.ogImage ?? "",
    authorName: post?.authorName ?? "Neeraj Singh Rajput",
    publishedAt: post?.publishedAt ? post.publishedAt.slice(0, 16) : "",
  };
}

export function BlogForm({ mode, initial }: BlogFormProps) {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(() => toFormState(initial));
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function regenerateSlug() {
    const slug = form.title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
    updateField("slug", slug);
  }

  async function handleSubmit(nextStatus?: "draft" | "published") {
    setSaving(true);
    setError("");

    const payload = {
      title: form.title,
      slug: form.slug || undefined,
      excerpt: form.excerpt,
      body: form.body,
      tags: form.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
      status: nextStatus ?? form.status,
      featuredImage: form.featuredImage,
      seoTitle: form.seoTitle,
      seoDescription: form.seoDescription,
      ogImage: form.ogImage,
      authorName: form.authorName,
      publishedAt: form.publishedAt ? new Date(form.publishedAt).toISOString() : "",
    };

    const url = mode === "create" ? "/api/admin/blog" : `/api/admin/blog/${initial?.id}`;
    const method = mode === "create" ? "POST" : "PUT";

    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error?.fieldErrors ? JSON.stringify(data.error.fieldErrors) : data.error ?? "Save failed");
      }

      router.push("/admin/blog");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Save failed");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete() {
    if (!initial?.id) return;
    if (!confirm(`Delete "${initial.title}" permanently?`)) return;

    setSaving(true);
    await fetch(`/api/admin/blog/${initial.id}`, { method: "DELETE" });
    router.push("/admin/blog");
    router.refresh();
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">{mode === "create" ? "New Blog Post" : "Edit Blog Post"}</h1>
          <p className="text-sm text-white/50">Write in Markdown. Save drafts or publish when ready.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {mode === "edit" ? (
            <Button onClick={handleDelete} type="button" variant="ghost">
              Delete
            </Button>
          ) : null}
        </div>
      </div>

      {error ? <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">{error}</p> : null}

        <div className="grid gap-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80">Title</label>
              <Input onChange={(e) => updateField("title", e.target.value)} value={form.title} />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80">Slug</label>
              <div className="flex gap-2">
                <Input onChange={(e) => updateField("slug", e.target.value)} value={form.slug} />
                <Button onClick={regenerateSlug} type="button" variant="secondary">
                  Regenerate
                </Button>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-white/80">Excerpt</label>
            <Textarea onChange={(e) => updateField("excerpt", e.target.value)} rows={3} value={form.excerpt} />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-white/80">Body</label>
            <RichEditor onChange={(html) => updateField("body", html)} value={form.body} />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80">Tags (comma separated)</label>
              <Input onChange={(e) => updateField("tags", e.target.value)} placeholder="AI, Product, UX" value={form.tags} />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80">Author</label>
              <Input onChange={(e) => updateField("authorName", e.target.value)} value={form.authorName} />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80">Status</label>
              <select
                className="h-10 w-full rounded-[var(--radius-md)] border border-[var(--border)] bg-surface px-3 text-sm"
                onChange={(e) => updateField("status", e.target.value as "draft" | "published")}
                value={form.status}
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80">Published at</label>
              <Input onChange={(e) => updateField("publishedAt", e.target.value)} type="datetime-local" value={form.publishedAt} />
            </div>
          </div>

          <ImageUpload label="Featured image" onChange={(url) => updateField("featuredImage", url)} value={form.featuredImage} />
          <ImageUpload label="OG image" onChange={(url) => updateField("ogImage", url)} value={form.ogImage} />

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80">SEO title</label>
              <Input onChange={(e) => updateField("seoTitle", e.target.value)} value={form.seoTitle} />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80">SEO description</label>
              <Textarea onChange={(e) => updateField("seoDescription", e.target.value)} rows={3} value={form.seoDescription} />
            </div>
          </div>
        </div>

      <div className="flex flex-wrap gap-3">
        <Button disabled={saving} onClick={() => handleSubmit("draft")} type="button" variant="secondary">
          Save draft
        </Button>
        <Button disabled={saving} onClick={() => handleSubmit("published")} type="button">
          {saving ? "Saving..." : "Publish"}
        </Button>
      </div>
    </div>
  );
}
