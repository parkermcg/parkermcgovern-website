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
    "Down payment minimums, land transfer tax rebates, closing costs and how much you can actually borrow as a first-time buyer in Ontario.",

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
        "Both are federal programs built specifically for a first purchase, and between them one buyer can direct $100,000 at a home — $40,000 contributed to a First Home Savings Account, plus $60,000 withdrawn from an RRSP under the Home Buyers' Plan. Whatever the FHSA earns along the way comes out on top of that. A couple who both qualify can do all of it twice.",
        "They are not an either/or choice. You can make an FHSA withdrawal and an HBP withdrawal for the same home in the same purchase, as long as you meet each program's conditions at the time of each withdrawal. Neither is automatic — you have to open the account, fund it, and withdraw from it correctly.",
      ],
      list: [
        {
          t: "FHSA — what goes in",
          d: "$8,000 of contribution room a year, to a lifetime maximum of $40,000. Contributions are deducted against your income the way RRSP contributions are, so a full $8,000 year reduces your taxable income by $8,000. Unused room carries forward, but the carryforward is itself capped at $8,000 — meaning the most you can ever put in during a single calendar year is $16,000.",
        },
        {
          t: "FHSA — open it earlier than you think you need to",
          d: "Room only starts accruing in the year you open your first account, and because you can never carry more than one extra year forward, reaching the $40,000 lifetime maximum takes at least five years of holding the account — no matter how much cash you have available. Opening one costs nothing and you do not have to fund it right away. The account existing is what starts the clock.",
        },
        {
          t: "FHSA — what comes out",
          d: "A qualifying withdrawal is entirely tax-free, including all the growth, and is never repaid. There is no minimum period the money must sit in the account first. You need a written agreement to buy or build, with the purchase completing before October 1 of the year following your withdrawal, and Form RC725 filed with your institution.",
        },
        {
          t: "FHSA — the account has an expiry",
          d: "It must be used within fifteen years of opening, by the end of the year you turn 71, or by the end of the year after your first qualifying withdrawal — whichever comes first. If you never buy, the balance transfers directly into an RRSP or RRIF with no tax and without consuming any of your RRSP deduction room. The money is not trapped.",
        },
        {
          t: "Home Buyers' Plan — what you can take",
          d: "Up to $60,000 per person out of your RRSPs, with no tax withheld at the time. The money has to already be in the account: RRSP contributions made in the 89 days before an HBP withdrawal may not be deductible. That rule catches people who try to route a down payment through an RRSP at the last minute to capture the refund.",
        },
        {
          t: "Home Buyers' Plan — it is a loan from yourself",
          d: "You repay it into your RRSP over fifteen years, a fifteenth of the balance each year. Repayment normally begins the second year after the year of your first withdrawal, and first withdrawals made between 2022 and 2025 received a temporary three-year deferral that pushes the start to the fifth year. In any year you repay less than the minimum, the shortfall is added to your taxable income for that year.",
        },
        {
          t: "“First-time buyer” is not one single test",
          d: "Broadly it means not having lived in a home you or your spouse or common-law partner owned during the current calendar year or the previous four. But the wording differs between opening an FHSA, withdrawing from one, and using the HBP — and the HBP carries its own exception for people who have separated. Worth confirming rather than assuming, especially where one partner has owned before.",
        },
      ],
      aside: {
        h: "The order matters more than the amounts",
        p: "An FHSA opened today starts generating contribution room today, and that room is the one part you cannot buy back later. If you are a year or more from purchasing, open one before you do anything else — even with nothing in it. The RRSP side can be organised much closer to the purchase, provided the money has been sitting in the account longer than 89 days.",
      },
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
      q: "How much can I put toward a home using an FHSA and the Home Buyers' Plan?",
      a: "Up to $100,000 per person: $40,000 of lifetime FHSA contributions, plus a $60,000 withdrawal from your RRSPs under the Home Buyers' Plan. Any growth inside the FHSA comes out on top of the $40,000. A couple who both qualify can each do this, so $200,000 of contributions is possible in principle — though the FHSA side accrues at $8,000 a year, so the full amount takes at least five years to build.",
    },
    {
      q: "Can I use both an FHSA and the Home Buyers' Plan for the same house?",
      a: "Yes. They are separate programs and you can draw on both for the same purchase, provided you meet each one's conditions at the time of each withdrawal. There is no requirement to choose between them, and for most first-time buyers with the savings to do it, using both is the better answer.",
    },
    {
      q: "Do I have to pay back an FHSA withdrawal like the Home Buyers' Plan?",
      a: "No. A qualifying FHSA withdrawal is tax-free and permanent — there is nothing to repay. The Home Buyers' Plan is different: it is effectively a loan from your own RRSP, repaid over fifteen years at a fifteenth per year, and any year you repay less than the minimum, the shortfall is added to your taxable income. That difference is worth weighing if you are choosing which account to draw down first.",
    },
    {
      q: "What happens to my FHSA if I never end up buying?",
      a: "Nothing is lost. The balance transfers directly into an RRSP or RRIF with no tax owing and without using up any of your RRSP deduction room. The account itself has to be closed within fifteen years of opening or by the end of the year you turn 71, whichever comes first, so the deadline is on the account rather than on the money.",
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
    {
      name: "Canada Revenue Agency — First Home Savings Account (FHSA)",
      href: "https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/first-home-savings-account.html",
    },
    {
      name: "Canada Revenue Agency — The Home Buyers' Plan",
      href: "https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/what-home-buyers-plan.html",
    },
  ],
};

export default page;
