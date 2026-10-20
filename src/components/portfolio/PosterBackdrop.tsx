import { contactBackdrop } from "./data";

/**
 * Dimmed key art with a slow push-in so the closing section still feels like
 * a moving frame, faded into the page on every edge.
 */
export function PosterBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* CSS keyframes run on the compositor, with no per-frame JavaScript. */}
      <img
        src={contactBackdrop.src}
        alt=""
        loading="lazy"
        decoding="async"
        draggable={false}
        className="absolute inset-0 h-full w-full animate-[slow-push_24s_linear_infinite_alternate] select-none object-cover opacity-50 will-change-transform"
      />
      {/* Blend into the page and keep the headline legible. */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--background)_85%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="absolute inset-0 bg-background/35" />
    </div>
  );
}
