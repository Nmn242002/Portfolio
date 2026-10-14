import robotGolden from "@/assets/robot_golden_bokeh_1.jpg.asset.json";
import robotCampfire from "@/assets/robot_campfire_bokeh.jpg.asset.json";
import campfire from "@/assets/campfire_foreground_bokeh.jpg.asset.json";
import slab from "@/assets/realistic_slab_avalanche.webp.asset.json";
import golden from "@/assets/golden_avalanche_sunlight.webp.asset.json";
import snow from "@/assets/snow_crystals_macro.webp.asset.json";

export type ReelImage = { src: string; alt: string };
export const reelRowOne: ReelImage[] = [
  { src: robotGolden.url, alt: "Armoured robot beside a glowing campfire" },
  { src: robotCampfire.url, alt: "Small robot facing a campfire in the forest" },
  { src: campfire.url, alt: "Traveller sitting beside a forest campfire" },
  { src: slab.url, alt: "Slab avalanche descending a mountain slope" },
  { src: golden.url, alt: "Avalanche in golden mountain sunlight" },
  { src: snow.url, alt: "Close-up of snow crystals in an avalanche" },
];
export const reelRowTwo: ReelImage[] = [];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const skills = [
  {
    title: "AI FILMMAKING",
    description:
      "Creating cinematic visual stories using generative AI and creative direction.",
    tags: ["AI Filmmaking", "Visual Storytelling", "Shot Design", "Scene Development"],
  },
  {
    title: "AI VIDEO & IMAGE GENERATION",
    description: "Developing cinematic frames and bringing them into motion with generative AI.",
    tags: ["AI Image Generation", "AI Video Generation", "Prompt Design", "Visual Development", "Image-to-Video", "Text-to-Video", "Character Design", "Environment Design"],
  },
  {
    title: "VIDEO EDITING",
    description:
      "Editing AI-generated footage into coherent and engaging visual stories.",
    tags: [
      "Adobe Premiere Pro",
      "Video Editing",
      "Storytelling",
      "Pacing",
      "Transitions",
      "Sound Sync",
      "Post Production",
    ],
  },
  {
    title: "VISUAL DIRECTION",
    description:
      "Developing the visual language of a project through composition, lighting, camera language and atmosphere.",
    tags: [
      "Composition",
      "Lighting",
      "Camera Language",
      "Mood",
      "Atmosphere",
      "Visual References",
    ],
  },
  {
    title: "AI CREATIVE WORKFLOW",
    description:
      "Combining generative AI tools and traditional post-production software to build efficient creative workflows.",
    tags: [
      "Generative AI",
      "AI Workflows",
      "Creative Production",
      "Post Production",
      "Content Creation",
    ],
  },
  {
    title: "SOUND DESIGN",
    description: "Shaping the sonic atmosphere of a scene and connecting sound with the edit.",
    tags: ["Sound Design", "Sound Sync", "Atmosphere"],
  },
];


export const workflow = [
  "Idea",
  "Concept",
  "Visual Development",
  "AI Image Generation",
  "AI Video Generation",
  "Editing",
  "Final Cinematic Output",
];
