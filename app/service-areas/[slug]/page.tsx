import Link from "next/link";
import { notFound } from "next/navigation";
import { site, calculators as allCalculators } from "@/lib/site";
import { areas, getArea, publishedAreas } from "@/lib/content/areas";
import { servicePages } from "@/lib/content/services";
import { pageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, faqSchema } from "@/lib/seo/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Faq } from "@/components/sections/Faq";

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) return {};
  return pageMetadata({
    title: area.metaTitle,
    description: area.metaDescription,
    path: `/service-areas/${area.slug}`,
    noindex: area.draft === true,
  });
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();

  const trail = [
    { name: "Home", path: "/" },
    { name: "Service areas", path: "/service-areas" },
    { name: area.name, path: `/service-areas/${area.slug}` },
  ];

  const linkedCalculators = area.calculators
    .map((s) => allCalculators.find((c) => c.slug === s))
    .filter((c): c is (typeof allCalculators)[number] => Boolean(c));

  const linkedServices = area.services
    .map((s) => servicePages.find((p) => p.slug === s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p && !p.draft));

  const siblings = publishedAreas.filter((a) => a.slug !== area.slug);

  return (
    <>
      <JsonLd data={[breadcrumbSchema(trail), faqSchema(area.faqs)]} />
      <Breadcrumbs trail={trail} />

      <Section surface="ground">
        <Container>
          <div className="max-w-[60ch]">
            <div className="animate-rise">
              <Eyebrow>{area.eyebrow}</Eyebrow>
            </div>
            <h1
              className="animate-rise text-h1 text-[#F6F1E3]"
              style={{ animationDelay: "60ms" }}
            >
              {area.title}
            </h1>
            <p
              className="animate-rise mt-6 text-lede text-ink-invert-muted"
              style={{ animationDelay: "120ms" }}
            >
              {area.lede}
            </p>
            <div
              className="animate-rise mt-9 flex flex-wrap gap-3"
              style={{ animationDelay: "180ms" }}
            >
              <Button href={site.links.book} external>
                Book a call
              </Button>
              <Button href="/inquire" variant="outline">
                Ask a question
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section surface="paper">
        <Container>
          <div className="measure">
            {area.intro.map((p, i) => (
              <p
                key={i}
                className={`text-ink-muted ${i === 0 ? "text-lede text-ink" : "mt-4"}`}
              >
                {p}
              </p>
            ))}
          </div>

          {area.blocks.map((block) => (
            <div key={block.h} className="mt-16">
              <h2 className="measure text-h2 text-ink">{block.h}</h2>
              <div className="measure">
                {block.p.map((para, i) => (
                  <p key={i} className="mt-4 text-ink-muted">
                    {para}
                  </p>
                ))}
              </div>

              {block.list ? (
                <dl className="mt-8 grid gap-5 sm:grid-cols-2">
                  {block.list.map((item) => (
                    <div
                      key={item.t}
                      className="rounded-[6px] border border-rule bg-paper-raised p-6"
                    >
                      <dt className="font-display text-[1.15rem] font-semibold text-ink">
                        {item.t}
                      </dt>
                      <dd className="mt-2 text-small text-ink-muted">
                        {item.d}
                      </dd>
                    </div>
                  ))}
                </dl>
              ) : null}

              {block.aside ? (
                <aside className="measure mt-8 border-l-2 border-brass bg-paper-raised p-6">
                  <p className="font-display text-[1.15rem] font-semibold text-ink">
                    {block.aside.h}
                  </p>
                  <p className="mt-2 text-ink-muted">{block.aside.p}</p>
                </aside>
              ) : null}
            </div>
          ))}
        </Container>
      </Section>

      {/* The honest case — required on every area page, same as money pages */}
      <Section surface="ground">
        <Container>
          <div className="measure">
            <Eyebrow>Straight talk</Eyebrow>
            <h2 className="text-h2 text-[#F6F1E3]">{area.honest.h}</h2>
            {area.honest.p.map((para, i) => (
              <p key={i} className="mt-4 text-ink-invert-muted">
                {para}
              </p>
            ))}
          </div>
        </Container>
      </Section>

      {linkedCalculators.length > 0 ? (
        <Section surface="paper" tier="minor">
          <Container>
            <div className="mb-8 max-w-[46ch]">
              <Eyebrow tone="dark">Run your numbers</Eyebrow>
              <h2 className="text-h2 text-ink">Before you decide anything.</h2>
            </div>
            <ul className="grid gap-4 sm:grid-cols-3">
              {linkedCalculators.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/calculators/${c.slug}`}
                    className="group flex h-full flex-col rounded-[6px] border border-rule bg-paper-raised p-6 transition-colors hover:border-brass"
                  >
                    <span className="font-display text-[1.15rem] font-semibold text-ink">
                      {c.title}
                    </span>
                    <span className="mt-2 text-small text-ink-muted">
                      {c.blurb}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      ) : null}

      <Section surface="paper" tier="minor" className="!pt-0">
        <Container>
          <div className="mb-8 max-w-[46ch]">
            <Eyebrow tone="dark">Common questions</Eyebrow>
            <h2 className="text-h2 text-ink">
              What people ask me about {area.name}.
            </h2>
          </div>
          <Faq items={area.faqs} />

          {area.sources?.length ? (
            <div className="measure mt-12">
              <h2 className="text-small font-semibold text-ink">Sources</h2>
              <p className="mt-2 text-small text-ink-muted">
                Figures on this page verified {area.verified}. Municipal rates
                and tax rules change — confirm before relying on them.
              </p>
              <ul className="mt-3 space-y-1.5">
                {area.sources.map((s) => (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-small text-brass underline underline-offset-2 hover:text-ink"
                    >
                      {s.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </Container>
      </Section>

      <Section surface="ground">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
            <div>
              <Eyebrow>Situations</Eyebrow>
              <h2 className="text-h2 text-[#F6F1E3]">
                What I help with in {area.name}.
              </h2>
              <ul className="mt-8 divide-y divide-rule-invert border-y border-rule-invert">
                {linkedServices.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/mortgages/${s.slug}`}
                      className="group flex items-baseline justify-between gap-4 py-4"
                    >
                      <span className="font-display text-[1.15rem] font-semibold text-ink-invert group-hover:text-brass-light">
                        {s.eyebrow}
                      </span>
                      <span className="text-small text-brass-light">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Eyebrow>Elsewhere in the GTA</Eyebrow>
              <h2 className="text-h2 text-[#F6F1E3]">Other areas.</h2>
              <ul className="mt-8 divide-y divide-rule-invert border-y border-rule-invert">
                {siblings.map((a) => (
                  <li key={a.slug}>
                    <Link
                      href={`/service-areas/${a.slug}`}
                      className="group flex items-baseline justify-between gap-4 py-4"
                    >
                      <span className="font-display text-[1.15rem] font-semibold text-ink-invert group-hover:text-brass-light">
                        {a.name}
                      </span>
                      <span className="text-small text-brass-light">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
