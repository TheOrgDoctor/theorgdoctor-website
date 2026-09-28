import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { services, site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Strategic HR, leadership development, business optimization, training, compliance, and communications consulting from The Org Doctor.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-brand-green py-16 sm:py-20">
        <Container className="text-center">
          <h1 className="font-display text-4xl font-bold text-white sm:text-5xl">
            Our Services
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            We take a hands-on, people-first approach. Whether you&apos;re
            navigating growth, preparing for change, or ready to optimize how
            your team works, we deliver practical, customized support that
            fits your organization.
          </p>
          <ul className="mx-auto mt-6 flex max-w-xl flex-col gap-2 text-sm text-white/75 sm:flex-row sm:justify-center sm:gap-6">
            <li>Available for projects, workshops, or ongoing partnerships</li>
            <li>Virtual and on-site options</li>
            <li>Flexible pricing and scope</li>
          </ul>
          <Button href={site.bookingUrl} external variant="primary" className="mt-8">
            Book Now →
          </Button>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-brand-green sm:text-4xl">
              Explore How We Can Help
            </h2>
            <p className="mt-3 text-brand-gray">
              At The Org Doctor, we help organizations align people, process,
              and purpose.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-black/10 bg-white p-6 sm:p-8"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{service.icon}</span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-brand-green">
                      {service.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium italic text-brand-orange">
                      {service.subtitle}
                    </p>
                  </div>
                </div>
                <ul className="mt-4 space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-brand-gray">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-14 max-w-xl rounded-2xl bg-brand-green px-8 py-10 text-center">
            <p className="font-display text-lg font-semibold text-white">
              Not sure which service fits?
            </p>
            <p className="mt-2 text-sm text-white/80">
              Book a free discovery call and we&apos;ll help you figure it out.
            </p>
            <Button href={site.bookingUrl} external variant="primary" className="mt-6">
              Book a Free Discovery Call →
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
