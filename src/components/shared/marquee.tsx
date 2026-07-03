import * as React from "react";
import { cn } from "@/lib/utils";

/** Infinite marquee row. Duplicates children for a seamless loop. */
export function Marquee({
  children,
  reverse = false,
  className,
  itemClassName,
  pauseOnHover = true,
}: {
  children: React.ReactNode;
  reverse?: boolean;
  className?: string;
  itemClassName?: string;
  pauseOnHover?: boolean;
}) {
  return (
    <div className={cn("group flex w-full overflow-hidden mask-fade-x", className)}>
      {[0, 1].map((k) => (
        <div
          key={k}
          aria-hidden={k === 1}
          className={cn(
            "flex shrink-0 items-center",
            reverse ? "animate-marquee-reverse" : "animate-marquee",
            pauseOnHover && "group-hover:paused",
            itemClassName
          )}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
