import { InformationArchitectureOverview } from "@/components/shared/information-architecture-overview";
import Link from "next/link";

import { Card } from "@/components/ui/card";
import { createIaMetadata, iaPages } from "@/config/information-architecture";

export const metadata = createIaMetadata("resources");

export default function ResourcesPage() {
  return (
    <>
      <InformationArchitectureOverview pages={iaPages} />
      <section className="container-safe pb-16">
        <div className="grid gap-3 md:grid-cols-2">
          <Card className="space-y-3">
            <p className="section-eyebrow">Design System Resource</p>
            <h2 className="text-2xl font-semibold">Reusable UI Components</h2>
            <p className="text-sm text-muted">
              View the complete independent UI component inventory including navigation, cards, motion, and AI UI
              primitives.
            </p>
            <Link className="text-sm text-[var(--primary)] hover:underline" href="/resources/ui-components">
              Open component catalog
            </Link>
          </Card>
          <Card className="space-y-3">
            <p className="section-eyebrow">Motion Architecture</p>
            <h2 className="text-2xl font-semibold">Animation Plan</h2>
            <p className="text-sm text-muted">
              Review the complete Framer-first animation plan with GSAP-only-where-needed rules for cinematic
              scrolling and transitions.
            </p>
            <Link className="text-sm text-[var(--primary)] hover:underline" href="/resources/animation-plan">
              Open animation plan
            </Link>
          </Card>
        </div>
      </section>
    </>
  );
}
