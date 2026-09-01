import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Independent Executive Treatment Placement | C-Safe Wellness Group",
  description:
    "Access to a National Clinical Network of elite, vetted programs. Treatment placement based exclusively on clinical need, circumstances and privacy requirements — never on financial incentives.",
  alternates: {
    canonical: "https://www.csafeteam.com/executive-treatment-placement",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.csafeteam.com/" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.csafeteam.com/services" },
    { "@type": "ListItem", position: 3, name: "Executive Treatment Placement", item: "https://www.csafeteam.com/executive-treatment-placement" },
  ],
};

export default function ExecutiveTreatmentPlacementPage() {
  return (
    <div className="min-h-screen bg-[#0a1628] text-white font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <nav className="fixed top-0 w-full z-50 bg-[#0a1628]/95 backdrop-blur border-b border-[#1e3a5f]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img src="/csafe-logo.png" alt="C-Safe Wellness Group logo" className="w-10 h-10 object-contain" />
            <span className="text-xl font-bold tracking-tight text-white">C-Safe <span className="text-[#c9a84c]">Wellness Group</span></span>
          </a>
          <a href="/#contact" className="bg-[#c9a84c] text-[#0a1628] px-4 py-2 rounded font-semibold text-sm hover:bg-[#b8963f] transition-colors">
            Request a Confidential Call
          </a>
        </div>
      </nav>

      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-[#0a1628] via-[#0d1f3c] to-[#0a1628]">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-xs text-slate-500 mb-8">
            <ol className="flex items-center gap-2">
              <li><a href="/" className="hover:text-slate-300">Home</a></li>
              <li className="text-slate-700">/</li>
              <li><a href="/services" className="hover:text-slate-300">Services</a></li>
              <li className="text-slate-700">/</li>
              <li className="text-slate-400">Executive Treatment Placement</li>
            </ol>
          </nav>
          <div className="inline-block bg-[#c9a84c]/10 border border-[#c9a84c]/30 text-[#c9a84c] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            RESPOND — Stage 2
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Independent Executive Treatment Placement
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed max-w-3xl">
            Finding the right clinical program for a senior executive is not a task for a call center or a
            bed-finder. C-Safe provides independent, conflict-free placement through a National Clinical Network
            of elite, vetted programs — selected exclusively for clinical fit, not financial convenience.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#0d1f3c]">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="bg-[#0a1628] border border-[#c9a84c]/20 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">National Clinical Network</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              C-Safe maintains relationships with a carefully vetted network of clinical programs across the
              United States. We do not publicly list partner treatment centers.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Every recommendation is based on the executive's clinical needs, personal circumstances and
              privacy requirements. C-Safe does not accept referral fees, commissions or any form of
              compensation from treatment providers. Our guidance is independent by design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title: "Clinical Assessment", desc: "A thorough understanding of the executive's clinical picture before any recommendation is made." },
              { title: "Privacy-First Matching", desc: "Program selection accounts for the executive's privacy requirements, geographic preferences and circumstances." },
              { title: "Admissions Coordination", desc: "C-Safe handles admissions coordination directly, keeping the process outside public intake systems." },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-[#0a1628] border border-[#1e3a5f] rounded-lg p-6">
                <div className="w-8 h-0.5 bg-[#c9a84c] mb-4" />
                <h3 className="text-white font-bold mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-6 bg-[#0a1628]">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-6">
          <a href="/services" className="flex-1 bg-[#0d1f3c] border border-[#1e3a5f] rounded-lg p-6 hover:border-[#c9a84c]/40 transition-colors">
            <p className="text-[#c9a84c] text-xs font-semibold uppercase tracking-widest mb-2">Full Framework</p>
            <p className="text-white font-bold">The Executive Continuity Framework™</p>
            <p className="text-slate-400 text-sm mt-2">All services across Prepare, Respond and Recover.</p>
          </a>
          <a href="/executive-return-to-work" className="flex-1 bg-[#0d1f3c] border border-[#1e3a5f] rounded-lg p-6 hover:border-[#c9a84c]/40 transition-colors">
            <p className="text-[#c9a84c] text-xs font-semibold uppercase tracking-widest mb-2">What Comes Next</p>
            <p className="text-white font-bold">Return-to-Work Planning</p>
            <p className="text-slate-400 text-sm mt-2">Leadership recovery and reintegration after treatment.</p>
          </a>
          <a href="/#contact" className="flex-1 bg-[#c9a84c] rounded-lg p-6 hover:bg-[#b8963f] transition-colors">
            <p className="text-[#0a1628] text-xs font-semibold uppercase tracking-widest mb-2">Get Started</p>
            <p className="text-[#0a1628] font-bold">Request a Confidential Call</p>
            <p className="text-[#0a1628]/70 text-sm mt-2">Response within 24 hours. No names required.</p>
          </a>
        </div>
      </section>

      <footer className="bg-[#0a1628] border-t border-[#1e3a5f] py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-white font-bold">C-Safe <span className="text-[#c9a84c]">Wellness Group</span></span>
          <p className="text-slate-500 text-sm">&copy; {new Date().getFullYear()} C-Safe Wellness Group. All rights reserved.</p>
          <a href="/services" className="text-slate-400 text-sm hover:text-[#c9a84c] transition-colors">← All Services</a>
        </div>
      </footer>
    </div>
  );
}
