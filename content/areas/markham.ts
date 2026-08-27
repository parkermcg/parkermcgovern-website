import type { ServiceArea } from "@/lib/content/areas";

/**
 * Markham's distinct angle: condominium and townhouse financing, plus
 * newcomer files. Both are real mortgage topics with different mechanics
 * from a standard freehold purchase by an established borrower.
 *
 * No population or demographic statistics — none verified, and none needed
 * to make the point (CLAUDE.md §4).
 */
const area: ServiceArea = {
  slug: "markham",
  name: "Markham",
  eyebrow: "Markham",
  title: "The building gets approved too, not just you.",
  lede:
    "Markham has a large share of condominiums and townhouses, and a great many buyers who arrived in Canada recently. Both change how a mortgage file is assessed — and neither is a problem once you know what lenders are actually looking at.",

  summary:
    "Condo and townhouse financing, what a status certificate does to an approval, and mortgages without a long Canadian credit history.",

  metaTitle: "Mortgages in Markham — Condos & Newcomers",
  metaDescription:
    "Buying a condo or townhouse in Markham, or arranging a mortgage without long Canadian credit history. What lenders check and how to prepare for it.",

  intro: [
    "The mortgage rules in Markham are the same as everywhere else in Ontario, and so is the land transfer tax — Markham sits outside Toronto, so there is no municipal land transfer tax on top of the provincial one.",
    "What comes up more often here than in most of York Region is a pair of situations that change how a file gets assessed: buying into a condominium corporation, and buying without the long Canadian credit history lenders are used to seeing.",
  ],

  blocks: [
    {
      h: "Buying a condo means the corporation is underwritten as well",
      p: [
        "On a freehold purchase, the lender assesses you and the property. On a condominium purchase, it also assesses the corporation you are buying into — and a perfectly strong borrower can be declined over a building.",
      ],
      list: [
        {
          t: "The status certificate",
          d: "The document that tells your lender and lawyer what condition the corporation is in — its finances, its rules, any special assessments, and any litigation it is party to. Your offer should be conditional on reviewing it.",
        },
        {
          t: "The reserve fund",
          d: "The corporation's savings for major repairs. An underfunded reserve signals future special assessments, and lenders treat it as a risk to the property's value rather than a detail.",
        },
        {
          t: "How much of the building is rented",
          d: "Some lenders limit how high the proportion of rented units can be before they will lend in a building. It is a policy that varies by lender and is not something you can influence.",
        },
        {
          t: "Condo fees reduce what you can borrow",
          d: "Lenders count a portion of the monthly fee in your debt service ratios. A high fee reduces your maximum mortgage by more than the fee itself, because it consumes room in a ratio. Two units at the same price with different fees produce different approvals.",
        },
        {
          t: "Litigation",
          d: "A corporation involved in a significant legal dispute can be difficult or impossible to finance at some lenders until it resolves, regardless of how good your file is.",
        },
      ],
      aside: {
        h: "This is why the financing condition matters more on a condo",
        p: "An unconditional offer on a freehold home is risky. An unconditional offer on a condominium is riskier still, because there is a second thing being approved that you have no control over and cannot fix. If a building turns out to be unfinanceable at your lender, you are still bound to the purchase.",
      },
    },
    {
      h: "A short Canadian credit history is not the same as bad credit",
      p: [
        "Lenders are pattern-matching against a domestic credit file. Someone who has been in Canada for two years has a thin file rather than a damaged one, and those are entirely different problems with entirely different solutions.",
        "There are newcomer programs built for exactly this, with their own eligibility windows and documentation requirements — often accepting alternative evidence in place of a long domestic credit record. Permanent residents and work permit holders are treated differently from each other, and the down payment expectations differ too.",
        "The practical mistake is assuming a bank's decline means the answer is no. Frequently it means the file went to a lender whose template does not fit it, when another lender's does. That is covered in depth on the new to Canada page.",
      ],
    },
    {
      h: "What is the same here as everywhere else",
      p: [
        "Worth stating plainly. Your lender options, your rate, the stress test, the debt service ratios and the down payment minimums do not change because the property is in Markham. Nobody has a Markham rate.",
        "Land transfer tax is the provincial tax only, the same as Vaughan, Richmond Hill, Aurora and Newmarket — the municipal land transfer tax applies inside Toronto and nowhere else. Property tax rates are set by each municipality and do differ, which affects your debt service ratios; your current rate is published by the City of Markham and is worth checking against the ratio calculation rather than estimated.",
      ],
    },
  ],

  honest: {
    h: "When a condo is the wrong purchase",
    p: [
      "If the fee is high relative to the price, run the arithmetic before falling for the unit. A large monthly fee both reduces what you can borrow and rises over time in ways you do not control. Two units at the same price are not the same purchase.",
      "If the reserve fund is thin and the building is ageing, expect special assessments. They are not optional and they are not small, and a lender reading the same status certificate will price the risk accordingly.",
      "If you are likely to move within a couple of years, the transaction costs of buying and selling will very likely exceed anything you build in equity over that period — and condominiums in particular can be slower to sell when a lot of similar units come to market at once.",
      "And if you are stretching to the very top of your approval on a unit with a rising fee, that is the combination that gets people into trouble at renewal. I would rather tell you that before you make the offer.",
    ],
  },

  faqs: [
    {
      q: "Can a lender refuse a mortgage because of the condo building?",
      a: "Yes, and it happens. Lenders assess the corporation as well as the borrower — the reserve fund, the proportion of rented units, any litigation and the overall financial condition shown in the status certificate. A strong applicant can be declined over a building, which is exactly why a financing condition matters more on a condo purchase.",
    },
    {
      q: "How do condo fees affect how much I can borrow?",
      a: "Lenders include a portion of your monthly fee in the debt service ratios used to calculate your maximum mortgage. Because it consumes room in a ratio rather than reducing your borrowing pound for pound, a high fee can cut your maximum mortgage by considerably more than the fee itself.",
    },
    {
      q: "Can I get a mortgage without a long Canadian credit history?",
      a: "Often yes. Newcomer programs exist for precisely this and can accept alternative documentation in place of a long domestic credit file. Eligibility windows, down payment expectations and treatment of permanent residents versus work permit holders all vary, so it is worth having the file looked at rather than assuming a bank decline is the final answer.",
    },
    {
      q: "Is land transfer tax higher in Markham than elsewhere?",
      a: "No. Markham is outside the City of Toronto, so only the provincial land transfer tax applies — the same as Vaughan, Richmond Hill, Aurora and Newmarket. Only purchases inside Toronto attract the additional municipal land transfer tax.",
    },
  ],

  services: ["first-time-buyer", "new-to-canada", "investment-property"],
  calculators: ["affordability", "mortgage-payment", "cmhc-insurance"],

  verified: "August 2026",
  sources: [
    {
      name: "City of Markham — Property taxes",
      href: "https://www.markham.ca/permits-licences-taxes/property-taxes",
    },
    {
      name: "Ontario Ministry of Finance — Land Transfer Tax",
      href: "https://www.ontario.ca/document/land-transfer-tax",
    },
  ],
};

export default area;
