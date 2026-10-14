import { FadeIn } from "./primitives";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-x-clip px-5 py-24 text-center sm:px-8 md:px-10"
    >
      <FadeIn>
        <h2
          className="hero-heading mx-auto max-w-[1100px] font-black uppercase leading-[0.95] tracking-tight"
          style={{ fontSize: "clamp(2.5rem, 9vw, 120px)" }}
        >
          Let&apos;s make something cinematic.
        </h2>
      </FadeIn>

      <FadeIn delay={0.15}>
        <p className="mx-auto mt-6 max-w-[620px] text-sm font-light uppercase tracking-wide text-muted-foreground sm:text-base">
          Open to AI filmmaking, AI content, visual storytelling and video projects.
        </p>
      </FadeIn>

      <FadeIn delay={0.3} className="mt-16 w-full max-w-[900px] border-t border-border pt-8">
        <p className="text-sm text-muted-foreground">Contact details coming soon.</p>
        <div className="mt-12">
          <p className="text-lg font-semibold uppercase tracking-tight text-film">
            Naman Jain
          </p>
          <p className="mt-1 text-[0.65rem] font-light uppercase tracking-[0.25em] text-muted-foreground">
            AI Filmmaker • AI Visual Creator • Video Editor
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
