import type { Metadata } from "next";
import Image from "next/image";
import { staffingSolutions } from "@/data/staffing";
import { whyChooseSora } from "@/data/content";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "For Businesses — Spa Staffing Agency",
  description:
    "Sora Spa Collective supplies professional spa therapists to hotels, luxury spas, resorts and wellness businesses. Temporary cover, seasonal staffing and permanent recruitment.",
};

const businessServices = [
  {
    title: "Temporary & Holiday Cover",
    description: "Cover for holidays, sickness and planned absences without disrupting your spa operation or guest experience.",
  },
  {
    title: "Last-Minute Cover",
    description: "Rapid-response staffing when you need a qualified therapist at short notice.",
  },
  {
    title: "Seasonal Staffing",
    description: "Additional therapists for peak seasons, summer programmes and high-demand periods.",
  },
  {
    title: "Event Staffing",
    description: "Professional spa staff for events, pop-ups, product launches and special occasions.",
  },
  {
    title: "Ongoing Staffing Contracts",
    description: "Regular, reliable therapist supply for businesses requiring consistent professional cover.",
  },
  {
    title: "Permanent Recruitment",
    description: "Permanent placement of carefully vetted spa professionals for long-term roles.",
  },
];

export default function ForBusinessesPage() {
  return (
    <>
      <section className="relative flex min-h-[50vh] items-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&q=80"
          alt="Luxury resort spa facility requiring professional staffing"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-olive-dark/55" />
        <div className="relative z-10 section-padding container-wide w-full">
          <RevealOnScroll>
            <p className="text-xs font-sans uppercase tracking-[0.25em] text-gold">
              For Businesses
            </p>
            <h1 className="mt-3 max-w-2xl font-serif text-4xl text-ivory md:text-5xl text-balance">
              Professional spa staff for premium venues
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ivory/80">
              Sora supplies experienced spa therapists to hotels, spas, resorts and
              wellness businesses — with the flexibility and reliability your
              operation demands.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/request-staff" size="lg">Request Staff</Button>
              <Button href="/contact" variant="outline" size="lg">Discuss Your Needs</Button>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section id="solutions" className="section-padding bg-ivory">
        <div className="container-wide">
          <RevealOnScroll>
            <SectionHeading
              eyebrow="Staffing Solutions"
              title="Flexible staffing for every requirement"
              description="Whether you need cover for a single day or a permanent addition to your team, Sora provides staffing solutions designed for premium hospitality environments."
            />
          </RevealOnScroll>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {staffingSolutions.map((solution, index) => (
              <RevealOnScroll key={solution.id} delay={index * 60}>
                <article className="h-full rounded-sm border border-beige bg-ivory p-6 transition-all hover:border-gold/40 hover:shadow-[0_8px_30px_rgba(48,55,40,0.06)]">
                  <h3 className="font-serif text-xl text-olive-dark">{solution.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text/70">{solution.description}</p>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-beige/40">
        <div className="container-wide">
          <RevealOnScroll>
            <SectionHeading
              eyebrow="How We Help"
              title="Staffing support for every scenario"
              align="center"
              className="mx-auto"
            />
          </RevealOnScroll>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {businessServices.map((service, index) => (
              <RevealOnScroll key={service.title} delay={index * 80}>
                <article className="rounded-sm border border-beige bg-ivory p-6">
                  <div className="gold-divider" />
                  <h3 className="mt-4 font-serif text-xl text-olive-dark">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text/70">{service.description}</p>
                </article>
              </RevealOnScroll>
            ))}
          </div>
          <RevealOnScroll delay={200}>
            <div className="mt-12 text-center">
              <Button href="/request-staff" size="lg">Submit Staffing Request</Button>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-padding bg-ivory">
        <div className="container-wide">
          <RevealOnScroll>
            <SectionHeading
              eyebrow="Why Sora"
              title="Why hospitality partners choose us"
              align="center"
              className="mx-auto"
            />
          </RevealOnScroll>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseSora.map((item, index) => (
              <RevealOnScroll key={item.title} delay={index * 60}>
                <article>
                  <h3 className="font-serif text-xl text-olive-dark">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text/70">{item.description}</p>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
