import type { Metadata } from "next";

import { PageHero } from "@/components/shared/page-hero";
import { RevealGroup } from "@/components/shared/reveal";
import { InstructorCard } from "@/components/sections/instructor-card";
import { CtaBand } from "@/components/sections/cta-band";
import { instructors } from "@/lib/data";
import { staggerContainer } from "@/lib/motion";

export const metadata: Metadata = {
  title: "Instructors",
  description:
    "Meet Volcano's faculty — conservatory-trained musicians and active performers who teach with genuine artistry across every instrument.",
};

export default function InstructorsPage() {
  return (
    <>
      <PageHero
        eyebrow="The Faculty"
        title={
          <>
            Artists who
            <br className="hidden sm:block" /> love to teach
          </>
        }
        description="Every Volcano instructor is a performing musician first — bringing real artistry, patience and mentorship to every lesson."
      />

      <section className="section pt-4">
        <div className="container">
          <RevealGroup
            container={staggerContainer}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {instructors.map((instructor) => (
              <InstructorCard key={instructor.slug} instructor={instructor} />
            ))}
          </RevealGroup>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
