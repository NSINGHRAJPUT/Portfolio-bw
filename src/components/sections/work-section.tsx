import { Suspense } from "react";

import { WorkSectionClient } from "@/components/sections/work-section-client";
import { portfolioProjects } from "@/config/projects";
import { getProjectImage } from "@/lib/projects/images";

export function WorkSection() {
  const projects = portfolioProjects.map((project) => ({
    ...project,
    image: getProjectImage(project.slug),
  }));

  return (
    <Suspense
      fallback={
        <section className="container-safe space-y-8 py-24" id="work">
          <div className="glass h-48 animate-pulse rounded-2xl" />
        </section>
      }
    >
      <WorkSectionClient projects={projects} />
    </Suspense>
  );
}
