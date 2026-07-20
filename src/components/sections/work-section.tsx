import { FadeIn } from "@/components/animation/fade-in";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/lib/config/site";

export function WorkSection() {
  return (
    <section className="container-safe space-y-8 py-24" id="work">
      <div className="max-w-2xl space-y-3">
        <p className="section-eyebrow">Featured Projects</p>
        <h2 className="text-3xl font-semibold md:text-5xl">Launch stories with measurable impact.</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {siteConfig.projects.map((project) => (
          <FadeIn key={project.name}>
            <Card className="space-y-4" data-parallax="0.08">
              <h3 className="text-xl font-medium">{project.name}</h3>
              <p className="text-sm text-muted">{project.summary}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="primary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
