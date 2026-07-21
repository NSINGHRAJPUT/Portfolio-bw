import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { portfolioProjects } from "@/config/projects";
import { FadeIn } from "@/components/animation/fade-in";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function WorkSection() {
  return (
    <section className="container-safe space-y-8 py-24" id="work">
      <div className="max-w-2xl space-y-3">
        <p className="section-eyebrow">Portfolio</p>
        <h2 className="text-3xl font-semibold md:text-5xl">Projects shipped to production.</h2>
        <p className="text-sm text-muted">
          {portfolioProjects.length} projects across Luminoguru, Anthem Infotech, Tiny Script, and Webreate.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {portfolioProjects.map((project) => (
          <FadeIn key={project.slug}>
            <Card className="flex h-full flex-col space-y-4" data-parallax="0.08">
              <div className="space-y-1">
                <p className="text-xs text-[var(--primary)]">{project.period}</p>
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
              <Link
                className="inline-flex items-center text-sm text-[var(--primary)] hover:underline"
                href={`/projects/${project.slug}`}
              >
                View project <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
              {project.url ? (
                <a
                  className="inline-flex items-center text-sm text-muted hover:text-[var(--primary)] hover:underline"
                  href={project.url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Live site <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              ) : null}
            </Card>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
