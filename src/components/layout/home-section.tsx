import { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

interface HomeSectionProps extends PropsWithChildren {
  id?: string;
  className?: string;
}

/** Consistent full-width column used across the site */
export function HomeSection({ id, className, children }: HomeSectionProps) {
  return (
    <section className={cn("container-safe py-24", className)} id={id}>
      <div className="w-full">{children}</div>
    </section>
  );
}
