"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

import { brandColors } from "@/lib/config/brand";
import { useScrollStore } from "@/stores/scroll-store";

const RIBBON_COLORS = brandColors.ribbon;
const SEGMENTS = 100;

function buildCurvePoints(
  time: number,
  index: number,
  scroll: number,
  velocity: number,
) {
  const speed = 0.28 + index * 0.05 + Math.abs(velocity) * 0.1;
  const phase = index * 1.9;
  const amplitude = 1.2 + (index % 3) * 0.4;
  const scrollShift = scroll * Math.PI * 2;
  const parallaxDir = index % 2 === 0 ? 1 : -1;
  const points: THREE.Vector3[] = [];

  for (let i = 0; i <= SEGMENTS; i++) {
    const t = i / SEGMENTS;
    const x =
      (t - 0.5) * 22 +
      scroll * 5 * parallaxDir +
      Math.sin(scrollShift + phase) * 1.2;
    const y =
      Math.sin(t * Math.PI * 1.8 + time * speed + phase + scrollShift * 0.3) * amplitude * 0.5 +
      Math.sin(t * Math.PI * 4 + time * speed * 0.5) * 0.3 +
      scroll * 2 * parallaxDir -
      velocity * 1.5 -
      0.5;
    const z =
      Math.cos(t * Math.PI * 1.5 + time * speed * 0.4 + phase) * 1.8 -
      2 +
      Math.sin(time * 0.25 + phase) * 0.4 +
      scroll * 1.8;
    points.push(new THREE.Vector3(x, y, z));
  }

  return points;
}

function GridFloor() {
  const grid = useMemo(() => {
    const helper = new THREE.GridHelper(40, 40, "#00d4ff", "#003344");
    helper.position.y = -2.8;
    const materials = Array.isArray(helper.material) ? helper.material : [helper.material];
    materials.forEach((mat) => {
      mat.transparent = true;
      mat.opacity = 0.12;
    });
    return helper;
  }, []);

  return <primitive object={grid} />;
}

function Particles() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 120;

  const [positions] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = -2 - Math.random() * 8;
    }
    return [pos];
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const time = state.clock.elapsedTime;
    const { progress } = useScrollStore.getState();
    pointsRef.current.rotation.y = time * 0.02 + progress * 0.5;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#00d4ff"
        size={0.06}
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  );
}
function SceneRig() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (!groupRef.current) return;
    const { progress, velocity } = useScrollStore.getState();

    groupRef.current.rotation.z = progress * 0.08 - velocity * 0.03;
    groupRef.current.rotation.x = progress * 0.04;
    groupRef.current.position.y = -progress * 2.2 + velocity * 0.5;
    groupRef.current.position.x = Math.sin(progress * Math.PI) * 1;
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.12} />
      <GridFloor />
      {Array.from({ length: 6 }, (_, i) => (
        <LightRibbon index={i} key={i} />
      ))}
      <GlowOrbs />
      <Particles />
    </group>
  );
}

function LightRibbon({ index }: { index: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const curveRef = useRef(new THREE.CatmullRomCurve3([new THREE.Vector3()]));
  const frameCount = useRef(0);

  const geometry = useMemo(() => {
    const points = buildCurvePoints(0, index, 0, 0);
    curveRef.current.points = points;
    return new THREE.TubeGeometry(curveRef.current, 160, 0.04 + index * 0.012, 6, false);
  }, [index]);

  useFrame((state) => {
    if (!meshRef.current) return;

    frameCount.current += 1;
    if (frameCount.current % 2 !== 0) return;

    const { progress, velocity } = useScrollStore.getState();
    const time = state.clock.elapsedTime;
    const points = buildCurvePoints(time, index, progress, velocity);
    curveRef.current.points = points;

    meshRef.current.geometry.dispose();
    meshRef.current.geometry = new THREE.TubeGeometry(
      curveRef.current,
      160,
      0.04 + index * 0.012,
      6,
      false,
    );
  });

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshBasicMaterial
        color={RIBBON_COLORS[index % RIBBON_COLORS.length]}
        transparent
        opacity={0.45 + (index % 3) * 0.12}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  );
}

function GlowOrbs() {
  const groupRef = useRef<THREE.Group>(null);

  const orbs = useMemo(
    () =>
      Array.from({ length: 8 }, (_, i) => ({
        position: [
          (Math.random() - 0.5) * 14,
          (Math.random() - 0.5) * 8,
          -4 - Math.random() * 3,
        ] as [number, number, number],
        scale: 0.3 + Math.random() * 0.8,
        speed: 0.2 + Math.random() * 0.4,
        phase: Math.random() * Math.PI * 2,
        parallax: 0.6 + (i % 3) * 0.4,
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
        Math.sin(time * orb.speed + orb.phase) * 0.8 -
        progress * 2.5 * orb.parallax;
      child.position.x =
        orb.position[0] +
        Math.cos(time * orb.speed * 0.7 + orb.phase) * 0.5 +
        velocity * orb.parallax;
    });
  });

  return (
    <group ref={groupRef}>
      {orbs.map((orb, i) => (
        <mesh key={i} position={orb.position} scale={orb.scale}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshBasicMaterial
            color={brandColors.primary}
            transparent
            opacity={0.22}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
      ))}
    </group>
  );
}

function CameraParallax() {
  useFrame((state) => {
    const { progress, velocity } = useScrollStore.getState();
    state.camera.position.y = THREE.MathUtils.lerp(
      state.camera.position.y,
      -progress * 2.2 + velocity * 0.3,
      0.06,
    );
    state.camera.position.z = THREE.MathUtils.lerp(
      state.camera.position.z,
      6 + progress * 1.8,
      0.06,
    );
    state.camera.lookAt(0, -progress * 1.5, 0);
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
