import type { ServiceArea } from "@/lib/content/areas";

/**
 * Home office. Distinct angle: what proximity actually changes (very little
 * about the mortgage, something about the working relationship) and the
 * renewal-tracking service, which is a verified true statement in §3.
 *
 * Address and hours come from lib/site.ts — do not hard-code them here.
 * No claims about volume, market share or number of local clients (§4).
 */
const area: ServiceArea = {
  slug: "richmond-hill",
  name: "Richmond Hill",
  eyebrow: "Richmond Hill",
  title: "The office is here, which changes less than you would think.",
  lede:
    "Being local does not get you a better rate — nothing does, except your file. What it does change is how easy it is to sit down with someone, and whether anyone notices when your renewal is coming.",

  summary:
    "The home office. What being local genuinely changes about a mortgage, and what it does not.",

  metaTitle: "Mortgage Agent in Richmond Hill",
  metaDescription:
    "Licensed mortgage agent based in Richmond Hill, serving York Region and the GTA. What working with someone local actually changes, and what it does not.",

  intro: [
    "The office is on West Beaver Creek Road, and a good share of the people I work with live within a few concessions of it. That is worth saying plainly rather than dressing up.",
    "It is also worth being honest about what it does not do. There is no local rate, no York Region lender, and no advantage in the underwriting because the file came from down the road. Mortgages are priced on the file, not the postcode.",
  ],

  blocks: [
    {
      h: "What being local actually changes",
      p: [
        "Three things, and none of them are about pricing.",
      ],
      list: [
        {
          t: "You can sit across a table",
          d: "Most of this can be done by phone and email, and for plenty of people that is preferable. But a first mortgage, a separation, or a file that has been declined somewhere is often a conversation better had in person than on a call.",
        },
        {
          t: "I know the properties",
          d: "Not in a way that changes an appraisal — that is an independent process. But knowing the difference between the older stock west of Yonge and a new subdivision on the north side is useful when a lender raises a question about a property type.",
        },
        {
          t: "Someone is watching your renewal date",
          d: "I track client renewal dates and the rate environment on an ongoing basis, which means the conversation starts before the letter arrives rather than after you have signed it. That is the single most valuable thing about an ongoing relationship, and it has nothing to do with geography — but it is easier to sustain with people who stay in touch.",
        },
      ],
      aside: {
        h: "What it does not change",
        p: "Your rate, your lender options, your qualification, the stress test, land transfer tax, or how long an approval takes. All of those are set by the lender, the province or the regulator. Anyone marketing a local advantage on price is describing something that does not exist.",
      },
    },
    {
      h: "Richmond Hill sits in York Region, which matters for tax",
      p: [
        "Richmond Hill is outside the City of Toronto, so purchases here attract the provincial land transfer tax only. No municipal land transfer tax. On the same purchase price, that is a materially smaller closing cost than buying inside Toronto — often several thousand dollars.",
        "Property tax is a different matter. Your bill is made up of a local municipal portion, a York Region portion and an education portion, and only the local part differs between Richmond Hill, Markham, Vaughan, Aurora and Newmarket. That matters for a mortgage because lenders include property tax in the debt service ratios that decide what you can borrow — so the municipality does affect your maximum, just not by as much as people assume. The current rate is published by the City of Richmond Hill and is worth using rather than estimating.",
      ],
    },
    {
      h: "Where I actually work",
      p: [
        "Richmond Hill is the base, not the boundary. The licence is provincial, so the practical limit is Ontario rather than any particular municipality, and a good share of the work is elsewhere in York Region, across the GTA, and in Toronto itself.",
        "If you are outside the GTA entirely and in Ontario, that is still fine — most of a mortgage file moves electronically now, and the parts that do not are handled by your lawyer wherever the property is.",
      ],
    },
  ],

  honest: {
    h: "When you should not use a local agent",
    p: [
      "If someone is offering you a materially better deal and the only reason to stay is proximity, take the better deal. Proximity is a convenience, not a financial argument, and I would rather you say that to me plainly than feel awkward about it.",
      "If your bank's renewal offer is genuinely competitive and switching would cost more in penalties and fees than it saves, stay where you are. That happens often enough that I check it before suggesting anything, and it is the answer often enough that I would rather lead with it.",
      "And if what you actually need is a financial planner, an accountant or a lawyer, I will say so. Mortgage advice is a narrow speciality, and the most common way it goes wrong is someone treating it as general financial advice because they happen to be in the room.",
    ],
  },

  faqs: [
    {
      q: "Do I need to be in Richmond Hill to work with you?",
      a: "No. The licence is provincial, so anywhere in Ontario works, and most of a mortgage file moves electronically these days. Richmond Hill is where the office is, not a limit on where the work happens — a good share of it is elsewhere in York Region, across the GTA and in Toronto.",
    },
    {
      q: "Is land transfer tax lower in Richmond Hill than in Toronto?",
      a: "Yes, materially. Richmond Hill is outside the City of Toronto, so only the provincial land transfer tax applies. Buying inside Toronto adds a municipal land transfer tax on top, which roughly doubles that line item on the same purchase price.",
    },
    {
      q: "Does using a local agent get me a better rate?",
      a: "No, and I would be sceptical of anyone who says otherwise. Rates are set by lenders based on your income, credit, down payment and the property. The same lenders compete for your file regardless of where your agent sits. What a relationship changes is whether anyone is paying attention between transactions — particularly as your renewal approaches.",
    },
    {
      q: "Can we meet in person?",
      a: "Yes. The office is at 65B West Beaver Creek Road in Richmond Hill, and I am generally available seven days a week — the current hours are in the footer of every page. That said, plenty of people prefer to do the whole thing by phone and email, and that works perfectly well.",
    },
  ],

  services: ["renewal", "first-time-buyer", "refinance"],
  calculators: ["mortgage-payment", "affordability", "ontario-land-transfer-tax"],

  verified: "August 2026",
  sources: [
    {
      name: "City of Richmond Hill — Property taxes",
      href: "https://www.richmondhill.ca/en/find-or-learn-about/Property-Taxes.aspx",
    },
    {
      name: "Ontario Ministry of Finance — Land Transfer Tax",
      href: "https://www.ontario.ca/document/land-transfer-tax",
    },
  ],
};

export default area;
