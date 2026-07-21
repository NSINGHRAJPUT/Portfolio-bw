import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/shared/json-ld";
import { getProjectBySlug, portfolioProjects } from "@/config/projects";
import { seoConfig } from "@/config/seo";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getCreativeWorkSchema } from "@/lib/seo/schema";

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return portfolioProjects.map((entry) => ({ slug: entry.slug }));
}

export const revalidate = 3600;

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
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
  const project = getProjectBySlug(slug);

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

      <div className="mb-8">
        <Link className="text-sm text-[var(--primary)] hover:underline" href="/projects">
          ← Back to projects
        </Link>
      </div>

      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-3">
          <p className="text-sm text-[var(--primary)]">{project.period}</p>
          <h1 className="text-4xl font-semibold md:text-5xl">{project.title}</h1>
          <p className="text-sm text-muted">{project.company}</p>
          <p className="text-lg text-muted">{project.description}</p>
          {project.url ? (
            <a
              className="inline-flex items-center gap-2 text-sm text-[var(--primary)] hover:underline"
              href={project.url}
              rel="noopener noreferrer"
              target="_blank"
            >
              Visit live site <ArrowUpRight className="h-4 w-4" />
            </a>
          ) : null}
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              className="rounded-(--radius-pill) border border-(--border) px-3 py-1 text-xs"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="space-y-6">
          {project.highlights.map((section) => (
            <div className="glass space-y-3 rounded-[var(--radius-xl)] p-6" key={section.label}>
              <h2 className="text-lg font-semibold">{section.label}</h2>
              <ul className="space-y-2 text-sm text-muted">
                {section.items.map((item) => (
                  <li className="flex gap-2" key={item}>
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
