import { PageHero } from "@/components/sections/page-hero";
import { FaqSection } from "@/components/sections/faq-section";
import { createIaMetadata } from "@/config/information-architecture";

export const metadata = createIaMetadata("faq");

export default function FaqPage() {
  return (
    <>
      <PageHero
        kicker="FAQ"
        title="Everything you need to decide."
        subtitle="Clear answers on AI-native delivery, timelines, engagement models, and expected outcomes."
        stats={["Guarded AI workflows", "Fast discovery", "Performance-aware build"]}
        primaryCta={{ label: "Estimate Project", href: "/estimate-project", variant: "primary" }}
        secondaryCta={{ label: "Book Meeting", href: "/book-meeting", variant: "secondary" }}
      />
      <FaqSection />
    </>
  );
}
