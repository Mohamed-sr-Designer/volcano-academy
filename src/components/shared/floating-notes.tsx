"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Music, Music2, Music3, Music4 } from "lucide-react";

const ICONS = [Music, Music2, Music3, Music4];

type Note = {
  left: string;
  top: string;
  size: number;
  delay: number;
  duration: number;
  rotate: number;
  opacity: number;
  Icon: (typeof ICONS)[number];
};

const NOTES: Note[] = [
  { left: "8%", top: "22%", size: 34, delay: 0, duration: 8, rotate: -12, opacity: 0.18, Icon: Music4 },
  { left: "18%", top: "68%", size: 22, delay: 1.4, duration: 10, rotate: 8, opacity: 0.14, Icon: Music },
  { left: "76%", top: "18%", size: 40, delay: 0.6, duration: 9, rotate: 14, opacity: 0.2, Icon: Music2 },
  { left: "88%", top: "60%", size: 26, delay: 2.1, duration: 11, rotate: -6, opacity: 0.15, Icon: Music3 },
  { left: "62%", top: "78%", size: 30, delay: 1.1, duration: 8.5, rotate: 10, opacity: 0.13, Icon: Music },
  { left: "40%", top: "12%", size: 20, delay: 2.6, duration: 12, rotate: -16, opacity: 0.12, Icon: Music4 },
  { left: "30%", top: "40%", size: 18, delay: 0.9, duration: 9.5, rotate: 6, opacity: 0.1, Icon: Music2 },
];

export function FloatingNotes({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {NOTES.map((n, i) => {
        const { Icon } = n;
        return (
          <motion.span
            key={i}
            className="absolute text-primary"
            style={{ left: n.left, top: n.top, opacity: n.opacity }}
            initial={{ y: 0, rotate: n.rotate }}
            animate={{ y: [0, -26, 0], rotate: [n.rotate, n.rotate + 8, n.rotate] }}
            transition={{
              duration: n.duration,
              delay: n.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon style={{ width: n.size, height: n.size }} strokeWidth={1.25} />
          </motion.span>
        );
      })}
    </div>
  );
}
