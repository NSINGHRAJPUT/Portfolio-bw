"use client";

import { useEffect, useRef } from "react";

import { useScrollStore } from "@/stores/scroll-store";

export function ScrollParallaxTracker() {
  const lastY = useRef(0);
  const lastTime = useRef(0);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      const now = performance.now();
      const dt = now - lastTime.current || 16;
      const velocity = (window.scrollY - lastY.current) / dt;

      useScrollStore.getState().setScroll(progress, velocity);
      lastY.current = window.scrollY;
      lastTime.current = now;
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return null;
}
