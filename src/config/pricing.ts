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
    name: "Foundation",
    description: "AI + UX discovery and a premium execution plan.",
    price: "From $1,500",
    bestFor: ["Fast validation", "Clear scoping", "Risk reduction"],
    ctaLabel: "Estimate Project",
  },
  {
    key: "launch",
    name: "Launch",
    description: "Design + build a production-grade premium experience.",
    price: "From $4,800",
    bestFor: ["High-conversion UI", "Scalable architecture", "Quality gates"],
    ctaLabel: "Book Meeting",
  },
  {
    key: "systems",
    name: "Systems",
    description: "Ongoing AI-native product optimization and engineering support.",
    price: "From $9,500 / mo",
    bestFor: ["Iteration loop", "Automation + integrations", "Performance optimization"],
    ctaLabel: "Talk to NSRGFX",
  },
];

