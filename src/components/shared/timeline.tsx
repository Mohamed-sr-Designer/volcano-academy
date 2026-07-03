"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type TimelineEntry = {
  label: string;
  title: string;
  description: string;
};

export function Timeline({
  items,
  className,
}: {
  items: TimelineEntry[];
  className?: string;
}) {
  return (
    <div className={cn("relative mx-auto max-w-3xl", className)}>
      {/* spine */}
      <div className="absolute left-[7px] top-2 h-full w-px bg-gradient-to-b from-primary/60 via-border to-transparent sm:left-1/2 sm:-translate-x-1/2" />

      <ul className="space-y-12">
        {items.map((item, i) => {
          const left = i % 2 === 0;
          return (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                "relative pl-10 sm:w-1/2 sm:pl-0",
                left ? "sm:pr-14 sm:text-right" : "sm:ml-auto sm:pl-14"
              )}
            >
              {/* node */}
              <span
                className={cn(
                  "absolute top-1.5 grid h-4 w-4 place-items-center rounded-full bg-primary ring-4 ring-background",
                  "left-0 sm:left-auto",
                  left ? "sm:-right-2" : "sm:-left-2"
                )}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-cream" />
              </span>

              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/70">
                {item.label}
              </span>
              <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
