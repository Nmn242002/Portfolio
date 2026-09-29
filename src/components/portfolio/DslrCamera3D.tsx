import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Lightformer, RoundedBox, ContactShadows } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const BODY = "#141414";
const RUBBER = "#0a0a0a";
const METAL = "#2a2a2a";

function Ribs({ radius, length, count = 48, z }: { radius: number; length: number; count?: number; z: number }) {
  return (
    <group position={[0, 0, z]}>
      {Array.from({ length: count }).map((_, i) => {
        const a = (i / count) * Math.PI * 2;
        return (
          <mesh key={i} position={[Math.cos(a) * radius, Math.sin(a) * radius, 0]} rotation={[0, 0, a]}>
            <boxGeometry args={[0.05, 0.045, length]} />
            <meshStandardMaterial color={RUBBER} roughness={0.95} />
          </mesh>
        );
      })}
    </group>
  );
}

function Cyl({ r, r2, l, z, color = BODY, rough = 0.5, metal = 0.3 }: { r: number; r2?: number; l: number; z: number; color?: string; rough?: number; metal?: number }) {
  return (
    <mesh position={[0, 0, z]} rotation={[Math.PI / 2, 0, 0]}>
      <cylinderGeometry args={[r2 ?? r, r, l, 64]} />
      <meshStandardMaterial color={color} roughness={rough} metalness={metal} />
    </mesh>
  );
}

function Lens() {
  // Lens axis points toward the viewer (+z)
  return (
    <group position={[0.15, -0.1, 0.6]}>
      <Cyl r={0.95} l={0.12} z={0.06} color={METAL} rough={0.3} metal={0.9} />
      <Cyl r={0.88} l={0.5} z={0.37} />
      <Ribs radius={0.9} length={0.35} z={0.37} count={56} />
      <Cyl r={0.9} l={0.04} z={0.64} color="#b3122a" rough={0.4} metal={0.4} />
      <Cyl r={0.86} l={0.55} z={0.93} rough={0.35} />
      <Ribs radius={0.89} length={0.4} z={1.3} count={64} />
      <Cyl r={0.87} l={0.5} z={1.3} color={RUBBER} rough={0.9} metal={0} />
      <Cyl r={0.9} r2={1.0} l={0.3} z={1.7} rough={0.3} />
      {/* front rim */}
      <mesh position={[0, 0, 1.86]}>
        <torusGeometry args={[0.93, 0.05, 16, 64]} />
        <meshStandardMaterial color={METAL} metalness={1} roughness={0.25} />
      </mesh>
      {/* inner barrel */}
      <Cyl r={0.82} l={0.3} z={1.7} color="#050505" rough={1} metal={0} />
      {/* glass elements */}
      <mesh position={[0, 0, 1.62]} scale={[1, 1, 0.35]}>
        <sphereGeometry args={[0.8, 64, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshPhysicalMaterial color="#1a2a3a" roughness={0.02} metalness={0.2} clearcoat={1} clearcoatRoughness={0} iridescence={1} iridescenceIOR={1.8} envMapIntensity={2.5} />
      </mesh>
      <mesh position={[0, 0, 1.5]}>
        <circleGeometry args={[0.45, 48]} />
        <meshStandardMaterial color="#3a1a5a" metalness={1} roughness={0.1} />
      </mesh>
      <mesh position={[0, 0, 1.51]}>
        <ringGeometry args={[0.2, 0.26, 48]} />
        <meshStandardMaterial color="#6fa8ff" emissive="#20406a" metalness={1} roughness={0.05} />
      </mesh>
    </group>
  );
}

function Dslr() {
  const ref = useRef<THREE.Group>(null);
  useFrame((state, delta) => {
    const g = ref.current;
    if (!g) return;
    const t = state.clock.elapsedTime;
    const tx = state.pointer.y * -0.25 + 0.1;
    const ty = state.pointer.x * 0.45 - 0.35 + Math.sin(t * 0.4) * 0.08;
    const k = 1 - Math.exp(-3 * Math.min(delta, 0.05));
    g.rotation.x += (tx - g.rotation.x) * k;
    g.rotation.y += (ty - g.rotation.y) * k;
    g.position.y = Math.sin(t * 0.8) * 0.08;
  });

  return (
    <group ref={ref} scale={0.9}>
      {/* main body */}
      <RoundedBox args={[3.4, 2.2, 1.2]} radius={0.22} smoothness={6}>
        <meshStandardMaterial color={BODY} roughness={0.55} metalness={0.2} />
      </RoundedBox>
      {/* pentaprism hump */}
      <mesh position={[0.15, 1.3, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 1]}>
        <cylinderGeometry args={[0.55, 0.85, 0.95, 4, 1]} />
        <meshStandardMaterial color={BODY} roughness={0.5} metalness={0.25} flatShading />
      </mesh>
      <RoundedBox args={[1.3, 0.35, 1.0]} radius={0.1} position={[0.15, 1.1, 0]}>
        <meshStandardMaterial color={BODY} roughness={0.5} metalness={0.25} />
      </RoundedBox>
      {/* grip (viewer's left) */}
      <RoundedBox args={[0.9, 2.1, 0.7]} radius={0.3} smoothness={6} position={[-1.3, -0.05, 0.55]}>
        <meshStandardMaterial color={RUBBER} roughness={0.95} />
      </RoundedBox>
      {/* shutter button + dials */}
      <mesh position={[-1.3, 1.15, 0.55]}>
        <cylinderGeometry args={[0.16, 0.18, 0.12, 32]} />
        <meshStandardMaterial color={METAL} metalness={0.9} roughness={0.3} />
      </mesh>
      <mesh position={[1.25, 1.2, -0.1]}>
        <cylinderGeometry args={[0.32, 0.32, 0.22, 32]} />
        <meshStandardMaterial color={METAL} metalness={0.8} roughness={0.35} />
      </mesh>
      <mesh position={[-0.9, 1.15, -0.2]}>
        <cylinderGeometry args={[0.25, 0.25, 0.14, 32]} />
        <meshStandardMaterial color={METAL} metalness={0.8} roughness={0.35} />
      </mesh>
      {/* hot shoe */}
      <mesh position={[0.15, 1.8, 0]}>
        <boxGeometry args={[0.45, 0.06, 0.4]} />
        <meshStandardMaterial color={METAL} metalness={1} roughness={0.2} />
      </mesh>
      {/* lens release + AF lamp */}
      <mesh position={[1.25, -0.2, 0.61]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.05, 24]} />
        <meshStandardMaterial color={METAL} metalness={0.9} roughness={0.3} />
      </mesh>
      <mesh position={[-0.85, 0.75, 0.62]}>
        <circleGeometry args={[0.07, 24]} />
        <meshStandardMaterial color="#c2410c" emissive="#7c2d12" />
      </mesh>
      {/* strap lugs */}
      {[-1.72, 1.72].map((x) => (
        <mesh key={x} position={[x, 0.75, 0]} rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[0.1, 0.03, 12, 24]} />
          <meshStandardMaterial color={METAL} metalness={1} roughness={0.3} />
        </mesh>
      ))}
      <Lens />
    </group>
  );
}

export default function DslrCamera3D() {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0.4, 8], fov: 35 }} gl={{ alpha: true, antialias: true }}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[4, 6, 5]} intensity={2} />
      <pointLight position={[-4, 1, 3]} intensity={30} color="#b600a8" />
      <pointLight position={[4, -1, 3]} intensity={20} color="#be4c00" />
      <Environment resolution={256}>
        <Lightformer intensity={3} position={[0, 5, 2]} scale={[10, 3, 1]} />
        <Lightformer intensity={1.5} color="#bbccd7" position={[-5, 1, 2]} rotation-y={Math.PI / 2} scale={[10, 2, 1]} />
        <Lightformer intensity={1.5} color="#7621b0" position={[5, 0, 2]} rotation-y={-Math.PI / 2} scale={[10, 2, 1]} />
        <Lightformer intensity={2} position={[0, 0, 6]} scale={[4, 4, 1]} form="ring" />
      </Environment>
      <Dslr />
      <ContactShadows position={[0, -1.8, 0]} opacity={0.6} scale={8} blur={2.5} far={3} />
    </Canvas>
  );
}
