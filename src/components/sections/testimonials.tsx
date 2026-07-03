"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";

import { testimonials } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";
import { AvatarArt } from "@/components/shared/avatar-art";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [index, setIndex] = React.useState(0);
  const [dir, setDir] = React.useState(1);
  const [paused, setPaused] = React.useState(false);
  const count = testimonials.length;

  const go = React.useCallback(
    (next: number) => {
      setDir(next > index || (index === count - 1 && next === 0) ? 1 : -1);
      setIndex((next + count) % count);
    },
    [index, count]
  );

  React.useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setDir(1);
      setIndex((i) => (i + 1) % count);
    }, 6000);
    return () => clearInterval(t);
  }, [paused, count]);

  const active = testimonials[index];

  return (
    <section className="section relative overflow-hidden">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/8 blur-[120px]"
        aria-hidden
      />
      <div className="container">
        <SectionHeading
          eyebrow="Testimonials"
          title="Stories from our students"
          description="Real progress, real confidence, real joy — in the words of the people who live it."
        />

        <div
          className="relative mx-auto mt-16 max-w-3xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative min-h-[22rem] sm:min-h-[19rem]">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.figure
                key={index}
                custom={dir}
                initial={{ opacity: 0, x: dir * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir * -60 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center rounded-3xl border border-border bg-card p-8 text-center shadow-soft sm:p-12"
              >
                <Quote className="h-9 w-9 text-primary/30" />
                <div className="mt-5 flex items-center gap-1">
                  {Array.from({ length: active.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="mt-6 text-balance font-display text-xl font-medium leading-relaxed text-foreground sm:text-2xl">
                  “{active.quote}”
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-3">
                  <AvatarArt
                    initials={active.initials}
                    hue={352}
                    rounded="rounded-full"
                    className="h-12 w-12"
                  />
                  <div className="text-left">
                    <p className="font-semibold">{active.name}</p>
                    <p className="text-sm text-muted-foreground">{active.role}</p>
                  </div>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-5">
            <button
              onClick={() => go(index - 1)}
              aria-label="Previous testimonial"
              className="grid h-11 w-11 place-items-center rounded-full border border-border bg-background/60 text-foreground transition hover:border-primary/40 hover:bg-secondary"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    i === index ? "w-7 bg-primary" : "w-2 bg-border hover:bg-primary/40"
                  )}
                />
              ))}
            </div>

            <button
              onClick={() => go(index + 1)}
              aria-label="Next testimonial"
              className="grid h-11 w-11 place-items-center rounded-full border border-border bg-background/60 text-foreground transition hover:border-primary/40 hover:bg-secondary"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
