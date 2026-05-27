'use client'

import { Canvas } from '@react-three/fiber'
import { StarField } from './StarField'

export function StarFieldCanvas() {
  return (
    <div className="absolute inset-0 w-full h-full bg-deep pointer-events-none -z-20">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }} className="w-full h-full absolute inset-0">
        <StarField />
      </Canvas>
    </div>
  )
}
export default StarFieldCanvas
