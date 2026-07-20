"use client";

import {
  ClipboardCheck,
  HelpCircle,
  Rocket,
  Search,
  Wrench,
} from "lucide-react";

import { landingCopy } from "@/lib/config/brand";
import { cn } from "@/lib/utils";

const iconMap = {
  discover: HelpCircle,
  design: ClipboardCheck,
  build: Wrench,
  scale: Search,
  launch: Rocket,
} as const;

export function MilestoneStepper() {
  const milestones = landingCopy.hero.milestones;
  const activeIndex = milestones.findIndex((m) => m.status === "Active");

  return (
    <div className="mt-8">
      <div className="relative flex items-start justify-between gap-2">
        <div className="absolute left-[10%] right-[10%] top-5 h-px bg-[var(--primary)]/30" />
        <div
          className="absolute top-5 h-px bg-[var(--primary)] shadow-[0_0_12px_var(--primary)] transition-all duration-700"
          style={{
            left: "10%",
            width: `${(activeIndex / (milestones.length - 1)) * 80}%`,
          }}
        />
        {activeIndex >= 0 ? (
          <div
            className="absolute top-[18px] h-2 w-2 -translate-y-1/2 rounded-full bg-[var(--primary)] shadow-[0_0_16px_var(--primary),0_0_32px_var(--primary)]"
            style={{
              left: `calc(10% + ${(activeIndex / (milestones.length - 1)) * 80}% - 4px)`,
            }}
          />
        ) : null}

        {milestones.map((milestone) => {
          const Icon = iconMap[milestone.icon];
          const isActive = milestone.status === "Active";

          return (
            <div className="relative z-10 flex flex-1 flex-col items-center gap-2" key={milestone.id}>
              <div
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full border transition",
                  isActive
                    ? "border-[var(--primary)] bg-[var(--primary)]/10 shadow-[0_0_20px_rgba(0,212,255,0.4)]"
                    : "border-white/20 bg-white/5",
                )}
              >
                <Icon
                  className={cn(
                    "h-4 w-4",
                    isActive ? "text-[var(--primary)]" : "text-white/50",
                  )}
                />
              </div>
              <p className="text-center text-[11px] font-medium leading-tight text-white/90">
                {milestone.label}
              </p>
              <p
                className={cn(
                  "text-[10px]",
                  isActive ? "text-[var(--primary)]" : "text-white/40",
                )}
              >
                {milestone.status}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
