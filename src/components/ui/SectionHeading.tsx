import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-xs font-sans font-medium uppercase tracking-[0.2em]",
            light ? "text-gold" : "text-gold",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-serif text-3xl leading-tight md:text-4xl lg:text-5xl",
          light ? "text-ivory" : "text-olive-dark",
        )}
      >
        {title}
      </h2>
      {description && (
        <>
          <div
            className={cn(
              "gold-divider mt-5",
              align === "center" && "mx-auto",
            )}
          />
          <p
            className={cn(
              "mt-5 text-base leading-relaxed md:text-lg",
              light ? "text-ivory/80" : "text-text/80",
            )}
          >
            {description}
          </p>
        </>
      )}
    </div>
  );
}
