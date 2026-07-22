import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { FadeIn } from "@/components/animation/fade-in";
import { HomeSection } from "@/components/layout/home-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { personalProducts } from "@/config/projects";
import { getProjectImage } from "@/lib/projects/images";

const GLIMPSE_LIMIT = 6;

export function PersonalProductsSection() {
  const products = personalProducts.slice(0, GLIMPSE_LIMIT).map((project) => ({
    ...project,
    image: getProjectImage(project.slug),
  }));

  return (
    <HomeSection id="personal-products">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl space-y-3">
          <p className="section-eyebrow">Personal Products</p>
          <h2 className="text-3xl font-semibold md:text-5xl">Products built to sell and scale.</h2>
          <p className="text-sm text-white/60">
            A glimpse of my own production platforms — explore demos, review case-ready builds, and
            reach out if you want to buy, white-label, or customize one.
          </p>
        </div>
        <Link href="/projects?category=personal">
          <Button variant="secondary">
            Browse all personal products <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {products.map((project) => (
          <FadeIn key={project.slug}>
            <Card className="flex h-full flex-col space-y-4 overflow-hidden">
              {project.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <Link href={`/projects/${project.slug}`}>
                  <img
                    alt={project.title}
                    className="aspect-[16/10] w-full rounded-xl object-cover transition hover:opacity-90"
                    src={project.image}
                  />
                </Link>
              ) : null}
              <div className="space-y-1">
                <Badge variant="primary">Personal Product</Badge>
                <h3 className="text-xl font-medium">
                  <Link className="hover:text-[var(--primary)]" href={`/projects/${project.slug}`}>
                    {project.title}
                  </Link>
                </h3>
                <p className="text-sm leading-relaxed text-white/70">{project.summary}</p>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  className="inline-flex items-center text-sm text-[var(--primary)] hover:underline"
                  href={`/projects/${project.slug}`}
                >
                  View product <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
                {project.url ? (
                  <a
                    className="inline-flex items-center text-sm text-white/50 hover:text-[var(--primary)] hover:underline"
                    href={project.url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Live site <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                ) : null}
              </div>
            </Card>
          </FadeIn>
        ))}
      </div>
    </HomeSection>
  );
}
