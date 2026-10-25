import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { FadeIn } from "../primitives";
import { cine } from "../data";
import { Label, Stars } from "./bits";

// Black band under the hero: production credit, three stat discs and a quote, closed by
// a rounded, red-edged bottom that hands over to the white page.
export function StatsBand() {
  return (
    <section
      data-header="dark"
      aria-label="At a glance"
      className="guides relative z-[4] rounded-b-[1.75rem] border-b-[3px] border-red bg-night px-[clamp(1rem,3.2vw,3rem)] pb-16 pt-12 text-white [--guide:var(--line-dark)] md:pb-24 md:pt-16"
    >
      <div className="grid gap-10 md:grid-cols-[1fr_auto_1fr] md:items-start">
        <FadeIn className="flex items-end justify-between gap-6 md:block md:space-y-8">
          <div>
            <Label>{cine.production.label}</Label>
            <span className="mt-3 inline-block bg-red px-2 py-0.5 font-display text-xl leading-tight tracking-wide">
              {cine.production.studio}
            </span>
          </div>
          <Stars value={cine.rating} />
        </FadeIn>

        <FadeIn delay={0.1} className="flex justify-center gap-3">
          {cine.stats.map((s, i) => (
            <div
              key={s.label}
              className={cn(
                "flex size-[5.5rem] flex-col items-center justify-center rounded-full text-center md:size-28",
                i === 0 && "bg-white text-ink",
                i === 1 && "bg-red text-white",
                i === 2 && "bg-night-2 text-white",
              )}
            >
              <span className="font-display text-xs leading-none opacity-70 md:text-sm">
                {s.label}
              </span>
              <span className="mt-0.5 flex flex-col font-display text-[1.3rem] leading-[0.9] md:text-[1.7rem]">
                {s.value.split(" ").map((word) => (
                  <span key={word}>{word}</span>
                ))}
              </span>
            </div>
          ))}
        </FadeIn>

        <FadeIn delay={0.2} className="flex md:justify-end">
          <figure className="max-w-[260px] border-l-2 border-red pl-4">
            <blockquote className="font-display text-xl leading-[1.05]">
              <span aria-hidden className="mr-1">
                “
              </span>
              {cine.quote}
            </blockquote>
            <a
              href="#about"
              aria-label="Read more about Naman"
              className="mt-2 inline-block text-red"
            >
              <ArrowUpRight aria-hidden className="size-4" />
            </a>
          </figure>
        </FadeIn>
      </div>
    </section>
  );
}
