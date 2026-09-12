"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "@/data/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { AnimatedLogo } from "@/components/ui/AnimatedLogo";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-beige bg-ivory shadow-sm"
          : "bg-ivory",
      )}
    >
      <div className="container-wide flex items-center justify-between gap-4 px-5 py-3 md:px-8 md:py-4">
        <AnimatedLogo size="header" />

        <nav
          className="hidden items-center gap-7 xl:gap-8 lg:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-sans tracking-wide transition-colors duration-200 hover:text-olive focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive/30 focus-visible:ring-offset-2",
                pathname === link.href
                  ? "text-olive font-medium"
                  : "text-text/70",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href="/join-team" variant="secondary" size="sm">
            Join Team
          </Button>
          <Button href="/contact" size="sm">
            Discuss Your Needs
          </Button>
        </div>

        <button
          type="button"
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-sm text-olive-dark transition-colors hover:bg-beige focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive/30 lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className="sr-only">{menuOpen ? "Close" : "Menu"}</span>
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={cn(
                "block h-0.5 w-full bg-olive-dark transition-all duration-300",
                menuOpen && "translate-y-2 rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-full bg-olive-dark transition-all duration-300",
                menuOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-full bg-olive-dark transition-all duration-300",
                menuOpen && "-translate-y-2 -rotate-45",
              )}
            />
          </div>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 z-40 bg-ivory transition-all duration-300 lg:hidden",
          menuOpen
            ? "visible opacity-100"
            : "invisible opacity-0 pointer-events-none",
        )}
        aria-hidden={!menuOpen}
      >
        <nav
          className="flex h-full flex-col items-center justify-center gap-7 px-6"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-serif text-3xl text-olive-dark transition-colors hover:text-olive focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive/30",
                pathname === link.href && "text-olive",
                menuOpen && "animate-fade-up",
              )}
              style={{ animationDelay: menuOpen ? `${index * 60}ms` : undefined }}
            >
              {link.label}
            </Link>
          ))}
          <div
            className={cn(
              "mt-6 flex flex-col gap-3",
              menuOpen && "animate-fade-up-delay-2",
            )}
          >
            <Button href="/contact" size="lg">
              Discuss Your Needs
            </Button>
            <Button href="/join-team" variant="secondary" size="lg">
              Join Team
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
