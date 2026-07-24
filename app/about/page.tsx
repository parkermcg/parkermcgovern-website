import Image from "next/image";
import { site, formattedAddress } from "@/lib/site";
import { pageMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";

export const metadata = pageMetadata({
  title: "About Parker McGovern — Licensed Mortgage Agent",
  description:
    "Parker McGovern is a FSRA-licensed Mortgage Agent (Level 2) with Mortgagebroker.ca, based in Richmond Hill and serving the Greater Toronto Area.",
  path: "/about",
});

/**
 * E-E-A-T anchor. Every claim here is verifiable and traceable to
 * lib/site.ts. No origin story, no years-in-industry figure — neither has
 * been supplied, and inventing either is exactly what CLAUDE.md §4 forbids.
 */

const principles = [
  {
    title: "Independent by structure, not by promise",
    body: "I'm not employed by a lender, so I have no product to push and no internal quota to hit. Your application goes to the lenders that fit it, and if that turns out to be the bank you're already with, that's what I'll tell you.",
  },
  {
    title: "Available when you're actually free",
    body: `Most people look at this on evenings and weekends, so that's when I work too — ${site.hoursLabel.toLowerCase()}. You get me directly, not a call centre or an assistant.`,
  },
  {
    title: "Still here after closing",
    body: "I track your renewal date and what rates are doing, and I get in touch before your lender's letter arrives. A mortgage is a relationship that lasts decades, not a single transaction.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Straight answers about the biggest loan you'll ever take."
        lede="I'm a licensed mortgage agent in Richmond Hill. My job is to show you what the lender market will actually do for you, explain the trade-offs in plain language, and let you make the call."
      >
        <Button href={site.links.book} external>
          Book a call
        </Button>
        <Button href="/contact" variant="outline">
          Send a message
        </Button>
      </PageHero>

      {/* Bio */}
      <Section surface="paper">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="relative aspect-square w-full max-w-[340px] overflow-hidden rounded-full ring-1 ring-brass/60">
                <Image
                  src="/parker-mcgovern.png"
                  alt={`${site.name}, ${site.role}`}
                  fill
                  sizes="(max-width: 1024px) 80vw, 340px"
                  className="object-cover object-top"
                />
              </div>
              <p className="mt-5 max-w-[340px] text-center text-small text-ink-muted">
                {site.name}
                <br />
                {site.role}
              </p>
            </div>

            <div className="measure">
              <Eyebrow tone="dark">Background</Eyebrow>
              <h2 className="text-h2 text-ink">
                A real estate degree, then the lending side of it.
              </h2>
              <p className="mt-6 text-ink-muted">
                I studied Real Estate &amp; Housing at the University of Guelph
                — one of the few commerce programs in the country built
                specifically around property, financing and housing markets
                rather than treating them as a footnote to general business.
              </p>
              <p className="mt-4 text-ink-muted">
                That background is the reason I approach a file the way I do. A
                mortgage isn&apos;t a rate you shop for once. It&apos;s a
                structure — term, amortisation, prepayment terms, penalty
                calculation, portability — and the parts nobody explains at the
                branch are usually the parts that cost you money three years
                later when your circumstances change.
              </p>
              <p className="mt-4 text-ink-muted">
                I&apos;m licensed as a Mortgage Agent Level 2 and registered
                with {site.licence.brokerageName}. I work with first-time
                buyers, people coming up to renewal, self-employed borrowers
                whose income doesn&apos;t fit a bank&apos;s template, and
                investors — across Richmond Hill and the wider Greater Toronto
                Area.
              </p>

              <dl className="mt-10 divide-y divide-rule border-y border-rule">
                {[
                  { t: "Licence", d: `Mortgage Agent Level 2 · #${site.licence.agent}` },
                  { t: "Brokerage", d: `${site.licence.brokerageName} · Brokerage Licence #${site.licence.brokerage}` },
                  { t: "Regulator", d: site.licence.regulator },
                  { t: "Education", d: `${site.credentials.degree}, ${site.credentials.school}` },
                  { t: "Based in", d: `${formattedAddress} — serving the GTA` },
                ].map((row) => (
                  <div key={row.t} className="grid gap-1 py-4 sm:grid-cols-[130px_1fr] sm:gap-4">
                    <dt className="text-small font-semibold text-ink">{row.t}</dt>
                    <dd className="text-small text-ink-muted">{row.d}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </Section>

      {/* How I work */}
      <Section surface="ground">
        <Container>
          <div className="mb-12 max-w-[46ch]">
            <Eyebrow>How I work</Eyebrow>
            <h2 className="text-h2 text-[#F6F1E3]">
              Three things you can hold me to.
            </h2>
          </div>
          <ul className="grid gap-6 md:grid-cols-3">
            {principles.map((p) => (
              <li
                key={p.title}
                className="rounded-[6px] border border-rule-invert bg-ground-raised p-7"
              >
                <h3 className="font-display text-h3 text-ink-invert">
                  {p.title}
                </h3>
                <p className="mt-3 text-small text-ink-invert-muted">{p.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Reviews */}
      <Section surface="paper" tier="minor">
        <Container>
          <div className="mx-auto max-w-[52ch] text-center">
            <p className="font-mono text-figure-lg text-ink">
              {site.reviews.rating.toFixed(1)} ★
            </p>
            <p className="mt-2 text-ink-muted">
              Average across {site.reviews.count} client reviews on Google.
            </p>
            {site.links.gbp ? (
              <Button
                href={site.links.gbp}
                external
                variant="quiet"
                className="mt-6"
              >
                Read the reviews
              </Button>
            ) : null}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section surface="ground" tier="minor">
        <Container>
          <div className="mx-auto max-w-[46ch] text-center">
            <h2 className="text-h2 text-[#F6F1E3]">
              Worth a conversation?
            </h2>
            <p className="mt-4 text-ink-invert-muted">
              Twenty minutes, no credit check, no obligation. If you&apos;re
              better off where you are, I&apos;ll say so.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
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
    </>
  );
}
