import Image from "next/image";
import { site } from "@/lib/site";

/**
 * E-E-A-T requirement: every guide carries a named author with credentials
 * and licence number, plus a visible last-updated date (CLAUDE.md §5).
 */
export function AuthorBlock({ updated }: { updated: string }) {
  const formatted = new Date(`${updated}T12:00:00Z`).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

  return (
    <div className="flex flex-wrap items-center gap-4 border-y border-rule-invert py-5">
      <div className="relative h-12 w-12 flex-none overflow-hidden rounded-full ring-1 ring-brass/60">
        <Image
          src="/parker-mcgovern.jpg"
          alt={site.name}
          fill
          sizes="48px"
          className="object-cover object-top"
        />
      </div>
      <div className="min-w-0">
        <p className="text-small font-semibold text-ink-invert">
          Written by {site.name}, {site.role}
        </p>
        <p className="text-small text-ink-invert-muted">
          FSRA Licence #{site.licence.agent} · {site.licence.brokerageName}{" "}
          #{site.licence.brokerage}
        </p>
      </div>
      <p className="ml-auto text-small text-ink-invert-muted">
        Last updated{" "}
        <time dateTime={updated} className="text-ink-invert">
          {formatted}
        </time>
      </p>
    </div>
  );
}
