import type { ServicePage } from "@/lib/content/types";

/**
 * Compliance notes — read before editing this page.
 *
 * 1. No rates or payment examples appear here. None have been supplied, and
 *    reverse mortgage pricing varies by lender, age and property (§4).
 *
 * 2. Parker confirmed on 2026-08-26 that he holds reverse mortgage lender
 *    relationships including HomeEquity Bank and Equitable Bank (now recorded
 *    in CLAUDE.md §3), so the page may state that he arranges them. The
 *    framing stays educational regardless — this product is FSRA-supervised
 *    and the honest case against it is the reason the page ranks.
 *
 * 3. FSRA has issued supervisory direction requiring mortgage brokerages to
 *    enhance policies and procedures specifically for reverse mortgage
 *    brokering, on suitability and disclosure to financially vulnerable
 *    consumers. Mortgagebroker.ca compliance should review this page before
 *    it is promoted. Flagged to Parker 2026-07-28.
 *
 * 4. Every figure below is from FCAC and is cited on the page. Reverse
 *    mortgage terms are lender-specific — the page says so repeatedly rather
 *    than implying one universal product.
 *
 * 5. SCOPE, set 2026-08-26. This page is Canadian reverse mortgages only.
 *    Temporary payment relief — deferrals, extended amortization,
 *    interest-only, accruing-interest private mortgages — lives on
 *    /mortgages/payment-relief. Do not let the two merge back together:
 *    they are different products for different people, and the
 *    cannibalization test (CLAUDE.md §5) is what keeps them apart.
 *
 * 6. Slug moved from /mortgages/no-payment to /mortgages/reverse-mortgage
 *    on 2026-08-26, once Parker confirmed the Google Ads campaign had not
 *    launched. The old path 301s to this one in next.config.mjs — keep that
 *    redirect, the old URL was live and in the sitemap for a fortnight.
 */
const page: ServicePage = {
  slug: "reverse-mortgage",
  eyebrow: "Reverse mortgages",
  title: "Reverse mortgages: no payments is not the same as no cost.",
  lede:
    "Products that require nothing from you each month do exist, and for a narrow group of people they are the right answer. The interest does not stop — it moves from your bank account onto your balance, where it compounds quietly against the equity in your home.",

  summary:
    "Reverse mortgages and accruing-interest lending — how they work, what they really cost, and the much smaller group of people they genuinely suit.",

  metaTitle: "Reverse Mortgages in Ontario, Explained",
  metaDescription:
    "How reverse mortgages work in Ontario, what the interest actually costs you over time, and what happens to your home and your estate.",

  intro: [
    "Almost everyone arrives at this subject from an advertisement. The pitch is consistent: stay in your home, take money out of it, never make a payment. All three of those claims are true, which is what makes the product so easy to sell and so easy to misunderstand.",
    "What the advertisement leaves out is the arithmetic. Interest still accrues every single month. Because you are not paying it, it is added to what you owe, and next month's interest is calculated on that larger balance. Nothing about that is hidden or improper — it is simply how the product works, and it is the part you need to see clearly before you decide.",
  ],

  blocks: [
    {
      h: "What a Canadian reverse mortgage is, and is not",
      p: [
        "Most of what is written about reverse mortgages online is American, and the American product is not the same. In Canada these are offered by federally regulated lenders and by mortgage brokers, the borrowing limit is calculated differently, and the government-insured HECM structure that dominates US coverage does not exist here. Read Canadian sources for a Canadian decision.",
        "It is also worth separating this from the other thing people mean when they say \"no payment\". A reverse mortgage is a permanent arrangement for homeowners 55 and older, with no repayment until you leave the home. Payment relief — deferrals, extended amortization, interest-only periods — is a temporary measure for someone struggling with an existing mortgage, and it is covered on its own page.",
      ],
      aside: {
        h: "Two different problems",
        p: "If you are 55 or older with substantial equity and want to convert some of it into money you do not have to repay while you live there, this page is the right one. If you are struggling to make the payments on a mortgage you already have, the payment relief page is where to start — the options there are cheaper, temporary, and in some cases your bank is expected to offer them.",
      },
    },
    {
      h: "How a reverse mortgage actually works",
      p: [
        "It is a loan secured against your home, and you keep ownership of the home throughout. What makes it unusual is that no repayment is required while you are living there.",
      ],
      list: [
        {
          t: "Who qualifies",
          d: "Homeowners usually aged 55 or older. Everyone registered on title has to meet the age requirement, so a younger spouse on title can make a household ineligible until they also qualify.",
        },
        {
          t: "How much you can borrow",
          d: "Usually up to 55% of your home's current value. Where you land inside that ceiling depends on your age and the age of anyone else on title, the condition, type and appraised value of the home, and which lender you use. Older applicants can generally access more.",
        },
        {
          t: "It has to be your home",
          d: "The property securing it must normally be your primary residence, which typically means living there at least six months a year. This rules out cottages and rentals, and it is worth understanding before any extended stay elsewhere.",
        },
        {
          t: "How the money reaches you",
          d: "As one lump sum, as a partial lump sum with the rest drawn over time, or as regular instalments — typically around $1,000 a month or $3,000 a quarter. Lenders usually require a minimum initial draw, commonly around $25,000 on a partial lump sum or $20,000 where you are taking instalments.",
        },
        {
          t: "The money is not taxed",
          d: "It is borrowed money, not income, so it is tax-free and does not affect Old Age Security or the Guaranteed Income Supplement. For someone managing income-tested benefits, this is a genuine and often decisive advantage over drawing down a registered account.",
        },
        {
          t: "Who offers them",
          d: "In Canada, federally regulated lenders including HomeEquity Bank and Equitable Bank, some provincially regulated institutions, and mortgage brokers. Consumer protections differ depending on whether your lender is federally or provincially regulated — worth asking directly.",
        },
      ],
    },
    {
      h: "Where the cost actually sits",
      p: [
        "There is no monthly payment, so the cost has to show up somewhere else. It shows up in the balance.",
        "The interest rate on a reverse mortgage is normally higher than on a conventional mortgage or a home equity line of credit. Your lender adds that interest to what you owe rather than billing you for it, which means the amount outstanding increases every month, and each month's interest is charged on a larger figure than the month before. That is compounding working against you rather than for you.",
        "On top of interest there are usually set-up fees, a home appraisal, legal fees and closing costs, and often a prepayment penalty if you repay early. Lenders may add some of these to your balance and require others up front. Ask for all of them in writing, in dollars, before you sign anything.",
      ],
      aside: {
        h: "Ask for the balance projection, not the rate",
        p: "The single most useful document here is a table showing what you will owe in five, ten and fifteen years if you never make a payment, set against a realistic view of what the home might be worth over the same period. Any lender should produce that on request. If the number at year fifteen surprises you, that is the conversation worth having before you commit, not afterwards.",
      },
    },
    {
      h: "What happens to the house, and to whoever inherits it",
      p: [
        "You keep ownership and you keep living there. The balance falls due when you sell, when you move out, when the last borrower dies, or if you default.",
        "Default is worth understanding because it is not only about money. You can default by letting the property fall into a state of disrepair that reduces its value, by being dishonest on the application, by using the funds for something illegal, or by breaching any other condition in the contract. Each lender sets its own criteria, so ask what yours are.",
        "The estate consequence is the part families are least prepared for. Your estate has a limited window to repay, and lenders set that window themselves. Settling an estate in Ontario can take longer than the time a lender allows — which puts the executor under pressure to sell quickly, sometimes in a market or a season they would not have chosen. Anyone likely to inherit the property should know the reverse mortgage exists long before that point.",
      ],
    },
    {
      h: "What it may stop you doing later",
      p: [
        "A reverse mortgage generally has to sit in first position, so any existing mortgage or home equity line of credit usually has to be paid off and closed as part of setting it up. Lenders will often let you use the reverse mortgage proceeds to do exactly that.",
        "The consequence is a loss of flexibility. Once it is in place you may not be able to take out a HELOC or a similar product against the same home, so the cheap, flexible borrowing you might have used for an emergency is no longer available to you. Some provinces require independent legal advice before you sign, and where it is not required it is still worth getting.",
      ],
    },
    {
      h: "The comparison worth doing first",
      p: [
        "FCAC's own guidance is to compare alternatives before taking a reverse mortgage, and that is the right instinct. The realistic options are usually a conventional mortgage or a home equity line of credit if income supports the payments, downsizing to a smaller property, or in some situations a straightforward family arrangement.",
        "Each of those has a real cost too, including the emotional cost of leaving a home you want to stay in. The point is not that a reverse mortgage is the wrong answer — for some people it is clearly the right one. The point is that it should be chosen against the alternatives rather than instead of looking at them.",
        "I arrange reverse mortgages, including through HomeEquity Bank and Equitable Bank, so this is a product I can actually place rather than only describe. That cuts both ways, and you should know it: I am happy to work the comparison through with you in dollars whether or not there is a transaction in it for me. If a HELOC at a lower rate would do the job, you should hear that from me first.",
      ],
    },
  ],

  honest: {
    h: "When a reverse mortgage is the wrong answer",
    p: [
      "If you have the income to service a conventional mortgage or a line of credit, you will almost certainly pay less by doing that instead. The whole premium here buys the removal of a monthly payment. If that payment is affordable, you are paying a great deal for something you did not need.",
      "If the amount you need is small and the need is short-term, this is an expensive way to solve it. Setting up a reverse mortgage carries fixed costs that do not shrink with the size of the loan, and the interest keeps compounding long after the reason for borrowing has passed.",
      "If you are likely to move within a few years, the set-up costs and possible prepayment penalties get spread across a short period, which makes an already expensive product worse. And if leaving the property to family matters to you, understand plainly that this product reduces what is left, and that the reduction accelerates the longer it runs.",
      "The hardest version of this conversation is when a reverse mortgage is being considered to support someone else — an adult child's purchase or a business that needs capital. Borrowing against your own retirement to fund someone else's plan deserves far more scrutiny than it usually gets, and it deserves it from someone who is not being paid by the outcome. I will give you that view honestly, including when it is not what you want to hear.",
    ],
  },

  faqs: [
    {
      q: "Do I still own my home with a reverse mortgage?",
      a: "Yes. It is a loan secured against the property, not a sale of it. You remain the registered owner and you continue living there. What changes is that a growing balance is secured against the home, and that balance has to be settled when you sell, move out, or die.",
    },
    {
      q: "How much can I get from a reverse mortgage?",
      a: "Usually up to 55% of your home's current value. The actual figure depends on your age and the age of anyone else registered on title, the condition, type and appraised value of the home, and the lender. Older applicants can generally access a larger share, because the lender expects a shorter period of interest accrual.",
    },
    {
      q: "What happens if the balance grows larger than the house is worth?",
      a: "This depends on the specific contract, and it is one of the most important questions to ask your lender directly and get answered in writing. Reverse mortgage agreements in Canada commonly limit what can be recovered to the value of the property, but the protection is a term of the contract rather than something universal, so confirm it for the product actually in front of you rather than assuming it.",
    },
    {
      q: "Can I pay it off early?",
      a: "Generally yes, and most lenders also permit some voluntary payments against the balance up to a maximum. But early repayment often triggers a prepayment penalty, and the terms vary considerably between lenders. If there is any real chance you will sell or repay within the first few years, the prepayment terms matter more than the rate.",
    },
    {
      q: "Will a reverse mortgage affect my OAS or GIS?",
      a: "No. The money is borrowed rather than earned, so it is not taxable income and does not count against income-tested benefits like Old Age Security or the Guaranteed Income Supplement. For some people this is the strongest single argument for the product, particularly compared with drawing down an RRSP or RRIF, which does count as income.",
    },
    {
      q: "Should my children know about it?",
      a: "In my view, yes, and early. Whoever eventually deals with your estate will inherit both the property and the deadline attached to it, and estates in Ontario can take longer to settle than the window a lender allows for repayment. A conversation now is considerably easier than an executor discovering the balance under time pressure later.",
    },
  ],

  calculators: ["mortgage-payment"],
  related: ["payment-relief", "refinance", "renewal"],

  verified: "July 2026",
  sources: [
    {
      name: "Financial Consumer Agency of Canada — Reverse mortgages",
      href: "https://www.canada.ca/en/financial-consumer-agency/services/mortgages/reverse-mortgages.html",
    },
    {
      name: "Financial Consumer Agency of Canada — Borrowing against home equity",
      href: "https://www.canada.ca/en/financial-consumer-agency/services/mortgages/borrow-home-equity.html",
    },
    {
      name: "FSRA — Private mortgages: what consumers should know",
      href: "https://www.fsrao.ca/privatemortgage",
    },
  ],
};

export default page;
