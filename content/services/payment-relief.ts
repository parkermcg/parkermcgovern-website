import type { ServicePage } from "@/lib/content/types";

/**
 * Payment relief — temporary measures for someone struggling with a mortgage
 * they already have. Distinct from /mortgages/reverse-mortgage, which is Canadian
 * reverse mortgages: a permanent arrangement for homeowners 55+. Keep the two
 * separate (CLAUDE.md §5 cannibalization test).
 *
 * VERIFIED against FCAC 2026-08-26 — every expectation below is theirs, not
 * an industry norm I inferred:
 *   - The Guideline on Existing Consumer Mortgage Loans in Exceptional
 *     Circumstances (published July 2023) sets FCAC's expectations for banks
 *     and other federally regulated financial institutions.
 *   - Applies where you hold an existing residential mortgage on your
 *     PRINCIPAL RESIDENCE and are at risk of missing regular payments.
 *   - Banks are expected to monitor for early signs, contact you proactively,
 *     and proactively provide access to relief measures.
 *   - Temporary relief FCAC expects them to offer: waiving prepayment
 *     penalties on a lump sum made to avoid negative amortization and on the
 *     sale of a principal residence; waiving internal fees or costs for a
 *     limited period; and avoiding charging interest on interest for a
 *     limited period where relief causes negative amortization.
 *   - Where the bank has AGREED you may miss a payment as part of relief, it
 *     is expected not to report that missed payment to the credit bureaus.
 *   - Before you consent the bank must disclose, clearly and not misleadingly:
 *     the balance before relief, the dollar impact on total cost, the impact
 *     on amortization, the new payment/date/frequency, the new rate and type,
 *     and the effective date. Express consent is required.
 *   - On extended amortization the bank is expected to build a plan with you
 *     to restore the original period, offer the shortest extension possible,
 *     and communicate the long-term financial impact.
 *   - FCAC's own warning: extending amortization to lower payments raises
 *     total interest by "thousands or tens of thousands of dollars".
 *
 * NO rates, penalty figures or payment examples — none supplied (§4).
 */
const page: ServicePage = {
  slug: "payment-relief",

  eyebrow: "Payment relief",
  title: "If the payment has become the problem, there are more options than people think.",
  lede:
    "Rates moved, hours got cut, or a renewal landed higher than you planned for. Before it becomes a missed payment, there is a set of measures your bank is expected to offer you — and several more that exist outside it.",

  summary:
    "Deferrals, extended amortization and interest-only relief — what your bank is expected to offer, what each one really costs, and what to do first.",

  metaTitle: "Mortgage Payment Relief in Ontario",
  metaDescription:
    "Struggling with mortgage payments in Ontario? What relief banks are expected to offer, what extending your amortization really costs, and what to do first.",

  intro: [
    "The instinct when money gets tight is to say nothing and hope the next month is better. It is completely understandable and it is the single most expensive thing you can do, because almost every option available to you gets worse once a payment has actually been missed.",
    "There is more structure here than most people realise. Since 2023 the Financial Consumer Agency of Canada has set out formal expectations for how banks treat mortgage holders at risk of default — including relief they should be offering proactively, and information they must give you before you agree to anything. Knowing what those are changes the conversation.",
  ],

  blocks: [
    {
      h: "Your bank is expected to help before you default",
      p: [
        "FCAC's Guideline on Existing Consumer Mortgage Loans in Exceptional Circumstances sets expectations for banks and other federally regulated lenders. It applies where you hold a mortgage on your principal residence and are at risk of not keeping up with the payments.",
        "It is worth knowing what those expectations actually are, because they are more demanding than most people assume — and because the measures are meant to be offered to you rather than extracted from you.",
      ],
      list: [
        {
          t: "They should be watching for it",
          d: "Banks are expected to monitor for early signs of mortgage default, establish criteria for offering relief, and contact you proactively if you are at risk rather than waiting for you to call.",
        },
        {
          t: "Prepayment penalties waived",
          d: "On a lump-sum payment made to avoid negative amortization, and where you are selling your principal residence. Two of the most expensive charges in a mortgage, waived in exactly the circumstances where they hurt most.",
        },
        {
          t: "Fees and costs waived",
          d: "Internal fees or costs, for a limited period, when a relief measure starts.",
        },
        {
          t: "No interest charged on interest",
          d: "For a limited period, where the relief measure has pushed you into negative amortization. This is the one that quietly compounds if nobody asks for it.",
        },
        {
          t: "Missed payments not reported",
          d: "Where the bank has agreed you may miss a payment as part of a relief measure, it is expected not to report that missed payment to the credit bureaus. An agreed deferral and a payment you simply did not make are treated very differently — which is the whole argument for calling early.",
        },
      ],
      aside: {
        h: "What they must tell you before you agree",
        p: "Before you consent to any relief measure, the bank is expected to give you — clearly, simply and not misleadingly — the balance you owe before the measure takes effect, the impact on the total cost of your mortgage in dollars, the impact on your amortization period, your new payment amount, date and frequency, your new rate and whether it is fixed or variable, and the date the change takes effect. Your express consent is required. If you are not given the dollar figure, ask for it in writing before you sign.",
      },
    },
    {
      h: "Understand negative amortization before you agree to anything",
      p: [
        "This is the mechanism underneath most payment relief, and it is the part that does the damage quietly.",
        "If your payment stops covering the interest you are being charged, the shortfall does not disappear. Your lender adds the unpaid interest to what you owe. Your balance goes up rather than down, and next month's interest is calculated on the larger figure. That is negative amortization.",
        "Left alone it compounds. The total you owe keeps climbing, and over a long enough period it is genuinely possible to owe more than the home is worth. Relief that creates negative amortization is not wrong — sometimes it is exactly the right short-term trade — but you should agree to it knowing that is what is happening, and with a date by which it ends.",
      ],
    },
    {
      h: "Extending your amortization, and what it actually costs",
      p: [
        "This is the most commonly offered measure because it works: stretching the remaining balance over more years lowers the monthly payment immediately, without changing your rate.",
        "It is also the most expensive thing on this page. FCAC's own guidance is blunt about it — think twice, because the additional interest can add thousands or tens of thousands of dollars to what the mortgage costs you in total. You are not reducing the debt. You are paying it over more years, and paying interest for all of them.",
        "Where a bank offers it, it is expected to build a plan with you for restoring your original amortization, to offer the shortest extension that solves the problem, and to tell you plainly what the long-term impact is. If an extension is presented with no discussion of when it ends, that is the conversation to insist on having.",
      ],
      aside: {
        h: "Ask for the total, not the monthly",
        p: "The monthly saving is the number you will be shown. The number that matters is the total interest over the life of the mortgage, before and after. Any lender can produce both. A payment that drops by a manageable amount but adds five figures to the total cost is a decision worth making deliberately rather than by relief.",
      },
    },
    {
      h: "The other measures, and where they fit",
      p: [
        "Beyond what your existing lender offers, there are structural options. Which one is right depends on whether the problem is temporary or permanent — and being honest with yourself about that is most of the work.",
      ],
      list: [
        {
          t: "A skip or deferred payment",
          d: "Many mortgages include a limited number of skipped payments. Useful for a genuinely short gap. The skipped interest is added to your balance, so it is a small dose of negative amortization by design.",
        },
        {
          t: "Changing payment frequency",
          d: "Moving from an accelerated schedule back to standard monthly lowers what leaves your account each month. It costs you the extra principal you were putting down, but it is reversible and it costs nothing to arrange.",
        },
        {
          t: "Interest-only, usually through a line of credit",
          d: "Your balance stops falling but stops growing too. Cheaper than negative amortization, though it needs the equity and the credit profile to qualify, and it is a holding position rather than a plan.",
        },
        {
          t: "Refinancing",
          d: "Re-amortizing the whole mortgage, potentially consolidating other debt into it at a much lower rate. The most effective option where the equity and the qualifying income are both there — and covered properly on the refinance page.",
        },
        {
          t: "Moving to a B lender for a term",
          d: "If the income or credit no longer fits an A lender's template, a B lender can carry you through the gap at a higher cost while the file is repaired. Only sensible with a written exit plan.",
        },
        {
          t: "A private mortgage with no monthly payment",
          d: "Some private mortgages genuinely require nothing monthly — the interest is deducted from the advance or added to the balance and settled at maturity. Short-term, the most expensive option here, and only appropriate with a firm exit date.",
        },
        {
          t: "Selling on your own terms",
          d: "Nobody wants this on the list, but a sale you choose is a different financial outcome from a sale forced on you. Where the gap is structural rather than temporary, acting early preserves your equity and your credit.",
        },
      ],
    },
    {
      h: "What to do, in order",
      p: [
        "None of this needs a decision today, and the first three steps cost nothing.",
      ],
      list: [
        {
          t: "Call your lender before you miss anything",
          d: "This is the whole ball game. An agreed relief measure and a missed payment are different events with different consequences — including whether it reaches your credit file at all.",
        },
        {
          t: "Ask what relief they offer, specifically",
          d: "Name the measures. Prepayment penalty waivers, fee waivers, no interest on interest, extended amortization. You are asking about things they are expected to have policies for.",
        },
        {
          t: "Get the numbers in writing",
          d: "Balance before, total cost impact in dollars, amortization impact, new payment, new rate, effective date. You are entitled to all of it before you consent.",
        },
        {
          t: "Work out whether this is temporary or structural",
          d: "Three months of reduced hours is a different problem from a permanent drop in income, and it points to a different solution. Relief that assumes recovery which does not come is how people end up with a larger balance and the same problem.",
        },
        {
          t: "Then compare against the alternatives",
          d: "This is where I am useful. A relief measure from your existing lender is one option among several, and it is the only one they will show you.",
        },
      ],
    },
  ],

  honest: {
    h: "When payment relief makes things worse",
    p: [
      "If the shortfall is permanent, relief is a delay rather than a fix. Extending amortization on an income that is not coming back means a bigger balance, a longer term, and the same conversation in a year with fewer options and less equity. Facing that early is unpleasant and it is much cheaper.",
      "If you are being offered an extended amortization with no plan to restore it, push back. The extension is supposed to be the shortest one that solves the problem, with a route back. An open-ended one quietly costs you tens of thousands and nobody ever revisits it.",
      "If relief will push you into negative amortization and you have savings that could cover the gap instead, run both numbers before you choose. Unpaid interest compounding against your home is expensive money, and it is easy to underestimate because nothing leaves your bank account.",
      "And if the real problem is consumer debt rather than the mortgage, folding it into the mortgage without changing the spending behind it converts unsecured debt into debt secured against your home. The balances usually rebuild, and the second time round the equity is gone. I will tell you if that is what I am looking at.",
    ],
  },

  faqs: [
    {
      q: "Will asking my bank for help hurt my credit score?",
      a: "Asking does not. What matters is what happens afterwards. Where your bank agrees you may miss a payment as part of a relief measure, it is expected not to report that missed payment to the credit bureaus — which is precisely why calling before you miss one is so much better than calling after. A payment you simply do not make is reported normally.",
    },
    {
      q: "Is my bank actually required to offer me relief?",
      a: "FCAC sets out expectations rather than a statutory entitlement, and they apply to banks and other federally regulated lenders where you hold a mortgage on your principal residence and are at risk of default. In practice those expectations are detailed, banks report to FCAC on how they are meeting them, and the measures are meant to be offered proactively. Ask for them by name.",
    },
    {
      q: "How much does extending my amortization really cost?",
      a: "More than most people expect. FCAC warns that it can add thousands or tens of thousands of dollars in additional interest. The monthly payment falls, which is the point, but the total you repay over the life of the mortgage rises significantly. Ask your lender for the total interest before and after, in dollars, not just the new payment.",
    },
    {
      q: "What is negative amortization?",
      a: "It is when your payment no longer covers the interest being charged, so the unpaid interest is added to your balance instead. Your mortgage grows rather than shrinks, and future interest is charged on the larger amount. Some relief measures cause it deliberately as a short-term trade. It is manageable with an end date and expensive without one.",
    },
    {
      q: "Can I get relief on a mortgage that is not with a bank?",
      a: "FCAC's expectations apply to federally regulated institutions. Credit unions, provincially regulated lenders and private lenders sit outside that, so what is available depends on the lender and your contract. It is still worth asking early — most lenders would rather restructure than foreclose — but do not assume the same framework applies.",
    },
    {
      q: "I have already missed payments. Is it too late?",
      a: "No, though your options are narrower and cost more than they would have. Arrears can often still be resolved through a refinance or a term with an alternative lender while the file recovers. The thing that genuinely closes doors is silence — the further into the process it goes, the fewer lenders will look at it.",
    },
  ],

  calculators: ["mortgage-payment", "affordability", "stress-test"],
  related: ["refinance", "alternative-lending", "bad-credit"],

  verified: "August 2026",
  sources: [
    {
      name: "Financial Consumer Agency of Canada — Paying your mortgage when experiencing financial difficulties",
      href: "https://www.canada.ca/en/financial-consumer-agency/services/rights-responsibilities/rights-mortgages/financial-difficulties.html",
    },
    {
      name: "Financial Consumer Agency of Canada — Guideline on Existing Consumer Mortgage Loans in Exceptional Circumstances",
      href: "https://www.canada.ca/en/financial-consumer-agency/services/industry/commissioner-guidance/mortgage-loans-exceptional-circumstances.html",
    },
    {
      name: "Financial Consumer Agency of Canada — Mortgage terms and amortization",
      href: "https://www.canada.ca/en/financial-consumer-agency/services/mortgages/mortgage-terms-amortization.html",
    },
  ],
};

export default page;
