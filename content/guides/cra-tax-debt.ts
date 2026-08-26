import type { Guide } from "@/lib/content/guides";

/**
 * DRAFT — awaiting Parker's sign-off. Ships `noindex` and stays out of the
 * sitemap and all listings until `draft` is removed.
 *
 * VERIFIED against CRA directly, 2026-08-26:
 *   - Before placing a lien or seizing, the CRA must legally certify the
 *     amount owed via a provincial judgement or a Federal Court certificate.
 *   - Certification "makes your debt a matter of public record" — the CRA's
 *     own wording, and the mechanism by which lenders discover it.
 *   - A registered lien establishes the CRA's priority as a creditor: on a
 *     sale the debt is paid from proceeds before the owner receives anything.
 *   - The CRA usually sends a letter on certification; in jeopardy cases it
 *     may advise verbally and move immediately.
 *   - Liens are generally removed once the debt is paid in full.
 *
 * NO figures for CRA interest rates appear here — the prescribed rate moves
 * quarterly and none was supplied (CLAUDE.md §4). Describe the mechanism,
 * never the number.
 */
const guide: Guide = {
  slug: "cra-tax-debt",
  cluster: "deciding",
  draft: true,

  title: "Clearing CRA tax debt with your mortgage",
  lede:
    "Tax debt behaves differently from other debt. It can become a matter of public record, it can attach to your property ahead of everyone else, and it can quietly close the door on the lenders you would otherwise qualify with.",

  metaTitle: "Using Your Mortgage to Clear CRA Debt",
  metaDescription:
    "How CRA tax debt affects a mortgage in Ontario, what a certified debt and a lien actually do, and when refinancing to clear it is the right call.",

  published: "2026-08-26",
  updated: "2026-08-26",

  intro: [
    "Owing the Canada Revenue Agency is more common than people assume, and it is particularly common among the self-employed, where nobody is withholding tax at source and a good year produces a bill that lands months later.",
    "What makes it different from a credit card balance is not the size. It is that the CRA has collection powers no ordinary creditor has, and that once it exercises them the debt stops being private. That is the part with direct consequences for a mortgage.",
  ],

  takeaways: [
    "The CRA must certify a debt — through a provincial judgement or a Federal Court certificate — before it can place a lien or seize assets.",
    "Certification makes the debt a matter of public record. That is how lenders find out.",
    "A registered lien gives the CRA priority: on a sale, it is paid from the proceeds before you receive anything.",
    "Most A lenders will not fund while tax debt is outstanding, and will usually require it cleared through the transaction.",
    "Refinancing to clear it converts an aggressive, growing debt into a secured one at a much lower rate — which is often, but not always, the right trade.",
    "Acting before certification is far easier and cheaper than acting after.",
  ],

  sections: [
    {
      h: "Why tax debt is not like other debt",
      p: [
        "An ordinary creditor that wants to enforce a debt has to sue you, win, and then enforce the judgement. The CRA has a shorter route: various tax acts let it register a certificate in the Federal Court for an unpaid amount, and once registered that certificate has the same effect as a judgement obtained in the court.",
        "The CRA's own description of what happens next is worth reading closely. Before it can place a lien on or seize your assets, it must legally certify what you owe — and doing so, in its words, makes your debt a matter of public record. It usually sends a letter to tell you it has done this.",
        "That phrase is the whole issue for a mortgage. A tax balance sitting quietly on your CRA account is between you and the CRA. A certified debt is discoverable, and a lien registered against your property will be found the moment anyone searches title.",
      ],
      aside: {
        h: "Priority, not just presence",
        p: "Once your debt is certified, the CRA can register a lien against your property. That does more than record the amount — it establishes the CRA's priority as a creditor. When the asset is sold, the debt is paid automatically out of the proceeds before you receive any of them. A lender being asked to lend against that property is now standing behind the government in the queue, which is why it changes the answer so sharply.",
      },
    },
    {
      h: "What it does to a mortgage application",
      p: [
        "Outstanding tax debt affects an application in three distinct ways, and they compound.",
      ],
      list: [
        {
          t: "It closes off A lenders",
          d: "Most will not fund with tax debt outstanding. Frequently the condition is that it be paid in full through the transaction, with proof, before the mortgage advances.",
        },
        {
          t: "A lien blocks clean title",
          d: "Your lawyer will find it on the title search, and a lender needs its own charge to sit in the position it expects. A registered CRA lien has to be dealt with before closing, not after.",
        },
        {
          t: "It signals more than the balance",
          d: "Underwriters read unpaid tax as a cash flow problem rather than an isolated event, particularly on a self-employed file where the same pattern may repeat next year.",
        },
        {
          t: "It grows while you decide",
          d: "Interest compounds daily on an outstanding balance and the rate is set by the CRA rather than negotiated. Waiting is never neutral here.",
        },
      ],
    },
    {
      h: "The refinancing route",
      p: [
        "The mechanics are straightforward: you refinance the property, take equity out, and the tax debt is paid in full at closing — usually directly by your lawyer, so the lender can see it discharged rather than take your word for it. If a lien is registered, it is cleared as part of the same transaction, and the CRA will generally remove it once the debt is paid in full.",
        "The arithmetic is usually favourable. Tax debt attracts a compounding rate set by the CRA, carries collection powers no other creditor has, and grows until it is gone. Mortgage money is the cheapest borrowing most people have access to. Converting the former into the latter typically lowers the cost substantially and removes the enforcement risk at the same time.",
        "There is a ceiling: you can generally refinance up to 80% of the property's value, and mortgage default insurance is not available on a refinance. If the tax debt plus your existing mortgage exceeds that, a straight refinance will not clear it and the conversation moves to alternative lending or to a payment arrangement with the CRA instead.",
      ],
      aside: {
        h: "Timing beats everything else here",
        p: "The cheapest version of this is done before certification. Once a certificate is registered and a lien is on title, your options narrow, the file gets harder to place, and A lenders that might have funded a straightforward refinance start declining. If you have a growing balance and you know it, that is the moment to deal with it — not when the letter arrives.",
      },
    },
    {
      h: "When refinancing is the wrong answer",
      p: [
        "If nothing about the underlying cash flow changes, this does not solve the problem — it resets it. The self-employed version is specific and worth naming: if you are not setting money aside for tax during the year, you will owe again next year, only now with a larger mortgage and less equity to draw on. The refinance buys a year. It does not fix the pattern.",
        "If the balance is small and manageable, a payment arrangement directly with the CRA is often cheaper than a refinance once you count legal fees, any prepayment penalty on your existing mortgage, and the interest on borrowing the money over a full amortisation. Refinancing has fixed costs that do not shrink with the size of the debt.",
        "If you would be borrowing at a materially worse rate than your current mortgage carries, look carefully at whether breaking it is worth it. A blend-and-extend or a second charge sometimes costs less overall than collapsing a good first mortgage to fold in a comparatively small balance.",
        "And if the tax debt is disputed, resolve the dispute first where you can. Borrowing against your home to pay an assessment you intend to object to is an expensive way to be right later.",
      ],
    },
    {
      h: "What to do first",
      p: [
        "In order, and none of this requires a mortgage decision to start:",
      ],
      list: [
        {
          t: "Find out the actual number",
          d: "The balance in your CRA account, including interest to date, rather than the figure on a notice from months ago. It is almost always larger than people remember.",
        },
        {
          t: "Check whether it has been certified",
          d: "The CRA usually notifies you by letter when it certifies a debt in Federal Court. If you have that letter, the situation is materially more urgent than if you do not.",
        },
        {
          t: "Check your title",
          d: "If you suspect a lien may already be registered, your lawyer can confirm it quickly. Knowing changes which lenders are realistic.",
        },
        {
          t: "File everything outstanding",
          d: "Unfiled returns make the position worse and make the file harder to place, because nobody — including you — knows the real number until they are filed.",
        },
        {
          t: "Then look at the equity",
          d: "Once the balance and the status are known, whether a refinance clears it is a straightforward calculation against the 80% ceiling.",
        },
      ],
    },
  ],

  faqs: [
    {
      q: "Will a lender find out about my tax debt?",
      a: "If it has been certified, very likely — the CRA states that certifying a debt makes it a matter of public record, and a registered lien will appear on a title search. An uncertified balance may not surface on its own, but lenders ask directly on self-employed files and answering inaccurately on an application is misrepresentation. The better approach is to raise it early and plan around it.",
    },
    {
      q: "Can I get a mortgage with CRA debt outstanding?",
      a: "Usually only if the debt is being cleared through the transaction. Most A lenders will require it paid in full at closing with proof, arranged by your lawyer. Where there is not enough equity to do that, the conversation moves to alternative lenders, or to a payment arrangement with the CRA while you rebuild the position.",
    },
    {
      q: "What is a CRA lien and how do I get it removed?",
      a: "It is a legal claim registered against your property to secure a debt the CRA has already certified. It establishes the CRA's priority, meaning the debt is paid from the proceeds of any sale before you receive anything. In most cases the CRA removes it once the debt is paid in full, which is why clearing it through a refinance and having your lawyer confirm the discharge is the usual route.",
    },
    {
      q: "Is it better to pay the CRA or my credit cards first?",
      a: "It depends on the rates and on whether the tax debt has been certified, but tax debt carries enforcement powers no card issuer has — liens, garnishment, and the ability to act quickly where collection is considered at risk. A balance that can attach to your house generally deserves priority over one that cannot, even at a similar rate.",
    },
    {
      q: "I am self-employed and this keeps happening. What actually stops it?",
      a: "Setting money aside as you earn rather than at filing time, in a separate account you do not treat as available. It is unglamorous and it is the only thing that works. A refinance clears the current balance, but if the habit does not change you will be having this conversation again next year with less equity to work with.",
    },
  ],

  sources: [
    {
      name: "Canada Revenue Agency — Putting a lien on or seizing your assets",
      href: "https://www.canada.ca/en/revenue-agency/services/about-canada-revenue-agency-cra/when-you-money-collections-cra/personal-debt/legal-warning/putting-lien-on-seizing-your-assets.html",
    },
    {
      name: "Canada Revenue Agency — Debt collection at the CRA",
      href: "https://www.canada.ca/en/revenue-agency/services/about-canada-revenue-agency-cra/when-you-money-collections-cra.html",
    },
    {
      name: "Canada Revenue Agency — Tax collections policies (IC98-1)",
      href: "https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/ic98-1/tax-collections-policies.html",
    },
  ],

  relatedGuides: ["what-to-do-when-declined", "mortgage-penalties-ird"],
  relatedServices: ["refinance", "self-employed", "alternative-lending"],
  relatedCalculators: ["mortgage-payment", "affordability"],
};

export default guide;
