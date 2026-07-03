"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { FloatingNotes } from "@/components/shared/floating-notes";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  notes = true,
  className,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  notes?: boolean;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden pb-16 pt-36 noise sm:pt-44",
        className
      )}
    >
      <div className="absolute inset-0 -z-10 bg-radial-glow" />
      <div className="pointer-events-none absolute left-1/2 top-[-6rem] -z-10 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />
      {notes && <FloatingNotes className="-z-10 opacity-80" />}

      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <motion.span variants={fadeUp} className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {eyebrow}
          </motion.span>
          <motion.h1
            variants={fadeUp}
            className="mt-6 font-display text-[clamp(2.6rem,6vw,4.75rem)] font-semibold leading-[1.02] tracking-tightest"
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              {description}
            </motion.p>
          )}
          {children && (
            <motion.div variants={fadeUp} className="mt-9">
              {children}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
