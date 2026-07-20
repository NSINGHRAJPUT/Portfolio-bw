import { seoConfig } from "@/config/seo";

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: seoConfig.siteName,
    url: seoConfig.siteUrl,
    logo: `${seoConfig.siteUrl}/logo.svg`,
    sameAs: [
      "https://www.linkedin.com",
      "https://github.com",
      "https://x.com",
    ],
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: seoConfig.siteName,
    url: seoConfig.siteUrl,
  };
}

export function getArticleSchema(input: {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  updatedAt?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    datePublished: input.publishedAt,
    dateModified: input.updatedAt ?? input.publishedAt,
    image: input.image ? [input.image.startsWith("http") ? input.image : `${seoConfig.siteUrl}${input.image}`] : undefined,
    author: {
      "@type": "Organization",
      name: seoConfig.siteName,
    },
    publisher: {
      "@type": "Organization",
      name: seoConfig.siteName,
      logo: {
        "@type": "ImageObject",
        url: `${seoConfig.siteUrl}/logo.svg`,
      },
    },
    mainEntityOfPage: input.url,
  };
}

export function getCreativeWorkSchema(input: {
  title: string;
  description: string;
  url: string;
  type: "Project" | "CaseStudy";
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: input.title,
    description: input.description,
    url: input.url,
    about: input.type,
    author: {
      "@type": "Organization",
      name: seoConfig.siteName,
    },
  };
}
