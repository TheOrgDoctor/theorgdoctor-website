"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { nav, site } from "@/lib/site-data";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-brand-offwhite/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-3 sm:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo-circular.png"
            alt="The Org Doctor logo"
            width={48}
            height={48}
            className="h-11 w-11 rounded-full"
            priority
          />
          <span className="font-display text-lg font-bold text-brand-green sm:text-xl">
            {site.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-brand-gray transition-colors hover:text-brand-orange"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brand-orange px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-orange-dark"
          >
            Book a Consultation
          </a>
        </nav>

        <button
          className="flex flex-col gap-1.5 p-2 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <span className="h-0.5 w-6 bg-brand-green" />
          <span className="h-0.5 w-6 bg-brand-green" />
          <span className="h-0.5 w-6 bg-brand-green" />
        </button>
      </div>

      {open && (
        <div className="border-t border-black/5 bg-brand-offwhite px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base font-medium text-brand-gray"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-brand-orange px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Book a Consultation
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
