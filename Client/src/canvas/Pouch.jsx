import React, { useRef, useState } from "react";
import { Decal, useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { degToRad } from "three/src/math/MathUtils.js";
import { useSnapshot } from "valtio";
import state from "../store";

export function Pouch(props) {
  const { nodes, materials } = useGLTF("models/bag.glb");
  const label = useLoader(TextureLoader, "./label.png");
  const tea = useLoader(TextureLoader, "../src/assets/teaa.jpeg");
  const snap = useSnapshot(state);
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, Math.PI / 1.8]} scale={0.127}>
        <group position={[0, 0, 2.13]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_0.geometry}
            material={materials["Material.003"]}
            material-color={snap.color}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_0_1.geometry}
            material={materials.printable}
          >
            <meshBasicMaterial transparent color={snap.color} />
            <Decal
              position={[-0.1, 0, -0.33]}
              rotation={[Math.PI / 2, degToRad(260), 0]}
              scale={[1.59, 1.59, 1.59]}
            >
              <meshBasicMaterial
                map={tea}
                polygonOffset
                polygonOffsetFactor={-1}
              />
            </Decal>
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_0_2.geometry}
            material={materials.label}
          >
            <meshBasicMaterial transparent opacity={0} />
            <Decal
              position={[0, 0, 1.3]}
              rotation={[Math.PI / 2, degToRad(260), 0]}
              scale={[2, 2, 2]}
            >
              <meshBasicMaterial
                map={label}
                polygonOffset
                polygonOffsetFactor={-1}
              />
            </Decal>
          </mesh>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/bag.glb");
