import type { Guide } from "@/lib/content/guides";

/**
 * DRAFT — awaiting Parker's sign-off. Ships `noindex` and stays out of the
 * sitemap and all listings until `draft` is removed (CLAUDE.md §4).
 *
 * Every figure verified against primary sources on 2026-08-26:
 *   - FHSA limits, carryforward cap, participation period, qualifying
 *     withdrawal conditions, transfers out — CRA
 *   - HBP $60,000 limit, 15-year repayment, 89-day rule — CRA
 *   - Ontario LTT first-time buyer refund: $4,000 cap, no tax on the first
 *     $368,000, "never owned anywhere in the world", spouse rule, 9-month
 *     occupancy, citizenship/PR requirement, 18-month claim window —
 *     Ontario Ministry of Finance
 *
 * The §6 section is the reason this guide exists: Ontario's refund and the
 * federal programs use DIFFERENT first-time-buyer tests, and Ontario says so
 * itself. Do not soften it — it is the part that costs people $4,000.
 */
const guide: Guide = {
  slug: "fhsa-explained",
  cluster: "first-time-buyer",
  draft: true,

  title: "The First Home Savings Account, explained",
  lede:
    "The FHSA is the only registered account in Canada that is deductible going in and tax-free coming out. For a first purchase it beats both the RRSP and the TFSA — but only if you open it early enough to build the room.",

  metaTitle: "The FHSA for First-Time Buyers",
  metaDescription:
    "How the First Home Savings Account works in Ontario: the $8,000 and $40,000 limits, what a qualifying withdrawal needs, and stacking it with the Home Buyers' Plan.",

  published: "2026-08-26",
  updated: "2026-08-26",

  intro: [
    "Registered accounts usually make you choose. An RRSP gives you a deduction now and taxes the money when it comes out. A TFSA gives you no deduction but never taxes the growth. The First Home Savings Account does both halves — you deduct the contribution against your income, and if you use it to buy a first home, the whole balance including the growth comes out tax-free and is never repaid.",
    "There is no catch in the tax treatment. The catch is in the timing. Contribution room only starts accumulating once the account exists, and it accrues slowly enough that opening the account late is the single most expensive mistake people make with it.",
  ],

  takeaways: [
    "$8,000 of room a year, to a lifetime maximum of $40,000.",
    "Room only starts accruing in the year you open your first FHSA — an empty account still earns room.",
    "You can never carry more than one extra year forward, so $16,000 is the most you can contribute in any single calendar year.",
    "Reaching the full $40,000 therefore takes at least five years of holding the account, whatever your cash position.",
    "A qualifying withdrawal is entirely tax-free, including growth, and is never repaid.",
    "You can use the FHSA and the RRSP Home Buyers' Plan for the same purchase — up to $100,000 per person.",
    "Qualifying for the FHSA does not mean you qualify for Ontario's land transfer tax refund. The tests are different.",
  ],

  sections: [
    {
      h: "What makes it different from an RRSP or a TFSA",
      p: [
        "The FHSA borrows the best half of each. Contributions are deductible against your taxable income the way RRSP contributions are, so a full $8,000 year reduces the income you are taxed on by $8,000. Withdrawals for a qualifying home purchase are tax-free the way TFSA withdrawals are, and unlike the Home Buyers' Plan there is nothing to pay back afterwards.",
        "That combination does not exist anywhere else in the Canadian tax system. For someone who is genuinely buying a first home, contributing to an FHSA before an RRSP or a TFSA is close to automatic.",
      ],
      aside: {
        h: "The deduction can wait",
        p: "You do not have to claim the deduction in the year you contribute. If you expect to earn more next year, you can carry the deduction forward and use it when your marginal rate is higher — the same technique that makes RRSP contributions worth more to a higher earner. Contribute early to start the growth, claim the deduction when it is worth most.",
      },
    },
    {
      h: "What you can put in, and why it takes five years",
      p: [
        "The mechanics of the contribution room are where most explanations go wrong, so here they are precisely.",
      ],
      list: [
        {
          t: "$8,000 a year",
          d: "In the year you open your first FHSA your room is exactly $8,000, with nothing carried in from before that. Opening the account is what creates the room.",
        },
        {
          t: "$40,000 lifetime",
          d: "An absolute ceiling on contributions across every FHSA you hold. Growth inside the account does not count toward it, and does not reduce it.",
        },
        {
          t: "Carryforward is capped at $8,000",
          d: "Unused room carries into the following year, but never more than one year's worth. So the maximum you can contribute in any single calendar year is $16,000, and room you leave unused for several years does not keep stacking up.",
        },
        {
          t: "Which means at least five years",
          d: "Because room accrues at $8,000 a year and you can only ever bank one extra year, reaching the $40,000 lifetime maximum takes a minimum of five years of holding the account — no matter how much cash you have available to contribute.",
        },
        {
          t: "Transfers count against the same room",
          d: "You can move money from an RRSP into an FHSA, but a transfer uses the same annual room a contribution does. It also does not generate a deduction, because you already had one when the money went into the RRSP.",
        },
      ],
      aside: {
        h: "Open it before you need it",
        p: "This is the practical advice that matters most on this page. If you are a year or more away from buying, open an FHSA now even if you cannot fund it. An empty account accrues room; no account accrues nothing. The room you fail to start earning this year is the one part of this you cannot buy back later.",
      },
    },
    {
      h: "Getting the money out",
      p: [
        "A withdrawal that meets every condition below is a qualifying withdrawal: entirely tax-free, growth included, with nothing to repay. Miss one condition and the whole amount becomes taxable income in the year you receive it, so this is worth checking rather than assuming.",
      ],
      list: [
        {
          t: "You have to be a first-time buyer, on the CRA's definition",
          d: "You must not have lived in a home you owned or jointly owned at any point in the current calendar year before the withdrawal — apart from the 30 days immediately before it — or in the previous four calendar years.",
        },
        {
          t: "A written agreement to buy or build",
          d: "Signed, with the purchase or construction completing before October 1 of the year following your withdrawal. A pre-approval is not an agreement.",
        },
        {
          t: "You intend to live there",
          d: "As your principal residence, within one year of buying or building it.",
        },
        {
          t: "Form RC725",
          d: "Completed and given to your financial institution. This is the step that actually designates the withdrawal as qualifying — without it, the money is simply a taxable withdrawal.",
        },
        {
          t: "No waiting period",
          d: "Unlike the Home Buyers' Plan, there is no minimum time the money has to sit in the account. A contribution made shortly before a qualifying withdrawal still comes out tax-free.",
        },
      ],
    },
    {
      h: "If you never end up buying",
      p: [
        "Nothing is lost, which is what makes opening one early such a low-risk decision. The balance transfers directly into an RRSP or a RRIF with no tax owing, and — importantly — without using any of your RRSP deduction room. Effectively you get extra tax-sheltered retirement room you would not otherwise have had.",
        "The deadline sits on the account rather than the money. It has to be closed by the end of the fifteenth year after opening, by the end of the year you turn 71, or by the end of the year following your first qualifying withdrawal, whichever comes first. Make sure it is a direct transfer between institutions: withdraw the money yourself and it becomes taxable income, and re-contributing it to an RRSP consumes RRSP room.",
      ],
    },
    {
      h: "Stacking it with the Home Buyers' Plan",
      p: [
        "These are separate programs and you can use both for the same home, in the same purchase, provided you meet each one's conditions at the time of each withdrawal. There is no requirement to choose.",
        "The Home Buyers' Plan lets you take up to $60,000 out of your RRSPs with no tax withheld. Together with $40,000 of FHSA contributions that is $100,000 per person directed at a first home, plus whatever the FHSA earned along the way. A couple who both qualify can each do it.",
        "The two are not equivalent, though, and the difference matters when you decide which to draw down first. An FHSA withdrawal is permanent and tax-free. The Home Buyers' Plan is a loan from your own RRSP: you repay a fifteenth of the balance each year over fifteen years, and in any year you repay less than the minimum, the shortfall is added to your taxable income. If you only need one of them, use the FHSA.",
      ],
      aside: {
        h: "The 89-day trap on the RRSP side",
        p: "Money withdrawn under the Home Buyers' Plan has to have been sitting in the RRSP already. Contributions made in the 89 days before an HBP withdrawal may not be deductible — which catches people who try to route a down payment through an RRSP at the last minute to capture the refund. The FHSA has no equivalent rule.",
      },
    },
    {
      h: "Where the FHSA does not help: Ontario's land transfer tax refund",
      p: [
        "This is the part that costs people money, because the phrase \"first-time buyer\" means two different things depending on who is asking.",
        "Ontario's land transfer tax refund is worth up to $4,000 provincially — no land transfer tax at all on the first $368,000 of the price — and up to a further $4,475 against Toronto's municipal land transfer tax inside the city. But Ontario's test is far stricter than the CRA's. You must never have owned an eligible home anywhere in the world, at any time. There is no four-year reset. The Ministry of Finance states it plainly: you cannot re-qualify as a first-time homebuyer, and it notes that this rule may differ from federal programs.",
        "How you came to own the previous home is irrelevant — a purchase, a gift and an inheritance all disqualify you equally. And the spouse rule is unforgiving: if your spouse owned an eligible home at any time while they were your spouse, no refund is available to either of you.",
        "So it is entirely possible to sell a home, wait out the CRA's four calendar years, legitimately open an FHSA, make a qualifying tax-free withdrawal, use the Home Buyers' Plan as well — and still owe every dollar of Ontario land transfer tax. The federal programs reset. Ontario's does not.",
      ],
      aside: {
        h: "Three more conditions on the Ontario refund",
        p: "You must be at least 18, you must occupy the home as your principal residence within nine months of the transfer, and since 2017 you must be a Canadian citizen or permanent resident. The claim has to be made within 18 months of registration — it is usually applied by your lawyer at closing, but it is not automatic, and if it is missed you have that window to claim it back from the Ministry of Finance.",
      },
    },
    {
      h: "When the FHSA is not the right move",
      p: [
        "If you have no realistic prospect of buying and you need the money accessible, a TFSA is the better home for it. FHSA money is not locked up in the way an RRSP is, but a withdrawal that is not a qualifying withdrawal is fully taxable as income, which is a poor outcome for what was meant to be savings.",
        "If your income this year is unusually low — a first job, a year of parental leave, a year of self-employment losses — the deduction is worth comparatively little. Contribute anyway to start the room accruing, but carry the deduction forward and claim it in a higher-earning year.",
        "And if carrying high-interest debt is the real problem, clear that first. No registered account returns anything close to what a credit card charges, and a lender will look at those balances when deciding what you can borrow. Arriving at a purchase with $40,000 saved and $20,000 of consumer debt is a materially worse position than arriving with $20,000 saved and none.",
      ],
    },
  ],

  faqs: [
    {
      q: "Can I have an FHSA and a TFSA and an RRSP at the same time?",
      a: "Yes. They are separate accounts with separate contribution room and no interaction between their limits — apart from an RRSP-to-FHSA transfer, which uses your FHSA room for that year. For a first purchase the usual order is FHSA first, because it is the only one that is both deductible going in and tax-free coming out.",
    },
    {
      q: "What happens if I open an FHSA and never contribute anything?",
      a: "Nothing bad, and it is often the right move. The account existing is what starts your contribution room accruing — $8,000 for the year you open it, and $8,000 each following year. Opening one costs nothing and commits you to nothing, and it is the only way to be in a position to use the full $40,000 later.",
    },
    {
      q: "Can my spouse and I both use an FHSA for the same house?",
      a: "Yes, provided you each meet the qualifying withdrawal conditions in your own right. You each make a withdrawal from your own account, and each of you can also use the Home Buyers' Plan. Between the two programs and two people that is up to $200,000 of contributions directed at one purchase, plus growth.",
    },
    {
      q: "Do I lose the room if I don't use it one year?",
      a: "Partly. Unused room carries forward, but the carryforward is capped at $8,000 — so you can bank at most one extra year. Skipping two or three years in a row does not let you contribute $24,000 or $32,000 later; the most you can ever put in during a single calendar year is $16,000.",
    },
    {
      q: "I owned a home years ago. Can I use an FHSA now?",
      a: "Possibly for the federal programs, and almost certainly not for Ontario's land transfer tax refund. The CRA's test looks back at the current calendar year and the previous four, so previous ownership can age out. Ontario's test asks whether you have ever owned an eligible home anywhere in the world, and there is no way to re-qualify. Worth confirming both separately rather than assuming one answer covers you.",
    },
  ],

  sources: [
    {
      name: "Canada Revenue Agency — First Home Savings Account (FHSA)",
      href: "https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/first-home-savings-account.html",
    },
    {
      name: "Canada Revenue Agency — The Home Buyers' Plan",
      href: "https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/what-home-buyers-plan.html",
    },
    {
      name: "Ontario Ministry of Finance — Land transfer tax refunds for first-time homebuyers",
      href: "https://www.ontario.ca/document/land-transfer-tax/land-transfer-tax-refunds-first-time-homebuyers",
    },
  ],

  relatedGuides: [
    "how-much-down-payment",
    "closing-costs-ontario",
    "ontario-land-transfer-tax-explained",
  ],
  relatedServices: ["first-time-buyer"],
  relatedCalculators: ["ontario-land-transfer-tax", "affordability"],
};

export default guide;
