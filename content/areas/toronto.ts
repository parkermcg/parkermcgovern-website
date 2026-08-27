import type { ServiceArea } from "@/lib/content/areas";

/**
 * The only GTA municipality that earns an area page on tax grounds alone.
 * MLTT figures are already verified and cited elsewhere on the site: Ontario
 * refund up to $4,000 with no provincial LTT on the first $368,000, Toronto
 * municipal refund up to $4,475. Sources cited on the page.
 */
const area: ServiceArea = {
  slug: "toronto",
  name: "Toronto",
  eyebrow: "Toronto",
  title: "Buying in Toronto costs more on closing day than anywhere else in the GTA.",
  lede:
    "Not because prices are higher — because Toronto is the only municipality in Ontario that charges its own land transfer tax on top of the provincial one. On the same purchase price, that line item roughly doubles.",

  summary:
    "The Municipal Land Transfer Tax, both first-time buyer rebates, and what actually changes when you cross the city boundary.",

  metaTitle: "Mortgages in Toronto — The MLTT Explained",
  metaDescription:
    "Buying in Toronto means paying municipal land transfer tax on top of the provincial one. What it costs, both first-time buyer rebates, and what does not change.",

  intro: [
    "Almost everything about getting a mortgage is the same in Toronto as it is in Vaughan or Markham. The same lenders, the same stress test, the same debt service ratios, the same down payment minimums.",
    "One thing is not, and it is the single largest closing cost difference in the Greater Toronto Area. Toronto charges a Municipal Land Transfer Tax on top of the provincial one, and it applies to every purchase inside the city boundary.",
  ],

  blocks: [
    {
      h: "You pay land transfer tax twice",
      p: [
        "Everywhere in Ontario, buyers pay provincial land transfer tax, calculated in brackets against the purchase price. Inside the City of Toronto a second, municipal land transfer tax applies as well.",
        "The practical effect is that this line item roughly doubles. On an identical purchase price, a buyer in Toronto and a buyer in Richmond Hill pay very different amounts on closing day, and the difference is not small — on a typical GTA purchase it runs into five figures.",
        "It is also the closing cost people most often fail to budget for, because it is invisible until your lawyer produces the statement of adjustments. Neither tax can be added to your mortgage. Both are cash, due on closing.",
      ],
      aside: {
        h: "The boundary is the boundary",
        p: "The MLTT applies to properties inside the City of Toronto, which includes the former municipalities amalgamated in 1998 — Etobicoke, North York, Scarborough, York and East York. A property in Vaughan, Markham or Mississauga does not attract it. If you are looking at homes on both sides of Steeles Avenue, the tax treatment changes as you cross it.",
      },
    },
    {
      h: "Both first-time buyer rebates, and how they differ",
      p: [
        "First-time buyers can claim a rebate against each tax, and they are separate claims with separate rules.",
      ],
      list: [
        {
          t: "Ontario rebate — up to $4,000",
          d: "No provincial land transfer tax is payable on the first $368,000 of the price. Above that, the rebate is capped at $4,000.",
        },
        {
          t: "Toronto rebate — up to $4,475",
          d: "A separate municipal rebate, claimed against the MLTT. It applies only to purchases inside the city, which is the one respect in which buying in Toronto is better for a first-time buyer.",
        },
        {
          t: "Ontario's test is strict",
          d: "You must never have owned an eligible home anywhere in the world, at any time. There is no four-year reset, and how you acquired a previous home — purchase, gift or inheritance — makes no difference. This is stricter than the federal FHSA and Home Buyers' Plan rules, which do reset.",
        },
        {
          t: "The spouse rule",
          d: "If your spouse owned an eligible home at any point while they were your spouse, no refund is available to either of you. This catches more couples than people expect.",
        },
        {
          t: "Neither is automatic",
          d: "Both are normally claimed by your lawyer at closing. If they are missed you have 18 months from registration to claim the provincial refund back from the Ministry of Finance.",
        },
      ],
    },
    {
      h: "What condominium buying adds",
      p: [
        "Toronto's housing stock skews heavily toward condominiums, which changes a mortgage file in two ways worth knowing before you shop.",
        "Lenders include a portion of your monthly condo fee in the debt service ratios that decide what you can borrow. A high fee reduces your maximum mortgage by considerably more than the fee itself, because it consumes room in a ratio rather than pound for pound. Two units at the same price with different fees produce different approvals.",
        "Lenders also approve the building, not just you. A status certificate, the reserve fund, the proportion of rented units and any litigation the corporation is involved in can all affect whether a specific unit is financeable. This is why an unconditional offer on a condo is riskier than on a freehold, and why the financing condition matters.",
      ],
    },
    {
      h: "What does not change inside the city",
      p: [
        "It is worth being explicit about this, because a lot of local mortgage marketing implies otherwise.",
        "Your lender options are identical. Rates are not set by municipality. The stress test, the down payment minimums, the debt service ratios and the insurance rules are federal or provincial and apply the same way in Toronto as anywhere else in Ontario. Nobody has access to a special Toronto rate, and any suggestion otherwise is marketing.",
        "What genuinely differs is the closing cost arithmetic, the condominium considerations above, and the fact that the same budget buys a different kind of property inside the city than outside it. Those are worth planning around. The mortgage itself is not different.",
      ],
    },
  ],

  honest: {
    h: "When the MLTT should change where you buy — and when it should not",
    p: [
      "The extra tax is a one-time cost, and one-time costs are a poor reason to make a long-term housing decision on their own. If the right home for you is in Toronto, paying the MLTT is usually the correct trade rather than moving further out to avoid it.",
      "Where it genuinely matters is cash on closing day. Buyers regularly save a down payment to the dollar and then discover the MLTT is due on top of it. If paying both taxes would leave you with no reserve behind the purchase, that is a real reason to adjust your price range — not because the tax is unfair, but because closing with nothing left is how an ordinary problem becomes a forced sale.",
      "And if you are buying near the boundary and genuinely indifferent between two comparable homes on either side of it, then yes, the tax is worth putting on the scale. That is a narrow situation, and I will tell you when you are actually in it rather than encouraging you to shop by tax line.",
    ],
  },

  faqs: [
    {
      q: "How much is the Toronto land transfer tax?",
      a: "It is calculated in brackets against the purchase price, in addition to the provincial land transfer tax, and the two together roughly double what you would pay outside the city. The land transfer tax calculator on this site works out both, including the Toronto portion and both first-time buyer rebates, so you can see the actual figure for a price you are considering.",
    },
    {
      q: "Can I add land transfer tax to my mortgage?",
      a: "No. Both the provincial and municipal land transfer taxes are cash due on closing, and they cannot be financed into the mortgage. This is why they need to be budgeted separately from your down payment, and it is the most common reason a Toronto purchase runs short on closing day.",
    },
    {
      q: "Does the MLTT apply in Etobicoke, Scarborough or North York?",
      a: "Yes. All of them are part of the City of Toronto following the 1998 amalgamation, so the municipal land transfer tax applies throughout. It does not apply in Mississauga, Vaughan, Markham or anywhere else in the GTA.",
    },
    {
      q: "Do I get a better mortgage rate buying in Toronto?",
      a: "No. Rates are set by lenders based on your file — income, credit, down payment, and the property itself — not by municipality. The same lenders compete for a Toronto purchase and a York Region purchase on the same terms. Anyone implying they have a special rate for a particular city is selling you something.",
    },
  ],

  services: ["first-time-buyer", "refinance", "investment-property"],
  calculators: ["ontario-land-transfer-tax", "affordability", "mortgage-payment"],

  verified: "August 2026",
  sources: [
    {
      name: "City of Toronto — Municipal Land Transfer Tax",
      href: "https://www.toronto.ca/services-payments/property-taxes-utilities/municipal-land-transfer-tax-mltt/",
    },
    {
      name: "Ontario Ministry of Finance — Land transfer tax refunds for first-time homebuyers",
      href: "https://www.ontario.ca/document/land-transfer-tax/land-transfer-tax-refunds-first-time-homebuyers",
    },
  ],
};

export default area;
