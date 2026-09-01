import type { Metadata } from "next";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: { absolute: "What Is Executive Behavioral Health? | C-Safe Wellness Group" },
  description:
    "Executive behavioral health addresses mental health, substance use and personal crises involving senior leaders — and why it requires a different approach than standard employee support programs.",
  alternates: { canonical: "https://www.csafeteam.com/faq/what-is-executive-behavioral-health" },
  openGraph: { url: "https://www.csafeteam.com/faq/what-is-executive-behavioral-health", type: "article" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "QAPage",
  name: "What Is Executive Behavioral Health?",
  mainEntity: {
    "@type": "Question",
    name: "What is executive behavioral health?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Executive behavioral health is the field of clinical practice and organizational advisory focused on mental health, substance use and personal crises involving senior leaders. It addresses how behavioral health conditions present differently in high-performance, high-pressure leadership roles — and why standard employee support systems are structurally insufficient to address them. Executive behavioral health advisory combines confidential clinical guidance, organizational risk planning, treatment coordination, family support and return-to-work strategy.",
    },
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.csafeteam.com/" },
    { "@type": "ListItem", position: 2, name: "FAQ", item: "https://www.csafeteam.com/faq" },
    { "@type": "ListItem", position: 3, name: "What Is Executive Behavioral Health?", item: "https://www.csafeteam.com/faq/what-is-executive-behavioral-health" },
  ],
};

export default function WhatIsExecBehavioralHealth() {
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
              <li className="text-slate-400">What Is Executive Behavioral Health?</li>
            </ol>
          </nav>
          <div className="inline-block bg-[#73a0b1]/10 border border-[#73a0b1]/30 text-[#73a0b1] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">Foundational</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            What Is Executive Behavioral Health?
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Executive behavioral health is the field of clinical practice and organizational advisory focused on mental health, substance use and personal crises involving senior leaders. It is not a rebranding of employee wellness. It is a fundamentally different category of care.
          </p>
        </div>
      </section>

      <article className="py-12 px-6 bg-[#0d1f3c]">
        <div className="max-w-3xl mx-auto space-y-8 text-slate-300 text-base leading-relaxed">

          <div>
            <h2 className="text-white text-xl font-bold mb-3">The Core Definition</h2>
            <p>
              Executive behavioral health addresses how mental health conditions, substance use disorders and acute personal crises present and are managed in the context of high-performance leadership roles. It combines clinical assessment, organizational risk management, confidential treatment coordination, family support and return-to-work strategy — integrated into a single, discreet advisory process.
            </p>
            <p className="mt-3">
              The term exists because the standard behavioral health infrastructure — Employee Assistance Programs, HR-administered referrals, insurance-based intake processes — was designed for the general workforce. It was not designed for the specific clinical, legal, reputational and organizational dynamics that arise when a CEO, CFO or board member is the one who needs help.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold mb-3">Why Executive Situations Are Clinically Different</h2>
            <p>
              Senior leaders face a distinct set of behavioral health risk factors. Chronic high-stakes decision-making, sustained performance pressure, social isolation at the top, limited peer support and the cultural expectation of invulnerability all create conditions where mental health and substance use issues develop, escalate and go untreated at higher rates than in the general population.
            </p>
            <p className="mt-3">
              Executives are also significantly less likely to seek help voluntarily. The stigma associated with mental health and substance use is amplified in leadership culture, where asking for help can be perceived — and sometimes correctly — as a career-ending signal. By the time a situation surfaces externally, it has typically been developing for months or years.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold mb-3">Why the Organizational Stakes Are Different</h2>
            <p>
              A behavioral health crisis involving a senior leader is simultaneously a clinical situation and a business crisis. Board confidence, investor relations, team performance, operational continuity, and in some cases legal and regulatory exposure are all affected. The organization's response — how quickly it acts, how discreetly it moves, who it involves — determines whether the situation is resolved or whether it escalates into something far more damaging.
            </p>
            <p className="mt-3">
              This is why executive behavioral health advisory exists as a distinct practice: because the clinical decisions and the organizational decisions are inseparable, and managing them separately produces worse outcomes for everyone.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold mb-3">What Executive Behavioral Health Advisory Covers</h2>
            <ul className="space-y-2 mt-3">
              {[
                "Confidential clinical assessment and guidance for boards, HR and General Counsel",
                "Crisis response coordination and situation management",
                "Independent executive treatment placement through a vetted National Clinical Network",
                "Executive intervention coordination",
                "Transport and clinical logistics",
                "Family and stakeholder support",
                "Leadership recovery and return-to-work planning",
                "Organizational communication and continuity planning",
                "Proactive readiness planning before a crisis emerges",
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <span className="text-[#c9a84c] mt-1 flex-shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#0a1628] border border-[#c9a84c]/20 rounded-xl p-6">
            <h2 className="text-white text-lg font-bold mb-3">How C-Safe Approaches Executive Behavioral Health</h2>
            <p>
              C-Safe Wellness Group operates as an independent clinical advisor to organizations — not as a treatment provider, not as a staffing firm, not as an EAP. We sit alongside boards, HR leaders and General Counsel during difficult situations and provide the clinical expertise, organizational judgment and operational infrastructure to navigate them correctly.
            </p>
            <p className="mt-3">
              Information is handled discreetly and shared only as authorized or as required for safety, clinical coordination or applicable legal obligations. Initial inquiries receive a response within 24 hours. C-Safe is not an emergency service — call <a href="tel:911" className="text-[#c9a84c]">911</a> or <a href="tel:988" className="text-[#c9a84c]">988</a> when immediate safety is at risk.
            </p>
          </div>
        </div>
      </article>

      <section className="py-12 px-6 bg-[#0a1628]">
        <div className="max-w-3xl mx-auto">
          <p className="text-slate-500 text-xs font-semibold uppercase tracking-widest mb-5">Related Questions</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {[
              { href: "/faq/are-eaps-enough-for-executives", label: "Are EAPs enough for executives?" },
              { href: "/faq/when-should-board-get-involved", label: "When should a board get involved in an executive crisis?" },
              { href: "/faq/hr-executive-drinking-problem", label: "What should HR do if an executive has a drinking problem?" },
              { href: "/faq/executive-intervention-confidentiality", label: "How do you protect confidentiality during an executive intervention?" },
            ].map(({ href, label }) => (
              <a key={href} href={href} className="bg-[#0d1f3c] border border-[#1e3a5f] rounded-lg p-4 text-sm text-slate-300 hover:border-[#c9a84c]/40 hover:text-white transition-colors">
                {label} →
              </a>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/services" className="flex-1 text-center border border-[#c9a84c]/40 text-[#c9a84c] px-6 py-3 rounded font-semibold text-sm hover:border-[#c9a84c] transition-colors">View All Services</a>
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
