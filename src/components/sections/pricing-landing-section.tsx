"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

import { HomeSection } from "@/components/layout/home-section";
import { Button } from "@/components/ui/button";
import { CyberCard } from "@/components/ui/cyber-card";
import { landingCopy } from "@/lib/config/brand";
import { cn } from "@/lib/utils";

function formatPrice(value: number) {
  return value.toLocaleString("en-US");
}

export function PricingLandingSection() {
  const [yearly, setYearly] = useState(false);
  const { pricing } = landingCopy;

  return (
    <HomeSection id="pricing">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-white md:text-5xl">{pricing.headline}</h2>
        <div className="mt-6 inline-flex items-center gap-3 rounded-[var(--radius-pill)] border border-[var(--primary)]/20 bg-[var(--primary)]/5 p-1">
          <button
            className={cn(
              "rounded-[var(--radius-pill)] px-5 py-2 text-sm transition",
              !yearly
                ? "bg-[var(--primary)] text-[#020810] shadow-[0_0_16px_rgba(0,212,255,0.4)]"
                : "text-white/50",
            )}
            onClick={() => setYearly(false)}
            type="button"
          >
            Per Project
          </button>
          <button
            className={cn(
              "rounded-[var(--radius-pill)] px-5 py-2 text-sm transition",
              yearly
                ? "bg-[var(--primary)] text-[#020810] shadow-[0_0_16px_rgba(0,212,255,0.4)]"
                : "text-white/50",
            )}
            onClick={() => setYearly(true)}
            type="button"
          >
            Retainer
          </button>
        </div>
      </div>

      <div className="grid items-stretch gap-6 md:grid-cols-3">
        {pricing.plans.map((plan, idx) => {
          const price = yearly ? plan.yearly : plan.monthly;

          return (
            <motion.div
              className="h-full"
              initial={{ opacity: 0, y: 20 }}
              key={plan.key}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              viewport={{ once: true, margin: "-60px" }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <CyberCard
                className="h-full w-full p-10 md:p-12"
                glow={plan.highlighted}
              >
                <div className="flex h-full flex-col space-y-7">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                    <p className="mt-1 text-sm text-white/50">{plan.description}</p>
                  </div>
                  <p className="text-5xl font-bold text-white">
                    {!yearly ? (
                      <span className="text-lg font-normal text-white/40">From </span>
                    ) : null}
                    ${formatPrice(price)}
                    {yearly ? (
                      <span className="text-base font-normal text-white/40">/mo</span>
                    ) : null}
                  </p>
                  <ul className="flex-1 space-y-3.5 pb-2">
                    {plan.features.map((feature) => (
                      <li className="flex items-center gap-2 text-sm text-white/55" key={feature}>
                        <Check className="h-4 w-4 shrink-0 text-[var(--primary)]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={plan.key === "foundation" ? "/estimate-project" : "/book-meeting"}>
                    <Button
                      className="w-full"
                      variant={plan.highlighted ? "primary" : "secondary"}
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </div>
              </CyberCard>
            </motion.div>
          );
        })}
      </div>
      <p className="mt-10 text-center text-sm text-white/45">
        Looking for a ready-made product instead of a custom build?{" "}
        <Link className="text-[var(--primary)] hover:underline" href="/projects?category=personal">
          Browse personal products
        </Link>
      </p>
    </HomeSection>
  );
}
