import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Executive Family & Stakeholder Support | C-Safe Wellness Group",
  description:
    "Structured clinical support for families and key stakeholders navigating an executive behavioral health crisis — with clear communication frameworks and confidential guidance throughout.",
  alternates: {
    canonical: "https://www.csafeteam.com/executive-family-support",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.csafeteam.com/" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.csafeteam.com/services" },
    { "@type": "ListItem", position: 3, name: "Executive Family Support", item: "https://www.csafeteam.com/executive-family-support" },
  ],
};

export default function ExecutiveFamilySupportPage() {
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
              <li className="text-slate-400">Family & Stakeholder Support</li>
            </ol>
          </nav>
          <div className="inline-block bg-[#c9a84c]/10 border border-[#c9a84c]/30 text-[#c9a84c] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            RESPOND & RECOVER
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Executive Family & Stakeholder Support
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed max-w-3xl">
            An executive crisis doesn't affect only one person. Families, board members and key stakeholders
            are often navigating enormous stress with little guidance. C-Safe provides structured support and
            clear communication frameworks for everyone in the circle — not just the executive.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#0d1f3c]">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-bold text-white mb-5">Family Support</h2>
              <div className="space-y-4">
                {[
                  "Clinical guidance for family members navigating an active crisis",
                  "Communication support during the treatment period",
                  "Family reintegration planning as the executive returns to work",
                  "Connection to appropriate ongoing clinical care for family members",
                ].map((item) => (
                  <div key={item} className="flex gap-3 items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] mt-2 flex-shrink-0" />
                    <p className="text-slate-300 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold text-white mb-5">Stakeholder Support</h2>
              <div className="space-y-4">
                {[
                  "Guidance for board liaisons, HR leaders and General Counsel",
                  "Communication frameworks for internal and external messaging",
                  "Decision support during active crisis situations",
                  "Organizational continuity planning throughout the process",
                ].map((item) => (
                  <div key={item} className="flex gap-3 items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] mt-2 flex-shrink-0" />
                    <p className="text-slate-300 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
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
            <p className="text-[#c9a84c] text-xs font-semibold uppercase tracking-widest mb-2">Related Service</p>
            <p className="text-white font-bold">Return-to-Work Planning</p>
            <p className="text-slate-400 text-sm mt-2">Leadership recovery and reintegration planning.</p>
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
