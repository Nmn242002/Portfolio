import { motion } from "framer-motion";

import camera from "@/assets/hero-camera.png";
import { AnimatedText, FadeIn } from "./primitives";
import { workflow } from "./data";

export function About() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-x-clip px-5 py-20 sm:px-8 md:px-10"
    >
      <motion.img
        src={camera}
        alt=""
        aria-hidden
        loading="lazy"
        width={1024}
        height={1024}
        className="pointer-events-none absolute -left-16 top-10 w-[180px] opacity-10 blur-[1px] md:w-[260px]"
        animate={{ y: [0, -18, 0], rotate: [-4, 4, -4] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src={camera}
        alt=""
        aria-hidden
        loading="lazy"
        width={1024}
        height={1024}
        className="pointer-events-none absolute -right-20 bottom-6 w-[160px] -scale-x-100 opacity-[0.08] blur-[2px] md:w-[240px]"
        animate={{ y: [0, 20, 0], rotate: [3, -3, 3] }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
      />

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
          className="text-center font-medium leading-relaxed text-film"
          text="I’m Naman Jain, an AI filmmaker and visual creator with around 6 months of professional experience at Physics Wallah. I create AI-generated images and videos, develop cinematic visual concepts, and edit AI-generated footage into engaging visual stories."
        />
        <AnimatedText
          className="text-center font-medium leading-relaxed text-muted-foreground"
          text="My work focuses on combining generative AI with creative storytelling and video editing to turn ideas into cinematic visuals."
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
              {i < workflow.length - 1 && <span aria-hidden className="opacity-40">/</span>}
            </span>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
