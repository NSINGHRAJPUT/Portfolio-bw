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
          description: "Professional experience and delivery stories from Neeraj Singh Rajput.",
        }}
      />
      <PageHero
        kicker="Case Studies"
        title="Experience across companies and domains."
        subtitle="Full-stack delivery at Luminoguru, React Native leadership at Webguruz, and Next.js + cloud systems at Anthem Infotech."
        stats={["Enterprise platforms", "Mobile apps", "Payment systems"]}
        primaryCta={{ label: "Contact Me", href: "/contact", variant: "primary" }}
        secondaryCta={{ label: "Explore Projects", href: "/projects", variant: "secondary" }}
      />
      <CaseStudiesListSection />
    </>
  );
}
