"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";

import { AiOrb } from "@/components/3d/ai-orb";

export function SceneCanvas() {
  const [dragging, setDragging] = useState(false);

  return (
    <div aria-hidden className="h-[280px] w-full cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 3.6] }}>
        <ambientLight intensity={0.45} />
        <pointLight intensity={2.1} position={[2, 2, 2]} />
        <AiOrb paused={dragging} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          onStart={() => setDragging(true)}
          onEnd={() => setDragging(false)}
        />
      </Canvas>
    </div>
  );
}
