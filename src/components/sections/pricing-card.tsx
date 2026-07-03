"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

import type { Plan } from "@/lib/data";
import { formatPrice, cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { fadeUp } from "@/lib/motion";

export function PricingCard({ plan }: { plan: Plan }) {
  const featured = plan.featured;

  return (
    <motion.div
      variants={fadeUp}
      className={cn(
        "relative flex h-full flex-col overflow-hidden rounded-3xl border p-8 transition-all duration-500 ease-out-expo",
        featured
          ? "border-primary/30 bg-wine-950 text-cream shadow-glow lg:-translate-y-4 lg:scale-[1.02]"
          : "border-border bg-card shadow-soft hover:-translate-y-1 hover:shadow-lift"
      )}
      style={
        featured ? ({ ["--logo-contrast" as string]: "hsl(355 55% 9%)" } as React.CSSProperties) : undefined
      }
    >
      {featured && (
        <>
          <div className="noise absolute inset-0" />
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/30 blur-3xl" />
        </>
      )}

      <div className="relative z-10 flex items-center justify-between">
        <h3
          className={cn(
            "font-display text-2xl font-semibold tracking-tight",
            featured ? "text-cream" : "text-foreground"
          )}
        >
          {plan.name}
        </h3>
        {featured && (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-cream/15 px-3 py-1 text-xs font-medium text-cream">
            <Sparkles className="h-3.5 w-3.5" />
            Most popular
          </span>
        )}
      </div>

      <p
        className={cn(
          "relative z-10 mt-2 text-sm",
          featured ? "text-cream/70" : "text-muted-foreground"
        )}
      >
        {plan.blurb}
      </p>

      <div className="relative z-10 mt-6 flex items-baseline gap-1">
        <span
          className={cn(
            "font-display text-5xl font-semibold tracking-tight",
            featured ? "text-cream" : "text-foreground"
          )}
        >
          {formatPrice(plan.price)}
        </span>
        <span className={cn("text-sm", featured ? "text-cream/60" : "text-muted-foreground")}>
          {plan.cadence}
        </span>
      </div>

      <div
        className={cn(
          "relative z-10 my-7 h-px w-full",
          featured ? "bg-cream/15" : "bg-border"
        )}
      />

      <ul className="relative z-10 flex flex-1 flex-col gap-3.5">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm">
            <span
              className={cn(
                "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full",
                featured ? "bg-cream/15 text-cream" : "bg-primary/10 text-primary"
              )}
            >
              <Check className="h-3 w-3" strokeWidth={3} />
            </span>
            <span className={featured ? "text-cream/85" : "text-foreground/80"}>{f}</span>
          </li>
        ))}
      </ul>

      <div className="relative z-10 mt-8">
        <Button
          asChild
          size="lg"
          variant={featured ? "cream" : "default"}
          className="w-full"
        >
          <Link href="/booking">{plan.cta}</Link>
        </Button>
      </div>
    </motion.div>
  );
}
