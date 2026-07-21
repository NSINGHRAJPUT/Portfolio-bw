import { FadeIn } from "@/components/animation/fade-in";
import { techStack } from "@/components/sections/home-data";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function TechStackSection() {
  return (
    <section className="container-safe py-24">
      <div className="mb-8 max-w-2xl space-y-3">
        <p className="section-eyebrow">Tech Stack</p>
        <h2 className="text-3xl font-semibold md:text-5xl">Technologies I work with daily.</h2>
      </div>
      <FadeIn>
        <Card className="space-y-5">
          <p className="max-w-2xl text-sm text-muted">
            MERN stack, React Native, cloud services, and backend runtimes — Node.js, NestJS, Fastify, and Bun — chosen for reliability, speed, and long-term maintainability.
          </p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((item) => (
              <Badge key={item} variant="primary">
                {item}
              </Badge>
            ))}
          </div>
        </Card>
      </FadeIn>
    </section>
  );
}
