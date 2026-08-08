import { trustedSectors } from "@/data/staffing";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function TrustedBy() {
  return (
    <section className="border-b border-beige bg-ivory py-10 md:py-12">
      <div className="container-wide px-5 md:px-8">
        <RevealOnScroll>
          <p className="text-center text-xs font-sans uppercase tracking-[0.2em] text-text/50">
            Supporting premium hospitality &amp; wellness environments
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 md:gap-x-12">
            {trustedSectors.map((sector) => (
              <span
                key={sector}
                className="font-serif text-sm text-olive/70 md:text-base"
              >
                {sector}
              </span>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
