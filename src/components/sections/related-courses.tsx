"use client";

import { motion } from "framer-motion";

import { courses } from "@/lib/data";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { CourseCard } from "@/components/sections/course-card";

export function RelatedCourses({ currentSlug }: { currentSlug: string }) {
  const others = courses.filter((c) => c.slug !== currentSlug).slice(0, 3);
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
    >
      {others.map((c, i) => (
        <motion.div key={c.slug} variants={fadeUp}>
          <CourseCard course={c} index={i} />
        </motion.div>
      ))}
    </motion.div>
  );
}
