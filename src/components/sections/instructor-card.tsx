"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, GraduationCap } from "lucide-react";

import type { Instructor } from "@/lib/data";
import { AvatarArt } from "@/components/shared/avatar-art";
import { Badge } from "@/components/ui/badge";
import { fadeUp } from "@/lib/motion";

export function InstructorCard({ instructor }: { instructor: Instructor }) {
  return (
    <motion.article
      variants={fadeUp}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-500 ease-out-expo hover:-translate-y-1.5 hover:border-primary/25 hover:shadow-lift"
    >
      <div className="relative overflow-hidden p-3">
        <AvatarArt
          initials={instructor.initials}
          hue={instructor.hue}
          rounded="rounded-2xl"
          className="aspect-[4/5] w-full transition-transform duration-700 ease-out-expo group-hover:scale-[1.03]"
        />
        <div className="absolute inset-x-3 bottom-3 flex flex-wrap gap-1.5 p-3">
          {instructor.tags.slice(0, 2).map((t) => (
            <Badge key={t} variant="cream" className="backdrop-blur">
              {t}
            </Badge>
          ))}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 pt-3">
        <h3 className="font-display text-xl font-semibold tracking-tight">
          {instructor.name}
        </h3>
        <p className="mt-1 text-sm font-medium text-primary/80">{instructor.role}</p>

        <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
          {instructor.bio}
        </p>

        <div className="mt-5 space-y-2 border-t border-border pt-5 text-xs text-muted-foreground">
          <p className="flex items-center gap-2">
            <GraduationCap className="h-3.5 w-3.5 text-primary" />
            {instructor.experience}
          </p>
          <p className="font-medium text-foreground/80">{instructor.specialization}</p>
        </div>

        <Link
          href={{ pathname: "/booking", query: { instructor: instructor.name } }}
          className="mt-5 inline-flex items-center justify-between rounded-full bg-secondary px-5 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
        >
          Book a Lesson
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.article>
  );
}
