import type { Metadata } from "next";
import { CalendarSearch, UserCheck, Music, Trophy } from "lucide-react";

import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";
import { CourseGrid } from "@/components/sections/course-grid";
import { Faq } from "@/components/shared/faq";
import { CtaBand } from "@/components/sections/cta-band";
import { Button } from "@/components/ui/button";
import { faqs } from "@/lib/data";
import { staggerContainer, fadeUp } from "@/lib/motion";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Piano, guitar, violin, drums, vocals, music theory and kids music — seven disciplines taught one-to-one by conservatory-trained instructors at Volcano.",
};

const steps = [
  {
    icon: CalendarSearch,
    title: "Book a trial",
    text: "Choose your instrument and a time that suits you. Online or in-studio.",
  },
  {
    icon: UserCheck,
    title: "Meet your instructor",
    text: "We match you with the perfect teacher and assess your starting point.",
  },
  {
    icon: Music,
    title: "Follow your path",
    text: "A personalised curriculum keeps every lesson focused and rewarding.",
  },
  {
    icon: Trophy,
    title: "Perform & certify",
    text: "Recitals, showcases and certificates turn practice into pride.",
  },
];

export default function CoursesPage() {
  return (
    <>
      <PageHero
        eyebrow="Courses"
        title={
          <>
            Choose your
            <br className="hidden sm:block" /> instrument
          </>
        }
        description="Seven disciplines, one standard of excellence. Every course is taught one-to-one and tailored to your level, taste and ambition."
      >
        <Button asChild size="lg">
          <Link href="/booking">Book a lesson</Link>
        </Button>
      </PageHero>

      <section className="section pt-4">
        <div className="container">
          <CourseGrid />
        </div>
      </section>

      {/* How it works */}
      <section className="section pt-0">
        <div className="container">
          <SectionHeading
            eyebrow="How lessons work"
            title="From first note to full flight"
            description="A clear, supportive path designed to make progress feel effortless and inevitable."
          />
          <RevealGroup
            container={staggerContainer}
            className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {steps.map((s, i) => {
              const { icon: Icon } = s;
              return (
                <RevealItem
                  key={s.title}
                  variants={fadeUp}
                  className="relative rounded-3xl border border-border bg-card p-7 shadow-soft"
                >
                  <span className="font-display text-5xl font-semibold text-primary/15">
                    0{i + 1}
                  </span>
                  <span className="mt-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {s.text}
                  </p>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      {/* FAQ */}
      <section className="section pt-0">
        <div className="container">
          <SectionHeading
            eyebrow="Questions"
            title="Good to know"
            description="Everything you might be wondering before your first lesson."
          />
          <Faq items={faqs} className="mt-14" />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
