import { Hero } from "@/components/sections/hero";
import { MarqueeBand } from "@/components/sections/marquee-band";
import { StatsStrip } from "@/components/sections/stats-strip";
import { CoursesPreview } from "@/components/sections/courses-preview";
import { WhyVolcano } from "@/components/sections/why-volcano";
import { FounderTeaser } from "@/components/sections/founder-teaser";
import { Testimonials } from "@/components/sections/testimonials";
import { CtaBand } from "@/components/sections/cta-band";

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
      <CtaBand />
    </>
  );
}
