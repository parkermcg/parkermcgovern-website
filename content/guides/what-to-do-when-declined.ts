import type { Guide } from "@/lib/content/guides";

const guide: Guide = {
  slug: "what-to-do-when-declined",
  cluster: "working-with-an-agent",
  title: "The bank said no. What that actually means",
  lede:
    "A decline is one institution applying its own rules to your file. It is not a verdict on whether you can get a mortgage, and it is usually fixable.",
  metaTitle: "Mortgage Application Declined: What Next",
  metaDescription:
    "Why banks decline mortgage applications, what to ask for afterwards, and the realistic routes forward — including when waiting is the better decision.",

  published: "2026-07-25",
  updated: "2026-07-25",

  intro: [
    "Being declined feels personal. It arrives as a short message with no real explanation, and most people conclude that mortgages are simply not available to them.",
    "That conclusion is usually wrong. Every lender applies its own criteria to income, credit and property, and those criteria differ more than people expect. A decline tells you about one lender's rules, not about your prospects generally.",
  ],

  takeaways: [
    "Ask the lender specifically why. You cannot fix a problem you have not identified.",
    "Do not immediately apply elsewhere — repeated applications create enquiries without improving the outcome.",
    "The same file can pass at a different lender because income and credit are assessed differently.",
    "Some declines are genuinely about timing, and waiting a few months is the cheapest fix available.",
    "Alternative lenders exist for temporary situations, cost more, and need an exit plan.",
  ],

  sections: [
    {
      h: "First, find out why",
      p: [
        "Ask the lender directly for the reason. Ask whether it was income, credit, the property, or the debt ratios. This is the single most useful thing you can do, and most people skip it.",
        "The reason determines everything that follows. A decline over the property is a completely different problem from a decline over credit history, and the routes forward have nothing in common.",
        "If you were declined over something on your credit report, you are entitled to see that report. Pull it and check it — errors are more common than people assume, and a correction can change the outcome without anything else changing.",
      ],
    },
    {
      h: "The common reasons, and what each one means",
      p: [
        "Most declines fall into a handful of categories.",
      ],
      list: [
        {
          t: "Provable income",
          d: "Especially common for self-employed applicants, where legitimate write-offs reduce the income a lender will count. The business may be healthy while the tax return understates it.",
        },
        {
          t: "Debt service ratios",
          d: "Everything is affordable in practice, but a car loan and a line of credit push you past the ratio the lender accepts. Often the most straightforwardly fixable.",
        },
        {
          t: "Credit history",
          d: "Missed payments, a period of difficulty, high utilisation, or simply a thin file with little history to assess.",
        },
        {
          t: "The property",
          d: "Lenders approve properties as well as people. Rural acreage, unusual construction, former grow operations, live-work units and small multi-unit buildings can all fall outside what a given lender will hold.",
        },
        {
          t: "Employment stability",
          d: "Probationary periods, recent job changes, or contract work with a short history. Frequently a timing problem rather than a permanent one.",
        },
      ],
    },
    {
      h: "What not to do next",
      p: [
        "Do not immediately submit applications to several other lenders hoping one says yes.",
        "Each application generates a credit enquiry, and a file that has been shopped around indiscriminately looks worse to the lenders seeing it later. More importantly, if the underlying reason has not been addressed, the next lender will very likely reach the same conclusion.",
        "The productive sequence is: understand the reason, decide whether it is fixable now or needs time, then place the application deliberately with a lender whose criteria actually suit it.",
      ],
      aside: {
        h: "Why the same file passes elsewhere",
        p: "Lenders differ substantially in how they treat self-employed income, which deductions they add back, how they credit rental income, and how they view credit events. These are not small differences — the same documents can produce materially different qualifying income at two institutions.",
      },
    },
    {
      h: "The realistic routes forward",
      p: [
        "Depending on the reason, there are four broad options.",
      ],
      list: [
        {
          t: "A different A lender",
          d: "If the decline was about a specific policy rather than your overall strength, another bank or monoline lender may simply assess it differently at similar pricing.",
        },
        {
          t: "Fix the problem and wait",
          d: "Paying down a car loan, clearing a credit card balance, passing probation, or filing another year of tax returns can move you back inside standard criteria. Often the cheapest option by a wide margin.",
        },
        {
          t: "A B lender",
          d: "Regulated institutions pricing for slightly more risk. Rates sit above A pricing and there is usually a lender fee, but the criteria are broader.",
        },
        {
          t: "Private lending",
          d: "Equity-based, most expensive, shortest terms. Appropriate as a bridge with a defined exit plan, and genuinely inappropriate as a long-term arrangement.",
        },
      ],
    },
    {
      h: "When waiting really is the answer",
      p: [
        "This is worth saying plainly, because it is the advice that costs a broker a commission and is sometimes still correct.",
        "If three months of deliberate credit repair, or waiting for a second year of business tax returns, would move you from expensive alternative lending back into A pricing — those months are worth more than any rate negotiation. The difference in cost across a full mortgage term is usually far larger than what waiting costs you.",
        "If a purchase deadline makes waiting impossible, that changes the calculation. But it should be a deliberate decision made with the numbers in front of you, not a default because someone offered you a product today.",
      ],
    },
  ],

  faqs: [
    {
      q: "Does being declined show up on my credit report?",
      a: "The application and its credit enquiry are recorded. The decline itself is not recorded as an outcome — other lenders see that you applied, not that you were refused.",
    },
    {
      q: "How long should I wait before trying again?",
      a: "It depends entirely on the reason. A ratio problem fixed by clearing a loan can be revisited immediately. Credit repair generally needs twelve months or more of clean history to show meaningfully.",
    },
    {
      q: "Will a broker just send my file everywhere?",
      a: "They should not, and I do not. Scattering an application generates enquiries and declines without improving your chances. The work is in matching your file to the lenders whose criteria fit it, which usually means one or two well-chosen submissions.",
    },
  ],

  sources: [
    {
      name: "Financial Consumer Agency of Canada — Credit reports and scores",
      href: "https://www.canada.ca/en/financial-consumer-agency/services/credit-reports-score.html",
    },
    {
      name: "Financial Consumer Agency of Canada — Mortgage pre-approval and qualifying",
      href: "https://www.canada.ca/en/financial-consumer-agency/services/mortgages/mortgage-preapproval-qualify.html",
    },
  ],

  relatedGuides: ["does-rate-shopping-hurt-credit", "stress-test-explained"],
  relatedServices: ["alternative-lending", "self-employed", "new-to-canada"],
  relatedCalculators: ["affordability", "stress-test"],
};

export default guide;
