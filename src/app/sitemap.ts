import type { MetadataRoute } from "next";

import { portfolioProjects } from "@/config/projects";
import { caseStudySeoEntries } from "@/config/seo-content";
import { getPublishedSlugsForSitemap } from "@/lib/blog/queries";
import { seoConfig } from "@/config/seo";

export const revalidate = 3600;

const staticRoutes: Array<{
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}> = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/about", priority: 0.9, changeFrequency: "monthly" },
  { path: "/projects", priority: 0.95, changeFrequency: "weekly" },
  { path: "/services", priority: 0.85, changeFrequency: "weekly" },
  { path: "/case-studies", priority: 0.8, changeFrequency: "weekly" },
  { path: "/blog", priority: 0.85, changeFrequency: "daily" },
  { path: "/pricing", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.85, changeFrequency: "monthly" },
  { path: "/book-meeting", priority: 0.75, changeFrequency: "monthly" },
  { path: "/estimate-project", priority: 0.75, changeFrequency: "monthly" },
  { path: "/ai-solutions", priority: 0.7, changeFrequency: "monthly" },
  { path: "/ai-assistant", priority: 0.55, changeFrequency: "monthly" },
  { path: "/testimonials", priority: 0.7, changeFrequency: "monthly" },
  { path: "/faq", priority: 0.65, changeFrequency: "monthly" },
  { path: "/resources", priority: 0.55, changeFrequency: "monthly" },
  { path: "/resources/animation-plan", priority: 0.4, changeFrequency: "monthly" },
  { path: "/resources/ui-components", priority: 0.4, changeFrequency: "monthly" },
  { path: "/privacy", priority: 0.25, changeFrequency: "yearly" },
  { path: "/privacy-policy", priority: 0.25, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.25, changeFrequency: "yearly" },
  { path: "/terms-and-conditions", priority: 0.25, changeFrequency: "yearly" },
];

function buildEntry(
  path: string,
  options: {
    lastModified?: Date;
    changeFrequency?: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority?: number;
  } = {},
): MetadataRoute.Sitemap[number] {
  return {
    url: `${seoConfig.siteUrl}${path}`,
    lastModified: options.lastModified ?? new Date(),
    changeFrequency: options.changeFrequency ?? "weekly",
    priority: options.priority ?? 0.7,
  };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticEntries = staticRoutes.map((route) =>
    buildEntry(route.path, {
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    }),
  );

  const projectEntries = portfolioProjects.map((project) =>
    buildEntry(`/projects/${project.slug}`, {
      lastModified: now,
      changeFrequency: "monthly",
      // Personal products rank higher for buyers discovering ready-made software
      priority: project.category === "personal" ? 0.9 : 0.75,
    }),
  );

  const caseStudyEntries = caseStudySeoEntries.map((entry) =>
    buildEntry(`/case-studies/${entry.slug}`, {
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    }),
  );

  let blogEntries: MetadataRoute.Sitemap = [];
  try {
    const posts = await getPublishedSlugsForSitemap();
    blogEntries = posts.map((entry) =>
      buildEntry(`/blog/${entry.slug}`, {
        lastModified: entry.lastModified,
        changeFrequency: "weekly",
        priority: 0.7,
      }),
    );
  } catch (error) {
    console.error("Sitemap: failed to load published blog posts", error);
  }

  return [...staticEntries, ...projectEntries, ...caseStudyEntries, ...blogEntries];
}
