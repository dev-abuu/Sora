import { staffingSolutions } from "@/data/staffing";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function StaffingSolutions() {
  return (
    <section id="solutions" className="section-padding bg-beige/40">
      <div className="container-wide">
        <RevealOnScroll>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Staffing Solutions"
              title="Professional spa staff, tailored to your needs"
              description="From temporary cover to permanent recruitment — Sora provides flexible staffing solutions for every hospitality and wellness requirement."
            />
            <Button href="/for-businesses" variant="secondary" size="sm" className="shrink-0">
              View All Solutions
            </Button>
          </div>
        </RevealOnScroll>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {staffingSolutions.slice(0, 6).map((solution, index) => (
            <RevealOnScroll key={solution.id} delay={index * 60}>
              <article className="group h-full rounded-sm border border-beige bg-ivory p-6 transition-all duration-300 hover:border-gold/40 hover:shadow-[0_8px_30px_rgba(48,55,40,0.06)]">
                <span className="text-gold/70" aria-hidden="true">
                  {solution.icon}
                </span>
                <h3 className="mt-3 font-serif text-xl text-olive-dark">
                  {solution.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text/70">
                  {solution.description}
                </p>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
