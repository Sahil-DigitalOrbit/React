import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { OrbitControls, Preload } from '@react-three/drei'
import RotatingStars from './models/RotatingStars'

export default function Background() {
  return (
    <div className='fixed h-full w-full'>
    <Canvas camera={{position:[0,0,1]}}>
      <OrbitControls enableZoom={false} enableRotate={false} autoRotate rotateSpeed={10}/>
        <Suspense fallback={null}/>
        <RotatingStars/>
        <Preload all/>
    </Canvas>
    </div>
  )
}
