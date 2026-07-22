"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { FadeIn } from "@/components/animation/fade-in";
import { HomeSection } from "@/components/layout/home-section";
import { Button } from "@/components/ui/button";
import { landingCopy } from "@/lib/config/brand";

export function HistoryStatsSection() {
  const milestones = landingCopy.milestones;

  return (
    <HomeSection id="journey">
      <FadeIn>
        <div className="mb-14 max-w-2xl space-y-4">
          <p className="section-eyebrow">Career path</p>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Four years of shipping production software.
          </h2>
          <p className="text-sm leading-relaxed text-white/55 md:text-base">
            From first developer role to leading MERN delivery — the companies and
            stages that shaped how I build products today.
          </p>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="relative hidden md:block">
          <div
            aria-hidden
            className="absolute top-[1.15rem] right-0 left-0 h-px bg-gradient-to-r from-transparent via-[var(--primary)]/40 to-transparent"
          />
          <ol className="grid grid-cols-4 gap-6">
            {milestones.map((item, idx) => (
              <motion.li
                className="relative pt-2"
                initial={{ opacity: 0, y: 18 }}
                key={item.value}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                viewport={{ once: true, margin: "-40px" }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="mb-6 flex justify-start">
                  <span className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full border border-[var(--primary)]/50 bg-[#020810] shadow-[0_0_20px_rgba(0,212,255,0.35)]">
                    <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />
                  </span>
                </div>
                <p className="font-mono text-sm tracking-widest text-[var(--primary)]">
                  {item.value}
                </p>
                <p className="mt-3 text-lg font-medium leading-snug text-white">
                  {item.label.split(" at ")[0]}
                </p>
                <p className="mt-1 text-sm text-white/45">
                  {item.label.includes(" at ")
                    ? `at ${item.label.split(" at ")[1]}`
                    : null}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>

        {/* Mobile: vertical timeline */}
        <ol className="relative space-y-0 md:hidden">
          <div
            aria-hidden
            className="absolute top-3 bottom-3 left-[0.7rem] w-px bg-gradient-to-b from-[var(--primary)]/50 via-[var(--primary)]/25 to-transparent"
          />
          {milestones.map((item, idx) => (
            <motion.li
              className="relative flex gap-5 pb-10 last:pb-0"
              initial={{ opacity: 0, x: -12 }}
              key={item.value}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <span className="relative z-10 mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[var(--primary)]/50 bg-[#020810]">
                <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />
              </span>
              <div>
                <p className="font-mono text-sm tracking-widest text-[var(--primary)]">
                  {item.value}
                </p>
                <p className="mt-2 text-lg font-medium text-white">
                  {item.label.split(" at ")[0]}
                </p>
                <p className="mt-1 text-sm text-white/45">
                  {item.label.includes(" at ")
                    ? `at ${item.label.split(" at ")[1]}`
                    : null}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link href="/about">
            <Button variant="secondary">
              About my experience <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/projects?category=company">
            <Button variant="ghost">See company work</Button>
          </Link>
        </div>
      </FadeIn>
    </HomeSection>
  );
}
