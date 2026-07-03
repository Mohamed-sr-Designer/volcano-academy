import * as React from "react";
import { Instagram, Facebook, Youtube } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M16.5 3c.3 2.1 1.5 3.6 3.5 3.9v2.6c-1.3.1-2.5-.3-3.6-1v5.9c0 3.6-2.7 5.9-5.9 5.6C7.4 19.7 5.5 17.5 5.6 15c.1-2.6 2.3-4.6 4.9-4.5.3 0 .6 0 .9.1v2.7c-.3-.1-.6-.2-.9-.2-1.1 0-2 .9-2 2s.9 2 2 2 2-.8 2-2V3h2z" />
    </svg>
  );
}

export const socialLinks = [
  { label: "Instagram", href: siteConfig.socials.instagram, Icon: Instagram },
  { label: "Facebook", href: siteConfig.socials.facebook, Icon: Facebook },
  { label: "TikTok", href: siteConfig.socials.tiktok, Icon: TikTokIcon },
  { label: "YouTube", href: siteConfig.socials.youtube, Icon: Youtube },
];
