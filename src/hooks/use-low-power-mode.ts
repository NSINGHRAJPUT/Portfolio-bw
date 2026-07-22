"use client";

import { useEffect, useState } from "react";

/** True when the device should skip heavy GPU effects (3D, bloom, reflections). */
export function useLowPowerMode() {
  const [lowPower, setLowPower] = useState(false);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const narrow = window.matchMedia("(max-width: 900px)");
    const saveData =
      "connection" in navigator &&
      Boolean((navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData);

    const evaluate = () => {
      setLowPower(motion.matches || narrow.matches || saveData);
    };

    evaluate();
    motion.addEventListener("change", evaluate);
    narrow.addEventListener("change", evaluate);
    return () => {
      motion.removeEventListener("change", evaluate);
      narrow.removeEventListener("change", evaluate);
    };
  }, []);

  return lowPower;
}
