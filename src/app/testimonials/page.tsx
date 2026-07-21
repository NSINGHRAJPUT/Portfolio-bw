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
        title="Trusted by teams I've worked with."
        subtitle="Feedback from engineering managers and tech leads across Luminoguru, Webguruz, and Anthem Infotech."
        stats={["Reliable delivery", "Clean code", "Team leadership"]}
        primaryCta={{ label: "Contact Me", href: "/contact", variant: "primary" }}
        secondaryCta={{ label: "View Pricing", href: "/pricing", variant: "secondary" }}
      />
      <TestimonialsSection />
      <NumbersSection />
    </>
  );
}
