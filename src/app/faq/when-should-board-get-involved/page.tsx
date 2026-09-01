import type { Metadata } from "next";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: { absolute: "When Should a Board Get Involved in an Executive Crisis? | C-Safe" },
  description:
    "Boards have fiduciary and governance responsibilities that make executive behavioral health crises a board-level concern. Here is how to recognize the threshold and what to do when you reach it.",
  alternates: { canonical: "https://www.csafeteam.com/faq/when-should-board-get-involved" },
  openGraph: { url: "https://www.csafeteam.com/faq/when-should-board-get-involved", type: "article" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "QAPage",
  name: "When Should a Board Get Involved in an Executive Crisis?",
  mainEntity: {
    "@type": "Question",
    name: "When should a board get involved in an executive crisis?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "A board should become involved when an executive's behavioral health situation begins to affect organizational performance, decision-making quality, or when there is credible information suggesting the executive's ability to fulfill their fiduciary responsibilities is materially impaired. Boards also have a responsibility to act when there are safety concerns or when the situation creates legal or regulatory exposure for the organization. Early, confidential engagement with a clinical advisor — before formal board action — is almost always the right first step.",
    },
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.csafeteam.com/" },
    { "@type": "ListItem", position: 2, name: "FAQ", item: "https://www.csafeteam.com/faq" },
    { "@type": "ListItem", position: 3, name: "When Should a Board Get Involved?", item: "https://www.csafeteam.com/faq/when-should-board-get-involved" },
  ],
};

export default function WhenShouldBoardGetInvolvedPage() {
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
              <li className="text-slate-400">Board Involvement in Executive Crisis</li>
            </ol>
          </nav>
          <div className="inline-block bg-purple-900/30 border border-purple-700/30 text-purple-300 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">Governance</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            When Should a Board Get Involved in an Executive Crisis?
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            This is the question boards often ask too late. The right answer is: earlier than most boards think — and through a confidential advisory channel, not a formal board action.
          </p>
        </div>
      </section>

      <article className="py-12 px-6 bg-[#0d1f3c]">
        <div className="max-w-3xl mx-auto space-y-8 text-slate-300 text-base leading-relaxed">

          <div>
            <h2 className="text-white text-xl font-bold mb-3">The Board's Fiduciary Responsibility</h2>
            <p>
              Boards have a fiduciary duty to the organization and its stakeholders. When a senior leader's behavioral health situation begins to materially affect the organization's performance, decision-making quality or risk profile, that is a governance matter — not just a personal one. Boards that wait for a crisis to become undeniable before acting are not protecting the organization. They are increasing its exposure.
            </p>
            <p className="mt-3">
              The earlier a board — or a board member — engages with qualified clinical and organizational guidance, the more options exist for a clean, confidential resolution. Once a situation becomes public, or once formal processes are triggered, those options narrow significantly.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold mb-3">Specific Thresholds That Warrant Board Attention</h2>
            <ul className="space-y-3 mt-3">
              {[
                "The executive's decision-making quality has become inconsistent or erratic in ways that affect material business outcomes",
                "There are credible reports — from direct reports, family members, peers or observers — of behavioral health concerns",
                "The executive has missed critical obligations, made unexplained errors, or exhibited behavior that departs significantly from their baseline",
                "There are safety concerns involving the executive or those around them",
                "The situation has created or is creating legal, regulatory or reputational exposure for the organization",
                "The executive has disclosed a personal crisis that may affect their capacity to serve",
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <span className="text-[#c9a84c] mt-1 flex-shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold mb-3">The Difference Between Board Involvement and Board Action</h2>
            <p>
              Board involvement and formal board action are not the same thing. A board member — or the board chair, or General Counsel on behalf of the board — can engage with a clinical advisor confidentially and informally, well before any formal board process is triggered. This is almost always the right first step.
            </p>
            <p className="mt-3">
              C-Safe routinely works with board members who contact us before any executive is formally identified. These early conversations are fully confidential, require no names at the initial stage, and help the board understand what options exist and how to exercise them responsibly.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold mb-3">What the Board Should Not Do</h2>
            <p>
              Boards often instinctively reach for the tools they know — formal resolutions, legal counsel, HR processes, leave of absence procedures. These are not wrong, but applied prematurely, without clinical guidance, they can eliminate the possibility of a quiet resolution and expose the organization to greater risk.
            </p>
            <p className="mt-3">
              Boards should also resist the temptation to handle a behavioral health crisis as a performance matter. Documenting behavioral health concerns in a performance record before a clinical pathway has been offered creates legal exposure and almost always makes the situation harder to resolve constructively.
            </p>
          </div>

          <div className="bg-[#0a1628] border border-[#c9a84c]/20 rounded-xl p-6">
            <h2 className="text-white text-lg font-bold mb-3">How C-Safe Works With Boards</h2>
            <p>
              C-Safe advises board members, board chairs and General Counsel on how to assess and respond to executive behavioral health situations. We operate fully outside company systems, require no names at the initial stage, and provide the clinical and organizational expertise boards need to act responsibly without triggering a premature formal process.
            </p>
            <p className="mt-3 text-sm text-slate-400">
              Information is handled discreetly and shared only as authorized or as required for safety, clinical coordination or applicable legal obligations.
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
              { href: "/faq/what-is-executive-behavioral-health", label: "What is executive behavioral health?" },
              { href: "/faq/are-eaps-enough-for-executives", label: "Are EAPs enough for executives?" },
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
