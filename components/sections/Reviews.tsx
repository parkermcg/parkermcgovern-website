import { site } from "@/lib/site";
import type { Review } from "@/lib/content/reviews";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";

/**
 * Server-rendered reviews. Emits no structured data by design — review
 * markup on our own domain is prohibited (CLAUDE.md §4).
 *
 * Renders nothing when passed an empty list, so the section simply does not
 * exist rather than showing an empty state.
 */

function Stars({ rating }: { rating: number }) {
  return (
    <p
      className="text-brass"
      role="img"
      aria-label={`${rating} out of 5 stars`}
      title={`${rating} out of 5`}
    >
      <span aria-hidden="true">{"★".repeat(rating)}</span>
    </p>
  );
}

export function Reviews({
  items,
  eyebrow = "What clients say",
  heading,
  surface = "paper",
  showProfileLink = true,
}: {
  items: Review[];
  eyebrow?: string;
  heading: string;
  surface?: "paper" | "ground";
  showProfileLink?: boolean;
}) {
  if (items.length === 0) return null;

  const onDark = surface === "ground";
  const card = onDark
    ? "border-rule-invert bg-ground-raised"
    : "border-rule bg-paper-raised";
  const quote = onDark ? "text-ink-invert" : "text-ink";
  const meta = onDark ? "text-ink-invert-muted" : "text-ink-muted";

  return (
    <Section surface={surface} tier="minor">
      <Container>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-[46ch]">
            <Eyebrow tone={onDark ? "light" : "dark"}>{eyebrow}</Eyebrow>
            <h2 className={`text-h2 ${onDark ? "text-[#F6F1E3]" : "text-ink"}`}>
              {heading}
            </h2>
          </div>

          {showProfileLink && site.links.gbp ? (
            <p className={`text-small ${meta}`}>
              <span className="font-mono">
                {site.reviews.rating.toFixed(1)} ★
              </span>{" "}
              from {site.reviews.count} reviews ·{" "}
              <a
                href={site.links.gbp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brass underline underline-offset-2 hover:no-underline"
              >
                read them all on Google
              </a>
            </p>
          ) : null}
        </div>

        <ul className="grid items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((r) => (
            <li
              key={r.author + r.text.slice(0, 24)}
              className={`flex flex-col rounded-[6px] border p-7 ${card}`}
            >
              <Stars rating={r.rating} />
              <blockquote className={`mt-4 flex-1 ${quote}`}>
                {r.text.split("\n\n").map((para, i) => (
                  <p key={i} className={i > 0 ? "mt-3" : undefined}>
                    {para}
                  </p>
                ))}
              </blockquote>
              <footer className={`mt-6 text-small ${meta}`}>
                <span
                  className={onDark ? "text-ink-invert" : "text-ink"}
                  style={{ fontWeight: 600 }}
                >
                  {r.author}
                </span>
                {r.context ? <> · {r.context}</> : null}
                {r.date ? <> · {r.date}</> : null}
              </footer>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
