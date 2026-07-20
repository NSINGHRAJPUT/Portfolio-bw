import Link from "next/link";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/config/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--primary)]/15 bg-[#020810]/80 backdrop-blur-xl">
      <div className="container-safe flex h-16 items-center justify-between">
        <Link
          className="text-sm font-semibold tracking-[0.18em] text-[var(--primary)] drop-shadow-[0_0_12px_rgba(0,212,255,0.5)]"
          href="/"
        >
          {siteConfig.name}
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          {siteConfig.nav.map((item) => (
            <Link
              className="text-sm text-white/60 transition hover:text-[var(--primary)]"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/book-meeting">
          <Button size="sm">Book a Call</Button>
        </Link>
      </div>
    </header>
  );
}
