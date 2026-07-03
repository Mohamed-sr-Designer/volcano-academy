"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/data";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { StatCounter } from "@/components/shared/stat-counter";

export function StatsStrip() {
  return (
    <section className="relative border-y border-border bg-secondary/40">
      <div className="container">
        <motion.dl
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="grid grid-cols-2 divide-x divide-y divide-border/70 sm:grid-cols-4 sm:divide-y-0"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              className="flex flex-col items-center gap-2 px-4 py-10 text-center sm:py-14"
            >
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
                <StatCounter value={s.value} />
              </dd>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground sm:text-sm">
                {s.label}
              </p>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
