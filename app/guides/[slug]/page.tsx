import Link from "next/link";
import { notFound } from "next/navigation";
import { site, calculators as allCalculators } from "@/lib/site";
import { guides, getGuide, CLUSTERS } from "@/lib/content/guides";
import { servicePages } from "@/lib/content/services";
import { pageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, faqSchema, articleSchema } from "@/lib/seo/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Faq } from "@/components/sections/Faq";
import { AuthorBlock } from "@/components/sections/AuthorBlock";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) return {};
  return pageMetadata({
    title: g.metaTitle,
    description: g.metaDescription,
    path: `/guides/${g.slug}`,
    noindex: g.draft === true,
  });
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) notFound();

  const trail = [
    { name: "Home", path: "/" },
    { name: "Guides", path: "/guides" },
    { name: CLUSTERS[g.cluster].label, path: `/guides#${g.cluster}` },
  ];

  const services = (g.relatedServices ?? [])
    .map((s) => servicePages.find((p) => p.slug === s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p && !p.draft));
  const calcs = (g.relatedCalculators ?? [])
    .map((s) => allCalculators.find((c) => c.slug === s))
    .filter((c): c is (typeof allCalculators)[number] => Boolean(c));
  const siblings = (g.relatedGuides ?? [])
    .map((s) => getGuide(s))
    .filter((x): x is NonNullable<typeof x> => Boolean(x && !x.draft));

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(trail),
          articleSchema({
            title: g.title,
            description: g.metaDescription,
            path: `/guides/${g.slug}`,
            published: g.published,
            updated: g.updated,
          }),
          ...(g.faqs?.length ? [faqSchema(g.faqs)] : []),
        ]}
      />
      <Breadcrumbs trail={trail} />

      <Section surface="ground" tier="minor">
        <Container>
          <div className="max-w-[62ch]">
            <Eyebrow>{CLUSTERS[g.cluster].label}</Eyebrow>
            <h1 className="text-h1 text-[#F6F1E3]">{g.title}</h1>
            <p className="mt-6 text-lede text-ink-invert-muted">{g.lede}</p>
            <div className="mt-9">
              <AuthorBlock updated={g.updated} />
            </div>
          </div>
        </Container>
      </Section>

      <Section surface="paper">
        <Container>
          <div className="measure">
            {g.intro.map((p, i) => (
              <p
                key={i}
                className={i === 0 ? "text-lede text-ink" : "mt-4 text-ink-muted"}
              >
                {p}
              </p>
            ))}
          </div>

          {/* Scannable summary — what most readers actually take away */}
          <div className="measure mt-10 rounded-[6px] border border-rule bg-paper-raised p-7">
            <h2 className="text-eyebrow font-semibold uppercase tracking-[0.14em] text-brass">
              The short version
            </h2>
            <ul className="mt-4 space-y-3">
              {g.takeaways.map((t) => (
                <li key={t} className="flex gap-3 text-ink-muted">
                  <span aria-hidden="true" className="mt-2 h-1 w-3 flex-none bg-brass/60" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {g.sections.map((s) => (
            <div key={s.h} className="mt-14">
              <h2 className="measure text-h2 text-ink">{s.h}</h2>
              <div className="measure">
                {s.p.map((para, i) => (
                  <p key={i} className="mt-4 text-ink-muted">
                    {para}
                  </p>
                ))}
              </div>

              {s.list ? (
                <dl className="mt-8 grid gap-5 sm:grid-cols-2">
                  {s.list.map((item) => (
                    <div
                      key={item.t}
                      className="rounded-[6px] border border-rule bg-paper-raised p-6"
                    >
                      <dt className="font-display text-[1.15rem] font-semibold text-ink">
                        {item.t}
                      </dt>
                      <dd className="mt-2 text-small text-ink-muted">{item.d}</dd>
                    </div>
                  ))}
                </dl>
              ) : null}

              {s.aside ? (
                <aside className="measure mt-8 border-l-2 border-brass bg-paper-raised p-6">
                  <p className="font-display text-[1.15rem] font-semibold text-ink">
                    {s.aside.h}
                  </p>
                  <p className="mt-2 text-ink-muted">{s.aside.p}</p>
                </aside>
              ) : null}
            </div>
          ))}

          {/* Sources — required on every guide */}
          <div className="measure mt-16 border-t border-rule pt-8">
            <h2 className="text-small font-semibold text-ink">Sources</h2>
            <ul className="mt-3 space-y-1.5">
              {g.sources.map((s) => (
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
            <p className="mt-4 text-small text-ink-muted">
              This guide is general information, not advice about your specific
              situation, and rules change. Confirm anything you intend to rely
              on — or ask me directly.
            </p>
          </div>
        </Container>
      </Section>

      {g.faqs?.length ? (
        <Section surface="paper" tier="minor" className="!pt-0">
          <Container>
            <div className="mb-8 max-w-[46ch]">
              <Eyebrow tone="dark">Common questions</Eyebrow>
              <h2 className="text-h2 text-ink">Still wondering.</h2>
            </div>
            <Faq items={g.faqs} />
          </Container>
        </Section>
      ) : null}

      <Section surface="ground">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-[6px] border border-rule-invert bg-ground-raised p-8">
              <h2 className="font-display text-h3 text-ink-invert">
                Want this applied to your situation?
              </h2>
              <p className="mt-3 text-ink-invert-muted">
                General information only goes so far. Twenty minutes on the
                phone will tell you what actually applies to you — no credit
                check to have that conversation.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button href={site.links.book} external>
                  Book a call
                </Button>
                <Button href="/contact" variant="outline">
                  Send a message
                </Button>
              </div>
            </div>

            <div>
              {siblings.length > 0 ? (
                <>
                  <Eyebrow>Read next</Eyebrow>
                  <ul className="mb-8 mt-6 divide-y divide-rule-invert border-y border-rule-invert">
                    {siblings.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/guides/${s.slug}`}
                          className="group block py-4 text-ink-invert hover:text-brass-light"
                        >
                          {s.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}

              <div className="flex flex-wrap gap-2">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/mortgages/${s.slug}`}
                    className="rounded-[3px] border border-rule-invert px-3 py-2 text-small text-ink-invert-muted hover:border-brass-light hover:text-brass-light"
                  >
                    {s.eyebrow}
                  </Link>
                ))}
                {calcs.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/calculators/${c.slug}`}
                    className="rounded-[3px] border border-rule-invert px-3 py-2 text-small text-ink-invert-muted hover:border-brass-light hover:text-brass-light"
                  >
                    {c.title} calculator
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
