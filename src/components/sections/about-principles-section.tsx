import { Card } from "@/components/ui/card";
import { CyberCard } from "@/components/ui/cyber-card";
const principles = [
  { title: "Clean architecture", description: "Every project follows maintainable patterns — modular components, RESTful APIs, and scalable database design." },
  { title: "Secure by default", description: "JWT authentication, bcrypt encryption, protected routes, and secure headers on every application." },
  { title: "Pixel-perfect UI", description: "Figma designs translated into responsive React and React Native interfaces with attention to detail." },
  { title: "Production delivery", description: "CI/CD pipelines, cloud deployment, and performance optimization so code ships reliably." },
];

export function AboutPrinciplesSection() {
  return (
    <section className="container-safe py-16">
      <div className="mb-8 max-w-2xl space-y-2">
        <p className="section-eyebrow">Operating Principles</p>
        <h2 className="text-3xl font-semibold text-white md:text-4xl">How I deliver production-ready software.</h2>
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
          MCA graduate from GLA University with 4+ years building full-stack web and mobile applications across startups and enterprise teams.
        </p>
      </CyberCard>
    </section>
  );
}
