import type { ServicePage } from "@/lib/content/types";

/**
 * Compliance note: no rates, APRs or payment examples appear here — none have
 * been supplied (CLAUDE.md §4). Product structure is described in general
 * terms with qualifiers, because it varies by lender, property and borrower.
 *
 * Framing is deliberate. Alternative lending is expensive and this page says
 * so repeatedly. Marketing it as an easy yes to people under financial
 * pressure would be both a compliance risk and the wrong thing to do.
 */
const page: ServicePage = {
  slug: "alternative-lending",
  eyebrow: "Alternative lending",
  title: "When the bank says no, that is not the end of the conversation.",
  lede:
    "Alternative and private lenders exist for people whose situation is temporarily outside what a bank will approve. They cost more than a bank mortgage — sometimes considerably more — and the whole point is to leave them.",

  summary:
    "B lenders and private mortgages — what they cost, who they suit, and how to plan the exit back to a bank.",

  metaTitle: "Private & B Lender Mortgages Ontario",
  metaDescription:
    "How B lenders and private mortgages work in Ontario, what they actually cost, who they suit, and how to plan the exit back to a bank.",

  intro: [
    "Most people meet alternative lending at the worst possible moment. An application has just been declined, a closing date is coming, and someone has mentioned that there are other options without explaining what they cost.",
    "So here is the explanation. Alternative lending is a real, regulated part of the Canadian mortgage market. It is not a last resort for people who have done something wrong — it is a bridge for people whose paperwork does not currently match a bank's template. Used properly, with a plan and a deadline, it works. Used as a permanent solution, it is expensive and it compounds.",
  ],

  blocks: [
    {
      h: "The three tiers, and where you actually sit",
      p: [
        "Lenders in Canada fall roughly into three groups, and knowing which one your file belongs in is most of the job.",
      ],
      list: [
        {
          t: "A lenders",
          d: "Banks, credit unions and the large monoline lenders. The cheapest money available, and the strictest rules about who gets it. They want verifiable income, established credit and a property that fits a narrow definition of normal.",
        },
        {
          t: "B lenders",
          d: "Regulated institutions — trust companies and specialist lenders — that price for slightly more risk. They will look at income you can evidence differently, credit that has been through something, or a debt ratio slightly outside A guidelines. Rates sit above A pricing and there is usually a lender fee.",
        },
        {
          t: "Private lenders",
          d: "Mortgage investment corporations and individual investors lending their own capital. They care primarily about the property and the equity in it rather than your income or credit history. The most expensive tier, the shortest terms, and the one that needs the clearest exit plan.",
        },
      ],
      aside: {
        h: "Most people land higher than they expect",
        p: "A bank declining you does not mean private lending is the next step. Very often the answer is a B lender at a modest premium, not a private mortgage. Anyone who jumps straight to private without testing the tier above it is not doing the work.",
      },
    },
    {
      h: "Why a file ends up here",
      p: [
        "The reasons are almost always circumstantial and almost always temporary. In my experience these are the common ones:",
      ],
      list: [
        {
          t: "Self-employed income",
          d: "You write off expenses legitimately, which reduces your taxable income, which is the only income a bank will count. The business is healthy; the tax return does not show it.",
        },
        {
          t: "Credit that has been through something",
          d: "A separation, an illness, a business that did not work, a period of missed payments that is now behind you. Credit recovers, but not on a bank's timeline.",
        },
        {
          t: "Debt ratios slightly over the line",
          d: "Everything is affordable in practice, but a car loan and a line of credit push you past the ratio a bank will accept.",
        },
        {
          t: "The property itself",
          d: "Rural acreage, a former grow operation, a live-work unit, a property with an unusual water supply or a small multi-unit building. Some properties fall outside what A lenders will hold on their books regardless of how strong the borrower is.",
        },
        {
          t: "Timing",
          d: "A firm closing date and financing that has fallen through. A short-term private mortgage can save a deal that would otherwise collapse, then be replaced later.",
        },
      ],
    },
    {
      h: "What it actually costs",
      p: [
        "This is the part that gets glossed over, so I will be direct about it. Alternative lending costs more in three separate ways, and you need to count all three before deciding.",
        "The rate is higher than a bank would charge, and it rises as you move from B lending toward private. There are fees — typically a lender fee and a broker fee, calculated as a percentage of the loan, and on private deals these are meaningful rather than nominal. And the term is shorter, often a single year on a private mortgage, which means you face renewal or refinancing costs again sooner.",
        "Every one of those fees has to be disclosed to you in writing, in dollars, before you commit to anything. That is not a courtesy — it is a requirement on any licensed mortgage agent in Ontario. If anyone is vague about fees, that is your signal to walk away.",
      ],
      aside: {
        h: "Count the total, not the rate",
        p: "A slightly lower rate with a larger fee can easily cost more over a one-year term than the reverse. I will show you the total cost of each option in dollars over the actual term, not just the rate, so you are comparing the same thing.",
      },
    },
    {
      h: "Equity is what you are borrowing against",
      p: [
        "The further you move from A lending, the less your income matters and the more the property does. Private lenders in particular are lending against the equity in the property, which means they will advance considerably less against its value than a bank would.",
        "The practical consequence is that alternative lending is generally not available to someone with a small down payment or little accumulated equity. It suits someone who owns a property with real equity in it and has a temporary income or credit problem — not someone who is short of a down payment.",
      ],
    },
    {
      h: "The exit plan is the actual product",
      p: [
        "This is the part that separates a sensible alternative mortgage from an expensive mistake. You should not sign one without knowing precisely what has to change for you to leave it, and roughly when that will be.",
        "A workable plan usually looks like one of these: two years of tax returns that finally show the real income of your business, twelve to eighteen months of clean payment history rebuilding your credit score, a consumer proposal completed and discharged, or debt consolidated and paid down far enough to bring your ratios back inside A guidelines.",
        "I write that plan down at the start, with the milestones and the date we expect to act, and I follow up on it. A private mortgage that quietly renews three times because nobody was tracking the exit is the failure case, and it is entirely avoidable.",
      ],
    },
    {
      h: "How I approach these files",
      p: [
        "I test the tiers in order. Your file goes to A lenders first, then to B lenders, and to private only if the tiers above have genuinely been exhausted — not because private is faster or easier to place.",
        "You see the total cost of every option in dollars, including all fees, before you choose. And you get the exit plan in writing, because the point of this product is to stop using it.",
      ],
    },
  ],

  honest: {
    h: "When alternative lending is the wrong answer",
    p: [
      "If you are considering a private mortgage to consolidate consumer debt and nothing about your income or spending is going to change, the mortgage will not fix the problem. It converts unsecured debt into debt secured against your home, at a cost, and the debt usually rebuilds. That is a materially worse position than where you started.",
      "If your closing is months away rather than weeks, waiting is often cheaper than borrowing. Three months of deliberate credit repair, or waiting for a second year of tax returns to file, can move you a whole tier and save more than any rate negotiation ever will.",
      "And if the numbers only work assuming property values rise, they do not work. An exit plan that depends on appreciation is not a plan.",
      "If any of those describe your situation, I will tell you so on the first call. I would rather lose a deal than place someone into a product that makes their position worse.",
    ],
  },

  faqs: [
    {
      q: "Is a private mortgage safe?",
      a: "Private mortgages are a legitimate, regulated part of the Ontario market, and mortgage agents arranging them are licensed and supervised by FSRA. The risk is not that the product is illegitimate — it is that it costs more, and that a borrower without an exit plan can end up renewing it repeatedly. Understand the total cost and the exit before you sign, and it is a reasonable short-term tool.",
    },
    {
      q: "How long do people stay in alternative lending?",
      a: "The goal is usually one to two years. That is generally long enough to file a second year of self-employed tax returns, or to rebuild a credit score with consistent payment history. If someone is proposing an alternative mortgage with no discussion of when you leave it, that is a warning sign.",
    },
    {
      q: "Will taking a B or private mortgage hurt my credit?",
      a: "The mortgage itself does not damage your credit, and making the payments on time helps rebuild it. What matters is the payment history you build while you are in it, which is exactly why the exit plan and the affordability of the payment matter so much.",
    },
    {
      q: "Do I pay fees even if the mortgage does not go ahead?",
      a: "Fee arrangements have to be disclosed to you in writing before you commit, including what happens if a deal does not complete. Read that disclosure and ask about it directly. Any licensed agent should be able to explain their fees in plain language without hesitating.",
    },
    {
      q: "Can I get out of a private mortgage early?",
      a: "That depends entirely on the terms, and it is one of the first things to check rather than assume. Some private mortgages carry a minimum interest period or a prepayment penalty that makes leaving early expensive. Since the whole strategy depends on exiting, the exit terms matter more here than on a conventional mortgage.",
    },
  ],

  calculators: ["mortgage-payment", "affordability", "stress-test"],
  related: ["self-employed", "refinance", "investment-property"],
};

export default page;
