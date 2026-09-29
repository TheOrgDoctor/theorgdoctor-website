import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Accordion } from "@/components/Accordion";
import { benefits, serviceTiers, positioning, site } from "@/lib/site-data";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-green">
        <Container className="flex flex-col items-center gap-8 py-20 text-center sm:py-28">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
            {site.tagline}
          </p>
          <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            {positioning.statement}
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            We diagnose what&apos;s holding your organization back and
            prescribe the strategic solutions that move it forward — starting
            with a fixed-fee diagnostic, not an open-ended engagement.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href="/diagnostic" variant="primary">
              See the Organizational Health Assessment →
            </Button>
            <Button href={site.bookingUrl} external variant="ghost" className="!border-white !text-white hover:!bg-white hover:!text-brand-green">
              Book a Discovery Call →
            </Button>
          </div>
        </Container>
      </section>

      {/* Trust bar */}
      <section className="border-b border-black/5 bg-white">
        <Container className="grid grid-cols-1 gap-8 py-10 text-center sm:grid-cols-3">
          <div>
            <p className="font-display text-3xl font-bold text-brand-orange">20+</p>
            <p className="mt-1 text-sm text-brand-gray">
              Years of combined HR leadership experience
            </p>
          </div>
          <div>
            <p className="font-display text-3xl font-bold text-brand-orange">
              Public + Private
            </p>
            <p className="mt-1 text-sm text-brand-gray">
              Sectors served, including utilities and municipalities
            </p>
          </div>
          <div>
            <p className="font-display text-3xl font-bold text-brand-orange">
              DBA · SPHR · SHRM-SCP
            </p>
            <p className="mt-1 text-sm text-brand-gray">
              Credentialed at the highest levels of the profession
            </p>
          </div>
        </Container>
      </section>

      {/* Tier ladder teaser */}
      <section className="bg-white py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-brand-green sm:text-4xl">
              An Engagement Model, Not a Menu
            </h2>
            <p className="mt-3 text-brand-gray">
              Most relationships start with the Assessment and move as far as
              your organization needs.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {serviceTiers.map((t) => (
              <div
                key={t.tier}
                className="rounded-2xl border border-black/10 p-6"
              >
                <span className="font-display text-2xl font-bold text-brand-orange/40">
                  {t.tier}
                </span>
                <h3 className="mt-2 font-display text-base font-bold text-brand-green">
                  {t.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-gray">
                  {t.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="text-sm font-semibold text-brand-orange hover:text-brand-orange-dark"
            >
              See the full engagement model →
            </Link>
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-brand-green sm:text-4xl">
              Benefits of HR Consulting with The Org Doctor
            </h2>
          </div>
          <div className="mx-auto mt-10 max-w-3xl">
            <Accordion items={benefits} />
          </div>
        </Container>
      </section>

      {/* CTA band */}
      <section className="bg-brand-orange">
        <Container className="flex flex-col items-center gap-6 py-16 text-center">
          <h2 className="max-w-xl font-display text-2xl font-bold text-white sm:text-3xl">
            Whether you&apos;re navigating growth, building culture, or tackling
            complex challenges, we&apos;re here to help.
          </h2>
          <Button
            href={site.bookingUrl}
            external
            variant="secondary"
            className="!bg-white !text-brand-orange hover:!bg-brand-green hover:!text-white"
          >
            Book a Free Consultation →
          </Button>
        </Container>
      </section>
    </>
  );
}
