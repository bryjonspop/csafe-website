import type { Metadata } from "next";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: { absolute: "What Should HR Do If an Executive Has a Drinking Problem? | C-Safe" },
  description:
    "HR guidance on responding to alcohol misuse in a senior leader — why acting prematurely creates liability, how to get clinical guidance first, and what a confidential resolution looks like.",
  alternates: { canonical: "https://www.csafeteam.com/faq/hr-executive-drinking-problem" },
  openGraph: { url: "https://www.csafeteam.com/faq/hr-executive-drinking-problem", type: "article" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "QAPage",
  name: "What Should HR Do If an Executive Has a Drinking Problem?",
  mainEntity: {
    "@type": "Question",
    name: "What should HR do if an executive has a drinking problem?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "When HR identifies signs of alcohol misuse in a senior leader, the priority is securing qualified clinical guidance before taking any formal action. Disciplinary or legal steps pursued prematurely can escalate the situation, create liability, and eliminate the possibility of a confidential resolution. HR should contact C-Safe for a discreet consultation — no names required at the initial stage. C-Safe helps HR, General Counsel and leadership teams assess the situation, understand available options, and move carefully with both the organization's and the executive's interests in mind.",
    },
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.csafeteam.com/" },
    { "@type": "ListItem", position: 2, name: "FAQ", item: "https://www.csafeteam.com/faq" },
    { "@type": "ListItem", position: 3, name: "What Should HR Do If an Executive Has a Drinking Problem?", item: "https://www.csafeteam.com/faq/hr-executive-drinking-problem" },
  ],
};

export default function HRExecutiveDrinkingPage() {
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
              <li className="text-slate-400">HR & Executive Drinking</li>
            </ol>
          </nav>
          <div className="inline-block bg-blue-900/30 border border-blue-700/30 text-blue-300 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">HR Guidance</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            What Should HR Do If an Executive Has a Drinking Problem?
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            It is one of the most difficult situations HR faces — and one of the least discussed. The person who needs help outranks the process designed to provide it. Here is how to navigate it carefully and correctly.
          </p>
        </div>
      </section>

      <article className="py-12 px-6 bg-[#0d1f3c]">
        <div className="max-w-3xl mx-auto space-y-8 text-slate-300 text-base leading-relaxed">

          <div>
            <h2 className="text-white text-xl font-bold mb-3">Step One: Do Not Treat This Like a Standard HR Issue</h2>
            <p>
              Standard HR processes — performance improvement plans, written warnings, referrals to the EAP — were not designed for the executive tier. Using them prematurely in a senior leader situation creates significant legal and organizational risk, and almost always makes a confidential resolution impossible.
            </p>
            <p className="mt-3">
              An executive who has been formally written up for alcohol-related behavior before receiving a clinical assessment is now on a different legal and relational footing. The organization has begun building a disciplinary record. The executive has reason to become defensive. Attorneys get involved. What could have been resolved privately and clinically becomes a legal and reputational event.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold mb-3">Step Two: Get Clinical Guidance Before Taking Any Action</h2>
            <p>
              The first call should be to a qualified clinical advisor — not legal, not the executive's supervisor, not a peer. Clinical guidance shapes everything that follows: whether an intervention is appropriate, what kind, who should be involved, what the treatment pathway looks like, and how the organization can support a resolution without creating liability.
            </p>
            <p className="mt-3">
              C-Safe offers confidential consultations for exactly this moment. No names are required at the initial stage. HR can describe the situation, receive clinical and organizational guidance, and decide on a course of action without triggering a formal process prematurely.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold mb-3">What HR Is Actually Seeing vs. What Is Actually Happening</h2>
            <p>
              Alcohol misuse in executives often presents differently than people expect. It rarely looks like what HR sees in lower-level employee situations. More commonly it appears as: performance inconsistency that is hard to pin down, uncharacteristic emotional volatility, withdrawal from key relationships, increasingly erratic availability or decision-making, and repeated situations that seemed like isolated incidents.
            </p>
            <p className="mt-3">
              By the time the behavior is obvious enough for HR to notice, the underlying issue has typically been developing for years. Early, careful intervention produces dramatically better outcomes than waiting until the situation becomes impossible to manage quietly.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold mb-3">The ADA and Legal Considerations</h2>
            <p>
              Alcohol use disorder is a recognized disability under the Americans with Disabilities Act. This does not mean organizations cannot act — but it does mean that how they act matters enormously. Organizations that move directly to disciplinary action without first offering a clinical pathway can face legal exposure. Organizations that move through a clinical advisory process first are in a significantly stronger position, regardless of how the situation ultimately resolves.
            </p>
            <p className="mt-3">
              General Counsel should be involved, but should be brought in alongside clinical guidance — not instead of it. The clinical pathway and the legal pathway need to be coordinated from the beginning.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold mb-3">What a Confidential Resolution Looks Like</h2>
            <p>
              In the best-case scenario — and it is a realistic scenario when handled correctly — the executive receives clinical assessment, accepts appropriate care, completes treatment, and returns to their role with a structured reintegration plan. The organization navigates the situation without a formal HR record, without legal action, without public exposure, and with its leadership team intact.
            </p>
            <p className="mt-3">
              This outcome requires moving quickly and carefully. C-Safe is designed to make it possible.
            </p>
          </div>

          <div className="bg-[#0a1628] border border-[#c9a84c]/20 rounded-xl p-6">
            <h2 className="text-white text-lg font-bold mb-3">C-Safe's Role in Executive Alcohol Situations</h2>
            <p>
              C-Safe advises HR, General Counsel and senior leadership teams on how to respond when a senior leader's alcohol use becomes a concern. We provide confidential clinical assessment, intervention coordination, independent treatment placement and return-to-work planning — all managed outside company systems and formal HR processes.
            </p>
            <p className="mt-3 text-sm text-slate-400">
              Information is handled discreetly and shared only as authorized or as required for safety, clinical coordination or applicable legal obligations. C-Safe is not an emergency service. Call <a href="tel:911" className="text-[#c9a84c]">911</a> or <a href="tel:988" className="text-[#c9a84c]">988</a> when immediate safety is at risk.
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
              { href: "/faq/executive-intervention-confidentiality", label: "How do you protect confidentiality during an executive intervention?" },
              { href: "/faq/are-eaps-enough-for-executives", label: "Are EAPs enough for executives?" },
              { href: "/faq/when-should-board-get-involved", label: "When should a board get involved?" },
            ].map(({ href, label }) => (
              <a key={href} href={href} className="bg-[#0d1f3c] border border-[#1e3a5f] rounded-lg p-4 text-sm text-slate-300 hover:border-[#c9a84c]/40 hover:text-white transition-colors">
                {label} →
              </a>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/resources/executive-alcohol-misuse" className="flex-1 text-center border border-[#c9a84c]/40 text-[#c9a84c] px-6 py-3 rounded font-semibold text-sm hover:border-[#c9a84c] transition-colors">Read: Executive Alcohol Misuse Guide</a>
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
