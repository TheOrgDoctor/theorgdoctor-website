import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { insightPosts } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Insights, updates, and speaking appearances from The Org Doctor on HR strategy, leadership, and public sector organizational challenges.",
};

export default function InsightsPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-display text-4xl font-bold text-brand-green sm:text-5xl">
            Insights
          </h1>
          <p className="mt-4 text-base leading-relaxed text-brand-gray">
            Insights, updates, and speaking appearances from The Org Doctor.
            We regularly present at national conferences and write about the
            HR and leadership challenges organizations are actually facing —
            no recycled listicles, just practical thinking from the field.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {insightPosts.map((post) => (
            <div
              key={post.title}
              className="flex flex-col rounded-2xl border border-black/10 bg-white p-6"
            >
              <span className="inline-block w-fit rounded-full bg-brand-green/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-green">
                {post.category}
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-brand-green">
                {post.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-gray">
                {post.excerpt}
              </p>
              <span className="mt-4 text-sm font-semibold text-brand-orange">
                Coming soon
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
