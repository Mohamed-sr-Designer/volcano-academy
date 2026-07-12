import type { Metadata } from "next";
import { Phone, Mail, Clock, MessageCircle } from "lucide-react";

import { PageHero } from "@/components/shared/page-hero";
import { ContactForm } from "@/components/forms/contact-form";
import { socialLinks } from "@/components/shared/social-icons";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Volcano Music Academy — call, email or WhatsApp us. We'd love to hear from you.",
};

export default function ContactPage() {
  const details = [
    { icon: Phone, label: "Call us", value: siteConfig.phone, href: siteConfig.phoneHref },
    { icon: Mail, label: "Email us", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { icon: MessageCircle, label: "WhatsApp", value: siteConfig.whatsapp, href: siteConfig.whatsappHref },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Come say hello"
        description="Questions, bookings or just curious? Reach out any way you like — our team is always happy to help you begin."
        notes={false}
      />

      <section className="pb-24">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
            {/* Left — info */}
            <div className="space-y-8">
              <div className="grid gap-4 sm:grid-cols-2">
                {details.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group flex flex-col gap-3 rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-lift"
                  >
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-5 w-5" strokeWidth={1.7} />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                        {label}
                      </p>
                      <p className="mt-1 font-medium text-foreground">{value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Hours */}
              <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 text-primary">
                    <Clock className="h-5 w-5" strokeWidth={1.7} />
                  </span>
                  <h3 className="font-display text-lg font-semibold tracking-tight">
                    Working hours
                  </h3>
                </div>
                <dl className="mt-5 space-y-3">
                  {siteConfig.hours.map((h) => (
                    <div key={h.day} className="flex items-center justify-between border-b border-border pb-3 text-sm last:border-0 last:pb-0">
                      <dt className="text-muted-foreground">{h.day}</dt>
                      <dd className="font-medium">{h.time}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Socials */}
              <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
                <h3 className="font-display text-lg font-semibold tracking-tight">
                  Follow the music
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {socialLinks.map(({ label, href, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-foreground/75 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-secondary hover:text-primary"
                    >
                      <Icon className="h-4 w-4" />
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
