import { PageHero } from "@/components/sections/page-hero";
import { AboutPrinciplesSection } from "@/components/sections/about-principles-section";
import { createIaMetadata } from "@/config/information-architecture";
import { ProcessSection } from "@/components/sections/process-section";

export const metadata = createIaMetadata("about");

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About Me"
        title="Full Stack Developer with a production-first mindset."
        subtitle="MERN stack, React Native, Next.js, and cloud integrations — built to ship fast without cutting corners."
        stats={["4+ years experience", "Team lead roles", "Production delivery"]}
        primaryCta={{ label: "Contact Me", href: "/contact", variant: "primary" }}
        secondaryCta={{ label: "View Services", href: "/services", variant: "secondary" }}
      />
      <AboutPrinciplesSection />
      <ProcessSection />
    </>
  );
}
