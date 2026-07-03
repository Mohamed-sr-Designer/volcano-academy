"use client";

import { motion } from "framer-motion";

import { courses } from "@/lib/data";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { CourseCard } from "@/components/sections/course-card";

export function CourseGrid() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
    >
      {courses.map((course, i) => (
        <motion.div key={course.slug} variants={fadeUp}>
          <CourseCard course={course} index={i} />
        </motion.div>
      ))}
    </motion.div>
  );
}
