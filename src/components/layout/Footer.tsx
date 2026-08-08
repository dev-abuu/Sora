"use client";

import Link from "next/link";
import { footerLinks, siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";

export function Footer() {
  return (
    <footer className="border-t border-beige bg-olive-dark text-ivory">
      <div className="section-padding container-wide">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="font-serif text-2xl text-ivory transition-opacity hover:opacity-90"
            >
              Sora Spa Collective
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ivory/70">
              Premium spa staffing and recruitment for hotels, spas and wellness
              businesses across hospitality.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                href="/request-staff"
                size="sm"
                className="border-ivory/30 bg-ivory text-olive-dark hover:bg-beige"
              >
                Request Staff
              </Button>
              <Button href="/join-team" variant="outline" size="sm">
                Join Team
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-sans font-medium uppercase tracking-[0.2em] text-gold">
              For Businesses
            </h3>
            <ul className="mt-5 space-y-3">
              {footerLinks.businesses.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ivory/75 transition-colors hover:text-ivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-sans font-medium uppercase tracking-[0.2em] text-gold">
              For Therapists
            </h3>
            <ul className="mt-5 space-y-3">
              {footerLinks.therapists.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ivory/75 transition-colors hover:text-ivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex gap-4">
              {Object.entries(siteConfig.social).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-wider text-ivory/60 transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40"
                  aria-label={`Follow us on ${platform}`}
                >
                  {platform.charAt(0).toUpperCase() + platform.slice(1)}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-sans font-medium uppercase tracking-[0.2em] text-gold">
              Contact
            </h3>
            <address className="mt-5 space-y-2 not-italic text-sm text-ivory/75">
              <p>{siteConfig.address}</p>
              <p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-ivory"
                >
                  {siteConfig.email}
                </a>
              </p>
              <p>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-ivory"
                >
                  {siteConfig.phone}
                </a>
              </p>
            </address>
            <ul className="mt-5 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ivory/75 transition-colors hover:text-ivory"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-ivory/10 pt-8 md:flex-row">
          <p className="text-xs text-ivory/50">
            &copy; {new Date().getFullYear()} Sora Spa Collective. All rights
            reserved.
          </p>
          <p className="text-xs text-ivory/50">
            Premium spa staffing &amp; recruitment agency
          </p>
        </div>
      </div>
    </footer>
  );
}
