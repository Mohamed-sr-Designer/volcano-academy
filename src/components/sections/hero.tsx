"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/shared/magnetic";
import { FloatingNotes } from "@/components/shared/floating-notes";
import { blurUp, fadeUp, staggerContainer } from "@/lib/motion";

export function Hero() {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

  return (
    <section
      ref={ref}
      className="relative isolate flex min-h-[100svh] flex-col items-center justify-center overflow-hidden pt-28 noise"
    >
      {/* ambient background */}
      <motion.div style={{ scale }} className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="absolute left-1/2 top-[-10%] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[130px]" />
        <div className="absolute bottom-[-15%] left-[8%] h-[26rem] w-[26rem] rounded-full bg-wine-500/15 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[6%] h-[24rem] w-[24rem] rounded-full bg-wine-700/15 blur-[110px]" />
        {/* faint staff grid */}
        <div
          className="absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(60%_60%_at_50%_40%,black,transparent)]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--border)/0.6) 1px, transparent 1px)",
            backgroundSize: "100% 92px",
          }}
        />
      </motion.div>

      <FloatingNotes className="-z-10" />

      <motion.div
        style={{ y, opacity }}
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="container flex flex-col items-center text-center"
      >
        <motion.div variants={fadeUp}>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 px-4 py-1.5 text-xs font-medium tracking-wide text-foreground/75 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Premium Music Academy · Cairo
          </span>
        </motion.div>

        <motion.h1
          variants={blurUp}
          className="mt-8 max-w-5xl font-display text-[clamp(2.9rem,8vw,7rem)] font-semibold leading-[0.98] tracking-tightest"
        >
          Your path to
          <br />
          <span className="text-gradient-warm italic">musical mastery</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-7 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Volcano is where students of every age learn to play with confidence,
          artistry and joy — guided by world-class instructors in a space
          designed to inspire.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Magnetic>
            <Button asChild size="xl">
              <Link href="/booking">
                Book Your Lesson
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </Magnetic>
          <Button asChild size="xl" variant="outline">
            <Link href="/courses">Explore Courses</Link>
          </Button>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-12 flex items-center gap-6 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-primary text-primary" />
            ))}
          </div>
          <span>
            Rated <strong className="font-semibold text-foreground">4.9/5</strong> by
            our students
          </span>
        </motion.div>
      </motion.div>

      {/* scroll indicator */}
      <motion.a
        href="#featured"
        aria-label="Scroll to explore"
        style={{ opacity }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-[0.65rem] uppercase tracking-[0.3em]">Scroll</span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-border p-1">
          <motion.span
            className="h-2 w-1 rounded-full bg-primary"
            animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.a>
    </section>
  );
}
