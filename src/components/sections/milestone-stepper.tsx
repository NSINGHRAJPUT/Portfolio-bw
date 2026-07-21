"use client";

import { useEffect, useState } from "react";
import {
  ClipboardCheck,
  HelpCircle,
  Rocket,
  Search,
  Wrench,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

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
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % milestones.length);
    }, STEP_DURATION_MS);

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
        <AnimatePresence mode="wait">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            initial={{ opacity: 0, y: 8 }}
            key={activeMilestone.id}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <p className="text-xs font-medium uppercase tracking-wider text-[var(--primary)]">
              {activeMilestone.label}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-white/70 md:text-base">
              {activeMilestone.description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative flex items-start justify-between gap-2">
        <div className="absolute left-[10%] right-[10%] top-5 h-px bg-[var(--primary)]/30" />
        <motion.div
          animate={{ width: `${progressWidth}%` }}
          className="absolute top-5 h-px origin-left bg-[var(--primary)] shadow-[0_0_12px_var(--primary)]"
          initial={false}
          style={{ left: "10%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
        <motion.div
          animate={{
            left: `calc(10% + ${progressWidth}% - 4px)`,
          }}
          className="absolute top-[18px] h-2 w-2 -translate-y-1/2 rounded-full bg-[var(--primary)] shadow-[0_0_16px_var(--primary),0_0_32px_var(--primary)]"
          initial={false}
          transition={{ duration: 0.6, ease: "easeInOut" }}
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
              <motion.div
                animate={{
                  scale: isActive ? 1.08 : 1,
                  boxShadow: isActive
                    ? "0 0 20px rgba(0,212,255,0.4)"
                    : "0 0 0px rgba(0,212,255,0)",
                }}
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300",
                  isActive
                    ? "border-[var(--primary)] bg-[var(--primary)]/10"
                    : isCompleted
                      ? "border-[var(--primary)]/40 bg-[var(--primary)]/5"
                      : "border-white/20 bg-white/5",
                )}
                transition={{ duration: 0.35 }}
              >
                <Icon
                  className={cn(
                    "h-4 w-4 transition-colors duration-300",
                    isActive || isCompleted
                      ? "text-[var(--primary)]"
                      : "text-white/50",
                  )}
                />
              </motion.div>
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
