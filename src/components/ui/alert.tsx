import { HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const alertVariants = cva(
  "w-full rounded-[var(--radius-lg)] border px-4 py-3 text-sm shadow-[var(--shadow-sm)]",
  {
    variants: {
      variant: {
        info: "border-[var(--info)]/30 bg-[var(--info)]/10 text-[var(--fg)]",
        success: "border-[var(--success)]/30 bg-[var(--success)]/10 text-[var(--fg)]",
        warning: "border-[var(--warning)]/30 bg-[var(--warning)]/10 text-[var(--fg)]",
        danger: "border-[var(--danger)]/30 bg-[var(--danger)]/10 text-[var(--fg)]",
      },
    },
    defaultVariants: {
      variant: "info",
    },
  },
);

interface AlertProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants> {}

export function Alert({ className, variant, ...props }: AlertProps) {
  return <div className={cn(alertVariants({ variant }), className)} role="alert" {...props} />;
}
