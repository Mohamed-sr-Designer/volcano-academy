import type { Metadata } from "next";
import Link from "next/link";
import { GraduationCap, Award, Music4, Quote, ArrowRight } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Timeline } from "@/components/shared/timeline";
import { AvatarArt } from "@/components/shared/avatar-art";
import { FloatingNotes } from "@/components/shared/floating-notes";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { socialLinks } from "@/components/shared/social-icons";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Founder — Louloua",
  description:
    "Meet Louloua — Founder & Music Instructor at Volcano, and a Teaching Assistant at the Higher Institute of Music (Helwan).",
};

const journey = [
  {
    label: "Education",
    title: "Higher Institute of Music (Helwan)",
    description:
      "Formal conservatory training in performance and music theory, building the rigorous foundation that shapes Volcano's teaching philosophy.",
  },
  {
    label: "Teaching",
    title: "Teaching Assistant · Higher Institute of Music",
    description:
      "Guiding and mentoring students at one of the region's most respected musical institutions, refining a patient, modern approach to instruction.",
  },
  {
    label: "Founding",
    title: "Founded Volcano Academy",
    description:
      "Created a modern, inspiring and professional learning environment where students of all ages master music with confidence and creativity.",
  },
  {
    label: "Today",
    title: "Founder & Music Instructor",
    description:
      "Leading a hand-picked faculty and continuing to teach — because the joy of watching a student find their voice never fades.",
  },
];

const credentials = [
  { icon: GraduationCap, label: "Conservatory trained", value: "Helwan" },
  { icon: Music4, label: "Specialisation", value: "Piano · Theory" },
  { icon: Award, label: "Founder", value: "Volcano Academy" },
];

export default function FounderPage() {
  return (
    <>
      {/* Hero / profile */}
      <section className="relative isolate overflow-hidden pt-36 noise sm:pt-44">
        <div className="absolute inset-0 -z-10 bg-radial-glow" />
        <FloatingNotes className="-z-10 opacity-70" />
        <div className="container">
          <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1fr] lg:gap-20">
            <Reveal>
              <div className="relative mx-auto w-full max-w-sm">
                <div className="absolute -inset-5 -z-10 rounded-[2.5rem] bg-primary/12 blur-3xl" />
                <AvatarArt
                  initials="L"
                  hue={354}
                  rounded="rounded-[2.5rem]"
                  className="aspect-[4/5] w-full shadow-lift ring-1 ring-border"
                />
                <div className="glass-card absolute -bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-2xl px-5 py-3 shadow-lift">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-primary/10 text-primary">
                    <Music4 className="h-4 w-4" />
                  </span>
                  <div className="leading-tight">
                    <p className="text-sm font-semibold">Louloua</p>
                    <p className="text-xs text-muted-foreground">Founder & Instructor</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <div>
              <Reveal>
                <Badge variant="default" className="mb-5">
                  The Founder
                </Badge>
                <h1 className="font-display text-[clamp(2.6rem,6vw,4.5rem)] font-semibold leading-[1.02] tracking-tightest">
                  Louloua
                </h1>
                <p className="mt-3 text-lg font-medium text-primary/80">
                  Founder & Music Instructor
                </p>
                <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Louloua is a Teaching Assistant at the Higher Institute of Music
                  (Helwan) and founded Volcano Academy to provide a modern,
                  inspiring and professional learning environment where students of
                  all ages can master music with confidence and creativity.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  {socialLinks.map(({ label, href, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="grid h-11 w-11 place-items-center rounded-full border border-border text-foreground/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-secondary hover:text-primary"
                    >
                      <Icon className="h-[1.05rem] w-[1.05rem]" />
                    </a>
                  ))}
                  <Button asChild size="lg" className="ml-1">
                    <Link href="/booking">
                      Book with Louloua
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>

          {/* credentials */}
          <Reveal className="mt-16">
            <div className="grid gap-4 rounded-3xl border border-border bg-card p-2 shadow-soft sm:grid-cols-3">
              {credentials.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 rounded-2xl px-6 py-5"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {label}
                    </p>
                    <p className="font-display text-lg font-semibold">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Professional timeline */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Professional Journey"
            title="Education, experience & achievements"
            description="The training and milestones that shaped Volcano's founder — and its philosophy."
          />
          <div className="mt-16">
            <Timeline items={journey} />
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="section pt-0">
        <div className="container">
          <Reveal>
            <figure className="relative mx-auto max-w-4xl overflow-hidden rounded-[2.5rem] border border-primary/20 bg-wine-950 px-8 py-16 text-center text-cream shadow-glow sm:px-16 sm:py-20" style={{ ["--logo-contrast" as string]: "hsl(355 55% 9%)" }}>
              <div className="noise absolute inset-0" />
              <div className="pointer-events-none absolute left-1/2 top-0 h-56 w-[36rem] -translate-x-1/2 rounded-full bg-primary/30 blur-[110px]" />
              <Quote className="relative z-10 mx-auto h-12 w-12 text-cream/40" />
              <blockquote className="relative z-10 mt-6 text-balance font-display text-2xl font-medium leading-relaxed sm:text-4xl">
                “I built Volcano so that every student — at any age — could learn
                music the way it deserves to be learned: with patience, artistry
                and joy.”
              </blockquote>
              <figcaption className="relative z-10 mt-8 text-sm uppercase tracking-[0.25em] text-cream/60">
                Louloua · Founder
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
