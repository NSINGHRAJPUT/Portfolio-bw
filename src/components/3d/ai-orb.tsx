"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef, useState } from "react";
import * as THREE from "three";

const PALETTE = [
  new THREE.Color("#00d4ff"),
  new THREE.Color("#7c3aed"),
  new THREE.Color("#06b6d4"),
  new THREE.Color("#a855f7"),
  new THREE.Color("#38bdf8"),
  new THREE.Color("#e879f9"),
  new THREE.Color("#34d399"),
];

export function AiOrb({ paused }: { paused?: boolean }) {
  const groupRef = useRef<THREE.Group>(null);

  const { pointsGeo, edgesGeo } = useMemo(() => {
    const base = new THREE.IcosahedronGeometry(1.2, 2);
    const pos = base.attributes.position;
    const count = pos.count;

    // per-vertex colors for points
    const colorArr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const c = PALETTE[i % PALETTE.length];
      colorArr[i * 3] = c.r;
      colorArr[i * 3 + 1] = c.g;
      colorArr[i * 3 + 2] = c.b;
    }
    base.setAttribute("color", new THREE.BufferAttribute(colorArr, 3));

    // edges geometry from the same base
    const edgesGeo = new THREE.EdgesGeometry(base);

    return { pointsGeo: base, edgesGeo };
  }, []);

  useFrame((state) => {
    if (!groupRef.current || paused) return;
    groupRef.current.rotation.y += 0.003;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.2;
  });

  return (
    <group ref={groupRef}>
      <lineSegments geometry={edgesGeo}>
        <lineBasicMaterial color="#00d4ff" opacity={0.3} transparent />
      </lineSegments>
      <points geometry={pointsGeo}>
        <pointsMaterial size={0.06} sizeAttenuation vertexColors />
      </points>
    </group>
  );
}
