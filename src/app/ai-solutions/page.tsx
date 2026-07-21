import { PageHero } from "@/components/sections/page-hero";
import { AiCapabilitiesSection } from "@/components/sections/ai-capabilities-section";
import { AiExperiencesSection } from "@/components/sections/ai-experiences-section";
import { createIaMetadata } from "@/config/information-architecture";

export const metadata = createIaMetadata("aiSolutions");

export default function AiSolutionsPage() {
  return (
    <>
      <PageHero
        kicker="Technical Solutions"
        title="APIs, integrations, and cloud infrastructure."
        subtitle="RESTful APIs, payment gateways, Auth0, Twilio, Firebase, Azure, and AWS — integrated for production-scale applications."
        stats={["REST APIs", "Payment gateways", "Cloud deployment"]}
        primaryCta={{ label: "Estimate Project", href: "/estimate-project", variant: "primary" }}
        secondaryCta={{ label: "Contact Me", href: "/contact", variant: "secondary" }}
      />
      <AiCapabilitiesSection />
      <AiExperiencesSection />
    </>
  );
}
