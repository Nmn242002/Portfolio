import { motion, useScroll, useTransform, type MotionProps } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";

const EASE = [0.25, 0.1, 0.25, 1] as const;

export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  ...rest
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
} & MotionProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{ delay, duration, ease: EASE }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function Magnet({
  children,
  className,
  strength = 6,
  padding = 120,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
  padding?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const inside =
        e.clientX > rect.left - padding &&
        e.clientX < rect.right + padding &&
        e.clientY > rect.top - padding &&
        e.clientY < rect.bottom + padding;

      if (inside) {
        setActive(true);
        setOffset({ x: (e.clientX - cx) / strength, y: (e.clientY - cy) / strength });
      } else {
        setActive(false);
        setOffset({ x: 0, y: 0 });
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [padding, strength]);

  return (
    <div ref={ref} className={className}>
      <div
        style={{
          transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
          transition: active ? "transform 0.3s ease-out" : "transform 0.6s ease-in-out",
          willChange: "transform",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export function AnimatedText({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });
  const words = text.split(" ");

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={`${word}-${i}`} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="relative mr-[0.28em] inline-block">
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
}

export function ContactButton({
  className,
  label = "Contact Me",
  href = "#contact",
}: {
  className?: string;
  label?: string;
  href?: string;
}) {
  return (
    <Magnet padding={60} strength={8} className={cn("inline-block", className)}>
      <a
        href={href}
        className="contact-pill inline-flex rounded-full px-8 py-3 text-xs font-medium uppercase tracking-widest text-primary-foreground transition-transform duration-300 hover:scale-[1.04] sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4"
        style={{ color: "oklch(0.99 0 0)" }}
      >
        {label}
      </a>
    </Magnet>
  );
}

export function ProjectButton({
  label = "View Project",
  href,
  className,
}: {
  label?: string;
  href: string;
  className?: string;
}) {
  return (
    <Magnet padding={40} strength={10} className={cn("inline-block", className)}>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-full border-2 border-film px-6 py-2.5 text-[0.7rem] font-medium uppercase tracking-widest text-film transition-colors duration-300 hover:bg-film/10 sm:px-8 sm:py-3 sm:text-xs"
      >
        {label} <span aria-hidden>→</span>
      </a>
    </Magnet>
  );
}
