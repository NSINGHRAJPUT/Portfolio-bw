"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";

import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { CyberCard } from "@/components/ui/cyber-card";

const SceneCanvas = dynamic(
  () => import("@/components/3d/scene-canvas").then((mod) => mod.SceneCanvas),
  { ssr: false },
);

interface CtaLink {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
}

interface PageHeroProps {
  kicker: string;
  title: string;
  subtitle: string;
  stats?: string[];
  primaryCta: CtaLink;
  secondaryCta?: CtaLink;
  scene?: boolean;
}

export function PageHero({
  kicker,
  title,
  subtitle,
  stats = [],
  primaryCta,
  secondaryCta,
  scene = true,
}: PageHeroProps) {
  return (
    <section className="container-safe py-20 md:py-28">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <FadeIn>
          <div className="space-y-7">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--primary)]">{kicker}</p>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="text-4xl font-bold leading-tight text-white md:text-6xl"
            >
              {title}
            </motion.h1>

            <p className="max-w-2xl text-sm text-white/60 md:text-base">{subtitle}</p>

            <div className="flex flex-wrap gap-3">
              <Link href={primaryCta.href}>
                <Button size="lg" variant={primaryCta.variant ?? "primary"}>
                  {primaryCta.label}
                </Button>
              </Link>
              {secondaryCta ? (
                <Link href={secondaryCta.href}>
                  <Button size="lg" variant={secondaryCta.variant ?? "secondary"}>
                    {secondaryCta.label}
                  </Button>
                </Link>
              ) : null}
            </div>

            {stats.length ? (
              <div className="grid gap-3 sm:grid-cols-3">
                {stats.map((s) => (
                  <CyberCard key={s} className="px-4 py-3 text-xs text-white/60" glow={false}>
                    {s}
                  </CyberCard>
                ))}
              </div>
            ) : null}
          </div>
        </FadeIn>

        <FadeIn>
          {scene ? (
            <CyberCard className="w-full" glow>
              <div className="relative h-[280px] overflow-hidden p-2 md:h-[320px]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,212,255,0.15),transparent_70%)]" />
                <SceneCanvas />
              </div>
            </CyberCard>
          ) : (
            <CyberCard className="p-6" glow>
              <p className="text-sm text-white/60">Premium systems, shipped with precision.</p>
            </CyberCard>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
