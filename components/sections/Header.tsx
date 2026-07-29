"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { nav, site } from "@/lib/site";
import { Container } from "@/components/ui/Container";

type NavItem = { href: string; label: string };

/**
 * The money pages arrive as a prop from the server layout rather than being
 * imported here. This file is a client component, and importing the service
 * registry directly would bundle every page's full body copy into the browser
 * payload — see the note on `serviceNavItems` in lib/content/services.ts.
 */
export function Header({ services }: { services: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const [typesOpen, setTypesOpen] = useState(false);
  const typesRef = useRef<HTMLDivElement>(null);
  const typesButtonRef = useRef<HTMLButtonElement>(null);

  /**
   * Escape closes and returns focus to the trigger; a click anywhere outside
   * dismisses. Both listeners are only attached while the menu is open.
   */
  useEffect(() => {
    if (!typesOpen) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key !== "Escape") return;
      setTypesOpen(false);
      typesButtonRef.current?.focus();
    }

    function onPointerDown(e: MouseEvent) {
      if (typesRef.current?.contains(e.target as Node)) return;
      setTypesOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, [typesOpen]);

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
            <div
              ref={typesRef}
              className="relative"
              onMouseEnter={() => setTypesOpen(true)}
              onMouseLeave={() => setTypesOpen(false)}
            >
              <button
                ref={typesButtonRef}
                type="button"
                aria-expanded={typesOpen}
                aria-controls="types-menu"
                onClick={() => setTypesOpen((v) => !v)}
                className="flex items-center gap-1.5 text-[0.9rem] font-medium text-ink-invert-muted transition-colors hover:text-ink-invert"
              >
                Types of mortgages
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    typesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              {/*
                Always rendered, hidden with CSS rather than unmounted, so every
                money page link sits in the server HTML — CLAUDE.md §2. Note
                `invisible` is visibility:hidden, which also removes these from
                the tab order and the accessibility tree while closed.
              */}
              <ul
                id="types-menu"
                className={`absolute left-0 top-full w-64 rounded-[4px] border border-rule-invert bg-ground-raised py-2 shadow-xl transition-all duration-200 ${
                  typesOpen
                    ? "visible translate-y-2 opacity-100"
                    : "invisible translate-y-0 opacity-0"
                }`}
              >
                {services.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setTypesOpen(false)}
                      className="block px-5 py-2.5 text-[0.9rem] text-ink-invert-muted transition-colors hover:bg-ground hover:text-brass-light"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

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
              className="rounded-[3px] bg-brass px-4 py-2.5 text-[0.85rem] font-semibold text-white transition-colors hover:bg-[#725825]"
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
              {/*
                Listed flat rather than behind a second disclosure. The money
                pages are the conversion pages, and burying them under an extra
                tap on the smallest screens costs leads — CLAUDE.md §1.
              */}
              <li className="border-b border-rule-invert py-4">
                <p
                  id="mobile-types-label"
                  className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-brass-light"
                >
                  Types of mortgages
                </p>
                <ul aria-labelledby="mobile-types-label" className="mt-1">
                  {services.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="block py-2.5 text-ink-invert"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

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
