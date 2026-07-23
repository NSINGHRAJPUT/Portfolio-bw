import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import { JsonLd } from "@/components/shared/json-ld";
import { seoConfig } from "@/config/seo";
import { SiteBackground } from "@/components/layout/site-background";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { AppProviders } from "@/components/providers/app-providers";
import { siteConfig } from "@/lib/config/site";
import { getOrganizationSchema, getWebsiteSchema } from "@/lib/seo/schema";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: seoConfig.defaultTitle,
    template: seoConfig.titleTemplate,
  },
  description: seoConfig.defaultDescription,
  keywords: seoConfig.keywords,
  openGraph: {
    title: seoConfig.defaultTitle,
    description: seoConfig.defaultDescription,
    type: "website",
    url: siteConfig.url,
    siteName: seoConfig.siteName,
    locale: seoConfig.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: seoConfig.defaultTitle,
    description: seoConfig.defaultDescription,
    creator: seoConfig.xHandle,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="en" suppressHydrationWarning>
      <head>
  <Script
    async
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4634994555998964"
    crossOrigin="anonymous"
    strategy="afterInteractive"
  />
</head>
      <body className={inter.className}>
        <AppProviders>
          <SiteBackground />
          <div className="relative min-h-screen">
            <JsonLd data={getOrganizationSchema()} />
            <JsonLd data={getWebsiteSchema()} />
            <SiteHeader />
            <main>{children}</main>
            <SiteFooter />
          </div>
        </AppProviders>
      </body>
    </html>
  );
}
