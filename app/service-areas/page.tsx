import Link from "next/link";
import { site } from "@/lib/site";
import { publishedAreas } from "@/lib/content/areas";
import { pageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PageHero } from "@/components/sections/PageHero";

/**
 * Service areas hub. Planned in docs/sitemap-plan.md §1 from the start and
 * built 2026-08-26 alongside the city pages.
 *
 * The framing here does real work: it says up front that most of what people
 * expect to differ by municipality does not, and links to the pages for the
 * things that genuinely do. That is what keeps this from being a doorway hub.
 */
export const metadata = pageMetadata({
  title: "Service Areas — York Region & the GTA",
  description:
    "Licensed Ontario mortgage agent serving Richmond Hill, York Region and the GTA. What actually differs by municipality, and what does not.",
  path: "/service-areas",
});

const trail = [
  { name: "Home", path: "/" },
  { name: "Service areas", path: "/service-areas" },
];

export default function ServiceAreasPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(trail)]} />
      <Breadcrumbs trail={trail} />

      <PageHero
        eyebrow="Service areas"
        title="Most of what you would expect to change by city does not."
        lede="Same lenders, same rates, same stress test, same down payment rules across every municipality in Ontario. Three things genuinely differ — and they are worth knowing before you buy."
      />

      <Section surface="paper" className="!pt-0">
        <Container>
          <div className="measure">
            <p className="text-lede text-ink">
              There is a lot of mortgage marketing built around locality, and
              most of it is empty. Nobody has a Vaughan rate or a Markham
              lender. Your file is priced on your income, your credit, your
              down payment and the property — not your postcode.
            </p>
            <p className="mt-4 text-ink-muted">
              What does change is worth being precise about. Land transfer tax,
              which is dramatically different inside Toronto and identical
              everywhere else. Property tax, which is set municipally and
              affects what you qualify for because lenders count it in your
              debt service ratios. And the properties themselves — a
              condominium in Markham and a well-and-septic property north of
              Newmarket are underwritten in genuinely different ways.
            </p>
            <p className="mt-4 text-ink-muted">
              Each page below covers what is actually different about buying
              there. Where nothing is different, it says so.
            </p>
          </div>

          <ul className="mt-14 grid gap-6 md:grid-cols-2">
            {publishedAreas.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/service-areas/${a.slug}`}
                  className="group flex h-full flex-col rounded-[6px] border border-rule bg-paper-raised p-7 transition-colors hover:border-brass"
                >
                  <h2 className="text-h3 text-ink">{a.name}</h2>
                  <p className="mt-3 text-ink-muted">{a.summary}</p>
                  <span className="mt-5 text-small font-semibold text-brass group-hover:underline">
                    Read more →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section surface="ground">
        <Container>
          <div className="measure">
            <Eyebrow>Straight talk</Eyebrow>
            <h2 className="text-h2 text-[#F6F1E3]">
              Why there is no page for every town.
            </h2>
            <p className="mt-4 text-ink-invert-muted">
              Plenty of mortgage sites carry a page for every municipality in
              the region, each one the same text with the name swapped. They
              exist to catch searches, not to tell you anything, and search
              engines have been discounting them for years.
            </p>
            <p className="mt-4 text-ink-invert-muted">
              The pages here exist where there is something genuinely different
              to say — a tax that applies in one city and nowhere else, a kind
              of property that changes which lenders will lend. Aurora and
              Newmarket share a page because, for mortgage purposes, they are
              the same place. If that stops being true, they will get separate
              pages then.
            </p>
            <p className="mt-4 text-ink-invert-muted">
              The licence is provincial, so the practical limit is Ontario. If
              your municipality is not listed, that is not a limitation — it
              just means there was nothing distinctive enough to write down.
              Call and ask.
            </p>
          </div>

          <div className="measure mt-9">
            <p className="text-small text-ink-invert-muted">
              Based in {site.address.locality}. Serving{" "}
              {site.areaServed.slice(0, 8).join(", ")} and the wider GTA.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
