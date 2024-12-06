import { useGLTF } from "@react-three/drei";
import { useEffect, useState } from "react";

export default function Planet(prop) {
  const planet = useGLTF(prop.gltfLink);
  const [scale, setScale] = useState(1.1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setScale(0.6); 
      } else if (width <= 1024) {
        setScale(0.8); 
      } else {
        setScale(1.1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <primitive object={planet.scene} scale={scale} />;
}
