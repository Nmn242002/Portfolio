import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { Pill } from "./film";
import { FadeIn } from "./primitives";
import { reelRowOne, reelRowTwo, type ReelImage } from "./data";
import { autoplayDelta, loopPosition, reelDirections } from "./reel-loop";

export function VisualReel() {
  return (
    <section id="frames" className="overflow-x-clip bg-canvas pb-16 pt-10 text-white md:pb-24">
      <FadeIn className="flex flex-col items-center gap-3 px-5 text-center">
        <h2>
          <Pill>Gallery</Pill>
        </h2>
        <p className="micro text-white/60">Frames from my projects</p>
      </FadeIn>
      <div className="mt-10 space-y-3 md:space-y-4">
        <ReelRow images={reelRowOne} direction={reelDirections.upper} label="Upper reel" />
        {reelRowTwo.length > 0 && (
          <ReelRow images={reelRowTwo} direction={reelDirections.lower} label="Lower reel" />
        )}
      </div>
    </section>
  );
}

function ReelRow({
  images,
  direction,
  label,
}: {
  images: ReelImage[];
  direction: number;
  label: string;
}) {
  const viewport = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const hovered = useRef(false);
  const drag = useRef<{ x: number; position: number } | null>(null);

  useEffect(() => {
    const el = viewport.current;
    const content = track.current;
    if (!el || !content) return;
    let cycle = content.scrollWidth / 3;
    el.scrollLeft = cycle;
    const resize = new ResizeObserver(() => {
      cycle = content.scrollWidth / 3;
      el.scrollLeft = loopPosition(el.scrollLeft, cycle);
    });
    resize.observe(content);
    const normalize = () => {
      const next = loopPosition(el.scrollLeft, cycle);
      if (Math.abs(next - el.scrollLeft) > 1) el.scrollLeft = next;
    };
    // Own the exact position: the browser snaps scrollLeft to device pixels, and reading it
    // back each frame would bias speed by direction on scaled displays.
    let position = el.scrollLeft;
    const scrollTo = (next: number) => {
      position = loopPosition(next, cycle);
      el.scrollLeft = position;
    };
    let previousY = window.scrollY;
    const isPaused = () => hovered.current || drag.current !== null;
    // Visibility comes from an observer so scroll handlers never force a layout read.
    let visible = false;
    const pageScroll = () => {
      const delta = window.scrollY - previousY;
      previousY = window.scrollY;
      if (visible && !isPaused()) scrollTo(position + delta * 0.35 * direction);
    };
    // Horizontal swipes (or Shift + wheel) move the reel; vertical wheel keeps scrolling
    // the page, so the reel never traps page scroll under the cursor.
    const wheel = (event: WheelEvent) => {
      if (event.ctrlKey) return;
      const horizontal = Math.abs(event.deltaX) > Math.abs(event.deltaY);
      if (!horizontal && !event.shiftKey) return;
      event.preventDefault();
      const delta = horizontal ? event.deltaX : event.deltaY;
      scrollTo(position + delta * (event.deltaMode === 1 ? 16 : 1));
    };
    let animationFrame = 0;
    let previousTime = performance.now();
    const animate = (time: number) => {
      const delta = autoplayDelta(time - previousTime, 32, direction, isPaused(), false);
      previousTime = time;
      // Adopt moves made elsewhere (drag, buttons, keys); snapping alone stays under a pixel.
      if (Math.abs(el.scrollLeft - position) > 1) position = el.scrollLeft;
      if (delta !== 0) scrollTo(position + delta);
      animationFrame = visible ? requestAnimationFrame(animate) : 0;
    };
    // Only run the loop while the row is on screen.
    const seen = new IntersectionObserver(([entry]) => {
      visible = entry?.isIntersecting ?? false;
      if (visible && !animationFrame) {
        previousTime = performance.now();
        animationFrame = requestAnimationFrame(animate);
      }
    });
    seen.observe(el);
    el.addEventListener("scroll", normalize, { passive: true });
    el.addEventListener("wheel", wheel, { passive: false });
    window.addEventListener("scroll", pageScroll, { passive: true });
    return () => {
      resize.disconnect();
      seen.disconnect();
      el.removeEventListener("scroll", normalize);
      el.removeEventListener("wheel", wheel);
      window.removeEventListener("scroll", pageScroll);
      cancelAnimationFrame(animationFrame);
    };
  }, [direction]);

  const move = (sign: number) => {
    const el = viewport.current;
    const content = track.current;
    if (!el || !content) return;
    const cycle = content.scrollWidth / 3;
    el.scrollLeft = loopPosition(el.scrollLeft + (sign * cycle) / images.length, cycle);
  };

  return (
    <div role="group" aria-label={label}>
      <div className="mb-2 flex justify-end gap-1.5 px-5 md:px-10">
        {(
          [
            [-1, "previous", ArrowLeft],
            [1, "next", ArrowRight],
          ] as const
        ).map(([sign, name, Icon]) => (
          <button
            key={name}
            type="button"
            aria-label={`${label}: ${name} frame`}
            title={`${name[0]!.toUpperCase()}${name.slice(1)} frame`}
            onClick={() => move(sign)}
            className="flex size-7 cursor-pointer items-center justify-center rounded-full bg-cream text-paper-ink transition-colors duration-300 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cinema"
          >
            <Icon className="size-3.5" aria-hidden />
          </button>
        ))}
      </div>
      <div
        ref={viewport}
        tabIndex={0}
        role="region"
        aria-label={`${label} frames`}
        className="reel-viewport cursor-grab overflow-x-auto overscroll-x-contain focus-visible:outline focus-visible:outline-ring active:cursor-grabbing"
        onMouseEnter={() => {
          hovered.current = true;
        }}
        onMouseLeave={() => {
          hovered.current = false;
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            move(event.key === "ArrowLeft" ? -1 : 1);
          }
        }}
        onPointerDown={(event) => {
          if (event.pointerType !== "mouse" || event.button !== 0) return;
          const el = viewport.current;
          if (!el) return;
          el.setPointerCapture(event.pointerId);
          drag.current = { x: event.clientX, position: el.scrollLeft };
        }}
        onPointerMove={(event) => {
          const el = viewport.current;
          const content = track.current;
          const start = drag.current;
          if (!el || !content || !start) return;
          el.scrollLeft = loopPosition(
            start.position + start.x - event.clientX,
            content.scrollWidth / 3,
          );
        }}
        onPointerUp={() => {
          drag.current = null;
        }}
        onPointerCancel={() => {
          drag.current = null;
        }}
        onLostPointerCapture={() => {
          drag.current = null;
        }}
      >
        <div ref={track} className="flex w-max gap-3 pr-3">
          {[0, 1, 2].flatMap((copy) =>
            images.map((image, index) => (
              <img
                key={`${copy}-${image.src}`}
                src={image.src}
                alt={copy === 1 ? image.alt : ""}
                aria-hidden={copy !== 1}
                loading="lazy"
                decoding="async"
                draggable={false}
                width={1792}
                height={768}
                className="aspect-[7/3] w-[280px] shrink-0 select-none rounded-[6px] object-cover opacity-55 transition-opacity duration-500 hover:opacity-100 sm:w-[340px] lg:w-[calc((100vw-48px)/4)]"
              />
            )),
          )}
        </div>
      </div>
    </div>
  );
}
