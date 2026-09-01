import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Executive Intervention Services | C-Safe Wellness Group",
  description:
    "Professionally coordinated executive interventions planned around the executive's circumstances, privacy requirements and the organization's needs — with treatment logistics ready before the conversation happens.",
  alternates: {
    canonical: "https://www.csafeteam.com/executive-intervention-services",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.csafeteam.com/" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.csafeteam.com/services" },
    { "@type": "ListItem", position: 3, name: "Executive Intervention Services", item: "https://www.csafeteam.com/executive-intervention-services" },
  ],
};

export default function ExecutiveInterventionPage() {
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
              <li className="text-slate-400">Executive Intervention Services</li>
            </ol>
          </nav>
          <div className="inline-block bg-[#c9a84c]/10 border border-[#c9a84c]/30 text-[#c9a84c] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            RESPOND — Stage 2
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Executive Intervention Coordination
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed max-w-3xl">
            A professionally coordinated executive intervention is a structured, carefully planned process —
            not a confrontation. C-Safe manages the clinical planning, participant preparation, logistics and
            treatment pathway so that when the moment comes, everything is in place.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#0d1f3c]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">How C-Safe Coordinates an Executive Intervention</h2>
          <div className="space-y-4">
            {[
              { step: "01", title: "Confidential Consultation", desc: "The process begins with a private conversation — no names required. C-Safe assesses the situation and helps determine whether an intervention is the appropriate next step." },
              { step: "02", title: "Clinical Planning", desc: "C-Safe works with a vetted intervention professional to develop a clinical plan tailored to the executive's circumstances, the organization's needs and available treatment options." },
              { step: "03", title: "Participant Preparation", desc: "Key participants — family members, colleagues or board representatives — are prepared carefully. Every voice in the room is considered in advance." },
              { step: "04", title: "Treatment Pathway Ready", desc: "Before the intervention happens, the treatment placement is confirmed. If the executive agrees to care, the path forward is already arranged — no delay, no scrambling." },
              { step: "05", title: "Logistics & Transport", desc: "C-Safe coordinates all logistics discreetly, including travel arrangements, so the transition into care is seamless and private." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex gap-6 bg-[#0a1628] border border-[#1e3a5f] rounded-lg p-6">
                <div className="text-[#c9a84c] font-bold text-2xl min-w-[3rem]">{step}</div>
                <div>
                  <h3 className="text-white font-bold mb-1">{title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                </div>
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
          <a href="/executive-treatment-placement" className="flex-1 bg-[#0d1f3c] border border-[#1e3a5f] rounded-lg p-6 hover:border-[#c9a84c]/40 transition-colors">
            <p className="text-[#c9a84c] text-xs font-semibold uppercase tracking-widest mb-2">Related Service</p>
            <p className="text-white font-bold">Executive Treatment Placement</p>
            <p className="text-slate-400 text-sm mt-2">Independent placement via our National Clinical Network.</p>
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
