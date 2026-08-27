import type { ServiceArea } from "@/lib/content/areas";

/**
 * Vaughan's distinct angle is pre-construction and new-build financing —
 * a genuinely different mortgage process from a resale purchase, and the
 * dominant form of buying in parts of the city.
 *
 * No figures for deposit structures or occupancy fees: those are set by
 * individual builders, not by rule, so the page describes the mechanism.
 */
const area: ServiceArea = {
  slug: "vaughan",
  name: "Vaughan",
  eyebrow: "Vaughan",
  title: "Buying new construction is a different mortgage process from buying resale.",
  lede:
    "Vaughan has more new build than almost anywhere else in York Region, and a pre-construction purchase does not work the way a resale purchase does. The gap between signing and closing is where the problems happen.",

  summary:
    "Pre-construction and new-build financing — deposit structures, the long gap to closing, and the appraisal that happens at the end.",

  metaTitle: "Mortgages in Vaughan — New Build Financing",
  metaDescription:
    "Buying new construction in Vaughan? How pre-construction financing differs from resale, why the appraisal comes at the end, and what to plan for.",

  intro: [
    "No land transfer tax difference here — Vaughan sits outside Toronto, so only the provincial tax applies, and your lender options are exactly the same as anywhere else in Ontario.",
    "What is different is how much of the buying happens before the building exists. A pre-construction purchase is a genuinely different transaction from buying a resale home, and most of the difficulty is concentrated in the part nobody thinks about at signing: the stretch between the day you sign and the day it closes.",
  ],

  blocks: [
    {
      h: "The gap between signing and closing is the whole problem",
      p: [
        "On a resale purchase you sign, arrange financing within a few weeks, and close. On a pre-construction purchase you sign, pay deposits over a schedule, and then wait — sometimes for years — before the mortgage is actually needed.",
        "That gap matters because nothing about your approval is locked for it. Lenders qualify you at the time of funding, not the time of signing. Your income, your credit, your other debts and the rules themselves can all change in between, and the offer you signed is binding regardless.",
      ],
      list: [
        {
          t: "Your file is assessed at closing",
          d: "Not when you signed. Changing jobs, taking on a car loan or a drop in credit between the two dates can change what you qualify for, on a purchase you are already committed to.",
        },
        {
          t: "Rate holds do not stretch that far",
          d: "A pre-approval typically holds a rate for around 120 days. On a build completing in two years, that is not protection — it is a snapshot. Plan on qualifying at whatever the rules and rates are on the closing date.",
        },
        {
          t: "Deposits are on the builder's schedule",
          d: "Structured in instalments over the months after signing, and set by the builder rather than by any rule. Read the schedule before you sign; it is the part people skim.",
        },
        {
          t: "Interim occupancy on condominiums",
          d: "For condos you may occupy the unit before it legally closes, paying occupancy fees to the builder in the meantime. Those fees are not mortgage payments and build no equity.",
        },
        {
          t: "The rules can move under you",
          d: "Qualification rules have changed materially more than once in the last decade. On a long closing, that is a real risk rather than a theoretical one.",
        },
      ],
      aside: {
        h: "Check in every year, not at the end",
        p: "The single most useful thing you can do on a long pre-construction closing is have your file looked at annually rather than three months before closing. A problem found two years out is usually fixable. The same problem found six weeks out often is not, and by then you are committed to the purchase.",
      },
    },
    {
      h: "The appraisal comes at the end, and that is the risk",
      p: [
        "On a pre-construction purchase, the lender's appraisal happens near completion — not when you signed. The lender lends against the appraised value at that point, not the price you agreed years earlier.",
        "If the appraisal comes in below your purchase price, the shortfall is yours to cover in cash, on top of your planned down payment. It is the single most common way a pre-construction purchase goes wrong, and it has nothing to do with your income or your credit.",
        "This is not a reason to avoid new construction. It is a reason to keep a reserve rather than committing every dollar you have to the deposit schedule, and to be realistic about the price you are agreeing to rather than assuming the market will validate it.",
      ],
    },
    {
      h: "What new build adds to your closing costs",
      p: [
        "New construction carries costs a resale purchase does not, and builders do not always present them prominently.",
        "Expect development and levy charges, utility hookup and meter installation, Tarion new home warranty enrolment, and occupancy costs on a condominium. HST treatment also differs on new construction — rebates may apply depending on whether you are occupying the home or renting it out, and the difference is significant enough to confirm before you sign rather than after.",
        "Many of these are capped in the purchase agreement if you negotiate for it, and uncapped if you do not. That is a conversation for your lawyer before signing, and it is worth having.",
      ],
    },
  ],

  honest: {
    h: "When pre-construction is the wrong choice",
    p: [
      "If your down payment is exactly what you need and no more, a long closing is a poor fit. Between the deposit schedule, the possibility of an appraisal shortfall and closing costs that are larger than resale, pre-construction demands a cash buffer that resale does not.",
      "If your income is likely to change — a business you are starting, a return to school, parental leave — remember you are being qualified at the end, not now. A purchase that fits today's income may not fit the income you have on the closing date, and you are committed either way.",
      "And if you need somewhere to live on a fixed date, this is the wrong product. Completion dates move. Building your plans around a builder's estimated occupancy is how people end up paying for storage and a short-term rental at the same time.",
      "None of that means avoid new construction — plenty of people do very well from it. It means going in with a reserve, a realistic view of the timeline, and a file that gets checked more than once.",
    ],
  },

  faqs: [
    {
      q: "Can I get a mortgage approved now for a home completing in two years?",
      a: "Not in a way that protects you. You can and should get assessed now so you know where you stand, but lenders qualify you at the time of funding, and rate holds run to roughly 120 days rather than years. Treat an early assessment as a baseline to maintain, not a guarantee to rely on.",
    },
    {
      q: "What happens if the appraisal comes in low on a new build?",
      a: "The lender lends against the appraised value, not your purchase price, and you cover the difference in cash on top of your down payment. You are still bound by the purchase agreement. This is the main argument for keeping a reserve rather than committing every available dollar to the deposit schedule.",
    },
    {
      q: "Are occupancy fees part of my mortgage?",
      a: "No. On a condominium you may take possession before the unit legally closes, and the occupancy fees you pay the builder in that period are not mortgage payments and build no equity. Budget for them separately, and ask how long the occupancy period is expected to run.",
    },
    {
      q: "Is land transfer tax different in Vaughan?",
      a: "No. Vaughan is outside the City of Toronto, so only the provincial land transfer tax applies — no municipal land transfer tax. On the same purchase price, that closing cost is materially lower in Vaughan than in Toronto.",
    },
  ],

  services: ["first-time-buyer", "investment-property", "self-employed"],
  calculators: ["affordability", "mortgage-payment", "ontario-land-transfer-tax"],

  verified: "August 2026",
  sources: [
    {
      name: "Ontario Ministry of Finance — Land Transfer Tax",
      href: "https://www.ontario.ca/document/land-transfer-tax",
    },
    {
      name: "Financial Consumer Agency of Canada — Buying a home",
      href: "https://www.canada.ca/en/financial-consumer-agency/services/buying-home.html",
    },
  ],
};

export default area;
