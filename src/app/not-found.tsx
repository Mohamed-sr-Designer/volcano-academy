import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { LogoMark } from "@/components/shared/logo";
import { FloatingNotes } from "@/components/shared/floating-notes";

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 text-center noise">
      <div className="absolute inset-0 -z-10 bg-radial-glow" />
      <FloatingNotes className="-z-10 opacity-70" />

      <span className="grid h-16 w-16 place-items-center text-primary">
        <LogoMark />
      </span>

      <p className="mt-10 font-display text-[clamp(5rem,18vw,11rem)] font-semibold leading-none tracking-tightest text-gradient-warm">
        404
      </p>
      <h1 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
        This note fell silent
      </h1>
      <p className="mt-4 max-w-md text-pretty text-muted-foreground">
        The page you&apos;re looking for has drifted off-key. Let&apos;s get you
        back to the music.
      </p>

      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <Button asChild size="lg">
          <Link href="/">
            <Home className="h-4 w-4" />
            Back to home
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/courses">
            <ArrowLeft className="h-4 w-4" />
            Explore courses
          </Link>
        </Button>
      </div>
    </section>
  );
}
