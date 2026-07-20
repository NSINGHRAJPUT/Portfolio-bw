"use client";

import { usePathname } from "next/navigation";

import { LightTrailsBackground } from "@/components/3d/light-trails-background";

export function SiteBackground() {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");

  if (isAdminRoute) return null;

  return <LightTrailsBackground />;
}
