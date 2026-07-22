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
        subtitle="From Condominium Portal and Afrirentals to UseIt, PawCare, and ApkaOS — personal products and client platforms across marketplaces, edtech, healthcare, and SaaS."
        stats={["MERN stack", "React Native", "Cloud integrations"]}
        primaryCta={{ label: "Contact Me", href: "/contact", variant: "primary" }}
        secondaryCta={{ label: "See Case Studies", href: "/case-studies", variant: "secondary" }}
      />
      <WorkSection />
      <TechStackSection />
    </>
  );
}
