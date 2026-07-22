import { seoConfig } from "@/config/seo";

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: seoConfig.siteName,
    url: seoConfig.siteUrl,
    logo: `${seoConfig.siteUrl}/logo.svg`,
    sameAs: [
      "https://www.linkedin.com/in/n-s-r/",
      "https://github.com/NSINGHRAJPUT",
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

export function getSoftwareApplicationSchema(input: {
  title: string;
  description: string;
  url: string;
  pageUrl: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: input.title,
    description: input.description,
    url: input.url,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    image: input.image
      ? input.image.startsWith("http")
        ? input.image
        : `${seoConfig.siteUrl}${input.image}`
      : undefined,
    author: {
      "@type": "Person",
      name: seoConfig.siteName,
    },
    offers: {
      "@type": "Offer",
      url: input.pageUrl,
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      price: "0",
      description: "Contact for purchase, licensing, or customization.",
    },
  };
}

export function getPersonalProductsItemListSchema(
  items: Array<{
    title: string;
    description: string;
    url: string;
    image?: string;
  }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Personal Products by Neeraj Singh Rajput",
    description:
      "Production-ready personal products available for demo, purchase, white-label, or customization.",
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.title,
      url: item.url,
      description: item.description,
      image: item.image
        ? item.image.startsWith("http")
          ? item.image
          : `${seoConfig.siteUrl}${item.image}`
        : undefined,
    })),
  };
}

export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Neeraj Singh Rajput",
    jobTitle: "Full Stack Developer | MERN & React Native",
    url: `${seoConfig.siteUrl}/about`,
    email: "nsinghrajputx@gmail.com",
    telephone: "+91 9752661779",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mohali",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.linkedin.com/in/n-s-r/",
      "https://github.com/NSINGHRAJPUT",
      "https://drive.google.com/file/d/1--6RFnZO_3DPRppXEh4V_MUyKVA_qNcH/view?usp=sharing",
    ],
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "GLA University",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Jiwaji University",
      },
    ],
    knowsAbout: [
      "MERN Stack",
      "React Native",
      "Next.js",
      "Node.js",
      "Azure",
      "AWS",
      "Payment Integrations",
    ],
  };
}
