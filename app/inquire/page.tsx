import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { LeadForm } from "@/components/sections/LeadForm";

/**
 * Inquire — the low-commitment intake. Name, phone and a short message only.
 *
 * Deliberately asks for NO documents. Parker's document collection runs
 * through his own process, and duplicating it here would create a second,
 * worse intake path. Do not add file uploads, renewal-letter requests or
 * "send me your commitment" copy to this page.
 *
 * Uses <LeadForm askEmail={false} /> posting to /api/lead — the same pipeline
 * as the homepage and /contact, so validation, honeypot, rate limiting and
 * both outcome states live in one place (CLAUDE.md §9).
 *
 * Compliance: no rates, no payment examples, no claim about compensation.
 * Only that there is no charge and no credit check to have a conversation,
 * which is established sitewide. Closes on the honest case (CLAUDE.md §4, §6).
 */

export const metadata = pageMetadata({
  title: "Inquire — Ontario Mortgage Questions",
  description:
    "Ask a licensed Ontario mortgage agent a question. Name, number and a short message — no documents, no obligation, and no credit check to have the conversation.",
  path: "/inquire",
});

const next = [
  {
    n: "01",
    t: "You reach me, not a call centre",
    d: "Messages come straight to me. Nobody screens them, and you will not be handed to someone else halfway through.",
  },
  {
    n: "02",
    t: "A straight answer to what you asked",
    d: `Measured against what ${site.lenderCount} lenders would do with your situation, rather than what one lender happens to be selling this month.`,
  },
  {
    n: "03",
    t: "No follow-up sequence",
    d: "No drip campaign, no newsletter, no passing your details on. If you decide not to go ahead, you will not hear from me again.",
  },
];

export default function InquirePage() {
  return (
    <>
      <PageHero
        eyebrow="Inquire"
        title="Ask me anything about a mortgage."
        lede="No documents, no application, and no credit check to have a conversation. Leave your name, a number and a sentence about what you're trying to work out, and I'll come back to you."
      >
        <Button href={site.links.book} external>
          Book a call instead
        </Button>
      </PageHero>

      {/* Same intake pipeline as the homepage Get in touch block */}
      <Section surface="ground" className="!pt-0">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
            <div>
              <h2 className="text-h3 text-[#F6F1E3]">
                There is no wrong question here
              </h2>
              <p className="mt-4 max-w-[46ch] text-ink-invert-muted">
                Renewing in the spring and unsure whether to just sign it.
                Wondering what you could actually borrow. Turned down somewhere
                and not sure what that means. Or only starting to think about
                it and wanting to know what the first step even is.
              </p>
              <p className="mt-4 max-w-[46ch] text-ink-invert-muted">
                All of it is worth asking, and none of it commits you to
                anything. Nothing gets filed with a lender because you sent a
                message.
              </p>

              <dl className="mt-9 space-y-4 text-small">
                <div>
                  <dt className="text-ink-invert-muted">
                    Prefer to call or text
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
              <h2 className="mb-7 text-h3 text-[#F6F1E3]">Send your question</h2>
              <LeadForm askEmail={false} />
            </div>
          </div>
        </Container>
      </Section>

      {/* What happens after */}
      <Section surface="paper">
        <Container>
          <div className="mb-12 max-w-[48ch]">
            <Eyebrow tone="dark">What happens next</Eyebrow>
            <h2 className="text-h2 text-ink">An answer, not a pitch.</h2>
          </div>
          <ol className="grid gap-8 md:grid-cols-3">
            {next.map((s) => (
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
              Sometimes the answer is that you should do nothing.
            </h2>
            <p className="mt-4 text-ink-invert-muted">
              Often the offer already in front of you is genuinely competitive,
              or the penalty to move mid-term swallows the saving, or you are
              close enough to maturity that waiting costs you nothing at all.
            </p>
            <p className="mt-4 text-ink-invert-muted">
              When that is the case I will tell you, and you will have spent
              nothing but a few minutes. An answer you can act on is worth more
              than a pitch.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
