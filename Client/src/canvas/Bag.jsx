import React, { useRef } from "react";
import { Decal, useGLTF } from "@react-three/drei";
import { useSnapshot } from "valtio";
import state from "../store";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

export const Bag = ({ props }) => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF("/pouch.glb");
  const label = useLoader(TextureLoader, "./label.png");
  const meshRef = useRef();
  const stateString = JSON.stringify(snap);

  return (
    <group {...props} key={stateString}>
      <mesh
        ref={meshRef}
        dispose={null}
        castShadow
        receiveShadow
        // rotation={[degToRad(-90), 0, degToRad(90)]}
        material-color={snap.color}
        geometry={nodes.Object_2.geometry}
        material={materials["Material.003"]}
        rotation={[-Math.PI / 2, 0, -1.405]}
        scale={0.127}
      >
        <Decal
          debug
          position={[-0.3, -0.2, 1]}
          rotation={[0, 0, 0]}
          scale={[0, 0, 0]}
          map={label}
        />
      </mesh>
      
    </group>
  );
};

useGLTF.preload("/pouch.glb");
