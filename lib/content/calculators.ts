/**
 * Copy for the calculator pages. The explanation is server-rendered so the
 * page ranks on its content rather than on a widget a crawler cannot see —
 * the whole reason the prototype's embedded calculators were worth nothing.
 */

export type CalculatorPage = {
  slug: string;
  eyebrow: string;
  title: string;
  lede: string;
  metaTitle: string;
  metaDescription: string;
  /** Above the tool. Explains what the calculator does and why. */
  intro: string[];
  /** Below the tool. How the maths works, and what it does not cover. */
  method: { h: string; p: string[] }[];
  faqs: { q: string; a: string }[];
  /** Service page slugs to link back to. */
  related: string[];
};

export const calculatorPages: CalculatorPage[] = [
  {
    slug: "mortgage-payment",
    eyebrow: "Mortgage payment calculator",
    title: "What a mortgage actually costs each month — and in total.",
    lede:
      "Set the price, the down payment and the rate. This uses Canadian semi-annual compounding, and it models accelerated payment schedules properly rather than pretending they change nothing.",
    metaTitle: "Mortgage Payment Calculator (Canada)",
    metaDescription:
      "Calculate your Canadian mortgage payment with correct semi-annual compounding, CMHC insurance and accelerated schedules that shorten amortisation.",
    intro: [
      "Most mortgage calculators online are built for American mortgages, which compound monthly. Canadian mortgages compound semi-annually by law, which makes the true periodic rate slightly lower. The difference is small on any one payment and meaningful across twenty-five years.",
      "This one also does something most calculators get wrong: if you choose an accelerated payment schedule, it solves for how much sooner you finish rather than assuming the amortisation is unchanged.",
    ],
    method: [
      {
        h: "How the payment is worked out",
        p: [
          "Your nominal annual rate is converted into an effective annual rate using semi-annual compounding, then into the rate for a single payment period. That periodic rate feeds a standard annuity formula to produce a level payment that clears the balance over your amortisation.",
          "If your down payment is under twenty percent, default insurance is calculated on the loan and added to the amount borrowed, because that is how it works in practice — the premium is financed, not paid at closing. You therefore pay interest on it.",
        ],
      },
      {
        h: "Why accelerated payments finish early",
        p: [
          "An accelerated bi-weekly payment is simply your monthly payment divided by two, paid every two weeks. Because there are twenty-six two-week periods in a year rather than twenty-four, you make the equivalent of thirteen monthly payments instead of twelve.",
          "That extra payment goes entirely against principal, so the mortgage clears sooner. Rather than assuming a fixed term, this calculator solves for the number of periods your payment actually needs — which is why the time saved and interest saved appear as real figures.",
        ],
      },
      {
        h: "What it does not include",
        p: [
          "Property tax, home insurance, condo fees and utilities are not in this figure. Your actual monthly housing cost will be higher. Lenders include those in the ratios they use to qualify you, which is what the affordability calculator covers.",
          "It also assumes the rate holds for the whole amortisation. In reality your term is shorter than your amortisation and you will renew at an unknown rate — which is worth stress-testing rather than assuming.",
        ],
      },
    ],
    faqs: [
      {
        q: "Why is this different from my bank's calculator?",
        a: "Most likely the compounding, the insurance premium, or the accelerated schedule. Canadian mortgages compound semi-annually; some calculators use monthly compounding, which slightly overstates the payment. Others ignore that default insurance is added to the loan, and many treat accelerated payments as though they change nothing.",
      },
      {
        q: "Should I choose accelerated payments?",
        a: "If the higher annual total fits your budget comfortably, it is one of the most effective ways to reduce lifetime interest, and you can see the effect above. The trade-off is cash flow — you are paying the equivalent of an extra monthly payment each year.",
      },
      {
        q: "Is the insurance premium really added to my mortgage?",
        a: "Yes, in almost all cases. It is financed rather than paid upfront, which means it increases the amount you borrow and you pay interest on it across the full amortisation.",
      },
    ],
    related: ["first-time-buyer", "renewal", "refinance"],
  },

  {
    slug: "ontario-land-transfer-tax",
    eyebrow: "Land transfer tax calculator",
    title: "Ontario land transfer tax, and the extra one Toronto charges.",
    lede:
      "Usually the largest single cost on closing day after your down payment — and roughly double inside the City of Toronto, because a municipal tax applies on top of the provincial one.",
    metaTitle: "Ontario Land Transfer Tax Calculator",
    metaDescription:
      "Calculate Ontario land transfer tax and Toronto's municipal land transfer tax, including both first-time buyer rebates. Verified against current rates.",
    intro: [
      "Land transfer tax is paid to the government when property changes hands, calculated on the purchase price in brackets rather than as one flat percentage. It is due on closing and cannot be added to your mortgage — it has to come from cash.",
      "If the property sits inside the City of Toronto, a second municipal land transfer tax applies on top. This is the single biggest cost difference between buying in Toronto and buying anywhere else in the GTA.",
    ],
    method: [
      {
        h: "How the brackets work",
        p: [
          "Each slice of the price is taxed at its own rate rather than the whole price being taxed at one rate. On a $650,000 home the first $55,000 is taxed at 0.5%, the portion to $250,000 at 1.0%, the portion to $400,000 at 1.5%, and the remainder at 2.0%.",
          "Toronto's municipal tax uses the same structure at the lower end. Above $3 million its rates step up steeply — a set of graduated high-value bands took effect on 1 April 2026, and they run considerably higher than the schedule they replaced.",
        ],
      },
      {
        h: "The first-time buyer rebate",
        p: [
          "First-time buyers can claim up to $4,000 against the Ontario tax, and a further $4,475 against Toronto's municipal tax. In practice the provincial rebate means a qualifying first-time buyer pays no Ontario land transfer tax at all on the first $368,000 of price.",
          "To qualify you must be at least eighteen, a Canadian citizen or permanent resident, never have owned a home anywhere in the world, and occupy the property as your principal residence within nine months. The rebate is claimed through your lawyer at closing — it is not applied automatically.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I add land transfer tax to my mortgage?",
        a: "No. It is due in cash on closing, which is exactly why it catches first-time buyers out. Budget for it alongside your down payment rather than treating it as an afterthought.",
      },
      {
        q: "Do I pay the Toronto tax if I live just outside the city?",
        a: "No. The municipal tax applies only to properties inside the City of Toronto boundary. Buying in Vaughan, Markham or Richmond Hill means the provincial tax only, which is a substantial saving on the same purchase price.",
      },
      {
        q: "What if only one of us is a first-time buyer?",
        a: "The rebate may be reduced in proportion to the interest held by the qualifying buyer. It is a situational question worth confirming with your lawyer rather than assuming either way.",
      },
    ],
    related: ["first-time-buyer", "investment-property"],
  },

  {
    slug: "affordability",
    eyebrow: "Affordability calculator",
    title: "What a lender will actually lend you.",
    lede:
      "Not what you think you can afford — what passes the two debt-service ratios, at the stress-tested rate rather than the rate you will pay.",
    metaTitle: "Mortgage Affordability Calculator",
    metaDescription:
      "Work out your maximum mortgage using the GDS and TDS ratios lenders actually apply, including the stress test, property tax and condo fees.",
    intro: [
      "Lenders do not ask what you can afford. They apply two ratios, and the smaller answer wins.",
      "This calculator applies both, qualifies you at the stress-tested rate rather than your contract rate, and accounts for property tax, heating and condo fees — the costs that quietly consume your borrowing room.",
    ],
    method: [
      {
        h: "The two ratios",
        p: [
          "Gross Debt Service compares your housing costs — mortgage payment, property tax, heating and half of any condo fees — against your gross income. The common guideline ceiling is 39%.",
          "Total Debt Service adds every other debt payment: car loans, credit card minimums, lines of credit, student loans. The common ceiling is 44%. Whichever ratio produces the smaller mortgage is the one that binds.",
        ],
      },
      {
        h: "Why a car payment costs so much house",
        p: [
          "Because debt consumes ratio room rather than money pound for pound. Try setting other monthly debts to a few hundred dollars and watch the maximum price fall by tens of thousands.",
          "There is a subtlety worth understanding: if GDS was already the binding ratio, a new debt payment only reduces your housing budget by the amount TDS falls below GDS — not by the full payment. The effect is still large, but it is not linear.",
        ],
      },
      {
        h: "What this cannot tell you",
        p: [
          "It is an estimate against common guideline ratios, not an approval. Individual lenders apply their own criteria, treat income differently, and may allow higher ratios for strong applicants or lower ones for weaker files.",
          "It also assumes your income is straightforward to document. If you are self-employed, the income a lender counts may be considerably lower than what your business earns.",
        ],
      },
    ],
    faqs: [
      {
        q: "Why am I qualified at a higher rate than I will pay?",
        a: "The stress test requires lenders to check you could still afford payments at the greater of your contract rate plus two percent, or 5.25%. It is a deliberate buffer against rates rising before your renewal.",
      },
      {
        q: "Should I pay off my car loan before applying?",
        a: "Often yes, and the effect is usually larger than people expect. Clearing a payment frees ratio room, which translates into materially more borrowing capacity. Run it both ways above.",
      },
      {
        q: "Does this account for my down payment being small?",
        a: "Yes. If your savings cannot support the price your income allows, the calculator flags that the down payment is the limiting factor and caps the answer at what your savings legally support.",
      },
    ],
    related: ["first-time-buyer", "self-employed", "new-to-canada"],
  },

  {
    slug: "cmhc-insurance",
    eyebrow: "CMHC insurance calculator",
    title: "The premium you pay for putting less than 20% down.",
    lede:
      "Mortgage default insurance protects the lender, not you. It is added to your mortgage rather than paid at closing, so you pay interest on it for as long as you hold the loan.",
    metaTitle: "CMHC Mortgage Insurance Premium Calculator",
    metaDescription:
      "Calculate your CMHC mortgage default insurance premium by loan-to-value band, and see how much it adds to what you borrow.",
    intro: [
      "If your down payment is below twenty percent, mortgage default insurance is mandatory. The premium is a percentage of the loan and rises sharply as your down payment shrinks.",
      "The important thing most people miss: it is financed into the mortgage. You do not write a cheque for it — you borrow it, and pay interest on it.",
    ],
    method: [
      {
        h: "How the premium is set",
        p: [
          "The rate depends on your loan-to-value ratio: the loan divided by the purchase price. The bands step up, so moving from just over 80% to 85% costs meaningfully more, and the top band at 95% loan-to-value carries the highest rate.",
          "Because the bands are steps rather than a smooth curve, a small increase in your down payment can occasionally drop you into a cheaper band and save more than the extra deposit.",
        ],
      },
      {
        h: "Where insurance is not available at all",
        p: [
          "Default insurance is not available on properties at or above $1.5 million, which means twenty percent down is required regardless of your income. It is also unavailable on refinances, and on properties you will not occupy.",
          "A borrowed down payment attracts a higher premium rate than one from savings or a genuine gift.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does this insurance protect me?",
        a: "No. It protects the lender if you default. What it does for you is make lending at a low down payment possible at all, and generally at a better rate than an uninsured mortgage.",
      },
      {
        q: "Can I avoid paying it?",
        a: "Only by putting twenty percent or more down. Whether waiting to save that is worthwhile depends on how long it would take and what happens to prices meanwhile — worth working through rather than assuming.",
      },
      {
        q: "Is the premium taxed?",
        a: "Provincial sales tax applies to the premium in Ontario, and unlike the premium itself that portion is payable at closing rather than financed. Your lawyer will include it in your closing costs.",
      },
    ],
    related: ["first-time-buyer", "investment-property"],
  },

  {
    slug: "stress-test",
    eyebrow: "Stress test calculator",
    title: "The rate you have to prove you could pay.",
    lede:
      "Lenders qualify you at the greater of your rate plus two percent, or 5.25% — whichever is higher. Here is what that does to the payment you must satisfy.",
    metaTitle: "Mortgage Stress Test Calculator",
    metaDescription:
      "See the payment you must qualify for under the Canadian mortgage stress test, and how it compares to the payment you would actually make.",
    intro: [
      "The stress test is the single biggest reason people are approved for less than they expect. It is not about the payment you will make — it is about the payment you must demonstrate you could make.",
      "This shows both figures side by side, so you can see the gap the rule creates.",
    ],
    method: [
      {
        h: "How the qualifying rate is set",
        p: [
          "The minimum qualifying rate is the greater of your contract rate plus a two percentage point buffer, or a floor of 5.25%. When rates are low the floor applies; when rates are higher the buffer does.",
          "Your actual payment is calculated at your real rate. Only the qualification test uses the higher figure — you never pay it unless rates genuinely rise that far.",
        ],
      },
      {
        h: "The renewal exemption worth knowing about",
        p: [
          "For a long time, switching lenders at renewal meant requalifying under the stress test while staying put did not — which effectively locked borrowers in with their existing lender.",
          "OSFI has since exempted uninsured straight switches from the prescribed minimum qualifying rate, where the loan amount and amortisation are not increasing. Moving your mortgage at renewal is meaningfully easier than it used to be.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I actually pay the stress-tested rate?",
        a: "No. You pay your contract rate. The higher rate is only used to test whether you could absorb an increase before your term ends.",
      },
      {
        q: "Does the stress test apply to every mortgage?",
        a: "It applies to federally regulated lenders, which covers the banks and most large lenders. Some credit unions are provincially regulated and apply their own policies, and uninsured straight switches at renewal are now exempt.",
      },
      {
        q: "How do I pass it with a bigger mortgage?",
        a: "Reduce other debt payments, increase your down payment, extend the amortisation, or add a qualified co-applicant. Which of those is realistic depends on your situation — worth a conversation rather than guesswork.",
      },
    ],
    related: ["renewal", "first-time-buyer", "self-employed"],
  },
];

export const calculatorSlugs = calculatorPages.map((c) => c.slug);
export const getCalculator = (slug: string) =>
  calculatorPages.find((c) => c.slug === slug);
