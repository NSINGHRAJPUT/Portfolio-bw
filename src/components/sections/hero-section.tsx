"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

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
        <CyberCard className="w-full" glow reflected runningBorder>
          <div className="p-8 md:p-10">
            <h1 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
              {hero.cardTitle}
            </h1>
            <p className="mt-1 text-xs font-medium uppercase tracking-wider text-[var(--primary)]">
              Description
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/70 md:text-base">
              {hero.cardDescription}
            </p>

            <MilestoneStepper />

            <div className="mt-8 rounded-lg border border-white/8 bg-black/30 px-4 py-3">
              <p className="text-center text-xs text-white/50">{hero.milestoneFooter}</p>
            </div>
          </div>
        </CyberCard>

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
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
            <Link href="/book-meeting">
              <Button size="lg">
                {hero.primaryCta} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button size="lg" variant="secondary">
                {hero.secondaryCta}
              </Button>
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-[var(--primary)]/20 pt-8">
            {hero.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-[var(--primary)] md:text-3xl">{stat.value}</p>
                <p className="mt-1 text-xs text-white/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </FadeIn>
    </HomeSection>
  );
}
