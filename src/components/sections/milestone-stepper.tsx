"use client";

import { useEffect, useState } from "react";
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

const STEP_DURATION_MS = 4500;

function getStepStatus(index: number, activeIndex: number) {
  if (index < activeIndex) return "Completed";
  if (index === activeIndex) return "Active";
  return "Pending";
}

export function MilestoneStepper() {
  const milestones = landingCopy.hero.milestones;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const tick = () => {
      if (document.visibilityState !== "visible") return;
      setActiveIndex((current) => (current + 1) % milestones.length);
    };

    const timer = window.setInterval(tick, STEP_DURATION_MS);
    return () => window.clearInterval(timer);
  }, [milestones.length]);

  const activeMilestone = milestones[activeIndex];
  const progressWidth =
    milestones.length > 1 ? (activeIndex / (milestones.length - 1)) * 80 : 0;

  return (
    <div className="mt-8 space-y-6">
      <div
        aria-atomic="true"
        aria-live="polite"
        className="min-h-[4.5rem] rounded-lg border border-white/8 bg-black/20 px-4 py-3"
      >
        <div key={activeMilestone.id}>
          <p className="text-xs font-medium uppercase tracking-wider text-[var(--primary)]">
            {activeMilestone.label}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-white/70 md:text-base">
            {activeMilestone.description}
          </p>
        </div>
      </div>

      <div className="relative flex items-start justify-between gap-2">
        <div className="absolute left-[10%] right-[10%] top-5 h-px bg-[var(--primary)]/30" />
        <div
          className="absolute top-5 h-px origin-left bg-[var(--primary)] shadow-[0_0_8px_var(--primary)] transition-[width] duration-500 ease-in-out"
          style={{ left: "10%", width: `${progressWidth}%` }}
        />
        <div
          className="absolute top-[18px] h-2 w-2 -translate-y-1/2 rounded-full bg-[var(--primary)] shadow-[0_0_12px_var(--primary)] transition-[left] duration-500 ease-in-out"
          style={{ left: `calc(10% + ${progressWidth}% - 4px)` }}
        />

        {milestones.map((milestone, index) => {
          const Icon = iconMap[milestone.icon];
          const status = getStepStatus(index, activeIndex);
          const isActive = status === "Active";
          const isCompleted = status === "Completed";

          return (
            <button
              aria-current={isActive ? "step" : undefined}
              aria-label={`${milestone.label}: ${status}`}
              className="relative z-10 flex flex-1 flex-col items-center gap-2 bg-transparent p-0"
              key={milestone.id}
              onClick={() => setActiveIndex(index)}
              type="button"
            >
              <div
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300",
                  isActive
                    ? "scale-105 border-[var(--primary)] bg-[var(--primary)]/10 shadow-[0_0_16px_rgba(0,212,255,0.35)]"
                    : isCompleted
                      ? "border-[var(--primary)]/40 bg-[var(--primary)]/5"
                      : "border-white/20 bg-white/5",
                )}
              >
                <Icon
                  className={cn(
                    "h-4 w-4 transition-colors duration-300",
                    isActive || isCompleted ? "text-[var(--primary)]" : "text-white/50",
                  )}
                />
              </div>
              <p
                className={cn(
                  "text-center text-[11px] font-medium leading-tight transition-colors duration-300",
                  isActive ? "text-white" : isCompleted ? "text-white/80" : "text-white/50",
                )}
              >
                {milestone.label}
              </p>
              <p
                className={cn(
                  "text-[10px] transition-colors duration-300",
                  isActive
                    ? "text-[var(--primary)]"
                    : isCompleted
                      ? "text-[var(--primary)]/70"
                      : "text-white/40",
                )}
              >
                {status}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
