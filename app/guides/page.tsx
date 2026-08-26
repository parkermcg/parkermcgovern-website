import Link from "next/link";
import { site } from "@/lib/site";
import { publishedGuides, guidesByCluster, CLUSTERS, type GuideCluster } from "@/lib/content/guides";
import { pageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PageHero } from "@/components/sections/PageHero";

export const metadata = pageMetadata({
  title: "Mortgage Guides for Ontario Borrowers",
  description:
    "Plain-language explanations of Ontario mortgage topics — penalties, the stress test, down payments, land transfer tax and what to do when a bank says no.",
  path: "/guides",
});

const trail = [
  { name: "Home", path: "/" },
  { name: "Guides", path: "/guides" },
];

const ORDER: GuideCluster[] = [
  "first-time-buyer",
  "deciding",
  "renewal",
  "working-with-an-agent",
];

export default function GuidesIndex() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(trail)} />
      <Breadcrumbs trail={trail} />

      <PageHero
        eyebrow="Guides"
        title="The explanations you should have been given the first time."
        lede={`${publishedGuides.length} guides on how mortgages actually work in Ontario. Written by me, sourced to CMHC, OSFI, the Ministry of Finance and the FCAC, and updated when the rules change.`}
      >
        <Button href={site.links.book} external>
          Book a call
        </Button>
        <Button href="/calculators" variant="outline">
          Try the calculators
        </Button>
      </PageHero>

      <Section surface="paper">
        <Container>
          {ORDER.map((cluster, i) => {
            const items = guidesByCluster(cluster);
            if (items.length === 0) return null;
            return (
              <div key={cluster} id={cluster} className={i > 0 ? "mt-16 scroll-mt-28" : "scroll-mt-28"}>
                <div className="mb-8 max-w-[52ch]">
                  <Eyebrow tone="dark">{CLUSTERS[cluster].label}</Eyebrow>
                  <h2 className="text-h2 text-ink">{CLUSTERS[cluster].blurb}</h2>
                </div>
                <ul className="grid gap-6 md:grid-cols-2">
                  {items.map((g) => (
                    <li key={g.slug}>
                      <Link
                        href={`/guides/${g.slug}`}
                        className="group flex h-full flex-col rounded-[6px] border border-rule bg-paper-raised p-7 transition-colors hover:border-brass"
                      >
                        <h3 className="font-display text-h3 text-ink">{g.title}</h3>
                        <p className="mt-3 text-ink-muted">{g.lede}</p>
                        <span className="mt-5 text-small font-semibold text-brass group-hover:underline">
                          Read the guide →
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </Container>
      </Section>
    </>
  );
}
