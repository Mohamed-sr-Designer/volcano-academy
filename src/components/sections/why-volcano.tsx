"use client";

import { motion } from "framer-motion";
import { whyVolcano } from "@/lib/data";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { SectionHeading } from "@/components/shared/section-heading";

export function WhyVolcano() {
  return (
    <section className="section relative">
      <div className="container">
        <SectionHeading
          eyebrow="Why Volcano"
          title={
            <>
              Everything you need to
              <br className="hidden sm:block" /> truly flourish
            </>
          }
          description="A rare combination of artistry, structure and care — the foundations that turn curious beginners into confident musicians."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {whyVolcano.map((feature) => {
            const { icon: Icon } = feature;
            return (
              <motion.div
                key={feature.title}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:border-primary/25 hover:shadow-lift"
              >
                <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-primary/5 blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
                <div className="relative mb-6 inline-flex">
                  <span className="absolute inset-0 rounded-2xl bg-primary/10 transition-transform duration-500 ease-out-expo group-hover:scale-110" />
                  <span className="relative grid h-14 w-14 place-items-center rounded-2xl text-primary">
                    <Icon
                      className="h-6 w-6 transition-transform duration-500 ease-out-expo group-hover:-rotate-6 group-hover:scale-110"
                      strokeWidth={1.6}
                    />
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold tracking-tight">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
                <span className="mt-6 block h-px w-full origin-left scale-x-0 bg-gradient-to-r from-primary/40 to-transparent transition-transform duration-500 ease-out-expo group-hover:scale-x-100" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
