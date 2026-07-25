import type { Guide } from "@/lib/content/guides";

const guide: Guide = {
  slug: "how-much-down-payment",
  cluster: "first-time-buyer",
  title: "How much down payment you actually need in Canada",
  lede:
    "The minimum is not one percentage. It is calculated in slices, and the answer on a $700,000 home is not five percent of $700,000.",
  metaTitle: "How Much Down Payment Do You Need in Canada?",
  metaDescription:
    "Canada's tiered minimum down payment rules explained, plus what changes at 20%, what happens at $1.5 million, and where the money is allowed to come from.",

  published: "2026-07-25",
  updated: "2026-07-25",

  intro: [
    "Almost everyone starts with the same wrong number. They have heard the minimum is five percent, they multiply the purchase price by five percent, and they save toward that figure.",
    "The rule is tiered. Above $500,000 the percentage changes for the portion above that line, which means the real minimum on a mid-priced home is meaningfully more than five percent of the whole thing.",
  ],

  takeaways: [
    "Five percent on the first $500,000; ten percent on the portion between $500,000 and $1.5 million.",
    "At $1.5 million and above, twenty percent is required and mortgage insurance is unavailable.",
    "On a $700,000 home the minimum is $45,000 — not $35,000.",
    "Below twenty percent down you pay a default insurance premium, which is added to your mortgage.",
    "The down payment is separate from closing costs, which need their own budget.",
  ],

  sections: [
    {
      h: "The tiers, worked through",
      p: [
        "The minimum is calculated on slices of the purchase price rather than applied to the whole amount.",
      ],
      list: [
        {
          t: "Up to $500,000",
          d: "Five percent. On a $400,000 home, that is $20,000.",
        },
        {
          t: "$500,000 to just under $1.5 million",
          d: "Five percent of the first $500,000, plus ten percent of the remainder. On a $700,000 home: $25,000 plus $20,000, so $45,000.",
        },
        {
          t: "$1.5 million and above",
          d: "Twenty percent minimum, with no default insurance available at any level. On a $1.6 million home, that is $320,000.",
        },
      ],
      aside: {
        h: "The cliff at $1.5 million",
        p: "The jump either side of this line is severe. Just under it, you might buy with roughly $125,000 down. At $1.5 million exactly, you need $300,000. If you are shopping near that threshold, the financing consequences of crossing it are worth understanding before you make an offer.",
      },
    },
    {
      h: "What changes at twenty percent",
      p: [
        "Twenty percent is the line where mortgage default insurance stops being mandatory. Below it, insurance is required and the premium is calculated on your loan and added to your mortgage — so you borrow it and pay interest on it for the life of the loan.",
        "The premium rises as your down payment shrinks. Because the rates step in bands rather than sliding smoothly, a small increase in your down payment can occasionally move you into a cheaper band and save more than the extra deposit itself.",
        "Counterintuitively, insured mortgages often carry slightly lower interest rates than uninsured ones, because the lender's risk is covered. Putting exactly twenty percent down is not automatically the cheapest outcome once you account for that — it is worth comparing rather than assuming.",
      ],
    },
    {
      h: "Where the money is allowed to come from",
      p: [
        "Lenders care about the source, and they will ask for evidence. Acceptable sources include the following.",
      ],
      list: [
        {
          t: "Your own savings",
          d: "The simplest case. Expect to show ninety days of account history to demonstrate the funds are genuinely yours and not recently borrowed.",
        },
        {
          t: "A gift from an immediate family member",
          d: "Common and entirely acceptable. You will need a signed gift letter confirming it is a gift and not a loan, plus evidence of the transfer.",
        },
        {
          t: "RRSP through the Home Buyers' Plan",
          d: "Withdraw toward a first home without immediate tax, on condition you repay it into the RRSP over a set schedule.",
        },
        {
          t: "A First Home Savings Account",
          d: "Contributions are deductible and qualifying withdrawals are tax-free — the most efficient vehicle available for this specific purpose.",
        },
        {
          t: "Borrowed funds",
          d: "Possible, but it attracts a higher insurance premium and the loan payment counts against your debt ratios, reducing what you can borrow.",
        },
      ],
    },
    {
      h: "Why lenders want ninety days of history",
      p: [
        "A sudden large deposit shortly before closing raises two questions: is this money actually a loan someone will expect back, and where did it come from?",
        "The first affects your debt ratios and therefore what you qualify for. The second is anti-money-laundering compliance, which applies to everyone and is not a comment on you.",
        "The practical advice is simple: get your down payment into one account early and leave it there. If money is arriving from a gift or from overseas, keep every record of the transfer. This single step prevents more closing delays than any other.",
      ],
    },
    {
      h: "The down payment is not your only cash requirement",
      p: [
        "Closing costs are separate, due on the same day, and cannot be added to your mortgage. Land transfer tax alone is often the second-largest cheque you write.",
        "As a working rule, budget an additional one and a half to four percent of the purchase price for closing, depending on price and whether the property is inside Toronto. Saving a down payment to the exact dollar and nothing more is the most common way first purchases run into trouble.",
      ],
    },
  ],

  faqs: [
    {
      q: "Is a bigger down payment always better?",
      a: "Not necessarily. Beyond twenty percent you lose access to insured pricing, which can carry a slightly lower rate, and cash committed to a down payment is cash you no longer hold as a reserve. Having something behind you after closing has real value.",
    },
    {
      q: "Can I use money gifted from my parents?",
      a: "Yes, and it is very common. You will need a signed gift letter confirming the funds are a genuine gift rather than a loan, and the money should be in your account before closing.",
    },
    {
      q: "What if I have less than five percent?",
      a: "Five percent is the legal minimum for a purchase, so there is no conventional route below it. The realistic options are continuing to save, a gift from family, or looking at a lower price point.",
    },
  ],

  sources: [
    {
      name: "Financial Consumer Agency of Canada — Down payment",
      href: "https://www.canada.ca/en/financial-consumer-agency/services/mortgages/down-payment.html",
    },
    {
      name: "CMHC — Mortgage loan insurance for consumers",
      href: "https://www.cmhc-schl.gc.ca/consumers/home-buying/mortgage-loan-insurance-for-consumers",
    },
  ],

  relatedGuides: ["closing-costs-ontario", "ontario-land-transfer-tax-explained"],
  relatedServices: ["first-time-buyer", "new-to-canada"],
  relatedCalculators: ["affordability", "cmhc-insurance"],
};

export default guide;
