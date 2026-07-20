"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

const navItems = [{ href: "/admin/blog", label: "Blog Posts" }];

export function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <div className="min-h-screen bg-[#020810] text-white">
      <div className="border-b border-[var(--primary)]/15 bg-black/40 backdrop-blur-xl">
        <div className="container-safe flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link className="text-sm font-semibold tracking-[0.18em] text-[var(--primary)]" href="/admin/blog">
              NSRGFX Admin
            </Link>
            <nav className="hidden items-center gap-4 md:flex">
              {navItems.map((item) => (
                <Link
                  className={`text-sm transition ${pathname.startsWith(item.href) ? "text-[var(--primary)]" : "text-white/60 hover:text-white"}`}
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <Link className="text-sm text-white/50 hover:text-white" href="/">
              View site
            </Link>
            <Button onClick={handleLogout} size="sm" variant="secondary">
              Logout
            </Button>
          </div>
        </div>
      </div>
      <main className="container-safe py-10">{children}</main>
    </div>
  );
}
