"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";
  const toggle = () => setTheme(isDark ? "light" : "dark");

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={mounted ? `Switch to ${isDark ? "light" : "dark"} mode` : "Toggle color theme"}
      suppressHydrationWarning
      className={cn(
        "group relative grid h-11 w-11 place-items-center overflow-hidden rounded-full border border-border bg-background/50 text-foreground transition-colors hover:border-primary/40 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className
      )}
    >
      {/* glow that intensifies in dark mode */}
      <span className="pointer-events-none absolute inset-0 rounded-full bg-radial-glow opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {mounted && (
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={isDark ? "moon" : "sun"}
            initial={{ y: 14, opacity: 0, rotate: -40, scale: 0.6 }}
            animate={{ y: 0, opacity: 1, rotate: 0, scale: 1 }}
            exit={{ y: -14, opacity: 0, rotate: 40, scale: 0.6 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {isDark ? (
              <Moon className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.75} />
            ) : (
              <Sun className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.75} />
            )}
          </motion.span>
        </AnimatePresence>
      )}
    </button>
  );
}
