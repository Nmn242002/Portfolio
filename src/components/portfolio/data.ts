import robotGolden from "@/assets/reel/robot_golden_bokeh_1.webp";
import robotCampfire from "@/assets/reel/robot_campfire_bokeh.webp";
import solivus from "@/assets/reel/solivus_campfire_portrait.webp";
import slab from "@/assets/reel/realistic_slab_avalanche.webp";
import golden from "@/assets/reel/golden_avalanche_sunlight.webp";
import snow from "@/assets/reel/snow_crystals_macro.webp";
import throne from "@/assets/Untitled_design_84.webp.asset.json";
import hand from "@/assets/Untitled_design_82.webp.asset.json";
import footsteps from "@/assets/Untitled_design_81.webp.asset.json";
import jungle from "@/assets/789618340_1578123973850576_2059025430424469689_n.jpg.asset.json";
import portal from "@/assets/ChatGPT_Image_Aug_8_2026_01_46_57_PM.png.asset.json";
import scholar from "@/assets/790325968_4059013477562414_4492842088104272810_n.webp.asset.json";

export type ReelImage = { src: string; alt: string };
export const reelRowOne: ReelImage[] = [
  { src: robotGolden, alt: "Armoured robot beside a glowing campfire" },
  { src: robotCampfire, alt: "Small robot facing a campfire in the forest" },
  { src: solivus, alt: "Man in tactical gear seated on a log beside a forest campfire at night" },
  { src: slab, alt: "Slab avalanche descending a mountain slope" },
  { src: golden, alt: "Avalanche in golden mountain sunlight" },
  { src: snow, alt: "Close-up of snow crystals in an avalanche" },
];
export const reelRowTwo: ReelImage[] = [
  { src: throne.url, alt: "Cloaked figure standing before a futuristic throne" },
  { src: hand.url, alt: "Close-up of a ringed hand in a futuristic chamber" },
  { src: footsteps.url, alt: "Boots and a flowing cloak crossing an illuminated floor" },
  { src: jungle.url, alt: "Traveller and robot watching flying creatures above a jungle" },
  { src: portal.url, alt: "Robotic hand reaching toward a glowing circular portal" },
  { src: scholar.url, alt: "Man wearing glasses seated at a desk with books and instruments" },
];

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
