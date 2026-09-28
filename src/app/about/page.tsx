import type { Metadata } from "next";
import Image from "next/image";
import { aboutSections } from "@/data/content";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "About — Spa Staffing & Recruitment Agency",
  description:
    "Learn about Sora Spa Collective — a premium spa staffing and recruitment agency connecting exceptional therapists with luxury hospitality and wellness businesses.",
};

export default function AboutPage() {
  return (
    <>
      <section className="section-padding bg-sage">
        <div className="container-wide">
          <RevealOnScroll>
            <SectionHeading
              eyebrow="About Sora"
              title="Exceptional people create exceptional experiences"
              description="Sora Spa Collective is a premium staffing and recruitment agency built exclusively for the spa and wellness hospitality sector."
            />
          </RevealOnScroll>
        </div>
      </section>

      {aboutSections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className={`section-padding ${section.backgroundClass ?? (index % 2 === 0 ? "bg-ivory" : "bg-beige/30")}`}
        >
          <div className="container-wide">
            <div className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${index % 2 === 1 ? "lg:[direction:rtl]" : ""}`}>
              <RevealOnScroll className={index % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                <SectionHeading eyebrow={section.eyebrow} title={section.title} />
                <div className="mt-5 space-y-4">
                  {section.content.map((paragraph) => (
                    <p key={paragraph.slice(0, 30)} className="text-sm leading-relaxed text-text/75 md:text-base">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </RevealOnScroll>
              <RevealOnScroll delay={150} className={index % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                  <Image
                    src={section.image}
                    alt={section.imageAlt ?? `${section.title} — Sora Spa Collective`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className={`object-cover ${section.imageClass}`}
                  />
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>
      ))}

      <section className="section-padding bg-ivory">
        <div className="container-narrow text-center">
          <RevealOnScroll>
            <SectionHeading
              eyebrow="Work With Sora"
              title="Ready to connect?"
              description="Whether you need spa staff for your venue or you are a therapist seeking premium opportunities — we would love to hear from you."
              align="center"
              className="mx-auto"
            />
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/contact" size="lg">Discuss Your Needs</Button>
              <Button href="/join-team" variant="secondary" size="lg">Join Team</Button>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
