import dynamic from "next/dynamic";
import { Suspense } from "react";

export const revalidate = 3600;

const HeroSection = dynamic(() =>
  import("@/components/sections/hero-section").then((mod) => mod.HeroSection),
);
const FeaturesGridSection = dynamic(() =>
  import("@/components/sections/features-grid-section").then(
    (mod) => mod.FeaturesGridSection,
  ),
);
const HistoryStatsSection = dynamic(() =>
  import("@/components/sections/history-stats-section").then(
    (mod) => mod.HistoryStatsSection,
  ),
);
const PricingLandingSection = dynamic(() =>
  import("@/components/sections/pricing-landing-section").then(
    (mod) => mod.PricingLandingSection,
  ),
);
const FaqSection = dynamic(() =>
  import("@/components/sections/faq-section").then((mod) => mod.FaqSection),
);
const ContactCta = dynamic(() =>
  import("@/components/sections/contact-cta").then((mod) => mod.ContactCta),
);

function SectionSkeleton() {
  return (
    <section className="container-safe py-16">
      <div className="w-full">
        <div className="glass h-36 animate-pulse rounded-2xl" />
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Suspense fallback={<SectionSkeleton />}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <FeaturesGridSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <HistoryStatsSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <PricingLandingSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <FaqSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <ContactCta />
      </Suspense>
    </>
  );
}
