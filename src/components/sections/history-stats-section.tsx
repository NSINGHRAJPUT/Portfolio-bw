"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { FadeIn } from "@/components/animation/fade-in";
import { HomeSection } from "@/components/layout/home-section";
import { Button } from "@/components/ui/button";
import { CyberCard } from "@/components/ui/cyber-card";
import { landingCopy } from "@/lib/config/brand";
import { siteConfig } from "@/lib/config/site";

const thumbnails = siteConfig.projects.slice(0, 4).map((project) => ({
  label: project.name.split(" ").slice(0, 2).join(" "),
  slug: project.slug,
}));

export function HistoryStatsSection() {
  return (
    <HomeSection>
      <FadeIn>
        <CyberCard className="w-full p-10 md:p-14" glow>
          <div className="grid gap-8 md:grid-cols-4">
            {landingCopy.milestones.map((item, idx) => (
              <motion.div
                className="text-center md:text-left"
                initial={{ opacity: 0, y: 16 }}
                key={item.label}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <p className="text-4xl font-bold text-[var(--primary)] md:text-5xl">{item.value}</p>
                <p className="mt-2 text-sm text-white/50">{item.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-6">
            <div className="flex flex-wrap gap-3">
              {thumbnails.map((thumb, i) => (
                <div
                  className="flex h-16 w-24 items-end rounded-lg border border-[var(--primary)]/20 bg-[var(--primary)]/5 p-2"
                  key={thumb.label}
                  style={{ opacity: 1 - i * 0.08 }}
                >
                  <span className="text-[10px] text-[var(--primary)]/70">{thumb.label}</span>
                </div>
              ))}
            </div>
            <Link href="/projects">
              <Button variant="secondary">View Projects</Button>
            </Link>
          </div>
        </CyberCard>
      </FadeIn>
    </HomeSection>
  );
}
