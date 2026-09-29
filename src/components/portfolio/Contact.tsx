import { Mail, Linkedin, Globe } from "lucide-react";

import { ContactButton, FadeIn } from "./primitives";

const links = [
  { icon: Mail, label: "Email", value: "add-your-email@example.com", href: "mailto:" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/", href: "#" },
  { icon: Globe, label: "Portfolio", value: "Add your portfolio link", href: "#" },
];

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

      <FadeIn delay={0.3} className="mt-10">
        <ContactButton href="mailto:" />
      </FadeIn>

      <FadeIn delay={0.4} className="mt-20 w-full max-w-[900px]">
        <div className="grid gap-4 border-t border-border pt-10 sm:grid-cols-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex flex-col items-center gap-1 transition-opacity duration-200 hover:opacity-70"
            >
              <link.icon className="size-4 text-muted-foreground" />
              <span className="text-[0.6rem] font-medium uppercase tracking-[0.3em] text-muted-foreground">
                {link.label}
              </span>
              <span className="text-xs text-film">{link.value}</span>
            </a>
          ))}
        </div>
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
