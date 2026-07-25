import type { ServicePage } from "@/lib/content/types";

/**
 * Distinct from alternative-lending: this page is about the income
 * documentation problem and how to solve it. Where a file lands (A, B or
 * private) is the alternative-lending page's subject. Kept separate so the
 * two don't swap body copy — the cannibalisation test.
 */
const page: ServicePage = {
  slug: "self-employed",
  eyebrow: "Self-employed",
  title: "Your accountant did their job. Now it's working against you.",
  lede:
    "Every legitimate write-off that lowers your tax bill also lowers the income a lender is willing to count. The business is fine — the tax return just doesn't show it. That is a solvable problem.",

  summary:
    "Write-offs that cut your tax bill also cut your provable income. There are lenders who work with that.",

  metaTitle: "Self-Employed Mortgages in Ontario",
  metaDescription:
    "How lenders assess self-employed income in Canada, which documents actually work, and what to do when your tax return understates what you really earn.",

  intro: [
    "There is a specific frustration that belongs to business owners applying for a mortgage. You know exactly what your business earns. Your bank statements show it. And the lender looks at line 15000 of your tax return and offers you a fraction of what you expected.",
    "This is not a judgement on your business. It is a mechanical consequence of how lenders verify income — and there are several established routes around it, depending on how your business is structured and how long it has been running.",
  ],

  blocks: [
    {
      h: "Why the number is lower than you expect",
      p: [
        "Salaried applicants have a simple story: a pay stub and an employment letter, showing money that has already been taxed. What you see is what the lender counts.",
        "Self-employment inverts that. You deduct vehicle costs, home office, equipment, professional fees, phone — all legitimate, all reducing taxable income. The lender's starting point is your net income after those deductions, which is deliberately the smallest number your business produces.",
        "So a contractor invoicing well into six figures can show taxable income that qualifies them for surprisingly little. Nothing has gone wrong. The measurement is just pointed at the wrong thing.",
      ],
    },
    {
      h: "What lenders actually want to see",
      p: [
        "The documentation requirement is heavier than for salaried applicants, and gathering it early is the single biggest thing you can do to make this go smoothly.",
      ],
      list: [
        {
          t: "Two years of T1 Generals",
          d: "Complete personal tax returns, every page, including all schedules. Not just the summary.",
        },
        {
          t: "Two years of Notices of Assessment",
          d: "The CRA's confirmation of what you filed. Lenders treat these as the authoritative record, and any balance owing on them will need explaining.",
        },
        {
          t: "Business financial statements",
          d: "If incorporated, two years prepared by an accountant. Sole proprietors typically provide the T2125 statement of business activities within the personal return.",
        },
        {
          t: "Business registration or articles of incorporation",
          d: "Proof the business exists and how long it has been operating. Most lenders want at least two years of history.",
        },
        {
          t: "Recent business bank statements",
          d: "Usually six to twelve months. These matter more on alternative-documentation programs, where deposit history helps evidence real revenue.",
        },
      ],
      aside: {
        h: "Talk to your accountant a year ahead",
        p: "If you know you want to buy in two years, that conversation should happen now. Deliberately declaring more income for a year or two costs you tax but can move you from an alternative lender to a bank — and the rate difference across a full mortgage term usually dwarfs the extra tax paid.",
      },
    },
    {
      h: "Add-backs: getting some of the income counted again",
      p: [
        "Lenders will often add certain deductions back to your income, on the reasoning that they are accounting entries rather than money that genuinely left your household.",
        "Depreciation and capital cost allowance are the most commonly added back. Business-use-of-home expenses and some one-off costs may qualify too. If your company retains earnings rather than paying them out, some lenders will consider a share of retained earnings as available income — this one is highly lender-specific and is exactly the sort of detail worth shopping across a panel.",
        "Add-backs vary meaningfully between lenders. The same file can produce noticeably different qualifying income at two institutions, which is the whole argument for not simply asking your own bank.",
      ],
    },
    {
      h: "Alternative-documentation programs",
      p: [
        "When even generous add-backs will not produce enough qualifying income, there are programs built specifically for business owners — sometimes called stated income or business-for-self lending.",
        "Rather than relying on your tax return alone, these use bank statements, invoices and contracts to evidence what the business actually earns. In exchange you should expect a larger down payment requirement, a rate above standard A pricing, and usually a lender fee.",
        "These programs are ordinary and widely used. They are not a black mark. But they cost more, so they should be a considered choice rather than the first place your application goes.",
      ],
    },
    {
      h: "Incorporated, sole proprietor, or paid in dividends",
      p: [
        "How you have structured your business changes how lenders read it.",
      ],
      list: [
        {
          t: "Sole proprietor",
          d: "Business income flows through your personal return. Simplest to assess — and the most exposed to the write-off problem.",
        },
        {
          t: "Incorporated, taking salary",
          d: "The cleanest case. A T4 from your own corporation is treated much like any other employment income, provided the corporation's financials support it.",
        },
        {
          t: "Incorporated, taking dividends",
          d: "Tax-efficient, and awkward for mortgages. Some lenders gross dividend income up, some do not, and the treatment varies enough that lender selection matters a great deal here.",
        },
        {
          t: "Commission or contract",
          d: "Usually assessed on a two-year average rather than your best year. A strong recent year does not carry a weak prior one on its own.",
        },
      ],
    },
    {
      h: "How I work these files",
      p: [
        "Self-employed applications are placed, not submitted. The same documents produce different answers at different lenders because add-back policies and income treatment differ, so the work is in matching your specific structure to the lender whose rules suit it.",
        "In practice that means reviewing your returns and statements first, calculating what several lenders would each count as your income, and only then deciding where the application goes. Scattering one application across many lenders generates declines and credit enquiries without improving the outcome.",
      ],
    },
  ],

  honest: {
    h: "When to wait rather than push",
    p: [
      "If your business has been running under two years, most lenders will simply not have enough history to assess it, and pushing now usually means an expensive alternative product. Waiting until a second year of returns is filed frequently changes the whole tier of lending available.",
      "If you are about to file a return that will show materially stronger income, waiting for that Notice of Assessment can be worth far more than any rate you could negotiate today.",
      "And if the only way the numbers work is a stated-income product at the top of your affordability, be careful. Business income varies. A payment that is comfortable in a strong year is a genuine problem in a slow one, and lenders do not adjust for seasonality.",
    ],
  },

  faqs: [
    {
      q: "How long do I need to be self-employed to get a mortgage?",
      a: "Most lenders want at least two years of business history, evidenced by tax returns and business registration. There are programs for shorter histories, particularly where you previously worked salaried in the same field, but they are more restrictive and cost more.",
    },
    {
      q: "Can I get a mortgage if my tax return shows very little income?",
      a: "Often yes. Add-backs may restore some of it, and alternative-documentation programs assess your business through bank statements and invoices rather than the tax return alone. Expect a larger down payment and a higher rate than a fully documented application.",
    },
    {
      q: "Should I stop writing off expenses before applying?",
      a: "It is a real trade-off worth calculating rather than guessing. Declaring more income raises your tax bill but can move you to a materially better lending tier. The maths usually favours declaring more if you are planning to buy within two years — but do it with your accountant, well in advance.",
    },
    {
      q: "Do I need a bigger down payment if I am self-employed?",
      a: "Not if you qualify on fully documented income — the usual minimums apply. Alternative-documentation programs typically do require more, often twenty percent or higher depending on the lender and the property.",
    },
    {
      q: "My bank declined me. Does that mean I cannot get a mortgage?",
      a: "No. A bank declining a self-employed applicant is common and usually reflects that institution's income rules rather than your creditworthiness. Different lenders calculate self-employed income differently, and that variation is precisely what a broker is for.",
    },
  ],

  calculators: ["affordability", "mortgage-payment", "stress-test"],
  related: ["alternative-lending", "refinance", "investment-property"],

  verified: "July 2026",
  sources: [
    {
      name: "Canada Revenue Agency — Business income and expenses",
      href: "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/sole-proprietorships-partnerships/business-income-tax-reporting.html",
    },
    {
      name: "Financial Consumer Agency of Canada — Getting a mortgage",
      href: "https://www.canada.ca/en/financial-consumer-agency/services/mortgages/mortgage-preapproval-qualify.html",
    },
  ],
};

export default page;
