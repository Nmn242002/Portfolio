import { FadeIn } from "./primitives";

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

    </section>
  );
}
