import { PageHero } from "@/components/sections/page-hero";
import { PricingTiersSection } from "@/components/sections/pricing-tiers-section";
import { createIaMetadata } from "@/config/information-architecture";

export const metadata = createIaMetadata("pricing");

export default function PricingPage() {
  return (
    <>
      <PageHero
        kicker="Pricing"
        title="Transparent premium engagement models."
        subtitle="Choose a tier that matches your timeline and delivery confidence needs—then we ship with quality gates."
        stats={["Discovery + plan", "Production build", "Systems support"]}
        primaryCta={{ label: "Estimate Project", href: "/estimate-project", variant: "primary" }}
        secondaryCta={{ label: "Book Meeting", href: "/book-meeting", variant: "secondary" }}
      />
      <PricingTiersSection />
    </>
  );
}
