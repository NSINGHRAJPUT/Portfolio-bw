import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/shared/json-ld";
import { caseStudySeoEntries } from "@/config/seo-content";
import { seoConfig } from "@/config/seo";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getCreativeWorkSchema } from "@/lib/seo/schema";

interface CaseStudyDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudySeoEntries.map((entry) => ({ slug: entry.slug }));
}

export const revalidate = 3600;

export async function generateMetadata({ params }: CaseStudyDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = caseStudySeoEntries.find((item) => item.slug === slug);
  if (!caseStudy) return {};

  return buildPageMetadata({
    title: caseStudy.title,
    description: caseStudy.summary,
    path: `/case-studies/${caseStudy.slug}`,
    keywords: [caseStudy.industry, "Case Study"],
  });
}

export default async function CaseStudyDetailPage({ params }: CaseStudyDetailPageProps) {
  const { slug } = await params;
  const caseStudy = caseStudySeoEntries.find((item) => item.slug === slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <section className="container-safe py-16">
      <JsonLd
        data={getCreativeWorkSchema({
          title: caseStudy.title,
          description: caseStudy.summary,
          url: `${seoConfig.siteUrl}/case-studies/${caseStudy.slug}`,
          type: "CaseStudy",
        })}
      />
      <h1 className="mb-3 text-4xl font-semibold">{caseStudy.title}</h1>
      <p className="text-sm text-muted">{caseStudy.summary}</p>
    </section>
  );
}
