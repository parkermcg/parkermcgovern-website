# Design Plan

**Direction:** evolve the existing navy / brass / warm-white identity rather than restart.
**Positioning:** premium, calm, precise, human. The reader is making the largest financial decision of their life and is nervous about it. The design's job is to feel like competent hands — not to impress designers.

---

## 0. An honest note on the calibration list

The brief flags "cream background with a serif display and a warm accent" as an AI-default tell. The current site is adjacent to that pattern, and pretending otherwise would be dishonest.

Two things separate it, and this plan pushes both harder:

1. **Navy is the dominant surface, not cream.** Roughly 70% of vertical space sits on deep navy. The warm white is the *reading* surface for long-form content, not the identity. The flagged pattern is cream-dominant; this is navy-dominant with warm relief.
2. **The accent moves from gold to brass.** `#B68D40` reads yellow and decorative — it edges toward the terracotta-adjacent warmth the brief warns about. `#A9803C` reads metallic and engraved. On a site asking anxious people to trust you with money, "flashy gold" is an active liability; brass reads like a licence plaque.

Additionally, cream's role shrinks: it is now reserved for guides, calculators and long-form reading, where glare reduction genuinely earns it. Marketing sections stay on navy.

---

## 1. Color

Six values, each with one job.

| Token | Hex | Role |
|---|---|---|
| `--ground` | `#0B1A2E` | Deep navy. Primary surface: hero, statement cards, footer, all marketing sections. |
| `--ground-raised` | `#14263F` | Cards and panels sitting on `--ground`. |
| `--paper` | `#FBF9F5` | Warm near-white. Reading surface: guides, calculators, long-form. |
| `--ink` | `#111F35` | Primary text on `--paper`. Navy-biased, never pure black. |
| `--ink-muted` | `#56637A` | Secondary text, captions, labels. |
| `--brass` | `#A9803C` | The accent. Sparingly. `--brass-light` `#DFC48D` when on navy. |

**Justifications.**

`--ground` is navy because financial trust convention runs blue, but it is deliberately deeper and slightly cooler than a retail bank blue. Banks own bright corporate blue; the whole positioning is *not a bank*.

`--paper` is warm rather than pure white because the content strategy is long-form education. Fifteen articles of 1,000+ words is a lot of reading, and pure white at full brightness is fatiguing. It also warms the navy, which alone reads clinical.

`--ink` carries a navy bias rather than being neutral grey or black — a mid grey reads unconsidered, and the hue tie to `--ground` makes the two surfaces feel like one system.

`--brass` earns its place by restraint. It marks exactly three things: the primary action, the active navigation state, and the hairline rules on statement cards. When an accent appears on everything it stops meaning anything.

**Semantic colors are separate from the brand accent** and never substitute for it:

| Token | Hex | Use |
|---|---|---|
| `--positive` | `#1C6B52` | Savings, approvals, favourable outcomes |
| `--caution` | `#8A5F14` | Stress-test warnings, insured-mortgage notices |
| `--critical` | `#9C3A31` | Qualification failures, penalty amounts |

This matters most in the calculators, where a result needs to read good/bad at a glance without hijacking the brand accent.

Both themes are token-level. Dark is the default identity; light mode redefines tokens only, never component rules.

---

## 2. Typography

**Display — Fraunces.** Retained deliberately. It is a variable face with an optical-sizing axis plus `SOFT` and `WONK` axes, which means headlines at 56px and eyebrows at 12px can each be optically correct rather than one size scaled. It reads editorial and considered rather than corporate. Used at weights 500–600 only; the heavier weights get theatrical.

**Body — Public Sans.** Retained. It is neutral, and that is a real criticism — it is not a memorable face. The decision is deliberate: with 15,000+ words of financial explanation to deliver, the body face's job is to disappear. Memorability is carried by the display face and the figures.

**Figures — IBM Plex Mono, tabular.** The most consequential type decision on a calculator-led site. Every dollar amount, rate, and bracket sets in tabular mono so columns align and digits don't shift as values update. This is the typographic move that makes the site feel like financial instrumentation rather than marketing.

### Scale

Modular, 1.200 at mobile / 1.333 at desktop, on a 4px baseline.

| Role | Desktop | Face | Weight | Tracking |
|---|---|---|---|---|
| Display | 64px | Fraunces | 600 | −0.02em |
| H1 | 48px | Fraunces | 600 | −0.015em |
| H2 | 34px | Fraunces | 600 | −0.01em |
| H3 | 24px | Fraunces | 500 | 0 |
| Lede | 20px | Public Sans | 400 | 0 |
| Body | 17px | Public Sans | 400 | 0 |
| Small | 14px | Public Sans | 400 | 0 |
| Eyebrow | 12px | Public Sans | 600 | 0.14em, uppercase |
| Figure lg | 44px | Plex Mono | 500 | −0.01em, tabular |
| Figure sm | 17px | Plex Mono | 500 | 0, tabular |

Body copy sets at 17px — one step above the 16px default, because the audience skews toward reading dense material carefully. Measure caps at 68ch.

All faces load via `next/font` with `display: swap` and subsetting. No base64 embedding, no CDN links.

---

## 3. Layout

12-column grid, 1180px maximum, 24px gutters. Long-form content constrains to a 68ch measure inside that grid rather than filling it.

**Section rhythm** alternates surface rather than size, so the page reads as chapters: navy → warm → navy → warm. Vertical padding is `clamp(72px, 9vw, 128px)` for major sections, `clamp(48px, 6vw, 80px)` for minor ones. Consistent alternation is what produces rhythm; varying padding per section is what destroys it.

### Home

```
┌────────────────────────────────────────────────────────────┐
│ [PM] Parker McGovern          nav · nav · nav   [Apply][Book]│ navy, sticky
├────────────────────────────────────────────────────────────┤
│                                                            │
│  ── LICENSED MORTGAGE AGENT · RICHMOND HILL                │
│                                                            │
│  Your renewal letter is                    ┌─────────────┐ │
│  an offer, not a verdict.                  │             │ │ navy
│                                            │   headshot  │ │
│  One application, the whole lender          │   in brass  │ │
│  market. [lede, 2 lines]                   │   frame     │ │
│                                            │             │ │
│  [ Book a call ]  [ Apply now ]            └─────────────┘ │
│                                                            │
├────────────────────────────────────────────────────────────┤
│  Level 2 licensed │ B.Comm Guelph │ 5.0★ · 45 │ Richmond Hl│ navy, hairline
├────────────────────────────────────────────────────────────┤
│                                                            │
│  ── WHAT I HELP WITH                                       │
│  ┌────────┐ ┌────────┐ ┌────────┐                          │ warm
│  │Renewal │ │First-  │ │Refi &  │   6 cards → money pages  │
│  │        │ │time    │ │debt    │                          │
│  └────────┘ └────────┘ └────────┘                          │
│  ┌────────┐ ┌────────┐ ┌────────┐                          │
│  │Self-   │ │Invest. │ │New to  │                          │
│  │employed│ │property│ │Canada  │                          │
│  └────────┘ └────────┘ └────────┘                          │
├────────────────────────────────────────────────────────────┤
│  ── RUN THE NUMBERS                                        │
│                        ┌───────────────────────────┐       │ navy
│   Five calculators,    │  ESTIMATED PAYMENT        │       │
│   built for Ontario    │  $3,594.19 /mo            │◄──────┼── signature
│   rules specifically.  │  ─────────────────────    │       │   statement
│                        │  Loan          $603,135   │       │   card
│   [ See all → ]        │  CMHC           $18,135   │       │
│                        │  Est. only · verified Jul │       │
│                        └───────────────────────────┘       │
├────────────────────────────────────────────────────────────┤
│  ── HOW IT WORKS      01 ─── 02 ─── 03 ─── 04 ─── 05        │ warm
├────────────────────────────────────────────────────────────┤
│  ── WHAT CLIENTS SAY      [ reviews · link to GBP ]        │ warm
├────────────────────────────────────────────────────────────┤
│  ── START HERE        [ Book a call ]  [ Apply now ]       │ navy
├────────────────────────────────────────────────────────────┤
│  footer · nav · NAP · FSRA regulatory notice               │ navy
└────────────────────────────────────────────────────────────┘
```

### Money page (`/mortgages/renewal`)

```
┌────────────────────────────────────────────────────────────┐
│ header                                                     │
├────────────────────────────────────────────────────────────┤
│ Home › Mortgages › Renewal                                 │ breadcrumb
│                                                            │
│  ── MORTGAGE RENEWAL                                       │ navy
│  Your bank's renewal offer                                 │
│  is their opening bid.                                     │
│                                                            │
│  [lede — 2 sentences, plain language]                      │
│  [ Book a call ]   [ Compare my options → ]                │
├────────────────────────────────────────────────────────────┤
│                                                            │
│  ┌──────────────────────────┐  ┌────────────────────────┐  │ warm
│  │                          │  │  ON THIS PAGE          │  │
│  │  What the letter means   │  │  · What it means       │  │
│  │  [~200 words]            │  │  · Timing              │  │
│  │                          │  │  · Switching           │  │ sticky
│  │  When to start           │  │  · When to stay        │  │ rail
│  │  [~200 words]            │  │                        │  │
│  │                          │  ├────────────────────────┤  │
│  │  ┌────────────────────┐  │  │  Renewal is 120 days   │  │
│  │  │ STATEMENT CARD     │  │  │  out?                  │  │
│  │  │ worked comparison  │  │  │  [ Book a call ]       │  │
│  │  └────────────────────┘  │  └────────────────────────┘  │
│  │                          │                              │
│  │  Switching lenders       │                              │
│  │  [~250 words]            │                              │
│  │                          │                              │
│  │  When staying is right   │  ◄── the credibility section │
│  │  [~200 words]            │                              │
│  └──────────────────────────┘                              │
├────────────────────────────────────────────────────────────┤
│  ── RUN YOUR NUMBERS   [payment] [stress test]             │ navy
├────────────────────────────────────────────────────────────┤
│  ── READ NEXT          3 guides from the renewal cluster   │ warm
├────────────────────────────────────────────────────────────┤
│  ── FAQ                4–6 questions, unique to renewal    │ warm
├────────────────────────────────────────────────────────────┤
│  CTA band · footer                                         │ navy
└────────────────────────────────────────────────────────────┘
```

---

## 4. Signature

**The statement card.**

A dark navy panel, brass hairline rules, figures in tabular mono at display scale, laid out like an account statement: a headline number, a rule, then itemized lines with labels left and figures right. A date stamp and an "estimate" qualifier sit at the foot, where a real statement would carry its disclaimer.

It appears wherever money appears — calculator results, worked examples inside guides, cost breakdowns on money pages, the renewal comparison. It is the one element repeated often enough to become the site's visual memory, and unlike a decorative motif it is doing real work every time it appears: making numbers legible, aligned and scannable.

Chosen over the alternative — the brass medallion currently used for the logo and step markers — because the medallion is decoration while the statement card is instrumentation. The medallion survives, reduced to two jobs: the logo lockup and the headshot frame.

---

## 5. Motion

One orchestrated page-load sequence: eyebrow, then headline, then lede, then actions, staggered ~60ms, 400ms ease-out, translating no more than 8px. Nothing else animates on load.

Beyond that: state transitions only — hover, focus, accordion, and calculator figures counting to their new value over ~200ms when inputs change. That last one is the only decorative motion in the build, and it earns its place by drawing the eye to what changed.

No scroll-triggered reveals. Scattered scroll animation is itself the tell the brief warns about, and on a content site it delays the reader for no benefit. `prefers-reduced-motion` disables everything except opacity.

---

## 6. Copy voice

Plain verbs. Sentence case everywhere, including buttons. Specific beats clever.

Name things the way a nervous first-time buyer would: "what you'll need to provide," not "documentation requirements." Buttons state what happens — "Book a call," "See my options," never "Submit" or "Learn more."

Write the honest version. Every money page includes the case *against* acting: when renewing with your current lender is right, when consolidating debt costs more overall, when renting a while longer beats buying. This is the single strongest trust signal available and costs nothing but the discipline to include it. It also happens to be what E-E-A-T rewards.

Numbers always carry their qualifier in the same breath, never in a footnote.
