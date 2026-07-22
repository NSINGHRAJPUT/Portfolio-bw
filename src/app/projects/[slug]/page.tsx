import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/shared/json-ld";
import { Button } from "@/components/ui/button";
import { getProjectBySlug, personalProducts, portfolioProjects } from "@/config/projects";
import { seoConfig } from "@/config/seo";
import { getProjectImage } from "@/lib/projects/images";
import { buildPageMetadata } from "@/lib/seo/metadata";
import {
  getCreativeWorkSchema,
  getSoftwareApplicationSchema,
} from "@/lib/seo/schema";

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

  const image = getProjectImage(project.slug);

  return buildPageMetadata({
    title: project.title,
    description: project.summary,
    path: `/projects/${project.slug}`,
    keywords: [
      ...project.tags,
      ...(project.category === "personal" ? ["personal product", "buy software", "NSRGFX"] : []),
    ],
    image,
  });
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const image = getProjectImage(project.slug);
  const pageUrl = `${seoConfig.siteUrl}/projects/${project.slug}`;
  const isPersonal = project.category === "personal";
  const relatedProducts = personalProducts
    .filter((entry) => entry.slug !== project.slug)
    .slice(0, 3);

  return (
    <section className="container-safe py-16">
      <JsonLd
        data={
          isPersonal
            ? getSoftwareApplicationSchema({
                title: project.title,
                description: project.summary,
                url: project.url ?? pageUrl,
                pageUrl,
                image,
              })
            : getCreativeWorkSchema({
                title: project.title,
                description: project.summary,
                url: pageUrl,
                type: "Project",
              })
        }
      />

      <div className="mb-8 flex flex-wrap items-center gap-4">
        <Link
          className="text-sm text-[var(--primary)] hover:underline"
          href={isPersonal ? "/projects?category=personal" : "/projects?category=company"}
        >
          ← Back to {isPersonal ? "personal products" : "company work"}
        </Link>
        <Link className="text-sm text-white/45 hover:text-white/70 hover:underline" href="/projects">
          All projects
        </Link>
      </div>

      <div className="mx-auto max-w-3xl space-y-8">
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            alt=""
            className="aspect-[16/9] w-full rounded-2xl border border-white/10 object-cover"
            src={image}
          />
        ) : null}

        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 px-3 py-1 text-xs text-[var(--primary)]">
              {isPersonal ? "Personal Product" : "Company Work"}
            </span>
            <p className="text-sm text-[var(--primary)]">{project.period}</p>
          </div>
          <h1 className="text-4xl font-semibold md:text-5xl">{project.title}</h1>
          <p className="text-sm text-white/50">{project.company}</p>
          <p className="text-lg text-white/70">{project.description}</p>
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

        {isPersonal ? (
          <div className="glass space-y-4 rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-semibold">Interested in this product?</h2>
            <p className="text-sm text-white/60">
              Ask about purchasing, white-labeling, or customizing this product for your business.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact">
                <Button>Contact about this product</Button>
              </Link>
              <Link href="/estimate-project">
                <Button variant="secondary">Get a custom estimate</Button>
              </Link>
            </div>
          </div>
        ) : null}

        {isPersonal && relatedProducts.length > 0 ? (
          <div className="space-y-4 border-t border-white/10 pt-8">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-lg font-semibold">More personal products</h2>
              <Link
                className="text-sm text-[var(--primary)] hover:underline"
                href="/projects?category=personal"
              >
                View all
              </Link>
            </div>
            <ul className="space-y-3">
              {relatedProducts.map((entry) => (
                <li key={entry.slug}>
                  <Link
                    className="block rounded-xl border border-white/8 px-4 py-3 transition hover:border-[var(--primary)]/30"
                    href={`/projects/${entry.slug}`}
                  >
                    <p className="font-medium text-white">{entry.title}</p>
                    <p className="mt-1 text-xs text-white/50">{entry.summary}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
}
