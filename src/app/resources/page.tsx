import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources | C-Safe Wellness Group",
  description:
    "Guides, articles, and tools for HR leaders, boards, and executive teams — covering executive behavioral health, crisis response, and proactive wellness strategy.",
};

const RESOURCES = [
  {
    href: "/resources/the-drink-that-came-with-the-job",
    category: "Sales Culture & Behavioral Health",
    tag: "Free Guide",
    readTime: "12 min read",
    title: "The Drink That Came With the Job",
    excerpt:
      "You were in the suite. The stadium. The client dinner that ran until midnight. The drink in your hand was not a choice — it was part of the job description. A clear-eyed guide to sales culture, high-risk environments, and the addiction nobody saw coming.",
    highlight: "New",
  },
  {
    href: "/resources/the-silence",
    category: "Executive Wellness & Leadership",
    tag: "Free Guide",
    readTime: "10 min read",
    title: "The Silence Is Costing You More Than the Problem",
    excerpt:
      "The same instinct that built your career — handle it yourself, show no weakness, stay in control — is the instinct most likely to end it. A candid look at why leaders refuse to ask for help, and what that silence destroys at home and at work.",
    highlight: "New",
  },
  {
    href: "/resources/questions-families-forget",
    category: "Treatment & Placement",
    tag: "Free Guide",
    readTime: "12 min read",
    title: "The Questions Every Family Forgets to Ask",
    excerpt:
      "Most families make the most important decision of their lives in the worst possible moment. Treatment centers know this — and many count on it. These are the 13 questions that separate a life-changing placement from a costly mistake.",
    highlight: "New",
  },
  {
    href: "/resources/executive-alcohol-misuse",
    category: "Behavioral Health & Leadership",
    tag: "Executive Wellness",
    readTime: "4 min read",
    title: "High Performers Can Struggle Too: Recognizing the Hidden Signs of Executive Alcohol Misuse",
    excerpt:
      "Success does not eliminate vulnerability. Because high-performing executives continue to meet goals, problematic alcohol use can remain hidden for months — even years. Learn the warning signs and what organizations should do.",
    highlight: null,
  },
  {
    href: "/resources/first-48",
    category: "Crisis Response",
    tag: "Free Guide",
    readTime: "15 min read",
    title: "The First 48 Hours: Executive Crisis Preparedness Guide",
    excerpt:
      "Organizations prepare for cyberattacks and lawsuits. Most have no plan when a senior leader faces a personal crisis. The first 48 hours often determine whether the situation stays manageable — or becomes a reputational event.",
    highlight: null,
  },
];

export default function ResourcesPage() {
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

      {/* Header */}
      <section className="pt-36 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#c9a84c] text-xs font-semibold uppercase tracking-widest mb-4">C-Safe Resources</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Practical Guides for<br />
            <span className="text-[#c9a84c]">Organizations That Lead.</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
            Tools, frameworks, and articles for HR leaders, general counsel, boards, and executive teams —
            covering crisis preparedness, behavioral health strategy, and proactive leadership wellness.
          </p>
        </div>
      </section>

      {/* Resources list */}
      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          {RESOURCES.map((resource) => (
            <Link key={resource.href} href={resource.href} className="block group">
              <article className="bg-[#0d1f3c] border border-[#1e3a5f] rounded-xl p-8 hover:border-[#c9a84c]/40 transition-all duration-300">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-xs font-bold bg-[#c9a84c]/10 border border-[#c9a84c]/30 text-[#c9a84c] px-3 py-1 rounded-full uppercase tracking-wide">
                    {resource.tag}
                  </span>
                  {resource.highlight && (
                    <span className="text-xs font-bold bg-emerald-950 border border-emerald-800 text-emerald-400 px-3 py-1 rounded-full uppercase tracking-wide">
                      {resource.highlight}
                    </span>
                  )}
                  <span className="text-slate-600 text-xs">{resource.category}</span>
                  <span className="text-slate-600 text-xs ml-auto">{resource.readTime}</span>
                </div>
                <h2 className="text-white text-xl font-bold leading-snug mb-3 group-hover:text-[#c9a84c] transition-colors">
                  {resource.title}
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{resource.excerpt}</p>
                <div className="flex items-center gap-2 text-[#c9a84c] text-sm font-semibold">
                  Read now
                  <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto mt-16 bg-[#0d1f3c] border border-[#c9a84c]/20 rounded-xl p-10 text-center">
          <p className="text-[#c9a84c] text-xs font-semibold uppercase tracking-widest mb-3">Don&apos;t Wait for the Crisis</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            The plan you build today<br />is the one that works when it matters.
          </h2>
          <p className="text-slate-400 leading-relaxed mb-8 max-w-xl mx-auto">
            C-Safe partners with organizations before the situation arrives — so the infrastructure is in place
            when you need it most. A 30-minute confidential call costs nothing.
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-[#c9a84c] text-[#0a1628] px-8 py-4 rounded font-bold text-lg hover:bg-[#b8963f] transition-colors"
          >
            Request a Confidential Call
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a1628] border-t border-[#1e3a5f] py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src="/csafe-logo.png" alt="" className="w-7 h-7 object-contain" />
            <span className="text-white font-bold">C-Safe <span className="text-[#c9a84c]">Wellness Group</span></span>
          </div>
          <p className="text-slate-500 text-sm">&copy; 2026 C-Safe Wellness Group. All rights reserved.</p>
          <div className="flex gap-6 text-slate-500 text-sm">
            <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
            <Link href="/insights" className="hover:text-slate-300 transition-colors">Insights</Link>
            <Link href="/#contact" className="hover:text-slate-300 transition-colors">Contact</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
