import Link from "next/link";
import { notFound } from "next/navigation";
import { site } from "@/lib/site";
import { calculatorPages, getCalculator } from "@/lib/content/calculators";
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

import { PaymentCalculator } from "@/components/calculators/PaymentCalculator";
import { LandTransferTaxCalculator } from "@/components/calculators/LandTransferTaxCalculator";
import { AffordabilityCalculator } from "@/components/calculators/AffordabilityCalculator";
import { CmhcCalculator } from "@/components/calculators/CmhcCalculator";
import { StressTestCalculator } from "@/components/calculators/StressTestCalculator";

const TOOLS: Record<string, React.ComponentType> = {
  "mortgage-payment": PaymentCalculator,
  "ontario-land-transfer-tax": LandTransferTaxCalculator,
  affordability: AffordabilityCalculator,
  "cmhc-insurance": CmhcCalculator,
  "stress-test": StressTestCalculator,
};

export function generateStaticParams() {
  return calculatorPages.map((c) => ({ slug: c.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getCalculator(slug);
  if (!page) return {};
  return pageMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/calculators/${page.slug}`,
  });
}

export default async function CalculatorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getCalculator(slug);
  if (!page) notFound();

  const Tool = TOOLS[page.slug];
  const trail = [
    { name: "Home", path: "/" },
    { name: "Calculators", path: "/calculators" },
    { name: page.eyebrow, path: `/calculators/${page.slug}` },
  ];
  const related = page.related
    .map((s) => servicePages.find((p) => p.slug === s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p && !p.draft));

  return (
    <>
      <JsonLd data={[breadcrumbSchema(trail), faqSchema(page.faqs)]} />
      <Breadcrumbs trail={trail} />

      {/* Explanation is server-rendered above the tool, so the page ranks on
          its content rather than on a widget a crawler cannot execute. */}
      <Section surface="ground" tier="minor">
        <Container>
          <div className="max-w-[60ch]">
            <Eyebrow>{page.eyebrow}</Eyebrow>
            <h1 className="text-h1 text-[#F6F1E3]">{page.title}</h1>
            <p className="mt-6 text-lede text-ink-invert-muted">{page.lede}</p>
            {page.intro.map((p, i) => (
              <p key={i} className="mt-4 text-ink-invert-muted">
                {p}
              </p>
            ))}
          </div>
        </Container>
      </Section>

      {/* Tool */}
      <Section surface="ground" tier="minor" className="!pt-4">
        <Container>{Tool ? <Tool /> : null}</Container>
      </Section>

      {/* Method */}
      <Section surface="paper">
        <Container>
          <div className="mb-10 max-w-[46ch]">
            <Eyebrow tone="dark">How this works</Eyebrow>
            <h2 className="text-h2 text-ink">The maths, in plain language.</h2>
          </div>
          {page.method.map((m) => (
            <div key={m.h} className="measure mt-10 first:mt-0">
              <h3 className="font-display text-h3 text-ink">{m.h}</h3>
              {m.p.map((para, i) => (
                <p key={i} className="mt-3 text-ink-muted">
                  {para}
                </p>
              ))}
            </div>
          ))}
        </Container>
      </Section>

      {/* FAQ */}
      <Section surface="paper" tier="minor" className="!pt-0">
        <Container>
          <div className="mb-8 max-w-[46ch]">
            <Eyebrow tone="dark">Common questions</Eyebrow>
            <h2 className="text-h2 text-ink">About this calculator.</h2>
          </div>
          <Faq items={page.faqs} />
        </Container>
      </Section>

      {/* Conversion + related */}
      <Section surface="ground">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-[6px] border border-rule-invert bg-ground-raised p-8">
              <h2 className="font-display text-h3 text-ink-invert">
                Want these numbers checked by a person?
              </h2>
              <p className="mt-3 text-ink-invert-muted">
                A calculator does not know your credit, your income structure or
                which lenders would actually take your file. Twenty minutes on
                the phone will tell you what this cannot.
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
              <Eyebrow>Read next</Eyebrow>
              <ul className="mt-6 divide-y divide-rule-invert border-y border-rule-invert">
                {related.map((s) => (
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
          </div>
        </Container>
      </Section>
    </>
  );
}
