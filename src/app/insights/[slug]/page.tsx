import type { Metadata } from "next";
import { Fragment } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { GradientField } from "@/components/GradientField";
import { Button } from "@/components/Button";
import { insightPosts, site, type InsightVisual } from "@/lib/site-data";
import { StatGrid, StatBars, PillarGrid, StepFlow } from "@/components/charts";

function Visual({ visual }: { visual: InsightVisual }) {
  switch (visual.type) {
    case "statGrid":
      return <StatGrid title={visual.title} stats={visual.stats} />;
    case "statBars":
      return <StatBars title={visual.title} stats={visual.stats} />;
    case "pillarGrid":
      return <PillarGrid title={visual.title} pillars={visual.pillars} />;
    case "stepFlow":
      return <StepFlow title={visual.title} steps={visual.steps} />;
    default:
      return null;
  }
}

export function generateStaticParams() {
  return insightPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = insightPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function InsightArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = insightPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const otherPosts = insightPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden bg-brand-green py-16 sm:py-20">
        <GradientField variant="green" />
        <Container className="relative">
          <Reveal>
            <Link
              href="/insights"
              className="text-sm font-semibold text-white/70 transition-colors hover:text-white"
            >
              ← Back to Insights
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="mt-6 inline-block w-fit rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-orange">
              {post.category}
            </span>
          </Reveal>
          <Reveal delay={0.15}>
            <h1 className="mt-4 max-w-3xl font-display text-3xl font-bold text-white sm:text-4xl">
              {post.title}
            </h1>
          </Reveal>
          {post.date && (
            <Reveal delay={0.2}>
              <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-white/60">
                {post.date}
              </p>
            </Reveal>
          )}
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <RevealGroup className="mx-auto max-w-2xl space-y-10" stagger={0.08}>
            {post.sections.map((block, i) => {
              const visualsHere = post.visuals?.filter((v) => v.afterSection === i);
              return (
                <Fragment key={i}>
                  <RevealItem>
                    {block.heading && (
                      <h2 className="font-display text-xl font-bold text-brand-green">
                        {block.heading}
                      </h2>
                    )}
                    {block.paragraphs?.map((p, j) => (
                      <p
                        key={j}
                        className={`text-base leading-relaxed text-brand-gray ${
                          block.heading || j > 0 ? "mt-4" : ""
                        }`}
                      >
                        {p}
                      </p>
                    ))}
                    {block.bullets && (
                      <ul className="mt-4 space-y-3">
                        {block.bullets.map((b, k) => (
                          <li key={k} className="flex gap-3 text-sm leading-relaxed text-brand-gray">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </RevealItem>
                  {visualsHere?.map((visual, vi) => (
                    <RevealItem key={`visual-${i}-${vi}`}>
                      <Visual visual={visual} />
                    </RevealItem>
                  ))}
                </Fragment>
              );
            })}

            {post.source && (
              <RevealItem className="rounded-2xl border border-black/10 bg-brand-green/[0.03] p-6">
                <p className="text-sm font-semibold text-brand-green">
                  Source
                </p>
                <a
                  href={post.source.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 inline-block text-sm font-semibold text-brand-orange transition-colors hover:text-brand-orange-dark"
                >
                  {post.source.label} →
                </a>
              </RevealItem>
            )}
          </RevealGroup>

          <Reveal className="mx-auto mt-14 max-w-2xl rounded-2xl bg-brand-green px-8 py-8 text-center">
            <p className="font-display text-lg font-semibold text-white">
              Want to talk through how this applies to your organization?
            </p>
            <Button
              href={site.bookingUrl}
              external
              variant="primary"
              className="mt-6"
            >
              Book a Discovery Call →
            </Button>
          </Reveal>
        </Container>
      </section>

      {otherPosts.length > 0 && (
        <section className="bg-white py-16 sm:py-20">
          <Container>
            <Reveal>
              <h2 className="text-center font-display text-2xl font-bold text-brand-green">
                More Insights
              </h2>
            </Reveal>
            <RevealGroup
              className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3"
              stagger={0.1}
            >
              {otherPosts.map((p) => (
                <RevealItem key={p.slug}>
                  <Link
                    href={`/insights/${p.slug}`}
                    className="card-lift flex h-full flex-col rounded-2xl border border-black/10 bg-white p-6"
                  >
                    <span className="inline-block w-fit rounded-full bg-brand-green/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-green">
                      {p.category}
                    </span>
                    <h3 className="mt-4 font-display text-base font-bold text-brand-green">
                      {p.title}
                    </h3>
                  </Link>
                </RevealItem>
              ))}
            </RevealGroup>
          </Container>
        </section>
      )}
    </>
  );
}
