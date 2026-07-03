import { Marquee } from "@/components/shared/marquee";
import { LogoMark } from "@/components/shared/logo";

const WORDS = [
  "Piano",
  "Guitar",
  "Violin",
  "Drums",
  "Vocals",
  "Music Theory",
  "Kids Music",
  "Performance",
  "Composition",
  "Ear Training",
];

export function MarqueeBand() {
  return (
    <section className="relative border-y border-border bg-wine-950 py-6 text-cream" style={{ ["--logo-contrast" as string]: "hsl(355 55% 9%)" }}>
      <Marquee>
        {WORDS.map((w, i) => (
          <div key={`${w}-${i}`} className="flex items-center">
            <span className="whitespace-nowrap px-8 font-display text-2xl font-medium tracking-tight text-cream/90 sm:text-3xl">
              {w}
            </span>
            <span className="grid h-6 w-6 place-items-center text-cream/70">
              <LogoMark />
            </span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
