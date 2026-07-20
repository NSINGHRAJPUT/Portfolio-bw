"use client";

import dynamic from "next/dynamic";

import { ScrollParallaxTracker } from "@/components/3d/scroll-parallax-tracker";

const LightTrailsCanvas = dynamic(
  () => import("@/components/3d/light-trails-canvas").then((mod) => mod.LightTrailsCanvas),
  { ssr: false },
);

export function LightTrailsBackground() {
  return (
    <>
      <ScrollParallaxTracker />
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[#020810]" />
        <div className="absolute inset-0 opacity-95" style={{ filter: "blur(24px)" }}>
          <LightTrailsCanvas />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#020810]/50 via-transparent to-[#020810]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(0,212,255,0.12),transparent)]" />
        <div className="cyber-grid-floor absolute inset-x-0 bottom-0 h-1/3 opacity-40" />
      </div>
    </>
  );
}
