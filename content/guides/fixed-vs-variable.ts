import type { Guide } from "@/lib/content/guides";

const guide: Guide = {
  slug: "fixed-vs-variable",
  cluster: "deciding",
  title: "Fixed or variable: the question nobody can answer for you",
  lede:
    "Anyone who tells you confidently which one wins is guessing about future interest rates. What can be answered is which risk you are better placed to carry.",
  metaTitle: "Fixed vs Variable Mortgage Rates in Canada",
  metaDescription:
    "How fixed and variable mortgages actually differ — including penalty calculations and payment structures — and how to decide which suits your situation.",

  published: "2026-07-25",
  updated: "2026-07-25",

  intro: [
    "This is the most common question I get, and the honest answer disappoints people: choosing correctly depends on what rates do next, and nobody knows what rates do next.",
    "What you can decide rationally is how much payment uncertainty you can absorb, how likely you are to break the mortgage early, and which of those risks costs you more if it goes against you.",
  ],

  takeaways: [
    "Fixed gives you a known payment for the whole term. Variable moves with your lender's prime rate.",
    "The penalty for breaking a fixed mortgage can be many times the penalty on a variable one.",
    "Variable mortgages come in two forms — adjustable payment, and fixed payment with a changing principal split.",
    "If a rate rise of a couple of points would genuinely strain your budget, that is an argument for fixed regardless of forecasts.",
    "If there is a real chance you will move or refinance mid-term, the penalty difference often matters more than the rate difference.",
  ],

  sections: [
    {
      h: "What each one actually is",
      p: [
        "A fixed-rate mortgage locks your interest rate for the length of your term. Your payment does not change, and the split between principal and interest follows a schedule set at the start. You are buying certainty, and the lender prices that certainty in.",
        "A variable-rate mortgage is priced relative to your lender's prime rate — typically as prime minus a discount. When prime moves, your rate moves with it. You are accepting uncertainty in exchange for what is usually a lower starting rate.",
      ],
    },
    {
      h: "The variable distinction most people miss",
      p: [
        "Not all variable mortgages behave the same way when rates change, and the difference matters a great deal.",
      ],
      list: [
        {
          t: "Adjustable payment",
          d: "Your payment changes as prime changes. Rates rise, your payment rises. It is transparent, and your amortisation stays roughly on track.",
        },
        {
          t: "Fixed payment variable",
          d: "Your payment stays the same, but the split shifts — more of it goes to interest and less to principal. Comfortable when rates rise, but your amortisation quietly extends.",
        },
      ],
      aside: {
        h: "The trigger rate",
        p: "On a fixed-payment variable mortgage, rates can rise far enough that your payment no longer covers the interest at all. That point is called the trigger rate, and reaching it means your lender will require you to increase your payment or make a lump-sum contribution. Ask what your trigger rate is before choosing this structure.",
      },
    },
    {
      h: "The penalty difference is larger than the rate difference",
      p: [
        "This is the part of the decision that gets least attention and most often costs the most money.",
        "Breaking a variable mortgage almost always costs three months' interest — predictable, and usually manageable. Breaking a fixed mortgage costs the greater of three months' interest or the interest rate differential, which can run into five figures depending on your lender's calculation method and when you signed.",
        "Roughly speaking, a meaningful share of borrowers do not see their term out. Life happens — jobs move, relationships change, families grow. If there is a realistic chance you break this mortgage early, the penalty structure deserves as much weight as the headline rate.",
      ],
    },
    {
      h: "Questions that actually help you decide",
      p: [
        "Rather than forecasting rates, work through these. They are answerable.",
      ],
      list: [
        {
          t: "Could you absorb a payment increase of a few hundred dollars?",
          d: "Not comfortably in theory — actually, next month, without cutting something that matters. If not, that is a strong argument for fixed regardless of what anyone predicts.",
        },
        {
          t: "How likely are you to move within the term?",
          d: "A likely move points toward variable, or toward a fixed mortgage with a fair penalty calculation and good portability.",
        },
        {
          t: "Does uncertainty bother you?",
          d: "This is not irrational. If a variable rate means you check the news anxiously every rate announcement, the certainty of fixed has real value even at a slightly higher cost.",
        },
        {
          t: "How large is the gap today?",
          d: "Sometimes fixed and variable are close enough that certainty is nearly free. Sometimes the gap is wide. That gap is a fact you can observe rather than a prediction.",
        },
      ],
    },
    {
      h: "You are not locked into your first choice",
      p: [
        "Most variable mortgages can be converted to a fixed rate mid-term without penalty, at whatever fixed rates are available at the time. That is a genuine safety valve, and it makes variable less absolute a commitment than people assume.",
        "The reverse is not true. You cannot convert a fixed mortgage to variable without breaking it and paying the penalty. The flexibility runs one way only, which is worth factoring in.",
      ],
    },
    {
      h: "Term length is a separate decision",
      p: [
        "Fixed-versus-variable and how long your term runs are two different choices, and conflating them is common.",
        "A shorter term gets you back to the market sooner, which helps if you expect rates to fall and hurts if you expect the opposite. A longer term buys more certainty and locks you in for longer, with a larger potential penalty if you leave.",
        "Someone who wants payment certainty but suspects rates will fall might reasonably take a shorter fixed term rather than choosing variable — a middle option that often gets overlooked.",
      ],
    },
  ],

  faqs: [
    {
      q: "Is variable cheaper over the long run?",
      a: "Historically variable has often — not always — cost less over full terms. That is a statement about the past, not a forecast, and it offers no comfort to someone who takes variable immediately before a sharp rate rise. Treat it as context rather than guidance.",
    },
    {
      q: "Can I switch from variable to fixed later?",
      a: "Usually yes, without penalty, at the fixed rates available when you convert. Confirm the conversion terms before signing, because they vary between lenders and the rate you convert at is not guaranteed in advance.",
    },
    {
      q: "What happens to a variable mortgage if rates fall?",
      a: "On an adjustable-payment mortgage your payment falls. On a fixed-payment variable mortgage the payment stays the same but more of it goes to principal, so you pay the mortgage off faster.",
    },
  ],

  sources: [
    {
      name: "Financial Consumer Agency of Canada — Choosing a mortgage",
      href: "https://www.canada.ca/en/financial-consumer-agency/services/mortgages/choose-mortgage.html",
    },
    {
      name: "Bank of Canada — Policy interest rate",
      href: "https://www.bankofcanada.ca/core-functions/monetary-policy/key-interest-rate/",
    },
  ],

  relatedGuides: ["mortgage-penalties-ird", "stress-test-explained"],
  relatedServices: ["renewal", "first-time-buyer", "no-payment"],
  relatedCalculators: ["mortgage-payment", "stress-test"],
};

export default guide;
