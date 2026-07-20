import { PageHero } from "@/components/sections/page-hero";
import { AiCapabilitiesSection } from "@/components/sections/ai-capabilities-section";
import { AiExperiencesSection } from "@/components/sections/ai-experiences-section";
import { createIaMetadata } from "@/config/information-architecture";

export const metadata = createIaMetadata("aiSolutions");

export default function AiSolutionsPage() {
  return (
    <>
      <PageHero
        kicker="AI Solutions"
        title="AI-native systems, shipped with premium UX."
        subtitle="Agentic workflows, retrieval intelligence, and automation layers—designed for reliability, speed, and conversion."
        stats={["Guarded outputs", "Structured artifacts", "Scalable workflows"]}
        primaryCta={{ label: "Estimate Project", href: "/estimate-project", variant: "primary" }}
        secondaryCta={{ label: "Book Meeting", href: "/book-meeting", variant: "secondary" }}
      />
      <AiCapabilitiesSection />
      <AiExperiencesSection />
    </>
  );
}
