"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { courses } from "@/lib/data";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { CourseCard } from "@/components/sections/course-card";
import { Button } from "@/components/ui/button";

export function CoursesPreview() {
  const featured = courses.slice(0, 3);

  return (
    <section id="featured" className="section relative scroll-mt-24">
      <div className="container">
        <div className="flex flex-col items-end justify-between gap-8 md:flex-row">
          <SectionHeading
            align="left"
            eyebrow="Courses"
            title={
              <>
                Find the instrument
                <br className="hidden sm:block" /> that speaks to you
              </>
            }
            description="Seven disciplines, one standard of excellence. Each path is personalised to your level, taste and ambition."
          />
          <Button asChild variant="outline" size="lg" className="shrink-0">
            <Link href="/courses">
              View all courses
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {featured.map((course, i) => (
            <motion.div key={course.slug} variants={fadeUp}>
              <CourseCard course={course} index={i} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
