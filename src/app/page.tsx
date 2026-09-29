import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Accordion } from "@/components/Accordion";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { GradientField } from "@/components/GradientField";
import { benefits, serviceTiers, positioning, site } from "@/lib/site-data";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-green">
        <GradientField variant="green" />
        <Container className="relative grid grid-cols-1 items-center gap-12 py-20 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:py-28">
          <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
            <Reveal>
              <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
                {site.tagline}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="max-w-2xl font-display text-3xl font-bold leading-[1.15] text-white sm:text-4xl lg:text-[2.75rem]">
                Independent HR &amp; organizational{" "}
                <span className="text-brand-orange">transformation advisory</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
                {positioning.statement}
              </p>
            </Reveal>
            <Reveal delay={0.3} className="flex flex-col gap-4 sm:flex-row">
              <Button href="/diagnostic" variant="primary">
                See the Organizational Health Assessment →
              </Button>
              <Button href={site.bookingUrl} external variant="ghost" className="!border-white !text-white hover:!bg-white hover:!text-brand-green">
                Book a Discovery Call →
              </Button>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="relative mx-auto hidden w-full max-w-sm lg:block">
            <div
              aria-hidden
              className="absolute inset-0 scale-110 rounded-full bg-[radial-gradient(circle,_rgba(211,102,57,0.4)_0%,_transparent_70%)] blur-2xl"
            />
            <Image
              src="/images/logo-circular.png"
              alt="The Org Doctor"
              width={420}
              height={420}
              className="relative h-auto w-full animate-logo-float drop-shadow-2xl"
              priority
            />
          </Reveal>
        </Container>
      </section>

      {/* Trust bar */}
      <section className="border-b border-black/5 bg-white">
        <RevealGroup className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 px-6 py-10 text-center sm:grid-cols-3 sm:px-8">
          <RevealItem>
            <p className="font-display text-3xl font-bold text-brand-orange">
              <Counter value={20} suffix="+" />
            </p>
            <p className="mt-1 text-sm text-brand-gray">
              Years of combined HR leadership experience
            </p>
          </RevealItem>
          <RevealItem>
            <p className="font-display text-3xl font-bold text-brand-orange">
              Public + Private
            </p>
            <p className="mt-1 text-sm text-brand-gray">
              Sectors served, including utilities and municipalities
            </p>
          </RevealItem>
          <RevealItem>
            <p className="font-display text-3xl font-bold text-brand-orange">
              DBA · SPHR · SHRM-SCP
            </p>
            <p className="mt-1 text-sm text-brand-gray">
              Credentialed at the highest levels of the profession
            </p>
          </RevealItem>
        </RevealGroup>
      </section>

      {/* Tier ladder teaser */}
      <section className="relative overflow-hidden bg-white py-20">
        <GradientField variant="light" />
        <Container className="relative">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-brand-green sm:text-4xl">
              An Engagement Model, Not a Menu
            </h2>
            <p className="mt-3 text-brand-gray">
              Most relationships start with the Assessment and move as far as
              your organization needs.
            </p>
          </Reveal>
          <RevealGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {serviceTiers.map((t) => (
              <RevealItem
                key={t.tier}
                className="card-lift rounded-2xl border border-black/10 bg-white p-6"
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
              </RevealItem>
            ))}
          </RevealGroup>
          <Reveal delay={0.15} className="mt-10 text-center">
            <Link
              href="/services"
              className="text-sm font-semibold text-brand-orange transition-colors hover:text-brand-orange-dark"
            >
              See the full engagement model →
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-brand-green sm:text-4xl">
              Benefits of HR Consulting with The Org Doctor
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mx-auto mt-10 max-w-3xl">
            <Accordion items={benefits} />
          </Reveal>
        </Container>
      </section>

      {/* CTA band */}
      <section className="relative overflow-hidden bg-brand-orange">
        <GradientField variant="orange" />
        <Container className="relative flex flex-col items-center gap-6 py-16 text-center">
          <Reveal>
            <h2 className="max-w-xl font-display text-2xl font-bold text-white sm:text-3xl">
              Whether you&apos;re navigating growth, building culture, or tackling
              complex challenges, we&apos;re here to help.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Button
              href={site.bookingUrl}
              external
              variant="secondary"
              className="!bg-white !text-brand-orange hover:!bg-brand-green hover:!text-white"
            >
              Book a Free Consultation →
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
