import Image from "next/image";
import Link from "next/link";
import { site, calculators } from "@/lib/site";
import { servicePages } from "@/lib/content/services";
import { pageMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { LeadForm } from "@/components/sections/LeadForm";
import { Reviews } from "@/components/sections/Reviews";
import { featuredReviews } from "@/lib/content/reviews";

export const metadata = pageMetadata({
  title: `Mortgage Agent in Richmond Hill — ${site.name}`,
  description:
    "Licensed Ontario mortgage agent in Richmond Hill. One application goes to more than 40 lenders, so you can compare your renewal, purchase or refinance options before you commit.",
  path: "/",
});

const steps = [
  {
    n: "01",
    title: "A first call",
    body: "Twenty minutes on your goals, income and timeline. No documents needed yet, and nothing is filed anywhere.",
  },
  {
    n: "02",
    title: "Your real number",
    body: "I put your file to the lenders that fit it and come back with what you actually qualify for, in writing.",
  },
  {
    n: "03",
    title: "You decide",
    body: "Offers side by side, with the trade-offs explained. Including when staying where you are is the better call.",
  },
  {
    n: "04",
    title: "Underwriting",
    body: "I handle the lender conditions and paperwork so you aren't chasing anyone for documents.",
  },
  {
    n: "05",
    title: "Closing",
    body: "Instructions go to your lawyer ahead of time so the funds are in place on the day.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Section surface="ground" className="relative overflow-hidden">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="animate-rise">
                <Eyebrow>
                  Licensed mortgage agent · {site.address.locality}
                </Eyebrow>
              </div>
              <h1
                className="animate-rise text-display text-[#F6F1E3]"
                style={{ animationDelay: "60ms" }}
              >
                Your bank makes one offer. I&apos;ll show you the rest.
              </h1>
              <p
                className="animate-rise mt-6 max-w-[52ch] text-lede text-ink-invert-muted"
                style={{ animationDelay: "120ms" }}
              >
                One application goes to more than 40 lenders — banks, credit
                unions and monoline lenders — so you can see what you actually
                qualify for before you commit to anything.
              </p>
              <div
                className="animate-rise mt-9 flex flex-wrap gap-3"
                style={{ animationDelay: "180ms" }}
              >
                <Button href={site.links.book} external>
                  Book a call
                </Button>
                <Button href={site.links.apply} external variant="outline">
                  Start my application
                </Button>
              </div>
            </div>

            <div className="justify-self-center">
              <div className="relative aspect-square w-[min(320px,72vw)] overflow-hidden rounded-full ring-1 ring-brass/70">
                <Image
                  src="/parker-mcgovern.jpg"
                  alt={`${site.name}, ${site.role}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 72vw, 320px"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Credentials */}
      <Section surface="ground" tier="minor" className="border-y border-rule-invert !py-0">
        <Container>
          <dl className="grid divide-rule-invert sm:grid-cols-2 sm:divide-x lg:grid-cols-4">
            {[
              { t: "Level 2", d: `Licensed agent · #${site.licence.agent}` },
              { t: "B.Comm", d: "Real Estate & Housing, Guelph" },
              { t: `${site.reviews.rating.toFixed(1)} ★`, d: `From ${site.reviews.count} Google reviews` },
              { t: site.address.locality, d: "Serving the Greater Toronto Area" },
            ].map((s, i) => (
              <div
                key={s.t}
                className={`border-rule-invert py-7 sm:px-7 ${i > 0 ? "border-t sm:border-t-0" : ""} ${i === 0 ? "sm:pl-0" : ""}`}
              >
                <dt className="font-mono text-[1.35rem] text-[#F6F1E3]">{s.t}</dt>
                <dd className="mt-1 text-small text-ink-invert-muted">{s.d}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      {/* Reviews — sits directly after the hero block, before services */}
      <Reviews
        items={featuredReviews(6)}
        heading="Forty-five people have been through this with me."
        surface="paper"
      />

      {/* Services */}
      <Section surface="paper">
        <Container>
          <div className="mb-12 max-w-[46ch]">
            <Eyebrow tone="dark">What I help with</Eyebrow>
            <h2 className="text-h2 text-ink">
              Six situations, and what changes in each one.
            </h2>
          </div>
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {servicePages.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/mortgages/${s.slug}`}
                  className="group flex h-full flex-col rounded-[6px] border border-rule bg-paper-raised p-7 transition-colors hover:border-brass"
                >
                  <h3 className="text-h3 text-ink">{s.eyebrow}</h3>
                  <p className="mt-3 text-ink-muted">{s.summary}</p>
                  <span className="mt-5 text-small font-semibold text-brass group-hover:underline">
                    Read more →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Calculators */}
      <Section surface="ground">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <Eyebrow>Run the numbers</Eyebrow>
              <h2 className="text-h2 text-[#F6F1E3]">
                Five calculators, built for Ontario rules specifically.
              </h2>
              <p className="mt-5 max-w-[44ch] text-ink-invert-muted">
                Most calculators online use American formulas. Canadian
                mortgages compound semi-annually, and Ontario has its own land
                transfer tax with an extra charge inside Toronto. These account
                for both.
              </p>
              <Button href="/calculators" variant="outline" className="mt-8">
                See all calculators
              </Button>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {calculators.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/calculators/${c.slug}`}
                    className="group flex h-full flex-col rounded-[6px] border border-rule-invert bg-ground-raised p-6 transition-colors hover:border-brass-light"
                  >
                    <span className="font-display text-[1.15rem] font-semibold text-ink-invert">
                      {c.title}
                    </span>
                    <span className="mt-2 text-small text-ink-invert-muted">
                      {c.blurb}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section surface="paper">
        <Container>
          <div className="mb-12 max-w-[46ch]">
            <Eyebrow tone="dark">How it works</Eyebrow>
            <h2 className="text-h2 text-ink">From first call to closing day.</h2>
          </div>
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((s) => (
              <li key={s.n}>
                <span
                  aria-hidden="true"
                  className="grid h-11 w-11 place-items-center rounded-full font-mono text-[0.95rem] text-brass ring-1 ring-brass/50"
                >
                  {s.n}
                </span>
                <h3 className="mt-4 font-display text-[1.15rem] font-semibold text-ink">
                  {s.title}
                </h3>
                <p className="mt-2 text-small text-ink-muted">{s.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* Contact */}
      <Section surface="ground" id="contact">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
            <div>
              <Eyebrow>Get in touch</Eyebrow>
              <h2 className="text-h2 text-[#F6F1E3]">
                Tell me what you&apos;re trying to do.
              </h2>
              <p className="mt-5 max-w-[44ch] text-ink-invert-muted">
                No obligation and no credit check to have a conversation. If
                it turns out you&apos;re better off where you are, I&apos;ll
                tell you that.
              </p>

              <dl className="mt-9 space-y-4 text-small">
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
                <div>
                  <dt className="text-ink-invert-muted">Email</dt>
                  <dd>
                    <a
                      href={site.contact.emailHref}
                      className="text-ink-invert hover:text-brass-light"
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

            <LeadForm />
          </div>
        </Container>
      </Section>
    </>
  );
}
