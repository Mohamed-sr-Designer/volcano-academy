# VOLCANO — Path To Mastery

A production-grade website for **Volcano**, a premium music academy. Designed to feel like the work of an award-winning digital agency — luxurious, minimal, cinematic — with light & dark modes built from a palette extracted **exclusively from the official logo**.

## ✨ Highlights

- **Brand-locked palette** — only two colours, taken directly from the logo vector:
  - Burgundy / Oxblood `#5B1E24`
  - Warm Cream / Ivory `#F4EFEA`
  - The full light/dark system is built from tints & shades of these two hues (see `src/app/globals.css`).
- **Theme-adaptive logo** — the mark is reconstructed from the logo as inline SVG; the badge uses `currentColor` and the flame/clef knocks out to the surface behind it, so it looks perfect in both themes.
- **Animated theme switcher**, sticky glass navbar, magnetic buttons, floating musical notes, 3D tilt cards, scroll progress, marquee, count-up stats and page-wide Framer Motion choreography.
- **9 fully-designed pages** + custom 404, sitemap & robots.
- **Self-contained artwork** — every course, instructor portrait and gallery tile is generated with on-brand SVG/gradients (no stock photography, no broken external images, faster Lighthouse).

## 🧰 Tech Stack

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS · shadcn-style UI (Radix) · Framer Motion · Lucide React · React Hook Form · Zod · next-themes.

## 📄 Pages

| Route | Description |
|-------|-------------|
| `/` | Cinematic hero, courses, why-Volcano, founder teaser, testimonials, pricing, CTA |
| `/about` | Story, mission & vision, values, animated timeline, stats |
| `/courses` | All 7 instruments, how-it-works, FAQ |
| `/founder` | Louloua — premium profile, credentials, journey, quote, socials |
| `/instructors` | Faculty grid |
| `/gallery` | Masonry gallery with filters & fullscreen lightbox |
| `/pricing` | Starter / Professional / Mastery (Professional highlighted) |
| `/booking` | 4-step booking form with validation + success animation |
| `/apply` | Admission application form |
| `/contact` | Map, contact details, working hours, socials, contact form |

## 🚀 Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve production build
```

## 🔧 Before launch — swap the placeholders

- **Contact & socials:** `src/lib/site.ts` (phone, email, address, Instagram/Facebook/TikTok/YouTube, map query).
- **Copy & pricing:** `src/lib/data.ts` (courses, instructors, testimonials, plans, FAQ).
- **Form submissions:** `booking-form.tsx`, `apply-form.tsx`, `contact-form.tsx` currently `console.log` the payload — point them at your API / email service.
- **Real imagery (optional):** replace the generative `AvatarArt` / `CourseArt` / gallery tiles with photos, and add `images.remotePatterns` in `next.config.mjs` if using remote sources.
- **SEO:** update `siteConfig.url` and add an OpenGraph image (`/opengraph-image`).

## 🎨 Design tokens

All colours are HSL CSS variables in `src/app/globals.css` (`:root` = light, `.dark` = dark). The Tailwind theme in `tailwind.config.ts` maps them to `wine-50…950`, `cream`, and the standard semantic tokens (`primary`, `muted`, `border`, …). Change a value once and it cascades across the whole site.

---

Built with care. © Volcano Music Academy.
