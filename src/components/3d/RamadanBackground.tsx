import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, Sparkles } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

const Moon = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={[2, 2, -5]} scale={1.5}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial 
          color="#fbbf24" 
          emissive="#f59e0b"
          emissiveIntensity={0.5}
          roughness={0.4}
          metalness={0.6}
        />
      </mesh>
    </Float>
  );
};

const Lantern = ({ position }: { position: [number, number, number] }) => {
  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={1}>
      <group position={position}>
        {/* Lantern Body */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.3, 0.2, 0.8, 6]} />
          <meshStandardMaterial color="#b45309" metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Light */}
        <pointLight intensity={2} distance={5} color="#fbbf24" />
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.25, 0.15, 0.7, 6]} />
          <meshBasicMaterial color="#fbbf24" transparent opacity={0.8} />
        </mesh>
      </group>
    </Float>
  );
};

export const RamadanBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] bg-gradient-to-b from-[#022c22] via-[#064e3b] to-[#065f46]">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <Moon />
        <Lantern position={[-2, 1, -2]} />
        <Lantern position={[2.5, -0.5, -3]} />
        <Sparkles count={50} scale={10} size={2} speed={0.4} opacity={0.5} color="#fbbf24" />
      </Canvas>
    </div>
  );
};
