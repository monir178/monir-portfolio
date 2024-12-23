"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

const StarBackground = React.memo(({ count = 1500 }: { count?: number }) => {
  const ref = useRef<THREE.Points>(null);
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(count), { radius: 1.2 })
  );

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#c084fc"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
});

StarBackground.displayName = "StarBackground";

const StarsCanvas = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full h-auto fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 1.5] }}
        style={{ pointerEvents: "none" }}
        gl={{
          antialias: false,
          powerPreference: "high-performance",
          alpha: true,
        }}>
        <React.Suspense fallback={null}>
          <StarBackground />
        </React.Suspense>
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
