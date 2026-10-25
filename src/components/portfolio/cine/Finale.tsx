import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { FadeIn } from "../primitives";
import { cine, contactLinks } from "../data";
import { Avatar, Logo, PillLink } from "./bits";

// Closing "IN THEATERS" card: title, place and year either side, the cut-out rising
// from the bottom edge, then the contact strip.
export function Finale() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const rise = useTransform(scrollYProgress, [0, 1], ["30%", "0%"]);
  const email = contactLinks.find((l) => l.label === "Email");
  const whatsapp = contactLinks.find((l) => l.label === "WhatsApp");

  return (
    <footer
      id="contact"
      data-header="dark"
      // Fills the corners under the projects band's rounded bottom.
      className="bg-night text-white shadow-[0_-1.75rem_0_var(--night)]"
    >
      <section
        ref={ref}
        aria-label="Contact"
        className="guides relative flex min-h-[max(620px,100svh)] flex-col items-center overflow-hidden px-[clamp(1rem,3.2vw,3rem)] pt-32 [--guide:var(--line-dark)]"
      >
        <FadeIn className="relative z-10 w-full max-w-[880px] text-center">
          <p className="micro text-white/70">{cine.finale.label}</p>
          <h2 className="mt-3 font-display text-[clamp(4.5rem,13vw,12rem)] leading-[0.8]">
            {cine.finale.title}
          </h2>
          <div className="mt-3 flex justify-between font-display text-[clamp(1.25rem,2.2vw,2rem)] leading-none">
            <span>{cine.finale.place}</span>
            <span>{cine.finale.year}</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.15} className="relative z-30 mt-8 flex flex-wrap justify-center gap-3">
          {email && (
            <PillLink href={email.href} tone="red">
              {email.value}
            </PillLink>
          )}
          {whatsapp && (
            <PillLink href={whatsapp.href} target="_blank" rel="noreferrer" tone="light">
              WhatsApp
            </PillLink>
          )}
        </FadeIn>

        <motion.div
          style={{ y: rise }}
          className="pointer-events-none relative z-20 mt-auto flex h-[min(58svh,560px)] w-full justify-center"
        >
          <Avatar fade className="h-full w-auto max-w-[96vw]" />
        </motion.div>
      </section>

      <div className="relative z-30 flex flex-wrap items-center justify-between gap-4 border-t border-line-dark bg-night px-[clamp(1rem,3.2vw,3rem)] py-5 text-white">
        <Logo className="text-xl" />
        <p className="micro text-[0.55rem] text-mute-dark">
          © {new Date().getFullYear()} Naman Jain · AI Filmmaker · {cine.finale.place}, India
        </p>
      </div>
    </footer>
  );
}
