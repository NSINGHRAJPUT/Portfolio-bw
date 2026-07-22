"use client";

import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";

import { LightTrailsScene } from "@/components/3d/light-trails-scene";

export function LightTrailsCanvas() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onVisibility = () => setVisible(document.visibilityState === "visible");
    onVisibility();
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 60 }}
      className="!h-full !w-full"
      dpr={1}
      frameloop={visible ? "always" : "never"}
      gl={{
        antialias: false,
        alpha: true,
        powerPreference: "high-performance",
        stencil: false,
        depth: true,
      }}
      performance={{ min: 0.5 }}
    >
      <LightTrailsScene />
    </Canvas>
  );
}
