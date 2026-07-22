export interface PricingTier {
  key: string;
  name: string;
  description: string;
  price: string;
  bestFor: string[];
  ctaLabel: string;
}

export const pricingTiers: PricingTier[] = [
  {
    key: "foundation",
    name: "MVP Build",
    description: "Scope, wireframe, and build a minimum viable product.",
    price: "From $160",
    bestFor: ["Fast validation", "Core features", "Quick launch"],
    ctaLabel: "Estimate Project",
  },
  {
    key: "launch",
    name: "Full Stack",
    description: "Design and build a production-grade web or mobile application.",
    price: "From $500",
    bestFor: ["Responsive UI", "REST APIs", "Cloud deployment"],
    ctaLabel: "Book Meeting",
  },
  {
    key: "systems",
    name: "Team Lead",
    description: "Lead full-stack delivery with CI/CD, architecture, and team coordination.",
    price: "From $900 / mo",
    bestFor: ["CI/CD pipelines", "Code review", "Ongoing support"],
    ctaLabel: "Get in Touch",
  },
];
