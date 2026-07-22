"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";

import { FadeIn } from "@/components/animation/fade-in";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { PortfolioProject, ProjectCategoryFilter } from "@/config/projects";

type ProjectWithImage = PortfolioProject & { image?: string };

const TABS: Array<{ id: ProjectCategoryFilter; label: string }> = [
  { id: "personal", label: "Personal Products" },
  { id: "company", label: "Company Work" },
  { id: "all", label: "All" },
];

const INTRO: Record<ProjectCategoryFilter, { title: string; body: string }> = {
  personal: {
    title: "Products you can buy or license.",
    body: "Personal products built and shipped under NSRGFX — ready for demos, white-labeling, or custom ownership conversations.",
  },
  company: {
    title: "Client and company delivery.",
    body: "Production work delivered for agencies and clients across Africa, Europe, and India — proof of execution at scale.",
  },
  all: {
    title: "Projects shipped to production.",
    body: "Personal products and company delivery across marketplaces, edtech, healthcare, SaaS, and more.",
  },
};

function parseCategory(value: string | null): ProjectCategoryFilter {
  if (value === "company" || value === "all" || value === "personal") return value;
  return "personal";
}

interface WorkSectionClientProps {
  projects: ProjectWithImage[];
}

export function WorkSectionClient({ projects }: WorkSectionClientProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const category = parseCategory(searchParams.get("category"));

  const filtered = useMemo(() => {
    if (category === "all") return projects;
    return projects.filter((project) => project.category === category);
  }, [category, projects]);

  const setCategory = useCallback(
    (next: ProjectCategoryFilter) => {
      const params = new URLSearchParams(searchParams.toString());
      if (next === "personal") {
        params.delete("category");
      } else {
        params.set("category", next);
      }
      const query = params.toString();
      router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
    },
    [pathname, router, searchParams],
  );

  const intro = INTRO[category];

  return (
    <section className="container-safe space-y-8 py-24" id="work">
      <div className="max-w-2xl space-y-3">
        <p className="section-eyebrow">Portfolio</p>
        <h2 className="text-3xl font-semibold md:text-5xl">{intro.title}</h2>
        <p className="text-sm text-white/60">
          {filtered.length} {category === "personal" ? "products" : "projects"} — {intro.body}
        </p>
      </div>

      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Project category">
        {TABS.map((tab) => {
          const active = category === tab.id;
          return (
            <button
              aria-selected={active}
              className={
                active
                  ? "rounded-full border border-[var(--primary)] bg-[var(--primary)]/15 px-4 py-2 text-sm text-[var(--primary)]"
                  : "rounded-full border border-white/10 px-4 py-2 text-sm text-white/55 transition hover:border-white/25 hover:text-white"
              }
              key={tab.id}
              onClick={() => setCategory(tab.id)}
              role="tab"
              type="button"
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((project) => (
          <FadeIn key={project.slug}>
            <Card className="flex h-full flex-col space-y-4 overflow-hidden" data-parallax="0.08">
              {project.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  alt=""
                  className="aspect-[16/10] w-full rounded-xl object-cover"
                  src={project.image}
                />
              ) : null}
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant={project.category === "personal" ? "primary" : "neutral"}>
                    {project.category === "personal" ? "Personal Product" : "Company Work"}
                  </Badge>
                  <p className="text-xs text-[var(--primary)]">{project.period}</p>
                </div>
                <h3 className="text-xl font-medium">{project.title}</h3>
                <p className="text-xs text-white/50">{project.company}</p>
              </div>
              <p className="flex-1 text-sm leading-relaxed text-white/70">{project.summary}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 4).map((tag) => (
                  <Badge key={tag} variant="primary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  className="inline-flex items-center text-sm text-[var(--primary)] hover:underline"
                  href={`/projects/${project.slug}`}
                >
                  View project <ArrowRight className="ml-1 h-4 w-4" />
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
    </section>
  );
}
