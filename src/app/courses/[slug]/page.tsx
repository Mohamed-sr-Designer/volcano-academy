import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clock,
  Signal,
  MessageCircle,
  Compass,
  Sparkles,
} from "lucide-react";

import { courses, getCourse, learningNote } from "@/lib/data";
import { formatPrice } from "@/lib/utils";
import { whatsappLink } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { CourseArt } from "@/components/shared/course-art";
import { FloatingNotes } from "@/components/shared/floating-notes";
import { RelatedCourses } from "@/components/sections/related-courses";
import { CtaBand } from "@/components/sections/cta-band";

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return { title: "Course not found" };
  return {
    title: `${course.title} Lessons`,
    description: course.overview,
  };
}

const studioMoments = [
  { label: "In the lesson", seed: 3 },
  { label: "Daily practice", seed: 7 },
  { label: "On stage", seed: 11 },
];

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  const { icon: Icon } = course;
  const bookMessage = `Hi Volcano! 🎵 I'd like to book the ${course.title} course. Could you please share the next available slot?`;

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden pt-32 noise sm:pt-40">
        <div className="absolute inset-0 -z-10 bg-radial-glow" />
        <FloatingNotes className="-z-10 opacity-60" />
        <div className="container">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            All courses
          </Link>

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-primary">
                <Icon className="h-4 w-4" />
                {course.tagline}
              </span>
              <h1 className="mt-5 font-display text-[clamp(2.6rem,6vw,4.5rem)] font-semibold leading-[1.02] tracking-tightest">
                {course.title}
              </h1>
              <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                {course.overview}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Badge variant="muted" className="gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  {course.duration}
                </Badge>
                <Badge variant="muted" className="gap-1.5">
                  <Signal className="h-3.5 w-3.5" />
                  {course.level}
                </Badge>
                <Badge variant="default" className="gap-1.5">
                  {formatPrice(course.price)} {course.priceUnit}
                </Badge>
              </div>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <a href={whatsappLink(bookMessage)} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4" />
                    Book on WhatsApp
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href={{ pathname: "/booking", query: { instrument: course.title } }}>
                    Use the booking form
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative mx-auto w-full max-w-lg">
                <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-primary/12 blur-3xl" />
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-lift ring-1 ring-border">
                  {course.image ? (
                    <Image
                      src={course.image}
                      alt={`${course.title} at Volcano`}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 512px"
                      className="object-cover"
                    />
                  ) : (
                    <CourseArt
                      icon={course.icon}
                      gradient={course.gradient}
                      accent={course.accent}
                      seed={5}
                      className="absolute inset-0 h-full w-full"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-wine-950/45 via-transparent to-transparent" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Learning journey note */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-wine-950 p-8 text-cream shadow-glow sm:p-12" style={{ ["--logo-contrast" as string]: "hsl(355 55% 9%)" }}>
              <div className="noise absolute inset-0" />
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/30 blur-[90px]" />
              <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-center">
                <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-cream/12 text-cream">
                  <Compass className="h-7 w-7" strokeWidth={1.6} />
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                      Learn at your own pace
                    </h2>
                    <span className="rounded-full bg-cream/12 px-3 py-1 text-xs font-medium text-cream">
                      ~6 months to independence
                    </span>
                  </div>
                  <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-cream/75">
                    {learningNote}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Curriculum */}
      <section className="section pt-0">
        <div className="container">
          <SectionHeading
            align="left"
            eyebrow="The curriculum"
            title={`What you'll learn in ${course.title}`}
            description="A clear, structured path — every step builds naturally on the last, always adapted to you."
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {course.curriculum.map((item, i) => (
              <Reveal key={item} delay={i * 0.05}>
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-lift">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 font-display text-sm font-semibold text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="pt-2 text-sm font-medium text-foreground/90">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Highlights */}
          <div className="mt-10 flex flex-wrap gap-3">
            {course.highlights.map((h) => (
              <span
                key={h}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 text-sm text-foreground/80"
              >
                <Check className="h-4 w-4 text-primary" strokeWidth={2.5} />
                {h}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Studio moments */}
      <section className="section pt-0">
        <div className="container">
          <SectionHeading
            eyebrow="Life in the studio"
            title={`${course.title} moments`}
            description="A glimpse of the lessons, practice and performances that shape every student's journey."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-3">
            {studioMoments.map((m) => (
              <Reveal key={m.label}>
                <div className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-border shadow-soft">
                  <CourseArt
                    icon={course.icon}
                    gradient={course.gradient}
                    accent={course.accent}
                    seed={m.seed}
                    className="absolute inset-0 h-full w-full transition-transform duration-700 ease-out-expo group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-wine-950/70 to-transparent p-5">
                    <span className="font-display text-lg font-semibold text-cream">
                      {m.label}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <Sparkles className="h-4 w-4 text-primary" />
            Real photos of our students are being added here soon.
          </p>
        </div>
      </section>

      {/* Related */}
      <section className="section pt-0">
        <div className="container">
          <SectionHeading
            eyebrow="Keep exploring"
            title="Other courses you might love"
          />
          <div className="mt-14">
            <RelatedCourses currentSlug={course.slug} />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
