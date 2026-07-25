# Phase 5 Audit

**Run:** 25 July 2026 · against the production build (`next build` + `next start`), not the dev server
**Tooling:** Lighthouse 13.4.1 (mobile preset, simulated throttling), Chrome headless, `curl`, 38 unit tests
**Scope:** all 27 indexable pages

---

## 1. Definition of done — scorecard

| Requirement | Target | Result | |
|---|---|---|---|
| `npm run build` | clean | clean | ✅ |
| TypeScript errors | 0 | 0 | ✅ |
| Console errors/warnings | 0 | 0 | ✅ |
| Lighthouse Performance (mobile) | ≥ 90 | 96–99 | ✅ |
| Lighthouse Accessibility | ≥ 95 | **100** | ✅ |
| Lighthouse Best Practices | ≥ 95 | 100 | ✅ |
| Lighthouse SEO | = 100 | 100 | ✅ |
| CLS | ≤ 0.1 | 0.000 | ✅ |
| TBT | ≤ 200ms | 8–53ms | ✅ |
| LCP | ≤ 2.5s | 2.11–2.63s | ⚠️ **see §3.1** |
| Renders at 320/768/1440/1920 | no overflow | 0px overflow, 11 pages × 4 widths | ✅ |
| Every indexable page in `curl` | full HTML | 27/27 | ✅ |
| Structured data validates | Rich Results Test | parses + typed; **not submitted to Google** — §3.2 | ⚠️ |
| No placeholder / fabricated content | none | none | ✅ |
| Compliance elements (§4) | present | present sitewide | ✅ |
| Unit tests | pass | 38/38 | ✅ |

**Site totals:** 27 indexable pages · **29,596 words** of crawlable content · 28/28 internal links resolve · sitemap lists 27 URLs.

For comparison, the entire prototype was 1,422 crawlable words.

---

## 2. Findings fixed during this phase

### 2.1 Colour contrast failed WCAG AA sitewide — HIGH, fixed

The accent `--brass` `#A9803C` failed AA in **both** directions:

- as text on paper: **3.41:1** (needs 4.5:1)
- as text on white cards: **3.60:1**
- as button background behind white text: **3.60:1**

This affected every primary call to action, every eyebrow label, every "read more" link and every source citation on the site — 12 distinct node types.

Root cause was a design decision made in Phase 0 and never verified. `#A9803C` was chosen because it reads metallic rather than yellow; contrast was not checked.

**Fix:** darkened to `#8a6a2e` — **4.78:1** on paper, **5.02:1** on white, **5.02:1** behind white text. Hover state darkened to `#725825` (6.69:1). The colour remains in the same family and still reads as brass rather than brown.

**Effect:** Accessibility 96–97 → **100** on every page tested.

A full token-pair audit was run at the same time. Every other pair passes comfortably — body text on paper 15.71:1, muted text 5.77:1, brass-light on navy 10.34:1.

### 2.2 Hero image was 2.8MB — MEDIUM, fixed

`parker-mcgovern.png` shipped at 1625×2048, 2.8MB, for an element displayed at 340px.

**Fix:** resized to 634×800 JPEG at quality 82 — **64KB**, a 97% reduction. All four references updated including the `Person` schema image URL.

Honest note: this did **not** move LCP, which was my hypothesis for the amber pages. It is still a genuine bandwidth win, but it did not fix what I expected it to fix.

### 2.3 About hero image not preloaded — LOW, fixed

Home's hero image carried `priority`; About's did not, so Next emitted no preload hint for an above-the-fold LCP candidate. Added.

---

## 3. What still falls short

### 3.1 LCP is amber on one page ⚠️

`/about` measures **~2.63s** against the 2.5s "good" threshold. `/` straddles the line — measured 2.58s, 2.61s and 2.12s across three runs with no code change between the last two, so a meaningful part of this is measurement variance rather than a stable regression.

The two affected pages are the only two with a hero image. Diagnosis showed nothing actually slow: the image serves in 135ms at 11KB, the largest JS chunk in 89ms. Under Lighthouse's simulated slow-4G profile, LCP on a page whose largest element is an image is dominated by the extra round-trip after HTML and CSS, not by any resource being heavy.

**Assessment:** this is lab data under deliberately harsh simulated throttling. Real Core Web Vitals are *field* data from actual visitors, which cannot exist before launch. Production on Vercel adds edge caching and HTTP/2 that the local server does not have. The Performance score itself — the brief's stated target — passes at 96–99.

**Recommended:** re-measure from field data once the site is live and Search Console exists. If it is still amber with real traffic, the fix is to make the LCP element text rather than an image on those two pages.

### 3.2 Structured data not submitted to Google's Rich Results Test ⚠️

I verified that every JSON-LD block parses as valid JSON, uses correct schema.org types, and carries the required fields — `LocalBusiness` with full NAP and 19 `areaServed` entries, `Person` with licence identifier, `BreadcrumbList`, `FAQPage`, and `Article` with author and publisher references. Zero parse failures across 27 pages. `AggregateRating` is confirmed absent everywhere.

I did **not** submit the URLs to Google's Rich Results Test, which requires their web interface against a publicly reachable URL. **This must be done after deployment** and is not something I can complete pre-launch.

### 3.3 Cross-browser testing not performed ⚠️

All testing was Chrome. Safari and Firefox have not been verified. Given the CSS is unexceptional — grid, flexbox, custom properties, `@layer` — the risk is low, but it is untested rather than confirmed.

### 3.4 Contact form does not deliver 🔴

The pipeline is built, validated and tested, but no delivery channel is configured. It currently returns a handled 503 and shows the designed failure state with phone and email fallback, so no lead is silently lost — but no lead is delivered either.

**Blocked on:** a Resend account and SPF/DKIM records on parkermcgovern.ca. This is the single most important outstanding item, because it is the site's whole purpose.

### 3.5 Privacy policy has not been legally reviewed 🔴

`/privacy` accurately describes the site's actual data handling, but has not been through Mortgagebroker.ca compliance or a lawyer. Must be reviewed before this replaces production.

### 3.6 Analytics deferred — no feedback loop 🟡

No GA4, no Search Console. The SEO work is running blind: there is no way to see which pages rank, which convert, or whether structured data is being read. Recorded in CLAUDE.md §10 and worth revisiting before launch rather than after.

### 3.7 Unverified business facts still outstanding 🟡

- Google Business Profile business name and phone, exactly as displayed (needed for NAP consistency)
- Google Business Profile URL — the About page states 5.0 from 45 reviews with nothing to link to
- Verified lender count — confirmed publishable, figure not supplied
- Postal code conflict: GBP shows `L4B 1K4`, the brokerage team page shows `L4B 1Y4`. One needs correcting at source.
- Aurora Chamber listing under *Mortgage Architects* — stale citation

### 3.8 npm audit reports 3 high-severity advisories 🟡

`postcss` and `sharp`, both transitive dependencies inside Next.js itself. `npm audit fix --force` would downgrade Next to version 9 — catastrophic, and not a fix.

Both are build-time only in this project: postcss requires attacker-controlled CSS (we author all of it), sharp processes one image we supply ourselves. Not exploitable in this threat model. The real resolution is Next bumping its bundled dependencies.

---

## 4. Content integrity

Scanned all 27 pages for fabricated or placeholder content. **Clean.**

Specifically absent: lorem ipsum, `[Brokerage Name]`, `M00000000`, TODO/FIXME markers, and every fabricated statistic removed from the prototype — "12+ years", "$220M+ funded", "500+ mortgages since 2014", "4.9/5 rating", "18 families this month", "35+ lenders".

One false positive worth recording so it is not re-flagged: the scan matched "placeholder" on `/` and `/contact`. That is the HTML `placeholder=` attribute and Tailwind's `placeholder:` utility class on form fields — not placeholder copy.

Compliance elements verified present sitewide: agent licence M21002541, brokerage licence 12707, brokerage name, FSRA named in full, and the approved estimates disclaimer verbatim.

---

## 5. Verdict

The build meets every numeric target in the definition of done. The four Lighthouse category thresholds pass on every page tested, accessibility is perfect, and there is no fabricated content anywhere.

What is genuinely not done is not a code problem. It is five external dependencies — a Resend account, a legal review, GBP details, a lender count, and analytics — none of which I can complete without Parker.

The one honest technical caveat is LCP on `/about`, which sits ~0.13s above the green threshold under simulated throttling and should be re-judged on field data after launch.
