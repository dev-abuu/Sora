import { whyChooseSora } from "@/data/content";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhySora() {
  return (
    <section className="section-padding bg-ivory">
      <div className="container-wide">
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Why Choose Sora"
            title="The Sora difference"
            description="We are not a generic recruitment agency. Sora is built exclusively for the spa and wellness hospitality sector."
            align="center"
            className="mx-auto"
          />
        </RevealOnScroll>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {whyChooseSora.map((item, index) => (
            <RevealOnScroll key={item.title} delay={index * 80}>
              <article>
                <div className="gold-divider" />
                <h3 className="mt-4 font-serif text-xl text-olive-dark">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text/70">
                  {item.description}
                </p>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
