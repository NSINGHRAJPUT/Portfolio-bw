import { PageHero } from "@/components/sections/page-hero";
import { FaqSection } from "@/components/sections/faq-section";
import { createIaMetadata } from "@/config/information-architecture";

export const metadata = createIaMetadata("faq");

export default function FaqPage() {
  return (
    <>
      <PageHero
        kicker="FAQ"
        title="Everything you need to know."
        subtitle="Clear answers on my stack, project timelines, engagement models, and what to expect when working together."
        stats={["MERN & React Native", "Fast scoping", "Production delivery"]}
        primaryCta={{ label: "Estimate Project", href: "/estimate-project", variant: "primary" }}
        secondaryCta={{ label: "Contact Me", href: "/contact", variant: "secondary" }}
      />
      <FaqSection />
    </>
  );
}
