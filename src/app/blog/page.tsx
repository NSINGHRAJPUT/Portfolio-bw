import Link from "next/link";

import { PageHero } from "@/components/sections/page-hero";
import { BlogListSection } from "@/components/sections/blog-list-section";
import { Button } from "@/components/ui/button";
import { getPublishedPosts } from "@/lib/blog/queries";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Blog",
  description:
    "Practical notes on MERN stack development, React Native, Next.js, cloud integrations, and full-stack engineering.",
  path: "/blog",
  keywords: ["blog", "MERN stack", "React Native", "full stack development"],
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
        title="Notes from the codebase."
        subtitle="Practical insights on MERN stack development, React Native, Next.js, and full-stack engineering."
        stats={["Web development", "Mobile apps", "Cloud & DevOps"]}
        primaryCta={{ label: "Explore Resources", href: "/resources", variant: "primary" }}
        secondaryCta={{ label: "Personal Products", href: "/projects?category=personal", variant: "secondary" }}
      />
      <BlogListSection activeTag={tag} posts={posts} />
      <section className="container-safe pb-20">
        <div className="glass flex flex-col items-start justify-between gap-4 rounded-[var(--radius-2xl)] p-8 md:flex-row md:items-center">
          <div className="space-y-2">
            <p className="section-eyebrow">Stay Updated</p>
            <h2 className="text-2xl font-semibold">Get full-stack development insights.</h2>
            <p className="text-sm text-muted">No spam. Just practical engineering notes.</p>
          </div>
          <Link href="/contact">
            <Button size="lg" variant="secondary">
              Get in touch
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
