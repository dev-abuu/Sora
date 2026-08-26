import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { photos } from "@/data/photos";

export function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden">
      <Image
        src={photos.hotStone}
        alt="Professional spa therapist delivering a hot stone treatment"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
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
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/85 md:text-lg animate-fade-up-delay-1">
            Sora Spa Collective connects hotels, spas and wellness businesses
            with experienced, professional spa therapists — providing flexible
            staffing solutions without compromising on service quality.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 animate-fade-up-delay-2">
            <Button href="/request-staff" size="lg">
              Request Staff
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
