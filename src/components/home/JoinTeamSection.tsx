import Image from "next/image";
import { photos } from "@/data/photos";
import { therapistBenefits } from "@/data/staffing";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function JoinTeamSection() {
  return (
    <section className="section-padding bg-beige/40">
      <div className="container-wide">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <RevealOnScroll>
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <Image
                src={photos.oilPourBack}
                alt="Spa therapist pouring massage oil during a professional treatment"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-[center_18%]"
              />
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={150}>
            <SectionHeading
              eyebrow="For Therapists"
              title="Take your talent further"
              description="Join the Sora Collective and access opportunities across premium hotels, spas and wellness destinations — with agency support every step of the way."
            />
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {therapistBenefits.slice(0, 4).map((item) => (
                <li key={item.title}>
                  <h4 className="text-sm font-sans font-medium text-olive-dark">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-text/65">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/join-team" size="lg">
                Join Team
              </Button>
              <Button href="/for-therapists" variant="secondary" size="sm">
                Learn More
              </Button>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
