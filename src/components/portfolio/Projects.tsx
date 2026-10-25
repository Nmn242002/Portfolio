import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { GlitchTitle } from "./film";
import { FadeIn } from "./primitives";
import { projects, type Project } from "./data";

// Selected work on cream paper: one ticket per project, each opening its project page.
export function Projects() {
  return (
    <section
      id="projects"
      className="bg-cream px-[clamp(0.75rem,2vw,2rem)] py-20 text-paper-ink md:py-28"
    >
      <FadeIn className="flex flex-wrap items-end justify-between gap-4 border-b border-paper-ink pb-4">
        <div>
          <p className="micro">Showcase · {projects.length} projects</p>
          <h2 className="reel-title mt-3 text-[clamp(3.5rem,11vw,10rem)]">Selected Work</h2>
        </div>
        <p className="max-w-[280px] font-reel text-xs font-medium uppercase leading-snug opacity-70">
          Every scene, credit and note from each production.
        </p>
      </FadeIn>
      <div className="mt-8 space-y-4 md:mt-12 md:space-y-5">
        {projects.map((project, i) => (
          <FadeIn key={project.slug} delay={i * 0.06}>
            <WorkTicket project={project} index={i} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

export function WorkTicket({
  project,
  index,
  label = "Explore",
  className,
}: {
  project: Project;
  index: number;
  label?: string;
  className?: string;
}) {
  return (
    <Link
      to="/work/$slug"
      params={{ slug: project.slug }}
      data-cursor="Open"
      className={cn(
        "glitch-host group grid grid-cols-1 gap-[3px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cinema sm:grid-cols-[minmax(150px,0.28fr)_1fr]",
        className,
      )}
    >
      <div className="ticket flex flex-col justify-between gap-6 border border-dashed border-paper-ink/40 bg-cream p-4 sm:min-h-[220px]">
        <div>
          <p className="micro">No. {String(index + 1).padStart(2, "0")}</p>
          <p className="reel-title mt-2 text-xl">{project.type}</p>
        </div>
        <span className="flex items-center gap-2 font-reel text-[0.6rem] font-bold uppercase tracking-[0.18em]">
          {project.client}
          {project.year ? ` · ${project.year}` : ""}
        </span>
      </div>
      <div className="ticket relative grid min-h-[260px] grid-cols-1 overflow-hidden bg-paper-ink text-cream md:min-h-[clamp(260px,32vw,420px)] md:grid-cols-[0.42fr_0.58fr]">
        <div className="relative z-10 flex flex-col justify-between gap-8 p-5 md:p-6">
          <div>
            <p className="micro opacity-70">{project.role}</p>
            <GlitchTitle
              as="h3"
              text={project.short}
              className="mt-3 text-[clamp(2.25rem,4.5vw,4.5rem)]"
            />
            <p className="micro mt-4 opacity-70">
              {project.scenes?.length ?? 0} scenes · {project.format}
            </p>
          </div>
          <span className="flex items-center gap-2 font-reel text-[0.6rem] font-bold uppercase tracking-[0.18em]">
            {label}
            <span className="flex size-5 items-center justify-center rounded-full bg-cream text-paper-ink transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight className="size-3" aria-hidden />
            </span>
          </span>
        </div>
        <img
          src={project.cover}
          alt=""
          loading="lazy"
          className="absolute inset-0 size-full object-cover opacity-50 transition duration-700 group-hover:scale-[1.03] group-hover:opacity-70 md:relative md:opacity-90 md:group-hover:opacity-100"
        />
      </div>
    </Link>
  );
}
