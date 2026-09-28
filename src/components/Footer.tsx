import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-black/5 bg-brand-green text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-12 sm:px-8 md:flex-row md:justify-between">
        <div className="max-w-sm">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo-circular-alt.png"
              alt="The Org Doctor logo"
              width={44}
              height={44}
              className="h-11 w-11 rounded-full"
            />
            <span className="font-display text-lg font-bold">{site.name}</span>
          </div>
          <p className="mt-3 text-sm text-white/70">{site.tagline}</p>
        </div>

        <div className="flex flex-wrap gap-x-10 gap-y-6">
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white/60">
              Navigate
            </h3>
            <ul className="mt-3 space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/85 hover:text-brand-orange">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white/60">
              Contact
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-white/85">
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-brand-orange">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={`tel:${site.phone.replace(/[^\d]/g, "")}`} className="hover:text-brand-orange">
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-orange"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/60">
        © {new Date().getFullYear()} The Org Doctor, LLC. All rights reserved.
      </div>
    </footer>
  );
}
