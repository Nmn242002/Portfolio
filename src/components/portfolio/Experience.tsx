import { FadeIn } from "./primitives";
import { experience } from "./data";

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

      <div className="mx-auto mt-16 max-w-[1000px] space-y-14">
        {experience.map((job, i) => (
          <FadeIn key={job.role} delay={0.1 + i * 0.06}>
            <div className="flex flex-col gap-6 border-t border-ink/15 pt-8 md:flex-row md:gap-12">
              <span className="text-4xl font-black leading-none text-ink/25 md:text-5xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-2xl font-semibold uppercase tracking-tight text-ink sm:text-3xl md:text-4xl">
                    {job.role}
                  </h3>
                  <span className="text-xs font-medium uppercase tracking-widest text-ink/60">
                    {job.period}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium uppercase tracking-widest text-ink/70">
                  {job.company}
                  {job.location && ` · ${job.location}`}
                </p>
                <ul className="mt-6 max-w-[720px] list-disc space-y-3 pl-5 text-base leading-relaxed text-ink/80 marker:text-ink/40">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-ink/20 px-3 py-1.5 text-[0.65rem] font-medium uppercase tracking-wider text-ink/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
