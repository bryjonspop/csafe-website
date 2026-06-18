import Link from "next/link";

export default function Article() {
  return (
    <div className="min-h-screen bg-[#0a1628] text-white font-sans">
      <nav className="fixed top-0 w-full z-50 bg-[#0a1628]/95 backdrop-blur border-b border-[#1e3a5f]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img src="/csafe-logo.png" alt="C-Safe Wellness Group" className="w-10 h-10 object-contain" />
            <span className="text-xl font-bold text-white">C-Safe <span className="text-[#c9a84c]">Wellness Group</span></span>
          </Link>
          <div className="hidden md:flex items-center gap-7 text-sm text-slate-300">
            <Link href="/#services" className="hover:text-[#c9a84c] transition-colors">Services</Link>
            <Link href="/team" className="hover:text-[#c9a84c] transition-colors">Our Team</Link>
            <Link href="/insights" className="text-[#c9a84c] font-semibold">Insights</Link>
            <Link href="/#contact" className="bg-[#c9a84c] text-[#0a1628] px-4 py-2 rounded font-semibold hover:bg-[#b8963f] transition-colors">Request a Confidential Call</Link>
          </div>
        </div>
      </nav>

      <article className="max-w-3xl mx-auto px-6 pt-36 pb-24">
        {/* Back */}
        <Link href="/insights" className="inline-flex items-center gap-2 text-slate-500 text-sm hover:text-[#c9a84c] transition-colors mb-10">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Back to Insights
        </Link>

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-bold bg-[#c9a84c]/10 border border-[#c9a84c]/30 text-[#c9a84c] px-3 py-1 rounded-full uppercase tracking-wide">Case Study</span>
            <span className="text-slate-500 text-xs">Mental Health & Leadership · 5 min read</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5">
            From $47 Billion to Bankruptcy: What WeWork&apos;s Collapse Reveals About Unchecked Executive Behavior
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            The warning signs were there — documented, reported, and largely ignored.
            By the time the board acted, billions were gone and thousands of people had lost their jobs.
          </p>
        </div>

        <div className="w-16 h-0.5 bg-[#c9a84c] mb-10" />

        {/* Body */}
        <div className="prose prose-invert prose-slate max-w-none space-y-6 text-slate-300 leading-relaxed">
          <p>
            In September 2019, WeWork was preparing for what was expected to be one of the largest IPOs in history.
            The company had been valued at <strong className="text-white">$47 billion</strong> just months earlier. Within six weeks,
            that number had collapsed to $8 billion. The IPO was pulled. The CEO was forced out.
            And <strong className="text-white">2,400 employees</strong> were laid off.
          </p>

          <p>
            What happened? The short answer is that the financial markets finally saw what insiders had known for years:
            WeWork&apos;s founder and CEO, Adam Neumann, was operating in a state of prolonged behavioral and psychological
            instability — and the company had been built around enabling it.
          </p>

          <h2 className="text-white text-xl font-bold pt-4">The Documented Pattern</h2>
          <p>
            Reporting by <em>The Wall Street Journal</em> and <em>The New York Times</em> detailed a pattern that, in retrospect,
            reads like a clinical textbook on untreated executive dysfunction. Neumann reportedly smoked marijuana on a
            private jet traveling internationally — a detail that made headlines not because of the substance itself,
            but because of what it revealed: a CEO who believed the rules of the world did not apply to him.
          </p>
          <p>
            Beyond substance use, Neumann&apos;s behavior inside the company was characterized by impulsivity, grandiosity,
            and an inability to maintain consistent executive judgment. He reportedly fired employees on a whim,
            made billion-dollar decisions without board input, and cultivated a culture of fear that went unchallenged
            for years. Former employees described the environment as messianic and unstable.
          </p>

          <h2 className="text-white text-xl font-bold pt-4">What It Cost</h2>
          <ul className="space-y-2">
            <li>WeWork&apos;s valuation dropped from <strong className="text-white">$47 billion to $8 billion in 42 days</strong></li>
            <li>The IPO was pulled entirely after the S-1 filing exposed the company&apos;s financial structure</li>
            <li><strong className="text-white">2,400 employees</strong> were laid off within weeks of Neumann&apos;s departure</li>
            <li>SoftBank — WeWork&apos;s primary backer — wrote down billions in losses</li>
            <li>WeWork filed for <strong className="text-white">Chapter 11 bankruptcy in November 2023</strong>, with stock trading near 84 cents</li>
          </ul>

          <h2 className="text-white text-xl font-bold pt-4">What the Board Got Wrong</h2>
          <p>
            The WeWork board had access to the same information the public eventually saw — and they waited.
            There was no framework for addressing a founder-CEO whose behavior had become a material business risk.
            There was no protocol for confidential intervention. There was no outside advisory partner who could
            have raised a flag early, quietly, and with clinical credibility.
          </p>
          <p>
            By the time they acted, the company was in freefall. The intervention that should have happened in
            2017 happened in 2019 — and by then, the damage was irreversible.
          </p>

          <h2 className="text-white text-xl font-bold pt-4">The C-Safe Lens</h2>
          <p>
            The WeWork story is not primarily a story about bad strategy or a flawed business model.
            It is a story about what happens when a key leader&apos;s mental and behavioral health goes unaddressed —
            and when an organization has no confidential, clinical mechanism to intervene before a private
            problem becomes a public catastrophe.
          </p>
          <p>
            The companies that avoid these outcomes are the ones that build relationships with trusted advisors
            before they need them. They have a plan. They have a protocol. And when a situation develops,
            they are not making decisions in a vacuum at 2am — they are calling a partner who has been
            in the room before.
          </p>
        </div>

        {/* Sources */}
        <div className="mt-12 pt-8 border-t border-[#1e3a5f]">
          <p className="text-slate-600 text-xs font-semibold uppercase tracking-wide mb-3">Sources</p>
          <ul className="space-y-1 text-slate-600 text-xs">
            <li>The Wall Street Journal — &quot;The Money Men Who Enabled Adam Neumann&quot; (Sept. 2019)</li>
            <li>The New York Times — &quot;WeWork Tries to Repair its Damage&quot; (Nov. 2, 2019)</li>
            <li>Forbes — &quot;WeWork Files for Bankruptcy&quot; (Nov. 2023)</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-14 bg-[#0d1f3c] border border-[#c9a84c]/20 rounded-xl p-8 text-center">
          <p className="text-[#c9a84c] text-xs font-semibold uppercase tracking-widest mb-3">Your Organization Doesn&apos;t Have to Learn the Hard Way</p>
          <h3 className="text-white text-xl font-bold mb-3">C-Safe Wellness Group is the call you make before the crisis.</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-md mx-auto">
            Confidential advisory for organizations that take leadership continuity seriously.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/#contact" className="bg-[#c9a84c] text-[#0a1628] px-6 py-3 rounded font-bold hover:bg-[#b8963f] transition-colors">
              Request a Confidential Call
            </Link>
            <Link href="/insights" className="border border-[#1e3a5f] text-slate-400 px-6 py-3 rounded font-semibold hover:border-[#c9a84c]/40 hover:text-white transition-colors">
              Read More Cases
            </Link>
          </div>
        </div>
      </article>

      <footer className="bg-[#0a1628] border-t border-[#1e3a5f] py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src="/csafe-logo.png" alt="" className="w-7 h-7 object-contain" />
            <span className="text-white font-bold">C-Safe <span className="text-[#c9a84c]">Wellness Group</span></span>
          </div>
          <p className="text-slate-500 text-sm">&copy; {new Date().getFullYear()} C-Safe Wellness Group.</p>
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
