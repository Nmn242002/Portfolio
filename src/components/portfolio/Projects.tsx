import { FadeIn } from "./primitives";
import { projects } from "./data";

export function Projects() {
  return (
    <section id="projects" className="bg-background px-5 py-20 sm:px-8 md:px-10">
      <FadeIn>
        <h2 className="hero-heading text-5xl font-black uppercase leading-none sm:text-7xl md:text-8xl">Selected Work</h2>
      </FadeIn>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {projects.map((project, i) => (
          <FadeIn key={project.title} delay={i * 0.06}>
            <article className="h-full rounded-3xl border border-border bg-card/50 p-6 transition-colors duration-500 hover:border-film/50">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <span className="text-[0.6rem] font-medium uppercase tracking-[0.3em] text-muted-foreground">
                  {String(i + 1).padStart(2, "0")} · {project.type}
                </span>
                <span className="text-[0.6rem] font-medium uppercase tracking-[0.3em] text-muted-foreground">
                  {project.client}
                </span>
              </div>
              <h3 className="mt-3 text-lg font-semibold uppercase tracking-tight text-film sm:text-xl">
                {project.title}
              </h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
