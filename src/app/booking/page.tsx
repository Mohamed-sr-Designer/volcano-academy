import type { Metadata } from "next";
import { Suspense } from "react";
import { Clock, ShieldCheck, MessageCircle } from "lucide-react";

import { PageHero } from "@/components/shared/page-hero";
import { BookingForm } from "@/components/forms/booking-form";

export const metadata: Metadata = {
  title: "Book a Lesson",
  description:
    "Book your first lesson at Volcano in a few simple steps. Choose your instrument, instructor and schedule — we'll confirm within 24 hours.",
};

const assurances = [
  { icon: Clock, text: "Confirmed within 24 hours" },
  { icon: ShieldCheck, text: "Free first trial lesson" },
  { icon: MessageCircle, text: "We reply on WhatsApp" },
];

export default function BookingPage() {
  return (
    <>
      <PageHero
        eyebrow="Book a Lesson"
        title="Let's find your rhythm"
        description="Four quick steps and you're booked. Tell us a little about yourself and we'll match you with the perfect instructor and time."
        notes={false}
      />

      <section className="pb-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <Suspense fallback={<div className="h-[36rem] animate-pulse rounded-[2rem] border border-border bg-card" />}>
              <BookingForm />
            </Suspense>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {assurances.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 text-sm shadow-soft"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-foreground/80">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
