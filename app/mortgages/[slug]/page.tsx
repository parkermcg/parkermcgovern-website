import Link from "next/link";
import { notFound } from "next/navigation";
import { site, calculators as allCalculators } from "@/lib/site";
import { servicePages, getService } from "@/lib/content/services";
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
  return servicePages.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getService(slug);
  if (!page) return {};
  return pageMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/mortgages/${page.slug}`,
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getService(slug);
  if (!page) notFound();

  const trail = [
    { name: "Home", path: "/" },
    { name: page.eyebrow, path: `/mortgages/${page.slug}` },
  ];

  const linkedCalculators = page.calculators
    .map((s) => allCalculators.find((c) => c.slug === s))
    .filter((c): c is (typeof allCalculators)[number] => Boolean(c));

  const linkedServices = page.related
    .map((s) => servicePages.find((p) => p.slug === s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      <JsonLd data={[breadcrumbSchema(trail), faqSchema(page.faqs)]} />
      <Breadcrumbs trail={trail} />

      {/* Hero */}
      <Section surface="ground">
        <Container>
          <div className="max-w-[60ch]">
            <div className="animate-rise">
              <Eyebrow>{page.eyebrow}</Eyebrow>
            </div>
            <h1
              className="animate-rise text-h1 text-[#F6F1E3]"
              style={{ animationDelay: "60ms" }}
            >
              {page.title}
            </h1>
            <p
              className="animate-rise mt-6 text-lede text-ink-invert-muted"
              style={{ animationDelay: "120ms" }}
            >
              {page.lede}
            </p>
            <div
              className="animate-rise mt-9 flex flex-wrap gap-3"
              style={{ animationDelay: "180ms" }}
            >
              <Button href={site.links.book} external>
                Book a call
              </Button>
              <Button href="/apply" variant="outline">
                Start an application
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Body */}
      <Section surface="paper">
        <Container>
          <div className="measure">
            {page.intro.map((p, i) => (
              <p
                key={i}
                className={`text-ink-muted ${i === 0 ? "text-lede text-ink" : "mt-4"}`}
              >
                {p}
              </p>
            ))}
          </div>

          {page.blocks.map((block) => (
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

      {/* The honest case against — required on every money page */}
      <Section surface="ground">
        <Container>
          <div className="measure">
            <Eyebrow>Straight talk</Eyebrow>
            <h2 className="text-h2 text-[#F6F1E3]">{page.honest.h}</h2>
            {page.honest.p.map((para, i) => (
              <p key={i} className="mt-4 text-ink-invert-muted">
                {para}
              </p>
            ))}
          </div>
        </Container>
      </Section>

      {/* Calculators */}
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

      {/* FAQ */}
      <Section surface="paper" tier="minor" className="!pt-0">
        <Container>
          <div className="mb-8 max-w-[46ch]">
            <Eyebrow tone="dark">Common questions</Eyebrow>
            <h2 className="text-h2 text-ink">
              What people ask me about this.
            </h2>
          </div>
          <Faq items={page.faqs} />

          {page.sources?.length ? (
            <div className="measure mt-12">
              <h2 className="text-small font-semibold text-ink">Sources</h2>
              <p className="mt-2 text-small text-ink-muted">
                Figures on this page verified {page.verified}. Rules change —
                if you are reading this long after that date, confirm before
                relying on it.
              </p>
              <ul className="mt-3 space-y-1.5">
                {page.sources.map((s) => (
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

      {/* Related + CTA */}
      <Section surface="ground">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
            <div>
              <Eyebrow>Related</Eyebrow>
              <h2 className="text-h2 text-[#F6F1E3]">
                Situations that often overlap.
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

            <div className="rounded-[6px] border border-rule-invert bg-ground-raised p-8">
              <h2 className="font-display text-h3 text-ink-invert">
                Not sure where you fit?
              </h2>
              <p className="mt-3 text-ink-invert-muted">
                That is genuinely the most common starting point. Twenty
                minutes on the phone will tell you more than another hour of
                reading, and there is no credit check to have that
                conversation.
              </p>
              <dl className="mt-7 space-y-3 text-small">
                <div>
                  <dt className="text-ink-invert-muted">Call or text</dt>
                  <dd>
                    <a
                      href={site.contact.phoneHref}
                      className="font-mono text-lede text-brass-light hover:underline"
                    >
                      {site.contact.phone}
                    </a>
                  </dd>
                </div>
              </dl>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button href={site.links.book} external>
                  Book a call
                </Button>
                <Button href="/contact" variant="outline">
                  Send a message
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
