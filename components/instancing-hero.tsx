'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useRef, useMemo, useEffect } from 'react'
import { InstancedMesh, Object3D, Color, Vector3, MeshLambertMaterial, MeshPhongMaterial, MeshNormalMaterial, BoxGeometry, EdgesGeometry, LineBasicMaterial, HemisphereLight, DirectionalLight } from 'three'

// Instanced Cubes Component - Exact replica of Three.js webgl_instancing_dynamic
function InstancedCubes() {
  const meshRef = useRef<InstancedMesh>(null!)
  const dummy = useMemo(() => new Object3D(), [])
  
  const amount = 100
  const count = Math.pow(amount, 2) // 10,000 cubes
  
  const { seeds, baseColors, colors, animation } = useMemo(() => {
    const seeds: number[] = []
    const baseColors: number[] = []
    const colors = [
      new Color(0x00ffff), // Cyan
      new Color(0xffff00), // Yellow  
      new Color(0xff00ff)  // Magenta
    ]
    const animation = { t: 0, currentColorIndex: 0, nextColorIndex: 1 }
    
    return { seeds, baseColors, colors, animation }
  }, [])
  
  const color = useMemo(() => new Color(), [])
  const cameraTarget = useMemo(() => new Vector3(), [])
  const maxDistance = 75
  
  // Initialize positions and colors exactly like original demo
  useEffect(() => {
    if (!meshRef.current) return
    
    let i = 0
    const offset = (amount - 1) / 2
    
    for (let x = 0; x < amount; x++) {
      for (let z = 0; z < amount; z++) {
        dummy.position.set(offset - x, 0, offset - z)
        dummy.scale.set(1, 2, 1) // Rectangular cubes like original
        dummy.updateMatrix()
        
        // Random base colors for each cube
        color.setHSL(Math.random(), 0.5 + Math.random() * 0.5, 0.5 + Math.random() * 0.5)
        baseColors.push(color.getHex())
        
        meshRef.current.setMatrixAt(i, dummy.matrix)
        meshRef.current.setColorAt(i, color.clone().multiply(colors[0]))
        
        i++
        seeds.push(Math.random())
      }
    }
    
    meshRef.current.instanceMatrix.needsUpdate = true
    if (meshRef.current.instanceColor) {
      meshRef.current.instanceColor.needsUpdate = true
    }
  }, [amount, baseColors, colors, dummy, seeds, color])
  
  // Color wave animation exactly like original
  useEffect(() => {
    const interval = setInterval(() => {
      const startTime = Date.now()
      const duration = 2000
      
      const animate = () => {
        const elapsed = Date.now() - startTime
        const t = Math.min(elapsed / duration, 1)
        
        animation.t = Math.sin(t * Math.PI / 2)
        
        if (t < 1) {
          requestAnimationFrame(animate)
        } else {
          animation.t = 0
          animation.currentColorIndex = animation.nextColorIndex
          animation.nextColorIndex++
          if (animation.nextColorIndex >= colors.length) animation.nextColorIndex = 0
        }
      }
      
      animate()
    }, 3000)
    
    return () => clearInterval(interval)
  }, [animation, colors])
  
  useFrame((state) => {
    if (!meshRef.current) return
    
    const time = state.clock.getElapsedTime()
    
    // Exact camera movement from original demo
    state.camera.position.x = Math.sin(time / 4) * 10
    state.camera.position.z = Math.cos(time / 4) * 10
    state.camera.position.y = 8 + Math.cos(time / 2) * 2
    
    cameraTarget.x = Math.sin(time / 4) * -8
    cameraTarget.z = Math.cos(time / 2) * -8
    state.camera.lookAt(cameraTarget)
    
    state.camera.up.x = Math.sin(time / 400)
    
    // Animate cube positions and colors
    for (let i = 0; i < meshRef.current.count; i++) {
      meshRef.current.getMatrixAt(i, dummy.matrix)
      dummy.matrix.decompose(dummy.position, dummy.quaternion, dummy.scale)
      
      // Sine wave bouncing
      dummy.position.y = Math.abs(Math.sin((time + seeds[i]) * 2 + seeds[i]))
      dummy.updateMatrix()
      meshRef.current.setMatrixAt(i, dummy.matrix)
      
      // Color wave propagation
      if (animation.t > 0) {
        const currentColor = colors[animation.currentColorIndex]
        const nextColor = colors[animation.nextColorIndex]
        
        const f = dummy.position.length() / maxDistance
        
        if (f <= animation.t) {
          color.set(baseColors[i]).multiply(nextColor)
        } else {
          color.set(baseColors[i]).multiply(currentColor)
        }
        
        meshRef.current.setColorAt(i, color)
      }
    }
    
    meshRef.current.instanceMatrix.needsUpdate = true
    if (animation.t > 0 && meshRef.current.instanceColor) {
      meshRef.current.instanceColor.needsUpdate = true
    }
    
    meshRef.current.computeBoundingSphere()
  })
  
  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]} castShadow receiveShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshPhongMaterial 
        shininess={100}
        specular={0x111111}
      />
    </instancedMesh>
  )
}

// Exact lighting setup from original Three.js demo
function Scene() {
  const { scene } = useThree()
  
  useEffect(() => {
    // Set background color like the original demo
    scene.background = new Color(0xadd8e6) // Light blue background
  }, [scene])
  
  return (
    <>
      {/* Strong directional lighting for sharp shadows and glossy highlights */}
      <hemisphereLight args={[0xffffff, 0x444444, 0.4]} />
      <directionalLight 
        position={[1, 1, 0.5]} 
        intensity={1.5} 
        color={0xffffff}
        castShadow={true}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-near={0.5}
        shadow-camera-far={50}
        shadow-camera-left={-25}
        shadow-camera-right={25}
        shadow-camera-top={25}
        shadow-camera-bottom={-25}
      />
      
      {/* Additional directional light for better form definition */}
      <directionalLight 
        position={[-0.5, 0.8, -0.2]} 
        intensity={0.8} 
        color={0xffffff}
      />
      
      {/* Instanced Cubes */}
      <InstancedCubes />
    </>
  )
}

// Main Hero Component
export default function InstancingHero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* 3D Canvas - Exact setup like original demo */}
      <Canvas
        camera={{ 
          position: [10, 10, 10], 
          fov: 60,
          near: 0.1,
          far: 100 
        }}
        gl={{ 
          antialias: true,
          alpha: false,
          powerPreference: "high-performance"
        }}
        shadows={true}
        style={{ 
          width: '100vw',
          height: '100vh'
        }}
        className="absolute top-0 left-0 w-full h-full"
      >
        <Scene />
      </Canvas>
    </section>
  )
} 