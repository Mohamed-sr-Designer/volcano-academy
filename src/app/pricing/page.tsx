import type { Metadata } from "next";
import { Check, ShieldCheck, RefreshCw, HeartHandshake } from "lucide-react";

import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";
import { PricingCard } from "@/components/sections/pricing-card";
import { Faq } from "@/components/shared/faq";
import { CtaBand } from "@/components/sections/cta-band";
import { plans, faqs } from "@/lib/data";
import { staggerContainer, fadeUp } from "@/lib/motion";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, flexible membership plans for every level of ambition — Starter, Professional and Mastery. Cancel or switch any time.",
};

const guarantees = [
  { icon: ShieldCheck, title: "No hidden fees", text: "One clear monthly price. Everything included, always." },
  { icon: RefreshCw, title: "Flexible & cancel anytime", text: "Pause, switch plans or cancel with a month's notice." },
  { icon: HeartHandshake, title: "Free trial lesson", text: "Try a lesson before you commit — no pressure, no cost." },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={
          <>
            Plans that grow
            <br className="hidden sm:block" /> with your ambition
          </>
        }
        description="Whether you're just beginning or chasing the stage, there's a plan built for your journey. Every plan includes personalised, one-to-one instruction."
      />

      <section className="section pt-4">
        <div className="container">
          <RevealGroup
            container={staggerContainer}
            className="grid gap-6 lg:grid-cols-3 lg:items-center"
          >
            {plans.map((plan) => (
              <PricingCard key={plan.name} plan={plan} />
            ))}
          </RevealGroup>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Prices shown per month in EGP. Sibling and annual discounts available —
            just ask.
          </p>
        </div>
      </section>

      {/* Guarantees */}
      <section className="section pt-0">
        <div className="container">
          <RevealGroup
            container={staggerContainer}
            className="grid gap-6 md:grid-cols-3"
          >
            {guarantees.map((g) => {
              const { icon: Icon } = g;
              return (
                <RevealItem
                  key={g.title}
                  variants={fadeUp}
                  className="flex items-start gap-4 rounded-3xl border border-border bg-card p-7 shadow-soft"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold tracking-tight">
                      {g.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {g.text}
                    </p>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      {/* FAQ */}
      <section className="section pt-0">
        <div className="container">
          <SectionHeading
            eyebrow="Questions"
            title="Pricing, answered"
            description="Still deciding? Here are the things students ask us most."
          />
          <Faq items={faqs} className="mt-14" />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
