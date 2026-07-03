import type { LucideIcon } from "lucide-react";
import {
  Piano,
  Guitar,
  Music2,
  Drum,
  Mic2,
  BookOpenText,
  Blocks,
  GraduationCap,
  HeartHandshake,
  CalendarClock,
  Sparkles,
  BadgeCheck,
  Users,
  Award,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  COURSES                                                            */
/* ------------------------------------------------------------------ */

export type Level = "All Levels" | "Beginner" | "Beginner → Advanced" | "Kids";

export type Course = {
  slug: string;
  title: string;
  icon: LucideIcon;
  tagline: string;
  description: string;
  duration: string;
  level: Level;
  price: number;
  priceUnit: string;
  highlights: string[];
  gradient: string; // tailwind gradient classes, brand-only hues
  accent: string; // hsl var-based accent for art
};

export const courses: Course[] = [
  {
    slug: "piano",
    title: "Piano",
    icon: Piano,
    tagline: "The complete instrument",
    description:
      "From first chords to concert repertoire — develop touch, theory and expression on acoustic and digital pianos with a structured, personalised path.",
    duration: "60 min · weekly",
    level: "All Levels",
    price: 1800,
    priceUnit: "/ month",
    highlights: ["Classical & contemporary", "Sight-reading mastery", "Recital preparation"],
    gradient: "from-wine-800 via-wine-700 to-wine-950",
    accent: "var(--wine-400)",
  },
  {
    slug: "guitar",
    title: "Guitar",
    icon: Guitar,
    tagline: "Acoustic · electric · classical",
    description:
      "Build fluid technique, rhythm and improvisation across styles. Learn the songs you love while mastering the fundamentals that make you unstoppable.",
    duration: "60 min · weekly",
    level: "All Levels",
    price: 1600,
    priceUnit: "/ month",
    highlights: ["Fingerstyle & plectrum", "Chord theory", "Live performance"],
    gradient: "from-wine-700 via-wine-800 to-wine-950",
    accent: "var(--wine-300)",
  },
  {
    slug: "violin",
    title: "Violin",
    icon: Music2,
    tagline: "Strings with soul",
    description:
      "Intonation, bowing and tone production taught the conservatory way — with an approach that keeps every lesson musical, patient and inspiring.",
    duration: "45–60 min · weekly",
    level: "Beginner → Advanced",
    price: 1900,
    priceUnit: "/ month",
    highlights: ["Suzuki-informed method", "Orchestral technique", "Ensemble play"],
    gradient: "from-wine-600 via-wine-800 to-wine-900",
    accent: "var(--wine-300)",
  },
  {
    slug: "drums",
    title: "Drums",
    icon: Drum,
    tagline: "Feel the pulse",
    description:
      "Groove, coordination and independence on a full acoustic kit. Develop timing that bands fight over and the confidence to drive any room.",
    duration: "60 min · weekly",
    level: "All Levels",
    price: 1700,
    priceUnit: "/ month",
    highlights: ["Rudiments to fills", "Genre grooves", "Play-along sessions"],
    gradient: "from-wine-800 via-wine-900 to-wine-950",
    accent: "var(--wine-400)",
  },
  {
    slug: "vocals",
    title: "Vocals",
    icon: Mic2,
    tagline: "Find your true voice",
    description:
      "Breath, range and stage presence with a healthy technique. Whether pop, jazz or classical, learn to sing with power, control and emotion.",
    duration: "45–60 min · weekly",
    level: "All Levels",
    price: 1750,
    priceUnit: "/ month",
    highlights: ["Breath & support", "Range extension", "Mic & stagecraft"],
    gradient: "from-wine-700 via-wine-600 to-wine-900",
    accent: "var(--wine-300)",
  },
  {
    slug: "music-theory",
    title: "Music Theory",
    icon: BookOpenText,
    tagline: "The language of music",
    description:
      "Harmony, ear-training and composition that unlock every other skill. Understand what you play — and start writing music of your own.",
    duration: "45 min · weekly",
    level: "Beginner → Advanced",
    price: 1200,
    priceUnit: "/ month",
    highlights: ["Harmony & analysis", "Ear training", "Composition basics"],
    gradient: "from-wine-900 via-wine-800 to-wine-950",
    accent: "var(--wine-400)",
  },
  {
    slug: "kids-music",
    title: "Kids Music",
    icon: Blocks,
    tagline: "Ages 4 – 9",
    description:
      "A joyful first encounter with rhythm, pitch and play. Games, movement and songs build musical instinct and a lifelong love of learning.",
    duration: "40 min · weekly",
    level: "Kids",
    price: 1300,
    priceUnit: "/ month",
    highlights: ["Playful & musical", "Rhythm games", "Group & solo"],
    gradient: "from-wine-500 via-wine-700 to-wine-900",
    accent: "var(--wine-200)",
  },
];

export const instrumentOptions = courses.map((c) => c.title);

/* ------------------------------------------------------------------ */
/*  WHY VOLCANO                                                        */
/* ------------------------------------------------------------------ */

export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const whyVolcano: Feature[] = [
  {
    title: "Professional Instructors",
    description:
      "Learn from conservatory-trained musicians and active performers who teach with genuine artistry.",
    icon: GraduationCap,
  },
  {
    title: "Personal Learning",
    description:
      "Every path is tailored to your goals, pace and taste — one-to-one attention, never a template.",
    icon: HeartHandshake,
  },
  {
    title: "Flexible Schedule",
    description:
      "Morning, evening and weekend slots, online or in-studio. Music that fits your life.",
    icon: CalendarClock,
  },
  {
    title: "Performance Opportunities",
    description:
      "Regular recitals, showcases and open stages turn practice into unforgettable moments.",
    icon: Sparkles,
  },
  {
    title: "Certification",
    description:
      "Structured levels and recognised certificates chart your progress from first note to mastery.",
    icon: BadgeCheck,
  },
  {
    title: "Modern Environment",
    description:
      "Acoustically treated rooms, premium instruments and warm design that makes you want to stay.",
    icon: Blocks,
  },
];

/* ------------------------------------------------------------------ */
/*  INSTRUCTORS                                                        */
/* ------------------------------------------------------------------ */

export type Instructor = {
  slug: string;
  name: string;
  initials: string;
  role: string;
  specialization: string;
  experience: string;
  bio: string;
  tags: string[];
  hue: number; // brand-hue art seed
};

export const instructors: Instructor[] = [
  {
    slug: "louloua",
    name: "Louloua",
    initials: "L",
    role: "Founder & Music Instructor",
    specialization: "Piano · Music Theory",
    experience: "Higher Institute of Music (Helwan)",
    bio: "Teaching Assistant at the Higher Institute of Music and founder of Volcano. Louloua blends rigorous classical training with a warm, modern approach that puts confidence first.",
    tags: ["Piano", "Theory", "Ear Training"],
    hue: 354,
  },
  {
    slug: "karim-adel",
    name: "Karim Adel",
    initials: "KA",
    role: "Senior Guitar Instructor",
    specialization: "Guitar · Composition",
    experience: "12+ years teaching & touring",
    bio: "A versatile guitarist moving effortlessly between classical, jazz and rock. Karim is known for turning nervous beginners into confident performers.",
    tags: ["Guitar", "Improvisation", "Songwriting"],
    hue: 350,
  },
  {
    slug: "mariam-hassan",
    name: "Mariam Hassan",
    initials: "MH",
    role: "Vocal Coach",
    specialization: "Vocals · Performance",
    experience: "Conservatoire-trained soprano",
    bio: "Mariam builds healthy, powerful voices across pop, jazz and classical, with a special gift for stage presence and interpretation.",
    tags: ["Vocals", "Stagecraft", "Breath Work"],
    hue: 356,
  },
  {
    slug: "omar-farouk",
    name: "Omar Farouk",
    initials: "OF",
    role: "Percussion Instructor",
    specialization: "Drums · Rhythm",
    experience: "Session drummer, 10+ years",
    bio: "Omar’s grooves anchor studios and stages across the city. He teaches timing, feel and independence with infectious energy.",
    tags: ["Drums", "Groove", "Coordination"],
    hue: 352,
  },
  {
    slug: "nour-samir",
    name: "Nour Samir",
    initials: "NS",
    role: "Violin Instructor",
    specialization: "Violin · Strings",
    experience: "Orchestral violinist",
    bio: "A patient, precise teacher of intonation and tone. Nour brings orchestral discipline and a deep love of melody to every lesson.",
    tags: ["Violin", "Intonation", "Ensemble"],
    hue: 348,
  },
  {
    slug: "yasmine-tarek",
    name: "Yasmine Tarek",
    initials: "YT",
    role: "Early Years Specialist",
    specialization: "Kids Music · Piano",
    experience: "Early-childhood music educator",
    bio: "Yasmine turns a child’s first lessons into pure play — building rhythm, pitch and joy that last a lifetime.",
    tags: ["Kids", "Rhythm Games", "Foundations"],
    hue: 358,
  },
];

/* ------------------------------------------------------------------ */
/*  TESTIMONIALS                                                       */
/* ------------------------------------------------------------------ */

export type Testimonial = {
  name: string;
  role: string;
  initials: string;
  quote: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    name: "Salma Ibrahim",
    role: "Piano · 1 year",
    initials: "SI",
    quote:
      "I arrived unable to read a single note. A year later I performed Chopin at the winter recital. Volcano changed what I believe I’m capable of.",
    rating: 5,
  },
  {
    name: "Ahmed Zaki",
    role: "Parent of Yousef, 8",
    initials: "AZ",
    quote:
      "My son runs to his drum lesson every week. The teachers are patient, professional and genuinely kind. Worth every pound.",
    rating: 5,
  },
  {
    name: "Farida Nabil",
    role: "Vocals · 8 months",
    initials: "FN",
    quote:
      "The vocal coaching is on another level. My range, control and confidence on stage have completely transformed.",
    rating: 5,
  },
  {
    name: "Karim Mostafa",
    role: "Guitar · 2 years",
    initials: "KM",
    quote:
      "Structured, inspiring and never boring. I finally understand the theory behind the music I love to play.",
    rating: 5,
  },
  {
    name: "Layla Hassan",
    role: "Violin · 1.5 years",
    initials: "LH",
    quote:
      "The studios are beautiful and the atmosphere is so encouraging. Every lesson feels like a step toward something bigger.",
    rating: 5,
  },
];

/* ------------------------------------------------------------------ */
/*  PRICING                                                            */
/* ------------------------------------------------------------------ */

export type Plan = {
  name: string;
  price: number;
  cadence: string;
  blurb: string;
  features: string[];
  featured?: boolean;
  cta: string;
};

export const plans: Plan[] = [
  {
    name: "Starter",
    price: 1400,
    cadence: "/ month",
    blurb: "Begin the journey with focused weekly lessons.",
    features: [
      "4 private lessons / month",
      "One instrument of choice",
      "Personalised learning plan",
      "Practice materials & resources",
      "Progress tracking",
    ],
    cta: "Start Learning",
  },
  {
    name: "Professional",
    price: 2400,
    cadence: "/ month",
    blurb: "Accelerate with more studio time and performance access.",
    features: [
      "8 private lessons / month",
      "Any instrument + music theory",
      "Priority scheduling",
      "Recital & showcase access",
      "Recording session (quarterly)",
      "Level certification",
    ],
    featured: true,
    cta: "Go Professional",
  },
  {
    name: "Mastery",
    price: 3800,
    cadence: "/ month",
    blurb: "The complete artist track for serious dedication.",
    features: [
      "12 private lessons / month",
      "Multi-instrument freedom",
      "1:1 mentorship with senior faculty",
      "Unlimited studio practice hours",
      "Full performance & tour prep",
      "Portfolio & audition coaching",
    ],
    cta: "Pursue Mastery",
  },
];

/* ------------------------------------------------------------------ */
/*  ABOUT — values & timeline                                         */
/* ------------------------------------------------------------------ */

export const values: Feature[] = [
  {
    title: "Artistry",
    description:
      "We teach music as an art form — expression first, always in service of the emotion behind the notes.",
    icon: Sparkles,
  },
  {
    title: "Excellence",
    description:
      "Conservatory-level standards, delivered with patience. We hold the bar high and help you reach it.",
    icon: Award,
  },
  {
    title: "Belonging",
    description:
      "A warm community where every student, at every age, feels seen, supported and inspired to grow.",
    icon: Users,
  },
];

export type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

export const timeline: TimelineItem[] = [
  {
    year: "The Spark",
    title: "A vision takes shape",
    description:
      "Founded by Louloua — a Teaching Assistant at the Higher Institute of Music (Helwan) — Volcano begins with a single belief: everyone deserves a world-class musical education.",
  },
  {
    year: "The Studio",
    title: "A modern home for music",
    description:
      "Acoustically treated rooms, premium instruments and a warm, design-led space open their doors to students of every age.",
  },
  {
    year: "The Faculty",
    title: "Artists who teach",
    description:
      "A hand-picked faculty of performing musicians joins the mission — pairing rigorous technique with genuine mentorship.",
  },
  {
    year: "The Stage",
    title: "From practice to performance",
    description:
      "Regular recitals, showcases and open stages turn quiet practice into confidence, community and unforgettable milestones.",
  },
  {
    year: "Today",
    title: "The path to mastery",
    description:
      "Hundreds of lessons later, Volcano keeps its promise — a modern, inspiring, professional environment where mastery is a journey we walk together.",
  },
];

export const stats: { value: string; label: string }[] = [
  { value: "7", label: "Instruments taught" },
  { value: "500+", label: "Lessons delivered" },
  { value: "12+", label: "Expert instructors" },
  { value: "4.9", label: "Average student rating" },
];

/* ------------------------------------------------------------------ */
/*  FAQ                                                                */
/* ------------------------------------------------------------------ */

export const faqs: { q: string; a: string }[] = [
  {
    q: "Do I need any prior experience to start?",
    a: "Not at all. The majority of our students begin as complete beginners. Every path is built around your current level and goals.",
  },
  {
    q: "What ages do you teach?",
    a: "From age 4 in our Kids Music programme through to adults of any age. It is never too early — or too late — to begin.",
  },
  {
    q: "Are lessons private or in groups?",
    a: "Lessons are primarily one-to-one for focused progress, with optional ensemble and group sessions for performance experience.",
  },
  {
    q: "Can I take lessons online?",
    a: "Yes. Every course is available both in-studio and online, so you can keep learning wherever you are.",
  },
  {
    q: "Do you provide instruments?",
    a: "Our studios are fully equipped for lessons and practice. For home practice we will happily advise on buying or renting the right instrument.",
  },
  {
    q: "How do certifications work?",
    a: "Our structured levels culminate in recognised certificates, giving you a clear, motivating record of your progress from first note to mastery.",
  },
];
