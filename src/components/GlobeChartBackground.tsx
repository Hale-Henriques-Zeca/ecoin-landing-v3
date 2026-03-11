"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Line } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { Line2 } from "three-stdlib";

/* 🌍 Globo rotativo */
function RotatingGlobe() {
  const globeRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (globeRef.current) globeRef.current.rotation.y += 0.0015;
  });

  return (
    <Sphere args={[2.2, 64, 64]} ref={globeRef}>
      <meshStandardMaterial
        color="#0a0a0a"
        emissive="#D4AF37"
        emissiveIntensity={0.25}
        wireframe
      />
    </Sphere>
  );
}

/* 📈 Linha animada */
function GrowingChart() {
  const lineRef = useRef<Line2>(null);

  useFrame(({ clock }) => {
    if (lineRef.current) {
      lineRef.current.rotation.y = clock.elapsedTime * 0.1;
    }
  });

  const points = Array.from({ length: 50 }, (_, i) =>
    new THREE.Vector3(i * 0.12, Math.sin(i * 0.4) * 0.6, 0)
  );

  return (
    <Line
      ref={lineRef}
      points={points}
      color="#D4AF37"
      lineWidth={1}
    />
  );
}

/* 🌌 Background */
export default function GlobeChartBackground() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: false, powerPreference: "low-power" }}
    >
      <ambientLight intensity={0.35} />
      <pointLight position={[5, 5, 5]} intensity={1} />
      <RotatingGlobe />
      <GrowingChart />
    </Canvas>
  );
}
