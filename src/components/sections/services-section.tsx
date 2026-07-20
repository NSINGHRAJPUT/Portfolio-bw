import { Bot, Gauge, PenTool } from "lucide-react";

import { FadeIn } from "@/components/animation/fade-in";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/lib/config/site";

const icons = [Bot, PenTool, Gauge];

export function ServicesSection() {
  return (
    <section className="container-safe space-y-8 py-24" id="services">
      <div className="max-w-2xl space-y-3">
        <p className="section-eyebrow">Services</p>
        <h2 className="text-3xl font-semibold md:text-5xl">Precision systems for AI-native products.</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {siteConfig.services.map((service, index) => {
          const Icon = icons[index];
          return (
            <FadeIn key={service.title}>
              <Card className="h-full space-y-4">
                <Icon className="h-5 w-5 text-[var(--primary)]" />
                <h3 className="text-xl font-medium">{service.title}</h3>
                <p className="text-sm text-muted">{service.description}</p>
                <ul className="space-y-1 text-sm text-[var(--fg)]">
                  {service.outcomes.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </Card>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
