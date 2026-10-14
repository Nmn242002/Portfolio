import { FadeIn } from "./primitives";

export function Projects() {
  return (
    <section id="projects" className="bg-background px-5 py-20 sm:px-8 md:px-10">
      <FadeIn>
        <h2 className="hero-heading text-5xl font-black uppercase leading-none sm:text-7xl md:text-8xl">Selected Work</h2>
        <p className="mt-8 border-t border-border pt-8 text-sm uppercase text-muted-foreground">Films coming soon.</p>
      </FadeIn>
    </section>
  );
}
