import Link from "next/link";
import Image from "next/image";
import { site, calculators, formattedAddress } from "@/lib/site";
import { publishedServicePages } from "@/lib/content/services";
import { Container } from "@/components/ui/Container";

/**
 * Brokerage name, brokerage licence and agent licence appear sitewide here.
 * The regulatory notice is used verbatim from lib/site.ts — CLAUDE.md §4.
 */
export function Footer() {
  return (
    <footer className="border-t border-rule-invert bg-ground text-ink-invert-muted">
      <Container>
        <div className="grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="grid h-10 w-10 place-items-center rounded-full bg-ground-raised font-display text-[0.85rem] font-semibold text-brass-light ring-1 ring-brass/70"
              >
                PM
              </span>
              <span className="font-display text-[1.05rem] font-semibold text-ink-invert">
                {site.name}
              </span>
            </div>
            <p className="max-w-[32ch] text-small">
              {site.role} with {site.licence.brokerageName}, based in{" "}
              {site.address.locality} and serving the Greater Toronto Area.
            </p>

            {/*
              Brokerage mark. The all-white variant supplied by the brokerage
              is used deliberately — the full-colour wordmark is dark navy and
              would disappear against --ground. `unoptimized` skips the image
              optimizer, which would otherwise require dangerouslyAllowSVG;
              the file is 6.7KB of vector and needs no optimization.
            */}
            <Image
              src="/mortgagebroker-ca-white.svg"
              alt={site.licence.brokerageName}
              width={953}
              height={519}
              unoptimized
              className="mt-6 h-auto w-[150px]"
            />
          </div>

          <div>
            <h2 className="mb-4 text-eyebrow font-semibold uppercase tracking-[0.1em] text-ink-invert">
              How I help
            </h2>
            <ul className="space-y-2.5 text-small">
              {publishedServicePages.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/mortgages/${s.slug}`}
                    className="transition-colors hover:text-brass-light"
                  >
                    {s.eyebrow}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-eyebrow font-semibold uppercase tracking-[0.1em] text-ink-invert">
              Calculators
            </h2>
            <ul className="space-y-2.5 text-small">
              {calculators.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/calculators/${c.slug}`}
                    className="transition-colors hover:text-brass-light"
                  >
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-eyebrow font-semibold uppercase tracking-[0.1em] text-ink-invert">
              Get in touch
            </h2>
            <ul className="space-y-2.5 text-small">
              <li>
                <a
                  href={site.contact.phoneHref}
                  className="transition-colors hover:text-brass-light"
                >
                  {site.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.contact.emailHref}
                  className="break-all transition-colors hover:text-brass-light"
                >
                  {site.contact.email}
                </a>
              </li>
              <li className="pt-1">
                <Link
                  href="/service-areas"
                  className="transition-colors hover:text-brass-light"
                >
                  Service areas
                </Link>
              </li>
              <li className="pt-1">{formattedAddress}</li>
              <li className="pt-1">{site.hoursLabel}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-rule-invert py-8">
          <p className="max-w-[95ch] text-[0.78rem] leading-relaxed">
            {site.regulatoryNotice}
          </p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[0.78rem]">
            <span>
              © {new Date().getFullYear()} {site.name}. All rights reserved.
            </span>
            <Link href="/privacy" className="hover:text-brass-light">
              Privacy
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
