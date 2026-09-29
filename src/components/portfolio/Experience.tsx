import { ArrowUpRight } from "lucide-react";

import { FadeIn } from "./primitives";
import { selectedWork } from "./data";

const keyAreas = [
  "AI Filmmaking",
  "AI Image Generation",
  "AI Video Generation",
  "Cinematic Visual Creation",
  "Creative Concept Development",
  "Video Editing",
  "Adobe Premiere Pro",
  "AI-Assisted Post-Production",
  "Thumbnail & Visual Asset Creation",
];

export function Experience() {
  return (
    <section
      id="experience"
      className="rounded-t-[40px] bg-film px-5 py-20 text-ink sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn>
        <h2
          className="text-center font-black uppercase leading-none tracking-tight text-ink"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Experience
        </h2>
      </FadeIn>

      <FadeIn delay={0.1} className="mx-auto mt-16 max-w-[1000px]">
        <div className="flex flex-col gap-6 border-t border-ink/15 pt-8 md:flex-row md:gap-12">
          <span className="text-4xl font-black leading-none text-ink/25 md:text-5xl">01</span>
          <div className="flex-1">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-2xl font-semibold uppercase tracking-tight text-ink sm:text-3xl md:text-4xl">
                AI Filmmaker Intern
              </h3>
              <span className="text-xs font-medium uppercase tracking-widest text-ink/60">
                ~6 Months
              </span>
            </div>
            <p className="mt-1 text-sm font-medium uppercase tracking-widest text-ink/70">
              Physics Wallah
            </p>
            <p className="mt-6 max-w-[720px] text-base leading-relaxed text-ink/80">
              Worked as an AI Filmmaker Intern at Physics Wallah, creating AI-driven visual
              content and cinematic video projects. Worked across the creative process from
              developing visual concepts and generating AI assets to video generation, editing
              and finalising content for production.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {keyAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-ink/20 px-3 py-1.5 text-[0.65rem] font-medium uppercase tracking-wider text-ink/70"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.15} className="mx-auto mt-20 max-w-[1000px]">
        <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-ink/60">
          Selected Work
        </h3>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {selectedWork.map((item) => (
            <a
              key={item.title}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="group overflow-hidden rounded-3xl border border-ink/15 bg-ink/[0.03] transition-all duration-500 hover:-translate-y-1 hover:border-ink/40"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  width={1280}
                  height={832}
                  className="h-44 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-48"
                />
              </div>
              <div className="p-5">
                <span className="text-[0.6rem] font-medium uppercase tracking-[0.25em] text-ink/50">
                  {item.type}
                </span>
                <h4 className="mt-2 text-lg font-semibold uppercase tracking-tight text-ink">
                  {item.title}
                </h4>
                <p className="mt-1 text-sm text-ink/70">{item.line}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-[0.65rem] font-medium uppercase tracking-widest text-ink">
                  View Project <ArrowUpRight className="size-3.5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
