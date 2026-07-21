import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { IaPageDefinition } from "@/types/information-architecture";

interface InformationArchitectureOverviewProps {
  pages: IaPageDefinition[];
}

export function InformationArchitectureOverview({ pages }: InformationArchitectureOverviewProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(214,179,94,0.18),transparent_55%)]" />
      <div className="container-safe relative py-16">
        <div className="mb-8 space-y-3">
          <Badge variant="primary">Portfolio Blueprint</Badge>
          <h1 className="text-4xl font-semibold md:text-5xl">Complete Information Architecture</h1>
          <p className="max-w-3xl text-sm text-muted">
            Every primary route is designed with explicit purpose, audience, conversion, component structure,
            and SEO direction—so this portfolio stays maintainable and well-structured at scale.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {pages.map((page) => (
          <Card className="space-y-3" key={page.key}>
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium">{page.title}</h2>
              <Badge>{page.path}</Badge>
            </div>
            <p className="text-sm text-muted">{page.purpose}</p>
            <p className="text-xs text-(--fg)">
              <span className="font-medium">Goal:</span> {page.conversionGoal}
            </p>
            <p className="text-xs text-muted">
              <span className="font-medium text-(--fg)">Audience:</span> {page.targetAudience}
            </p>
            {page.path.includes("[slug]") ? null : (
              <Link className="text-sm text-(--primary) hover:underline" href={page.path}>
                Open page
              </Link>
            )}
          </Card>
        ))}
        </div>
      </div>
    </section>
  );
}
