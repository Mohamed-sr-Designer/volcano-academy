"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingNotes } from "@/components/shared/floating-notes";

export function SubmitSuccess({
  title,
  message,
  summary,
}: {
  title: string;
  message: string;
  summary?: { label: string; value: string }[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative isolate overflow-hidden rounded-[2rem] border border-primary/20 bg-wine-950 px-6 py-16 text-center text-cream shadow-glow sm:px-16"
      style={{ ["--logo-contrast" as string]: "hsl(355 55% 9%)" }}
    >
      <div className="noise absolute inset-0" />
      <FloatingNotes className="opacity-60" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-56 w-[36rem] -translate-x-1/2 rounded-full bg-primary/30 blur-[110px]" />

      <div className="relative z-10 mx-auto flex max-w-lg flex-col items-center">
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.15, type: "spring", stiffness: 240, damping: 16 }}
          className="relative grid h-20 w-20 place-items-center rounded-full bg-cream text-wine-800"
        >
          <span className="absolute inset-0 animate-pulse-ring rounded-full bg-cream/40" />
          <motion.span
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Check className="h-9 w-9" strokeWidth={3} />
          </motion.span>
        </motion.span>

        <h2 className="mt-8 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-pretty text-cream/70">{message}</p>

        {summary && summary.length > 0 && (
          <dl className="mt-8 grid w-full gap-px overflow-hidden rounded-2xl border border-cream/15 bg-cream/5 text-left sm:grid-cols-2">
            {summary.map((s) => (
              <div key={s.label} className="px-5 py-4">
                <dt className="text-xs uppercase tracking-[0.18em] text-cream/50">
                  {s.label}
                </dt>
                <dd className="mt-1 font-medium">{s.value}</dd>
              </div>
            ))}
          </dl>
        )}

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" variant="cream">
            <Link href="/">Back to home</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-cream/25 bg-transparent text-cream hover:bg-cream/10"
          >
            <Link href="/courses">Explore courses</Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
