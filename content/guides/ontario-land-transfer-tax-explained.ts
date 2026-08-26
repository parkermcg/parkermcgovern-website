import type { Guide } from "@/lib/content/guides";

const guide: Guide = {
  slug: "ontario-land-transfer-tax-explained",
  cluster: "first-time-buyer",
  title: "Ontario land transfer tax, explained properly",
  lede:
    "It is charged in brackets rather than as one percentage, it is due in cash on closing, and inside Toronto you pay it twice.",
  metaTitle: "Ontario Land Transfer Tax, Explained",
  metaDescription:
    "How Ontario land transfer tax is calculated in brackets, how Toronto's municipal tax stacks on top, and how the first-time buyer rebates work.",

  published: "2026-07-25",
  updated: "2026-07-25",

  intro: [
    "Land transfer tax is what the government charges when property changes hands. For most Ontario buyers it is the second-largest cheque of the whole transaction, after the down payment.",
    "It is also widely misunderstood, because people assume it is a flat percentage of the price. It is not — it is charged in brackets, like income tax.",
  ],

  takeaways: [
    "Ontario charges in five brackets, from 0.5% on the first $55,000 up to 2.5% above $2 million.",
    "Properties inside the City of Toronto pay a second municipal tax on top, roughly doubling the cost.",
    "Toronto introduced steeper high-value bands on 1 April 2026 for properties above $3 million.",
    "First-time buyers can claim up to $4,000 provincially and $4,475 in Toronto.",
    "It is due in cash on closing and cannot be added to your mortgage.",
  ],

  sections: [
    {
      h: "How the brackets work",
      p: [
        "Each slice of the purchase price is taxed at its own rate. The whole price is not taxed at the top rate you reach.",
        "For a property with one or two single-family residences, the provincial rates are 0.5% on the first $55,000, 1.0% on the portion up to $250,000, 1.5% on the portion up to $400,000, 2.0% on the portion up to $2 million, and 2.5% on anything above that.",
        "On a $650,000 home that works out as $275, plus $1,950, plus $2,250, plus $5,000 — a total of $9,475. Not the $16,250 you would get by applying 2.5% to the whole price, and not the $13,000 from applying 2.0%.",
      ],
    },
    {
      h: "The Toronto surcharge",
      p: [
        "If the property sits inside the City of Toronto boundary, a municipal land transfer tax applies in addition to the provincial one. Below $2 million it uses the same bracket structure, so the effect is straightforwardly to double this cost.",
        "That same $650,000 home would attract $9,475 provincially and a further $9,475 municipally — $18,950 in total, before any rebate.",
        "Above $3 million, Toronto's rates step up sharply. Graduated high-value bands took effect on 1 April 2026 and run considerably higher than the schedule they replaced, reaching well into the upper single digits as a percentage on the most expensive properties. Any calculator that has not been updated since will understate this substantially.",
      ],
      aside: {
        h: "This is a real reason to look outside the city",
        p: "For buyers indifferent between Toronto and the surrounding municipalities, the municipal tax is a genuine several-thousand-dollar difference on the same purchase price. Vaughan, Markham, Richmond Hill and the rest of York Region attract the provincial tax only.",
      },
    },
    {
      h: "The first-time buyer rebate",
      p: [
        "First-time buyers can claim a refund of up to $4,000 against the provincial tax. Because of how the brackets work, that means a qualifying buyer pays no Ontario land transfer tax at all on the first $368,000 of purchase price.",
        "Inside Toronto there is a separate municipal rebate of up to $4,475 against the city's tax.",
        "To qualify provincially you must be at least eighteen, a Canadian citizen or permanent resident at closing, have never owned a home or an interest in one anywhere in the world, and occupy the property as your principal residence within nine months. If you have a spouse, they must not have owned a home while married to you.",
      ],
    },
    {
      h: "Claiming it is not automatic",
      p: [
        "The rebate is claimed through your lawyer at closing, and there is a deadline for applying if it is missed at the time.",
        "Tell your lawyer you are a first-time buyer at the very start of the process rather than assuming they will ask. It is a straightforward claim, but it does have to be made.",
      ],
    },
    {
      h: "What if only one buyer qualifies",
      p: [
        "Where two people buy together and only one is a first-time buyer, the rebate is generally reduced in proportion to the interest held by the qualifying purchaser rather than lost entirely.",
        "The precise treatment depends on how title is taken and on the specific circumstances, including spousal history. This is genuinely situational and worth confirming with your lawyer rather than assuming an outcome in either direction.",
      ],
    },
  ],

  faqs: [
    {
      q: "Can I add land transfer tax to my mortgage?",
      a: "No. It is due in cash on closing day, which is exactly why it catches first-time buyers out. Budget for it alongside your down payment.",
    },
    {
      q: "Do I pay Toronto's tax if I live just outside the city?",
      a: "No. The municipal tax applies only within the City of Toronto boundary. A property in Vaughan, Markham or Richmond Hill attracts the provincial tax only.",
    },
    {
      q: "Is there land transfer tax on a new build?",
      a: "Yes, calculated on the purchase price the same way. New builds also involve HST considerations that resale purchases do not, so ask your lawyer for the full picture before signing.",
    },
  ],

  sources: [
    {
      name: "Ontario Ministry of Finance — Calculating Land Transfer Tax",
      href: "https://www.ontario.ca/document/land-transfer-tax/calculating-land-transfer-tax",
    },
    {
      name: "Ontario Ministry of Finance — Refunds for First-Time Homebuyers",
      href: "https://www.ontario.ca/document/land-transfer-tax/land-transfer-tax-refunds-first-time-homebuyers",
    },
    {
      name: "City of Toronto — Municipal Land Transfer Tax rates",
      href: "https://www.toronto.ca/services-payments/property-taxes-utilities/municipal-land-transfer-tax-mltt/municipal-land-transfer-tax-mltt-rates-and-fees/",
    },
  ],

  relatedGuides: ["closing-costs-ontario", "how-much-down-payment"],
  relatedServices: ["first-time-buyer", "investment-property"],
  relatedCalculators: ["ontario-land-transfer-tax"],
};

export default guide;
