import type { Metadata } from "next";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: { absolute: "How Do You Protect Confidentiality During an Executive Intervention? | C-Safe" },
  description:
    "Confidentiality in executive interventions is a clinical, legal and organizational requirement. Here is how every stage of the process is protected — and what happens when it is not.",
  alternates: { canonical: "https://www.csafeteam.com/faq/executive-intervention-confidentiality" },
  openGraph: { url: "https://www.csafeteam.com/faq/executive-intervention-confidentiality", type: "article" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "QAPage",
  name: "How Do You Protect Confidentiality During an Executive Intervention?",
  mainEntity: {
    "@type": "Question",
    name: "How do you protect confidentiality during an executive intervention?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Confidentiality in an executive intervention is protected through a combination of structural decisions, communication protocols and clinical discipline. All advisory communications and records are maintained outside company systems. Participant selection is limited to those with a genuine clinical or relational role. The treatment pathway is arranged through discreet, need-to-know communication channels. And the organizational communication strategy — what is said, to whom, and when — is planned in advance to protect the executive's privacy while meeting the organization's legitimate needs.",
    },
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.csafeteam.com/" },
    { "@type": "ListItem", position: 2, name: "FAQ", item: "https://www.csafeteam.com/faq" },
    { "@type": "ListItem", position: 3, name: "Executive Intervention Confidentiality", item: "https://www.csafeteam.com/faq/executive-intervention-confidentiality" },
  ],
};

export default function ExecutiveInterventionConfidentialityPage() {
  return (
    <div className="min-h-screen bg-[#0a1628] text-white font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <NavBar />

      <section className="pt-32 pb-12 px-6 bg-gradient-to-br from-[#0a1628] via-[#0d1f3c] to-[#0a1628]">
        <div className="max-w-3xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-xs text-slate-500 mb-8">
            <ol className="flex items-center gap-2">
              <li><a href="/" className="hover:text-slate-300">Home</a></li>
              <li className="text-slate-700">/</li>
              <li><a href="/faq" className="hover:text-slate-300">FAQ</a></li>
              <li className="text-slate-700">/</li>
              <li className="text-slate-400">Executive Intervention Confidentiality</li>
            </ol>
          </nav>
          <div className="inline-block bg-green-900/30 border border-green-700/30 text-green-300 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">Confidentiality</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            How Do You Protect Confidentiality During an Executive Intervention?
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Confidentiality in an executive intervention is not just a preference — it is a clinical, legal and organizational requirement. A breach at any stage can destroy the trust that makes the intervention possible and expose everyone involved to unnecessary harm.
          </p>
        </div>
      </section>

      <article className="py-12 px-6 bg-[#0d1f3c]">
        <div className="max-w-3xl mx-auto space-y-8 text-slate-300 text-base leading-relaxed">

          <div>
            <h2 className="text-white text-xl font-bold mb-3">Why Confidentiality Is So High-Stakes in Executive Situations</h2>
            <p>
              An executive's behavioral health situation touches nearly every dimension of their life and career simultaneously. Their reputation, their relationships with the board, their standing with investors and clients, their personal and family relationships — all of these are affected by what is known, by whom, and when. A leak at any stage of the intervention process can trigger a cascading loss of trust that makes clinical resolution dramatically harder.
            </p>
            <p className="mt-3">
              There is also the organizational dimension. An executive intervention that becomes public — particularly before the executive has had the opportunity to enter care — can create board, investor and media dynamics that transform a manageable clinical situation into an organizational crisis.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold mb-3">Structural Protections: Keeping It Outside Company Systems</h2>
            <p>
              The first layer of confidentiality protection is structural. All clinical advisory communications and records should be maintained entirely outside company systems — not on company email, not in HR files, not in any system the organization administers. C-Safe operates this way by design.
            </p>
            <p className="mt-3">
              This is not simply about discretion. It is about ensuring that the executive's clinical situation is not subject to discovery in employment litigation, regulatory inquiry or other proceedings that could affect the organization. Information handled through external clinical channels is subject to different legal protections than information created within the employment relationship.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold mb-3">Need-to-Know Participant Selection</h2>
            <p>
              One of the most important confidentiality decisions in an executive intervention is who knows what, and when. The planning process — clinical assessment, participant preparation, treatment coordination — should involve only those whose participation is clinically necessary or whose relationship with the executive is central to the intervention's success.
            </p>
            <p className="mt-3">
              Board members, HR personnel, attorneys and communications staff should not be looped into clinical planning unless their involvement is specifically required. The more people who are aware of the process before the intervention takes place, the greater the risk of an inadvertent disclosure that reaches the executive or surfaces publicly.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold mb-3">Communication Protocols During and After</h2>
            <p>
              The organizational communication strategy — what will be said publicly if the executive enters treatment, what will be communicated internally, what the board will be told and when — needs to be planned before the intervention, not improvised afterward. A prepared communication plan dramatically reduces the risk of inconsistent messaging that draws attention to the situation.
            </p>
            <p className="mt-3">
              For publicly traded companies and organizations with public profiles, communications strategy may involve outside counsel and investor relations advisors. These conversations should happen in parallel with clinical planning, not after the fact.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold mb-3">The Limits of Confidentiality</h2>
            <p>
              Confidentiality in clinical advisory processes operates within a legal and ethical framework. Information is handled discreetly and shared only as authorized or as required for safety, clinical coordination or applicable legal obligations. When someone's safety is at risk, safety takes precedence.
            </p>
            <p className="mt-3">
              Organizations and their advisors should understand these limits clearly before an intervention process begins, so that clinical, legal and organizational decisions are made with full awareness of what can and cannot remain confidential in different scenarios.
            </p>
          </div>

          <div className="bg-[#0a1628] border border-[#c9a84c]/20 rounded-xl p-6">
            <h2 className="text-white text-lg font-bold mb-3">How C-Safe Protects Confidentiality</h2>
            <p>
              C-Safe operates entirely outside company systems. We coordinate clinical processes, participant preparation and treatment logistics through discreet, need-to-know communication pathways. Our advisory records are not part of the organization's HR or legal files. We plan organizational communication strategies in advance, and we work with organizations to ensure that every person involved understands what is — and is not — appropriate to share.
            </p>
            <p className="mt-3 text-sm text-slate-400">
              C-Safe is not an emergency service. If someone is in immediate danger, call <a href="tel:911" className="text-[#c9a84c]">911</a>. For immediate mental health or substance-use crisis support, call or text <a href="tel:988" className="text-[#c9a84c]">988</a>.
            </p>
          </div>
        </div>
      </article>

      <section className="py-12 px-6 bg-[#0a1628]">
        <div className="max-w-3xl mx-auto">
          <p className="text-slate-500 text-xs font-semibold uppercase tracking-widest mb-5">Related Questions</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {[
              { href: "/faq/how-to-intervene-with-a-ceo", label: "How do you intervene with a CEO?" },
              { href: "/faq/hr-executive-drinking-problem", label: "What should HR do if an executive has a drinking problem?" },
              { href: "/faq/when-should-board-get-involved", label: "When should a board get involved?" },
              { href: "/executive-intervention-services", label: "C-Safe Executive Intervention Services →" },
            ].map(({ href, label }) => (
              <a key={href} href={href} className="bg-[#0d1f3c] border border-[#1e3a5f] rounded-lg p-4 text-sm text-slate-300 hover:border-[#c9a84c]/40 hover:text-white transition-colors">
                {label} →
              </a>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/resources/first-48" className="flex-1 text-center border border-[#c9a84c]/40 text-[#c9a84c] px-6 py-3 rounded font-semibold text-sm hover:border-[#c9a84c] transition-colors">Read: The First 48 Hours</a>
            <a href="/#contact" className="flex-1 text-center bg-[#c9a84c] text-[#0a1628] px-6 py-3 rounded font-semibold text-sm hover:bg-[#b8963f] transition-colors">Request a Confidential Call</a>
          </div>
        </div>
      </section>

      <footer className="bg-[#0a1628] border-t border-[#1e3a5f] py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-white font-bold">C-Safe <span className="text-[#c9a84c]">Wellness Group</span></span>
          <p className="text-slate-500 text-sm">&copy; {new Date().getFullYear()} C-Safe Wellness Group. All rights reserved.</p>
          <a href="/faq" className="text-slate-400 text-sm hover:text-[#c9a84c] transition-colors">← All FAQ</a>
        </div>
      </footer>
    </div>
  );
}
