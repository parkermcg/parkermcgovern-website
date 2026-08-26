import type { Guide } from "@/lib/content/guides";

const guide: Guide = {
  slug: "closing-costs-ontario",
  cluster: "first-time-buyer",
  title: "Closing costs in Ontario: what else is due on the day",
  lede:
    "The down payment is the number everyone saves toward. Closing costs are the ones that arrive uninvited, all at once, and cannot be added to your mortgage.",
  metaTitle: "Closing Costs When Buying in Ontario",
  metaDescription:
    "Ontario closing costs beyond your down payment: land transfer tax, legal fees, title insurance, adjustments and inspections, and what to budget.",

  published: "2026-07-25",
  updated: "2026-07-25",

  intro: [
    "Ask most first-time buyers what they need saved and they will tell you their down payment. Ask what they have set aside for closing and there is often a pause.",
    "Closing costs are due on the same day as your down payment, they come from cash rather than your mortgage, and on a typical Ontario purchase they run to several thousand dollars at minimum.",
  ],

  takeaways: [
    "Budget roughly 1.5% to 4% of the purchase price on top of your down payment.",
    "Land transfer tax is usually the largest single item, and it roughly doubles inside Toronto.",
    "Closing costs cannot be financed into your mortgage — they must come from cash.",
    "Lenders often require you to prove you have these funds before they approve you.",
    "First-time buyers can claim land transfer tax rebates, but must do so through their lawyer.",
  ],

  sections: [
    {
      h: "The costs, in rough order of size",
      p: [
        "Not all of these apply to every purchase, but most apply to most.",
      ],
      list: [
        {
          t: "Land transfer tax",
          d: "Paid to the province on the purchase price, calculated in brackets. If the property is inside the City of Toronto, a second municipal land transfer tax applies on top — which is the single largest cost difference between buying in Toronto and buying elsewhere in the GTA.",
        },
        {
          t: "Legal fees and disbursements",
          d: "Your lawyer's fee plus the costs they incur on your behalf: title searches, registration fees, software charges and courier costs. Ask for a quote that separates the fee from the disbursements, because comparing fees alone is misleading.",
        },
        {
          t: "Title insurance",
          d: "A one-off premium protecting against defects in title, survey problems and certain kinds of fraud. Nearly always required by the lender, and arranged by your lawyer.",
        },
        {
          t: "Home inspection",
          d: "Paid before closing, usually before your offer conditions expire. On a resale property this is the only independent assessment of the building's condition you will get.",
        },
        {
          t: "Appraisal",
          d: "The lender may require an independent valuation. Sometimes they absorb this, sometimes they pass it on. Worth asking early rather than discovering it late.",
        },
        {
          t: "Property tax and utility adjustments",
          d: "If the seller has prepaid property tax or utilities past your closing date, you reimburse them for the portion covering your ownership. This appears on the statement of adjustments and catches people out.",
        },
        {
          t: "Provincial sales tax on mortgage insurance",
          d: "If your down payment is under twenty percent, the insurance premium itself is added to your mortgage — but the sales tax on that premium is payable at closing in cash.",
        },
        {
          t: "Moving and immediate costs",
          d: "Movers, utility connections, and whatever the property needs in the first week. Not a legal cost, but it lands at the same time.",
        },
      ],
    },
    {
      h: "The Toronto difference",
      p: [
        "Ontario charges land transfer tax on every purchase in the province. The City of Toronto charges a second, municipal land transfer tax on properties inside the city boundary, calculated on a similar structure.",
        "The practical effect is that this line item roughly doubles for a Toronto purchase. On a mid-priced home that is a difference of several thousand dollars between buying in Toronto and buying in Vaughan, Markham or Richmond Hill.",
        "Toronto introduced graduated high-value bands on 1 April 2026, which increased the municipal tax substantially on expensive properties. If you are looking above $3 million inside the city, this is worth calculating carefully rather than estimating.",
      ],
      aside: {
        h: "Claim the rebates",
        p: "First-time buyers can claim up to $4,000 against the Ontario tax and up to $4,475 against Toronto's municipal tax. Neither is automatic — both are claimed through your lawyer at closing. Tell your lawyer you are a first-time buyer at the outset.",
      },
    },
    {
      h: "Why lenders ask you to prove you have this money",
      p: [
        "Many lenders require evidence that you hold funds equivalent to around one and a half percent of the purchase price, over and above your down payment, specifically to cover closing costs.",
        "This is not an arbitrary hurdle. A buyer who arrives at closing without enough cash creates a failed transaction, and lenders would rather establish that early than discover it two days before completion.",
        "It also means that if your down payment is exactly at the minimum and you have nothing behind it, you may struggle to get approved even though you technically meet the down payment rule.",
      ],
    },
    {
      h: "Getting a realistic number for your purchase",
      p: [
        "The range of one and a half to four percent is wide because the variables are wide: price, whether you are inside Toronto, whether you qualify for rebates, and how much your lawyer charges.",
        "The land transfer tax calculator on this site will give you the largest component precisely. Add a legal quote, a home inspection, and a few hundred for adjustments, and you will have a figure accurate enough to plan around.",
        "Do this before you start viewing rather than after you have an accepted offer. Knowing your total cash requirement changes which price range you should genuinely be shopping in.",
      ],
    },
  ],

  faqs: [
    {
      q: "Can closing costs be added to my mortgage?",
      a: "No. They are due in cash on closing. This is precisely why saving only a down payment leaves buyers short, and why lenders often ask you to demonstrate you hold additional funds.",
    },
    {
      q: "Do I need a lawyer to buy a home in Ontario?",
      a: "Yes. Property transfers in Ontario must be completed by a lawyer, who handles title, registration, the mortgage instructions from your lender, and the exchange of funds on closing day.",
    },
    {
      q: "Are closing costs different on a new build?",
      a: "Often, yes. New builds can carry development charges, utility hookup fees, Tarion enrolment and occupancy costs that resale purchases do not, and HST treatment differs. Ask for the full schedule in writing before signing anything.",
    },
  ],

  sources: [
    {
      name: "Ontario Ministry of Finance — Land Transfer Tax",
      href: "https://www.ontario.ca/document/land-transfer-tax",
    },
    {
      name: "City of Toronto — Municipal Land Transfer Tax",
      href: "https://www.toronto.ca/services-payments/property-taxes-utilities/municipal-land-transfer-tax-mltt/",
    },
    {
      name: "Financial Consumer Agency of Canada — Closing costs",
      href: "https://www.canada.ca/en/financial-consumer-agency/services/mortgages/preparing-mortgage.html",
    },
  ],

  relatedGuides: ["how-much-down-payment", "ontario-land-transfer-tax-explained"],
  relatedServices: ["first-time-buyer"],
  relatedCalculators: ["ontario-land-transfer-tax", "affordability"],
};

export default guide;
