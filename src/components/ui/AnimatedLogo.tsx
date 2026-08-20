"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface AnimatedLogoProps {
  size?: "header" | "footer" | "hero";
  className?: string;
  linkToHome?: boolean;
  variant?: "ivory" | "transparent";
}

const sizeMap = {
  header: {
    width: 200,
    height: 80,
    className: "h-14 w-auto md:h-16",
  },
  footer: {
    width: 260,
    height: 104,
    className: "h-20 w-auto md:h-24",
  },
  hero: {
    width: 300,
    height: 120,
    className: "h-24 w-auto md:h-32",
  },
};

export function AnimatedLogo({
  size = "header",
  className,
  linkToHome = true,
  variant,
}: AnimatedLogoProps) {
  const dimensions = sizeMap[size];
  const logoVariant = variant ?? (size === "footer" ? "transparent" : "ivory");
  const src =
    logoVariant === "ivory"
      ? "/images/logo-ivory.png"
      : "/images/logo-transparent.png";

  const logoContent = (
    <Image
      src={src}
      alt="Sora Spa Collective"
      width={dimensions.width}
      height={dimensions.height}
      className={cn("object-contain object-left", dimensions.className, className)}
      priority={size === "header"}
      unoptimized
    />
  );

  if (linkToHome) {
    return (
      <Link
        href="/"
        className="relative block shrink-0 transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive/30 focus-visible:ring-offset-2"
        aria-label="Sora Spa Collective — Home"
      >
        {logoContent}
      </Link>
    );
  }

  return logoContent;
}
