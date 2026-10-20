import { createFileRoute } from "@tanstack/react-router";

import { Hero } from "@/components/portfolio/Hero";
import { VisualReel } from "@/components/portfolio/VisualReel";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";

const title = "Naman Jain | AI Filmmaker";
const description =
  "AI filmmaker in Delhi. Script, characters, shots, sound and edit for PhysicsWallah’s sci-fi series Project Earth.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background" style={{ overflowX: "clip" }}>
      <Hero />
      <VisualReel />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
