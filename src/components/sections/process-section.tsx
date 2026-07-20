import { FadeIn } from "@/components/animation/fade-in";
import { processSteps } from "@/components/sections/home-data";
import { Card } from "@/components/ui/card";

export function ProcessSection() {
  return (
    <section className="container-safe py-24" id="process-cinematic">
      <div className="mb-8 max-w-2xl space-y-3">
        <p className="section-eyebrow">Process</p>
        <h2 className="text-3xl font-semibold md:text-5xl">Cinematic delivery from strategy to scale.</h2>
      </div>
      <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-4">
          {processSteps.map((step) => (
            <FadeIn key={step.id}>
              <Card className="space-y-2">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--primary)]">{step.id}</p>
                <p className="text-xl font-medium">{step.title}</p>
                <p className="text-sm text-muted">{step.description}</p>
              </Card>
            </FadeIn>
          ))}
        </div>
        <div id="process-pin">
          <Card className="min-h-[420px] space-y-4 bg-surface-2/80 p-8">
            <p className="section-eyebrow">Execution Principle</p>
            <h3 className="text-2xl font-semibold md:text-3xl">
              Clarity in strategy, precision in craft, velocity in delivery.
            </h3>
            <p className="text-sm text-muted">
              Each phase is instrumented with quality gates, performance checks, and measurable outcomes so the
              product scales without redesign debt.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
