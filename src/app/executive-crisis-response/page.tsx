import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Executive Crisis Response & Advisory Services | C-Safe",
  description:
    "Real-time clinical and organizational guidance when an executive crisis is in motion. C-Safe advises CEOs, boards, HR and General Counsel with 24-hour responsiveness and full discretion.",
  alternates: {
    canonical: "https://www.csafeteam.com/executive-crisis-response",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.csafeteam.com/" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.csafeteam.com/services" },
    { "@type": "ListItem", position: 3, name: "Executive Crisis Response", item: "https://www.csafeteam.com/executive-crisis-response" },
  ],
};

export default function ExecutiveCrisisResponsePage() {
  return (
    <div className="min-h-screen bg-[#0a1628] text-white font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <nav className="fixed top-0 w-full z-50 bg-[#0a1628]/95 backdrop-blur border-b border-[#1e3a5f]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img src="/csafe-logo.png" alt="C-Safe Wellness Group logo" className="w-10 h-10 object-contain" />
            <span className="text-xl font-bold tracking-tight text-white">
              C-Safe <span className="text-[#c9a84c]">Wellness Group</span>
            </span>
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
              <li className="text-slate-400">Executive Crisis Response</li>
            </ol>
          </nav>
          <div className="inline-block bg-[#c9a84c]/10 border border-[#c9a84c]/30 text-[#c9a84c] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            RESPOND — Stage 2
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Executive Crisis Advisory & Response
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-3xl">
            When a senior leader is in crisis, the first hours determine everything. C-Safe provides real-time
            clinical and organizational guidance to CEOs, boards, Human Resources and General Counsel — so
            decisions are made with clarity, not panic.
          </p>
          <div className="bg-[#0d1f3c] border border-amber-700/30 rounded-lg p-5 max-w-2xl">
            <p className="text-slate-400 text-sm leading-relaxed">
              <span className="text-amber-400 font-semibold">Important:</span> C-Safe is not an emergency service.
              If someone is in immediate danger, call <a href="tel:911" className="text-[#c9a84c] font-semibold">911</a>.
              For a mental health or substance-use crisis, call or text <a href="tel:988" className="text-[#c9a84c] font-semibold">988</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#0d1f3c]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">What This Service Covers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { title: "Situation Assessment", desc: "Rapid clinical and organizational assessment of the situation — what is actually happening, what the risks are and what the appropriate response looks like." },
              { title: "Real-Time Advisory", desc: "Direct access to clinical advisory support as the situation develops. C-Safe guides decision-making for boards, HR and General Counsel under pressure." },
              { title: "Crisis Coordination", desc: "Coordination of clinical, logistical and organizational responses — keeping all stakeholders aligned and the process moving with appropriate urgency and discretion." },
              { title: "Executive Transport & Logistics", desc: "Discreet travel coordination for executives transitioning into clinical care, managed entirely outside company systems and public processes." },
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
            <p className="text-slate-400 text-sm mt-2">See all services across Prepare, Respond and Recover.</p>
          </a>
          <a href="/resources/first-48" className="flex-1 bg-[#0d1f3c] border border-[#1e3a5f] rounded-lg p-6 hover:border-[#c9a84c]/40 transition-colors">
            <p className="text-[#c9a84c] text-xs font-semibold uppercase tracking-widest mb-2">Free Resource</p>
            <p className="text-white font-bold">The First 48 Hours</p>
            <p className="text-slate-400 text-sm mt-2">What to do — and not do — in the hours that shape the outcome.</p>
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
