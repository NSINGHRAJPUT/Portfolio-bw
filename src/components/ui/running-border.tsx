"use client";

import { useId } from "react";

/** SVG stroke animation with neon bloom — light travels only along the card perimeter */
export function RunningBorder() {
  const uid = useId().replace(/:/g, "");
  const glowFilter = `cyber-glow-${uid}`;
  const beamGradient = `cyber-beam-${uid}`;

  const rectProps = {
    fill: "none" as const,
    height: 97,
    pathLength: 100,
    rx: 5.5,
    ry: 5.5,
    width: 97,
    x: 1.5,
    y: 1.5,
    vectorEffect: "non-scaling-stroke" as const,
    strokeLinecap: "round" as const,
  };

  return (
    <svg
      aria-hidden
      className="cyber-border-svg pointer-events-none absolute inset-0 z-20 h-full w-full"
      preserveAspectRatio="none"
      viewBox="0 0 100 100"
    >
      <defs>
        <linearGradient id={beamGradient} x1="0%" x2="100%" y1="0%" y2="0%">
          <stop offset="0%" stopColor="#00d4ff" stopOpacity="0" />
          <stop offset="35%" stopColor="#00d4ff" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="65%" stopColor="#00d4ff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#00d4ff" stopOpacity="0" />
        </linearGradient>

        <filter
          colorInterpolationFilters="sRGB"
          height="300%"
          id={glowFilter}
          width="300%"
          x="-100%"
          y="-100%"
        >
          <feGaussianBlur result="blur1" stdDeviation="3" />
          <feGaussianBlur in="blur1" result="blur2" stdDeviation="6" />
          <feMerge>
            <feMergeNode in="blur2" />
            <feMergeNode in="blur1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Static edge track */}
      <rect
        {...rectProps}
        pathLength={undefined}
        stroke="rgba(0,212,255,0.35)"
        strokeLinecap="butt"
        strokeWidth={1}
      />

      {/* Outer bloom — wide soft halo */}
      <rect
        {...rectProps}
        className="cyber-border-outer-glow"
        filter={`url(#${glowFilter})`}
        stroke="#00d4ff"
        strokeOpacity={0.55}
        strokeWidth={3.5}
      />

      {/* Mid glow trail */}
      <rect
        {...rectProps}
        className="cyber-border-glow-trail"
        stroke="#38bdf8"
        strokeOpacity={0.75}
        strokeWidth={2}
      />

      {/* Primary cyan beam */}
      <rect
        {...rectProps}
        className="cyber-border-beam"
        stroke={`url(#${beamGradient})`}
        strokeWidth={1.2}
      />

      {/* Hot white core */}
      <rect
        {...rectProps}
        className="cyber-border-core"
        stroke="#ffffff"
        strokeOpacity={0.95}
        strokeWidth={0.45}
      />
    </svg>
  );
}
