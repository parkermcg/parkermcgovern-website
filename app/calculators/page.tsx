import Link from "next/link";
import { site } from "@/lib/site";
import { calculatorPages } from "@/lib/content/calculators";
import { pageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { VERIFIED_ON } from "@/lib/calculators/rates";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PageHero } from "@/components/sections/PageHero";

export const metadata = pageMetadata({
  title: "Mortgage Calculators for Ontario",
  description:
    "Five mortgage calculators built for Canadian rules specifically — payment, land transfer tax, affordability, CMHC insurance and the stress test.",
  path: "/calculators",
});

const trail = [
  { name: "Home", path: "/" },
  { name: "Calculators", path: "/calculators" },
];

export default function CalculatorsIndex() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(trail)} />
      <Breadcrumbs trail={trail} />

      <PageHero
        eyebrow="Calculators"
        title="Five calculators, built for Ontario rules specifically."
        lede="Canadian mortgages compound semi-annually, Ontario taxes property transfers in brackets, and Toronto adds a second tax on top. Most calculators online account for none of that."
      >
        <Button href={site.links.book} external>
          Book a call
        </Button>
      </PageHero>

      <Section surface="paper">
        <Container>
          <ul className="grid gap-6 md:grid-cols-2">
            {calculatorPages.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/calculators/${c.slug}`}
                  className="group flex h-full flex-col rounded-[6px] border border-rule bg-paper-raised p-7 transition-colors hover:border-brass"
                >
                  <h2 className="text-h3 text-ink">{c.eyebrow}</h2>
                  <p className="mt-3 text-ink-muted">{c.lede}</p>
                  <span className="mt-5 text-small font-semibold text-brass group-hover:underline">
                    Open calculator →
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <p className="measure mt-12 text-small text-ink-muted">
            Every rate, bracket and threshold used by these calculators was
            verified against its primary source in {VERIFIED_ON} — CMHC, OSFI,
            the Ontario Ministry of Finance and the City of Toronto. Each
            calculator links to the sources it relies on. Results are estimates,
            not approvals or commitments to lend.
          </p>
        </Container>
      </Section>
    </>
  );
}
