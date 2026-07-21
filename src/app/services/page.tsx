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
        title="Full-stack development across web, mobile, and cloud."
        subtitle="From MERN stack web apps to React Native mobile — I deliver with Node.js, NestJS, Fastify, Bun, JWT auth, REST APIs, payment integrations, and CI/CD pipelines."
        stats={["MERN stack", "React Native", "Cloud & payments"]}
        primaryCta={{ label: "Estimate Project", href: "/estimate-project", variant: "primary" }}
        secondaryCta={{ label: "Contact Me", href: "/contact", variant: "secondary" }}
      />
      <ServicesSection />
      <FaqSection />
    </>
  );
}
