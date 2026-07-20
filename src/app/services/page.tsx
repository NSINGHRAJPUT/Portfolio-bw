import { PageHero } from "@/components/sections/page-hero";
import { ServicesSection } from "@/components/sections/services-section";
import { FaqSection } from "@/components/sections/faq-section";
import { createIaMetadata } from "@/config/information-architecture";

export const metadata = createIaMetadata("services");

export default function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="Services"
        title="Premium delivery across AI strategy, UX, and engineering."
        subtitle="Choose a capability path. NSRGFX ships with clear outcomes, performance budgets, and guarded AI systems."
        stats={["Outcome-first", "Accessible UX", "Scalable architecture"]}
        primaryCta={{ label: "Estimate Project", href: "/estimate-project", variant: "primary" }}
        secondaryCta={{ label: "Book Meeting", href: "/book-meeting", variant: "secondary" }}
      />
      <ServicesSection />
      <FaqSection />
    </>
  );
}
