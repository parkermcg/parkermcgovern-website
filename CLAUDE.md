# CLAUDE.md — Parker McGovern Mortgage Website

Working standards for this repo. Keep current as decisions change; future sessions depend on it.

**Planning docs:** [`docs/content-inventory.md`](docs/content-inventory.md) · [`docs/sitemap-plan.md`](docs/sitemap-plan.md) · [`docs/design-plan.md`](docs/design-plan.md)

---

## 1. What this site is for

In priority order: **generate qualified leads**, **rank organically**, **educate**. Design quality serves those three; it is not a fourth goal. A beautiful page that doesn't convert has failed.

Independent FSRA-licensed agent competing against banks and national brokerages. Organic search is the primary acquisition channel.

---

## 2. Stack — do not deviate without asking

- Next.js (App Router) + TypeScript + Tailwind
- **Static by default.** Anything that must rank is server-rendered in the initial HTML. Verify with `curl` and View Source, never the browser inspector — the inspector shows the hydrated DOM and will lie to you.
- Article and service content lives in MDX / a typed content layer. **Adding an article must never require touching a component.**
- `next/image` and `next/font` throughout. No raw `<img>`, no font CDN links, no base64-embedded fonts.
- Deploys from GitHub `main` → Vercel.
- No CMS, no database, no headless backend without explicit approval.
- Minimal dependencies. Justify every package in one line. Prefer 40 lines of code over a library.

### The client-rendering trap

The prototype embedded two third-party widgets. Both looked correct in a browser and contributed **zero** indexable content:

- Elfsight reviews — client-mounted, shadow DOM, 0 reviewer names in source
- Bendigi calculators — client-mounted, 0 bytes in source

Total crawlable content for the whole prototype was **1,422 words**. Any third-party embed proposed from here gets the `curl` test before it ships.

---

## 3. Verified facts — the source of truth

Do not restate any business fact from memory. It is either here or it gets verified.

| | |
|---|---|
| Name | Parker McGovern |
| GBP listing name | **Parker McGovern Mortgage Agent** (exact — used for LocalBusiness schema) |
| Title | Mortgage Agent, Level 2 |
| Agent licence | **M21002541** |
| Brokerage | Mortgagebroker.ca |
| Brokerage licence | **12707** |
| Regulator | FSRA (Financial Services Regulatory Authority of Ontario) |
| Address | 65B West Beaver Creek Rd, Richmond Hill, ON **L4B 1Y4** |
| Phone | 647-453-1222 |
| Email | parker@mortgagebroker.ca |
| Hours | Mon–Fri 7:30am–6:00pm · Sat–Sun 12:00pm–6:00pm |
| Domain | parkermcgovern.ca (Vercel; DNS at Squarespace) |
| Booking | https://calendly.com/mortgageagent |
| Application | https://velocity.newton.ca/sso/public.php?sc=2xreedfpzly7 |
| Education | B.Comm, Real Estate & Housing — University of Guelph |
| Reviews | 45 genuine Google reviews, 5.0★ · [profile](https://share.google/v72Zg2uBHomJxQ8YE) |
| Lender panel | **40+ lenders** (verified 2026-07-25, safe to publish) |
| Reverse mortgages | Holds lender relationships for reverse mortgages, incl. **HomeEquity Bank** and **Equitable Bank** — confirmed by Parker 2026-08-26. Safe to state he arranges them. |
| Service area | Richmond Hill / York Region / GTA |

**Postal code — resolved 2026-07-27.** Was briefly inconsistent (`L4B 1K4` on GBP vs `L4B 1Y4` on the Mortgagebroker.ca team page). Parker corrected GBP to `L4B 1Y4`, so all citations now agree. Site follows `L4B 1Y4`.

**Confirmed true, safe to state:** Parker tracks client renewal dates and rate environment on an ongoing basis. Lender panel is **40+**, confirmed 2026-07-25.

---

## 4. Compliance — non-negotiable

**Approved footer wording. Use verbatim, do not paraphrase:**

> Regulatory notice: Parker McGovern is a licensed Mortgage Agent (Level 2), Lic. #M21002541, registered with Mortgagebroker.ca, Brokerage Lic. #12707, independently owned and operated, a mortgage brokerage regulated by the Financial Services Regulatory Authority of Ontario (FSRA). Rates, payments, and qualification figures shown throughout this site are estimates for illustrative purposes only, are not a commitment to lend, and are subject to change and lender approval.

**Amended 2026-08-11** at Parker's direction: "independently owned and operated" inserted after the brokerage licence number. Nothing else changed.

**Settled 2026-08-26.** Parker directed that the site's regulatory notices stay exactly as they now read. This wording is the standing approved version — do not revert it to any earlier form, and do not re-raise it as an open question.

Brokerage name, brokerage licence, and agent licence appear in the footer sitewide **and** on every page discussing rates or products.

**Never invent.** No testimonials, client names, review counts, star ratings, dollar-value stats, years of experience, mortgage volumes, lender counts, or business hours. If a number isn't in §3, it doesn't ship.

> Prototype history, kept as a guardrail: "12+ years," "$220M+ funded," "500+ mortgages since 2014," "4.9/5 rating," "18 families this month," six named testimonials, and a full set of business hours were all fabricated and later removed. Parker has roughly three years in the industry — **years-of-experience is not an available trust lever.** Trust is earned through the education content, the real reviews, and the credentials.

**Rates and figures.** No specific interest rate, APR, or payment example unless Parker supplies it. Where one appears it carries a date stamp and a rates-subject-to-change / OAC qualifier. Calculator outputs are labelled estimates *visibly, adjacent to the result* — not in a footnote.

**Review schema is prohibited.** The 45 reviews are real but hosted on Google. `AggregateRating` / `Review` markup on our own domain is outside Google's guidelines and risks a manual action. Display them, link to the profile, never mark them up.

**Primary sources only** for regulatory facts, cited on the page: CMHC, FSRA, CRA, Ontario Ministry of Finance, City of Toronto, OSFI.

---

## 5. SEO rules

**The cannibalization test:** if two pages could swap body copy without anyone noticing, they are one page. Applied before any new page is created.

**Per-town pages — rule amended 2026-08-26 at Parker's direction.** The original rule prohibited them outright as a doorway pattern. Parker asked for GTA city pages after that objection was raised; the amended rule is that an area page ships **only if it carries a mortgage topic that is genuinely different**, not the same copy with a name swapped, and **only if it states plainly what does not differ by municipality**.

Built on that basis: Toronto (Municipal Land Transfer Tax), Vaughan (pre-construction financing), Markham (condo underwriting and newcomer files), Richmond Hill (home office), Aurora & Newmarket (freehold, wells and septic — **one page, deliberately**, because split apart they would have been near-duplicates).

Still prohibited: an area page with nothing distinctive to say. If a municipality has no genuinely different mortgage content, it is covered by `areaServed` in schema and the `/service-areas` hub, not by a thin page. **No per-city property tax rates are published** — set separately by each municipality, no single authoritative source, and they would need re-verifying annually on a site with no CMS.

**Tiering.** Only the six ranked money pages in `docs/sitemap-plan.md` get standalone pages. Anything else is a section on a parent page, or ships `noindex` with a flag to Parker — never a thin page.

**E-E-A-T.** YMYL content. Every article carries a named author with credentials and licence number, a visible last-updated date, and primary-source citations.

**Per page:** one `<h1>`, semantic heading order, hand-written metadata (never templated), canonical, OG/Twitter cards, breadcrumbs.

---

## 6. Design

Full system in [`docs/design-plan.md`](docs/design-plan.md). Summary:

`--ground` `#0B1A2E` · `--ground-raised` `#14263F` · `--paper` `#FBF9F5` · `--ink` `#111F35` · `--ink-muted` `#56637A` · `--brass` `#8A6A2E` (accent, sparing) / `--brass-light` `#DFC48D` on navy

Semantic, always separate from the brand accent: `--positive` `#1C6B52` · `--caution` `#8A5F14` · `--critical` `#9C3A31`

Fraunces (display) · Public Sans (body) · IBM Plex Mono (all figures, tabular). Sections alternate navy → warm. Signature element is the **statement card**. Motion is one page-load sequence plus state transitions; no scroll reveals.

**Voice:** plain verbs, sentence case including buttons, specific over clever. Buttons say what happens — "Book a call," not "Submit." Every money page includes the honest case *against* acting; it is the strongest available trust signal and it is what E-E-A-T rewards.

---

## 7. Conventions

```
app/                 routes
components/          ui/ (primitives) · sections/ (composed blocks)
content/             guides/*.mdx · services/*.mdx
lib/                 calculators/ (pure fns + tests) · seo/ (metadata, schema)
docs/                planning artifacts
```

Calculator math lives in `lib/calculators/` as pure, unit-tested functions — never inline in components. Every rate constant carries a source URL and a verified-on date in a comment.

Small, reviewable commits with clear messages. Conventional prefixes (`feat:`, `fix:`, `docs:`, `refactor:`).

---

## 8. Definition of done

Verified, not asserted:

- `npm run build` clean · zero TS errors · zero console errors or warnings
- Lighthouse mobile: Performance ≥ 90 · Accessibility ≥ 95 · Best Practices ≥ 95 · **SEO = 100**
- Core Web Vitals green on throttled mobile
- WCAG 2.2 AA — keyboard navigable, visible focus, contrast, heading order, labelled controls, meaningful alt text
- Renders at 320 / 768 / 1440 / 1920
- **Every indexable page appears in full in `curl` output**
- Structured data validates in Google's Rich Results Test
- No placeholder copy, no lorem ipsum, no fabricated anything
- All §4 compliance elements present

---

## 9. Lead capture

Both paths live:
- **Apply** → Velocity/Newton (full application)
- **Contact form** → name, email, phone, message → emails parker@mortgagebroker.ca **and** appends to a durable store

Server-side validation, honeypot, rate limiting. Designed success *and* failure states — a silent failure is a lost client. Requires a Resend account and SPF/DKIM records on parkermcgovern.ca at Squarespace; without domain verification, mail to a `@mortgagebroker.ca` address risks spam filtering.

---

## 10. Open items

- GBP business name and phone, exactly as displayed
- Verified lender count
- Postal code conflict (§3) corrected at source
- Aurora Chamber listing under *Mortgage Architects* — stale citation, remove or correct
- ~~Resend account + DNS records~~ — **lead delivery confirmed working 2026-08-26.** Parker received a test submission sent through the live /contact form. Both the email channel and the durable store are in place; do not treat the form as unverified.
- ~~Analytics deferred~~ — **Vercel Web Analytics enabled 2026-08-26** (cookieless, no consent banner, described on /privacy). Search Console: Parker reports it is set up; no verification token is visible in DNS or page source, so the property type and coverage still need confirming — see the note below.
- ~~Search Console property type~~ — **confirmed 2026-08-26.** Parker holds a URL-prefix property for `https://www.parkermcgovern.ca/`, which matches the canonical host. Correct as-is; no Domain property needed, since the apex 308s to www and nothing terminates there. Data was still processing when confirmed.
- ~~Amended regulatory notice~~ — Parker directed on 2026-08-26 that the site's regulatory notices stay exactly as they are. Treat the current wording as settled; do not revert it.
- ~~`/privacy` legal review~~ — Parker confirmed 2026-08-26 that compliance has reviewed it. **Note:** Vercel Web Analytics was added the same day and the Cookies and analytics section was rewritten to describe it, so that specific wording postdates the review.
- **Superseded — kept for history.** **Amended regulatory notice needed a compliance nod.** "independently owned and operated" was added to the footer notice on 2026-08-11 at Parker's request (§4). The prior wording was the approved one; this edit has not been back through Mortgagebroker.ca compliance. Low risk — it is a standard brokerage disclosure and nothing else in the sentence moved — but it should be confirmed rather than assumed.
- **`/privacy` has not been legally reviewed.** Drafted in Phase 2 to describe the site's actual data handling accurately, but it has not been through Mortgagebroker.ca compliance or a lawyer. Must be reviewed before the rebuild replaces production. If data handling changes — analytics added, CRM integrated, chat widget installed — the page must change with it.
