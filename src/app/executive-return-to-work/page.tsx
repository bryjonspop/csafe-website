import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Executive Return-to-Work & Leadership Recovery Planning | C-Safe",
  description:
    "Structured leadership recovery and return-to-work planning for executives after treatment — covering phased reintegration, clinical monitoring, stakeholder communication and organizational continuity.",
  alternates: {
    canonical: "https://www.csafeteam.com/executive-return-to-work",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.csafeteam.com/" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.csafeteam.com/services" },
    { "@type": "ListItem", position: 3, name: "Executive Return-to-Work Planning", item: "https://www.csafeteam.com/executive-return-to-work" },
  ],
};

export default function ExecutiveReturnToWorkPage() {
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
              <li className="text-slate-400">Executive Return-to-Work Planning</li>
            </ol>
          </nav>
          <div className="inline-block bg-[#4279ae]/20 border border-[#4279ae]/30 text-[#4279ae] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            RECOVER — Stage 3
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Leadership Recovery & Return-to-Work Planning
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed max-w-3xl">
            The period after treatment is where many organizations lose the progress they worked so hard to
            protect. C-Safe provides a structured, clinical approach to leadership reintegration — covering
            the executive, the team and the organization simultaneously.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#0d1f3c]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">The Return-to-Work Framework</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { title: "Phased Reintegration Plan", desc: "A structured timeline for the executive's return — balancing clinical readiness, organizational needs and leadership expectations without rushing the process." },
              { title: "Clinical Monitoring & Aftercare", desc: "Ongoing connection to appropriate clinical support throughout the reintegration period, ensuring continuity of care and early identification of emerging concerns." },
              { title: "Organizational Communication Guidance", desc: "Internal messaging frameworks for the leadership team, board and key stakeholders — maintaining confidence and continuity without unnecessary disclosure." },
              { title: "Family Reintegration Support", desc: "Coordination and guidance for family members navigating the recovery period alongside the executive, including connection to appropriate ongoing care." },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-[#0a1628] border border-[#1e3a5f] rounded-lg p-6">
                <div className="w-8 h-0.5 bg-[#4279ae] mb-4" />
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
          <a href="/executive-family-support" className="flex-1 bg-[#0d1f3c] border border-[#1e3a5f] rounded-lg p-6 hover:border-[#c9a84c]/40 transition-colors">
            <p className="text-[#c9a84c] text-xs font-semibold uppercase tracking-widest mb-2">Related Service</p>
            <p className="text-white font-bold">Family & Stakeholder Support</p>
            <p className="text-slate-400 text-sm mt-2">Support for the people around the executive.</p>
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
