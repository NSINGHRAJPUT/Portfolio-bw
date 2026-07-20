import Link from "next/link";

import { PageHero } from "@/components/sections/page-hero";
import { BlogListSection } from "@/components/sections/blog-list-section";
import { Button } from "@/components/ui/button";
import { getPublishedPosts } from "@/lib/blog/queries";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Blog",
  description:
    "Practical frameworks for premium AI product design, motion systems, and performance-aware engineering.",
  path: "/blog",
  keywords: ["blog", "AI product design", "UX", "engineering"],
});

interface BlogPageProps {
  searchParams: Promise<{ tag?: string }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { tag } = await searchParams;
  const posts = await getPublishedPosts(tag);

  return (
    <>
      <PageHero
        kicker="Blog"
        title="Ship better decisions."
        subtitle="Practical frameworks for premium AI product design, motion systems, and performance-aware engineering."
        stats={["Tactical guides", "Motion + UX craft", "AI delivery"]}
        primaryCta={{ label: "Explore Resources", href: "/resources", variant: "primary" }}
        secondaryCta={{ label: "View Pricing", href: "/pricing", variant: "secondary" }}
      />
      <BlogListSection activeTag={tag} posts={posts} />
      <section className="container-safe pb-20">
        <div className="glass flex flex-col items-start justify-between gap-4 rounded-[var(--radius-2xl)] p-8 md:flex-row md:items-center">
          <div className="space-y-2">
            <p className="section-eyebrow">Newsletter</p>
            <h2 className="text-2xl font-semibold">Get premium AI + UX insights monthly.</h2>
            <p className="text-sm text-muted">No spam. Just high-signal execution notes.</p>
          </div>
          <Link href="/contact">
            <Button size="lg" variant="secondary">
              Request updates
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
