"use client";

import { useState } from "react";

export function Accordion({
  items,
}: {
  items: { title: string; body: string }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-black/10 rounded-2xl border border-black/10 bg-white">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.title}>
            <button
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="font-display font-semibold text-brand-green">
                {item.title}
              </span>
              <span
                className={`shrink-0 text-xl text-brand-orange transition-transform ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            {isOpen && (
              <div className="px-5 pb-5 text-sm leading-relaxed text-brand-gray sm:px-6">
                {item.body}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
