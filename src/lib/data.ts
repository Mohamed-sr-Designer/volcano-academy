import type { LucideIcon } from "lucide-react";
import type { StaticImageData } from "next/image";
import {
  Piano,
  Guitar,
  Music2,
  Drum,
  Mic2,
  Blocks,
  GraduationCap,
  HeartHandshake,
  CalendarClock,
  Sparkles,
  BadgeCheck,
  Users,
  Award,
} from "lucide-react";

import pianoImg from "@/assets/courses/piano.jpg";
import guitarImg from "@/assets/courses/guitar.jpg";
import violinImg from "@/assets/courses/violin.jpg";
import drumsImg from "@/assets/courses/drums.jpg";

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
  overview: string; // longer intro for the course page
  curriculum: string[]; // what you'll learn
  duration: string;
  level: Level;
  price: number;
  priceUnit: string;
  highlights: string[];
  gradient: string; // tailwind gradient classes, brand-only hues
  accent: string; // hsl var-based accent for art
  image?: StaticImageData; // real photograph where available
};

/**
 * Every course is self-paced: progress depends on how quickly each student
 * absorbs the material. On average, students reach confident, independent
 * playing in about six months — and can keep growing on their own from there.
 */
export const learningNote =
  "Every path adapts to how quickly you absorb each concept — there is no rigid timetable. On average, students reach confident, independent playing in about six months, from where they can keep growing entirely on their own.";

export const courses: Course[] = [
  {
    slug: "piano",
    title: "Piano",
    icon: Piano,
    tagline: "The complete instrument",
    description:
      "From first chords to concert repertoire — develop touch, theory and expression on acoustic and digital pianos with a structured, personalised path.",
    overview:
      "The piano is the most complete instrument there is — a full orchestra beneath ten fingers. From your very first lesson you'll build touch, tone and reading, moving from simple melodies to rich, expressive pieces at a pace that is entirely your own.",
    curriculum: [
      "Posture, hand shape & healthy technique",
      "Note reading & rhythm from scratch",
      "Scales, chords & the basics of harmony",
      "Classical & contemporary repertoire",
      "Pedalling, dynamics & expression",
      "Preparing a piece for performance",
    ],
    duration: "60 min · weekly",
    level: "All Levels",
    price: 4100,
    priceUnit: "/ month",
    highlights: ["Classical & contemporary", "Sight-reading mastery", "Recital preparation"],
    gradient: "from-wine-800 via-wine-700 to-wine-950",
    accent: "var(--wine-400)",
    image: pianoImg,
  },
  {
    slug: "guitar",
    title: "Guitar",
    icon: Guitar,
    tagline: "Acoustic · electric · classical",
    description:
      "Build fluid technique, rhythm and improvisation across styles. Learn the songs you love while mastering the fundamentals that make you unstoppable.",
    overview:
      "Acoustic, electric or classical — the guitar meets you wherever your taste lives. You'll develop clean technique, a strong sense of rhythm and the freedom to play the songs you love, all while understanding exactly why they work.",
    curriculum: [
      "Fretting, picking & strumming technique",
      "Open chords through to barre chords",
      "Rhythm, timing & strumming patterns",
      "Scales & the basics of improvisation",
      "Reading tabs & chord charts",
      "Your first full songs, start to finish",
    ],
    duration: "60 min · weekly",
    level: "All Levels",
    price: 3900,
    priceUnit: "/ month",
    highlights: ["Fingerstyle & plectrum", "Chord theory", "Live performance"],
    gradient: "from-wine-700 via-wine-800 to-wine-950",
    accent: "var(--wine-300)",
    image: guitarImg,
  },
  {
    slug: "violin",
    title: "Violin",
    icon: Music2,
    tagline: "Strings with soul",
    description:
      "Intonation, bowing and tone production taught the conservatory way — with an approach that keeps every lesson musical, patient and inspiring.",
    overview:
      "Few instruments sing like the violin. Taught the conservatory way — but never coldly — you'll build intonation, a beautiful bowing arm and the tone control that turns individual notes into real, moving music.",
    curriculum: [
      "Holding the violin & bow with ease",
      "Producing a clean, warm tone",
      "Intonation & precise finger placement",
      "Bowing techniques & articulation",
      "Reading music & rhythm",
      "Playing in tune alongside others",
    ],
    duration: "45–60 min · weekly",
    level: "Beginner → Advanced",
    price: 3700,
    priceUnit: "/ month",
    highlights: ["Suzuki-informed method", "Orchestral technique", "Ensemble play"],
    gradient: "from-wine-600 via-wine-800 to-wine-900",
    accent: "var(--wine-300)",
    image: violinImg,
  },
  {
    slug: "vocals",
    title: "Vocals",
    icon: Mic2,
    tagline: "Find your true voice",
    description:
      "Breath, range and stage presence with a healthy technique. Whether pop, jazz or classical, learn to sing with power, control and emotion.",
    overview:
      "Your voice is the one instrument you carry everywhere. With a healthy, sustainable technique you'll expand your range, discover your true tone and learn to perform with genuine confidence — in whatever style you love.",
    curriculum: [
      "Breath support & healthy technique",
      "Pitch, ear training & control",
      "Extending your range safely",
      "Tone, resonance & personal style",
      "Microphone & stage presence",
      "Interpreting and owning a song",
    ],
    duration: "45–60 min · weekly",
    level: "All Levels",
    price: 3300,
    priceUnit: "/ month",
    highlights: ["Breath & support", "Range extension", "Mic & stagecraft"],
    gradient: "from-wine-700 via-wine-600 to-wine-900",
    accent: "var(--wine-300)",
  },
  {
    slug: "drums",
    title: "Drums",
    icon: Drum,
    tagline: "Feel the pulse",
    description:
      "Groove, coordination and independence on a full kit. Develop timing that bands fight over and the confidence to drive any room.",
    overview:
      "Rhythm is the heartbeat of every band. On a full kit you'll develop timing, coordination and the feel that makes a room move — from your very first steady groove to fills that turn heads.",
    curriculum: [
      "Grip, posture & the essential rudiments",
      "Reading rhythm & counting time",
      "Rock, pop & world grooves",
      "Coordination & limb independence",
      "Fills, dynamics & musicality",
      "Playing along to real tracks",
    ],
    duration: "60 min · weekly",
    level: "All Levels",
    price: 2100,
    priceUnit: "/ month",
    highlights: ["Rudiments to fills", "Genre grooves", "Play-along sessions"],
    gradient: "from-wine-800 via-wine-900 to-wine-950",
    accent: "var(--wine-400)",
    image: drumsImg,
  },
  {
    slug: "kids-music",
    title: "Kids Music",
    icon: Blocks,
    tagline: "Ages 4 – 9",
    description:
      "A joyful first encounter with rhythm, pitch and play. Games, movement and songs build musical instinct and a lifelong love of learning.",
    overview:
      "A child's first encounter with music should feel like play — and here it does. Through games, movement and song, young learners build rhythm, pitch and confidence, discovering a love of music that lasts a lifetime.",
    curriculum: [
      "Rhythm & movement games",
      "Singing & pitch matching",
      "Musical listening & memory",
      "A gentle introduction to an instrument",
      "Playing & sharing in a group",
      "Confidence, focus & pure fun",
    ],
    duration: "40 min · weekly",
    level: "Kids",
    price: 2200,
    priceUnit: "/ month",
    highlights: ["Playful & musical", "Rhythm games", "Group & solo"],
    gradient: "from-wine-500 via-wine-700 to-wine-900",
    accent: "var(--wine-200)",
  },
];

export function getCourse(slug: string) {
  return courses.find((c) => c.slug === slug);
}

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
    experience: "Higher Institute of Music (Ain Shams)",
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
      "Founded by Louloua — a Teaching Assistant at the Higher Institute of Music (Ain Shams) — Volcano begins with a single belief: everyone deserves a world-class musical education.",
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
  { value: "6", label: "Years of experience" },
  { value: "1350+", label: "Students & counting" },
  { value: "8", label: "Instruments mastered" },
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
