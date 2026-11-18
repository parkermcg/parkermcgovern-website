import type { Guide } from "@/lib/content/guides";

/**
 * Title fraud, and the "keep a charge on title" argument.
 *
 * WRITTEN DELIBERATELY AGAINST THE BRIEF'S PREMISE. Parker asked on
 * 2026-11-18 for a page on the benefits of keeping a HELOC registered on
 * title as protection against title fraud. The deterrent logic is real and
 * is stated fairly here, but the research does not support presenting it as
 * a protection, and the page says so:
 *
 *   - NEITHER the FCAC nor Ontario lists a registered charge among their
 *     recommended protections against title fraud. Both were checked
 *     directly on 2026-11-18.
 *   - Ontario recommends a SECURITY FREEZE at Equifax and TransUnion, which
 *     is FREE and expressly restricts "entering into a mortgage for real
 *     property" — the same job the charge argument claims, done better and
 *     at no cost.
 *   - FCAC: homeowner title insurance "protects you as long as you own the
 *     home, even if you don't have a mortgage", one-time premium generally
 *     $150-$350. Lender title insurance only "protects you until you pay the
 *     mortgage in full" — so the lender's policy behind a HELOC protects the
 *     LENDER, not the owner.
 *
 * A page telling a mortgage-free homeowner to take on debt for fraud
 * protection, when a free credit freeze and a $150 policy do the job, would
 * be self-serving on a site whose author is paid to arrange that debt. That
 * is an FSRA-facing risk as well as simply untrue. Do not "simplify" this
 * page by cutting the counter-argument — it is the reason it can run at all.
 *
 * The genuine case for a line of credit before paying off a mortgage is
 * qualification, not fraud, and that is where the HELOC section lands.
 *
 * VERIFIED 2026-11-18:
 *   Ontario — title fraud mechanism, the 5 steps for victims, security
 *   freeze scope and that it is free, Land Titles Assurance Fund (6-year
 *   limit, financial loss + reasonable legal costs, ~90 days for
 *   straightforward cases, Director of Titles).
 *   FCAC — title fraud definition, the two types of title insurance and
 *   their durations, premium range, where to buy it, and the protection
 *   list including land title searches.
 *
 * NO fraud statistics or case counts anywhere — none sourced (CLAUDE.md §4).
 */
const guide: Guide = {
  slug: "title-fraud-protection",
  cluster: "deciding",

  title: "Title fraud: a paid-off home is the one worth stealing",
  lede:
    "Title fraud works by forging your identity, transferring your home into someone else's name, and borrowing against it. A property with no mortgage on it offers a fraudster the most to borrow — which is exactly why being mortgage-free is not the end of thinking about your title.",

  metaTitle: "Protecting Your Home from Title Fraud",
  metaDescription:
    "How title fraud works in Ontario, why mortgage-free homes are the richest target, and what actually protects you — including a free step most owners never take.",

  published: "2026-11-18",
  updated: "2026-11-18",

  intro: [
    "Paying off a mortgage is a genuine milestone and nobody should talk you out of enjoying it. But there is a quiet consequence worth understanding, because it is the one thing that gets better for a fraudster the day your balance hits zero.",
    "There is an argument circulating in the mortgage industry — including from people who, like me, are paid to arrange credit lines — that you should keep a home equity line of credit registered on your title as a defence against this. The logic is not stupid. It is also not what the regulators recommend, and the things they do recommend are cheaper. This page covers both honestly.",
  ],

  takeaways: [
    "Title fraud starts with identity theft: forged documents transfer your title, the fraudster mortgages the property, and disappears once the money is advanced.",
    "A mortgage-free home is the richest target, because the entire value is available to borrow against.",
    "A security freeze at Equifax and TransUnion is free, and expressly restricts entering into a mortgage against your property.",
    "Homeowner title insurance protects you for as long as you own the home, even with no mortgage. A one-time premium is generally $150 to $350.",
    "Lender title insurance protects the lender, and ends when the mortgage is paid off — so it is not your protection.",
    "Keeping a credit line on title is a speed bump, not a lock, and no regulator lists it as a protection.",
    "Ontario's Land Titles Assurance Fund can compensate victims, but you have six years to claim and it covers financial loss only.",
  ],

  sections: [
    {
      h: "How title fraud actually works",
      p: [
        "Ontario's own description is blunt, and worth reading slowly: fraudsters use stolen identities or forged documents to transfer a registered owner's title to themselves or to someone else, without the owner's knowledge. The fraudster then takes a mortgage against the property, and once the funds are advanced, disappears.",
        "Two things follow from that. First, it begins as identity theft rather than anything to do with your house — the property is the payoff, not the entry point. Second, you may not find out for months. Nothing changes about living in your home. There is no letter. The first sign is often a collection call about a mortgage you never took.",
        "It is worth separating this from what the province calls mortgage fraud, which is a different crime that mostly victimises lenders — inflating a property's value through a chain of sales between parties working together, then borrowing against the inflated figure. Title fraud is the one aimed at you.",
      ],
      aside: {
        h: "Why a clear title is the richest target",
        p: "This is arithmetic rather than speculation. A fraudster who successfully transfers a property can only extract what a lender will advance against it. On a home with a large mortgage already registered, most of the value is already claimed. On a home owned outright, the entire value is available. If you were choosing a target, you would choose the one with nothing owing on it.",
      },
    },
    {
      h: "The argument for leaving a credit line on title",
      p: [
        "Here is the case, stated as strongly as it deserves to be put.",
        "A registered charge sits on your title and is visible to anyone who searches it. For a fraudster to place a new first mortgage on the property, the existing charge has to be dealt with — which means a discharge, which means paperwork involving a real financial institution that has its own records of you. A property with nothing registered against it needs none of that. The theory is that the extra step makes your home a less convenient target than the one next door, and that fraud, like water, takes the easiest route.",
        "There is also a secondary version of the argument: a lender holding a charge against your property has its own commercial interest in that charge remaining valid, and its own monitoring. You get the incidental benefit of someone else watching.",
      ],
    },
    {
      h: "Why it is a speed bump and not a lock",
      p: [
        "Now the part the argument usually leaves out.",
        "Someone capable of forging the documents needed to transfer your title is capable of forging a discharge. The charge does not make the fraud impossible; it adds a step to a crime that is already built on forgery. Nor does it prevent a fraudster from registering behind your existing charge rather than ahead of it — they take less, but you are still defrauded.",
        "The more telling point is who does not recommend it. Both the Financial Consumer Agency of Canada and the Government of Ontario publish guidance on protecting yourself from title fraud. Neither lists keeping a charge registered on your title. Their lists are about identity protection, credit freezes, title searches and title insurance. If this were a meaningful protection, it would be odd for both of them to leave it out.",
        "And the lender's title insurance that comes with your credit line is not your protection. The FCAC is explicit that lender title insurance protects you only until the mortgage is paid in full — the policy exists to cover the lender's position, not your ownership. Borrowing money to obtain insurance that protects the person who lent it to you is not a strategy.",
      ],
      aside: {
        h: "The conflict of interest, stated plainly",
        p: "I arrange home equity lines of credit, and I am compensated when one is set up. So treat the version of this argument you hear from the mortgage industry — including from me — with the scepticism it deserves. If a credit line were genuinely the best defence against title fraud, the regulators would say so. They do not. I would rather you heard that here than worked it out later.",
      },
    },
    {
      h: "What actually protects you",
      p: [
        "These are the measures the FCAC and Ontario do recommend. The first one is free, takes one phone call each, and most homeowners have never done it.",
      ],
      list: [
        {
          t: "A security freeze at both credit bureaus",
          d: "Ontario recommends contacting Equifax Canada and TransUnion Canada to place a security freeze — sometimes called a credit lock or freeze — on your file. It is free of charge, and it restricts disclosure of your file for specific purposes including entering into a new credit agreement and, in terms, entering into a mortgage for real property. This is the measure that acts directly on the mechanism title fraud depends on.",
        },
        {
          t: "Homeowner title insurance",
          d: "The type that matters if you have no mortgage. The FCAC states that homeowner title insurance protects you for as long as you own the home, even if you do not have a mortgage — unlike the lender policy, which ends when the mortgage is paid off. It is a one-time premium, generally $150 to $350 though it can be more, based on the value of your home.",
        },
        {
          t: "You can buy it later",
          d: "A point people routinely get wrong. The FCAC confirms that if you did not buy title insurance when you purchased, you can buy it afterwards. Being ten or twenty years into ownership with no policy does not shut the door. It is available from lawyers, title insurance companies, insurance agents and mortgage brokers.",
        },
        {
          t: "Search your own title",
          d: "The FCAC recommends doing a land title search with your provincial land registry office. It shows the registered owner and every mortgage or lien against the property. Doing this occasionally is how you find out something is wrong while it is still fixable.",
        },
        {
          t: "Ordinary identity hygiene",
          d: "Shred old documents rather than binning them, keep mortgage paperwork somewhere secure, and consult a lawyer before granting anyone the right to deal with your home — a power of attorney included. Title fraud starts as identity theft, so this is the actual front line.",
        },
        {
          t: "Deal with licensed people",
          d: "Both sources make this point. Mortgage agents and brokerages in Ontario are licensed by FSRA and the register is public. Checking a licence takes a minute.",
        },
      ],
    },
    {
      h: "If it happens anyway",
      p: [
        "Ontario sets out five steps, and the order matters because some of them are time-limited.",
        "Report it to your local police. Get advice from your lawyer. Contact the Land Registry Office where the property is registered, and the Canadian Anti-Fraud Centre. Speak to your bank. And contact Equifax and TransUnion to freeze your file so the same identity cannot be used again.",
        "Ontario also maintains the Land Titles Assurance Fund, established under the Land Titles Act, which can compensate people for certain financial losses caused by real estate fraud or by errors in the land registration system. It can cover the financial loss itself, reasonable legal costs related to the claim, and other reasonable costs.",
        "Two limits worth knowing before you need them. Applications must be made within six years of suffering the loss. And the fund compensates financial loss — the province's own published decisions have declined claims for distress, because the Act provides for actual loss only. For most straightforward cases of fraud where everyone co-operates, Ontario says title can be returned and a compensation decision made within ninety days.",
      ],
    },
    {
      h: "The real reason to set up a line before you are mortgage-free",
      p: [
        "There is a genuinely strong argument for having a home equity line of credit in place as you approach paying off your mortgage. It is just not about fraud.",
        "It is about qualification. A credit line has to be approved, and approval depends on provable income. The moment most people stop needing a mortgage is often close to the moment their income changes — retirement, a business wind-down, a move to part-time. A line arranged while you are still earning is available to you afterwards at a size you would struggle to qualify for later.",
        "What that buys is optionality. A roof, a furnace, a medical cost, a stretch of months between selling one home and buying the next, or helping an adult child without liquidating investments at a bad moment. Having room available and unused costs you nothing in interest, and it means an ordinary expensive problem does not become a forced sale of something you did not want to sell.",
        "That argument stands on its own and does not need the fraud story propped up behind it. If you are two or three years from clearing your mortgage and your income is going to change, that is the conversation worth having — and the timing is the whole point of it.",
      ],
    },
    {
      h: "When a credit line against your home is the wrong idea",
      p: [
        "If having access to money is the thing that causes you to spend it, do not arrange this. A line secured against your home converts your house into a source of spending, and the discipline required is real. People who know this about themselves are usually right.",
        "If the only reason you are considering it is the fraud argument, the honest answer is a free credit freeze and a title insurance policy. Those cost a phone call and a couple of hundred dollars, and they are what the regulators actually recommend. Taking on a secured credit facility to achieve the same end is the expensive route to a worse outcome.",
        "Be clear-eyed about the terms as well. A line of credit is usually a variable rate that moves with the prime rate, it is secured against your home with the enforcement that implies, and the lender generally retains the ability to review or reduce the limit. It is not a dormant safety net you can rely on absolutely.",
        "And if you are mortgage-free, carrying no debt and sleeping well, there is a real argument for leaving things exactly as they are. Not every financial product needs to be in your life. I would rather tell you that than arrange something you did not need.",
      ],
    },
  ],

  faqs: [
    {
      q: "Does having a mortgage or HELOC on title prevent title fraud?",
      a: "No. It may add a step, because a fraudster seeking a first mortgage would need to deal with the existing charge, but someone forging a transfer can forge a discharge. Neither the FCAC nor the Government of Ontario lists a registered charge among their recommended protections. Treat it as a mild deterrent at best, not a defence.",
    },
    {
      q: "What is the single best thing I can do to protect my home?",
      a: "Place a security freeze on your file with both Equifax Canada and TransUnion Canada. Ontario recommends it, it is free, and it restricts disclosure of your credit file for purposes that include entering into a mortgage against real property. Title fraud runs on identity theft, and this acts directly on that.",
    },
    {
      q: "I paid off my mortgage years ago. Can I still get title insurance?",
      a: "Yes. The FCAC confirms that if you did not buy title insurance at purchase, you can buy it later. You want a homeowner policy rather than a lender policy — a homeowner policy protects you for as long as you own the home even with no mortgage, whereas lender coverage ends when the mortgage is paid off. The premium is a one-time cost, generally $150 to $350 depending on your home's value.",
    },
    {
      q: "Doesn't my old title insurance from when I bought still cover me?",
      a: "It depends which policy you have. If your lender required title insurance as part of the mortgage, that was likely a lender policy, which protects the lender and ends when the mortgage is paid in full. Only a homeowner policy continues to protect you as the owner. It is worth digging out your closing documents, or asking the lawyer who acted for you, to find out which one you actually hold.",
    },
    {
      q: "How would I even know if my title had been stolen?",
      a: "Often you would not, for a while — nothing changes about living in the house. The usual first signs are contact about a mortgage you never arranged, or mail for a lender you have never dealt with. That is why periodically running a land title search through the provincial registry is worth doing: it shows the registered owner and every charge against the property.",
    },
    {
      q: "Will Ontario compensate me if I am defrauded?",
      a: "Possibly. The Land Titles Assurance Fund, established under the Land Titles Act, can compensate for certain financial losses from real estate fraud or land registration errors, including reasonable legal costs. You must apply within six years of suffering the loss, and it compensates actual financial loss rather than distress. Ontario says that in most straightforward cases where everyone co-operates, title can be returned and a compensation decision made within about ninety days.",
    },
  ],

  sources: [
    {
      name: "Government of Ontario — Victims of real estate fraud",
      href: "https://www.ontario.ca/page/victims-real-estate-fraud",
    },
    {
      name: "Government of Ontario — Compensation for loss from the Land Titles Assurance Fund",
      href: "https://www.ontario.ca/page/compensation-loss-land-titles-assurance-fund",
    },
    {
      name: "Financial Consumer Agency of Canada — Real estate fraud",
      href: "https://www.canada.ca/en/financial-consumer-agency/services/real-estate-fraud.html",
    },
    {
      name: "Financial Consumer Agency of Canada — Title insurance",
      href: "https://www.canada.ca/en/financial-consumer-agency/services/mortgages/choose-mortgage.html",
    },
  ],

  relatedGuides: ["what-to-do-when-declined", "mortgage-penalties-ird"],
  relatedServices: ["refinance", "reverse-mortgage", "renewal"],
  relatedCalculators: ["mortgage-payment", "affordability"],
};

export default guide;
