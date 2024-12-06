import { OrbitControls, Preload, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import Planet from "./models/Planet";
import CanvasLoader from "./CanvasLoader";
export default function Hero() {
  
  return (
    <section className="flex justify-center items-center h-96 mt-12">
    <div
    className="canvas-container">
      <Canvas
        shadows  
        frameloop="always"
        camera={{ position: [20, 3, 5], fov: 35 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader/>}>
          <OrbitControls 
            enableZoom={false} 
            autoRotate 
            autoRotateSpeed={.7} 
          />
          
          <Environment preset="city" />
          <Planet gltfLink={"/mercury_planet/scene.gltf"}/>
          
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
    <h1 className="text-7xl font-medium z-10">POWERFUL DIGITAL <span className="text-lime-300">SOLUTION</span></h1>
    </section>
  );
}
