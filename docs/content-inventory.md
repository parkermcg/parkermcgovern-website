# Content Inventory — existing site

**Audited:** 2026-07-23 · **Source:** `index.html` @ `8694940`, plus `5d5d90b` for deleted calculator logic
**Status of this artifact:** the current site is a single 337 KB `index.html`. No build step, no framework, no content layer. Treat as a content archive only.

---

## 1. Headline findings

| Finding | Detail |
|---|---|
| Crawlable content | **1,422 words** for the entire site |
| Bendigi calculators | **0 bytes** in server HTML — client-mounted script |
| Elfsight reviews | **0 reviewer names** in server HTML — client-mounted, shadow DOM |
| Contact form | Renders a success message; **sends nothing anywhere** |
| Social links | Three `href="#"` placeholders in the footer — dead |
| Calculator formulas | Deleted at `8694940`, **fully recoverable** from `5d5d90b` |

The two most valuable assets on the site — 45 genuine 5.0★ reviews and a licensed calculator suite — are invisible to search engines. Everything a crawler sees is the ~1,400 words of static marketing copy.

---

## 2. Page structure (single page, anchor nav)

| # | Section | ID | Disposition |
|---|---|---|---|
| 1 | Hero — headline, lede, 3 CTAs, 4 stat tiles | `#home` | Rewrite, keep angle |
| 2 | Bank vs. Agent — 3 cards | — | Keep, expand to own page |
| 3 | Process — 5 numbered steps | — | Keep; genuinely sequential |
| 4 | Services — 8 cards | `#services` | Split: tiered pages |
| 5 | About — headshot, bio, 4 credentials, 3 value cards | `#about` | Keep, needs E-E-A-T build-out |
| 6 | Calculators — Bendigi embed | `#calculators` | **Replace** (per §4 decision) |
| 7 | Testimonials — Elfsight embed | `#testimonials` | Rethink (see §6) |
| 8 | FAQ — 10 questions, 4 categories | `#faq` | Harvest into article hub |
| 9 | Final CTA band | — | Keep pattern |
| 10 | Contact — form + info card | `#contact` | Rebuild properly |
| 11 | Footer — nav, regulatory notice | — | Keep, verify wording |

---

## 3. Copy worth keeping

**Strong — carry forward:**
- Hero angle: *"A mortgage strategy built around your numbers, not the bank's quota."* Sharp positioning against the bank-branch alternative. Reuse the idea, rewrite the execution.
- The bank-vs-agent triad: one file across many lenders / no product quotas / lender pays the commission. This is the core value argument and it's sound.
- The five-step process. Order carries real information (discovery → pre-approval → offer → underwriting → close), so the numbering is legitimate rather than decorative.
- FAQ substance. Ten questions covering agent-vs-bank, cost, documents, down payment minimums, stress test, fixed-vs-variable, credit inquiries, prior declines, pre-approval timing, lawyer coordination. **Each of these is an article seed** — they're the actual questions a nervous buyer types into Google.

**Thin — rewrite from scratch:**
- All eight service cards are 15–25 words. Not pages, just labels.
- The three "value" cards (Transparent / Responsive / Long-term) are assertions without evidence.

**Accurate and reusable as-is:**
- Down payment tiers: 5% on first $500K, 10% on the $500K–$1.5M portion, 20% at $1.5M+.
- Stress test description: qualify at the greater of contract rate + 2% or 5.25%.

---

## 4. Calculator logic (recovered from `5d5d90b`)

All constants below are **as they were written**. Every one needs verification against the primary source before it ships again.

**CMHC premium by LTV** — ≤65%: 0.60% · ≤75%: 1.70% · ≤80%: 2.40% · ≤85%: 2.80% · ≤90%: 3.10% · >90%: 4.00%
→ Matches CMHC's published table to the best of my knowledge. **Verify at cmhc-schl.gc.ca before shipping.**

**Ontario LTT** — 0.5% to $55K · 1.0% to $250K · 1.5% to $400K · 2.0% to $2M · 2.5% above
→ Correct for single/two-family residential. Verify against Ontario Ministry of Finance.

**Toronto MLTT** — same first four bands, then 2.5% to $3M · 3.5% to $4M · 4.5% to $5M · 5.5% above
→ Reflects the luxury bands Toronto added in 2024. **Highest verification priority** — these changed recently and are the most likely to be stale.

**First-time buyer rebates** — Ontario max $4,000 · Toronto max $4,475. Both look correct.

**Interest compounding** — converts a semi-annual nominal rate to a periodic rate. Correct Canadian convention, and a genuine differentiator over the many US-formula calculators floating around.

**Stress test** — `max(contractRate + 2, 5.25)`. Correct per OSFI B-20.

### Defects to fix, not port

1. **Accelerated bi-weekly is wrong.** It halves the monthly payment (correct) but then multiplies by 26 payments × the full original amortization. The entire benefit of accelerated payments is that they *shorten* the amortization — so the calculator currently shows the user no benefit at all. A prospect comparing options would conclude accelerated payments don't help. Must be rebuilt to solve for the reduced term.
2. **Affordability hardcodes $100/month heating** and has no condo-fee input. Condo fees are 50% includable in GDS and materially change the answer for anyone buying a condo.
3. **Dead variable** `maxHousing` — computed, never used.
4. **British Columbia property transfer tax** is implemented. Irrelevant for an Ontario-licensed agent; drop it entirely.
5. **No date stamp or "estimate only" labelling** on any output beyond small print.

---

## 5. Integrations, links, assets

**Live and working:**
- Calendly — `calendly.com/mortgageagent`
- Application — `velocity.newton.ca/sso/public.php?sc=2xreedfpzly7` (Newton/Velocity)
- `tel:+16474531222` · `mailto:parker@mortgagebroker.ca`

**Third-party embeds:**
- Elfsight Google Reviews, app `7b818619-…a7af7`. Free tier — renders a vendor badge. Domain-locked. Client-only.
- Bendigi calculators, keyed to a Canadian Mortgage App account. Domain-locked; **`parkermcgovern.ca` was never authorized in the Bendigi dashboard**, so the live site currently shows their "not authorized" fallback where the calculators should be. Moot if we replace it, but worth knowing the live page is visibly broken there right now.

**Broken:**
- LinkedIn / Instagram / Facebook footer links are all `href="#"`.

**Assets:**
- `Untitled design.png` — 1625×2048 headshot, professional, good quality. Currently embedded as a base64 JPEG (~64 KB) cropped square. Keep the original as the source file.
- Fonts Fraunces / Public Sans / IBM Plex Mono, base64-embedded (~150 KB). Correct for a standalone file, **wrong for Next.js** — replace with `next/font`.
- No logo file exists.

---

## 6. Compliance and accuracy flags

**Fabricated content I wrote and later removed** (recorded so it doesn't return):
"12+ years in mortgage lending," "$220M+ funded," "500+ mortgages placed since 2014," "4.9/5 average client rating," "currently guiding 18 families." All invented. Removed after the brokerage team page indicated roughly three years in the industry. Six invented client testimonials with names and cities were also removed.

**Fabricated content still live on the site:**
- **Business hours** — "Mon–Fri 8am–7pm, Sat 9am–2pm" was invented. It appears in the contact card and would flow into `LocalBusiness` schema and GBP consistency checks. **Must be verified or removed.**
- "Evenings and weekends included" — a service commitment, unverified.
- "I track your renewal date and rate environment for you" — describes an ongoing service. Confirm this is real.
- "a wide panel of lenders" — softened from an invented "35+." Still unverified; needs a real number from the brokerage or no number at all.

**Regulatory:**
- Footer carries agent licence M21002541, brokerage Mortgagebroker.ca #12707, FSRA reference, and an estimates disclaimer. Present and reasonably complete — but the **exact required wording has never been verified** against brokerage or FSRA guidance.
- JSON-LD `FinancialService` block currently declares a **Richmond Hill** address. Now known to be wrong; GBP is Aurora. Must be corrected — inconsistent NAP actively damages local ranking.
- No date stamps anywhere. Any page that states a rate, premium, or tax bracket needs one.

**Review schema caution:** the 45 reviews are genuine, but they live on Google's platform. Marking them up as `AggregateRating` on our own domain is outside Google's structured-data guidelines (self-serving reviews aren't rich-result eligible, and we don't own the review data). Display them, link to the GBP — don't schema them.

---

## 7. What this implies for the rebuild

1. **The service section is the biggest SEO decision.** Eight near-identical cards become eight near-identical pages if ported naively — the exact cannibalization the brief warns about. Needs the tiered ranking before the sitemap can be drawn.
2. **The FAQ is the education hub in embryo.** Ten real questions already written, each worth 800–1,500 words with primary-source citations.
3. **Calculators are the strongest ranking opportunity** and the formulas already exist and are mostly correct. Rebuilt as individually indexable pages with the math server-rendered, these are the highest-leverage build in the project.
4. **Trust has to be rebuilt from real material.** Experience-in-years is not available as a lever. What is available: a B.Comm in Real Estate & Housing from Guelph, Level 2 licensing, 45 genuine 5.0★ reviews, and demonstrated expertise through the content itself. That last one is the whole argument for the education hub.

---

## 8. Open items blocking the sitemap plan

- Priority services, ranked 6–8
- Exact GBP name/address/phone string (Aurora)
- GA4 property ID + Search Console status
- Required regulatory disclosure wording
- Business hours — real ones
- Whether the Aurora Chamber listing under *Mortgage Architects* is stale and should be corrected
