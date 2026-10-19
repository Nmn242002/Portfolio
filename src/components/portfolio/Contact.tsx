import { FadeIn } from "./primitives";
import { contactLinks } from "./data";
import { PosterBackdrop } from "./PosterBackdrop";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative isolate flex min-h-[90vh] flex-col items-center justify-center overflow-x-clip px-5 py-24 text-center sm:px-8 md:px-10"
    >
      <PosterBackdrop />

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
        <ul className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-12">
          {contactLinks.map((link) => (
            <li key={link.label}>
              <p className="text-[0.6rem] font-medium uppercase tracking-[0.3em] text-muted-foreground">
                {link.label}
              </p>
              {link.href ? (
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="mt-2 inline-block break-all text-sm text-film transition-opacity duration-200 hover:opacity-70 sm:text-base"
                >
                  {link.value}
                </a>
              ) : (
                <p className="mt-2 text-sm text-film sm:text-base">{link.value}</p>
              )}
            </li>
          ))}
        </ul>
        <div className="mt-12">
          <p className="text-lg font-semibold uppercase tracking-tight text-film">Naman Jain</p>
          <p className="mt-1 text-[0.65rem] font-light uppercase tracking-[0.25em] text-muted-foreground">
            AI Filmmaker • AI Visual Creator • Video Editor
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
