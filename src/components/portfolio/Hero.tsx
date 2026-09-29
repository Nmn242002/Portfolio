import { motion } from "framer-motion";
import { lazy, Suspense, useEffect, useState } from "react";

import { ContactButton } from "./primitives";
import { navLinks } from "./data";

const DslrCamera3D = lazy(() => import("./DslrCamera3D"));
const EASE = [0.25, 0.1, 0.25, 1] as const;

export function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <section className="relative flex h-screen flex-col overflow-x-clip">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE }}
        className="relative z-20 flex items-center justify-between px-6 pt-6 md:px-10 md:pt-8"
      >
        <span className="text-sm font-medium uppercase tracking-wider text-film md:text-lg lg:text-[1.2rem]">
          Naman
        </span>
        <div className="flex gap-4 sm:gap-6 md:gap-8">
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
          className="hero-heading mt-6 w-full whitespace-nowrap px-4 text-center text-[11.5vw] font-black uppercase leading-none tracking-tight sm:mt-4 sm:text-[12vw] md:-mt-5 md:text-[12.4vw]"
        >
          Hi, i&apos;m Naman
        </motion.h1>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.6, ease: EASE }}
        className="absolute left-1/2 top-1/2 z-10 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 sm:bottom-0 sm:top-auto sm:h-[420px] sm:w-[520px] sm:translate-y-0 md:h-[500px] md:w-[640px] lg:h-[560px] lg:w-[760px]"
      >
        {mounted && (
          <Suspense fallback={null}>
            <DslrCamera3D />
          </Suspense>
        )}
      </motion.div>

      <div className="relative z-20 mt-auto flex items-end justify-between gap-4 px-6 pb-8 md:px-10 md:pb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: EASE }}
          className="max-w-[250px] sm:max-w-[300px] md:max-w-[340px]"
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
        >
          <ContactButton />
        </motion.div>
      </div>
    </section>
  );
}
