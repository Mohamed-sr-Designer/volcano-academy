import type { Metadata } from "next";

import { PageHero } from "@/components/shared/page-hero";
import { ApplyForm } from "@/components/forms/apply-form";

export const metadata: Metadata = {
  title: "Apply for Admission",
  description:
    "Apply to join Volcano Music Academy. Complete our admission form and our team will arrange your placement within two working days.",
};

export default function ApplyPage() {
  return (
    <>
      <PageHero
        eyebrow="Admissions"
        title="Apply to join Volcano"
        description="Begin your admission in minutes. Share a little about yourself and your musical aspirations, and our team will take care of the rest."
        notes={false}
      />

      <section className="pb-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <ApplyForm />
          </div>
        </div>
      </section>
    </>
  );
}
