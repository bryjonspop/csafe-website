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
            <span className="text-slate-500 text-xs">Addiction & Crisis · 6 min read</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5">
            Cocaine, Cameras, and Collapse: The Day John DeLorean Was Arrested and 2,500 People Lost Their Jobs
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            October 19, 1982. A hotel room in Los Angeles. A founder in crisis making the most
            catastrophic decision of his life — on camera. By nightfall, his company was finished.
          </p>
        </div>

        <div className="w-16 h-0.5 bg-[#c9a84c] mb-10" />

        <div className="prose prose-invert prose-slate max-w-none space-y-6 text-slate-300 leading-relaxed">
          <p>
            By the fall of 1982, John DeLorean had already built and lost one of the most extraordinary careers
            in American automotive history. The man who had created the Pontiac GTO and the Firebird — one
            of the most celebrated engineers of his generation — had staked everything on a single bet:
            his own car company, built in Belfast, Northern Ireland, on the strength of his name and vision alone.
          </p>
          <p>
            The DeLorean Motor Company was already insolvent by the time federal agents set up their sting.
            It owed <strong className="text-white">$17 million</strong> to creditors. The Belfast factory was days from shutdown.
            DeLorean, desperate and out of options, had agreed to participate in a cocaine trafficking operation —
            a <strong className="text-white">$24 million deal</strong> he believed would save the company.
          </p>
          <p>
            He was filmed accepting the drugs. The arrest was made the same day.
          </p>

          <h2 className="text-white text-xl font-bold pt-4">The Immediate Collapse</h2>
          <ul className="space-y-2">
            <li>The Belfast factory closed on <strong className="text-white">October 19, 1982</strong> — the day of the arrest</li>
            <li><strong className="text-white">2,500 workers</strong> lost their jobs immediately</li>
            <li>Creditors filed <strong className="text-white">$100 million in claims</strong> against the company</li>
            <li>DeLorean Motor Company was liquidated; it never produced another car</li>
            <li>DeLorean was acquitted in 1984 on entrapment grounds — but the company was already gone</li>
          </ul>

          <h2 className="text-white text-xl font-bold pt-4">A Leader in Crisis Making Irreversible Decisions</h2>
          <p>
            What makes the DeLorean case uniquely relevant to executive wellness is not the cocaine arrest
            itself — it is what it represents. Here was a founder who, under extreme financial pressure,
            psychological stress, and without any structured support system around him, made a decision
            that destroyed everything he had built.
          </p>
          <p>
            DeLorean was not, by any clinical definition, a chronic addict. He was a high-functioning executive
            who reached a breaking point and made a catastrophic decision in crisis — a decision that,
            with the right support and intervention, might never have happened.
          </p>
          <p>
            The pattern is instructive: isolation, mounting pressure, no trusted advisor with clinical perspective,
            no mechanism for early intervention. These are the exact conditions that turn a manageable situation
            into an irreversible one.
          </p>

          <h2 className="text-white text-xl font-bold pt-4">The Broader Pattern</h2>
          <p>
            The DeLorean story is dramatic — most are not. Most executive crises don&apos;t end with an arrest on
            federal television. They end quietly: with a forced resignation, a hushed departure, a company
            that loses its best leader and never quite recovers. The common thread is not the spectacle.
            It is the absence of early intervention.
          </p>
          <p>
            Leaders in crisis rarely ask for help. They are surrounded by people who depend on them,
            report to them, or profit from their continued presence. There is no neutral, trusted,
            clinically informed voice in the room. That is the gap C-Safe Wellness Group was built to fill —
            and the reason that gap costs companies so much when it goes unfilled.
          </p>

          <h2 className="text-white text-xl font-bold pt-4">What This Means for Your Organization</h2>
          <p>
            You don&apos;t need a John DeLorean story to justify having a plan. You need a plan
            because <em>his</em> story — and Adam Neumann&apos;s, and Travis Kalanick&apos;s — tells you that
            high-performing leaders are not immune to crisis. They are, in many ways, more vulnerable to it.
            The pressure is higher. The stakes are larger. The support systems are thinner.
          </p>
          <p>
            The best time to build a relationship with a trusted clinical advisor is before any of this happens.
            Because when it does — and for many organizations, it will — you need to be able to make
            the right call immediately, quietly, and with confidence.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-[#1e3a5f]">
          <p className="text-slate-600 text-xs font-semibold uppercase tracking-wide mb-3">Sources</p>
          <ul className="space-y-1 text-slate-600 text-xs">
            <li>The New York Times — &quot;DeLorean Arrested in Cocaine Plot&quot; (Oct. 20, 1982)</li>
            <li>History.com — The DeLorean Sting Operation</li>
            <li>UPI Archives — DeLorean Motor Company liquidation coverage (1982–1984)</li>
          </ul>
        </div>

        <div className="mt-14 bg-[#0d1f3c] border border-[#c9a84c]/20 rounded-xl p-8 text-center">
          <p className="text-[#c9a84c] text-xs font-semibold uppercase tracking-widest mb-3">The Right Call, Made Early</p>
          <h3 className="text-white text-xl font-bold mb-3">C-Safe Wellness Group is that trusted voice in the room.</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-md mx-auto">
            Clinical expertise. Executive discretion. Available before you need us — and ready when you do.
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
