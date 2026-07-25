import type { ServicePage } from "@/lib/content/types";

/**
 * Touches the federal prohibition on residential purchases by non-Canadians,
 * which is time-limited and full of exemptions. Stated carefully and pointed
 * at the primary source rather than summarised as settled — eligibility here
 * is genuinely case-by-case and getting it wrong is costly for the reader.
 */
const page: ServicePage = {
  slug: "new-to-canada",
  eyebrow: "New to Canada",
  title: "No Canadian credit history is a starting point, not a verdict.",
  lede:
    "Newcomer mortgage programs exist precisely because arriving with no domestic credit file is normal. What matters is evidencing stability a different way.",

  summary:
    "Newcomer programs for people without Canadian credit history, and what stands in for it.",

  metaTitle: "New to Canada Mortgage Programs in Ontario",
  metaDescription:
    "How newcomers to Canada qualify for a mortgage without Canadian credit history — programs, documents, down payment expectations and eligibility rules.",

  intro: [
    "The credit bureau in Canada knows nothing about you until you have been here long enough to build a file. You could have owned property abroad, paid every obligation for twenty years, and still appear on paper as though you have never borrowed money.",
    "Lenders know this. Newcomer programs are built specifically for it, and they substitute other evidence for the credit history you have not had time to accumulate.",
  ],

  blocks: [
    {
      h: "First: confirm you are permitted to buy",
      p: [
        "There is a federal prohibition restricting the purchase of residential property by non-Canadians. It carries significant exceptions — Canadian citizens and permanent residents are not caught by it, and certain temporary residents such as qualifying work permit holders and international students may also be exempt depending on their circumstances.",
        "It has been extended more than once and the eligibility conditions are detailed. Because the consequences of getting this wrong are serious, confirm your position against the government's own guidance or with your lawyer before committing to anything, rather than relying on a summary anywhere — including this one.",
      ],
      aside: {
        h: "Check this before you shop",
        p: "Establish your eligibility first, then look at financing. It is the one question in this whole process where an assumption is genuinely expensive, and it is quick to resolve properly.",
      },
    },
    {
      h: "What newcomer programs replace credit history with",
      p: [
        "Where you have no Canadian credit file, lenders will look for equivalent evidence from elsewhere. Common substitutes include:",
      ],
      list: [
        {
          t: "An international credit report",
          d: "From your country of origin, where such reports exist and can be obtained. Some lenders accept these directly.",
        },
        {
          t: "Twelve months of rent payment history",
          d: "Evidenced by cancelled cheques, bank records or a letter from your landlord. One of the strongest substitutes available.",
        },
        {
          t: "Utility and telecom payment records",
          d: "Twelve months of consistent payments on accounts in your name.",
        },
        {
          t: "Bank reference letters",
          d: "From a financial institution in your home country, confirming the accounts you held and how they were conducted.",
        },
        {
          t: "Proof of employment here",
          d: "A Canadian employment letter and pay stubs. Stable local income does a great deal of work in these applications.",
        },
      ],
    },
    {
      h: "Permanent resident or work permit",
      p: [
        "Your immigration status is the largest single factor in what is available to you, more so than income.",
        "Permanent residents are treated close to citizens by most lenders, and where a newcomer program applies, insured financing with a modest down payment can be available. Programs generally apply within a defined window after arrival — often around five years — after which you are simply assessed on the Canadian credit file you have built by then.",
        "Work permit holders have narrower options. Fewer lenders participate, larger down payments are usually required, and lenders will look closely at how much time remains on the permit relative to the mortgage term. It is very achievable; it just requires matching you to the right lender rather than walking into a branch.",
      ],
    },
    {
      h: "Down payment and where it came from",
      p: [
        "Expect scrutiny of the source of your down payment, and expect it to be more detailed than you think reasonable. This is anti-money-laundering compliance rather than suspicion of you personally, and every applicant faces a version of it.",
        "Lenders generally want to see the funds held in a Canadian account for a period before closing — commonly around ninety days — with a documented trail showing where they came from. Money transferred from abroad shortly before closing, without records of its origin, is one of the most common causes of delay on newcomer files.",
        "If funds are being gifted by family overseas, a signed gift letter plus evidence of the transfer will be needed. Start assembling this early; retrieving records from foreign institutions takes longer than anyone expects.",
      ],
      aside: {
        h: "Start the paper trail before you need it",
        p: "Move your down payment into a Canadian account well ahead of shopping, and keep every statement showing where it came from. This single step prevents most newcomer closing delays.",
      },
    },
    {
      h: "Building a Canadian credit file",
      p: [
        "Whether or not you use a newcomer program now, building domestic credit improves everything that follows — including your renewal in a few years.",
        "A secured credit card, where you deposit funds against your limit, is the standard starting point and is available to almost anyone. Use it modestly, keep the balance well below the limit, and pay in full every month. Credit utilisation matters more than most people realise, and carrying a balance does not help your score.",
        "Twelve months of that history changes your options materially. Two years of it usually removes the need for a newcomer program at all.",
      ],
    },
  ],

  honest: {
    h: "When to wait a little longer",
    p: [
      "If you have been in Canada only a few months and your employment is still probationary, waiting until you are past probation with a few more pay stubs will widen your options considerably. Lenders weigh employment stability heavily on these files.",
      "If a work permit expires within the next year or two, some lenders will hesitate regardless of your income. Renewing the permit first, where that is possible, often produces a better outcome than pushing an application through now at a higher cost.",
      "And if the only route available today requires a large down payment that would leave you with no reserves, that is worth pausing on. Newcomer households face more unexpected costs in the first two years than most, and buying with nothing held back is a fragile position.",
    ],
  },

  faqs: [
    {
      q: "Can I get a mortgage in Canada without any Canadian credit history?",
      a: "Yes. Newcomer programs are designed for exactly this and substitute other evidence — international credit reports, rent and utility payment history, bank reference letters and Canadian employment records — for a domestic credit file.",
    },
    {
      q: "Do I need to be a permanent resident?",
      a: "No, though it broadens your options considerably. Permanent residents are treated close to citizens by most lenders. Work permit holders can obtain financing, but from fewer lenders and generally with a larger down payment, with attention paid to how long the permit runs.",
    },
    {
      q: "How much down payment do newcomers need?",
      a: "Permanent residents using a newcomer program may access the standard minimums, which start at five percent on the first portion of the purchase price. Work permit holders should generally expect to need more. It depends on the specific program and lender.",
    },
    {
      q: "Can my down payment come from outside Canada?",
      a: "Yes, but the source must be documented thoroughly, and lenders typically want the funds held in a Canadian account for around ninety days before closing. Undocumented transfers arriving shortly before closing are a frequent cause of delay.",
    },
    {
      q: "How long before I no longer need a newcomer program?",
      a: "Usually about two years of consistent Canadian credit history. At that point you generally qualify on your own file and newcomer programs stop being relevant, which is why building credit deliberately from arrival is worth the small effort.",
    },
  ],

  calculators: ["affordability", "ontario-land-transfer-tax", "cmhc-insurance"],
  related: ["first-time-buyer", "self-employed", "alternative-lending"],

  verified: "July 2026",
  sources: [
    {
      name: "Government of Canada — Prohibition on the Purchase of Residential Property by Non-Canadians",
      href: "https://www.cmhc-schl.gc.ca/professionals/industry-innovation-and-leadership/industry-expertise/residential-property-purchase-prohibition",
    },
    {
      name: "Financial Consumer Agency of Canada — Understanding your credit report and score",
      href: "https://www.canada.ca/en/financial-consumer-agency/services/credit-reports-score.html",
    },
  ],
};

export default page;
