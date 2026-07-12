export const siteConfig = {
  name: "VOLCANO",
  tagline: "Path To Mastery",
  legalName: "Volcano Music Academy",
  description:
    "Volcano is a premium music academy where students of every age master their instrument with confidence and creativity — guided by conservatory-trained instructors in a modern, inspiring environment.",
  url: "https://volcano-academy.com",
  locale: "en",
  email: "hello@volcano-academy.com",
  phone: "+20 11 5443 0545",
  phoneHref: "tel:+201154430545",
  whatsapp: "+20 11 5443 0545",
  whatsappHref: "https://wa.me/201154430545",
  address: "24 Nile Corniche, Maadi — Cairo, Egypt",
  mapQuery: "Maadi, Cairo, Egypt",
  hours: [
    { day: "Saturday — Thursday", time: "10:00 — 21:00" },
    { day: "Friday", time: "14:00 — 21:00" },
  ],
  socials: {
    instagram: "https://instagram.com/volcano.academy",
    facebook: "https://facebook.com/volcano.academy",
    tiktok: "https://tiktok.com/@volcano.academy",
    youtube: "https://youtube.com/@volcano.academy",
  },
} as const;

export type NavItem = {
  title: string;
  href: string;
  description?: string;
};

// Trimmed top navigation — the full set of pages lives in the footer.
export const mainNav: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "Courses", href: "/courses" },
  { title: "Founder", href: "/founder" },
  { title: "Pricing", href: "/pricing" },
  { title: "Contact", href: "/contact" },
];

export const footerNav: { heading: string; items: NavItem[] }[] = [
  {
    heading: "Academy",
    items: [
      { title: "About", href: "/about" },
      { title: "Founder", href: "/founder" },
      { title: "Instructors", href: "/instructors" },
      { title: "Gallery", href: "/gallery" },
    ],
  },
  {
    heading: "Learn",
    items: [
      { title: "Courses", href: "/courses" },
      { title: "Pricing", href: "/pricing" },
      { title: "Book a Lesson", href: "/booking" },
      { title: "Apply Now", href: "/apply" },
    ],
  },
  {
    heading: "Connect",
    items: [
      { title: "Contact", href: "/contact" },
      { title: "Instagram", href: "https://instagram.com/volcano.academy" },
      { title: "Facebook", href: "https://facebook.com/volcano.academy" },
      { title: "TikTok", href: "https://tiktok.com/@volcano.academy" },
    ],
  },
];
