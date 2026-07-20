import type { Metadata } from "next";

import { seoConfig } from "@/config/seo";

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  type?: "website" | "article";
}

export function buildPageMetadata(input: PageMetadataInput): Metadata {
  const canonicalUrl = new URL(input.path, seoConfig.siteUrl).toString();
  const imageUrl = new URL(input.image ?? seoConfig.defaultOgImage, seoConfig.siteUrl).toString();
  const fullTitle =
    input.title === seoConfig.defaultTitle ? input.title : `${input.title} | ${seoConfig.siteName}`;

  return {
    title: fullTitle,
    description: input.description,
    keywords: [...seoConfig.keywords, ...(input.keywords ?? [])],
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: fullTitle,
      description: input.description,
      type: input.type ?? "website",
      url: canonicalUrl,
      siteName: seoConfig.siteName,
      locale: seoConfig.locale,
      images: [{ url: imageUrl, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: input.description,
      creator: seoConfig.xHandle,
      images: [imageUrl],
    },
  };
}
