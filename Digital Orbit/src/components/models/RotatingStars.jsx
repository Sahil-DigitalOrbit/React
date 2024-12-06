import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef, useEffect, useState } from "react";
import { PointMaterial, Points } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

export default function RotatingStars({ speed }) {
  const ref = useRef();
  const [sphere, setSphere] = useState([]);

  useEffect(() => {
    let spherePositions = random.inSphere(new Float32Array(3000), { radius: 1.2 });
    // Remove NaN values by ensuring that each vertex is a valid number
    spherePositions = spherePositions.filter(value => !isNaN(value));
    setSphere(spherePositions);
  }, []);
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group ref={ref} rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}
