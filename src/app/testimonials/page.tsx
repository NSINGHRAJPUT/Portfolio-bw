import { PageHero } from "@/components/sections/page-hero";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { NumbersSection } from "@/components/sections/numbers-section";
import { createIaMetadata } from "@/config/information-architecture";

export const metadata = createIaMetadata("testimonials");

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        kicker="Testimonials"
        title="Premium trust signals."
        subtitle="Client outcomes, stakeholder confidence, and delivery reliability—captured with real detail."
        stats={["Outcome clarity", "Reliable delivery", "Premium craft"]}
        primaryCta={{ label: "Book Meeting", href: "/book-meeting", variant: "primary" }}
        secondaryCta={{ label: "View Pricing", href: "/pricing", variant: "secondary" }}
      />
      <TestimonialsSection />
      <NumbersSection />
    </>
  );
}
