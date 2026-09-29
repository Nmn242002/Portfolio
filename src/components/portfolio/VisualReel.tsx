import { useEffect, useRef, useState } from "react";

import { FadeIn } from "./primitives";
import { reelRowOne, reelRowTwo } from "./data";

export function VisualReel() {
  const ref = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const sectionTop = el.offsetTop;
      setOffset((window.scrollY - sectionTop + window.innerHeight) * 0.3);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={ref}
      className="overflow-x-clip bg-background pb-10 pt-24 sm:pt-32 md:pt-40"
    >
      <div className="px-5 sm:px-8 md:px-10">
        <FadeIn>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 10vw, 140px)" }}
          >
            Visual Reel
          </h2>
          <p className="mt-4 max-w-[560px] text-sm font-light uppercase tracking-wide text-muted-foreground sm:text-base">
            AI-generated films, cinematic visuals and visual experiments.
          </p>
        </FadeIn>
      </div>

      <div className="mt-12 flex flex-col gap-3">
        <ReelRow images={reelRowOne} translate={-600 + offset} />
        <ReelRow images={reelRowTwo} translate={-offset} />
      </div>
    </section>
  );
}

function ReelRow({ images, translate }: { images: string[]; translate: number }) {
  const row = [...images, ...images];
  return (
    <div className="flex gap-3" style={{ transform: `translateX(${translate}px)`, willChange: "transform" }}>
      {row.map((src, i) => (
        <img
          key={`${src}-${i}`}
          src={src}
          alt="Cinematic AI frame"
          loading="lazy"
          width={420}
          height={270}
          className="h-[180px] w-[280px] shrink-0 rounded-2xl object-cover sm:h-[270px] sm:w-[420px]"
        />
      ))}
    </div>
  );
}
