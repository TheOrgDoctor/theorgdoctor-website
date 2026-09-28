import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Accordion } from "@/components/Accordion";
import { benefits, site } from "@/lib/site-data";

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
            Diagnosing What&apos;s Holding Your Organization Back — and
            Prescribing What Fixes It
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            At The Org Doctor, we diagnose what&apos;s holding your organization
            back and prescribe the strategic solutions that move it forward.
            Led by a powerhouse team of seasoned HR professionals, we blend
            decades of experience in human resources, organizational strategy,
            and leadership development to help companies align their people,
            processes, and performance.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href={site.bookingUrl} external variant="primary">
              Book a Free Consultation →
            </Button>
            <Button href="/services" variant="ghost" className="!border-white !text-white hover:!bg-white hover:!text-brand-green">
              Explore Our Services →
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
