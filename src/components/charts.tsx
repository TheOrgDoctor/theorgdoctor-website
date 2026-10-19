// Lightweight, on-brand data visuals for Insights articles.
// Built as inline SVG/CSS rather than a charting library — small dataset,
// static content, and full control over Org Doctor brand colors.

type BigStat = { value: string; label: string };

const SM_COLS: Record<number, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
  4: "sm:grid-cols-4",
};

export function StatGrid({ title, stats }: { title?: string; stats: BigStat[] }) {
  const smCols = SM_COLS[Math.min(stats.length, 4)] ?? "sm:grid-cols-4";
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-6 sm:p-8">
      {title && (
        <h4 className="font-display text-sm font-bold uppercase tracking-wide text-brand-green">
          {title}
        </h4>
      )}
      <div
        className={`grid grid-cols-2 gap-4 ${smCols} ${
          title ? "mt-5" : ""
        }`}
      >
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-xl bg-brand-green/[0.04] px-4 py-5 text-center"
          >
            <p className="font-display text-3xl font-bold text-brand-orange">
              {s.value}
            </p>
            <p className="mt-1 text-xs leading-snug text-brand-gray">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

type BarStat = { label: string; display: string; value: number; max?: number };

export function StatBars({ title, stats }: { title?: string; stats: BarStat[] }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-6 sm:p-8">
      {title && (
        <h4 className="font-display text-sm font-bold uppercase tracking-wide text-brand-green">
          {title}
        </h4>
      )}
      <div className={`space-y-5 ${title ? "mt-5" : ""}`}>
        {stats.map((s) => {
          const max = s.max ?? 100;
          const pct = Math.min(100, Math.max(4, (s.value / max) * 100));
          return (
            <div key={s.label}>
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-sm text-brand-gray">{s.label}</span>
                <span className="font-display text-base font-bold text-brand-orange">
                  {s.display}
                </span>
              </div>
              <div className="mt-1.5 h-2.5 w-full overflow-hidden rounded-full bg-brand-green/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-brand-orange-dark to-brand-orange"
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

type Pillar = { icon: string; title: string; detail: string };

export function PillarGrid({ title, pillars }: { title?: string; pillars: Pillar[] }) {
  return (
    <div>
      {title && (
        <h4 className="font-display text-sm font-bold uppercase tracking-wide text-brand-green">
          {title}
        </h4>
      )}
      <div className={`grid grid-cols-1 gap-4 sm:grid-cols-2 ${title ? "mt-5" : ""}`}>
        {pillars.map((p) => (
          <div
            key={p.title}
            className="card-lift rounded-2xl border border-black/10 bg-brand-green/[0.03] p-5"
          >
            <span className="text-2xl" aria-hidden>
              {p.icon}
            </span>
            <h5 className="mt-2 font-display text-base font-bold text-brand-green">
              {p.title}
            </h5>
            <p className="mt-1.5 text-sm leading-relaxed text-brand-gray">
              {p.detail}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

type FlowStep = { number: string; title: string; detail: string };

export function StepFlow({ title, steps }: { title?: string; steps: FlowStep[] }) {
  const smCols = SM_COLS[Math.min(steps.length, 4)] ?? "sm:grid-cols-3";
  return (
    <div>
      {title && (
        <h4 className="font-display text-sm font-bold uppercase tracking-wide text-brand-green">
          {title}
        </h4>
      )}
      <div
        className={`grid grid-cols-1 gap-4 ${smCols} ${
          title ? "mt-5" : ""
        }`}
      >
        {steps.map((s, i) => (
          <div key={s.number} className="relative">
            <div className="card-lift h-full rounded-2xl border border-black/10 bg-white p-5">
              <span className="font-display text-2xl font-bold text-brand-orange/30">
                {s.number}
              </span>
              <h5 className="mt-1 font-display text-base font-bold text-brand-green">
                {s.title}
              </h5>
              <p className="mt-1.5 text-sm leading-relaxed text-brand-gray">
                {s.detail}
              </p>
            </div>
            {i < steps.length - 1 && (
              <span
                aria-hidden
                className="absolute top-1/2 -right-4 z-10 hidden -translate-y-1/2 font-display text-xl text-brand-orange/50 sm:block"
              >
                →
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
