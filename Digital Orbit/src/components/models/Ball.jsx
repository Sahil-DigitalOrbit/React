import React from "react";
import {  Decal,  Float,  OrbitControls, useTexture,} from "@react-three/drei";
export default function Ball(props) {
  const [decal] = useTexture([props.imgUrl]);
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <OrbitControls enableZoom={false} maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2}/>
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial wireframe color="#d1d1d1"  polygonOffset  polygonOffsetFactor={-5}  flatShading/>
        <Decal  position={[0, 0, 1]}  rotation={[2 * Math.PI, 0, 6.25]}  scale={1} map={decal}   flatShading/>
      </mesh>
    </Float>
  );
}
