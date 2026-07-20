import { PageHero } from "@/components/sections/page-hero";
import { CaseStudiesListSection } from "@/components/sections/case-studies-list-section";
import { JsonLd } from "@/components/shared/json-ld";
import { createIaMetadata } from "@/config/information-architecture";
import { seoConfig } from "@/config/seo";

export const metadata = createIaMetadata("caseStudies");

export default function CaseStudiesPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Case Studies",
          url: `${seoConfig.siteUrl}/case-studies`,
          description: "Outcome-focused case studies from NSRGFX.",
        }}
      />
      <PageHero
        kicker="Case Studies"
        title="Proof you can measure."
        subtitle="Outcome-focused delivery with cinematic UX, reliable AI orchestration, and performance-aware engineering."
        stats={["Measurable lift", "Quality gates", "Fast iteration"]}
        primaryCta={{ label: "Book Meeting", href: "/book-meeting", variant: "primary" }}
        secondaryCta={{ label: "Explore Projects", href: "/projects", variant: "secondary" }}
      />
      <CaseStudiesListSection />
    </>
  );
}
