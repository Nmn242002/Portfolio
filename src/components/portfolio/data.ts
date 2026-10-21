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
      "Planning shots and scenes, and keeping characters and locations the same from shot to shot.",
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
    description: "Writing scripts, episodes and dialogue, from the first pitch to the final draft.",
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
    description: "Generating characters, sets and frames, then animating them into shots.",
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
    description: "Writing prompts and reference sheets so every shot matches the one before it.",
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
    description: "Cutting AI footage in Premiere Pro with hard cuts and sound-led pacing.",
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
    description: "Setting the look of a project: composition, lighting, camera and mood.",
    tags: ["Composition", "Lighting", "Camera Language", "Mood", "Atmosphere", "Visual References"],
  },
  {
    title: "AI CREATIVE WORKFLOW",
    description:
      "Linking AI tools with editing software into a production pipeline a team can repeat.",
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
    description: "Dialogue in Hindi, Hinglish and English, plus foley, SFX and licensed music.",
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
    description: "Making 3D animated character videos and animated websites.",
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
  "Final Cut",
];

export const about = {
  intro:
    "I’m Naman Jain, an AI filmmaker. I write the script, design the characters, generate the shots, record the dialogue, build the sound and cut the edit myself.",
  focus:
    "At PhysicsWallah I’m making Project Earth, an original sci-fi series for their OTT app. I design its characters and worlds, write its Hindi and Hinglish dialogue, and edit Episodes 2–5 in a 2.39:1 frame.",
};

export const heroPortrait = {
  src: "/naman-portrait.webp",
  alt: "Portrait of Naman Jain",
  width: 900,
  height: 1197,
};

/** Project Earth key art behind the closing headline. */
export const contactBackdrop = {
  src: "/projects/project-earth/key-art.webp",
};

export const experience = [
  {
    role: "AI Creator, AI Content R&D Apprentice",
    company: "PW (PhysicsWallah)",
    location: "Noida",
    period: "May 2026 – Present",
    points: [
      "Building the AI production workflow for an original multi-episode sci-fi OTT series (Solivus / Project Earth), from scripts and character design to scene prompts, dialogue, sound and edit for Episodes 2–5.",
      "Set up character and location reference sheets, a locked-camera, hard-cut look at 2.39:1 and continuity rules used across every episode.",
      "Handle all audio: ElevenLabs dialogue in Roman and Devanagari scripts, Voice Changer for natural delivery, foley, SFX and licensed music.",
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

export type Project = {
  title: string;
  type: string;
  client: string;
  points: string[];
  href?: string;
  /** `video` is the muted card preview, `full` the complete scene played in-page, `href` its Drive original. */
  scenes?: {
    label: string;
    title: string;
    video: string;
    poster: string;
    full: string;
    /** Seconds into `full` where playback begins (shared videos, or to skip a weak opening). */
    start?: number;
    href: string;
  }[];
  /** Frame of the scene previews: 2.39:1 cinemascope by default, or 16:9 video. */
  sceneAspect?: "wide" | "video";
};

const earth = "/projects/project-earth";
const counting = "/projects/counting-with-characters";
const driveFile = (id: string) => `https://drive.google.com/file/d/${id}/view`;

export const projects: Project[] = [
  {
    title: "Solivus / Project Earth",
    type: "AI Sci-fi OTT Series",
    client: "PhysicsWallah",
    href: "https://drive.google.com/drive/folders/15q7G40GI8OFfCkTVKiDRQSXakhVzP5Yi?usp=sharing",
    scenes: [
      {
        label: "Ep 4 · Scene 5",
        title: "The Hologram Briefing",
        video: `${earth}/ep4-scene5.mp4`,
        full: `${earth}/ep4-scene5-full.mp4`,
        poster: `${earth}/ep4-scene5.jpg`,
        href: driveFile("1tNFXbV2MHvnhaPEn6HKo50LxIDhmIij_"),
      },
      {
        label: "Ep 5 · Scene 2",
        title: "The Throne Room",
        video: `${earth}/ep5-scene2.mp4`,
        full: `${earth}/ep5-scene2-full.mp4`,
        poster: `${earth}/ep5-scene2.jpg`,
        href: driveFile("17FXT0G9IHUR2q76O97ZQSX8e_XhTCkLa"),
      },
      {
        label: "Ep 5 · Scene 4",
        title: "The Council",
        video: `${earth}/ep5-scene4.mp4`,
        full: `${earth}/ep5-scene4-full.mp4`,
        poster: `${earth}/ep5-scene4.jpg`,
        href: driveFile("1MjKzP_7mssSIiytCVmy9SfNT_jtQXIqt"),
      },
      {
        label: "Ep 5 · Scene 5",
        title: "The Goblet",
        video: `${earth}/ep5-scene5.mp4`,
        full: `${earth}/ep5-scene5-full.mp4`,
        poster: `${earth}/ep5-scene5.jpg`,
        href: driveFile("1rJO7aY0sNzxhjmqF3UUL6d3Pb52ude2p"),
      },
      {
        label: "Scene 4",
        title: "The Laboratory",
        video: `${earth}/scene4-lab.mp4`,
        full: `${earth}/scene4-lab-full.mp4`,
        poster: `${earth}/scene4-lab.jpg`,
        start: 11,
        href: driveFile("11dUQwMfttsSLEue0OImKx2OBpn63ICYA"),
      },
    ],
    points: [
      "Directed multi-thread sequences including a nightclub party, a chase and a split-screen climax, keeping characters, vehicles and locations matched from shot to shot.",
      "Edited episodes to a locked-camera, hard-cut rhythm with diegetic sound, so AI shots play as one film.",
    ],
  },
  {
    title: "Counting with Characters",
    type: "3D Animated Videos for Young Kids",
    client: "PhysicsWallah",
    href: "https://drive.google.com/drive/folders/1ZDPnCUJ4QtVx6mR0XJ8r1YWgo16SGNEs?usp=sharing",
    sceneAspect: "video",
    // All five parts are cuts of one 5-minute video; `start` is the shot change where each begins.
    scenes: (
      [
        ["Part 1", "Numbers Everywhere", "numbers", 0],
        ["Part 2", "A Day at the Beach", "beach-trip", 27.8],
        ["Part 3", "Shell Hunting", "shell-hunt", 81.9],
        ["Part 4", "The Shell Stall", "shell-stall", 114],
        ["Part 5", "New Friends", "new-friends", 228.9],
      ] as const
    ).map(([label, title, file, start]) => ({
      label,
      title,
      video: `${counting}/${file}.mp4`,
      full: `${counting}/full.mp4`,
      start,
      poster: `${counting}/${file}.jpg`,
      href: driveFile("1RO_xBmi-PxLzIlh9fUe6uBc_RwM3mCF_"),
    })),
    points: [
      "Produced Pixar-style 3D animated videos that teach counting to children in early grades, with original characters, bright scenes and simple, rhythmic pacing.",
      "Kept characters and settings consistent across videos and matched visuals with clear, child-friendly voiceover and sound.",
    ],
  },
];

export const contactLinks = [
  { label: "Email", value: "filmmakernaman@gmail.com", href: "mailto:filmmakernaman@gmail.com" },
  { label: "Location", value: "Delhi, India", href: "" },
];
