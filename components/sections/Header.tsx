"use client";

import Link from "next/link";
import { useState } from "react";
import { nav, site } from "@/lib/site";
import { Container } from "@/components/ui/Container";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-rule-invert bg-ground/92 backdrop-blur-md">
      <Container>
        <div className="flex h-20 items-center gap-6">
          <Link
            href="/"
            className="mr-auto flex items-center gap-3"
            onClick={() => setOpen(false)}
          >
            <span
              aria-hidden="true"
              className="grid h-11 w-11 flex-none place-items-center rounded-full bg-ground-raised font-display text-[0.95rem] font-semibold text-brass-light ring-1 ring-brass/70"
            >
              PM
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-display text-[1.1rem] font-semibold text-ink-invert">
                {site.name}
              </span>
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-brass-light">
                Mortgage Agent
              </span>
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[0.9rem] font-medium text-ink-invert-muted transition-colors hover:text-ink-invert"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 sm:flex">
            <a
              href={site.links.apply}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[3px] border border-rule-invert px-4 py-2.5 text-[0.85rem] font-semibold text-ink-invert transition-colors hover:border-brass-light hover:text-brass-light"
            >
              Apply now
            </a>
            <a
              href={site.links.book}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[3px] bg-brass px-4 py-2.5 text-[0.85rem] font-semibold text-white transition-colors hover:bg-[#96702F]"
            >
              Book a call
            </a>
          </div>

          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 flex-none place-items-center rounded-[3px] border border-rule-invert text-ink-invert lg:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {open ? (
                <path d="m5 5 14 14M19 5 5 19" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </Container>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Primary mobile"
          className="border-t border-rule-invert bg-ground lg:hidden"
        >
          <Container>
            <ul className="py-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-rule-invert py-4 text-ink-invert"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="flex gap-3 py-5 sm:hidden">
                <a
                  href={site.links.apply}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-[3px] border border-rule-invert px-4 py-3 text-center text-[0.9rem] font-semibold text-ink-invert"
                >
                  Apply now
                </a>
                <a
                  href={site.links.book}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-[3px] bg-brass px-4 py-3 text-center text-[0.9rem] font-semibold text-white"
                >
                  Book a call
                </a>
              </li>
            </ul>
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
