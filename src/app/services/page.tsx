import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { GradientField } from "@/components/GradientField";
import {
  serviceTiers,
  transformationFocusAreas,
  independenceStatement,
  positioning,
  site,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Independent HR and organizational transformation advisory for small to medium-market employers, the public sector, and critical infrastructure utilities — from keynotes to a flagship diagnostic to retained advisory.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-green py-16 sm:py-20">
        <GradientField variant="green" />
        <Container className="relative text-center">
          <Reveal>
            <h1 className="font-display text-4xl font-bold text-white sm:text-5xl">
              How We Work With You
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
              {positioning.statement}
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <Button href={site.bookingUrl} external variant="primary" className="mt-8">
              Book Now →
            </Button>
          </Reveal>
        </Container>
      </section>

      {/* Tier ladder */}
      <section className="py-20">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-brand-green sm:text-4xl">
              An Engagement Model, Not a Menu
            </h2>
            <p className="mt-3 text-brand-gray">
              Each tier builds on the one before it. Most relationships start
              at the top and move down as far as your organization needs.
            </p>
          </Reveal>

          <RevealGroup className="mt-12 space-y-6" stagger={0.12}>
            {serviceTiers.map((t) => (
              <RevealItem
                key={t.tier}
                className="card-lift flex flex-col gap-4 rounded-2xl border border-black/10 bg-white p-6 sm:flex-row sm:items-start sm:gap-8 sm:p-8"
              >
                <div className="shrink-0">
                  <span className="font-display text-3xl font-bold text-brand-orange/40">
                    {t.tier}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-orange">
                    {t.role}
                  </p>
                  <h3 className="mt-1 font-display text-xl font-bold text-brand-green">
                    {t.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-gray">
                    {t.description}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-4">
                    <span className="text-xs font-semibold uppercase tracking-wide text-brand-gray/60">
                      {t.pricing}
                    </span>
                    {t.href && (
                      <Link
                        href={t.href}
                        className="text-sm font-semibold text-brand-orange transition-colors hover:text-brand-orange-dark"
                      >
                        Learn more about the Assessment →
                      </Link>
                    )}
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Transformation Advisory focus areas */}
      <section className="relative overflow-hidden bg-white py-20">
        <GradientField variant="light" />
        <Container className="relative">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-brand-green sm:text-4xl">
              Inside Transformation Advisory
            </h2>
            <p className="mt-3 text-brand-gray">
              Once the Assessment identifies your priorities, work is scoped
              from the areas below — sequenced, not sold as a package deal.
            </p>
          </Reveal>

          <RevealGroup className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {transformationFocusAreas.map((area) => (
              <RevealItem
                key={area.title}
                className="card-lift rounded-2xl border border-black/10 bg-white p-6 sm:p-8"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{area.icon}</span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-brand-green">
                      {area.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium italic text-brand-orange">
                      {area.subtitle}
                    </p>
                  </div>
                </div>
                <ul className="mt-4 space-y-2">
                  {area.items.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-brand-gray">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange" />
                      {item}
                    </li>
                  ))}
                </ul>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Independence statement */}
      <section className="py-20">
        <Container>
          <Reveal className="mx-auto max-w-2xl rounded-2xl bg-brand-green px-8 py-10 text-center">
            <p className="font-display text-lg font-semibold text-white">
              We work for you — no one else.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/80">
              {independenceStatement}
            </p>
            <Button
              href={site.bookingUrl}
              external
              variant="primary"
              className="mt-6"
            >
              Book a Free Discovery Call →
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
