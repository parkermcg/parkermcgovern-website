import { site, formattedAddress } from "@/lib/site";
import { pageMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/sections/PageHero";

export const metadata = pageMetadata({
  title: "Privacy policy",
  description:
    "How Parker McGovern collects, uses and protects personal information submitted through parkermcgovern.ca.",
  path: "/privacy",
});

/**
 * Describes exactly what this site does today — nothing aspirational.
 *
 * IMPORTANT: this is a plain-language policy drafted to match the site's
 * actual behaviour. It has NOT been reviewed by Mortgagebroker.ca compliance
 * or a lawyer. Flagged in CLAUDE.md §10 — must be reviewed before the
 * rebuild goes live on the production domain.
 *
 * If the site's data handling changes (analytics added, CRM integrated,
 * chat widget installed), this page must change with it.
 */

const LAST_UPDATED = "24 July 2026";

const sections = [
  {
    h: "What I collect",
    p: [
      "If you fill in a form on this site, I collect the name, email address, phone number and message you provide. That's all the form asks for, and all of it is optional in the sense that you're free not to use the form and to call or email instead.",
      "My server also briefly processes the IP address of anyone submitting a form. This is used only to limit how many submissions can come from one source in a short window, which stops automated abuse. It is held in memory, not written to a database, and is discarded when the server restarts.",
    ],
  },
  {
    h: "Why I collect it",
    p: [
      "To reply to you, and to have the conversation you got in touch about. That's the only purpose.",
      "I do not use these details for marketing. There is no newsletter, no automated follow-up sequence and no retargeting. If you contact me and we don't end up working together, you won't hear from me again unless you get back in touch.",
    ],
  },
  {
    h: "Who else sees it",
    p: [
      "Your message is delivered to me by an email service provider, and a copy may be stored in a private record I keep of enquiries so that nothing gets lost. These providers process the information on my behalf and are not permitted to use it for their own purposes.",
      "I do not sell your information, and I do not share it with lenders, brokerages or anyone else without your knowledge. If we go ahead with an application, information is shared with specific lenders — but only with your consent, and I'll tell you exactly who at the time.",
    ],
  },
  {
    h: "Cookies and tracking",
    p: [
      "This site does not set advertising or tracking cookies, and does not run third-party analytics or advertising scripts.",
      "The site is hosted on Vercel, which processes standard server request information — such as IP address and browser type — for security and to keep the site running.",
    ],
  },
  {
    h: "Links to other services",
    p: [
      "Booking a call and starting an application both take you to third-party services operated by other companies. Once you're on those sites, their own privacy policies apply, not this one. I'd encourage you to read them before entering anything sensitive.",
      "Never send financial account numbers, your Social Insurance Number, or copies of identity documents through the contact form on this site. It isn't built for that. When the time comes to share documents, I'll direct you to the secure application system.",
    ],
  },
  {
    h: "How long it's kept",
    p: [
      "Enquiries that don't lead to an application are kept only as long as is useful for following up, and are deleted after that.",
      "If we do proceed, mortgage records are subject to record-keeping obligations that apply to licensed mortgage brokerages in Ontario, and are retained accordingly by the brokerage.",
    ],
  },
  {
    h: "Your rights",
    p: [
      "You can ask me what personal information I hold about you, ask for it to be corrected, or ask me to delete it. Email or call and I'll deal with it.",
      "If you're not satisfied with how I've handled your information, you can raise it with the Office of the Privacy Commissioner of Canada.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="What happens to your information."
        lede="Short version: I use what you send me to reply to you, I don't sell it, and I don't market to you."
      />

      <Section surface="paper">
        <Container>
          <div className="measure">
            <p className="text-small text-ink-muted">
              Last updated {LAST_UPDATED}
            </p>

            {sections.map((s) => (
              <div key={s.h} className="mt-12 first:mt-10">
                <h2 className="text-h3 text-ink">{s.h}</h2>
                {s.p.map((para, i) => (
                  <p key={i} className="mt-4 text-ink-muted">
                    {para}
                  </p>
                ))}
              </div>
            ))}

            <div className="mt-12 rounded-[6px] border border-rule bg-paper-raised p-7">
              <h2 className="text-h3 text-ink">Getting in touch about privacy</h2>
              <p className="mt-4 text-ink-muted">
                {site.name}, {site.role}
                <br />
                {site.licence.brokerageName} · Brokerage Licence #
                {site.licence.brokerage}
                <br />
                {formattedAddress}
              </p>
              <p className="mt-4 text-ink-muted">
                <a
                  href={site.contact.emailHref}
                  className="text-brass underline underline-offset-2"
                >
                  {site.contact.email}
                </a>
                {" · "}
                <a
                  href={site.contact.phoneHref}
                  className="text-brass underline underline-offset-2"
                >
                  {site.contact.phone}
                </a>
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
