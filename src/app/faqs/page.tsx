import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Accordion } from "@/components/Accordion";
import { faqs } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Answers to common questions about working with The Org Doctor — pricing, contracts, customization, and getting started.",
};

export default function FAQsPage() {
  const items = faqs.map((f) => ({ title: f.q, body: f.a }));

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-display text-4xl font-bold text-brand-green sm:text-5xl">
            Frequently Asked Questions
          </h1>
        </div>
        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion items={items} />
        </div>
      </Container>
    </section>
  );
}
