import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";

export const metadata = pageMetadata({
  title: "Start your mortgage application",
  description:
    "What you'll need, how long it takes and what happens after you submit. Secure online mortgage application through Parker McGovern, licensed Ontario mortgage agent.",
  path: "/apply",
});

/**
 * Framing page rather than a bare external link. The application is a
 * significant commitment — sending people into a third-party form with no
 * context is where applications get abandoned. Deviation from the /book
 * treatment is deliberate: Calendly is low-commitment and self-explanatory,
 * so those CTAs still link out directly.
 */

const needed = [
  {
    t: "Who you are",
    d: "Name, date of birth, current address and how long you've lived there.",
  },
  {
    t: "What you earn",
    d: "Employer and income. If you're self-employed, your last two years of tax documents rather than pay stubs.",
  },
  {
    t: "What you owe",
    d: "Other mortgages, car loans, lines of credit, student loans and credit card balances.",
  },
  {
    t: "What you own",
    d: "Down payment source, savings, investments and any property you already hold.",
  },
];

const after = [
  {
    n: "01",
    t: "I review it the same day",
    d: "In most cases within a few hours. If something's missing I'll come back to you rather than guess.",
  },
  {
    n: "02",
    t: "I match it to lenders",
    d: "Your file goes to the lenders whose criteria it actually fits — not a blanket submission everywhere.",
  },
  {
    n: "03",
    t: "You get real numbers",
    d: "What you qualify for and on what terms, in writing, with the trade-offs explained.",
  },
];

export default function ApplyPage() {
  return (
    <>
      <PageHero
        eyebrow="Get started"
        title="Start your application."
        lede="The secure application takes about fifteen minutes. It goes straight to me, and nothing is submitted to any lender until we've spoken about what makes sense for you."
      >
        <Button href={site.links.apply} external>
          Open the application
        </Button>
        <Button href={site.links.book} external variant="outline">
          I'd rather talk first
        </Button>
      </PageHero>

      {/* What you'll need */}
      <Section surface="paper">
        <Container>
          <div className="mb-12 max-w-[46ch]">
            <Eyebrow tone="dark">Before you start</Eyebrow>
            <h2 className="text-h2 text-ink">What you&apos;ll need to hand.</h2>
            <p className="mt-5 text-ink-muted">
              You don&apos;t need documents yet — just the details. Uploading
              paperwork comes later, once we know which lender we&apos;re
              working with.
            </p>
          </div>
          <ul className="grid gap-6 sm:grid-cols-2">
            {needed.map((n) => (
              <li
                key={n.t}
                className="rounded-[6px] border border-rule bg-paper-raised p-7"
              >
                <h3 className="font-display text-h3 text-ink">{n.t}</h3>
                <p className="mt-3 text-small text-ink-muted">{n.d}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* What happens after */}
      <Section surface="ground">
        <Container>
          <div className="mb-12 max-w-[46ch]">
            <Eyebrow>After you submit</Eyebrow>
            <h2 className="text-h2 text-[#F6F1E3]">
              You&apos;re not committing to anything yet.
            </h2>
          </div>
          <ol className="grid gap-8 md:grid-cols-3">
            {after.map((s) => (
              <li key={s.n}>
                <span
                  aria-hidden="true"
                  className="grid h-11 w-11 place-items-center rounded-full font-mono text-[0.95rem] text-brass-light ring-1 ring-brass/50"
                >
                  {s.n}
                </span>
                <h3 className="mt-4 font-display text-[1.15rem] font-semibold text-ink-invert">
                  {s.t}
                </h3>
                <p className="mt-2 text-small text-ink-invert-muted">{s.d}</p>
              </li>
            ))}
          </ol>

          <div className="mt-14 rounded-[6px] border border-rule-invert bg-ground-raised p-7 sm:p-8">
            <h3 className="font-display text-h3 text-ink-invert">
              Does applying affect my credit score?
            </h3>
            <p className="mt-3 max-w-[68ch] text-ink-invert-muted">
              Submitting this application does not itself pull your credit. A
              credit check happens later, only once we&apos;ve agreed to move
              forward with a specific lender, and I&apos;ll tell you before it
              happens. Multiple mortgage enquiries inside a short window are
              treated as a single check by Canadian credit bureaus, so shopping
              your rate properly does not compound the impact.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button href={site.links.apply} external>
              Open the application
            </Button>
            <Button href="/contact" variant="outline">
              Ask a question first
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
