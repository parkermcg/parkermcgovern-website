import type { Guide } from "@/lib/content/guides";

const guide: Guide = {
  slug: "mortgage-penalties-ird",
  cluster: "renewal",
  title: "Mortgage penalties: why breaking a fixed mortgage can cost thousands",
  lede:
    "There are two ways lenders calculate a prepayment penalty. One is predictable and modest. The other is neither, and it is the one attached to most fixed-rate mortgages.",
  metaTitle: "Mortgage Penalties: IRD vs 3 Months",
  metaDescription:
    "How Canadian lenders calculate mortgage prepayment penalties, why the interest rate differential can run to thousands, and how to find out what yours would be.",

  published: "2026-07-25",
  updated: "2026-07-25",

  intro: [
    "If you break a mortgage before the end of its term — to refinance, to move, or to take a better rate elsewhere — you pay a penalty. Everyone knows that much.",
    "What almost nobody knows before it happens is that the two methods lenders use to calculate that penalty produce wildly different numbers, and that the method applied to you was decided when you signed, not when you leave.",
  ],

  takeaways: [
    "Variable-rate mortgages almost always carry a penalty of three months' interest — predictable and usually modest.",
    "Fixed-rate mortgages carry the greater of three months' interest or the interest rate differential (IRD), which can run to five figures.",
    "Lenders calculate the IRD in different ways, and the method is not standardised between them.",
    "You can ask your lender for your exact payout penalty in writing at any time. Do that before making any decision.",
    "At the end of your term there is no penalty at all — which is why timing matters more than negotiating.",
  ],

  sections: [
    {
      h: "Three months' interest: the simple one",
      p: [
        "This is roughly what it sounds like. The lender charges you about three months of interest on your outstanding balance at your current rate. On a balance of a few hundred thousand dollars this typically lands in the low thousands.",
        "It is predictable, you can estimate it yourself within a few dollars, and it is the standard penalty on variable-rate mortgages.",
      ],
    },
    {
      h: "The interest rate differential: the expensive one",
      p: [
        "The IRD is meant to compensate the lender for interest it will not now receive, because it would have to re-lend your money at today's rates instead of the rate you agreed.",
        "In principle it is the difference between your rate and a comparison rate, applied to your balance, for the months remaining in your term. In practice the phrase doing all the work is 'a comparison rate' — because which rate a lender compares against is where the number is really decided.",
        "Some lenders compare against their current posted rate for a term matching your remaining time. Posted rates are typically well above what anyone actually pays, and using them widens the gap the calculation is based on. Others use a discounted rate, which produces a much smaller penalty. Both approaches are legal and disclosed in your mortgage contract.",
      ],
      aside: {
        h: "Why the difference is so large",
        p: "The same borrower, same balance, same remaining term, can face a penalty of a few thousand dollars at one lender and well into five figures at another — purely because of the comparison rate written into the contract. This is one of the strongest arguments for reading the penalty clause before signing rather than after.",
      },
    },
    {
      h: "When the IRD is at its worst",
      p: [
        "The IRD grows with two things: how far your rate sits above the comparison rate, and how much time is left in your term.",
        "That means the painful combination is a mortgage signed when rates were high, being broken early in its term, at a moment when rates have since fallen. Someone two years into a five-year fixed term, with three years remaining and rates lower than when they signed, is in the most expensive position the calculation can produce.",
        "Conversely, if rates have risen since you signed, the differential can be zero or negative — in which case the three-months'-interest floor applies instead, and breaking may be far cheaper than you assumed.",
      ],
    },
    {
      h: "How to find out what yours actually is",
      p: [
        "Do not estimate this. Call your lender and ask for your exact payout penalty as of today, in writing. They are obliged to tell you and it takes one phone call.",
        "Ask two follow-up questions while you have them: which comparison rate they use in the calculation, and how long the quoted figure is valid for. Payout quotes usually expire, because the number moves as rates move.",
        "Federally regulated lenders are required to disclose how prepayment charges are calculated, and to make calculators and information available. If the explanation you get is vague, ask them to point you at the clause in your own mortgage documents.",
      ],
    },
    {
      h: "Ways the penalty can be reduced or avoided",
      p: [
        "There are legitimate routes around a large penalty, and which apply depends on your contract and your plans.",
      ],
      list: [
        {
          t: "Wait for maturity",
          d: "At the end of your term there is no penalty. If you are within a few months of it, waiting is almost always cheaper than any rate you could negotiate now.",
        },
        {
          t: "Use your prepayment privileges first",
          d: "Most mortgages let you pay down a percentage of the original balance each year without penalty. Making that lump-sum payment immediately before breaking reduces the balance the penalty is calculated on.",
        },
        {
          t: "Port the mortgage",
          d: "If you are moving rather than refinancing, many mortgages can be transferred to the new property, avoiding the penalty entirely. Conditions and timelines apply, and they are strict.",
        },
        {
          t: "Blend and extend",
          d: "Some lenders will blend your existing rate with a current one and extend the term, rather than charging a penalty. Convenient, and worth comparing against simply paying the penalty and moving — the blended rate is not always the better deal.",
        },
      ],
    },
    {
      h: "What this means when you are choosing a mortgage",
      p: [
        "The penalty clause is one of the least-read and most expensive parts of a mortgage contract. A lender offering a slightly lower rate with a punitive IRD calculation can easily cost more than a marginally higher rate with a fair one — if there is any chance you will move or refinance mid-term.",
        "If your life is settled and you are confident you will ride out the full term, this matters less. If a move, a growing family, or a possible refinance is plausible within the next few years, it deserves as much attention as the rate itself.",
      ],
    },
  ],

  faqs: [
    {
      q: "Can I negotiate a mortgage penalty?",
      a: "Rarely on its own, but there is sometimes room if you are staying with the same lender for a new mortgage. A lender may reduce or absorb a penalty to keep your business, which is worth asking about directly.",
    },
    {
      q: "Is the penalty tax deductible?",
      a: "For an owner-occupied home, no. On a rental or investment property the treatment can differ, and it is worth confirming with an accountant rather than assuming either way.",
    },
    {
      q: "Does the penalty come out of pocket or off the mortgage?",
      a: "It is usually added to the payout amount and settled through your lawyer at closing, so it comes out of the proceeds or the new mortgage rather than being written as a separate cheque. It is real money either way.",
    },
  ],

  sources: [
    {
      name: "Financial Consumer Agency of Canada — Paying off your mortgage faster",
      href: "https://www.canada.ca/en/financial-consumer-agency/services/mortgages/pay-off-mortgage-faster.html",
    },
    {
      name: "Financial Consumer Agency of Canada — Breaking your mortgage contract",
      href: "https://www.canada.ca/en/financial-consumer-agency/services/mortgages/breaking-mortgage-contract.html",
    },
  ],

  relatedGuides: ["fixed-vs-variable"],
  relatedServices: ["renewal", "refinance", "reverse-mortgage"],
  relatedCalculators: ["mortgage-payment"],
};

export default guide;
