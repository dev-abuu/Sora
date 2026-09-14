import type { Metadata } from "next";
import Image from "next/image";
import { photos } from "@/data/photos";
import { therapistBenefits } from "@/data/staffing";
import { therapistTestimonials } from "@/data/content";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "For Therapists — Join the Sora Collective",
  description:
    "Join Sora Spa Collective and access spa therapist opportunities across premium hotels, luxury spas and wellness destinations. Flexible work with agency support.",
};

export default function ForTherapistsPage() {
  return (
    <>
      <section className="relative flex min-h-[62vh] items-center overflow-hidden">
        <Image
          src={photos.oilPourUniform}
          alt="Spa therapist pouring oil during a professional treatment"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-olive-dark/55" />
        <div className="relative z-10 section-padding container-wide w-full">
          <RevealOnScroll>
            <p className="text-xs font-sans uppercase tracking-[0.25em] text-gold">
              For Therapists
            </p>
            <h1 className="mt-3 max-w-2xl font-serif text-4xl text-ivory md:text-5xl text-balance">
              Take your talent further.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ivory/80">
              Join the Sora Collective and gain access to opportunities across
              premium hotels, luxury spas and wellness destinations — with
              dedicated agency support throughout every placement.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/join-team" size="lg">Join Team</Button>
              <Button href="/contact" variant="outline" size="lg">Get in Touch</Button>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-padding bg-ivory">
        <div className="container-wide">
          <RevealOnScroll>
            <SectionHeading
              eyebrow="Why Join Sora"
              title="Work with the best in hospitality"
              description="Sora represents selective, experienced spa professionals to premium venues. When you join our collective, you join a network built on quality, trust and opportunity."
              align="center"
              className="mx-auto"
            />
          </RevealOnScroll>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {therapistBenefits.map((item, index) => (
              <RevealOnScroll key={item.title} delay={index * 60}>
                <article className="rounded-sm border border-beige bg-ivory p-6 transition-all hover:border-gold/40">
                  <h3 className="font-serif text-xl text-olive-dark">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text/70">{item.description}</p>
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
              eyebrow="How It Works"
              title="Your path to new opportunities"
              align="center"
              className="mx-auto"
            />
          </RevealOnScroll>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              { step: "01", title: "Apply", description: "Submit your application with qualifications, experience and availability." },
              { step: "02", title: "Review", description: "Our team reviews your profile and discusses suitable opportunities." },
              { step: "03", title: "Placement", description: "Matched to premium venues with ongoing Sora support throughout." },
            ].map((item, index) => (
              <RevealOnScroll key={item.title} delay={index * 100}>
                <article className="text-center">
                  <span className="font-serif text-5xl text-gold/40">{item.step}</span>
                  <h3 className="mt-3 font-serif text-2xl text-olive-dark">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text/70">{item.description}</p>
                </article>
              </RevealOnScroll>
            ))}
          </div>
          <RevealOnScroll delay={200}>
            <div className="mt-12 text-center">
              <Button href="/join-team" size="lg">Join Team</Button>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-padding bg-ivory">
        <div className="container-narrow">
          <RevealOnScroll>
            <SectionHeading
              eyebrow="Testimonials"
              title="From our collective members"
              align="center"
              className="mx-auto"
            />
          </RevealOnScroll>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {therapistTestimonials.map((item, index) => (
              <RevealOnScroll key={item.id} delay={index * 80}>
                <blockquote className="rounded-sm border border-gold/20 bg-beige/30 p-7">
                  <p className="font-serif text-lg leading-relaxed text-olive-dark">&ldquo;{item.quote}&rdquo;</p>
                </blockquote>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
