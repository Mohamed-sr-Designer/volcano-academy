import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Hero } from "@/components/sections/hero";
import { MarqueeBand } from "@/components/sections/marquee-band";
import { StatsStrip } from "@/components/sections/stats-strip";
import { CoursesPreview } from "@/components/sections/courses-preview";
import { WhyVolcano } from "@/components/sections/why-volcano";
import { FounderTeaser } from "@/components/sections/founder-teaser";
import { Testimonials } from "@/components/sections/testimonials";
import { CtaBand } from "@/components/sections/cta-band";
import { PricingCard } from "@/components/sections/pricing-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { staggerContainer } from "@/lib/motion";
import { plans } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeBand />
      <StatsStrip />
      <CoursesPreview />
      <WhyVolcano />
      <FounderTeaser />
      <Testimonials />

      {/* Pricing preview */}
      <section className="section relative">
        <div className="container">
          <SectionHeading
            eyebrow="Pricing"
            title="Simple plans, serious progress"
            description="Flexible memberships that grow with your ambition. Cancel or switch any time."
          />
          <RevealGroup
            container={staggerContainer}
            className="mt-16 grid gap-6 lg:grid-cols-3 lg:items-center"
          >
            {plans.map((plan) => (
              <PricingCard key={plan.name} plan={plan} />
            ))}
          </RevealGroup>
          <div className="mt-12 flex justify-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/pricing">
                Compare all plans
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
