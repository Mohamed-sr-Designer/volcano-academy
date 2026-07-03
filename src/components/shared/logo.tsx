import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * VOLCANO brand mark — reconstructed directly from the official logo vector.
 * The badge inherits `currentColor`; the flame/clef knocks out to
 * `--logo-contrast` (the surface behind it), so the mark adapts to any theme.
 */
export function LogoMark({
  className,
  title = "Volcano",
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="101.40 -59.95 337.91 388.38"
      fill="none"
      role="img"
      aria-label={title}
      className={cn("h-full w-full", className)}
    >
      <path
        fill="currentColor"
        fillRule="nonzero"
        d="M161.275 294.687L370.092 294.687C393.804 294.687 413.027 275.464 413.027 251.752L413.027 42.935C413.027 19.223 393.804 0 370.092 0L161.275 0C137.563 0 118.34 19.223 118.34 42.935L118.34 251.752C118.34 275.464 137.563 294.687 161.275 294.687"
      />
      <path
        fill="var(--logo-contrast, #F4EFEA)"
        fillRule="nonzero"
        d="M274.877 216.988C294.2 197.156 293.247 166.239 270.913 150.745L231.875 229.531C248.437 234.746 263.107 229.068 274.877 216.988M217.731 162.314C210.962 174.065 214.548 183.712 218.599 196.601C207.28 191.877 204.052 177.79 205.425 165.489C209.279 130.966 244.167 110.273 277.722 119.99L296.428 81.986C257.16 86.016 211.404 89.843 187.262 125.096C174.899 143.148 173.827 165.635 180.34 183.694C187.993 204.918 203.619 220.657 224.397 226.746L264.271 146.778C246.929 138.865 227.383 145.557 217.731 162.314M407.086 4.672C410.36 -0.286 410.204 -8.699 406.976 -12.324C403.741 -15.955 395.796 -18.318 390.133 -16.71C359.793 -8.094 335.484 14.832 324.188 45.075C354.503 43.052 389.545 31.236 407.086 4.672M123.476 237.459C133.997 227.951 148.415 227.852 157.588 235.351C167.492 243.448 169.859 257.082 162.324 268.929C158.933 274.262 152.874 280.069 146.967 281.001C140.928 281.954 133.408 278.871 125.227 275.735C128.895 294.929 151.063 308.955 171.153 303.032C182.633 299.648 192.917 289.431 198.246 278.801L220.291 234.827C194.238 223.322 178.692 202.782 171.531 176.621C157.991 127.154 186.725 77.986 235.277 60.915C260.928 51.895 287.115 48.887 314.435 46.264C334.93 3.048 357.721 -33.968 404.882 -49.319C410.296 -51.082 423.733 -51.953 426.126 -46.464C431.31 -34.574 426.844 -20.376 422.336 -8.455C411.924 19.073 393.655 43.801 369.629 60.903C350.98 74.178 329.813 77.071 306.715 79.769L284.596 122.864C315.028 139.653 322.281 173.646 306.334 203.624C290.625 233.154 259.953 247.738 227.724 237.611L201.224 289.881C188.042 315.882 157.63 320.43 134.102 305.025C122.525 297.445 113.912 286.858 111.665 274.173C109.398 261.372 112.589 247.297 123.476 237.459"
      />
    </svg>
  );
}

export function Logo({
  className,
  showTagline = true,
  href = "/",
  markClassName,
}: {
  className?: string;
  showTagline?: boolean;
  href?: string | null;
  markClassName?: string;
}) {
  const content = (
    <span className={cn("group inline-flex items-center gap-3", className)}>
      <span
        className={cn(
          "relative grid h-10 w-10 place-items-center text-primary transition-transform duration-500 ease-out-expo group-hover:-rotate-6",
          markClassName
        )}
      >
        <LogoMark />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl font-semibold tracking-[0.14em] text-foreground">
          VOLCANO
        </span>
        {showTagline && (
          <span className="mt-1 text-[0.58rem] font-medium uppercase tracking-[0.34em] text-primary/70">
            Path To Mastery
          </span>
        )}
      </span>
    </span>
  );

  if (href === null) return content;

  return (
    <Link href={href} aria-label="Volcano — Path To Mastery, home">
      {content}
    </Link>
  );
}
