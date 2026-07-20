import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-[var(--radius-lg)] text-sm font-medium transition-[transform,box-shadow,opacity,background-color,color] duration-[var(--dur-base)] ease-[var(--ease-standard)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "gradient-primary text-[#020810] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-glow)]",
        secondary:
          "border border-[var(--primary)]/25 bg-[var(--primary)]/5 text-[var(--fg)] hover:bg-[var(--primary)]/10 hover:border-[var(--primary)]/40 hover:shadow-[0_0_20px_rgba(0,212,255,0.15)]",
        ghost: "text-[var(--fg)] hover:bg-white/8",
      },
      size: {
        sm: "h-9 px-3",
        default: "h-10 px-4 py-2",
        lg: "h-12 px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  ),
);
Button.displayName = "Button";

export { Button, buttonVariants };
