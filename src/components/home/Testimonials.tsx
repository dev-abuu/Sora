import { businessTestimonials, therapistTestimonials } from "@/data/content";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";

function TestimonialCard({ quote }: { quote: string }) {
  return (
    <blockquote className="flex h-full flex-col rounded-sm border border-gold/20 bg-ivory p-7 md:p-8">
      <p className="flex-1 font-serif text-lg leading-relaxed text-olive-dark md:text-xl">
        &ldquo;{quote}&rdquo;
      </p>
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
            align="center"
            className="mx-auto"
          />
        </RevealOnScroll>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {all.map((item, index) => (
            <RevealOnScroll key={item.id} delay={index * 80}>
              <TestimonialCard quote={item.quote} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
