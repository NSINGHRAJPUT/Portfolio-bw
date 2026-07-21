import { PageHero } from "@/components/sections/page-hero";
import { PricingTiersSection } from "@/components/sections/pricing-tiers-section";
import { createIaMetadata } from "@/config/information-architecture";

export const metadata = createIaMetadata("pricing");

export default function PricingPage() {
  return (
    <>
      <PageHero
        kicker="Pricing"
        title="Transparent engagement models."
        subtitle="Choose a tier that matches your project scope — from MVP builds to full-stack delivery and team lead engagements."
        stats={["MVP build", "Full stack project", "Team lead retainer"]}
        primaryCta={{ label: "Estimate Project", href: "/estimate-project", variant: "primary" }}
        secondaryCta={{ label: "Contact Me", href: "/contact", variant: "secondary" }}
      />
      <PricingTiersSection />
    </>
  );
}
