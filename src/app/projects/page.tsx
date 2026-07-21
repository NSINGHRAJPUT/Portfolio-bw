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
        title="Real products built and deployed."
        subtitle="From Carbon Patent Group and CartoBike at Luminoguru to Raffily, Carplake, and Condominium Portal — full-stack delivery across legal tech, marketplaces, fintech, and enterprise platforms."
        stats={["MERN stack", "React Native", "Cloud integrations"]}
        primaryCta={{ label: "Contact Me", href: "/contact", variant: "primary" }}
        secondaryCta={{ label: "See Case Studies", href: "/case-studies", variant: "secondary" }}
      />
      <WorkSection />
      <TechStackSection />
    </>
  );
}
