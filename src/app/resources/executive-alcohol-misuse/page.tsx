import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "High Performers Can Struggle Too | C-Safe Wellness Group",
  description:
    "Recognizing the hidden signs of executive alcohol misuse. Success does not eliminate vulnerability — and the warning signs are often visible long before the crisis becomes public.",
  openGraph: {
    title: "High Performers Can Struggle Too: Recognizing the Hidden Signs of Executive Alcohol Misuse",
    description:
      "Executives often meet deadlines and achieve goals while hiding problematic alcohol use for months — even years. Learn the warning signs and what organizations should do.",
    type: "article",
    url: "https://www.csafeteam.com/resources/executive-alcohol-misuse",
    siteName: "C-Safe Wellness Group",
  },
};

const WARNING_SIGNS = [
  "Increased irritability or emotional volatility",
  "Changes in attendance or meeting patterns",
  "Declining quality of decisions or judgment",
  "Emotional withdrawal from colleagues and team",
  "Inconsistent or unusual communication",
  "Attempts to conceal or minimize drinking behaviors",
];

const ORG_QUESTIONS = [
  "Do we have a confidential process for responding to executive behavioral health concerns?",
  "Are managers trained to recognize changes in performance and behavior?",
  "Have we established relationships with trusted behavioral health advisors before a crisis occurs?",
  "Would our leadership team know exactly what to do tomorrow if a senior executive needed help?",
];

export default function ExecutiveAlcoholMisusePage() {
  return (
    <div className="min-h-screen bg-[#0a1628] text-white font-sans">

      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a1628]/95 backdrop-blur border-b border-[#1e3a5f]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img src="/csafe-logo.png" alt="C-Safe Wellness Group" className="w-10 h-10 object-contain" />
            <span className="text-xl font-bold text-white">C-Safe <span className="text-[#c9a84c]">Wellness Group</span></span>
          </Link>
          <div className="hidden md:flex items-center gap-7 text-sm text-slate-300">
            <Link href="/#services" className="hover:text-[#c9a84c] transition-colors">Services</Link>
            <Link href="/team" className="hover:text-[#c9a84c] transition-colors">Our Team</Link>
            <Link href="/insights" className="hover:text-[#c9a84c] transition-colors">Insights</Link>
            <Link href="/resources" className="text-[#c9a84c] font-semibold">Resources</Link>
            <Link href="/assessment" className="hover:text-[#c9a84c] transition-colors">Fit Assessment</Link>
            <Link href="/#contact" className="bg-[#c9a84c] text-[#0a1628] px-4 py-2 rounded font-semibold hover:bg-[#b8963f] transition-colors">
              Request a Confidential Call
            </Link>
          </div>
        </div>
      </nav>

      <article className="max-w-3xl mx-auto px-6 pt-36 pb-24">

        {/* Back */}
        <Link href="/resources" className="inline-flex items-center gap-2 text-slate-500 text-sm hover:text-[#c9a84c] transition-colors mb-10">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Resources
        </Link>

        {/* Header */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="text-xs font-bold bg-[#c9a84c]/10 border border-[#c9a84c]/30 text-[#c9a84c] px-3 py-1 rounded-full uppercase tracking-wide">
              Executive Wellness
            </span>
            <span className="text-slate-500 text-xs">Behavioral Health &amp; Leadership · 4 min read</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5">
            High Performers Can Struggle Too:<br />
            <span className="text-[#c9a84c]">Recognizing the Hidden Signs of Executive Alcohol Misuse</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Success does not eliminate vulnerability. And because high-performing leaders continue to deliver
            results, problematic alcohol use can remain invisible — until it isn&apos;t.
          </p>
        </div>

        <div className="w-16 h-0.5 bg-[#c9a84c] mb-10" />

        {/* Body */}
        <div className="space-y-8 text-slate-300 leading-relaxed">

          <p>
            Executives often operate under extraordinary levels of pressure. Long hours, constant decision-making,
            public visibility, financial responsibility, and organizational accountability can create chronic stress
            that is not always visible to colleagues or family members.
          </p>

          <p>
            Because many high-performing professionals continue to meet deadlines and achieve business goals,
            problematic alcohol use can remain hidden for months or even years. The issue is frequently overlooked
            until it begins affecting judgment, relationships, health, or organizational performance.
          </p>

          {/* Warning signs */}
          <div className="bg-[#0d1f3c] border border-[#1e3a5f] rounded-xl p-8">
            <p className="text-[#c9a84c] text-xs font-semibold uppercase tracking-widest mb-3">Common Warning Signs</p>
            <h2 className="text-white text-xl font-bold mb-6">
              What to Watch For
            </h2>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              No single sign confirms a substance use disorder. But changes in behavior — especially combinations
              of the following — warrant thoughtful attention rather than immediate conclusions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {WARNING_SIGNS.map((sign) => (
                <div key={sign} className="flex items-start gap-3 bg-[#0a1628] border border-[#1e3a5f] rounded-lg px-4 py-3">
                  <span className="text-[#c9a84c] mt-0.5 text-xs font-bold shrink-0">▸</span>
                  <span className="text-slate-300 text-sm">{sign}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pull quote */}
          <blockquote className="border-l-4 border-[#c9a84c] pl-6 py-1">
            <p className="text-white text-lg font-semibold leading-snug italic">
              &ldquo;The issue is frequently overlooked until it begins affecting judgment, relationships,
              health, or organizational performance.&rdquo;
            </p>
          </blockquote>

          <p>
            Organizations should avoid approaching these situations from a disciplinary mindset alone. Early
            intervention, respectful communication, and access to qualified behavioral health professionals can
            significantly improve outcomes while preserving dignity and reducing organizational disruption.
          </p>

          {/* Barrier callout */}
          <div className="bg-[#0d1f3c] border border-[#73a0b1]/30 rounded-xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-1 bg-[#73a0b1] rounded-full shrink-0 self-stretch min-h-[2.5rem]" />
              <div>
                <p className="text-white font-semibold mb-2">Why Executives Don&apos;t Ask for Help</p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Executives often delay seeking help because of concerns about confidentiality, reputation,
                  or career impact. Providing a trusted, discreet pathway to assessment and support can remove
                  many of those barriers — and significantly change the outcome.
                </p>
              </div>
            </div>
          </div>

          <p>
            The strongest organizations recognize that leadership resilience includes knowing when to ask for
            help. Addressing concerns early often protects not only the individual but also the employees,
            clients, and communities that depend on effective leadership.
          </p>

          {/* Org questions */}
          <div className="bg-[#0d1f3c] border border-[#c9a84c]/30 rounded-xl p-8">
            <p className="text-[#c9a84c] text-xs font-semibold uppercase tracking-widest mb-3">Organizational Readiness</p>
            <h2 className="text-white text-xl font-bold mb-6">
              Questions Every Organization Should Consider
            </h2>
            <div className="space-y-4">
              {ORG_QUESTIONS.map((q, i) => (
                <div key={q} className="flex items-start gap-4 bg-[#0a1628] border border-[#1e3a5f] rounded-lg px-5 py-4">
                  <span className="text-[#c9a84c] font-bold text-base min-w-[1.5rem] mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-slate-300 text-sm leading-relaxed">{q}</p>
                </div>
              ))}
            </div>
          </div>

          <p>
            Organizations that prepare before a crisis are better positioned to protect their people, maintain
            business continuity, and foster a culture where seeking help is viewed as a strength rather than
            a liability.
          </p>

          {/* C-Safe close */}
          <div className="bg-[#0a1628] border border-[#1e3a5f] rounded-xl p-8 border-l-4 border-l-[#c9a84c]">
            <p className="text-white font-semibold mb-2">How C-Safe Can Help</p>
            <p className="text-slate-400 text-sm leading-relaxed">
              C-Safe Wellness Group partners with organizations to develop proactive behavioral health strategies,
              confidential consultation processes, and executive support services that strengthen both leaders
              and the organizations they serve. Our 24-hour response model, retainer structure, and strict
              privacy architecture are built specifically for the complexity of C-suite situations.
            </p>
          </div>

        </div>

        {/* Divider */}
        <div className="w-16 h-0.5 bg-[#1e3a5f] my-14" />

        {/* CTA */}
        <div className="text-center">
          <p className="text-[#c9a84c] text-xs font-semibold uppercase tracking-widest mb-4">C-Safe Wellness Group</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Does your organization have a plan<br />
            <span className="text-[#c9a84c]">before this situation arrives?</span>
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-md mx-auto">
            A 30-minute confidential call with C-Safe identifies your gaps and puts the right infrastructure
            in place — before you need it.
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-[#c9a84c] text-[#0a1628] px-10 py-4 rounded font-bold text-base hover:bg-[#b8963f] transition-colors"
          >
            Request a Confidential Call
          </Link>
        </div>

      </article>

      {/* Footer */}
      <footer className="bg-[#0a1628] border-t border-[#1e3a5f] py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src="/csafe-logo.png" alt="" className="w-7 h-7 object-contain" />
            <span className="text-white font-bold">C-Safe <span className="text-[#c9a84c]">Wellness Group</span></span>
          </div>
          <p className="text-slate-500 text-sm text-center">
            This article is for informational purposes only and does not constitute clinical, legal, or compliance advice.
            &copy; 2026 C-Safe Wellness Group.
          </p>
          <div className="flex gap-6 text-slate-500 text-sm">
            <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
            <Link href="/resources" className="hover:text-slate-300 transition-colors">Resources</Link>
            <Link href="/#contact" className="hover:text-slate-300 transition-colors">Contact</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
