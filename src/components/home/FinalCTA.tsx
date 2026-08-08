import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section className="section-padding bg-olive">
      <div className="container-narrow text-center">
        <RevealOnScroll>
          <p className="text-xs font-sans uppercase tracking-[0.25em] text-gold">
            For Businesses
          </p>
          <h2 className="mt-4 font-serif text-3xl text-ivory md:text-4xl lg:text-5xl text-balance">
            Need spa staff for your venue?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-ivory/80">
            Tell us your staffing requirements and our team will respond promptly
            to discuss how Sora can support your spa operation.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              href="/request-staff"
              size="lg"
              className="bg-ivory text-olive-dark border-ivory hover:bg-beige hover:border-beige"
            >
              Request Staff
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Discuss Your Needs
            </Button>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
