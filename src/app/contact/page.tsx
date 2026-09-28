import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with The Org Doctor to talk through what's going on in your organization.",
};

export default function ContactPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h1 className="font-display text-4xl font-bold text-brand-green sm:text-5xl">
              Contact Us
            </h1>
            <p className="mt-4 text-base leading-relaxed text-brand-gray">
              Ready to talk through what&apos;s going on in your organization?
              Tell us a bit about what you&apos;re working through, and
              we&apos;ll follow up soon — no pressure, no sales script.
            </p>
            <div className="mt-8 space-y-2 text-sm text-brand-gray">
              <p>
                <a href={`mailto:${site.email}`} className="font-medium text-brand-green hover:text-brand-orange">
                  {site.email}
                </a>
              </p>
              <p>
                <a href={`tel:${site.phone.replace(/[^\d]/g, "")}`} className="font-medium text-brand-green hover:text-brand-orange">
                  {site.phone}
                </a>
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
