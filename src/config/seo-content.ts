import { portfolioProjects } from "@/config/projects";

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

export const projectSeoEntries: ProjectSeoEntry[] = portfolioProjects.map((project) => ({
  slug: project.slug,
  title: project.title,
  summary: project.summary,
  tags: project.tags,
}));

export const caseStudySeoEntries: CaseStudySeoEntry[] = [
  {
    slug: "luminoguru-mern-platforms",
    title: "Multi-Platform Full Stack Delivery at Luminoguru",
    summary:
      "Developed full-stack applications including Carbon Patent Group, CartoBike, School Management, Tattoo Generation, and more using MERN stack and PostgreSQL.",
    industry: "Enterprise SaaS",
  },
  {
    slug: "webguruz-react-native",
    title: "React Native Lead with Auth0 & Twilio",
    summary:
      "Built React Native apps with Google Analytics, Auth0 authentication, Twilio integration, and Hebrew RTL support from Figma designs.",
    industry: "Mobile Apps",
  },
  {
    slug: "anthem-payment-cloud",
    title: "Next.js, Payments & Azure CI/CD at Anthem",
    summary:
      "Led full-stack operations with Next.js, JWT auth, payment gateway integrations, and automated CI/CD pipelines through Azure DevOps.",
    industry: "FinTech & Cloud",
  },
];
