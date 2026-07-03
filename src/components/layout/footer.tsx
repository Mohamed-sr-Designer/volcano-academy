import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";

import { footerNav, siteConfig } from "@/lib/site";
import { LogoMark } from "@/components/shared/logo";
import { NewsletterForm } from "@/components/layout/newsletter-form";
import { socialLinks } from "@/components/shared/social-icons";

export function Footer() {
  return (
    <footer
      className="relative isolate overflow-hidden bg-wine-950 text-cream"
      style={{ ["--logo-contrast" as string]: "hsl(355 55% 9%)" }}
    >
      <div className="noise absolute inset-0" />
      {/* top glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-primary/25 blur-[120px]" />

      <div className="container relative z-10 py-20">
        {/* CTA band */}
        <div className="flex flex-col items-start justify-between gap-8 border-b border-cream/12 pb-14 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
              Stay in tune with Volcano.
            </h2>
            <p className="mt-4 text-cream/70">
              Recitals, new courses and studio stories — a thoughtful note now and
              then, never noise.
            </p>
          </div>
          <div className="w-full max-w-md">
            <NewsletterForm />
            <p className="mt-3 pl-4 text-xs text-cream/45">
              By subscribing you agree to receive occasional emails from Volcano.
            </p>
          </div>
        </div>

        {/* main grid */}
        <div className="grid gap-12 py-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center text-cream">
                <LogoMark />
              </span>
              <div className="flex flex-col leading-none">
                <span className="font-display text-xl font-semibold tracking-[0.14em]">
                  VOLCANO
                </span>
                <span className="mt-1 text-[0.58rem] font-medium uppercase tracking-[0.34em] text-cream/60">
                  Path To Mastery
                </span>
              </div>
            </div>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-cream/65">
              A premium music academy where students of every age master their
              instrument with confidence and creativity.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-cream/70">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cream/50" />
                {siteConfig.address}
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-cream/50" />
                <a href={siteConfig.phoneHref} className="link-underline">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-cream/50" />
                <a href={`mailto:${siteConfig.email}`} className="link-underline">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>

          {footerNav.map((group) => (
            <div key={group.heading}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-cream/50">
                {group.heading}
              </h3>
              <ul className="mt-5 space-y-3">
                {group.items.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="text-sm text-cream/70 transition-colors hover:text-cream"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* bottom bar */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-cream/12 pt-8 sm:flex-row">
          <p className="text-sm text-cream/55">
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-cream/15 text-cream/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-cream/40 hover:bg-cream/10 hover:text-cream"
              >
                <Icon className="h-[1.05rem] w-[1.05rem]" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
