import Image from "next/image";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Intro() {
  return (
    <section className="section-padding bg-ivory">
      <div className="container-wide">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <RevealOnScroll>
            <SectionHeading
              eyebrow="Your Spa Staffing Partner"
              title="Connecting exceptional talent with exceptional venues"
              description="Sora Spa Collective is a premium staffing agency specialising in spa and wellness professionals for the hospitality industry. We supply carefully selected therapists to businesses that demand reliability, flexibility and the highest standards of guest care."
            />
          </RevealOnScroll>
          <RevealOnScroll delay={150}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <Image
                src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=900&q=80"
                alt="Professional spa therapist preparing treatment room in a luxury hotel spa"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
