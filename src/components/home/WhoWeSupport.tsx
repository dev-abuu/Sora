import Image from "next/image";
import { whoWeSupport } from "@/data/staffing";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhoWeSupport() {
  return (
    <section className="section-padding bg-ivory">
      <div className="container-wide">
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Who We Support"
            title="Trusted by premium hospitality"
            description="We understand the standards, pace and expectations of luxury wellness environments — and we supply professionals who do too."
            align="center"
            className="mx-auto"
          />
        </RevealOnScroll>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whoWeSupport.map((item, index) => (
            <RevealOnScroll key={item.title} delay={index * 80}>
              <article className="group overflow-hidden rounded-sm border border-beige bg-ivory transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(48,55,40,0.06)]">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-xl text-olive-dark">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text/70">
                    {item.description}
                  </p>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
