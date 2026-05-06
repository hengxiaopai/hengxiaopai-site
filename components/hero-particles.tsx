"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";
import type { Points as ThreePoints } from "three";

function ParticleCloud() {
  const ref = useRef<ThreePoints>(null);
  const positions = useMemo(() => {
    const count = 1400;
    const array = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 1.8 + Math.random() * 2.9;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      array[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      array[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.58;
      array[i * 3 + 2] = radius * Math.cos(phi) * 0.42;
    }
    return array;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.y = t * 0.045;
    ref.current.rotation.x = Math.sin(t * 0.18) * 0.08;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        depthWrite={false}
        size={0.018}
        sizeAttenuation
        color="#9CB6FF"
        opacity={0.72}
      />
    </Points>
  );
}

export function HeroParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_36%,rgba(93,136,255,.28),transparent_32%),radial-gradient(circle_at_38%_70%,rgba(198,160,106,.18),transparent_28%)]" />
      <Canvas
        camera={{ position: [0, 0, 6.2], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <ParticleCloud />
      </Canvas>
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(10,13,18,.05),#0A0D12_92%)]" />
    </div>
  );
}
