import type { MetadataRoute } from "next";

import { caseStudySeoEntries, projectSeoEntries } from "@/config/seo-content";
import { getPublishedSlugsForSitemap } from "@/lib/blog/queries";
import { seoConfig } from "@/config/seo";

const staticRoutes = [
  "/",
  "/about",
  "/services",
  "/projects",
  "/case-studies",
  "/ai-solutions",
  "/blog",
  "/resources",
  "/testimonials",
  "/pricing",
  "/contact",
  "/book-meeting",
  "/faq",
  "/privacy",
  "/terms",
  "/estimate-project",
  "/ai-assistant",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${seoConfig.siteUrl}${route}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : 0.7,
  }));

  let blogEntries: MetadataRoute.Sitemap = [];
  try {
    const posts = await getPublishedSlugsForSitemap();
    blogEntries = posts.map((entry) => ({
      url: `${seoConfig.siteUrl}/blog/${entry.slug}`,
      lastModified: entry.lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    }));
  } catch {
    blogEntries = [];
  }

  const projectEntries: MetadataRoute.Sitemap = projectSeoEntries.map((entry) => ({
    url: `${seoConfig.siteUrl}/projects/${entry.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const caseStudyEntries: MetadataRoute.Sitemap = caseStudySeoEntries.map((entry) => ({
    url: `${seoConfig.siteUrl}/case-studies/${entry.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...staticEntries, ...blogEntries, ...projectEntries, ...caseStudyEntries];
}
