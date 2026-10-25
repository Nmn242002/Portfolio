import { useEffect } from "react";
import type LocomotiveScroll from "locomotive-scroll";

let instance: LocomotiveScroll | null = null;

// Locomotive Scroll v5 smooths the native scroll (via Lenis) instead of transforming the
// page, so sticky pinning, `scroll` listeners and framer-motion's useScroll keep working.
// Loaded in an effect because it touches `window`.
export function useSmoothScroll() {
  useEffect(() => {
    let cancelled = false;
    void import("locomotive-scroll").then(({ default: Locomotive }) => {
      if (cancelled) return;
      instance = new Locomotive({
        lenisOptions: {
          lerp: 0.09,
          anchors: { offset: 0 },
          // Let open dialogs and menus scroll on their own.
          prevent: (node) => Boolean(node.closest("[role='dialog']")),
        },
      });
    });
    return () => {
      cancelled = true;
      instance?.destroy();
      instance = null;
    };
  }, []);
}

/** Scrolls smoothly when Locomotive is running, natively otherwise. */
export function scrollToY(y: number) {
  if (instance) instance.scrollTo(y, { duration: 1.1 });
  else window.scrollTo({ top: y, behavior: "smooth" });
}
