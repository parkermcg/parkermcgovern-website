import type { ServicePage } from "@/lib/content/types";

const page: ServicePage = {
  slug: "investment-property",
  eyebrow: "Investment property",
  title: "The rent counts. Just not as much as you'd think.",
  lede:
    "Financing a rental turns on two things banks handle very differently from each other: how much of the rent they will credit you, and how many properties they will let you hold.",

  summary:
    "Down payment rules for rentals, how lenders credit rental income, and where portfolios tend to stall.",

  metaTitle: "Rental Property Mortgages in Ontario",
  metaDescription:
    "Down payment rules for rentals, how lenders treat rental income, portfolio limits and financing small multi-unit properties in Ontario.",

  intro: [
    "Buying a rental is where the gap between lenders stops being about rate and starts being about whether the deal is possible at all. Two lenders looking at the same property and the same borrower can reach genuinely different conclusions, because they credit rental income by different methods.",
    "Understanding that difference is most of what makes a portfolio work past the second or third property.",
  ],

  blocks: [
    {
      h: "Twenty percent down, and why there is no way around it",
      p: [
        "A property you will not live in requires a minimum twenty percent down payment. Mortgage default insurance is not available on non-owner-occupied residential property, which means the eighty percent loan-to-value ceiling is absolute rather than negotiable.",
        "There is one significant exception worth knowing about. If you intend to live in one unit of a multi-unit property, it may be treated as owner-occupied — which can bring the down payment requirement down substantially. For a duplex or triplex you plan to live in, this changes the arithmetic considerably.",
      ],
      aside: {
        h: "The house-hack route",
        p: "Buying a two- to four-unit property, living in one unit and renting the others is the most capital-efficient way into property investing in Ontario, precisely because of the owner-occupied treatment. It is worth modelling before assuming you need twenty percent.",
      },
    },
    {
      h: "How lenders credit the rent",
      p: [
        "This is the mechanism that decides whether your fourth purchase is possible. There are two broad approaches and the difference between them compounds with every property you add.",
      ],
      list: [
        {
          t: "Rental offset",
          d: "The lender subtracts a percentage of the rent — commonly fifty to eighty percent — directly from the property's carrying costs. Only any shortfall counts against your debt ratios. This is much the more favourable treatment for building a portfolio.",
        },
        {
          t: "Rental add-back",
          d: "The lender adds a percentage of the rent to your gross income instead. Because the full mortgage payment still sits on the debt side of the ratio, this consumes far more of your borrowing capacity for the same property.",
        },
      ],
      aside: {
        h: "Where portfolios stall",
        p: "Investors usually hit a wall not because the properties are bad but because they are with an add-back lender. Moving to an offset lender can restore capacity that looked permanently gone. It is one of the first things I check on an investor file.",
      },
    },
    {
      h: "Portfolio limits are real",
      p: [
        "Most A lenders cap how many financed residential properties one borrower may hold — frequently in the range of four or five including your own home. Reaching that ceiling does not end your borrowing, but it does change where the borrowing comes from.",
        "Past that point the options are credit unions, which are often more flexible on portfolio size, alternative lenders, or moving properties into a corporation and financing them commercially. Each has different rate and documentation implications, and the transition is worth planning for before you hit the wall rather than after.",
      ],
    },
    {
      h: "Where residential financing stops",
      p: [
        "Properties with one to four units are financed residentially. At five units and above, the property is commercial — and effectively everything changes.",
        "Commercial lending assesses the building's income rather than primarily your own, using a debt coverage ratio. Down payments are typically larger, amortisations sometimes shorter, and there are appraisal and environmental requirements that add both cost and time. The application is more like underwriting a small business than a mortgage.",
        "The jump from a fourplex to a six-unit building is therefore much bigger than it looks on paper. Budget more time and more capital than the unit count suggests.",
      ],
    },
    {
      h: "What lenders check on the property itself",
      p: [
        "Investment files get more scrutiny of the asset than owner-occupied purchases do. Expect questions about the following, and have answers ready:",
      ],
      list: [
        {
          t: "Existing leases",
          d: "Signed leases and evidence of rent actually being received. Projected rent on a vacant unit is credited more conservatively, if at all.",
        },
        {
          t: "Legality of the units",
          d: "Whether a basement apartment is a legal, registered second unit matters. Lenders are markedly more cautious about income from unregistered units, and some will not count it.",
        },
        {
          t: "Condition and appraisal",
          d: "An appraisal is standard, and on a rental it may include a rental market assessment supporting the income you have claimed.",
        },
        {
          t: "Your own reserves",
          d: "Lenders want to see you could carry a vacancy or a major repair. Buying with nothing left behind the down payment is a common decline reason on investment files.",
        },
      ],
    },
  ],

  honest: {
    h: "Where investment purchases go wrong",
    p: [
      "If the property only carries its costs assuming full occupancy at optimistic rent, it does not carry its costs. Model a vacant month and a rate at renewal meaningfully higher than today's before committing. If it fails either test, the deal is thinner than it looks.",
      "If the plan depends on appreciation to make sense, that is speculation rather than investment. Cash flow can be modest, but it should not require the property to be worth more later for the arithmetic to hold.",
      "And if you are financing the down payment by borrowing against your own home, be honest that you are leveraging twice. That can be a reasonable strategy with reserves behind it, and it is a fragile one without.",
      "In Ontario specifically, factor in that a tenant dispute can take a long time to resolve through the Landlord and Tenant Board. Model your ability to carry the property through several months of no rent, because that is a realistic scenario rather than a remote one.",
    ],
  },

  faqs: [
    {
      q: "How much do I need down for a rental property in Ontario?",
      a: "Twenty percent minimum for a property you will not occupy, because mortgage default insurance is not available on non-owner-occupied residential property. If you will live in one unit of a multi-unit building, it may qualify as owner-occupied and require considerably less.",
    },
    {
      q: "Does rental income help me qualify?",
      a: "Yes, but only partly, and how much depends on the lender's method. Offset lenders subtract a share of the rent from the property's costs, which is far more favourable than add-back lenders who add a share of rent to your income. The same file can pass at one and fail at the other.",
    },
    {
      q: "How many rental properties can I finance?",
      a: "Most A lenders cap financed properties somewhere around four or five including your own home. Beyond that, credit unions, alternative lenders and corporate or commercial structures are the usual routes. It is worth planning that transition before you reach the limit.",
    },
    {
      q: "Can I use projected rent on a property that is currently vacant?",
      a: "Sometimes, supported by a rental market appraisal, but it is credited more conservatively than a signed lease with a payment history behind it. Existing leases materially strengthen an application.",
    },
    {
      q: "Is financing a duplex different from a single-family rental?",
      a: "Up to four units it is still residential financing, and if you occupy one unit the down payment requirement can drop substantially. At five units and above it becomes commercial lending, which is a different process with larger down payments and income-based underwriting.",
    },
  ],

  calculators: ["mortgage-payment", "affordability", "ontario-land-transfer-tax"],
  related: ["refinance", "self-employed", "alternative-lending"],

  verified: "July 2026",
  sources: [
    {
      name: "CMHC — Mortgage loan insurance eligibility",
      href: "https://www.cmhc-schl.gc.ca/professionals/project-funding-and-mortgage-financing/mortgage-loan-insurance",
    },
    {
      name: "Financial Consumer Agency of Canada — Down payment",
      href: "https://www.canada.ca/en/financial-consumer-agency/services/mortgages/down-payment.html",
    },
  ],
};

export default page;
