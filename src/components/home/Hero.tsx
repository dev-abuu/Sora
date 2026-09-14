import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { photos } from "@/data/photos";

export function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden">
      <Image
        src={photos.heroSpa}
        alt="Serene spa pool with sage arches, plants and warm natural light"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_42%]"
      />
      <div className="absolute inset-0 bg-olive-dark/55" />
      <div className="relative z-10 section-padding container-wide w-full">
        <div className="max-w-2xl animate-fade-up">
          <p className="mb-4 text-xs font-sans uppercase tracking-[0.25em] text-gold">
            Spa Staffing &amp; Recruitment
          </p>
          <h1 className="font-serif text-4xl leading-tight text-ivory md:text-5xl lg:text-6xl text-balance">
            Exceptional Spa Talent.
            <br />
            Whenever You Need It.
          </h1>
          <div className="mt-8 flex flex-wrap gap-4 animate-fade-up-delay-2">
            <Button href="/contact" size="lg">
              Discuss Your Needs
            </Button>
            <Button href="/join-team" variant="outline" size="lg">
              Join Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
