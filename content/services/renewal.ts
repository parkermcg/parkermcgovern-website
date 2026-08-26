import type { ServicePage } from "@/lib/content/types";

/**
 * Restored as a seventh money page after Phase 3 — see docs/sitemap-plan.md.
 * Highest-intent term in the plan: the renewal letter creates a short,
 * dated decision window and the incumbent lender faces no competition
 * unless the borrower creates some.
 */
const page: ServicePage = {
  slug: "renewal",
  eyebrow: "Mortgage renewal",
  title: "Your lender's renewal letter is an opening offer, not a final one.",
  lede:
    "It arrives looking like paperwork. It is actually a rate negotiation you have been entered into automatically, against a party who is counting on you signing it.",

  summary:
    "The renewal letter is an opening offer. What it means, when to start, and how switching lenders actually works.",

  metaTitle: "Mortgage Renewal in Ontario",
  metaDescription:
    "What your lender's renewal offer really means, when to start shopping, how switching lenders works, and when staying put is genuinely the better call.",

  intro: [
    "Somewhere between four and six months before your term ends, an envelope arrives. Inside is a rate, a signature line, and the strong implication that this is simply what happens next.",
    "Roughly speaking, the more convenient a renewal is made to look, the less competitive the rate inside it tends to be. That is not cynicism — it is just what happens when one party in a negotiation knows the other probably will not shop around.",
  ],

  blocks: [
    {
      h: "Start at 120 days, not at the deadline",
      p: [
        "Most lenders will hold a rate for you for around 120 days before your maturity date. That window is the entire game, because it lets you lock a rate you can fall back on while you find out whether anyone will beat it.",
        "Starting four months out costs you nothing and removes all the pressure. Starting two weeks out means you sign whatever is in front of you, because there is no longer time to move a mortgage to another lender — which typically takes a few weeks to arrange and complete.",
      ],
      aside: {
        h: "Put it in your calendar now",
        p: "If your term ends more than four months from today, set a reminder for the 120-day mark. That single note in a calendar is worth more than any negotiating tactic.",
      },
    },
    {
      h: "Three different things, often confused",
      p: [
        "People use these interchangeably and they are not the same transaction. Which one you are doing determines what it costs and what you have to qualify for.",
      ],
      list: [
        {
          t: "Renew",
          d: "Sign a new term with your existing lender. Simplest, no legal work, no new approval. Also the option with the least competitive pressure behind it.",
        },
        {
          t: "Switch or transfer",
          d: "Move the same mortgage balance to a different lender at maturity. You are not borrowing more — just moving. The new lender usually covers the transfer costs to win your business.",
        },
        {
          t: "Refinance",
          d: "Take out a larger mortgage, either to access equity or to consolidate debt. A different animal entirely, with legal costs and full requalification.",
        },
      ],
    },
    {
      h: "Switching got easier than it used to be",
      p: [
        "There is a rule change here that has not filtered through to most borrowers, and it matters.",
        "For a long time, moving your mortgage to a new lender at renewal meant requalifying at the stress-tested rate — the greater of your contract rate plus two percent, or the regulatory floor. Staying put required no such test. That asymmetry effectively locked people in: the borrower most likely to want a better rate was the one least able to pass a test to go and get it.",
        "OSFI has since exempted uninsured straight switches from that requirement, where the loan amount and amortisation are not increasing. In practice, moving lenders at renewal is now considerably more achievable than the last time you looked at it.",
      ],
      aside: {
        h: "What still applies",
        p: "You still need to qualify with the new lender on their own criteria, and the exemption covers straight switches rather than any increase in borrowing. If you are also taking out equity, that is a refinance and different rules apply.",
      },
    },
    {
      h: "What it costs to move",
      p: [
        "Less than people assume, and frequently nothing at all. On a straight switch at maturity there is no prepayment penalty, because your term has ended and you are not breaking anything.",
        "There may be a discharge or assignment fee from your outgoing lender, and there is legal work to register the new charge — but competing lenders very commonly cover those costs themselves as part of winning the transfer. Ask directly whether the transfer is covered; on a straight switch the answer is often yes.",
        "The exception is if you break the mortgage before maturity, which is a penalty situation rather than a renewal. That is covered on the refinance page.",
      ],
    },
    {
      h: "What happens if you do nothing at all",
      p: [
        "Your mortgage does not disappear and your house is not at risk. What generally happens is that the lender renews you automatically — often into a short term or a rate closer to their posted rate than to anything they would have offered had you pushed back.",
        "Posted rates and the rates a lender will actually agree to are meaningfully different numbers. Doing nothing tends to land you nearer the first one.",
      ],
    },
    {
      h: "The rate is not the only term worth reading",
      p: [
        "A slightly better rate attached to a restrictive contract can cost far more than the rate saves, and this is where most of the value of reading a renewal properly actually sits.",
      ],
      list: [
        {
          t: "How the penalty is calculated",
          d: "If you might move or refinance mid-term, the lender's method for calculating an interest rate differential matters enormously. Methods vary widely and are not standardised.",
        },
        {
          t: "Prepayment privileges",
          d: "How much you can pay down each year without penalty, and whether you can increase your payment. This is the main lever for paying a mortgage off faster.",
        },
        {
          t: "Portability",
          d: "Whether the mortgage can move with you if you sell and buy, and on what conditions. Worth checking if a move is plausible within the term.",
        },
        {
          t: "Term length",
          d: "Shorter terms give you another shot at the market sooner. Longer terms buy certainty. Which is right depends on your circumstances rather than on a forecast.",
        },
      ],
    },
    {
      h: "How I handle a renewal",
      p: [
        "It is a short piece of work with a clear output. I take your current balance, remaining amortisation and maturity date, then get competing offers from the lenders whose products actually suit your situation.",
        "You get those side by side against the offer already on your table, with the total cost over the term in dollars rather than a rate comparison — because a rate alone does not tell you what something costs. Then you decide, including deciding to stay.",
      ],
    },
  ],

  honest: {
    h: "When signing your lender's offer is the right answer",
    p: [
      "Sometimes the incumbent's offer is genuinely competitive, particularly if you push back once and ask them to improve it. Lenders do have room, and they do not always use it in the first letter. Asking costs nothing.",
      "If your mortgage balance is small or your remaining amortisation is short, the dollar difference between a good rate and a slightly better one may not justify the paperwork of moving. Below a certain balance, a modest rate improvement is worth less than an afternoon of your time.",
      "If your income or credit has changed for the worse since you last qualified, staying put can be the safer route — a straight switch still requires approval from the new lender, and being declined mid-process wastes the window you were using to negotiate.",
      "And if you are likely to sell within the next year or two, a shorter term or a portable product matters far more than the headline rate. Optimising for rate and then paying a penalty to exit is a bad trade.",
      "I will tell you which of these applies to you, including when the answer is simply to sign the letter you already have.",
    ],
  },

  faqs: [
    {
      q: "When should I start looking at my renewal?",
      a: "About 120 days before your maturity date. Most lenders will hold a rate for roughly that long, so starting then gives you a guaranteed fallback while you shop, and leaves enough time to move lenders if that turns out to be worthwhile. Leaving it to the final fortnight removes the option to switch at all.",
    },
    {
      q: "Do I have to pass the stress test to switch lenders at renewal?",
      a: "For a straight switch — same balance, no increase in amortisation — OSFI has exempted uninsured mortgages from the prescribed minimum qualifying rate. You still need to satisfy the new lender's own criteria, but the specific barrier that used to keep people locked in has been removed.",
    },
    {
      q: "What does it cost to move my mortgage to another lender?",
      a: "Often nothing. There is no prepayment penalty at maturity, and competing lenders frequently cover the discharge and legal costs of a straight transfer to win your business. Ask whether the transfer is covered before assuming there is a cost.",
    },
    {
      q: "Can I negotiate with my current lender instead of moving?",
      a: "Yes, and you should try. The first offer is rarely the best one available. Having a genuine competing offer in hand is what makes that conversation work — without one, there is little reason for them to improve.",
    },
    {
      q: "What happens if I just do nothing?",
      a: "Most lenders will renew you automatically, commonly into a rate closer to their posted rate than to what they would have agreed if pushed. Nothing dramatic happens, but it is usually the most expensive outcome available.",
    },
  ],

  calculators: ["mortgage-payment", "stress-test", "affordability"],
  related: ["refinance", "no-payment", "alternative-lending"],

  verified: "July 2026",
  sources: [
    {
      name: "OSFI — Minimum qualifying rate for uninsured mortgages",
      href: "https://www.osfi-bsif.gc.ca/en/supervision/financial-institutions/banks/minimum-qualifying-rate-uninsured-mortgages",
    },
    {
      name: "OSFI — Exemption for uninsured mortgage straight switches",
      href: "https://www.osfi-bsif.gc.ca/en/guidance/guidance-library/osfi-exempts-uninsured-mortgage-straight-switches-prescribed-mqr-implements-portfolio-lti-limits",
    },
    {
      name: "Financial Consumer Agency of Canada — Renewing your mortgage",
      href: "https://www.canada.ca/en/financial-consumer-agency/services/mortgages/renew-mortgage.html",
    },
  ],
};

export default page;
