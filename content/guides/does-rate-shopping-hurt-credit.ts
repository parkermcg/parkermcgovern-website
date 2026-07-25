import type { Guide } from "@/lib/content/guides";

const guide: Guide = {
  slug: "does-rate-shopping-hurt-credit",
  cluster: "working-with-an-agent",
  title: "Does shopping for a mortgage rate hurt your credit score?",
  lede:
    "The fear of damaging your score stops people comparing offers — which usually costs far more than the enquiry ever would.",
  metaTitle: "Does Mortgage Rate Shopping Hurt Your Credit Score?",
  metaDescription:
    "How credit enquiries work in Canada, why multiple mortgage checks in a short window count as one, and when a credit check actually happens.",

  published: "2026-07-25",
  updated: "2026-07-25",

  intro: [
    "This question comes up on nearly every first call, and the worry behind it is reasonable. People have heard that credit checks lower your score, so they assume shopping around must be expensive.",
    "The reality is more forgiving than the folklore, and the cost of not shopping is almost always larger than the effect of the enquiry.",
  ],

  takeaways: [
    "An initial conversation and a rough estimate need no credit check at all.",
    "Multiple mortgage enquiries in a short window are treated as a single check by Canadian credit bureaus.",
    "One hard enquiry typically has a small, temporary effect and recovers within months.",
    "Checking your own credit report is a soft enquiry and has no effect whatsoever.",
    "The rate difference from shopping properly dwarfs any impact on your score.",
  ],

  sections: [
    {
      h: "Soft and hard enquiries are different things",
      p: [
        "A soft enquiry happens when you check your own credit, or when a lender pre-screens you for a promotional offer. Soft enquiries are visible to you but do not affect your score at all. Check your own report as often as you like.",
        "A hard enquiry happens when you formally apply for credit and a lender pulls your file to make a decision. These are recorded, visible to other lenders, and can have a modest effect on your score.",
      ],
    },
    {
      h: "Why mortgage shopping is treated differently",
      p: [
        "Credit scoring models recognise a difference between someone opening five credit cards and someone comparing five mortgage offers. The first pattern suggests financial stress; the second is exactly the behaviour consumers are encouraged to engage in.",
        "So mortgage enquiries made within a short window are grouped and counted as a single enquiry for scoring purposes. Shopping several lenders over a couple of weeks does not compound the way five separate credit applications would.",
        "The practical advice that follows: if you are going to shop, do it within a concentrated period rather than spreading enquiries across several months.",
      ],
      aside: {
        h: "The broker advantage",
        p: "This is one of the structural reasons to use a mortgage agent rather than approaching lenders individually. Your application is submitted with a single credit pull, and I present that file to the lenders whose criteria it actually fits — rather than you authorising a new check at each institution.",
      },
    },
    {
      h: "When a credit check actually happens",
      p: [
        "Later in the process than most people assume. Here is the realistic sequence.",
      ],
      list: [
        {
          t: "An initial conversation",
          d: "No credit check. We can discuss your situation, run numbers and talk through options with nothing pulled at all.",
        },
        {
          t: "A rough estimate",
          d: "Still no check. Calculators and ballpark figures need no access to your credit file.",
        },
        {
          t: "Formal pre-approval",
          d: "This is where a credit check happens, because a lender is committing to a rate hold. You should be told before it occurs — I always do.",
        },
        {
          t: "Full approval",
          d: "Usually relies on the same pull if it is recent enough. A second check is not normally required.",
        },
      ],
    },
    {
      h: "What actually moves your score",
      p: [
        "Enquiries are a small component of a credit score. The factors that carry real weight are payment history and credit utilisation — whether you pay on time, and how much of your available credit you are using.",
        "Utilisation in particular is worth attention before applying. Carrying high balances relative to your limits can weigh on your score meaningfully more than an enquiry does, and paying balances down is a faster lever than most people realise.",
        "If your score matters for an application in the next few months, the productive move is reducing balances and ensuring nothing is missed — not avoiding a single mortgage enquiry.",
      ],
    },
    {
      h: "The cost of not shopping",
      p: [
        "Put the two risks side by side. One hard enquiry has a small, temporary effect that recovers within months.",
        "Accepting a rate that is a quarter of a percentage point higher than necessary, on a mortgage of a few hundred thousand dollars over a five-year term, costs thousands of dollars — money that does not come back.",
        "Framed that way, the arithmetic is not close. Being cautious about your credit file is sensible in general; letting it stop you comparing mortgage offers is expensive.",
      ],
    },
  ],

  faqs: [
    {
      q: "How long does a hard enquiry stay on my report?",
      a: "Enquiries typically remain visible on your report for around three years, though their effect on your score fades much sooner than that — usually within several months.",
    },
    {
      q: "Will you check my credit without telling me?",
      a: "No. A credit check only happens when we move to formal pre-approval, and I will tell you before it happens. An initial conversation requires nothing.",
    },
    {
      q: "Can I check my own credit score before applying?",
      a: "Yes, and it is a good idea. Checking your own report is a soft enquiry with no effect on your score. Both Canadian credit bureaus provide access to your report, and reviewing it early gives you time to correct errors before they affect an application.",
    },
  ],

  sources: [
    {
      name: "Financial Consumer Agency of Canada — Credit reports and scores",
      href: "https://www.canada.ca/en/financial-consumer-agency/services/credit-reports-score.html",
    },
    {
      name: "Financial Consumer Agency of Canada — Improving your credit score",
      href: "https://www.canada.ca/en/financial-consumer-agency/services/credit-reports-score/improve-credit-score.html",
    },
  ],

  relatedGuides: ["what-to-do-when-declined", "stress-test-explained"],
  relatedServices: ["first-time-buyer", "new-to-canada"],
  relatedCalculators: ["affordability"],
};

export default guide;
