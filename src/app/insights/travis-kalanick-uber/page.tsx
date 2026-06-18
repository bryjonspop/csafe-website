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
        <Link href="/insights" className="inline-flex items-center gap-2 text-slate-500 text-sm hover:text-[#c9a84c] transition-colors mb-10">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Back to Insights
        </Link>

        <div className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-bold bg-[#c9a84c]/10 border border-[#c9a84c]/30 text-[#c9a84c] px-3 py-1 rounded-full uppercase tracking-wide">Case Study</span>
            <span className="text-slate-500 text-xs">Behavioral Breakdown & Culture · 5 min read</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5">
            Uber&apos;s &ldquo;Governance Gone Wild&rdquo;: How One CEO&apos;s Unraveling Triggered a $5.2B Loss and a Company-Wide Reckoning
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Travis Kalanick&apos;s breakdown didn&apos;t happen overnight. It unfolded in public, over months,
            while a board of sophisticated investors watched and waited — until they couldn&apos;t anymore.
          </p>
        </div>

        <div className="w-16 h-0.5 bg-[#c9a84c] mb-10" />

        <div className="prose prose-invert prose-slate max-w-none space-y-6 text-slate-300 leading-relaxed">
          <p>
            In June 2017, five of Uber&apos;s most powerful investors sent Travis Kalanick a letter demanding his
            immediate resignation. It wasn&apos;t the first sign of trouble — it was the last. By that point,
            Kalanick&apos;s erratic leadership had already cost Uber its reputation, triggered a federal investigation,
            and set in motion a cultural crisis that the company would spend years recovering from.
          </p>

          <p>
            Harvard Law School later published the Uber board crisis as a governance case study titled
            <em className="text-white"> &ldquo;Governance Gone Wild,&rdquo;</em> a designation that captures both the dysfunction at the
            top and the board&apos;s failure to intervene early enough to prevent cascading damage.
          </p>

          <h2 className="text-white text-xl font-bold pt-4">The Unraveling</h2>
          <p>
            Kalanick was already under pressure when his mother was killed in a boating accident in May 2017.
            The tragedy accelerated what had been a slow-motion leadership breakdown. In February of that year,
            he had been filmed berating one of Uber&apos;s own drivers — a video that went viral and prompted him
            to publicly admit he needed &ldquo;leadership help.&rdquo;
          </p>
          <p>
            What followed was a cascade: a former engineer published a blog post describing the company&apos;s
            toxic internal culture, the board commissioned an investigation, and one by one, senior executives
            began to resign. The dysfunction that had been internal became industry-defining news.
          </p>

          <h2 className="text-white text-xl font-bold pt-4">The Business Impact</h2>
          <ul className="space-y-2">
            <li>Kalanick resigned June 21, 2017 under pressure from <strong className="text-white">five major investors</strong></li>
            <li>Uber reported a <strong className="text-white">$5.2 billion single-quarter loss</strong> in the period following the IPO</li>
            <li>Uber&apos;s IPO in May 2019 opened at $42 — well below the expected $50+ — and continued to fall</li>
            <li>The company spent years rebuilding brand trust and executive credibility with institutional investors</li>
            <li>Multiple senior leaders departed, creating operational instability at critical growth stages</li>
          </ul>

          <h2 className="text-white text-xl font-bold pt-4">The Hidden Cost: Culture Becomes the Crisis</h2>
          <p>
            What makes the Uber case uniquely instructive is that Kalanick&apos;s personal behavioral breakdown
            didn&apos;t stay personal — it became organizational. The culture he modeled and permitted filtered
            down through every layer of the company. By the time the board intervened, they weren&apos;t just
            dealing with one leader&apos;s issues. They were dealing with a company-wide reckoning.
          </p>
          <p>
            This is one of the most underappreciated risks of unaddressed executive mental health: the leader
            sets the tone. When the person at the top is operating in a state of chronic stress, burnout,
            or unaddressed behavioral crisis, the organization absorbs it — and reflects it back.
          </p>

          <h2 className="text-white text-xl font-bold pt-4">What Should Have Happened</h2>
          <p>
            Kalanick himself acknowledged he needed help. He said so publicly, on camera, months before the
            board acted. What was missing wasn&apos;t awareness — it was a structured, confidential mechanism for
            getting a founder-CEO the right support without it becoming a public spectacle.
          </p>
          <p>
            A trusted, discreet advisor with clinical credibility could have opened that door early.
            Not to remove him — but to support him, protect the company, and give the board a legitimate
            framework for action. That conversation never happened. And the company paid for it for years.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-[#1e3a5f]">
          <p className="text-slate-600 text-xs font-semibold uppercase tracking-wide mb-3">Sources</p>
          <ul className="space-y-1 text-slate-600 text-xs">
            <li>BBC News — &quot;Uber CEO Travis Kalanick resigns&quot; (June 21, 2017)</li>
            <li>Reuters — Uber investor letter and board investigation (June 2017)</li>
            <li>The New York Times — Uber IPO coverage (Aug. 2019)</li>
            <li>Harvard Law School Forum on Corporate Governance — &quot;Governance Gone Wild&quot;</li>
          </ul>
        </div>

        <div className="mt-14 bg-[#0d1f3c] border border-[#c9a84c]/20 rounded-xl p-8 text-center">
          <p className="text-[#c9a84c] text-xs font-semibold uppercase tracking-widest mb-3">The Conversation Kalanick Never Had</p>
          <h3 className="text-white text-xl font-bold mb-3">C-Safe exists to make that conversation possible.</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-md mx-auto">
            Confidential. Clinical. Before the board has to act.
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
