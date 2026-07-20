"use client";

import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

import { LightTrailsScene } from "@/components/3d/light-trails-scene";

export function LightTrailsCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 60 }}
      className="!h-full !w-full"
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <LightTrailsScene />
      <EffectComposer multisampling={0}>
        <Bloom
          intensity={1.8}
          luminanceSmoothing={0.8}
          luminanceThreshold={0.05}
          mipmapBlur
        />
      </EffectComposer>
    </Canvas>
  );
}
