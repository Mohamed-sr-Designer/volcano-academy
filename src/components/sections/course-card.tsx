"use client";

import Link from "next/link";
import { Clock, Signal, ArrowUpRight, Check } from "lucide-react";

import type { Course } from "@/lib/data";
import { formatPrice } from "@/lib/utils";
import { CourseArt } from "@/components/shared/course-art";
import { TiltCard } from "@/components/shared/tilt-card";
import { Badge } from "@/components/ui/badge";

export function CourseCard({ course, index = 0 }: { course: Course; index?: number }) {
  return (
    <TiltCard className="group h-full" max={6}>
      <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-500 ease-out-expo group-hover:-translate-y-1.5 group-hover:border-primary/25 group-hover:shadow-lift">
        <div className="relative overflow-hidden">
          <CourseArt
            icon={course.icon}
            gradient={course.gradient}
            accent={course.accent}
            seed={index + 1}
            className="aspect-[16/10] w-full transition-transform duration-700 ease-out-expo group-hover:scale-[1.04]"
          />
          <div className="absolute bottom-4 right-4">
            <Badge variant="cream" className="shadow-soft">
              {course.level}
            </Badge>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="font-display text-2xl font-semibold tracking-tight">
              {course.title}
            </h3>
            <p className="text-right">
              <span className="text-lg font-semibold text-primary">
                {formatPrice(course.price)}
              </span>
              <span className="block text-xs text-muted-foreground">
                {course.priceUnit}
              </span>
            </p>
          </div>
          <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-primary/70">
            {course.tagline}
          </p>

          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {course.description}
          </p>

          <ul className="mt-5 space-y-2">
            {course.highlights.map((h) => (
              <li key={h} className="flex items-center gap-2 text-sm text-foreground/80">
                <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={2.5} />
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex items-center gap-4 border-t border-border pt-5 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {course.duration}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Signal className="h-3.5 w-3.5" />
              {course.level}
            </span>
          </div>

          <Link
            href={{ pathname: "/booking", query: { instrument: course.title } }}
            className="mt-5 inline-flex items-center justify-between rounded-full bg-secondary px-5 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            Book Now
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </TiltCard>
  );
}
