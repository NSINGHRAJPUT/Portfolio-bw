import { PageHero } from "@/components/sections/page-hero";
import { AboutPrinciplesSection } from "@/components/sections/about-principles-section";
import { createIaMetadata } from "@/config/information-architecture";
import { ProcessSection } from "@/components/sections/process-section";

export const metadata = createIaMetadata("about");

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About NSRGFX"
        title="A premium AI + product studio mindset."
        subtitle="Strategy, UX systems, and AI engineering—built to ship fast without redesign debt."
        stats={["Trust-first delivery", "AI-native execution", "Performance-aware"]}
        primaryCta={{ label: "Book Meeting", href: "/book-meeting", variant: "primary" }}
        secondaryCta={{ label: "View Services", href: "/services", variant: "secondary" }}
      />
      <AboutPrinciplesSection />
      <ProcessSection />
    </>
  );
}
