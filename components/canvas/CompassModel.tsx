'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Inner Animated 3D Mesh Compass
export function CompassModel() {
  const compassGroup = useRef<THREE.Group>(null)
  const needleGroup = useRef<THREE.Group>(null)
  const coreRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()

    // 1. Slow continuous Y rotation for the compass body + Floating animation
    if (compassGroup.current) {
      compassGroup.current.rotation.y = time * 0.2
      compassGroup.current.rotation.x = Math.sin(time * 0.5) * 0.08
      compassGroup.current.position.y = Math.sin(time * 1.5) * 0.12
    }

    // 2. Continuous needle oscillation on Z (simulates magnetic tracking)
    if (needleGroup.current) {
      needleGroup.current.rotation.z = Math.sin(time * 2.2) * 0.12 + Math.cos(time * 0.6) * 0.08
    }

    // 3. Glowing emissive core pulse
    if (coreRef.current && coreRef.current.material) {
      const mat = coreRef.current.material as THREE.MeshStandardMaterial
      mat.emissiveIntensity = 0.6 + Math.sin(time * 3.5) * 0.4
    }
  })

  return (
    <group ref={compassGroup}>
      {/* Outer Golden Torus Ring */}
      <mesh>
        <torusGeometry args={[2, 0.06, 16, 100]} />
        <meshStandardMaterial color="#c8a84b" metalness={0.9} roughness={0.15} />
      </mesh>

      {/* Secondary wireframe torus ring for technological depth */}
      <mesh>
        <torusGeometry args={[2.08, 0.008, 8, 80]} />
        <meshBasicMaterial color="#e8c96a" wireframe />
      </mesh>

      {/* Inner Nested Solid Ring */}
      <mesh>
        <torusGeometry args={[1.4, 0.04, 16, 100]} />
        <meshStandardMaterial color="#c8a84b" metalness={0.8} roughness={0.25} />
      </mesh>

      {/* Micro ticks wireframe */}
      <mesh>
        <torusGeometry args={[1.36, 0.008, 8, 48]} />
        <meshBasicMaterial color="#c8a84b" wireframe />
      </mesh>

      {/* Axis Bars (Cardinal Crosses) */}
      {/* North-South Bar */}
      <mesh>
        <cylinderGeometry args={[0.015, 0.015, 3.8, 12]} />
        <meshStandardMaterial color="#8b3a1f" metalness={0.7} roughness={0.4} />
      </mesh>

      {/* East-West Bar */}
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.015, 0.015, 3.8, 12]} />
        <meshStandardMaterial color="#8b3a1f" metalness={0.7} roughness={0.4} />
      </mesh>

      {/* Diagonal markers */}
      <mesh rotation={[0, 0, Math.PI / 4]}>
        <cylinderGeometry args={[0.01, 0.01, 2.7, 12]} />
        <meshStandardMaterial color="#6b5f4f" metalness={0.8} roughness={0.3} />
      </mesh>
      <mesh rotation={[0, 0, -Math.PI / 4]}>
        <cylinderGeometry args={[0.01, 0.01, 2.7, 12]} />
        <meshStandardMaterial color="#6b5f4f" metalness={0.8} roughness={0.3} />
      </mesh>

      {/* Central Emissive Energy Sphere */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[0.22, 32, 32]} />
        <meshStandardMaterial
          color="#e8c96a"
          emissive="#e8c96a"
          emissiveIntensity={0.8}
          metalness={0.9}
          roughness={0.05}
        />
      </mesh>

      {/* Oscillating Magnetic Needle */}
      <group ref={needleGroup} position={[0, 0, 0.08]}>
        {/* North Pointer (Polished Gold Cone) */}
        <mesh position={[0, 0.65, 0]}>
          <coneGeometry args={[0.08, 1.2, 8]} />
          <meshStandardMaterial color="#e8c96a" metalness={0.95} roughness={0.1} />
        </mesh>
        {/* South Pointer (Weathered Rust/Crimson Cone) */}
        <mesh position={[0, -0.65, 0]} rotation={[0, 0, Math.PI]}>
          <coneGeometry args={[0.08, 1.2, 8]} />
          <meshStandardMaterial color="#8b3a1f" metalness={0.8} roughness={0.35} />
        </mesh>
      </group>
    </group>
  )
}

// Self-contained Responsive WebGL Canvas wrapper
export function CompassCanvas() {
  return (
    <div className="w-full h-[320px] md:h-[450px] relative select-none pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }} className="w-full h-full absolute inset-0">
        <ambientLight intensity={0.4} />
        <pointLight color="#c8a84b" intensity={3.5} position={[2, 3, 2]} />
        <pointLight color="#0066ff" intensity={1.5} position={[-2, -3, 2]} />
        <CompassModel />
      </Canvas>
    </div>
  )
}
export default CompassCanvas
