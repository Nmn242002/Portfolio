import { FadeIn } from "./primitives";
import { skills } from "./data";

export function Skills() {
  return (
    <section
      id="skills"
      className="-mt-10 rounded-t-[40px] bg-background px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Skills
        </h2>
        <p className="mt-4 max-w-[560px] text-sm font-light uppercase tracking-wide text-muted-foreground sm:text-base">
          What I do on a project, and the tools I use to do it.
        </p>
      </FadeIn>

      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, i) => (
          <FadeIn key={skill.title} delay={i * 0.06}>
            {/* Hover scale and glow are CSS; the glow is pre-drawn on a pseudo-element and
                only faded in, so hovering never repaints a large blurred shadow. */}
            <div className="group relative h-full rounded-3xl border border-border bg-card/50 p-6 transition-[scale,border-color] duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] after:pointer-events-none after:absolute after:inset-0 after:rounded-3xl after:opacity-0 after:shadow-[var(--shadow-glow)] after:transition-opacity after:duration-500 hover:scale-[1.02] hover:border-film/50 hover:after:opacity-100">
              <span className="text-[0.6rem] font-medium uppercase tracking-[0.3em] text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-semibold uppercase tracking-tight text-film sm:text-xl">
                {skill.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {skill.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border px-3 py-1 text-[0.6rem] font-light uppercase tracking-wider text-film/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
