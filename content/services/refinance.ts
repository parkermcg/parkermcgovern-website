import type { ServicePage } from "@/lib/content/types";

/**
 * Refinance and debt consolidation are deliberately one page. They are
 * mechanically the same transaction — borrowing against accumulated equity —
 * and separate pages would have failed the cannibalisation test in
 * docs/sitemap-plan.md §2.
 */
const page: ServicePage = {
  slug: "refinance",
  eyebrow: "Refinance & debt consolidation",
  title: "Your house has been quietly accumulating money. Here's how to reach it.",
  lede:
    "Refinancing replaces your existing mortgage with a larger one and hands you the difference. It is the cheapest borrowing most people have access to — and it is not free, which is the part that gets skipped.",

  summary:
    "Reach the equity you have built, or fold high-interest debt into one payment — including when it is not worth doing.",

  metaTitle: "Refinance & Debt Consolidation Ontario",
  metaDescription:
    "How refinancing works in Ontario: the 80% equity ceiling, prepayment penalties, and whether consolidating debt into your mortgage actually saves money.",

  intro: [
    "There are three reasons people refinance: to consolidate expensive debt into one cheaper payment, to fund something substantial like a renovation or a down payment on a second property, or to restructure a mortgage that no longer fits their life.",
    "All three work. All three cost something to do. The question is never whether refinancing is possible — it is whether the total cost of doing it is less than the problem it solves.",
  ],

  blocks: [
    {
      h: "The eighty percent ceiling",
      p: [
        "When you refinance, you can borrow up to eighty percent of your home's current appraised value, less whatever you still owe. That eighty percent figure is a hard ceiling — refinances cannot carry mortgage default insurance, so there is no route above it the way there is when purchasing.",
        "Two consequences follow. Your available equity depends on a current appraisal rather than what you think the property is worth, and if you are already borrowing close to eighty percent, refinancing may not release anything meaningful.",
      ],
      aside: {
        h: "Worked through simply",
        p: "A property appraised at $900,000 gives you a ceiling of $720,000. If your existing mortgage balance is $500,000, you could access up to $220,000 — before costs, and subject to qualifying for the larger payment.",
      },
    },
    {
      h: "Breaking your existing mortgage costs money",
      p: [
        "If you refinance mid-term, you are breaking a contract, and there is a penalty. How it is calculated depends on what kind of mortgage you hold, and the difference between the two methods is enormous.",
      ],
      list: [
        {
          t: "Variable rate mortgages",
          d: "Almost always three months' interest. Predictable, and usually a manageable number.",
        },
        {
          t: "Fixed rate mortgages",
          d: "The greater of three months' interest or the interest rate differential — the IRD. When rates have fallen since you signed, the IRD can run to many thousands of dollars, and lenders calculate it in ways that are not standardised between them.",
        },
      ],
      aside: {
        h: "Get the real number first",
        p: "Before deciding anything, call your lender and ask for your exact payout penalty in writing as of today. It is the single most important number in this decision and it is the one people most often estimate rather than confirm.",
      },
    },
    {
      h: "The debt consolidation arithmetic",
      p: [
        "This is the most common reason people refinance, and the arithmetic is genuinely compelling on the surface. Credit card debt and unsecured lines of credit carry rates several times higher than mortgage rates. Moving that debt into your mortgage lowers the interest rate dramatically and replaces several payments with one.",
        "The monthly relief is real and it can be substantial. For someone carrying meaningful card balances, consolidating can free up hundreds of dollars a month immediately.",
        "But there is a catch that nobody puts on a marketing page, so here it is.",
      ],
      aside: {
        h: "The catch",
        p: "You are taking debt that would have been repaid in a few years and stretching it across the remaining amortisation of your mortgage, potentially twenty-five years. A lower rate over a much longer period can cost more in total interest than the higher rate would have. The monthly payment improves; the lifetime cost may not.",
      },
    },
    {
      h: "How to make consolidation actually work",
      p: [
        "The strategy that works is straightforward and requires discipline rather than cleverness. Consolidate the debt, then keep making the payment you were making before.",
        "If consolidating frees up six hundred dollars a month, direct that six hundred at the mortgage as a prepayment rather than absorbing it into your spending. You get the cash-flow safety net if you need it, and the debt is repaid on something close to its original timeline instead of over decades. Every mortgage has prepayment privileges built in, and this is exactly what they are for.",
        "The failure case is well documented and worth naming plainly: consolidate, feel the relief, and gradually rebuild the card balances over two or three years. Now there is the mortgage debt and the card debt, and the equity that was available has been spent.",
      ],
    },
    {
      h: "Refinance, HELOC, or second mortgage",
      p: [
        "Refinancing is not always the right instrument. There are three ways to reach your equity and they suit different situations.",
      ],
      list: [
        {
          t: "Refinance",
          d: "Best when you need a lump sum, your existing rate is not especially good, or your term is close to ending anyway. Lowest rate, but you break your existing mortgage and pay the penalty.",
        },
        {
          t: "Home equity line of credit",
          d: "Best when you need flexible access over time rather than one lump sum — a renovation in stages, for instance. Rates are higher than a mortgage and usually variable, but you only pay interest on what you draw.",
        },
        {
          t: "Second mortgage",
          d: "Best when your first mortgage has an excellent rate or a punishing penalty that makes breaking it uneconomic. You leave the first mortgage untouched and add a second charge behind it, at a higher rate.",
        },
      ],
    },
    {
      h: "When traditional refinancing is not available",
      p: [
        "If your income or credit will not currently support a larger mortgage with an A lender, there are alternative and private lending routes to the same equity. They cost more and they are appropriate as a bridge with a defined exit rather than a destination.",
        "That is a genuine option and worth understanding properly rather than dismissing — but it needs its own honest treatment, which is on the alternative lending page.",
      ],
    },
  ],

  honest: {
    h: "When not to refinance",
    p: [
      "If nothing about your income or spending is going to change, consolidating debt will not fix the underlying problem. It converts unsecured debt, which cannot take your home, into debt secured against it. If the balances rebuild afterwards, you are in a materially worse position than before — with less equity and the same debt.",
      "If your prepayment penalty is large and your term ends within a year or so, waiting is very often cheaper. Refinancing at renewal costs nothing in penalties, and the difference can be thousands.",
      "If you are refinancing to invest the proceeds in something volatile, understand precisely what you are doing: borrowing against your home to take market risk. That can be a legitimate strategy, but it needs to be a deliberate decision with advice, not a by-product of a mortgage conversation.",
      "And if you only need a modest sum and your existing rate is excellent, a line of credit or simply not borrowing at all will usually beat breaking a good mortgage.",
    ],
  },

  faqs: [
    {
      q: "How much equity can I take out of my home?",
      a: "Up to eighty percent of the current appraised value, minus your existing mortgage balance. Refinances cannot be insured, so eighty percent is a firm ceiling rather than a guideline, and the appraisal is what counts rather than your own estimate of value.",
    },
    {
      q: "What will it cost to break my current mortgage?",
      a: "On a variable mortgage, usually three months' interest. On a fixed mortgage, the greater of three months' interest or the interest rate differential, which can be very large depending on when you signed and how lenders calculate it. Ask your lender for the exact figure in writing before making any decision.",
    },
    {
      q: "Does refinancing restart my amortisation?",
      a: "It can, and that is often how the payment stays manageable — but it also means paying interest for longer. You do not have to accept the longest amortisation offered. Keeping it closer to your original schedule costs more monthly and considerably less overall.",
    },
    {
      q: "Will refinancing hurt my credit score?",
      a: "There is a credit check involved, which has a small temporary effect. Consolidating high credit card balances usually helps your score over the following months, because it reduces credit utilisation — often the single largest negative factor in a score.",
    },
    {
      q: "Can I refinance if I am self-employed?",
      a: "Yes. The documentation differs — tax returns and financial statements rather than pay stubs — and there are lenders who specialise in it. It is worth reading the self-employed page alongside this one.",
    },
  ],

  calculators: ["mortgage-payment", "affordability", "stress-test"],
  related: ["alternative-lending", "no-payment", "investment-property"],

  verified: "July 2026",
  sources: [
    {
      name: "Financial Consumer Agency of Canada — Refinancing your mortgage",
      href: "https://www.canada.ca/en/financial-consumer-agency/services/mortgages/refinance-mortgage.html",
    },
    {
      name: "Financial Consumer Agency of Canada — Paying off your mortgage faster",
      href: "https://www.canada.ca/en/financial-consumer-agency/services/mortgages/pay-off-mortgage-faster.html",
    },
  ],
};

export default page;
