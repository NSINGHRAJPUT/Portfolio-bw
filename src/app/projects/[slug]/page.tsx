import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/shared/json-ld";
import { projectSeoEntries } from "@/config/seo-content";
import { seoConfig } from "@/config/seo";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getCreativeWorkSchema } from "@/lib/seo/schema";

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectSeoEntries.map((entry) => ({ slug: entry.slug }));
}

export const revalidate = 3600;

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectSeoEntries.find((item) => item.slug === slug);
  if (!project) return {};

  return buildPageMetadata({
    title: project.title,
    description: project.summary,
    path: `/projects/${project.slug}`,
    keywords: project.tags,
  });
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projectSeoEntries.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="container-safe py-16">
      <JsonLd
        data={getCreativeWorkSchema({
          title: project.title,
          description: project.summary,
          url: `${seoConfig.siteUrl}/projects/${project.slug}`,
          type: "Project",
        })}
      />
      <h1 className="mb-3 text-4xl font-semibold">{project.title}</h1>
      <p className="mb-6 text-sm text-muted">{project.summary}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span className="rounded-(--radius-pill) border border-(--border) px-3 py-1 text-xs" key={tag}>
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}
