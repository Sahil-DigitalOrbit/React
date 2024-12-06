import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useState } from "react";

export default function Booth({ gltfLink }) {
  const { scene } = useGLTF (gltfLink);
  const [scale, setScale] = useState();

  // Responsive scaling based on screen size
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setScale(0.05);
      } else if (width <= 1024) {
        setScale(0.09);
      } else {
        setScale(0.05);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  
  return (
    <primitive  object={scene}  scale={scale}  position={[0, -1.8, 0]}/>
  );
}
