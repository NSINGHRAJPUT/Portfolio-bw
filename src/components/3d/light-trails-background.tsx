"use client";

import dynamic from "next/dynamic";

import { ScrollParallaxTracker } from "@/components/3d/scroll-parallax-tracker";
import { useLowPowerMode } from "@/hooks/use-low-power-mode";

const LightTrailsCanvas = dynamic(
  () => import("@/components/3d/light-trails-canvas").then((mod) => mod.LightTrailsCanvas),
  { ssr: false },
);

function StaticAtmosphere() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_-5%,rgba(0,212,255,0.16),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(56,189,248,0.1),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_70%,rgba(0,153,204,0.08),transparent_45%)]" />
      <div className="cyber-grid-floor absolute inset-x-0 bottom-0 h-1/3 opacity-30" />
    </>
  );
}

export function LightTrailsBackground() {
  const lowPower = useLowPowerMode();

  return (
    <>
      {!lowPower ? <ScrollParallaxTracker /> : null}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[#020810]" />
        {lowPower ? (
          <StaticAtmosphere />
        ) : (
          <>
            <div className="absolute inset-0 opacity-90">
              <LightTrailsCanvas />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#020810]/50 via-transparent to-[#020810]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(0,212,255,0.12),transparent)]" />
            <div className="cyber-grid-floor absolute inset-x-0 bottom-0 h-1/3 opacity-40" />
          </>
        )}
      </div>
    </>
  );
}
