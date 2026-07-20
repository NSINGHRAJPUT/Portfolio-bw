import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="container-safe flex min-h-[70vh] flex-col items-start justify-center gap-5 py-16">
      <p className="text-sm uppercase tracking-[0.2em] text-muted">404</p>
      <h1 className="text-4xl font-semibold md:text-5xl">Page not found</h1>
      <p className="max-w-xl text-sm text-muted">
        The page you requested does not exist. Return to the homepage or review the information architecture
        resources.
      </p>
      <div className="flex gap-3">
        <Link href="/">
          <Button>Go Home</Button>
        </Link>
        <Link href="/resources">
          <Button variant="secondary">View IA</Button>
        </Link>
      </div>
    </section>
  );
}
