import { Card } from "@/components/ui/card";
import { CyberCard } from "@/components/ui/cyber-card";
const principles = [
  { title: "Outcome clarity", description: "Every engagement is defined by measurable outcomes and constraints." },
  { title: "AI with guardrails", description: "We only automate what improves decisions, speed, and quality—with safety checks." },
  { title: "Premium interaction craft", description: "UI and motion systems designed for conversion and long-term maintainability." },
  { title: "Performance budgets", description: "Optimized rendering, careful bundles, and scalable architecture choices." },
];

export function AboutPrinciplesSection() {
  return (
    <section className="container-safe py-16">
      <div className="mb-8 max-w-2xl space-y-2">
        <p className="section-eyebrow">Operating Principles</p>
        <h2 className="text-3xl font-semibold text-white md:text-4xl">How NSRGFX stays premium under pressure.</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {principles.map((p) => (
          <Card key={p.title} className="space-y-2 p-5">
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="text-sm text-muted">{p.description}</p>
          </Card>
        ))}
      </div>

      <CyberCard className="mt-10 p-6" glow={false}>
        <p className="text-sm text-white/60">
          Built for teams evaluating AI partners who can design, engineer, and ship with confidence.
        </p>
      </CyberCard>
    </section>
  );
}

