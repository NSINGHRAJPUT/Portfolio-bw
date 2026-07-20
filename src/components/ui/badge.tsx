import { HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-[var(--radius-pill)] border px-3 py-1 text-xs font-medium",
  {
    variants: {
      variant: {
        neutral: "border-[var(--border)] bg-white/5 text-[var(--fg-muted)]",
        primary: "border-transparent bg-[var(--primary)]/20 text-[var(--fg)]",
        success: "border-transparent bg-[var(--success)]/20 text-[var(--success)]",
        warning: "border-transparent bg-[var(--warning)]/20 text-[var(--warning)]",
        danger: "border-transparent bg-[var(--danger)]/20 text-[var(--danger)]",
      },
    },
    defaultVariants: {
      variant: "neutral",
    },
  },
);

interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, className }))} {...props} />
  );
}
