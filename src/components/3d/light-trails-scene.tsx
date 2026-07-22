"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

import { brandColors } from "@/lib/config/brand";
import { useScrollStore } from "@/stores/scroll-store";

const RIBBON_COLORS = brandColors.ribbon;
const SEGMENTS = 48;
const RIBBON_COUNT = 3;
const UPDATE_EVERY = 3;

function fillCurvePoints(
  target: Float32Array,
  time: number,
  index: number,
  scroll: number,
  velocity: number,
) {
  const speed = 0.28 + index * 0.05 + Math.abs(velocity) * 0.08;
  const phase = index * 1.9;
  const amplitude = 1.2 + (index % 3) * 0.35;
  const scrollShift = scroll * Math.PI * 2;
  const parallaxDir = index % 2 === 0 ? 1 : -1;

  for (let i = 0; i <= SEGMENTS; i++) {
    const t = i / SEGMENTS;
    const x =
      (t - 0.5) * 22 +
      scroll * 4 * parallaxDir +
      Math.sin(scrollShift + phase) * 1.1;
    const y =
      Math.sin(t * Math.PI * 1.8 + time * speed + phase + scrollShift * 0.3) * amplitude * 0.5 +
      Math.sin(t * Math.PI * 4 + time * speed * 0.5) * 0.25 +
      scroll * 1.6 * parallaxDir -
      velocity * 1.2 -
      0.5;
    const z =
      Math.cos(t * Math.PI * 1.5 + time * speed * 0.4 + phase) * 1.6 -
      2 +
      Math.sin(time * 0.25 + phase) * 0.35 +
      scroll * 1.4;

    const offset = i * 3;
    target[offset] = x;
    target[offset + 1] = y;
    target[offset + 2] = z;
  }
}

function GridFloor() {
  const grid = useMemo(() => {
    const helper = new THREE.GridHelper(36, 24, "#00d4ff", "#003344");
    helper.position.y = -2.8;
    const materials = Array.isArray(helper.material) ? helper.material : [helper.material];
    materials.forEach((mat) => {
      mat.transparent = true;
      mat.opacity = 0.1;
    });
    return helper;
  }, []);

  return <primitive object={grid} />;
}

function Particles() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 48;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = -2 - Math.random() * 8;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const { progress } = useScrollStore.getState();
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.015 + progress * 0.4;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        blending={THREE.AdditiveBlending}
        color="#00d4ff"
        depthWrite={false}
        opacity={0.55}
        size={0.05}
        sizeAttenuation
        transparent
      />
    </points>
  );
}

function LightRibbon({ index }: { index: number }) {
  const lineRef = useRef<THREE.Line | null>(null);
  const positions = useMemo(() => new Float32Array((SEGMENTS + 1) * 3), []);
  const frameCount = useRef(0);

  const line = useMemo(() => {
    fillCurvePoints(positions, 0, index, 0, 0);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const mat = new THREE.LineBasicMaterial({
      color: RIBBON_COLORS[index % RIBBON_COLORS.length],
      transparent: true,
      opacity: 0.55 + (index % 3) * 0.1,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    return new THREE.Line(geo, mat);
  }, [index, positions]);

  useFrame((state) => {
    frameCount.current += 1;
    if (frameCount.current % UPDATE_EVERY !== 0 || !lineRef.current) return;

    const { progress, velocity } = useScrollStore.getState();
    fillCurvePoints(positions, state.clock.elapsedTime, index, progress, velocity);
    const attr = lineRef.current.geometry.getAttribute("position") as THREE.BufferAttribute;
    attr.needsUpdate = true;
  });

  return (
    <primitive
      object={line}
      ref={(node: THREE.Line | null) => {
        lineRef.current = node;
      }}
    />
  );
}

function GlowOrbs() {
  const groupRef = useRef<THREE.Group>(null);

  const orbs = useMemo(
    () =>
      Array.from({ length: 4 }, (_, i) => ({
        position: [
          (Math.random() - 0.5) * 12,
          (Math.random() - 0.5) * 7,
          -4 - Math.random() * 3,
        ] as [number, number, number],
        scale: 0.35 + Math.random() * 0.55,
        speed: 0.2 + Math.random() * 0.35,
        phase: Math.random() * Math.PI * 2,
        parallax: 0.6 + (i % 3) * 0.35,
      })),
    [],
  );

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.elapsedTime;
    const { progress, velocity } = useScrollStore.getState();

    groupRef.current.children.forEach((child, i) => {
      const orb = orbs[i];
      child.position.y =
        orb.position[1] +
        Math.sin(time * orb.speed + orb.phase) * 0.7 -
        progress * 2 * orb.parallax;
      child.position.x =
        orb.position[0] +
        Math.cos(time * orb.speed * 0.7 + orb.phase) * 0.4 +
        velocity * orb.parallax;
    });
  });

  return (
    <group ref={groupRef}>
      {orbs.map((orb, i) => (
        <mesh key={i} position={orb.position} scale={orb.scale}>
          <sphereGeometry args={[1, 10, 10]} />
          <meshBasicMaterial
            blending={THREE.AdditiveBlending}
            color={brandColors.primary}
            depthWrite={false}
            opacity={0.2}
            transparent
          />
        </mesh>
      ))}
    </group>
  );
}

function SceneRig() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (!groupRef.current) return;
    const { progress, velocity } = useScrollStore.getState();
    groupRef.current.rotation.z = progress * 0.06 - velocity * 0.02;
    groupRef.current.rotation.x = progress * 0.03;
    groupRef.current.position.y = -progress * 1.8 + velocity * 0.4;
    groupRef.current.position.x = Math.sin(progress * Math.PI) * 0.8;
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.12} />
      <GridFloor />
      {Array.from({ length: RIBBON_COUNT }, (_, i) => (
        <LightRibbon index={i} key={i} />
      ))}
      <GlowOrbs />
      <Particles />
    </group>
  );
}

function CameraParallax() {
  useFrame((state) => {
    const { progress, velocity } = useScrollStore.getState();
    state.camera.position.y = THREE.MathUtils.lerp(
      state.camera.position.y,
      -progress * 2 + velocity * 0.25,
      0.06,
    );
    state.camera.position.z = THREE.MathUtils.lerp(
      state.camera.position.z,
      6 + progress * 1.5,
      0.06,
    );
    state.camera.lookAt(0, -progress * 1.2, 0);
  });

  return null;
}

export function LightTrailsScene() {
  return (
    <>
      <CameraParallax />
      <SceneRig />
    </>
  );
}
