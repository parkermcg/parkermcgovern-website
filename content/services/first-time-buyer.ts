import type { ServicePage } from "@/lib/content/types";

/**
 * States regulatory figures (down payment minimums, rebate caps, insured
 * ceiling), so `verified` and `sources` are mandatory here. Re-check every
 * figure against the primary sources listed before each republish — these
 * rules changed materially in 2024 and will change again.
 */
const page: ServicePage = {
  slug: "first-time-buyer",
  eyebrow: "First-time buyers",
  title: "Nobody explains the first one properly. Let's fix that.",
  lede:
    "What you actually need for a down payment, what closing genuinely costs on top of it, and how lenders decide what you can borrow — in the order you'll need to know it.",

  summary:
    "What you need saved, what closing genuinely costs on top of it, and how lenders decide what you can borrow.",

  metaTitle: "First-Time Home Buyer Mortgages in Ontario",
  metaDescription:
    "Down payment minimums, land transfer tax rebates, closing costs and how much you can borrow as a first-time buyer in Ontario. Plain explanation from a licensed mortgage agent.",

  intro: [
    "The hardest part of a first purchase is not the mortgage. It is that nobody sets out the sequence — so you end up learning what a status certificate is on the day someone needs one, and finding out about land transfer tax a fortnight before closing.",
    "This page is the sequence. It covers what you need saved, what the government takes, what the lender checks, and where the money actually goes on closing day.",
  ],

  blocks: [
    {
      h: "What counts as your minimum down payment",
      p: [
        "The legal minimum in Canada is tiered by purchase price, and it is calculated in slices rather than as one flat percentage of the whole price.",
      ],
      list: [
        {
          t: "Up to $500,000",
          d: "Five percent of the purchase price.",
        },
        {
          t: "$500,000 to $1,499,999",
          d: "Five percent of the first $500,000, plus ten percent of everything above it. On a $700,000 home that is $25,000 plus $20,000 — so $45,000, not a flat five percent.",
        },
        {
          t: "$1,500,000 and above",
          d: "Twenty percent minimum, with no mortgage default insurance available at all.",
        },
      ],
      aside: {
        h: "Under twenty percent means insurance",
        p: "Any down payment below twenty percent requires mortgage default insurance. The premium is calculated on your loan amount and is normally added to the mortgage rather than paid upfront — so it increases what you borrow and what you pay interest on. It protects the lender, not you.",
      },
    },
    {
      h: "The two accounts worth using before you buy",
      p: [
        "Both of these are federal programs specifically for first purchases, and between them they change the arithmetic significantly. Neither is automatic — you have to open and use them.",
      ],
      list: [
        {
          t: "First Home Savings Account (FHSA)",
          d: "Contributions are tax-deductible like an RRSP, and qualifying withdrawals to buy a first home come out tax-free like a TFSA. It is the most efficient savings vehicle available for this specific purpose, and it has annual and lifetime contribution limits.",
        },
        {
          t: "Home Buyers' Plan (HBP)",
          d: "Lets you withdraw from your RRSP toward a first home without immediate tax, provided you repay it into the RRSP over a set schedule. Worth combining with an FHSA rather than choosing between them.",
        },
      ],
    },
    {
      h: "Land transfer tax, and the rebate most people miss",
      p: [
        "Ontario charges land transfer tax on the purchase price, calculated in brackets. If the property is inside the City of Toronto, a second municipal land transfer tax applies on top — which roughly doubles this line item and is the single largest closing cost difference between buying in Toronto and buying anywhere else in the GTA.",
        "First-time buyers qualify for a rebate against both. The provincial rebate is capped at $4,000, and the Toronto municipal rebate is capped at $4,475. On a modest purchase these can cancel the tax entirely; on a larger one they take a fixed amount off the top.",
        "The rebate is claimed at closing through your lawyer. It is not automatic and it is not applied for you.",
      ],
    },
    {
      h: "What closing actually costs, beyond the down payment",
      p: [
        "This is where first purchases go wrong financially. People save a down payment to the dollar and then discover several thousand more is due on closing day. Budget for the following on top of your down payment:",
      ],
      list: [
        {
          t: "Land transfer tax",
          d: "Usually the largest single closing cost, and larger again inside Toronto. Net of any first-time buyer rebate.",
        },
        {
          t: "Legal fees and disbursements",
          d: "Your lawyer's fee plus title search, registration and title insurance.",
        },
        {
          t: "Home inspection",
          d: "Paid before closing, and worth it. On a resale property this is the only independent assessment you will get.",
        },
        {
          t: "Appraisal",
          d: "Sometimes required by the lender, sometimes covered by them. Worth asking about early.",
        },
        {
          t: "Adjustments",
          d: "Reimbursing the seller for property tax or utilities they have prepaid past your closing date.",
        },
        {
          t: "Moving and immediate costs",
          d: "Movers, utility connections, and whatever the property needs in week one.",
        },
      ],
      aside: {
        h: "A working rule",
        p: "Set aside roughly one and a half to four percent of the purchase price for closing costs, depending on price and whether you are buying inside Toronto. I will give you a specific figure for your situation rather than a range, well before you are committed.",
      },
    },
    {
      h: "How much you can borrow, and why it is less than you expect",
      p: [
        "Lenders apply two debt service ratios. The first compares your housing costs — mortgage payment, property tax, heating, and half of any condo fees — against your gross income. The second adds every other debt payment you have: car loans, credit card minimums, lines of credit, student loans.",
        "That second ratio is what surprises people. A car payment can reduce your maximum mortgage by considerably more than the payment itself, because it consumes room in a ratio rather than pound for pound.",
        "On top of that, you are qualified at a stress-tested rate rather than the rate you will actually pay — the greater of your contract rate plus two percent, or the regulatory floor. You will be approved for less than your real payment would suggest, by design.",
      ],
    },
    {
      h: "Pre-approval is not approval",
      p: [
        "A pre-approval tells you what you can likely borrow and usually holds a rate for you for a set period, commonly around 120 days. It is based on the information you have given and it is conditional.",
        "Full approval comes after you have an accepted offer, when the lender has reviewed your documents and, critically, the property itself. Lenders approve properties as well as people. This is exactly why your offer should carry a financing condition — making an unconditional offer without approval in place is the single riskiest thing a first-time buyer can do.",
      ],
    },
  ],

  honest: {
    h: "When waiting is the better financial decision",
    p: [
      "If buying at your maximum approval would leave you with nothing behind the down payment, wait. A furnace fails, a job changes, a rate renews higher. Buying with no reserve turns an ordinary problem into a forced sale.",
      "If you may move within about two years, the transaction costs of buying and selling — land transfer tax on the way in, agent commission on the way out — will very likely exceed anything you build in equity over that period. Renting is not throwing money away when your horizon is short.",
      "And if a few months of paying down a car loan or a credit card would move you to a materially better lending tier, those months are usually worth more than trying to time the market. I will tell you if that is your situation.",
    ],
  },

  faqs: [
    {
      q: "How much do I actually need saved to buy my first home?",
      a: "Your minimum down payment plus closing costs. On a $700,000 purchase outside Toronto, that means $45,000 down as a minimum, plus roughly $15,000 to $25,000 for land transfer tax net of the rebate, legal fees, inspection and adjustments. I will work out the exact figure for the price range you are actually looking at before you start viewing.",
    },
    {
      q: "Does getting a pre-approval hurt my credit score?",
      a: "A formal pre-approval normally involves one credit check. Multiple mortgage enquiries within a short window are treated as a single check by Canadian credit bureaus, so shopping your rate properly does not compound the impact. An initial conversation and a rough estimate need no credit check at all.",
    },
    {
      q: "Can I use money gifted by my parents?",
      a: "Yes, and it is common. Lenders will want a signed gift letter confirming the money is a genuine gift rather than a loan, and they will want to see it in your account before closing. A gift that is really a loan has to be disclosed, because it affects your debt ratios.",
    },
    {
      q: "What is the first-time buyer land transfer tax rebate worth?",
      a: "Up to $4,000 against Ontario land transfer tax, and up to a further $4,475 against Toronto's municipal land transfer tax if the property is inside the city. It is claimed through your lawyer at closing and is not applied automatically.",
    },
    {
      q: "Am I still a first-time buyer if my partner owned a home before?",
      a: "It depends on the specific program and how title is being taken, and the rules differ between the tax rebate and federal savings programs. This is worth confirming case by case rather than assuming — it is a question I get constantly and the answer is genuinely situational.",
    },
  ],

  calculators: [
    "affordability",
    "ontario-land-transfer-tax",
    "cmhc-insurance",
    "mortgage-payment",
  ],
  related: ["new-to-canada", "self-employed", "refinance"],

  verified: "July 2026",
  sources: [
    {
      name: "Financial Consumer Agency of Canada — down payment requirements",
      href: "https://www.canada.ca/en/financial-consumer-agency/services/mortgages/down-payment.html",
    },
    {
      name: "Ontario Ministry of Finance — Land Transfer Tax",
      href: "https://www.ontario.ca/document/land-transfer-tax",
    },
    {
      name: "City of Toronto — Municipal Land Transfer Tax",
      href: "https://www.toronto.ca/services-payments/property-taxes-utilities/municipal-land-transfer-tax-mltt/",
    },
    {
      name: "CMHC — Mortgage loan insurance",
      href: "https://www.cmhc-schl.gc.ca/consumers/home-buying/mortgage-loan-insurance-for-consumers",
    },
  ],
};

export default page;
