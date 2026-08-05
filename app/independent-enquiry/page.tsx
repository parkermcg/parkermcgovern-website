import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { LeadForm } from "@/components/sections/LeadForm";

/**
 * Independent enquiry — a dedicated intake for people who already have an
 * offer, a renewal letter or an existing mortgage and want it read by someone
 * who is not the lender selling it.
 *
 * Uses the same pipeline as the homepage "Get in touch" block: <LeadForm />
 * posting to /api/lead. No new intake mechanism, so lead delivery, validation,
 * honeypot and rate limiting stay in exactly one place (CLAUDE.md §9).
 *
 * Deliberately distinct from /contact, which is general "reach me" intent with
 * NAP and office details. This page has one job: get a specific document or
 * number in front of Parker for review. If the two ever converge in wording,
 * they should be merged — CLAUDE.md §5 cannibalization test.
 *
 * Compliance: no rates, no payment examples, and no claim about how the
 * conversation is compensated. It states only that there is no charge and no
 * credit check to have it, which is true and already established sitewide.
 * Nothing here asserts a better outcome is available — the closing block says
 * the opposite where it applies (CLAUDE.md §4, §6).
 */

export const metadata = pageMetadata({
  title: "Independent Mortgage Enquiry — Second Opinion in Ontario",
  description:
    "Have a renewal letter, pre-approval or existing mortgage reviewed by a licensed agent who is not the lender selling it. No obligation, no credit check to have the conversation.",
  path: "/independent-enquiry",
});

const send = [
  {
    t: "A renewal letter",
    d: "The rate your current lender is offering, and the date it has to be signed by. That letter is an opening offer, not a final one.",
  },
  {
    t: "A pre-approval or commitment",
    d: "What a bank or another broker has put in front of you. Rate, term, and any conditions attached to it.",
  },
  {
    t: "Just your numbers",
    d: "No paperwork needed. Your balance, roughly when the term ends, and what you think the property is worth is enough to start.",
  },
];

const back = [
  {
    n: "01",
    t: "A plain read of what you have",
    d: "What the offer actually says, including anything in it that costs you later — prepayment terms, portability, how the penalty would be calculated if you left early.",
  },
  {
    n: "02",
    t: "What else is available to you",
    d: `Your file measured against what ${site.lenderCount} lenders would do with it, so you can see whether the offer in front of you is competitive or just convenient.`,
  },
  {
    n: "03",
    t: "A straight recommendation",
    d: "Including staying exactly where you are. If switching would cost more than it saves once penalties and fees are counted, that is what I will tell you.",
  },
];

export default function IndependentEnquiryPage() {
  return (
    <>
      <PageHero
        eyebrow="Independent enquiry"
        title="Get an independent read on what you've been offered."
        lede="Your lender's offer is written by the party that benefits from you accepting it. Send it here and I'll tell you what it actually says, what else you'd qualify for, and whether moving is worth it — before anything is signed."
      >
        <Button href={site.links.book} external>
          Book a call instead
        </Button>
      </PageHero>

      {/* Same intake system as the homepage Get in touch block */}
      <Section surface="ground" className="!pt-0">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
            <div>
              <h2 className="text-h3 text-[#F6F1E3]">
                What to send me
              </h2>
              <p className="mt-4 max-w-[46ch] text-ink-invert-muted">
                Any one of these is enough. You do not need to have decided
                anything, and nothing gets filed with a lender because you
                asked a question.
              </p>

              <dl className="mt-8 divide-y divide-rule-invert border-y border-rule-invert">
                {send.map((s) => (
                  <div key={s.t} className="py-5">
                    <dt className="font-display text-[1.15rem] font-semibold text-ink-invert">
                      {s.t}
                    </dt>
                    <dd className="mt-1.5 text-small text-ink-invert-muted">
                      {s.d}
                    </dd>
                  </div>
                ))}
              </dl>

              <dl className="mt-8 space-y-4 text-small">
                <div>
                  <dt className="text-ink-invert-muted">
                    Prefer to talk it through
                  </dt>
                  <dd>
                    <a
                      href={site.contact.phoneHref}
                      className="font-mono text-lede text-brass-light hover:underline"
                    >
                      {site.contact.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-ink-invert-muted">Or email directly</dt>
                  <dd>
                    <a
                      href={site.contact.emailHref}
                      className="break-all text-ink-invert hover:text-brass-light"
                    >
                      {site.contact.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-ink-invert-muted">Hours</dt>
                  <dd className="text-ink-invert">{site.hoursLabel}</dd>
                </div>
              </dl>
            </div>

            <div>
              <h2 className="mb-7 text-h3 text-[#F6F1E3]">Send your enquiry</h2>
              <LeadForm />
            </div>
          </div>
        </Container>
      </Section>

      {/* What the review actually produces */}
      <Section surface="paper">
        <Container>
          <div className="mb-12 max-w-[48ch]">
            <Eyebrow tone="dark">What you get back</Eyebrow>
            <h2 className="text-h2 text-ink">
              An opinion, not a pitch.
            </h2>
          </div>
          <ol className="grid gap-8 md:grid-cols-3">
            {back.map((s) => (
              <li key={s.n}>
                <span
                  aria-hidden="true"
                  className="grid h-11 w-11 place-items-center rounded-full font-mono text-[0.95rem] text-brass ring-1 ring-brass/50"
                >
                  {s.n}
                </span>
                <h3 className="mt-4 font-display text-[1.15rem] font-semibold text-ink">
                  {s.t}
                </h3>
                <p className="mt-2 text-small text-ink-muted">{s.d}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* The honest case — consistent with every money page */}
      <Section surface="ground" tier="minor">
        <Container>
          <div className="measure">
            <Eyebrow>Straight talk</Eyebrow>
            <h2 className="text-h2 text-[#F6F1E3]">
              Sometimes the answer is that your offer is fine.
            </h2>
            <p className="mt-4 text-ink-invert-muted">
              A second opinion is only worth having if the person giving it will
              tell you there is nothing to do. Often the incumbent lender&apos;s
              offer is genuinely competitive, or the penalty to leave mid-term
              swallows the saving, or you are close enough to maturity that
              waiting costs nothing.
            </p>
            <p className="mt-4 text-ink-invert-muted">
              In those cases I will say so and you will have lost nothing but
              the twenty minutes. That is the whole point of asking someone who
              is not the party selling you the mortgage.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
