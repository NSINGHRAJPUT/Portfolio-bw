import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { IaPageDefinition } from "@/types/information-architecture";

interface InformationArchitecturePageProps {
  page: IaPageDefinition;
}

export function InformationArchitecturePage({ page }: InformationArchitecturePageProps) {
  const chapterAccent = (() => {
    switch (page.key) {
      case "services":
      case "serviceDetail":
        return "bg-[radial-gradient(900px_500px_at_20%_0%,rgba(214,179,94,0.22),transparent_55%)]";
      case "projects":
      case "projectDetail":
        return "bg-[radial-gradient(900px_500px_at_85%_10%,rgba(214,179,94,0.18),transparent_55%)]";
      case "caseStudies":
      case "blogDetail":
      case "projectDetail":
        return "bg-[radial-gradient(900px_500px_at_45%_-10%,rgba(214,179,94,0.20),transparent_55%)]";
      case "aiSolutions":
      case "aiAssistant":
        return "bg-[radial-gradient(1100px_600px_at_15%_0%,rgba(154,163,178,0.20),transparent_55%)]";
      default:
        return "bg-[radial-gradient(1000px_520px_at_15%_-15%,rgba(214,179,94,0.18),transparent_55%)]";
    }
  })();

  return (
    <section className="relative overflow-hidden">
      <div className={`pointer-events-none absolute inset-0 ${chapterAccent} opacity-90`} />
      <div className="container-safe relative py-16">
        <div className="mb-10 flex flex-wrap items-center gap-3">
          <Badge variant="primary">Portfolio Chapter</Badge>
          <Badge>{page.path}</Badge>
          <Badge variant="success">{page.title}</Badge>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">{page.title}</h1>
            <p className="max-w-2xl text-sm text-muted md:text-base">{page.purpose}</p>

            <div className="flex flex-wrap gap-3">
              <Card className="w-full max-w-xl space-y-2 p-5 lg:w-auto lg:max-w-none">
                <p className="text-xs uppercase tracking-[0.18em] text-muted">Conversion Goal</p>
                <p className="text-sm text-(--fg)">{page.conversionGoal}</p>
              </Card>
              <Card className="w-full max-w-xl space-y-2 p-5 lg:w-auto lg:max-w-none">
                <p className="text-xs uppercase tracking-[0.18em] text-muted">Target Audience</p>
                <p className="text-sm text-(--fg)">{page.targetAudience}</p>
              </Card>
            </div>
          </div>

          <div className="space-y-4">
            <Card className="space-y-2 p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-muted">SEO Strategy</p>
              <p className="text-sm text-(--fg)">{page.seoStrategy}</p>
            </Card>

            <Card className="space-y-3 p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-muted">Primary Components</p>
              <div className="flex flex-wrap gap-2">
                {page.components.map((component) => (
                  <Badge key={component} variant="neutral">
                    {component}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
