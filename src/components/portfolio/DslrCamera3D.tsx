import { Canvas, useFrame } from "@react-three/fiber";
import { Center, ContactShadows, Environment, Lightformer, useGLTF } from "@react-three/drei";
import { createElement, Fragment, Suspense, useMemo, useRef } from "react";

// Built with createElement (not JSX) so dev tooling doesn't inject DOM-only
// attributes onto 3D scene objects, which crashes the 3D renderer.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const h = createElement as any;
import * as THREE from "three";

const URL = "/models/camera.glb";

function CameraModel() {
  const { scene } = useGLTF(URL);
  const ref = useRef<THREE.Group>(null);
  const scale = useMemo(() => {
    scene.traverse((o) => {
      if (
        /strap/i.test(o.name) ||
        /strap/i.test(((o as THREE.Mesh).material as THREE.Material | undefined)?.name ?? "")
      )
        o.visible = false;
    });
    const body = scene.getObjectByName("Camera_01") ?? scene;
    const size = new THREE.Box3().setFromObject(body).getSize(new THREE.Vector3());
    return 4.2 / Math.max(size.x, size.y, size.z);
  }, [scene]);

  useFrame((state, delta) => {
    const g = ref.current;
    if (!g) return;
    const t = state.clock.elapsedTime;
    const k = 1 - Math.exp(-3 * Math.min(delta, 0.05));
    const tx = state.pointer.y * -0.2 + 0.1;
    const ty = state.pointer.x * 0.4 + LENS_YAW + Math.sin(t * 0.4) * 0.08;
    g.rotation.x += (tx - g.rotation.x) * k;
    g.rotation.y += (ty - g.rotation.y) * k;
    g.position.y = Math.sin(t * 0.8) * 0.06;
  });

  return h("group", { ref }, h(Center, null, h("primitive", { object: scene, scale })));
}

// yaw that points the lens toward the viewer
const LENS_YAW = 0;

export default function DslrCamera3D() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0.5, 7], fov: 35 }}
      gl={{ alpha: true, antialias: true }}
    >
      {h(
        Fragment,
        null,
        h("ambientLight", { intensity: 0.4 }),
        h("directionalLight", { position: [4, 6, 5], intensity: 2.2 }),
        h("pointLight", { position: [-4, 1, 3], intensity: 25, color: "#b600a8" }),
        h("pointLight", { position: [4, -1, 3], intensity: 18, color: "#be4c00" }),
        h(
          Environment,
          { resolution: 256 },
          h(Lightformer, { intensity: 3, position: [0, 5, 2], scale: [10, 3, 1] }),
          h(Lightformer, {
            intensity: 1.5,
            color: "#bbccd7",
            position: [-5, 1, 2],
            "rotation-y": Math.PI / 2,
            scale: [10, 2, 1],
          }),
          h(Lightformer, {
            intensity: 1.5,
            color: "#7621b0",
            position: [5, 0, 2],
            "rotation-y": -Math.PI / 2,
            scale: [10, 2, 1],
          }),
          h(Lightformer, { intensity: 2, position: [0, 0, 6], scale: [4, 4, 1], form: "ring" }),
        ),
        h(Suspense, { fallback: null }, h(CameraModel)),
        h(ContactShadows, { position: [0, -1.6, 0], opacity: 0.6, scale: 8, blur: 2.5, far: 3 }),
      )}
    </Canvas>
  );
}

useGLTF.preload(URL);
