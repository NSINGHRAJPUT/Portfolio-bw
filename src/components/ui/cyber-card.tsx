import { HTMLAttributes } from "react";

import { RunningBorder } from "@/components/ui/running-border";
import { cn } from "@/lib/utils";

interface CyberCardProps extends HTMLAttributes<HTMLDivElement> {
  glow?: boolean;
  reflected?: boolean;
  runningBorder?: boolean;
  /** Classes for the outer wrapper (e.g. width, margin) */
  wrapperClassName?: string;
}

export function CyberCard({
  className,
  wrapperClassName,
  glow = true,
  reflected = false,
  runningBorder = false,
  children,
  ...props
}: CyberCardProps) {
  const cardInner = (
    <div
      className={cn(
        "cyber-card relative overflow-hidden rounded-2xl",
        glow && !runningBorder && "cyber-card-glow",
        runningBorder && "cyber-card-inner",
        className,
      )}
    >
      {!runningBorder ? (
        <>
          <div className="cyber-card-flare cyber-card-flare-top" />
          <div className="cyber-card-flare cyber-card-flare-bottom" />
        </>
      ) : null}
      {children}
    </div>
  );

  return (
    <div className={cn(reflected && "relative", wrapperClassName)} {...props}>
      {runningBorder ? (
        <div className="cyber-running-border relative rounded-2xl">
          {cardInner}
          <RunningBorder />
        </div>
      ) : (
        cardInner
      )}
      {reflected ? (
        <div
          aria-hidden
          className="cyber-reflection pointer-events-none absolute inset-x-4 top-full mt-1 h-24 opacity-30"
        >
          <div className="cyber-card h-full scale-y-[-1] rounded-2xl blur-[2px]" />
        </div>
      ) : null}
    </div>
  );
}
