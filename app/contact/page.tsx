import { site, formattedAddress } from "@/lib/site";
import { pageMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { LeadForm } from "@/components/sections/LeadForm";

export const metadata = pageMetadata({
  title: "Contact Parker McGovern — Mortgage Agent, Richmond Hill",
  description:
    "Call, email or send a message. Licensed mortgage agent in Richmond Hill serving the Greater Toronto Area. Open seven days a week.",
  path: "/contact",
});

const next = [
  {
    n: "01",
    t: "I read it myself",
    d: "Messages come straight to me. Nobody else screens them and you won't be added to a mailing list.",
  },
  {
    n: "02",
    t: "You hear back within a business day",
    d: "Usually much sooner. If it's urgent, calling or texting is faster than the form.",
  },
  {
    n: "03",
    t: "We talk it through",
    d: "Twenty minutes on your situation and what your options are. No credit check to have that conversation.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell me what you're trying to do."
        lede="Renewing, buying a first place, self-employed and tired of being told no — whatever it is, start here. No obligation and no credit check to have a conversation."
      />

      <Section surface="ground" className="!pt-0">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
            {/* Direct details */}
            <div>
              <h2 className="text-h3 text-[#F6F1E3]">Reach me directly</h2>

              <dl className="mt-7 divide-y divide-rule-invert border-y border-rule-invert">
                <div className="py-5">
                  <dt className="text-small text-ink-invert-muted">
                    Call or text
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={site.contact.phoneHref}
                      className="font-mono text-lede text-brass-light hover:underline"
                    >
                      {site.contact.phone}
                    </a>
                  </dd>
                </div>
                <div className="py-5">
                  <dt className="text-small text-ink-invert-muted">Email</dt>
                  <dd className="mt-1">
                    <a
                      href={site.contact.emailHref}
                      className="break-all text-ink-invert hover:text-brass-light"
                    >
                      {site.contact.email}
                    </a>
                  </dd>
                </div>
                <div className="py-5">
                  <dt className="text-small text-ink-invert-muted">Office</dt>
                  <dd className="mt-1 text-ink-invert">{formattedAddress}</dd>
                </div>
                <div className="py-5">
                  <dt className="text-small text-ink-invert-muted">Hours</dt>
                  <dd className="mt-1 text-ink-invert">{site.hoursLabel}</dd>
                  <dd className="mt-1 text-small text-ink-invert-muted">
                    Open seven days a week.
                  </dd>
                </div>
              </dl>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={site.links.book} external>
                  Book a call
                </Button>
                <Button href="/apply" variant="outline">
                  Start an application
                </Button>
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="mb-7 text-h3 text-[#F6F1E3]">Send a message</h2>
              <LeadForm />
            </div>
          </div>
        </Container>
      </Section>

      {/* What happens next */}
      <Section surface="paper">
        <Container>
          <div className="mb-12 max-w-[46ch]">
            <Eyebrow tone="dark">What happens next</Eyebrow>
            <h2 className="text-h2 text-ink">
              No sales sequence, no drip campaign.
            </h2>
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
    </>
  );
}
