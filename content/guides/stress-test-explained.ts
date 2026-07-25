import type { Guide } from "@/lib/content/guides";

const guide: Guide = {
  slug: "stress-test-explained",
  cluster: "deciding",
  title: "The mortgage stress test, and why you're approved for less than you expected",
  lede:
    "Lenders do not qualify you at the rate you will pay. They qualify you at a higher one, and that single rule is the main reason approvals come in below what people budget for.",
  metaTitle: "The Mortgage Stress Test in Canada, Explained",
  metaDescription:
    "How the minimum qualifying rate works, why you are tested at a rate you will not pay, and the renewal exemption most borrowers do not know about.",

  published: "2026-07-25",
  updated: "2026-07-25",

  intro: [
    "You find a rate you can afford, you work out the payment, it fits comfortably — and then the approval comes back materially lower than you expected.",
    "The stress test is almost always why. It is a deliberate buffer, applied to everyone, and understanding it turns an unpleasant surprise into something you can plan around.",
  ],

  takeaways: [
    "You must qualify at the greater of your contract rate plus 2%, or 5.25%.",
    "You do not pay that rate — it is only used to test whether you could.",
    "It typically reduces your maximum borrowing by roughly a fifth compared with qualifying at your actual rate.",
    "Uninsured straight switches at renewal are now exempt, which makes changing lenders far easier than it used to be.",
    "Reducing other debt payments is usually the fastest way to pass it for a larger amount.",
  ],

  sections: [
    {
      h: "The rule itself",
      p: [
        "The minimum qualifying rate is the greater of two numbers: your contract rate plus two percentage points, or a floor of 5.25 percent.",
        "If you are offered 3.0 percent, your rate plus two is 5.0 — below the floor, so you are tested at 5.25. If you are offered 5.5 percent, your rate plus two is 7.5, which is above the floor, so 7.5 applies.",
        "Your actual payment is always calculated at your real rate. The higher figure exists only to answer one question: if rates rose before your renewal, could this borrower still make the payments?",
      ],
    },
    {
      h: "Why it exists",
      p: [
        "Canadian mortgage terms are short relative to amortisations. You might borrow over twenty-five years but commit to a rate for five, which means almost every borrower faces an unknown rate at some point.",
        "The stress test is regulators requiring lenders to check that borrowers could absorb a reasonable rate increase at renewal, rather than assuming today's rate holds forever. Whatever you think of the calibration, the logic is not unreasonable.",
      ],
    },
    {
      h: "What it does to your borrowing capacity",
      p: [
        "The effect is significant. Being tested two percentage points above your actual rate typically reduces the maximum mortgage you qualify for by somewhere in the region of a fifth, compared with qualifying at your contract rate.",
        "That is the gap between the payment you know you could make and the payment a lender needs you to demonstrate. It is not a judgement on your budgeting — it applies identically to everyone.",
      ],
      aside: {
        h: "See it for yourself",
        p: "The stress test calculator on this site shows both payments side by side: what you would actually pay, and what you must qualify for. The difference is usually larger than people expect.",
      },
    },
    {
      h: "The renewal exemption worth knowing about",
      p: [
        "For years there was an asymmetry that quietly trapped borrowers. Renewing with your existing lender required no stress test. Moving to a different lender did — even for the same balance on the same property.",
        "The consequence was perverse: the borrower most motivated to find a better rate was the one least able to qualify to go and get it, which meant lenders faced little competitive pressure at renewal.",
        "OSFI has since exempted uninsured straight switches from the prescribed minimum qualifying rate, where the loan amount and amortisation are not increasing. You still need to satisfy the new lender's own criteria, but the specific barrier that locked people in has been removed. If you last looked at switching a few years ago and concluded you could not, that conclusion may no longer hold.",
      ],
    },
    {
      h: "How to pass it for a larger amount",
      p: [
        "There are four practical levers, and they work in roughly this order of effectiveness.",
      ],
      list: [
        {
          t: "Clear other debt payments",
          d: "Usually the most powerful. Debt consumes ratio room rather than money pound for pound, so clearing a car loan can free up far more borrowing capacity than the payment itself suggests.",
        },
        {
          t: "Increase the down payment",
          d: "Reduces the mortgage you need to qualify for. Every extra dollar counts directly.",
        },
        {
          t: "Lengthen the amortisation",
          d: "Lowers the qualifying payment, which raises the amount you can borrow. It also increases total interest paid, so it is a genuine trade-off rather than a free win.",
        },
        {
          t: "Add a qualified co-applicant",
          d: "Adds income to the calculation. It also adds their debts, and it is a significant commitment for both parties — worth thinking through properly.",
        },
      ],
    },
    {
      h: "Where the rule does not apply the same way",
      p: [
        "The stress test applies to federally regulated lenders, which covers the banks and most large lenders you have heard of.",
        "Some credit unions are provincially regulated and set their own qualifying policies, which can differ. Alternative and private lenders operate under different rules again. That does not make them a way around prudent lending — those options generally cost more, and the affordability question does not disappear simply because a different test applies.",
      ],
    },
  ],

  faqs: [
    {
      q: "Do I actually pay the stress-tested rate?",
      a: "No. You pay your contract rate. The higher rate is used only to test whether you could absorb an increase before your term ends.",
    },
    {
      q: "Does the stress test apply when I renew with my current lender?",
      a: "No. Renewing with your existing lender has never required requalifying under it. Since the straight-switch exemption, moving to a new lender for the same balance is also exempt.",
    },
    {
      q: "Can I avoid the stress test entirely?",
      a: "Some provincially regulated credit unions and alternative lenders apply their own criteria. That is not really a loophole — those routes usually cost more, and borrowing an amount you would struggle to afford at a higher rate is the risk the test exists to flag.",
    },
  ],

  sources: [
    {
      name: "OSFI — Minimum qualifying rate for uninsured mortgages",
      href: "https://www.osfi-bsif.gc.ca/en/supervision/financial-institutions/banks/minimum-qualifying-rate-uninsured-mortgages",
    },
    {
      name: "OSFI — Exemption for uninsured mortgage straight switches",
      href: "https://www.osfi-bsif.gc.ca/en/guidance/guidance-library/osfi-exempts-uninsured-mortgage-straight-switches-prescribed-mqr-implements-portfolio-lti-limits",
    },
  ],

  relatedGuides: ["fixed-vs-variable", "how-much-down-payment"],
  relatedServices: ["renewal", "first-time-buyer", "self-employed"],
  relatedCalculators: ["stress-test", "affordability"],
};

export default guide;
