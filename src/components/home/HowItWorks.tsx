import { howItWorks } from "@/data/content";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function HowItWorks() {
  return (
    <section className="section-padding bg-beige/40">
      <div className="container-wide">
        <RevealOnScroll>
          <SectionHeading
            eyebrow="How Sora Works"
            title="Staffing made simple"
            align="center"
            className="mx-auto"
          />
        </RevealOnScroll>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorks.map((step, index) => (
            <RevealOnScroll key={step.title} delay={index * 100}>
              <article className="relative text-center lg:text-left">
                <span className="font-serif text-5xl text-gold/40">{step.step}</span>
                <h3 className="mt-3 font-serif text-xl text-olive-dark md:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text/70">
                  {step.description}
                </p>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
