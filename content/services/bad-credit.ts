import type { ServicePage } from "@/lib/content/types";

/**
 * PUBLISHED 2026-08-26 — Parker reviewed and approved all three Phase 3
 * pages and asked for them to go live.
 *
 * VERIFIED (Office of the Superintendent of Bankruptcy, 2026-08-26):
 *   consumer proposals are administered by a Licensed Insolvency Trustee and
 *   filed with the OSB; creditors have 45 days to accept or reject; payments
 *   cannot run longer than five years; unlike bankruptcy the debtor keeps
 *   their assets provided the terms are met.
 *
 * CREDIT BUREAU RETENTION — verified against FCAC 2026-08-26. Both figures
 * were previously omitted for lack of a source; FCAC publishes them directly:
 *   - Consumer proposal: Equifax AND TransUnion both remove it 3 years after
 *     the debts in the proposal are paid, or 6 years after signing, whichever
 *     comes first. The two bureaus use the SAME schedule here — an earlier
 *     draft wrongly implied they differ.
 *   - Bankruptcy: removed 6 years after discharge, but TransUnion holds it
 *     7 years in Ontario (one of four provinces). Clock runs from DISCHARGE,
 *     not from filing.
 *   - Second bankruptcy: 14 years.
 * Source: FCAC, "How long information stays on your credit report", cited on
 * the page. Re-check if the page is materially revised.
 *
 * LENDER TIMELINE — the "about two years of re-established credit" figure is
 * Parker's own professional experience, supplied 2026-08-26, and is framed on
 * the page as his experience rather than as a published rule. It is not a
 * regulator's number and must not be presented as one.
 *
 * No rates, fees or approval odds anywhere — none supplied (CLAUDE.md §4).
 */
const page: ServicePage = {
  slug: "bad-credit",

  eyebrow: "Credit-damaged files",
  title: "A bruised credit file is a timing problem, not a character problem.",
  lede:
    "Missed payments, a consumer proposal, a bankruptcy that is behind you — none of these end the conversation. They change which lender the file goes to, what it costs, and how long you stay there before moving back.",

  summary:
    "How credit-damaged files actually get placed, what changes after a consumer proposal, and realistic timelines to requalify.",

  metaTitle: "Bad Credit Mortgages in Ontario",
  metaDescription:
    "Mortgages in Ontario after missed payments, a consumer proposal or a bankruptcy — which lenders will look, what it costs, and how long until you requalify.",

  intro: [
    "Most people arrive at this subject having already been told no, usually by a bank, usually without much explanation. The explanation matters, because the reason for a decline determines how long the problem lasts and what fixes it.",
    "Credit damage is almost always temporary. Lenders are not judging you — they are pricing risk from a file, and the file changes as the payment history behind it changes. What follows is how those files actually get placed, and roughly how long each situation takes to move.",
  ],

  blocks: [
    {
      h: "The tiers decide this, not the score alone",
      p: [
        "A credit score is one input. What lenders are really reading is the pattern behind it — what went wrong, when, whether it is still happening, and what your payment history looks like since. Two people with the same score routinely get different answers.",
        "The three-tier structure on the alternative lending page is the frame here too: A lenders want clean, established credit; B lenders will price for a file that has been through something; private lenders care mainly about the property and the equity in it. Most credit-damaged files land at B, not private — and anyone who jumps straight to private without testing B first is not doing the work.",
      ],
      list: [
        {
          t: "Recent and ongoing",
          d: "Missed payments in the last few months, collections still open, balances at their limits. This is the hardest version, because nothing has stabilised yet. Usually the honest answer is to fix the pattern before applying at all.",
        },
        {
          t: "Recent but resolved",
          d: "A rough patch that has ended — collections paid, balances brought down, several months of clean payments behind you. B lenders will often work with this, and the clock to get back to an A lender has already started.",
        },
        {
          t: "Historic",
          d: "Something that happened years ago and has been clean since. Frequently placeable at an A lender, and often the applicant has assumed for years that it is not. Worth checking rather than assuming.",
        },
        {
          t: "Thin rather than damaged",
          d: "Not a bad file, just not much of one. Common for newcomers and for people who have avoided credit on principle. Different problem, different fix, and covered on the new to Canada page.",
        },
      ],
    },
    {
      h: "What a consumer proposal actually is",
      p: [
        "A consumer proposal is a formal, legally binding process under federal insolvency law. You work with a Licensed Insolvency Trustee, who develops an offer to your creditors — to pay a percentage of what is owed, or to extend the time to pay, or both — and files it with the Office of the Superintendent of Bankruptcy.",
        "Your creditors then have 45 days to accept or reject it. Payments cannot run longer than five years. And unlike a bankruptcy, you keep your assets while it runs, provided you meet the terms — including your house.",
        "That last point is the one that gets missed. A consumer proposal is not a forced sale. People go through one, keep their home and their mortgage, and come out the other side with the debt resolved.",
      ],
      aside: {
        h: "Completing it is the milestone",
        p: "An active proposal and a completed one are read very differently. Lenders want to see it fully paid and formally completed, with the certificate to prove it, rather than a payment plan still running. If you are partway through and considering a mortgage move, the completion date is usually the number that matters most in the planning.",
      },
    },
    {
      h: "How long it stays on your credit report",
      p: [
        "These are the removal rules published by the Financial Consumer Agency of Canada, and they are worth knowing precisely rather than approximately — particularly in Ontario, where one of them runs a year longer than it does in most of the country.",
      ],
      list: [
        {
          t: "A consumer proposal — three years, or six",
          d: "Equifax and TransUnion both remove it three years after you have paid off everything included in the proposal, or six years after you signed it, whichever comes first. On this one the two bureaus use the same schedule.",
        },
        {
          t: "Which means finishing early actually helps",
          d: "Pay the proposal off in two years and the three-years-after-payoff rule lands first, at roughly year five. Take the full five years and the six-years-after-signing cap gets there first instead. Clearing it ahead of schedule genuinely shortens how long it shows.",
        },
        {
          t: "A bankruptcy — six years with Equifax",
          d: "Removed six years after you are discharged. Note that the clock runs from discharge, not from the date you filed.",
        },
        {
          t: "A bankruptcy — seven years with TransUnion in Ontario",
          d: "Ontario is one of four provinces where TransUnion holds it a year longer than the usual six. So an Ontario file can be clear at Equifax and still show the bankruptcy at TransUnion, and which bureau a lender pulls will matter in that window.",
        },
        {
          t: "A second bankruptcy — fourteen years",
          d: "If you have declared bankruptcy more than once, the bureaus keep the information for fourteen years.",
        },
      ],
      aside: {
        h: "The removal date is rarely the binding constraint",
        p: "Waiting for something to disappear from your report is usually the wrong plan. What lenders weigh most heavily is what you have built since — and in my experience you are typically looking at about two years of clean, re-established credit after a discharge or completion before A lenders will seriously engage. That two years can run concurrently with the item still showing on your report. B lenders will often look sooner.",
      },
    },
    {
      h: "What re-established credit actually means",
      p: [
        "It means active accounts reporting on time, not simply the absence of new problems. This is the part people get wrong: they come out of a proposal determined never to touch credit again, and two years later have a file with nothing in it.",
        "A file with no active credit can be harder to place than a file with two small accounts paid perfectly. Lenders are looking for evidence the pattern has changed, and an empty report provides none. A secured card and one small instalment loan, both paid on time, do more for you over two years than any explanation letter.",
        "The other half is the paperwork. For a proposal, lenders want the certificate of full performance showing it is formally completed — not a payment history showing you are nearly there. For a bankruptcy, they want the discharge. Get both when they are issued rather than trying to obtain them years later.",
      ],
    },
    {
      h: "What it costs while you are there",
      p: [
        "A B lender mortgage costs more than an A lender mortgage in three separate ways, and you should count all three rather than comparing rates alone. The rate itself is higher. There is usually a lender fee and a broker fee, calculated as a percentage of the loan. And the term is often shorter, which means you face renewal or refinancing costs again sooner.",
        "Every fee has to be disclosed to you in writing, in dollars, before you commit to anything. That is a requirement on any licensed mortgage agent in Ontario, not a courtesy. If anyone is vague about fees, treat that as your signal to walk away.",
      ],
      aside: {
        h: "The exit is the actual product",
        p: "Nobody should be in a B or private mortgage indefinitely. The point of it is to get you through a period your credit file cannot currently support, while the file repairs, and then to leave. I write that plan down at the start — what has to change, and roughly when we expect to act on it — and I follow up on it.",
      },
    },
    {
      h: "What actually helps, in order",
      p: [
        "The things that move a credit file are unglamorous and they work. In rough order of impact:",
      ],
      list: [
        {
          t: "Stop the bleeding first",
          d: "One more missed payment resets the clock on everything below. If cash flow is the underlying problem, that is the thing to solve before anything else.",
        },
        {
          t: "Bring balances down",
          d: "Utilisation — how much of your available credit you are using — moves scores faster than almost anything else, and it moves them within a billing cycle or two rather than over years.",
        },
        {
          t: "Keep old accounts open",
          d: "Closing a long-held card shortens your credit history and reduces your available credit at the same time. It usually hurts.",
        },
        {
          t: "Rebuild deliberately",
          d: "A secured card or a small installment loan, paid perfectly, builds the record lenders want to see. Two years of that is worth more than any explanation letter.",
        },
        {
          t: "Check your own report",
          d: "Errors are more common than people expect, and a collection that was paid but never updated is worth disputing. You are entitled to your own file from both bureaus.",
        },
      ],
    },
  ],

  honest: {
    h: "When applying now is the wrong move",
    p: [
      "If the problems are ongoing rather than behind you, an application now mostly generates a decline and a hard inquiry. Several months of clean payments first will change the answer materially, and there is no version of this where applying early speeds that up.",
      "If a few months of paying down balances would move you from a B lender to an A lender, those months are usually worth far more than any rate negotiation. The gap between tiers is wider than the gap between lenders inside a tier.",
      "If you are considering a private mortgage to consolidate consumer debt and nothing about your income or spending is changing, the mortgage will not fix the problem. It converts unsecured debt into debt secured against your home, at a cost, and the debt usually rebuilds — leaving you worse off than when you started.",
      "And if you are partway through a consumer proposal, completing it is almost always the better plan than borrowing to settle it early on expensive terms. There are exceptions, but they need to be argued rather than assumed.",
      "If any of that describes your situation, I will say so on the first call. I would rather tell you to wait six months than place you in something that makes your position worse.",
    ],
  },

  faqs: [
    {
      q: "Can I get a mortgage during a consumer proposal?",
      a: "Sometimes, but the options narrow considerably and cost more while it is active. Lenders generally want to see a proposal completed, with the certificate, rather than a payment plan still running. If you are close to the end, waiting until it is formally completed usually produces a materially better result than applying midway through.",
    },
    {
      q: "Will I lose my house in a consumer proposal?",
      a: "No — that is one of the main differences from bankruptcy. Under a consumer proposal you keep your assets, including your home, as long as you meet the terms you agreed to. It is a formal arrangement to resolve the debt, not a forced sale of what you own.",
    },
    {
      q: "How long after a bankruptcy or proposal before I can get a normal mortgage?",
      a: "In my experience you are typically looking at about two years of clean, re-established credit after the discharge or completion before A lenders will seriously engage — and that two years can run while the item is still showing on your report. B lenders will often look sooner, at a higher cost. What matters more than the calendar is what you have rebuilt: active accounts paid on time, plus the discharge or certificate of full performance in hand.",
    },
    {
      q: "How long does a consumer proposal stay on my credit report?",
      a: "Equifax and TransUnion both remove it three years after you have paid off everything included in the proposal, or six years after you signed it, whichever comes first. That means finishing the proposal early genuinely shortens how long it shows — pay it off in two years and it clears at roughly year five rather than year six.",
    },
    {
      q: "How long does a bankruptcy stay on my credit report in Ontario?",
      a: "Equifax removes it six years after your discharge. TransUnion holds it for seven years in Ontario, which is one of four provinces where it runs a year longer than the usual six. So there is a window where your Equifax file is clear and your TransUnion file is not, and which bureau a lender pulls matters. A second bankruptcy stays for fourteen years.",
    },
    {
      q: "Does checking my options hurt my credit further?",
      a: "An initial conversation and a rough assessment need no credit check at all. When a formal application is made it involves one check, and multiple mortgage enquiries within a short window are treated as a single check by the Canadian bureaus — so shopping properly does not compound the impact.",
    },
    {
      q: "My score is low but I have never missed a payment. Why?",
      a: "Usually utilisation or thin history. Carrying balances close to your limits depresses a score even with a perfect payment record, and a file with very few accounts has little for the model to work with. Both are quicker to fix than genuine payment damage, and both are worth identifying before you apply anywhere.",
    },
  ],

  calculators: ["affordability", "mortgage-payment", "stress-test"],
  related: ["payment-relief", "alternative-lending", "refinance"],

  verified: "August 2026",
  sources: [
    {
      name: "Office of the Superintendent of Bankruptcy — Consumer proposals",
      href: "https://ised-isde.canada.ca/site/office-superintendent-bankruptcy/en/you-owe-money/you-owe-money-consumer-proposals",
    },
    {
      name: "Office of the Superintendent of Bankruptcy — What is a Licensed Insolvency Trustee?",
      href: "https://ised-isde.canada.ca/site/office-superintendent-bankruptcy/en/you-owe-money/what-licensed-insolvency-trustee",
    },
    {
      name: "Financial Consumer Agency of Canada — How long information stays on your credit report",
      href: "https://www.canada.ca/en/financial-consumer-agency/services/credit-reports-score/information-credit-report.html",
    },
    {
      name: "Financial Consumer Agency of Canada — Credit reports and scores",
      href: "https://www.canada.ca/en/financial-consumer-agency/services/credit-reports-score.html",
    },
  ],
};

export default page;
