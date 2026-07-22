"use client";

const CYAN = "#00d4ff";

/** Rounded rect: x=1.5 y=1.5 w=97 h=97 rx=5.5 */
const BORDER_PATH =
  "M 7 1.5 H 93 A 5.5 5.5 0 0 1 98.5 7 V 93 A 5.5 5.5 0 0 1 93 98.5 H 7 A 5.5 5.5 0 0 1 1.5 93 V 7 A 5.5 5.5 0 0 1 7 1.5 Z";

const PATH_LENGTH = 100;
const BEAM_LENGTH = 14;

export function RunningBorder() {
  return (
    <svg
      aria-hidden
      className="cyber-border-svg pointer-events-none absolute inset-0 z-20 h-full w-full"
      preserveAspectRatio="none"
      viewBox="0 0 100 100"
    >
      <path
        className="cyber-border-beam"
        d={BORDER_PATH}
        fill="none"
        pathLength={PATH_LENGTH}
        stroke={CYAN}
        strokeLinecap="round"
        strokeWidth={2.4}
        vectorEffect="non-scaling-stroke"
        style={{
          strokeDasharray: `${BEAM_LENGTH} ${PATH_LENGTH - BEAM_LENGTH}`,
        }}
      />
    </svg>
  );
}
