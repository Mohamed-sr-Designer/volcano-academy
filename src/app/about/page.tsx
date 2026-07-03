import type { Metadata } from "next";
import { Target, Eye, Sparkles } from "lucide-react";

import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/shared/reveal";
import { Timeline } from "@/components/shared/timeline";
import { StatsStrip } from "@/components/sections/stats-strip";
import { CtaBand } from "@/components/sections/cta-band";
import { AvatarArt } from "@/components/shared/avatar-art";
import { values, timeline } from "@/lib/data";
import { staggerContainer, fadeUp } from "@/lib/motion";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story, mission and values behind Volcano — a premium music academy built to help students of every age master music with confidence and creativity.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title={
          <>
            A modern home for
            <br className="hidden sm:block" /> serious music
          </>
        }
        description="Volcano was founded on a simple, stubborn belief: that a world-class musical education should feel inspiring, personal and within reach for everyone."
      />

      {/* Story split */}
      <section className="section pt-4">
        <div className="container grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-primary/10 blur-2xl" />
              <AvatarArt
                initials="♪"
                hue={352}
                rounded="rounded-[2rem]"
                className="aspect-square w-full shadow-lift ring-1 ring-border"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Who we are"
              title="Where discipline meets delight"
              description="We pair the rigour of a conservatory with the warmth of a place that genuinely wants you to fall in love with music."
            />
            <RevealGroup
              container={staggerContainer}
              className="mt-8 space-y-5 text-pretty leading-relaxed text-muted-foreground"
            >
              <RevealItem variants={fadeUp}>
                <p>
                  From the first curious note to a confident performance, every
                  student follows a path shaped entirely around who they are —
                  their goals, their taste, their pace. No templates. No shortcuts.
                  Just thoughtful, expert teaching.
                </p>
              </RevealItem>
              <RevealItem variants={fadeUp}>
                <p>
                  Our studios were designed to make you want to stay: acoustically
                  treated rooms, premium instruments and a calm, considered
                  atmosphere where progress feels natural and performance feels
                  possible.
                </p>
              </RevealItem>
            </RevealGroup>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section pt-0">
        <div className="container">
          <RevealGroup
            container={staggerContainer}
            className="grid gap-6 md:grid-cols-2"
          >
            {[
              {
                icon: Target,
                label: "Our Mission",
                text: "To provide a modern, inspiring and professional learning environment where students of all ages master music with confidence and creativity.",
              },
              {
                icon: Eye,
                label: "Our Vision",
                text: "To become the region's most loved music academy — a place where artistry is nurtured, potential is unlocked and every student finds their voice.",
              },
            ].map(({ icon: Icon, label, text }) => (
              <RevealItem
                key={label}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-9 shadow-soft"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/8 blur-2xl" />
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" strokeWidth={1.6} />
                </span>
                <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight">
                  {label}
                </h3>
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                  {text}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <StatsStrip />

      {/* Values */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Our Values"
            title="The principles we play by"
            description="Three ideas guide every lesson, every decision and every note we help our students find."
          />
          <RevealGroup
            container={staggerContainer}
            className="mt-16 grid gap-6 md:grid-cols-3"
          >
            {values.map((v) => {
              const { icon: Icon } = v;
              return (
                <RevealItem
                  key={v.title}
                  variants={fadeUp}
                  className="group rounded-3xl border border-border bg-card p-8 text-center shadow-soft transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:shadow-lift"
                >
                  <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-500 group-hover:scale-110">
                    <Icon className="h-6 w-6" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-semibold tracking-tight">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {v.description}
                  </p>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      {/* Timeline */}
      <section className="section pt-0">
        <div className="container">
          <SectionHeading
            eyebrow="The Journey"
            title="How Volcano came to life"
            description="Every academy has an origin story. Ours is still being written — one student at a time."
          />
          <div className="mt-16">
            <Timeline
              items={timeline.map((t) => ({
                label: t.year,
                title: t.title,
                description: t.description,
              }))}
            />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
