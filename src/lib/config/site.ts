import { NavItem, Project, Service } from "@/types";

export const siteConfig = {
  name: "NSRGFX",
  title: "NSRGFX - AI Product Design and Engineering",
  description:
    "Premium AI-first freelancer portfolio for high-performance product design, automation, and web engineering.",
  url: "https://www.nsrgfx.in",
  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ] satisfies NavItem[],
  services: [
    {
      title: "AI Product Strategy",
      description:
        "From problem framing to agentic workflows, I design AI-native products users trust and teams can ship.",
      outcomes: ["Faster validation cycles", "Lower feature risk"],
    },
    {
      title: "Premium UI Engineering",
      description:
        "Pixel-precise interfaces with world-class motion, accessibility, and scalable frontend architecture.",
      outcomes: ["Higher conversion quality", "Consistent design system"],
    },
    {
      title: "Automation and Integrations",
      description:
        "Operational automations connecting product, growth, and support with robust data and observability.",
      outcomes: ["Reduced manual operations", "Reliable delivery workflows"],
    },
  ] satisfies Service[],
  projects: [
    {
      name: "Adaptive Revenue Copilot",
      summary:
        "AI growth assistant that helped a SaaS team cut campaign analysis time from hours to minutes.",
      tags: ["OpenAI", "Supabase", "Next.js"],
    },
    {
      name: "Founder OS Dashboard",
      summary:
        "Unified command center with forecasts, user behavior signals, and product health in one interface.",
      tags: ["PostgreSQL", "React Query", "Framer Motion"],
    },
    {
      name: "Autonomous Support Agent",
      summary:
        "Multi-step support workflow orchestration with confidence scoring and human handoff safeguards.",
      tags: ["Zustand", "Edge API", "Analytics"],
    },
  ] satisfies Project[],
};
