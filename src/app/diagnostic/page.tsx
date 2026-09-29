import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
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
      <section className="bg-brand-green py-16 sm:py-20">
        <Container className="text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
            The Flagship Diagnostic
          </p>
          <h1 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-bold text-white sm:text-5xl">
            The Organizational Health Assessment
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            A fixed-scope, fixed-fee diagnostic of your HR operating model,
            process maturity, and workforce risk — delivered as a
            prioritized, board-ready roadmap in 6–10 weeks.
          </p>
          <Button href={site.bookingUrl} external variant="primary" className="mt-8">
            Book a Discovery Call →
          </Button>
        </Container>
      </section>

      {/* Who it's for */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold text-brand-green sm:text-4xl">
              Built for Organizations Too Complex for Fractional HR
            </h2>
            <p className="mt-5 text-base leading-relaxed text-brand-gray">
              The Assessment is built for water and wastewater utilities,
              public agencies, and mid-market employers — typically 150 to
              2,500 employees — who are too complex for a fractional HR
              consultant, too budget-constrained for a national transformation
              firm, and underserved by vendors who sell consulting as a front
              end to software.
            </p>
          </div>
        </Container>
      </section>

      {/* Method */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <h2 className="text-center font-display text-3xl font-bold text-brand-green sm:text-4xl">
            The Method
          </h2>
          <div className="mx-auto mt-12 max-w-3xl space-y-6">
            {diagnosticMethod.map((step, i) => (
              <div key={step.step} className="flex gap-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-orange font-display text-base font-bold text-white">
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
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Deliverables */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center font-display text-3xl font-bold text-brand-green sm:text-4xl">
              What You Walk Away With
            </h2>
            <ul className="mt-10 space-y-4">
              {diagnosticDeliverables.map((item) => (
                <li key={item} className="flex gap-3 rounded-xl border border-black/10 bg-white p-5">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-orange" />
                  <span className="text-sm leading-relaxed text-brand-gray">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-brand-orange">
        <Container className="flex flex-col items-center gap-6 py-16 text-center">
          <h2 className="max-w-xl font-display text-2xl font-bold text-white sm:text-3xl">
            Fixed scope. Fixed fee. A roadmap your board can act on.
          </h2>
          <Button
            href={site.bookingUrl}
            external
            variant="secondary"
            className="!bg-white !text-brand-orange hover:!bg-brand-green hover:!text-white"
          >
            Book a Discovery Call →
          </Button>
        </Container>
      </section>
    </>
  );
}
