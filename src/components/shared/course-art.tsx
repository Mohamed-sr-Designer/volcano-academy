import * as React from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Bespoke, self-contained artwork for each instrument — no stock imagery.
 * A brand gradient field with sound-wave rings, an equalizer motif and the
 * instrument glyph. Deterministic and crisp at any size.
 */
export function CourseArt({
  icon: Icon,
  gradient,
  accent,
  className,
  seed = 1,
}: {
  icon: LucideIcon;
  gradient: string;
  accent: string;
  className?: string;
  seed?: number;
}) {
  const bars = Array.from({ length: 22 }, (_, i) => {
    const h = 12 + Math.abs(Math.sin(i * 0.9 + seed) * 46) + ((i * 7 + seed * 13) % 18);
    return Math.round(Math.min(72, h)); // integers → deterministic SSR/CSR markup
  });

  return (
    <div
      className={cn(
        "relative isolate overflow-hidden bg-gradient-to-br text-cream",
        gradient,
        className
      )}
    >
      {/* soft glow */}
      <div
        className="absolute -right-10 -top-16 h-52 w-52 rounded-full blur-3xl"
        style={{ background: `hsl(${accent} / 0.28)` }}
      />
      {/* concentric sound rings */}
      <svg
        aria-hidden
        viewBox="0 0 400 300"
        className="absolute inset-0 h-full w-full opacity-[0.5]"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id={`rg-${seed}`} cx="78%" cy="26%" r="70%">
            <stop offset="0%" stopColor="hsl(var(--cream))" stopOpacity="0.22" />
            <stop offset="100%" stopColor="hsl(var(--cream))" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="400" height="300" fill={`url(#rg-${seed})`} />
        {[40, 78, 116, 154, 192].map((r, i) => (
          <circle
            key={r}
            cx="312"
            cy="70"
            r={r}
            fill="none"
            stroke="hsl(var(--cream))"
            strokeOpacity={0.14 - i * 0.02}
            strokeWidth="1"
          />
        ))}
      </svg>

      {/* equalizer baseline */}
      <svg
        aria-hidden
        viewBox="0 0 220 80"
        className="absolute bottom-0 left-0 h-20 w-full opacity-60"
        preserveAspectRatio="none"
      >
        {bars.map((h, i) => (
          <rect
            key={i}
            x={i * 10 + 3}
            y={80 - h}
            width="4"
            height={h}
            rx="2"
            fill="hsl(var(--cream))"
            opacity={Number((0.18 + (i % 5) * 0.05).toFixed(2))}
          />
        ))}
      </svg>

      {/* instrument glyph */}
      <div className="absolute left-6 top-6 text-cream/95">
        <Icon className="h-11 w-11" strokeWidth={1.4} />
      </div>

      {/* grain */}
      <div className="noise absolute inset-0" />
    </div>
  );
}
