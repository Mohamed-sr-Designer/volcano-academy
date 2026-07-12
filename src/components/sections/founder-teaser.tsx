"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";

import { fadeUp, staggerContainer } from "@/lib/motion";
import { Button } from "@/components/ui/button";
import founderImg from "@/assets/founder.jpg";

export function FounderTeaser() {
  return (
    <section className="section relative overflow-hidden">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-primary/10 blur-2xl" />
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-lift ring-1 ring-border">
              <Image
                src={founderImg}
                alt="Louloua — Founder & Music Instructor at Volcano"
                fill
                sizes="(max-width: 1024px) 100vw, 448px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-wine-950/35 via-transparent to-transparent" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="glass-card absolute -bottom-6 -right-4 w-56 rounded-2xl p-5 shadow-lift sm:-right-8"
            >
              <Quote className="h-6 w-6 text-primary" />
              <p className="mt-2 text-sm font-medium leading-snug text-foreground">
                “Mastery is a journey we walk together.”
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.span variants={fadeUp} className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              The Founder
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl"
            >
              Meet Louloua
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-3 text-sm font-medium uppercase tracking-[0.2em] text-primary/70"
            >
              Founder & Music Instructor
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="mt-6 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              A Teaching Assistant at the Higher Institute of Music (Ain Shams),
              Louloua founded Volcano to create a modern, inspiring and
              professional environment where students of all ages master music
              with confidence and creativity.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-9">
              <Button asChild size="lg">
                <Link href="/founder">
                  Read her story
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
