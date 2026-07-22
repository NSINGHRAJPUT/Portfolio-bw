"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { FadeIn } from "@/components/animation/fade-in";
import { HomeSection } from "@/components/layout/home-section";
import { MilestoneStepper } from "@/components/sections/milestone-stepper";
import { Button } from "@/components/ui/button";
import { CyberCard } from "@/components/ui/cyber-card";
import { landingCopy } from "@/lib/config/brand";

export function HeroSection() {
  const { hero } = landingCopy;

  return (
    <HomeSection className="py-16 md:py-24">
      <FadeIn>
        <CyberCard className="w-full" runningBorder>
          <div className="p-8 md:p-10">
            <h1 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
              {hero.cardTitle}
            </h1>

            <MilestoneStepper />

            <div className="mt-8 rounded-lg border border-white/8 bg-black/30 px-4 py-3">
              <p className="text-center text-xs text-white/50">{hero.milestoneFooter}</p>
            </div>
          </div>
        </CyberCard>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold leading-tight md:text-5xl lg:text-6xl">
            {hero.headline[0]}{" "}
            <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
              {hero.headline[1]}
            </span>{" "}
            {hero.headline[2]}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm text-[var(--fg-muted)] md:text-base">
            {hero.subheadline}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact">
              <Button size="lg">
                {hero.primaryCta} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/projects?category=personal">
              <Button size="lg" variant="secondary">
                {hero.secondaryCta}
              </Button>
            </Link>
          </div>
          <p className="mt-4 text-xs text-white/40">
            Prefer a ready-made product?{" "}
            <Link className="text-[var(--primary)] hover:underline" href="/projects?category=personal">
              See personal products
            </Link>
          </p>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-[var(--primary)]/20 pt-8">
            {hero.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-[var(--primary)] md:text-3xl">{stat.value}</p>
                <p className="mt-1 text-xs text-white/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </HomeSection>
  );
}
