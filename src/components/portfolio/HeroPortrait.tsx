import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

import { heroPortrait } from "./data";

const EASE = [0.25, 0.1, 0.25, 1] as const;
const SPRING = { stiffness: 70, damping: 18, mass: 0.6 };

// The cut-out has no backdrop; only soften where the frame crops the shoulders and chest.
const FEATHER =
  "linear-gradient(to right, transparent, #000 9%, #000 91%, transparent), linear-gradient(to top, transparent, #000 24%)";

/**
 * Centered portrait that drifts a few pixels toward the cursor with a slight
 * 3D tilt, backed by a feathered light that moves the opposite way for depth.
 */
export function HeroPortrait() {
  const nx = useMotionValue(0);
  const ny = useMotionValue(0);
  const sx = useSpring(nx, SPRING);
  const sy = useSpring(ny, SPRING);

  const x = useTransform(sx, [-1, 1], [-16, 16]);
  const y = useTransform(sy, [-1, 1], [-10, 10]);
  const rotateY = useTransform(sx, [-1, 1], [-5, 5]);
  const rotateX = useTransform(sy, [-1, 1], [4, -4]);
  const glowX = useTransform(sx, [-1, 1], [10, -10]);
  const glowY = useTransform(sy, [-1, 1], [6, -6]);

  // Not gated on prefers-reduced-motion: the drift is small and only moves while the
  // cursor does, and Windows reports "reduce" whenever animation effects are off.
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      nx.set((e.clientX / window.innerWidth) * 2 - 1);
      ny.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    const onLeave = () => {
      nx.set(0);
      ny.set(0);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [nx, ny]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, delay: 0.25, ease: EASE }}
      className="absolute inset-0 flex items-end justify-center"
      style={{ perspective: 900 }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 flex h-[76%] items-center justify-center"
      >
        <motion.div
          className="aspect-square w-[min(115%,620px)] shrink-0 rounded-full blur-3xl"
          style={{
            x: glowX,
            y: glowY,
            background:
              "radial-gradient(circle, color-mix(in oklch, var(--film) 26%, transparent) 0%, color-mix(in oklch, var(--film) 8%, transparent) 45%, transparent 70%)",
          }}
        />
      </div>
      <motion.img
        src={heroPortrait.src}
        alt={heroPortrait.alt}
        width={heroPortrait.width}
        height={heroPortrait.height}
        draggable={false}
        className="relative h-full w-auto max-w-full select-none object-contain object-bottom"
        style={{
          x,
          y,
          rotateX,
          rotateY,
          WebkitMaskImage: FEATHER,
          maskImage: FEATHER,
          WebkitMaskComposite: "source-in",
          maskComposite: "intersect",
          // Soft halo hugging the silhouette.
          filter: "drop-shadow(0 0 32px color-mix(in oklch, var(--film) 22%, transparent))",
        }}
      />
    </motion.div>
  );
}
