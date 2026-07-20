"use client";

import { ArrowUpRight } from "lucide-react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

import { FadeIn } from "@/components/animation/fade-in";
import { HomeSection } from "@/components/layout/home-section";
import { landingCopy } from "@/lib/config/brand";
import { CyberCard } from "@/components/ui/cyber-card";

const SceneCanvas = dynamic(
  () => import("@/components/3d/scene-canvas").then((mod) => mod.SceneCanvas),
  { ssr: false },
);

export function FeaturesGridSection() {
  const { features } = landingCopy;

  return (
    <HomeSection id="features">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <FadeIn>
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--primary)]">
              {features.eyebrow}
            </p>
            <h2 className="text-3xl font-bold leading-tight text-white md:text-5xl">
              {features.headline[0]}{" "}
              <span className="text-[var(--primary)]">
                {features.headline[1]}
              </span>
            </h2>
            <p className="text-white/60">{features.subheadline}</p>
          </div>
        </FadeIn>

        <FadeIn>
          <CyberCard className="w-full" glow>
            <div className="relative h-[280px] overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,212,255,0.15),transparent_70%)]" />
              <SceneCanvas />
            </div>
          </CyberCard>
        </FadeIn>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {features.items.map((feature, idx) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            key={feature.title}
            transition={{ duration: 0.45, delay: idx * 0.08 }}
            viewport={{ once: true, margin: "-60px" }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <CyberCard className="group h-full w-full p-8 md:p-9 transition hover:shadow-[var(--shadow-glow)]">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-white/55">{feature.description}</p>
                </div>
                <button
                  aria-label={`Learn more about ${feature.title}`}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--primary)]/50 bg-[var(--primary)]/10 text-[var(--primary)] shadow-[0_0_16px_rgba(0,212,255,0.3)] transition hover:scale-105 hover:bg-[var(--primary)]/20"
                  type="button"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </CyberCard>
          </motion.div>
        ))}
      </div>
    </HomeSection>
  );
}
