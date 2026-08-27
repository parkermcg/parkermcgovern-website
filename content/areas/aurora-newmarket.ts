import type { ServiceArea } from "@/lib/content/areas";

/**
 * Aurora and Newmarket share one page deliberately. Split apart they would
 * have been near-duplicates — same tax treatment, same lender access, same
 * housing character — which is the doorway pattern CLAUDE.md §5 warns about.
 * If either ever develops genuinely distinct content, split it then.
 *
 * Distinct angle: freehold and rural-edge properties. Wells, septic systems,
 * acreage and outbuildings all change which lenders will fund a property, and
 * none of that comes up on a condo in Markham.
 *
 * No price or market statistics — none verified (§4).
 */
const area: ServiceArea = {
  slug: "aurora-newmarket",
  name: "Aurora & Newmarket",
  eyebrow: "Aurora & Newmarket",
  title: "Further north, the property itself starts affecting the mortgage.",
  lede:
    "More freehold, larger lots, and — once you get past the built-up edges — wells, septic systems and acreage. Lenders approve properties as well as people, and out here that stops being a formality.",

  summary:
    "Freehold and rural-edge properties: how wells, septic, acreage and outbuildings change which lenders will fund a purchase.",

  metaTitle: "Mortgages in Aurora and Newmarket",
  metaDescription:
    "Buying in Aurora or Newmarket, including rural properties. How wells, septic systems and acreage change which lenders will fund a purchase.",

  intro: [
    "Aurora and Newmarket share a page here for an honest reason: from a mortgage standpoint they are the same. Same provincial land transfer tax with no municipal one, same lender access, same qualification rules, and a broadly similar mix of housing. Writing two near-identical pages would tell you nothing and would be transparent padding.",
    "What genuinely differs from a condo purchase further south is the property. As you move toward the northern and western edges of both towns, homes stop being uniformly serviced, and lenders start caring a great deal about that.",
  ],

  blocks: [
    {
      h: "Lenders approve properties, not just people",
      p: [
        "This is the part that surprises people. A strong borrower with a solid income and clean credit can still be declined — not because of anything in their file, but because the lender will not hold that particular property on its books.",
        "In and around Aurora and Newmarket, these are the property characteristics that most often change which lenders will look at a file.",
      ],
      list: [
        {
          t: "A well instead of municipal water",
          d: "Lenders will typically want evidence the water is potable and the supply is adequate, usually through a recent water test. Some will lend readily on a drilled well and be more cautious about a dug or shallow one.",
        },
        {
          t: "A septic system",
          d: "Expect questions about age, condition and capacity, and often an inspection. A failing system is expensive to replace and lenders price that risk accordingly.",
        },
        {
          t: "Acreage",
          d: "Many lenders will only lend against the house and a limited amount of the land, treating the excess acreage as contributing nothing to value. On a larger parcel that can reduce the appraised value they lend against, which increases the down payment you need.",
        },
        {
          t: "Outbuildings and hobby farms",
          d: "Barns, workshops and large detached structures often add little or nothing to the value a lender will recognise. If the property has agricultural use or zoning, the file can move outside residential lending entirely.",
        },
        {
          t: "Access and road type",
          d: "A private or seasonally maintained road is a genuine underwriting issue. Some lenders decline outright; others want proof of a maintenance agreement.",
        },
        {
          t: "Heating source",
          d: "Oil heat and wood as a primary source both attract extra scrutiny, and can affect insurance as well as financing — which matters, because a lender requires insurance to be in place.",
        },
      ],
      aside: {
        h: "Find this out before you make the offer",
        p: "Every item above is knowable in advance from the listing. The failure case is discovering it after an unconditional offer, when the property turns out to be financeable only at a more expensive lender — or not at all. If you are looking at anything on well and septic, tell me before you write the offer, not after.",
      },
    },
    {
      h: "Freehold is simpler in the ways condos are not",
      p: [
        "The trade-off runs the other way as well, and it is a real advantage. There is no condominium corporation being underwritten alongside you, no status certificate, no reserve fund to scrutinise, no special assessment risk, and no monthly fee eating into your debt service ratios.",
        "That last one matters more than people expect. A condo fee reduces your maximum mortgage by more than the fee itself, because it consumes room in a ratio rather than pound for pound. On a freehold home in Aurora or Newmarket at the same price, that room stays available to you.",
        "What replaces it is maintenance you carry directly — a roof, a furnace, a septic system — and lenders assume you will. Keeping a reserve behind the purchase matters more on a freehold home than on a unit where a corporation is supposed to be saving on your behalf.",
      ],
    },
    {
      h: "The commute is a financial variable, not just a lifestyle one",
      p: [
        "Buying further north usually buys more house for the money, and the honest counterweight is what it costs to get anywhere. A second vehicle, fuel, insurance and GO fares are real monthly numbers.",
        "They matter to a lender too. A car loan consumes room in the same debt service ratio your mortgage does, and it does so out of proportion to the payment — financing a second vehicle to make a location work can reduce your maximum mortgage by considerably more than the payment itself.",
        "Worth running both together rather than separately. The house that looks affordable and the car that makes it liveable are the same calculation.",
      ],
    },
  ],

  honest: {
    h: "When buying further out does not pay off",
    p: [
      "If making it work requires financing a second vehicle, run the whole arithmetic before you commit. The car payment reduces your borrowing power, and the fuel and insurance are permanent. The saving on the house is sometimes smaller than it looks once both sides are on the page.",
      "If you are considering a rural property purely for the price per square foot, understand you may be narrowing your lender options at the same time. Fewer lenders means less competition on your file, and a property that is harder to finance is usually also harder to sell later.",
      "If the well or septic is old and nothing has been inspected, that is not a detail to sort out after closing. A replacement septic system is a five-figure expense, and discovering it in year one with no reserve left is exactly the situation that turns an ordinary problem into a crisis.",
      "And if you are likely to move within a couple of years, the transaction costs on the way in and out will very likely exceed anything you build in equity — the same as anywhere else, but with a smaller pool of buyers when you come to sell.",
    ],
  },

  faqs: [
    {
      q: "Can I get a mortgage on a house with a well and septic?",
      a: "Usually yes, with conditions. Lenders typically want a recent water test confirming potability and adequate supply, and often a septic inspection covering age, condition and capacity. Some lenders are more comfortable with it than others, so if a property is on well and septic it is worth raising before you write the offer rather than after.",
    },
    {
      q: "Does a large lot help or hurt my mortgage?",
      a: "It can hurt, which surprises people. Many lenders will lend against the house and a limited portion of the land only, treating the excess acreage as adding nothing to the value they will finance. That can lower the value the mortgage is calculated against and increase the down payment you need, even though you are paying for the whole parcel.",
    },
    {
      q: "Is land transfer tax different in Aurora or Newmarket?",
      a: "No. Both are in York Region, outside the City of Toronto, so only the provincial land transfer tax applies — no municipal land transfer tax. That is the same treatment as Richmond Hill, Markham and Vaughan, and materially cheaper than buying inside Toronto.",
    },
    {
      q: "Why are Aurora and Newmarket on the same page?",
      a: "Because from a mortgage standpoint they are the same — identical tax treatment, identical lender access, identical qualification rules and a similar mix of housing. Two separate pages would have been the same content with the name changed, which helps nobody. If a genuine difference emerges, they will get separate pages then.",
    },
  ],

  services: ["first-time-buyer", "self-employed", "renewal"],
  calculators: ["affordability", "mortgage-payment", "ontario-land-transfer-tax"],

  verified: "August 2026",
  sources: [
    {
      name: "Ontario Ministry of Finance — Land Transfer Tax",
      href: "https://www.ontario.ca/document/land-transfer-tax",
    },
    {
      name: "Canada Mortgage and Housing Corporation — Mortgage loan insurance",
      href: "https://www.cmhc-schl.gc.ca/consumers/home-buying/mortgage-loan-insurance-for-consumers",
    },
  ],
};

export default area;
