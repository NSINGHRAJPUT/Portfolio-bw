import { animationGuidelines, animationPlan } from "@/config/animation-plan";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function AnimationPlan() {
  return (
    <section className="container-safe py-16">
      <div className="mb-8 space-y-3">
        <Badge variant="primary">Animation Blueprint</Badge>
        <h1 className="text-4xl font-semibold md:text-5xl">Motion Plan for Premium Experience</h1>
        <p className="max-w-3xl text-sm text-muted">
          Framer Motion is the default animation engine. GSAP is restricted to cinematic pinned scroll and
          parallax choreography where Framer is not sufficient.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-medium">Principles</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {animationGuidelines.map((item) => (
            <Card className="space-y-2" key={item.title}>
              <p className="text-sm font-medium">{item.title}</p>
              <p className="text-sm text-muted">{item.detail}</p>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-8 space-y-3">
        <h2 className="text-xl font-medium">Animation Modules</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {animationPlan.map((item) => (
            <Card className="space-y-3" key={item.key}>
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-medium">{item.title}</p>
                <Badge>{item.preferredEngine}</Badge>
              </div>
              <p className="text-sm text-muted">{item.objective}</p>
              <p className="text-xs text-muted">
                <span className="font-medium text-(--fg)">Timing:</span> {item.timing}
              </p>
              <p className="text-xs text-muted">
                <span className="font-medium text-(--fg)">Trigger:</span> {item.trigger}
              </p>
              <ul className="space-y-1 text-xs text-(--fg)">
                {item.implementationNotes.map((note) => (
                  <li key={note}>- {note}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
