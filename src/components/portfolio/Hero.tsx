import { motion } from "framer-motion";

import { ContactButton } from "./primitives";
import { navLinks } from "./data";
import { HeroPortrait } from "./HeroPortrait";

const EASE = [0.25, 0.1, 0.25, 1] as const;

export function Hero() {
  return (
    <section className="relative flex min-h-[82svh] flex-col overflow-x-clip">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE }}
        className="relative z-20 flex flex-col items-start justify-between gap-3 px-6 pt-6 sm:flex-row sm:items-center md:px-10 md:pt-8"
      >
        <span className="text-sm font-medium uppercase tracking-wider text-film md:text-lg lg:text-[1.2rem]">
          Naman
        </span>
        <div className="flex w-full justify-between gap-3 sm:w-auto sm:gap-6 md:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.65rem] font-medium uppercase tracking-wider text-film transition-opacity duration-200 hover:opacity-70 sm:text-sm md:text-lg lg:text-[1.2rem]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </motion.nav>

      <div className="relative z-20 overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
          className="hero-heading mt-6 w-full whitespace-nowrap px-4 text-center text-[38px] font-black uppercase leading-none tracking-tight sm:mt-4 sm:text-[72px] md:-mt-5 md:text-[100px] lg:text-[140px]"
        >
          Hi, i&apos;m Naman
        </motion.h1>
      </div>

      {/* Hair-to-chest portrait, centered independently of the footer. */}
      <div
        data-portrait-slot
        className="relative mx-auto min-h-[300px] w-full max-w-[560px] flex-1 sm:min-h-[400px]"
      >
        <HeroPortrait />
      </div>

      <div className="relative z-20 mt-auto flex items-end justify-between gap-4 px-6 pb-8 md:px-10 md:pb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: EASE }}
          className="min-w-0 max-w-[250px] sm:max-w-[300px] md:max-w-[340px]"
        >
          <p
            className="font-light uppercase leading-snug tracking-wide text-film"
            style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}
          >
            AI Filmmaker • AI Visual Creator • Video Editor
          </p>
          <p className="mt-2 text-[0.7rem] font-light leading-snug text-muted-foreground sm:text-xs">
            Turning ideas into cinematic visuals with AI.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
          className="shrink-0 whitespace-nowrap"
        >
          <ContactButton />
        </motion.div>
      </div>
    </section>
  );
}
