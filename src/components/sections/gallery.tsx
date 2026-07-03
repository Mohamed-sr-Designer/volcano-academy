"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Piano,
  Guitar,
  Drum,
  Mic2,
  Music2,
  Users,
  Maximize2,
  ArrowLeft,
  ArrowRight,
  X,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

type Shot = {
  id: number;
  title: string;
  category: string;
  icon: LucideIcon;
  hue: number;
  angle: number;
  ratio: string; // aspect ratio class for masonry variety
};

const shots: Shot[] = [
  { id: 1, title: "Morning piano session", category: "Lessons", icon: Piano, hue: 354, angle: 150, ratio: "aspect-[4/5]" },
  { id: 2, title: "Winter recital", category: "Concerts", icon: Music2, hue: 350, angle: 120, ratio: "aspect-[4/3]" },
  { id: 3, title: "Guitar workshop", category: "Lessons", icon: Guitar, hue: 356, angle: 200, ratio: "aspect-square" },
  { id: 4, title: "Student showcase", category: "Events", icon: Users, hue: 348, angle: 160, ratio: "aspect-[3/4]" },
  { id: 5, title: "Rhythm & groove", category: "Practice", icon: Drum, hue: 352, angle: 135, ratio: "aspect-[4/3]" },
  { id: 6, title: "Vocal masterclass", category: "Lessons", icon: Mic2, hue: 358, angle: 175, ratio: "aspect-[4/5]" },
  { id: 7, title: "Ensemble evening", category: "Concerts", icon: Music2, hue: 351, angle: 145, ratio: "aspect-square" },
  { id: 8, title: "Young performers", category: "Students", icon: Users, hue: 353, angle: 210, ratio: "aspect-[3/4]" },
  { id: 9, title: "Practice room", category: "Practice", icon: Piano, hue: 349, angle: 130, ratio: "aspect-[4/3]" },
  { id: 10, title: "Summer concert", category: "Concerts", icon: Guitar, hue: 355, angle: 165, ratio: "aspect-[4/5]" },
  { id: 11, title: "Theory & harmony", category: "Lessons", icon: Music2, hue: 347, angle: 140, ratio: "aspect-square" },
  { id: 12, title: "Open stage night", category: "Events", icon: Mic2, hue: 354, angle: 185, ratio: "aspect-[3/4]" },
];

const categories = ["All", "Lessons", "Events", "Students", "Concerts", "Practice"];

function TileArt({ shot, className }: { shot: Shot; className?: string }) {
  const { icon: Icon, hue, angle } = shot;
  return (
    <div
      className={cn("relative isolate h-full w-full overflow-hidden", className)}
      style={{
        background: `linear-gradient(${angle}deg, hsl(${hue} 46% 26%), hsl(${hue} 52% 15%) 55%, hsl(${hue + 4} 55% 9%))`,
      }}
    >
      <div
        className="absolute -right-6 -top-8 h-40 w-40 rounded-full blur-3xl"
        style={{ background: `hsl(${hue} 55% 45% / 0.35)` }}
      />
      <svg aria-hidden viewBox="0 0 200 200" className="absolute inset-0 h-full w-full opacity-40" preserveAspectRatio="xMidYMid slice">
        {[30, 54, 78, 102, 126].map((r, i) => (
          <circle key={r} cx="160" cy="40" r={r} fill="none" stroke="hsl(var(--cream))" strokeOpacity={0.12 - i * 0.015} />
        ))}
      </svg>
      <svg aria-hidden viewBox="0 0 200 40" className="absolute bottom-3 left-0 h-10 w-full opacity-50" preserveAspectRatio="none">
        {Array.from({ length: 26 }).map((_, i) => {
          const h = Math.round(6 + Math.abs(Math.sin(i * 0.7 + shot.id) * 26));
          return <rect key={i} x={i * 8 + 2} y={40 - h} width="3" height={h} rx="1.5" fill="hsl(var(--cream))" opacity={0.25} />;
        })}
      </svg>
      <Icon className="absolute left-5 top-5 h-9 w-9 text-cream/90" strokeWidth={1.4} />
      <div className="noise absolute inset-0" />
    </div>
  );
}

export function Gallery() {
  const [filter, setFilter] = React.useState("All");
  const [active, setActive] = React.useState<number | null>(null);

  const visible = React.useMemo(
    () => (filter === "All" ? shots : shots.filter((s) => s.category === filter)),
    [filter]
  );

  const activeIndex = active === null ? -1 : visible.findIndex((s) => s.id === active);
  const activeShot = activeIndex >= 0 ? visible[activeIndex] : null;

  const step = (dir: number) => {
    if (activeIndex < 0) return;
    const next = (activeIndex + dir + visible.length) % visible.length;
    setActive(visible[next].id);
  };

  React.useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, activeIndex, visible]);

  return (
    <>
      {/* Filters */}
      <div className="mb-12 flex flex-wrap items-center justify-center gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={cn(
              "rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300",
              filter === c
                ? "border-primary bg-primary text-primary-foreground shadow-soft"
                : "border-border text-foreground/70 hover:border-primary/40 hover:text-foreground"
            )}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Masonry */}
      <motion.div layout className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        <AnimatePresence mode="popLayout">
          {visible.map((shot) => (
            <motion.button
              key={shot.id}
              layout
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setActive(shot.id)}
              className="group relative block w-full break-inside-avoid overflow-hidden rounded-3xl border border-border text-left shadow-soft"
            >
              <div className={cn("w-full", shot.ratio)}>
                <TileArt
                  shot={shot}
                  className="transition-transform duration-700 ease-out-expo group-hover:scale-[1.05]"
                />
              </div>
              {/* overlay */}
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-wine-950/80 via-wine-950/10 to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <Badge variant="cream" className="w-fit">
                  {shot.category}
                </Badge>
                <p className="mt-2 font-display text-lg font-semibold text-cream">
                  {shot.title}
                </p>
              </div>
              <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-cream/90 text-wine-800 opacity-0 transition-all duration-500 group-hover:opacity-100">
                <Maximize2 className="h-4 w-4" />
              </span>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {activeShot && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-8"
            onClick={() => setActive(null)}
          >
            <div className="absolute inset-0 bg-wine-950/85 backdrop-blur-xl" />

            <button
              aria-label="Close"
              onClick={() => setActive(null)}
              className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full border border-cream/20 text-cream transition hover:bg-cream/10 sm:right-8 sm:top-8"
            >
              <X className="h-5 w-5" />
            </button>

            <button
              aria-label="Previous"
              onClick={(e) => { e.stopPropagation(); step(-1); }}
              className="absolute left-3 z-10 grid h-12 w-12 place-items-center rounded-full border border-cream/20 text-cream transition hover:bg-cream/10 sm:left-8"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              aria-label="Next"
              onClick={(e) => { e.stopPropagation(); step(1); }}
              className="absolute right-3 z-10 grid h-12 w-12 place-items-center rounded-full border border-cream/20 text-cream transition hover:bg-cream/10 sm:right-8"
            >
              <ArrowRight className="h-5 w-5" />
            </button>

            <motion.figure
              key={activeShot.id}
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative z-[71] w-full max-w-3xl overflow-hidden rounded-3xl border border-cream/15 shadow-lift"
            >
              <div className="aspect-[16/10] w-full">
                <TileArt shot={activeShot} />
              </div>
              <figcaption className="flex items-center justify-between gap-4 bg-wine-950 px-6 py-5 text-cream">
                <div>
                  <p className="font-display text-xl font-semibold">{activeShot.title}</p>
                  <p className="text-sm text-cream/60">{activeShot.category}</p>
                </div>
                <span className="text-sm text-cream/50">
                  {activeIndex + 1} / {visible.length}
                </span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
