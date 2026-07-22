"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";

import { AiOrb } from "@/components/3d/ai-orb";

export function SceneCanvas() {
  const [dragging, setDragging] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onVisibility = () => setVisible(document.visibilityState === "visible");
    onVisibility();
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  return (
    <div aria-hidden className="h-[280px] w-full cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0, 3.6] }}
        dpr={1}
        frameloop={visible ? "always" : "never"}
        gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.45} />
        <pointLight intensity={2.1} position={[2, 2, 2]} />
        <AiOrb paused={dragging} />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          onEnd={() => setDragging(false)}
          onStart={() => setDragging(true)}
        />
      </Canvas>
    </div>
  );
}
