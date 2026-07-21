import { Quote } from "lucide-react";

import { FadeIn } from "@/components/animation/fade-in";
import { testimonials } from "@/components/sections/home-data";
import { Card } from "@/components/ui/card";

export function TestimonialsSection() {
  return (
    <section className="container-safe py-24" id="testimonials">
      <div className="mb-8 max-w-2xl space-y-3">
        <p className="section-eyebrow">Testimonials</p>
        <h2 className="text-3xl font-semibold md:text-5xl">Trusted by teams across Mohali and beyond.</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {testimonials.map((item) => (
          <FadeIn key={item.author}>
            <Card className="h-full space-y-4">
              <Quote className="h-5 w-5 text-[var(--accent)]" />
              <p className="text-sm text-[var(--fg)]">{item.quote}</p>
              <div className="pt-2">
                <p className="text-sm font-medium">{item.author}</p>
                <p className="text-xs text-muted">{item.role}</p>
              </div>
            </Card>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
