import { ArrowRight } from "lucide-react";
import { useEffect, useRef, type ElementType, type ReactNode } from "react";

import { cn } from "@/lib/utils";

// Sliced-title glitch (see `.glitch` in styles.css). Plays on hover of a `.glitch-host`
// ancestor, and once each time `active` turns true; the attribute is written directly so
// replaying never re-renders React.
export function GlitchTitle({
  text,
  active,
  as: Tag = "h3",
  className,
}: {
  text: string;
  active?: boolean;
  as?: ElementType;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !active) return;
    el.dataset["glitch"] = "on";
    const timer = window.setTimeout(() => {
      el.dataset["glitch"] = "";
    }, 600);
    return () => window.clearTimeout(timer);
  }, [active]);

  return (
    <Tag ref={ref} data-text={text} className={cn("glitch reel-title", className)}>
      {text}
    </Tag>
  );
}

// Ruled facts: micro label left, value right, a hairline under each row.
export function CreditTable({
  rows,
  className,
}: {
  rows: { label: string; value: string }[];
  className?: string;
}) {
  return (
    <dl className={cn("border-t border-current/40", className)}>
      {rows.map((row) => (
        <div
          key={row.label}
          className="grid grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] items-baseline gap-4 border-b border-current/40 py-[3px]"
        >
          <dt className="micro text-right opacity-80">{row.label}</dt>
          <dd className="font-reel text-[0.7rem] font-semibold uppercase leading-tight tracking-tight sm:text-xs">
            {row.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

/** Outlined label + square arrow cell, the "EXPLORE →" ticket from the reference. */
export function TicketButtonFace({
  label,
  tone = "film",
}: {
  label: string;
  tone?: "film" | "paper";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-stretch text-[0.6rem] font-semibold uppercase tracking-[0.18em] transition-colors duration-300",
        tone === "film"
          ? "text-white [&>span]:border-white/70 group-hover/ticket:[&>span]:bg-white group-hover/ticket:[&>span]:text-black"
          : "text-paper-ink [&>span]:border-paper-ink group-hover/ticket:[&>span]:bg-paper-ink group-hover/ticket:[&>span]:text-cream",
      )}
    >
      <span className="flex items-center rounded-l-md border px-3 py-2 font-reel transition-colors duration-300">
        {label}
      </span>
      <span className="-ml-px flex items-center rounded-r-md border px-2 transition-colors duration-300">
        <ArrowRight className="size-3.5" aria-hidden />
      </span>
    </span>
  );
}

/** Small cream pill label that heads gallery and notes sections. */
export function Pill({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "ticket inline-block bg-cream px-3 py-1.5 font-reel text-[0.6rem] font-bold uppercase tracking-[0.16em] text-paper-ink [--ticket-notch:4px]",
        className,
      )}
    >
      {children}
    </span>
  );
}

// A ring with a label that trails the pointer over any `[data-cursor]` element. Positions
// are written straight to the DOM; nothing renders on touch screens.
export function FilmCursor() {
  const ring = useRef<HTMLDivElement>(null);
  const label = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ring.current;
    const text = label.current;
    if (!el || !text || !window.matchMedia("(pointer: fine)").matches) return;
    let target = { x: 0, y: 0 };
    let current = { x: 0, y: 0 };
    let frame = 0;
    let shown = false;

    const tick = () => {
      current.x += (target.x - current.x) * 0.22;
      current.y += (target.y - current.y) * 0.22;
      el.style.transform = `translate3d(${current.x}px, ${current.y}px, 0) translate(-50%, -50%) scale(${shown ? 1 : 0.4})`;
      const settled = Math.abs(target.x - current.x) < 0.2 && Math.abs(target.y - current.y) < 0.2;
      frame = settled ? 0 : requestAnimationFrame(tick);
    };
    const onMove = (event: PointerEvent) => {
      target = { x: event.clientX, y: event.clientY };
      const host = (event.target as Element | null)?.closest?.("[data-cursor]");
      const next = host?.getAttribute("data-cursor") ?? "";
      if (!shown && next) current = { ...target };
      shown = Boolean(next);
      if (next) text.textContent = next;
      el.style.opacity = shown ? "1" : "0";
      // Hidden, not just transparent: a blend-mode layer still costs a composite pass.
      el.style.visibility = shown ? "visible" : "hidden";
      if (!frame) frame = requestAnimationFrame(tick);
    };
    const onLeave = () => {
      shown = false;
      el.style.opacity = "0";
      el.style.visibility = "hidden";
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ring}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[60] flex size-16 items-center justify-center rounded-full border border-white/80 text-white opacity-0 mix-blend-difference [visibility:hidden] transition-opacity duration-200"
    >
      <span ref={label} className="micro text-[0.5rem]" />
    </div>
  );
}
