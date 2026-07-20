import { PageHero } from "@/components/sections/page-hero";
import { TechStackSection } from "@/components/sections/tech-stack-section";
import { WorkSection } from "@/components/sections/work-section";
import { createIaMetadata } from "@/config/information-architecture";

export const metadata = createIaMetadata("projects");

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        kicker="Projects"
        title="Launch stories with measurable outcomes."
        subtitle="From AI copilots to premium dashboards—every project is shipped with quality gates and scalable execution."
        stats={["Modern stack", "Premium UI craft", "AI-native logic"]}
        primaryCta={{ label: "Book Meeting", href: "/book-meeting", variant: "primary" }}
        secondaryCta={{ label: "See Case Studies", href: "/case-studies", variant: "secondary" }}
      />
      <WorkSection />
      <TechStackSection />
    </>
  );
}
