import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { GradientField } from "@/components/GradientField";
import {
  diagnosticMethod,
  diagnosticDeliverables,
  site,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "The Organizational Health Assessment",
  description:
    "A fixed-fee, 6–10 week diagnostic of your HR operating model, process maturity, and workforce risk — delivered as a prioritized, board-ready roadmap.",
};

export default function DiagnosticPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-green py-16 sm:py-20">
        <GradientField variant="green" />
        <Container className="relative text-center">
          <Reveal>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
              The Flagship Diagnostic
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-bold text-white sm:text-5xl">
              The Organizational Health Assessment
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
              A fixed-scope, fixed-fee diagnostic of your HR operating model,
              process maturity, and workforce risk — delivered as a
              prioritized, board-ready roadmap in 6–10 weeks.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <Button href={site.bookingUrl} external variant="primary" className="mt-8">
              Book a Discovery Call →
            </Button>
          </Reveal>
        </Container>
      </section>

      {/* Who it's for */}
      <section className="py-16 sm:py-20">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold text-brand-green sm:text-4xl">
              Built for Organizations Too Complex for Fractional HR
            </h2>
            <p className="mt-5 text-base leading-relaxed text-brand-gray">
              The Assessment is built for small to medium-market employers,
              public sector organizations, and critical infrastructure
              utilities — water, wastewater, gas, and electric — typically
              150 to 2,500 employees. These are organizations too complex for
              a fractional HR consultant, too budget-constrained for a
              national transformation firm, and underserved by vendors who
              sell consulting as a front end to software.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Method */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold text-brand-green sm:text-4xl">
              The Method
            </h2>
          </Reveal>
          <RevealGroup className="relative mx-auto mt-12 max-w-3xl space-y-6" stagger={0.12}>
            <div
              aria-hidden
              className="absolute top-2 bottom-2 left-5 hidden w-px bg-gradient-to-b from-brand-orange/40 via-brand-orange/20 to-transparent sm:block"
            />
            {diagnosticMethod.map((step, i) => (
              <RevealItem key={step.step} className="relative flex gap-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-orange font-display text-base font-bold text-white shadow-md shadow-brand-orange/20">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-brand-green">
                    {step.step}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-brand-gray">
                    {step.description}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Deliverables */}
      <section className="relative overflow-hidden py-16 sm:py-20">
        <GradientField variant="light" />
        <Container className="relative">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <h2 className="text-center font-display text-3xl font-bold text-brand-green sm:text-4xl">
                What You Walk Away With
              </h2>
            </Reveal>
            <RevealGroup className="mt-10 space-y-4" stagger={0.08}>
              {diagnosticDeliverables.map((item) => (
                <RevealItem
                  key={item}
                  className="card-lift flex gap-3 rounded-xl border border-black/10 bg-white p-5"
                >
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-orange" />
                  <span className="text-sm leading-relaxed text-brand-gray">
                    {item}
                  </span>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-brand-orange">
        <GradientField variant="orange" />
        <Container className="relative flex flex-col items-center gap-6 py-16 text-center">
          <Reveal>
            <h2 className="max-w-xl font-display text-2xl font-bold text-white sm:text-3xl">
              Fixed scope. Fixed fee. A roadmap your board can act on.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Button
              href={site.bookingUrl}
              external
              variant="secondary"
              className="!bg-white !text-brand-orange hover:!bg-brand-green hover:!text-white"
            >
              Book a Discovery Call →
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
