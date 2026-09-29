import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { FadeIn, ProjectButton } from "./primitives";
import { projects } from "./data";

export function Projects() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section id="projects" className="bg-background px-5 pb-20 pt-10 sm:px-8 md:px-10">
      <FadeIn>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight"
          style={{ fontSize: "clamp(2.5rem, 11vw, 150px)" }}
        >
          Selected Work
        </h2>
        <p className="mt-4 max-w-[600px] text-sm font-light uppercase tracking-wide text-muted-foreground sm:text-base">
          A selection of AI films, visual experiments and cinematic projects.
        </p>
      </FadeIn>

      <div ref={container} className="relative mt-16">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - 1 - i) * 0.03;
          return (
            <Card
              key={project.number}
              project={project}
              index={i}
              total={projects.length}
              progress={scrollYProgress}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
}

function Card({
  project,
  index,
  total,
  progress,
  targetScale,
}: {
  project: (typeof projects)[number];
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  targetScale: number;
}) {
  const range: [number, number] = [index * (1 / total), 1];
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="sticky top-24 flex h-[85vh] items-center justify-center md:top-32">
      <motion.div
        style={{ scale, top: `calc(-5vh + ${index * 25}px)` }}
        className="relative flex h-full w-full flex-col gap-4 overflow-hidden rounded-[40px] border-2 border-film bg-background p-4 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
      >
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <div className="flex items-baseline gap-4">
            <span className="text-2xl font-black leading-none text-film/30">
              {project.number}
            </span>
            <span className="text-[0.6rem] font-medium uppercase tracking-[0.3em] text-muted-foreground">
              {project.category}
            </span>
          </div>
          <span className="text-[0.6rem] font-medium uppercase tracking-[0.3em] text-muted-foreground">
            {project.type}
          </span>
        </div>

        <div className="flex min-h-0 flex-1 flex-col gap-4 md:flex-row">
          <div className="flex flex-col justify-between gap-4 md:w-[40%]">
            <div className="grid min-h-0 flex-1 grid-cols-2 gap-3 md:grid-cols-1">
              {project.stacked.map((src) => (
                <img
                  key={src}
                  src={src}
                  alt={project.title}
                  loading="lazy"
                  width={1280}
                  height={832}
                  className="h-full min-h-[90px] w-full rounded-[28px] object-cover sm:rounded-[36px]"
                />
              ))}
            </div>
            <div>
              <h3 className="text-xl font-semibold uppercase tracking-tight text-film sm:text-2xl md:text-3xl">
                {project.title}
              </h3>
              <p className="mt-2 hidden text-sm leading-relaxed text-muted-foreground sm:block">
                {project.description}
              </p>
              <div className="mt-4">
                <ProjectButton label={project.cta} href={project.url} />
              </div>
            </div>
          </div>
          <div className="hidden min-h-0 md:block md:w-[60%]">
            <img
              src={project.tall}
              alt={project.title}
              loading="lazy"
              width={832}
              height={1280}
              className="h-full w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
