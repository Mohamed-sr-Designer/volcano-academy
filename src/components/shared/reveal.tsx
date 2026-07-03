"use client";

import * as React from "react";
import { motion, type Variants } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  once?: boolean;
  amount?: number;
  as?: "div" | "section" | "li" | "span" | "article";
};

export function Reveal({
  children,
  className,
  variants = fadeUp,
  delay = 0,
  once = true,
  amount = 0.3,
  as = "div",
}: RevealProps) {
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      className={className}
      variants={variants}
      custom={delay}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
    >
      {children}
    </MotionTag>
  );
}

/** Stagger group — children should use motion elements or <RevealItem>. */
export function RevealGroup({
  children,
  className,
  once = true,
  amount = 0.2,
  container,
}: {
  children: React.ReactNode;
  className?: string;
  once?: boolean;
  amount?: number;
  container: Variants;
}) {
  return (
    <motion.div
      className={cn(className)}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  variants = fadeUp,
  custom,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  custom?: number;
  as?: "div" | "li" | "article" | "span";
}) {
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag className={className} variants={variants} custom={custom}>
      {children}
    </MotionTag>
  );
}
