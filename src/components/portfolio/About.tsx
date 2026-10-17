import { AnimatedText, FadeIn } from "./primitives";
import { about, workflow } from "./data";

export function About() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-x-clip px-5 py-20 sm:px-8 md:px-10"
    >
      <FadeIn className="w-full">
        <h2
          className="hero-heading text-center font-black uppercase leading-none tracking-tight"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          About me
        </h2>
      </FadeIn>

      <div className="mt-10 max-w-[720px] space-y-6">
        <AnimatedText
          className="text-center text-[clamp(1rem,2vw,1.35rem)] font-medium leading-relaxed text-film"
          text={about.intro}
        />
        <AnimatedText
          className="text-center text-[clamp(1rem,2vw,1.35rem)] font-medium leading-relaxed text-muted-foreground"
          text={about.focus}
        />
      </div>

      <FadeIn delay={0.2} className="mt-14 w-full max-w-[860px]">
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
          {workflow.map((step, i) => (
            <span
              key={step}
              className="flex items-center gap-3 text-[0.6rem] font-light uppercase tracking-[0.2em] text-muted-foreground sm:text-xs"
            >
              {step}
              {i < workflow.length - 1 && (
                <span aria-hidden className="opacity-40">
                  /
                </span>
              )}
            </span>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
