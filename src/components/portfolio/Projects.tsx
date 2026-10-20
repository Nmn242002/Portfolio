import { useEffect, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { FadeIn, ProjectButton } from "./primitives";
import { projects, type Project } from "./data";

// Plays the preview only while it is on screen. Not gated on prefers-reduced-motion,
// which Windows reports whenever animation effects are off.
function useInViewAutoplay() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) void video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.25 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return ref;
}

type Scene = NonNullable<Project["scenes"]>[number];

function SceneTile({
  scene,
  aspect = "wide",
  className,
}: {
  scene: Scene;
  aspect?: Project["sceneAspect"];
  className?: string;
}) {
  const ref = useInViewAutoplay();

  return (
    <Dialog>
      <div className={cn("group relative", className)}>
        <DialogTrigger
          aria-label={`Watch ${scene.label}: ${scene.title}`}
          className="relative block w-full cursor-pointer overflow-hidden rounded-2xl border border-border bg-black text-left transition-colors duration-500 hover:border-film/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-film"
        >
          <video
            ref={ref}
            src={scene.video}
            poster={scene.poster}
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden
            className={cn(
              aspect === "video" ? "aspect-video" : "aspect-[2.39/1]",
              "w-full object-cover opacity-90 transition duration-700 group-hover:scale-[1.03] group-hover:opacity-100",
            )}
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent px-4 pb-3 pt-10">
            <p className="text-[0.55rem] font-medium uppercase tracking-[0.3em] text-film-dim">
              {scene.label}
            </p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-tight text-film sm:text-sm">
              {scene.title}
            </p>
          </div>
        </DialogTrigger>
      </div>
      <ScenePlayer scene={scene} />
    </Dialog>
  );
}

// Plays the full scene in-page from the site's own files, without a download control.
function ScenePlayer({ scene }: { scene: Scene }) {
  return (
    <DialogContent className="max-w-[min(1100px,calc(100vw-2rem))] gap-0 overflow-hidden rounded-2xl border-border bg-black p-0 sm:rounded-2xl">
      <div className="flex items-baseline gap-3 px-5 py-4 pr-12">
        <DialogDescription className="text-[0.55rem] font-medium uppercase tracking-[0.3em] text-film-dim">
          {scene.label}
        </DialogDescription>
        <DialogTitle className="text-sm font-semibold uppercase tracking-tight text-film">
          {scene.title}
        </DialogTitle>
      </div>
      <video
        src={scene.full}
        poster={scene.poster}
        controls
        autoPlay
        playsInline
        preload="auto"
        controlsList="nodownload noremoteplayback"
        disablePictureInPicture
        onContextMenu={(e) => e.preventDefault()}
        className="block max-h-[calc(100svh-8rem)] w-full bg-black object-contain"
      />
    </DialogContent>
  );
}

// Two wide tiles on top, three below on large screens; the last tile fills the row on tablets.
const sceneSpan = (i: number, total: number) =>
  cn(
    i < 2 ? "lg:col-span-3" : "lg:col-span-2",
    i === total - 1 && total % 2 === 1 && "sm:col-span-2",
  );

export function Projects() {
  return (
    <section id="projects" className="bg-background px-5 py-20 sm:px-8 md:px-10">
      <FadeIn>
        <h2 className="hero-heading text-5xl font-black uppercase leading-none sm:text-7xl md:text-8xl">
          Selected Work
        </h2>
      </FadeIn>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {projects.map((project, i) => (
          <FadeIn
            key={project.title}
            delay={i * 0.06}
            className={project.scenes ? "md:col-span-2" : ""}
          >
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
              {project.scenes ? (
                <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-6">
                  {project.scenes.map((scene, s) => (
                    <SceneTile
                      key={scene.video}
                      scene={scene}
                      aspect={project.sceneAspect}
                      className={sceneSpan(s, project.scenes!.length)}
                    />
                  ))}
                </div>
              ) : null}
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              {project.href ? (
                <ProjectButton
                  href={project.href}
                  label={
                    new Set(project.scenes?.map((scene) => scene.href)).size > 1
                      ? "Watch All Scenes"
                      : "Watch Full Video"
                  }
                  className="mt-6"
                />
              ) : null}
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
