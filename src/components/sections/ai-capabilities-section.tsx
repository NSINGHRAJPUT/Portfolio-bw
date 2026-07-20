import { BrainCircuit, DatabaseZap, Workflow } from "lucide-react";

import { FadeIn } from "@/components/animation/fade-in";
import { aiCapabilities } from "@/components/sections/home-data";
import { Card } from "@/components/ui/card";

const capabilityIcons = [Workflow, DatabaseZap, BrainCircuit];

export function AiCapabilitiesSection() {
  return (
    <section className="container-safe py-24">
      <div className="mb-8 max-w-2xl space-y-3">
        <p className="section-eyebrow">AI Capabilities</p>
        <h2 className="text-3xl font-semibold md:text-5xl">From experiments to production intelligence.</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {aiCapabilities.map((item, index) => {
          const Icon = capabilityIcons[index];
          return (
            <FadeIn key={item.title}>
              <Card className="h-full space-y-4">
                <Icon className="h-5 w-5 text-[var(--secondary)]" />
                <h3 className="text-xl font-medium">{item.title}</h3>
                <p className="text-sm text-muted">{item.description}</p>
              </Card>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
