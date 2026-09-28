import Image from "next/image";
import { photos } from "@/data/photos";
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
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <Image
                src={photos.homeTalent}
                alt="Spa therapist applying a facial treatment with a brush while a client rests on a treatment bed"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-[center_18%]"
              />
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
