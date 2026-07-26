/**
 * The signature element — docs/design-plan.md §4.
 *
 * A navy panel laid out like an account statement: headline figure, a brass
 * rule, then itemised lines with labels left and figures right. Every
 * instance carries its estimate qualifier and a verified-on date at the foot,
 * where a real statement carries its disclaimer.
 *
 * Compliance: the qualifier renders adjacent to the figures, never as a
 * footnote (CLAUDE.md §4). `verified` is required — a figure without a
 * verification date does not ship.
 */

export type StatementLine = {
  label: string;
  value: string;
  tone?: "default" | "positive" | "caution" | "critical";
  emphasis?: boolean;
};

const tones = {
  default: "text-ink-invert",
  positive: "text-[#5FBF9C]",
  caution: "text-[#E0B44E]",
  critical: "text-[#E8857A]",
} as const;

export function StatementCard({
  label,
  figure,
  unit,
  note,
  lines = [],
  verified,
  source,
  qualifier = "Estimate only. Not a commitment to lend.",
  className = "",
}: {
  label: string;
  figure: string;
  unit?: string;
  note?: string;
  lines?: StatementLine[];
  /** e.g. "July 2026" — when the underlying rates or brackets were last checked. */
  verified: string;
  source?: { name: string; href: string };
  qualifier?: string;
  className?: string;
}) {
  return (
    <div
      data-figures
      className={`rounded-[6px] border border-rule-invert bg-ground p-7 sm:p-8 ${className}`}
    >
      <p className="text-eyebrow font-semibold uppercase tracking-[0.14em] text-brass-light">
        {label}
      </p>

      <p className="mt-5 font-mono text-figure-lg text-[#F6F1E3]">
        {figure}
        {unit ? (
          <span className="ml-1 text-lede text-ink-invert-muted">{unit}</span>
        ) : null}
      </p>

      {note ? (
        <p className="mt-2 text-small text-ink-invert-muted">{note}</p>
      ) : null}

      {lines.length > 0 ? (
        <>
          <hr className="my-6 border-0 border-t border-rule-invert" />
          <dl className="space-y-0.5">
            {lines.map((line) => (
              <div
                key={line.label}
                className="flex items-baseline justify-between gap-4 py-1.5"
              >
                <dt className="text-small text-ink-invert-muted">
                  {line.label}
                </dt>
                <dd
                  className={`font-mono text-[0.95rem] ${
                    tones[line.tone ?? "default"]
                  } ${line.emphasis ? "font-semibold" : ""}`}
                >
                  {line.value}
                </dd>
              </div>
            ))}
          </dl>
        </>
      ) : null}

      <p className="mt-6 border-t border-rule-invert pt-4 text-[0.78rem] leading-relaxed text-ink-invert-muted">
        {qualifier} Figures verified {verified}
        {source ? (
          <>
            {" · "}
            <a
              href={source.href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-brass-light"
            >
              {source.name}
            </a>
          </>
        ) : null}
        .
      </p>
    </div>
  );
}
