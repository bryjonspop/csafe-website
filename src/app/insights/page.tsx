import Link from "next/link";

const ARTICLES = [
  {
    slug: "adam-neumann-wework",
    category: "Mental Health & Leadership",
    date: "June 2026",
    title: "From $47 Billion to Bankruptcy: What WeWork's Collapse Reveals About Unchecked Executive Behavior",
    excerpt:
      "Adam Neumann's erratic decision-making, documented substance use, and behavioral breakdown didn't just cost him his job — they cost investors billions and 2,400 employees their livelihoods. The warning signs were visible long before the crisis became public.",
    tag: "Case Study",
    readTime: "5 min read",
  },
  {
    slug: "travis-kalanick-uber",
    category: "Behavioral Breakdown & Culture",
    date: "June 2026",
    title: "Uber's 'Governance Gone Wild': How One CEO's Unraveling Triggered a $5.2B Loss and a Company-Wide Reckoning",
    excerpt:
      "Travis Kalanick's public meltdowns, erratic behavior following personal tragedy, and the toxic culture he enabled cost Uber years of momentum and billions of dollars. Harvard Law published the case as a governance failure. C-suite burnout rarely stays contained.",
    tag: "Case Study",
    readTime: "5 min read",
  },
  {
    slug: "john-delorean",
    category: "Addiction & Crisis",
    date: "June 2026",
    title: "Cocaine, Cameras, and Collapse: The Day John DeLorean Was Arrested and 2,500 People Lost Their Jobs",
    excerpt:
      "On October 19, 1982, John DeLorean was filmed accepting $24 million in cocaine in a desperate attempt to save his failing company. The factory closed the same day. The story is extreme — but the pattern of a leader in crisis making catastrophic decisions is not.",
    tag: "Case Study",
    readTime: "6 min read",
  },
];

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-[#0a1628] text-white font-sans">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a1628]/95 backdrop-blur border-b border-[#1e3a5f]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img src="/csafe-logo.png" alt="C-Safe Wellness Group" className="w-10 h-10 object-contain" />
            <span className="text-xl font-bold text-white">
              C-Safe <span className="text-[#c9a84c]">Wellness Group</span>
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-7 text-sm text-slate-300">
            <Link href="/#services" className="hover:text-[#c9a84c] transition-colors">Services</Link>
            <Link href="/team" className="hover:text-[#c9a84c] transition-colors">Our Team</Link>
            <Link href="/insights" className="text-[#c9a84c] font-semibold">Insights</Link>
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
          <p className="text-[#c9a84c] text-xs font-semibold uppercase tracking-widest mb-4">C-Safe Insights</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">
            When Leadership Fails,<br />
            <span className="text-[#c9a84c]">Everyone Pays the Price.</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
            Real cases. Real consequences. The stories companies don't put in their annual reports —
            and what they teach us about the cost of being unprepared.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          {ARTICLES.map((article, i) => (
            <Link key={article.slug} href={`/insights/${article.slug}`} className="block group">
              <article className="bg-[#0d1f3c] border border-[#1e3a5f] rounded-xl p-8 hover:border-[#c9a84c]/40 transition-all duration-300 hover:bg-[#0d1f3c]/80">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold bg-[#c9a84c]/10 border border-[#c9a84c]/30 text-[#c9a84c] px-3 py-1 rounded-full uppercase tracking-wide">
                    {article.tag}
                  </span>
                  <span className="text-slate-600 text-xs">{article.category}</span>
                  <span className="text-slate-600 text-xs ml-auto">{article.readTime}</span>
                </div>
                <h2 className="text-white text-xl font-bold leading-snug mb-3 group-hover:text-[#c9a84c] transition-colors">
                  {article.title}
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{article.excerpt}</p>
                <div className="flex items-center gap-2 text-[#c9a84c] text-sm font-semibold">
                  Read the full case
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
            These stories don&apos;t have to be yours.
          </h2>
          <p className="text-slate-400 leading-relaxed mb-8 max-w-xl mx-auto">
            C-Safe Wellness Group exists so that your organization has a plan, a partner, and a process —
            long before you need it. A 30-minute confidential call costs nothing.
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
          <p className="text-slate-500 text-sm">&copy; {new Date().getFullYear()} C-Safe Wellness Group. All rights reserved.</p>
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
