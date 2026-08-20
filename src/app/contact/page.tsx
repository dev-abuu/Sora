import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { ContactForm } from "@/components/forms/ContactForm";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Contact — Spa Staffing Agency",
  description:
    "Contact Sora Spa Collective for spa staffing enquiries, therapist recruitment or general questions about our agency services.",
};

export default function ContactPage() {
  return (
    <>
      <section className="section-padding bg-beige/30">
        <div className="container-wide">
          <RevealOnScroll>
            <SectionHeading
              eyebrow="Contact"
              title="We would love to hear from you"
              description="Whether you need spa staff for your business or wish to join the Sora Collective — our team is here to help."
            />
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-padding bg-ivory pt-0">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <RevealOnScroll>
              <div className="space-y-8">
                <div>
                  <h3 className="font-serif text-2xl text-olive-dark">Get in Touch</h3>
                  <div className="gold-divider mt-4" />
                  <address className="mt-5 space-y-3 not-italic text-sm leading-relaxed text-text/75">
                    <p>{siteConfig.address}</p>
                    <p>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-olive underline decoration-olive/30 underline-offset-4 transition-colors hover:text-olive-dark hover:decoration-olive"
                      >
                        {siteConfig.email}
                      </a>
                    </p>
                  </address>
                </div>

                <div>
                  <h3 className="font-serif text-2xl text-olive-dark">Office Hours</h3>
                  <div className="gold-divider mt-4" />
                  <ul className="mt-5 space-y-2 text-sm text-text/75">
                    <li>{siteConfig.hours.weekdays}</li>
                    <li>{siteConfig.hours.saturday}</li>
                    <li>{siteConfig.hours.sunday}</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-serif text-2xl text-olive-dark">Follow Us</h3>
                  <div className="gold-divider mt-4" />
                  <div className="mt-5 flex flex-wrap gap-4">
                    {Object.entries(siteConfig.social).map(([platform, url]) => (
                      <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm uppercase tracking-wider text-olive transition-colors hover:text-gold"
                      >
                        {platform.charAt(0).toUpperCase() + platform.slice(1)}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button href="/request-staff">Request Staff</Button>
                  <Button href="/join-team" variant="secondary">Join Team</Button>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={100}>
              <div className="rounded-sm border border-beige p-6 md:p-8">
                <h3 className="font-serif text-2xl text-olive-dark">Send a Message</h3>
                <p className="mt-2 text-sm text-text/70">
                  Complete the form and we will respond within one business day.
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
