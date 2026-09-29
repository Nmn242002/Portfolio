import reel01 from "@/assets/reel-01.jpg";
import reel02 from "@/assets/reel-02.jpg";
import reel03 from "@/assets/reel-03.jpg";
import reel04 from "@/assets/reel-04.jpg";
import reel05 from "@/assets/reel-05.jpg";
import reel06 from "@/assets/reel-06.jpg";
import projTall01 from "@/assets/proj-tall-01.jpg";
import projTall02 from "@/assets/proj-tall-02.jpg";

export const reelRowOne = [reel01, reel02, reel03, reel04, reel05, reel06];
export const reelRowTwo = [reel04, reel06, reel01, reel05, reel02, reel03];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

/** Replace `url` with Naman's actual project links. */
export const selectedWork = [
  {
    title: "AI Film 01",
    line: "Cinematic AI short built from generated frames and AI video.",
    type: "AI Film",
    image: reel01,
    url: "#",
  },
  {
    title: "AI Film 02",
    line: "Atmospheric sci-fi sequence with AI motion and sound sync.",
    type: "AI Film",
    image: reel05,
    url: "#",
  },
  {
    title: "AI Film 03",
    line: "Horror concept film built entirely from generative visuals.",
    type: "AI Film",
    image: reel03,
    url: "#",
  },
  {
    title: "AI Visual Project",
    line: "Series of cinematic AI frames exploring light and mood.",
    type: "AI Visuals",
    image: reel04,
    url: "#",
  },
];

export const skills = [
  {
    title: "AI FILMMAKING",
    description:
      "Creating cinematic visual stories using generative AI and creative direction.",
    tags: ["AI Filmmaking", "Visual Storytelling", "Shot Design", "Scene Development"],
  },
  {
    title: "AI VIDEO GENERATION",
    description: "Creating cinematic video sequences using generative AI tools.",
    tags: [
      "AI Video Generation",
      "Image-to-Video",
      "Text-to-Video",
      "Cinematic Motion",
      "Shot Generation",
    ],
  },
  {
    title: "AI IMAGE GENERATION",
    description:
      "Creating cinematic frames, environments, characters and visual concepts using generative AI.",
    tags: [
      "AI Image Generation",
      "Prompt Design",
      "Visual Development",
      "Character Design",
      "Environment Design",
      "Concept Art",
    ],
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
];

export const projects = [
  {
    number: "01",
    category: "AI FILM",
    title: "AI Cinematic Film",
    type: "AI Filmmaking",
    description:
      "An AI-generated cinematic film combining generative visuals, AI video generation, storytelling and post-production.",
    cta: "View Film",
    url: "#",
    stacked: [reel01, reel05],
    tall: projTall01,
  },
  {
    number: "02",
    category: "AI VISUALS",
    title: "AI Visual Experiments",
    type: "Personal Project",
    description:
      "A collection of cinematic AI-generated scenes exploring atmosphere, lighting, composition, environments and visual storytelling.",
    cta: "View Project",
    url: "#",
    stacked: [reel04, reel03],
    tall: projTall02,
  },
  {
    number: "03",
    category: "AI CONTENT",
    title: "AI Content Project",
    type: "Professional Work",
    description:
      "AI-driven visual content combining concept development, generative visuals and video editing.",
    cta: "View Project",
    url: "#",
    stacked: [reel06, reel02],
    tall: projTall01,
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
