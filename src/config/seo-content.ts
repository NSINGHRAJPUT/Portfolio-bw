export interface BlogSeoEntry {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
}

export interface ProjectSeoEntry {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
}

export interface CaseStudySeoEntry {
  slug: string;
  title: string;
  summary: string;
  industry: string;
}

export const blogSeoEntries: BlogSeoEntry[] = [];

export const projectSeoEntries: ProjectSeoEntry[] = [
  {
    slug: "adaptive-revenue-copilot",
    title: "Adaptive Revenue Copilot",
    summary: "AI growth assistant that compressed campaign analysis from hours to minutes.",
    tags: ["OpenAI", "Supabase", "Next.js"],
  },
  {
    slug: "founder-os-dashboard",
    title: "Founder OS Dashboard",
    summary: "Unified command center for growth, product health, and forecast intelligence.",
    tags: ["PostgreSQL", "React Query", "Framer Motion"],
  },
];

export const caseStudySeoEntries: CaseStudySeoEntry[] = [
  {
    slug: "saas-growth-intelligence",
    title: "SaaS Growth Intelligence Transformation",
    summary: "Redesigned growth operations with AI-assisted experimentation and decision support.",
    industry: "SaaS",
  },
  {
    slug: "commerce-conversion-acceleration",
    title: "Commerce Conversion Acceleration",
    summary: "Improved conversion quality through premium UX and AI-driven funnel optimizations.",
    industry: "E-commerce",
  },
];
