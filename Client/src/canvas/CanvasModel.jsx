import React from "react";
import { Canvas } from "@react-three/fiber";
import { Shirt } from "./Shirt";
import { Center, Environment, OrbitControls, Preload } from "@react-three/drei";
import CameraRig from "./CameraRig";
import Backdrop from "./Backdrop";
import { Bag } from "./Bag";
import { Pouch } from "./Pouch";
const CanvasModel = () => {
  
  return (
    <>
       <Canvas
      frameloop="always"
      camera={{ position: [0, 0, 2], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      shadows
      className="w-full max-w-full h-full transition-all ease-in"
    >
      <ambientLight intensity={1} />
      <directionalLight
        position={[5, 10, 5]} // Fixed position
        intensity={.9}
        // castShadow
        // shadow-mapSize={[1024, 1024]}
      />
      <spotLight
      position={[0,1,-.9]}
      intensity={1}/>
      
      <OrbitControls
        // enableZoom={false}
        enableDamping
      />
      <Center>
        {/* <Shirt /> */}
        {/* <Bag/> */}
        <Pouch/>
      </Center>
      <Preload all />
    </Canvas>
    </>
  );
};

export default CanvasModel;
