"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/shared/magnetic";
import { FloatingNotes } from "@/components/shared/floating-notes";
import { LogoMark } from "@/components/shared/logo";

export function CtaBand() {
  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative isolate overflow-hidden rounded-[2.5rem] border border-primary/20 bg-wine-950 px-6 py-20 text-center text-cream shadow-glow sm:px-16 sm:py-28"
          style={{ ["--logo-contrast" as string]: "hsl(355 55% 9%)" }}
        >
          <div className="noise absolute inset-0" />
          <FloatingNotes className="opacity-70" />
          <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-primary/30 blur-[110px]" />

          <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center">
            <span className="grid h-16 w-16 place-items-center text-cream">
              <LogoMark />
            </span>
            <h2 className="mt-8 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
              Your first note is
              <br />
              <span className="italic text-cream/90">waiting for you.</span>
            </h2>
            <p className="mt-6 max-w-lg text-pretty text-cream/70 sm:text-lg">
              Book a lesson today and discover how far your music can go. No
              experience needed — just the desire to begin.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Magnetic>
                <Button asChild size="xl" variant="cream">
                  <Link href="/booking">
                    Book Your Lesson
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </Magnetic>
              <Button
                asChild
                size="xl"
                variant="outline"
                className="border-cream/25 bg-transparent text-cream hover:bg-cream/10 hover:border-cream/40"
              >
                <Link href="/apply">Apply for Admission</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
