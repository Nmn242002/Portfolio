import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "./primitives";
import { reelRowOne, reelRowTwo, type ReelImage } from "./data";
import { autoplayDelta, loopPosition, reelDirections } from "./reel-loop";

export function VisualReel() {
  return (
    <section id="reel" className="overflow-x-clip bg-background pb-10 pt-16 md:pt-24">
      <div className="px-5 sm:px-8 md:px-10">
        <FadeIn>
          <h2 className="hero-heading text-5xl font-black uppercase leading-none sm:text-7xl md:text-8xl">
            Visual Reel
          </h2>
          <p className="mt-4 text-sm font-light uppercase text-muted-foreground">
            Frames from my projects.
          </p>
        </FadeIn>
      </div>
      <div className="mt-10 space-y-4">
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
    const pageScroll = () => {
      const delta = window.scrollY - previousY;
      previousY = window.scrollY;
      const box = el.getBoundingClientRect();
      if (!isPaused() && box.bottom > 0 && box.top < window.innerHeight) {
        scrollTo(position + delta * 0.35 * direction);
      }
    };
    const wheel = (event: WheelEvent) => {
      if (event.ctrlKey) return;
      event.preventDefault();
      const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
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
      animationFrame = requestAnimationFrame(animate);
    };
    animationFrame = requestAnimationFrame(animate);
    el.addEventListener("scroll", normalize, { passive: true });
    el.addEventListener("wheel", wheel, { passive: false });
    window.addEventListener("scroll", pageScroll, { passive: true });
    return () => {
      resize.disconnect();
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
      <div className="mb-3 flex justify-end gap-2 px-5 md:px-10">
        <Button
          variant="outline"
          size="icon"
          aria-label={`${label}: previous frame`}
          title="Previous frame"
          onClick={() => move(-1)}
        >
          <ArrowLeft />
        </Button>
        <Button
          variant="outline"
          size="icon"
          aria-label={`${label}: next frame`}
          title="Next frame"
          onClick={() => move(1)}
        >
          <ArrowRight />
        </Button>
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
                draggable={false}
                width={1792}
                height={768}
                className="aspect-[7/3] w-[280px] shrink-0 select-none rounded-lg object-contain sm:w-[340px] lg:w-[calc((100vw-48px)/4)]"
              />
            )),
          )}
        </div>
      </div>
    </div>
  );
}
