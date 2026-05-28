'use client'
import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { MeshDistortMaterial } from '@react-three/drei/core/MeshDistortMaterial'
import { Float } from '@react-three/drei/core/Float'
import { Stars } from '@react-three/drei/core/Stars'
import { Trail } from '@react-three/drei/core/Trail'
import * as THREE from 'three'

function mulberry32(seed: number) {
  let t = seed
  return () => {
    t += 0x6D2B79F5
    let x = Math.imul(t ^ (t >>> 15), t | 1)
    x ^= x + Math.imul(x ^ (x >>> 7), x | 61)
    return ((x ^ (x >>> 14)) >>> 0) / 4294967296
  }
}

function Earth() {
  const meshRef = useRef<THREE.Mesh>(null!)
  const glowRef = useRef<THREE.Mesh>(null!)

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.12
    }
    if (glowRef.current) {
      glowRef.current.rotation.y = clock.getElapsedTime() * 0.08
      const pulse = Math.sin(clock.getElapsedTime() * 1.5) * 0.02
      glowRef.current.scale.setScalar(1.15 + pulse)
    }
  })

  // Grid lines on the sphere surface to simulate lat/long
  const gridGeometry = useMemo(() => {
    const geo = new THREE.SphereGeometry(1.01, 32, 32)
    return geo
  }, [])

  return (
    <group>
      {/* Outer atmospheric glow */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[1.15, 32, 32]} />
        <meshPhongMaterial
          color="#1E3A8A"
          transparent
          opacity={0.15}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Teal glow rim */}
      <mesh>
        <sphereGeometry args={[1.08, 32, 32]} />
        <meshPhongMaterial
          color="#0EA5A4"
          transparent
          opacity={0.08}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Main earth sphere */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhongMaterial
          color="#0D1B2A"
          emissive="#1E3A8A"
          emissiveIntensity={0.3}
          shininess={60}
          specular={new THREE.Color('#D4AF37')}
        />
      </mesh>

      {/* Gold wireframe grid overlay */}
      <mesh rotation={[0, 0, 0]}>
        <sphereGeometry args={[1.005, 24, 24]} />
        <meshBasicMaterial
          color="#D4AF37"
          wireframe
          transparent
          opacity={0.12}
        />
      </mesh>

      {/* Continent patches (approximated as distorted blobs) */}
      {continentPositions.map((pos, i) => (
        <mesh key={i} position={pos.position as [number,number,number]} scale={pos.scale}>
          <sphereGeometry args={[0.18, 16, 16]} />
          <meshPhongMaterial
            color="#0EA5A4"
            emissive="#0EA5A4"
            emissiveIntensity={0.4}
            transparent
            opacity={0.7}
          />
        </mesh>
      ))}
    </group>
  )
}

const continentPositions = [
  { position: [0.7, 0.4, 0.6], scale: 1.0 },
  { position: [-0.5, 0.2, 0.85], scale: 0.9 },
  { position: [0.3, -0.5, 0.8], scale: 0.7 },
  { position: [-0.8, -0.1, 0.55], scale: 0.85 },
  { position: [0.9, -0.3, 0.35], scale: 0.6 },
  { position: [-0.2, 0.8, 0.55], scale: 0.75 },
]

function AirplanePath() {
  const groupRef = useRef<THREE.Group>(null!)
  const planeRef = useRef<THREE.Mesh>(null!)

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * 0.3
    if (groupRef.current) {
      groupRef.current.rotation.y = t
      groupRef.current.rotation.z = Math.sin(t * 0.5) * 0.2
    }
  })

  return (
    <group ref={groupRef} rotation={[Math.PI / 4, 0, 0]}>
      {/* Orbit ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.6, 0.005, 8, 80]} />
        <meshBasicMaterial color="#D4AF37" transparent opacity={0.25} />
      </mesh>

      {/* Airplane dot at orbit position */}
      <mesh ref={planeRef} position={[1.6, 0, 0]}>
        <sphereGeometry args={[0.06, 8, 8]} />
        <meshStandardMaterial
          color="#D4AF37"
          emissive="#D4AF37"
          emissiveIntensity={2}
        />
      </mesh>

      {/* Trail effect - small dots along orbit */}
      {[...Array(12)].map((_, i) => {
        const angle = (i / 12) * Math.PI * 0.8
        const x = Math.cos(angle) * 1.6
        const z = Math.sin(angle) * 1.6
        return (
          <mesh key={i} position={[x, 0, z]}>
            <sphereGeometry args={[0.015 * (1 - i / 14), 4, 4]} />
            <meshBasicMaterial
              color="#D4AF37"
              transparent
              opacity={0.6 * (1 - i / 14)}
            />
          </mesh>
        )
      })}
    </group>
  )
}

function SecondAirplanePath() {
  const groupRef = useRef<THREE.Group>(null!)

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * 0.18
    if (groupRef.current) {
      groupRef.current.rotation.x = t
      groupRef.current.rotation.y = t * 0.5
    }
  })

  return (
    <group ref={groupRef} rotation={[0, Math.PI / 3, Math.PI / 5]}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.45, 0.003, 6, 60]} />
        <meshBasicMaterial color="#0EA5A4" transparent opacity={0.2} />
      </mesh>
      <mesh position={[1.45, 0, 0]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshStandardMaterial
          color="#0EA5A4"
          emissive="#0EA5A4"
          emissiveIntensity={2}
        />
      </mesh>
    </group>
  )
}

function FloatingParticles() {
  const count = 60
  const particles = useMemo(() => {
    const rand = mulberry32(271828182)
    return Array.from({ length: count }, (_, i) => {
      const r = 2.5 + rand() * 1.5
      const theta = rand() * Math.PI * 2
      const phi = rand() * Math.PI
      return {
        position: [
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta),
          r * Math.cos(phi),
        ],
        radius: 0.015 + rand() * 0.02,
        opacity: 0.3 + rand() * 0.5,
        color: i % 3 === 0 ? '#D4AF37' : i % 3 === 1 ? '#0EA5A4' : '#ffffff',
      }
    })
  }, [])

  const groupRef = useRef<THREE.Group>(null!)
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.04
    }
  })

  return (
    <group ref={groupRef}>
      {particles.map((particle, i) => (
        <mesh key={i} position={particle.position as [number, number, number]}>
          <sphereGeometry args={[particle.radius, 4, 4]} />
          <meshBasicMaterial
            color={particle.color}
            transparent
            opacity={particle.opacity}
          />
        </mesh>
      ))}
    </group>
  )
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={2} color="#D4AF37" />
      <pointLight position={[-5, -3, -2]} intensity={1} color="#0EA5A4" />
      <pointLight position={[0, -5, 5]} intensity={0.5} color="#1E3A8A" />
      <directionalLight position={[2, 4, 3]} intensity={0.8} color="#ffffff" />
    </>
  )
}

export default function Globe() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 3.5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Lights />
        <Stars
          radius={15}
          depth={8}
          count={800}
          factor={0.3}
          saturation={0.5}
          fade
          speed={0.5}
        />
        <Float speed={0.8} rotationIntensity={0.2} floatIntensity={0.4}>
          <Earth />
        </Float>
        <AirplanePath />
        <SecondAirplanePath />
        <FloatingParticles />
      </Canvas>
    </div>
  )
}
