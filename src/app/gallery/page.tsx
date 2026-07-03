import type { Metadata } from "next";

import { PageHero } from "@/components/shared/page-hero";
import { Gallery } from "@/components/sections/gallery";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Lessons, events, students, concerts and practice — a look inside life at Volcano Music Academy.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title={
          <>
            Life inside
            <br className="hidden sm:block" /> the academy
          </>
        }
        description="Lessons, recitals, showcases and quiet practice — the moments that make Volcano feel like home."
      />

      <section className="section pt-4">
        <div className="container">
          <Gallery />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
