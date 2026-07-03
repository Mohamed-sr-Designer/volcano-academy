import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Elegant monogram "portrait" — a warm brand-hued gradient with a soft grain,
 * concentric staff lines and the person's initials. Used in place of stock
 * photography so the identity stays consistent and fully self-contained.
 */
export function AvatarArt({
  initials,
  hue = 354,
  className,
  rounded = "rounded-2xl",
}: {
  initials: string;
  hue?: number;
  className?: string;
  rounded?: string;
}) {
  const from = `hsl(${hue} 45% 26%)`;
  const via = `hsl(${hue} 50% 18%)`;
  const to = `hsl(${hue + 4} 55% 10%)`;

  return (
    <div
      className={cn(
        "relative isolate flex items-center justify-center overflow-hidden",
        rounded,
        className
      )}
      style={{ background: `linear-gradient(150deg, ${from}, ${via} 55%, ${to})` }}
    >
      <div
        className="absolute -left-8 -top-8 h-40 w-40 rounded-full blur-3xl"
        style={{ background: `hsl(${hue} 55% 42% / 0.35)` }}
      />
      <svg
        aria-hidden
        viewBox="0 0 200 200"
        className="absolute inset-0 h-full w-full opacity-[0.4]"
        preserveAspectRatio="xMidYMid slice"
      >
        {[36, 60, 84, 108, 132].map((r, i) => (
          <circle
            key={r}
            cx="150"
            cy="46"
            r={r}
            fill="none"
            stroke="hsl(var(--cream))"
            strokeOpacity={0.12 - i * 0.015}
          />
        ))}
        {[150, 162, 174].map((y) => (
          <line
            key={y}
            x1="0"
            x2="200"
            y1={y}
            y2={y}
            stroke="hsl(var(--cream))"
            strokeOpacity="0.08"
          />
        ))}
      </svg>
      <span className="relative font-display text-[clamp(2rem,6vw,3.4rem)] font-semibold tracking-tight text-cream/95">
        {initials}
      </span>
      <div className="noise absolute inset-0" />
    </div>
  );
}
