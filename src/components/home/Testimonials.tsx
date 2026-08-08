import { businessTestimonials, therapistTestimonials } from "@/data/content";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";

function TestimonialCard({
  quote,
  name,
  role,
  placeholder,
}: {
  quote: string;
  name: string;
  role: string;
  placeholder: boolean;
}) {
  return (
    <blockquote className="flex h-full flex-col rounded-sm border border-gold/20 bg-ivory p-7 md:p-8">
      {placeholder && (
        <span className="mb-3 inline-block w-fit rounded-sm border border-gold/30 px-2 py-0.5 text-[10px] font-sans uppercase tracking-wider text-gold">
          Placeholder testimonial
        </span>
      )}
      <p className="flex-1 font-serif text-lg leading-relaxed text-olive-dark md:text-xl">
        &ldquo;{quote}&rdquo;
      </p>
      <footer className="mt-5 border-t border-gold/15 pt-4">
        <cite className="not-italic">
          <span className="block text-sm font-sans font-medium text-olive-dark">
            {name}
          </span>
          <span className="mt-1 block text-xs text-text/55">{role}</span>
        </cite>
      </footer>
    </blockquote>
  );
}

export function Testimonials() {
  const all = [...businessTestimonials, ...therapistTestimonials];

  return (
    <section className="section-padding bg-ivory">
      <div className="container-wide">
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Testimonials"
            title="Trusted by partners and professionals"
            description="Placeholder testimonials below — replace with real feedback from hospitality partners and Sora collective members when available."
            align="center"
            className="mx-auto"
          />
        </RevealOnScroll>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {all.map((item, index) => (
            <RevealOnScroll key={item.id} delay={index * 80}>
              <TestimonialCard {...item} />
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={200}>
          <div className="mt-14 rounded-sm border border-dashed border-gold/30 bg-beige/20 p-8 text-center">
            <p className="text-xs font-sans uppercase tracking-[0.2em] text-text/45">
              Partner Logos
            </p>
            <p className="mt-3 text-sm text-text/55">
              Space reserved for client and partner logos. Add verified partnerships
              here when available — do not display unconfirmed brand affiliations.
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
