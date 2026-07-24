# Sitemap & Keyword Plan

**Decided:** renewal-led service priority, with first-time-buyer content built out in depth
**Locale:** Richmond Hill, ON — serving the GTA
**Rule enforced throughout:** if two pages could swap body copy without anyone noticing, they are one page.

---

## 1. URL structure

```
/                                          Home
/about                                     E-E-A-T anchor
/contact                                   Form + NAP
/apply                                     Framing page → Velocity application
/book                                      Framing page → Calendly

/mortgages/renewal                         ◄ priority 1
/mortgages/first-time-buyer                ◄ priority 2
/mortgages/refinance                       ◄ priority 3  (incl. debt consolidation)
/mortgages/self-employed                   ◄ priority 4
/mortgages/investment-property             ◄ priority 5
/mortgages/new-to-canada                   ◄ priority 6

/calculators                               Index
/calculators/mortgage-payment
/calculators/ontario-land-transfer-tax
/calculators/cmhc-insurance
/calculators/affordability
/calculators/stress-test

/guides                                    Education hub index
/guides/[slug]                             ~15 articles, see §4

/service-areas                             One GTA page — not one per town
/service-areas/toronto                     The only differentiated area page

/privacy
```

**Deliberately not built:** `/mortgages/new-construction` and `/mortgages/private-lending`. Both are real services with no distinct content yet. New construction becomes a section on `/mortgages/first-time-buyer` and `/mortgages/investment-property`; private/alternative lending becomes a section on `/mortgages/refinance`. They graduate to pages when there is 1,000+ words of genuinely distinct material.

**Deliberately not built:** per-town pages for Vaughan, Newmarket, Aurora, Markham, King, Whitchurch-Stouffville. Every one of these sits in York Region with identical land transfer tax treatment and identical lender access, so the pages would be near-duplicates — the doorway pattern the brief prohibits. Reach is signalled instead through `areaServed` in schema (unlimited municipalities, zero thin pages) and one substantive `/service-areas` page.

Toronto is the single exception, and it earns its page on merit: the Municipal Land Transfer Tax roughly doubles closing costs there and exists nowhere else in the GTA. That is real, differentiated, locally-specific content.

---

## 2. Money pages

Each must answer a question the others don't.

### `/mortgages/renewal` — priority 1
- **Primary:** mortgage renewal Ontario
- **Secondary:** should I renew with my bank, mortgage renewal vs switching, renewal rates Ontario
- **Intent:** commercial investigation. High urgency, short decision window.
- **Why first:** the 2020–21 origination cohort is renewing into a materially different rate environment. The bank's auto-renewal letter is the single weakest product in retail banking — it is an offer made with no competition. This page exists to intercept that letter.
- **Unique content:** what the renewal letter actually means, the switch process and who pays for it, timing (start 120 days out), what happens if you do nothing, when staying put is genuinely the right call.
- **Must include:** the honest case for renewing with the incumbent, because a page that says "always switch" reads as sales copy and converts worse.

### `/mortgages/first-time-buyer` — priority 2
- **Primary:** first time home buyer mortgage Ontario
- **Secondary:** first time buyer down payment Ontario, FTB land transfer tax rebate, pre-approval first time buyer
- **Intent:** informational shading to commercial. Long journey, high nurture value.
- **Why second:** highest search volume of any term here, and the bulk of the existing 45 reviews describe first-purchase experiences — real evidence of fit.
- **Unique content:** down payment minimums by price band, the FTB rebate (Ontario $4,000 / Toronto $4,475), the full cost of closing beyond the down payment, pre-approval vs approval, what a conditional financing clause does.
- **Deepest guide cluster in the project** — this is where the education hub concentrates.

### `/mortgages/refinance` — priority 3
- **Primary:** mortgage refinance Ontario
- **Secondary:** debt consolidation mortgage, access home equity, HELOC vs refinance
- **Intent:** commercial. Often financially stressed, needs plain language and zero judgement.
- **Merged deliberately:** refinancing and debt consolidation are mechanically the same transaction — accessing equity against the property. Separate pages would have swapped freely, which is the cannibalization test failing.
- **Unique content:** the 80% LTV ceiling, prepayment penalties (IRD vs three months' interest), blend-and-extend, the arithmetic of consolidating high-interest debt, and the honest downside — amortizing short-term debt over 25 years costs more in total interest.
- Absorbs private/alternative lending as a closing section.

### `/mortgages/self-employed` — priority 4
- **Primary:** self employed mortgage Ontario
- **Secondary:** business for self mortgage, stated income mortgage Canada, mortgage without T4
- **Intent:** commercial, high conversion.
- **Why it punches above its volume:** banks decline these applicants routinely, so the people searching are actively looking for an alternative rather than browsing. Low competition, unusually high intent.
- **Unique content:** why write-offs that reduce tax also reduce provable income, which documents actually work (T1 Generals, NOAs, financial statements, business bank statements), stated-income programs and their premiums, A vs B lender trade-offs.

### `/mortgages/investment-property` — priority 5
- **Primary:** rental property mortgage Ontario
- **Secondary:** investment property down payment Canada, rental income qualification
- **Intent:** commercial. Financially literate audience, larger loan sizes.
- **Unique content:** the 20% minimum on rentals, how lenders treat rental income (offset vs add-back — the choice materially changes qualification), portfolio limits, small multi-unit financing.

### `/mortgages/new-to-canada` — priority 6
- **Primary:** new to Canada mortgage
- **Secondary:** newcomer mortgage program, mortgage without Canadian credit history, PR mortgage
- **Intent:** commercial, low competition, strongly GTA-relevant.
- **Unique content:** newcomer programs and their eligibility windows, building Canadian credit from zero, which documents substitute for domestic credit history, permanent resident vs work permit treatment, down payment expectations.

---

## 3. Calculators

The highest-leverage build in the project. Each is a standalone indexable URL with the explanation server-rendered above the interactive tool, so the page ranks on its content rather than on a widget a crawler can't see.

| URL | Primary keyword | Note |
|---|---|---|
| `/calculators/ontario-land-transfer-tax` | ontario land transfer tax calculator | Highest opportunity. Toronto MLTT toggle + FTB rebate. Province-specific beats the national calculators that dominate this term. |
| `/calculators/mortgage-payment` | mortgage payment calculator canada | Highest volume, most competitive. Differentiator: correct semi-annual compounding and a genuinely correct accelerated-payment model. |
| `/calculators/affordability` | mortgage affordability calculator ontario | Needs the condo-fee input the old one lacked. |
| `/calculators/cmhc-insurance` | cmhc insurance calculator | Low competition, clean intent. |
| `/calculators/stress-test` | mortgage stress test calculator | Low competition, distinctive, pairs with a strong explainer. |

Every calculator page carries: the formula explained in prose, a worked example, a visible "estimate only" label adjacent to the result rather than in footnotes, a last-verified date stamp, primary-source citation, a link to its companion guide, a link to the most relevant money page, and a "have this reviewed by a real person" conversion path.

**Before shipping**, every constant is re-verified against its primary source: CMHC premium bands at cmhc-schl.gc.ca, Ontario brackets at the Ministry of Finance, Toronto MLTT at toronto.ca (highest staleness risk — the luxury bands changed recently), stress test at OSFI. British Columbia's transfer tax gets dropped entirely; it was never relevant to an Ontario-licensed agent.

---

## 4. Education hub

Ten of these already exist as one-paragraph FAQ answers on the current site. Each becomes a properly researched article with a named author, licence number, visible last-updated date, and primary-source citations — the E-E-A-T floor for YMYL content.

**Renewal cluster** → supports priority 1
1. Your bank's renewal letter, explained
2. Mortgage penalties: IRD vs three months' interest
3. Switching lenders at renewal: the actual process

**First-time buyer cluster** → supports priority 2, largest cluster
4. How much down payment you need in Canada
5. Closing costs beyond the down payment
6. Ontario land transfer tax explained
7. CMHC mortgage insurance explained
8. How long pre-approval takes, and what it does
9. Does checking your rate hurt your credit score
10. What documents you need
11. What your lawyer does on closing day

**Decision-making cluster**
12. Fixed vs variable in Ontario
13. The mortgage stress test explained
14. HELOC vs refinance

**Positioning cluster**
15. What a mortgage agent does that a bank can't
16. What it costs to work with an agent
17. What to do when the bank says no

---

## 5. Internal link graph

Two-click rule satisfied: all six money pages sit in the primary nav, so every one is one click from home.

```
Home ──┬─► all 6 money pages
       ├─► /calculators (index)
       ├─► /guides (index)
       └─► /apply · /book · /contact

Money page ──┬─► 2–3 relevant calculators
             ├─► 3–4 guides in its own cluster
             ├─► /apply  (primary conversion)
             └─► /book   (secondary conversion)

Calculator ──┬─► its companion guide
             ├─► its most relevant money page
             └─► "get this reviewed" → /contact

Guide ──┬─► parent money page  (the money page is the destination, always)
        ├─► relevant calculator
        └─► 2–3 sibling guides in cluster

/service-areas ──► all 6 money pages, /service-areas/toronto
```

Guides link *up* to money pages rather than sideways, so link equity concentrates on the pages that convert. Every cluster has exactly one designated money page as its destination.

---

## 6. Schema

| Type | Where |
|---|---|
| `Organization` + `LocalBusiness` | Sitewide. NAP: 65B West Beaver Creek Rd, Richmond Hill, ON L4B 1K4. `areaServed` lists GTA municipalities. |
| `Person` | About page and every article author block — name, licence M21002541, credentials |
| `FinancialService` | Money pages |
| `FAQPage` | Only where FAQs are visibly rendered |
| `Article` | Guides, with `datePublished` / `dateModified` |
| `BreadcrumbList` | All nested pages |

**Not implemented:** `AggregateRating` / `Review`. The 45 reviews are genuine but live on Google's platform. Self-serving review markup on your own domain is outside Google's guidelines and risks a manual action. Display them, link to the profile, don't mark them up.

---

## 7. Open items

- GBP business name and phone, exactly as displayed
- Verified lender count (confirmed publishable, number still needed)
- Postal code conflict: GBP shows L4B 1K4, brokerage team page shows L4B 1Y4 — one needs correcting at the source
- Aurora Chamber listing under *Mortgage Architects* — stale citation, should be removed or corrected
- Analytics deferred by request; no search-performance feedback loop until GA4 and Search Console exist
