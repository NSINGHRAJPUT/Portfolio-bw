import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

import { siteConfig } from "@/lib/config/site";

const footerLinks = {
  useful: [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
  ],
  help: [
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
};

const socials = [
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaTwitter, href: "#", label: "Twitter" },
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--primary)]/15 bg-[#020810]/50 py-16 backdrop-blur-sm">
      <div className="container-safe grid gap-10 md:grid-cols-4 sm:grid-cols-2">
        <div className="space-y-4">
          <p className="text-sm font-semibold sm:text-center md:text-left text-[var(--primary)]">
            {siteConfig.name}
          </p>
          <p className="text-sm text-[var(--fg-muted)]">
            {siteConfig.description}
          </p>
          <div className="flex gap-3 flex-wrap">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                aria-label={label}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-[var(--primary)] transition hover:border-[var(--primary)]/50 hover:bg-[var(--primary)]/10"
                href={href}
                key={label}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold">Useful Links</p>
          <ul className="space-y-2">
            {footerLinks.useful.map((link) => (
              <li key={link.href}>
                <Link
                  className="text-sm text-[var(--fg-muted)] transition hover:text-[var(--primary)]"
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold">Help</p>
          <ul className="space-y-2">
            {footerLinks.help.map((link) => (
              <li key={link.href}>
                <Link
                  className="text-sm text-[var(--fg-muted)] transition hover:text-[var(--primary)]"
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold">Connect With Us</p>
          <ul className="space-y-2 text-sm text-[var(--fg-muted)]">
            <li>Remote — India & worldwide</li>
            <li>
              <a
                className="transition hover:text-[var(--primary)]"
                href="mailto:hello@nsrgfx.in"
              >
                hello@nsrgfx.in
              </a>
            </li>
            <li>
              <Link
                className="transition hover:text-[var(--primary)]"
                href="/book-meeting"
              >
                Book a discovery call
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-safe mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-8 text-sm text-[var(--fg-muted)] md:flex-row">
        <p>
          {new Date().getFullYear()} {siteConfig.name} — All rights reserved.
        </p>
        <div className="flex gap-4">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              aria-label={label}
              className="text-[var(--primary)] transition hover:opacity-80"
              href={href}
              key={label}
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
