import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { CreditTable, GlitchTitle, TicketButtonFace } from "./film";
import { FadeIn } from "./primitives";
import { PlayGlyph, ScenePlayer } from "./ScenePlayer";
import { showreel } from "./data";
import { TicketNav, type TicketItem } from "./TicketNav";

// Each card sticks 6svh from the top, is 88svh tall and leaves a 4svh gap, so the next
// card peeks in below it before sliding over it.
const TOP = 0.06;
const STEP = 0.92;

const tickets: TicketItem[] = showreel.map(({ project, scene }) => ({
  id: scene.video,
  title: scene.title,
  thumb: scene.poster,
  meta: [scene.label, project.client, project.format],
}));

// The showreel: every scene as a full-bleed film card, stacked so each new card slides
// over the last while the one beneath sinks back. One scroll handler drives the stack by
// writing styles directly; React only re-renders when the active card changes.
export function Showreel() {
  const stack = useRef<HTMLDivElement>(null);
  const cards = useRef<(HTMLDivElement | null)[]>([]);
  const shades = useRef<(HTMLDivElement | null)[]>([]);
  const videos = useRef<(HTMLVideoElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = stack.current;
    if (!el) return;
    let frame = 0;
    let current = -1;
    let shown = false;

    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      const rect = el.getBoundingClientRect();
      const scrolled = -rect.top;
      const step = STEP * vh;
      const top = TOP * vh;
      // A card is active once it covers 40% of its slot.
      const next = Math.min(
        showreel.length - 1,
        Math.max(0, Math.floor((scrolled + top + step * 0.6) / step)),
      );
      cards.current.forEach((card, i) => {
        const t = Math.min(1, Math.max(0, (scrolled + top - i * step) / step));
        if (card) card.style.transform = `scale(${1 - 0.07 * t})`;
        const shade = shades.current[i];
        if (shade) shade.style.opacity = String(0.75 * t);
      });
      const visible = rect.top < vh * 0.5 && rect.bottom > vh * 0.5;
      if (visible !== shown) {
        shown = visible;
        setInView(visible);
      }
      if (next !== current || !visible) {
        current = next;
        setActive(next);
        // Only the card on top plays; the next one starts buffering.
        videos.current.forEach((video, i) => {
          if (!video) return;
          if (i === next + 1) video.preload = "auto";
          if (i === next && rect.top < vh && rect.bottom > 0) void video.play().catch(() => {});
          else video.pause();
        });
      }
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      cancelAnimationFrame(frame);
    };
  }, []);

  const jumpTo = (id: string) => {
    const el = stack.current;
    const index = showreel.findIndex(({ scene }) => scene.video === id);
    if (!el || index < 0) return;
    const vh = window.innerHeight;
    const stackTop = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: stackTop + index * STEP * vh - TOP * vh + 1, behavior: "smooth" });
  };

  return (
    <section
      id="reel"
      aria-label="Showreel"
      className="bg-canvas pb-[6svh] pt-20 text-white md:pt-28"
    >
      <FadeIn className="mb-10 flex flex-wrap items-end justify-between gap-4 px-[clamp(0.75rem,2vw,2rem)] md:mb-14">
        <div>
          <p className="micro text-white/60">Selected scenes · {showreel.length}</p>
          <h2 className="reel-title mt-3 text-[clamp(3.5rem,11vw,10rem)]">Showreel</h2>
        </div>
        <p className="max-w-[300px] font-reel text-xs font-medium uppercase leading-snug text-white/60">
          Scroll through every scene. Click a frame to watch it with sound, or explore the project
          behind it.
        </p>
      </FadeIn>

      <TicketNav
        items={tickets}
        activeId={tickets[active]?.id ?? ""}
        onSelect={jumpTo}
        visible={inView}
      />

      <div ref={stack} className="px-[clamp(0.5rem,1.5vw,1.5rem)]">
        {showreel.map(({ project, scene }, i) => (
          <div
            key={scene.video}
            ref={(node) => {
              cards.current[i] = node;
            }}
            className="glitch-host sticky top-[6svh] mb-[4svh] h-[88svh] origin-top overflow-hidden rounded-[1.25rem] bg-black will-change-transform"
          >
            <Dialog>
              <DialogTrigger
                data-cursor="Play"
                aria-label={`Play ${scene.label}: ${scene.title}`}
                className="absolute inset-0 cursor-pointer focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-cinema"
              >
                <video
                  ref={(node) => {
                    videos.current[i] = node;
                  }}
                  src={scene.video}
                  poster={scene.poster}
                  muted
                  loop
                  playsInline
                  preload={i === 0 ? "auto" : "metadata"}
                  aria-hidden
                  className="size-full object-cover"
                />
              </DialogTrigger>
              <ScenePlayer scene={scene} />
            </Dialog>

            {/* Scrims keep type legible over any footage. */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgb(0_0_0/0.55),transparent_45%,transparent_70%,rgb(0_0_0/0.5))]" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 to-transparent" />

            <CardFrame index={i} label={scene.label} project={project.short} />

            <div className="pointer-events-none absolute right-[clamp(1rem,3vw,3rem)] top-[18%] hidden w-[min(22vw,240px)] space-y-7 text-center md:block">
              {project.highlights.map((fact) => (
                <div key={fact.label}>
                  <span aria-hidden className="mx-auto block h-px w-10 bg-white/60" />
                  <p className="micro mt-2.5 text-white/70">{fact.label}</p>
                  <p className="reel-title mt-1.5 text-[clamp(1rem,1.5vw,1.4rem)] leading-[0.95]">
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="pointer-events-none absolute inset-x-[clamp(1rem,3vw,3rem)] bottom-[clamp(1rem,4svh,3rem)] flex flex-wrap items-end justify-between gap-6">
              <div className="w-full max-w-[min(100%,640px)]">
                <p className="micro text-white/70">{project.type}</p>
                <GlitchTitle
                  text={scene.title}
                  active={active === i}
                  className="mt-3 text-[clamp(2.5rem,6.5vw,7rem)]"
                />
                <CreditTable
                  className="mt-4 max-w-[340px]"
                  rows={[
                    { label: "Role", value: project.role },
                    { label: "Client", value: project.client },
                    { label: "Format", value: project.format },
                  ]}
                />
              </div>
              <Link
                to="/work/$slug"
                params={{ slug: project.slug }}
                aria-label={`Explore ${project.short}`}
                className="group/ticket pointer-events-auto relative z-10"
              >
                <TicketButtonFace label="Explore" />
              </Link>
            </div>

            <div
              ref={(node) => {
                shades.current[i] = node;
              }}
              className="pointer-events-none absolute inset-0 bg-black opacity-0"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function CardFrame({ index, label, project }: { index: number; label: string; project: string }) {
  return (
    <div className="pointer-events-none absolute left-[clamp(1rem,3vw,3rem)] top-[clamp(1rem,4svh,2.5rem)]">
      <p className="reel-title text-[clamp(1.5rem,2.4vw,2.25rem)]">
        {String(index + 1).padStart(2, "0")}
        <span className="text-white/40">/{String(showreel.length).padStart(2, "0")}</span>
      </p>
      <p className={cn("micro mt-2 max-w-[150px] text-white/80")}>{label}</p>
      <p className="micro mt-1 max-w-[150px] text-white/50">{project}</p>
      <span className="mt-4 hidden items-center gap-2 md:flex">
        <PlayGlyph className="size-4" />
        <span className="micro text-cinema">Click to play</span>
      </span>
    </div>
  );
}
