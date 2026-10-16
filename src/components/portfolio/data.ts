import robotGolden from "@/assets/reel/robot_golden_bokeh_1.webp";
import robotCampfire from "@/assets/reel/robot_campfire_bokeh.webp";
import solivus from "@/assets/reel/solivus_campfire_portrait.webp";
import slab from "@/assets/reel/realistic_slab_avalanche.webp";
import golden from "@/assets/reel/golden_avalanche_sunlight.webp";
import snow from "@/assets/reel/snow_crystals_macro.webp";
import throne from "@/assets/reel/futuristic_throne_figure.webp";
import hand from "@/assets/reel/ringed_hand_chamber.webp";
import footsteps from "@/assets/reel/cloaked_footsteps_floor.webp";
import jungle from "@/assets/reel/jungle_traveller_robot.webp";
import portal from "@/assets/reel/robotic_hand_portal.webp";
import scholar from "@/assets/reel/desk_scholar_portrait.webp";

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
  { src: throne, alt: "Cloaked figure standing before a futuristic throne" },
  { src: hand, alt: "Close-up of a ringed hand in a futuristic chamber" },
  { src: footsteps, alt: "Boots and a flowing cloak crossing an illuminated floor" },
  { src: jungle, alt: "Traveller and robot watching flying creatures above a jungle" },
  { src: portal, alt: "Robotic hand reaching toward a glowing circular portal" },
  { src: scholar, alt: "Man wearing glasses seated at a desk with books and instruments" },
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
    tags: [
      "AI Filmmaking",
      "Visual Storytelling",
      "Shot Design",
      "Scene Development",
      "Storyboarding",
      "Scene Breakdowns",
      "Character & Location Consistency",
      "2.39:1 Anamorphic Framing",
    ],
  },
  {
    title: "STORY & SCRIPT DEVELOPMENT",
    description:
      "Shaping ideas into scripts, episodes and sequences that hold together on screen.",
    tags: [
      "Scriptwriting",
      "Dialogue Writing",
      "Episodic Storytelling",
      "Multi-Thread Sequences",
      "Split-Screen Storytelling",
      "Pitch-to-Prototype",
      "Kids' Learning Content",
    ],
  },
  {
    title: "AI VIDEO & IMAGE GENERATION",
    description: "Developing cinematic frames and bringing them into motion with generative AI.",
    tags: [
      "AI Image Generation",
      "AI Video Generation",
      "Prompt Design",
      "Visual Development",
      "Image-to-Video",
      "Text-to-Video",
      "Character Design",
      "Environment Design",
      "Higgsfield",
      "Veo 3.1 (Google Flow)",
      "Kling 3.0",
      "Seedance",
      "Hailuo",
      "Hedra Lip-Sync",
      "Midjourney",
    ],
  },
  {
    title: "PROMPT ENGINEERING",
    description:
      "Writing precise prompts and reference rules that keep AI shots, characters and dialogue consistent.",
    tags: [
      "Prompt Engineering",
      "Scene Prompts",
      "Character Reference Sheets",
      "Location Reference Sheets",
      "Continuity Rules",
      "Dialogue Tagging",
      "Fixing AI Output Issues",
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
      "AI-led Editing",
      "Cut Rhythm",
      "Hard-Cut Editing",
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
    tags: [
      "Sound Design",
      "Sound Sync",
      "Atmosphere",
      "ElevenLabs",
      "v3 Dialogue Tags",
      "Voice Changer",
      "SFX & Foley",
      "Licensed BGM (Adobe Stock)",
      "Hindi / Hinglish / English Dialogue",
    ],
  },
  {
    title: "MOTION & ANIMATION",
    description:
      "Creating 3D animated character videos and bringing motion to interactive web experiences.",
    tags: [
      "3D Animated Character Videos",
      "GSAP",
      "Framer Motion",
      "HTML5 Canvas",
      "Locomotive Scroll",
    ],
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

export const about = {
  intro:
    "I’m Naman Jain — storyteller, prompt engineer, editor, sound designer and creative director, all in one AI filmmaker. I think in frames, and I make films with AI that feel like they were shot on a real set, building every layer myself, from the first idea to the final cut.",
  focus:
    "Right now I’m bringing Project Earth to life at PhysicsWallah, an original sci-fi OTT series: designing its characters and worlds, writing its Hindi/Hinglish dialogue, shaping its sound and cutting it to a 2.39:1 cinematic frame. Give me a story, and I’ll give you something people can’t stop watching.",
};

export const experience = [
  {
    role: "AI Creator, AI Content R&D Apprentice",
    company: "PW (PhysicsWallah)",
    location: "Noida",
    period: "May 2026 – Present",
    points: [
      "Building the AI production workflow for an original multi-episode sci-fi OTT series (Solivus / Project Earth), from scripts and character design to scene prompts, dialogue, sound and edit for Episodes 2–5.",
      "Set up locked character and location reference sheets, a static-camera, hard-cut look at 2.39:1, a 15-second clip standard and continuity rules that hold across episodes.",
      "Handle all audio: ElevenLabs dialogue scripts tagged in Roman and Devanagari, Voice Changer for more natural delivery, foley and SFX, and licensed BGM with every license number logged.",
      "Follow strict production rules: only original characters, no copyrighted IP or music, natural skin texture and movement, and accurate period and regional detail in historical scenes.",
      "Work with product and content teams to turn early pitch ideas into working AI prototypes.",
    ],
    tags: [
      "AI Filmmaking",
      "AI Image Generation",
      "AI Video Generation",
      "Cinematic Visual Creation",
      "Creative Concept Development",
      "Video Editing",
      "Adobe Premiere Pro",
      "AI-Assisted Post-Production",
      "Thumbnail & Visual Asset Creation",
    ],
  },
];

export const projects = [
  {
    title: "Solivus / Project Earth",
    type: "AI Sci-fi OTT Series",
    client: "PhysicsWallah",
    points: [
      "Directed multi-thread sequences including a nightclub party, a chase and a split-screen climax, keeping characters, vehicles and locations matched from shot to shot.",
      "Edited episodes to a locked-camera, hard-cut rhythm with diegetic sound, so AI shots play as one film.",
    ],
  },
  {
    title: "Counting with Characters",
    type: "3D Animated Videos for Young Kids",
    client: "PhysicsWallah",
    points: [
      "Produced Pixar-style 3D animated videos that teach counting to children in early grades, with original characters, bright scenes and simple, rhythmic pacing.",
      "Kept characters and settings consistent across videos and matched visuals with clear, child-friendly voiceover and sound.",
    ],
  },
];

export const contactLinks = [
  { label: "Email", value: "jainnaman242002@gmail.com", href: "mailto:jainnaman242002@gmail.com" },
  { label: "Location", value: "Delhi, India", href: "" },
];
