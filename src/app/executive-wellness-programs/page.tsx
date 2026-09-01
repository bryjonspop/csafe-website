import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Executive Wellness Programs & Preventive Leadership Wellness | C-Safe",
  description:
    "A curated 12-month preventive executive wellness program designed to reduce burnout, build team cohesion and create a culture where senior leader wellbeing is treated as a business asset.",
  alternates: {
    canonical: "https://www.csafeteam.com/executive-wellness-programs",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.csafeteam.com/" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.csafeteam.com/services" },
    { "@type": "ListItem", position: 3, name: "Executive Wellness Programs", item: "https://www.csafeteam.com/executive-wellness-programs" },
  ],
};

export default function ExecutiveWellnessProgramsPage() {
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
              <li className="text-slate-400">Executive Wellness Programs</li>
            </ol>
          </nav>
          <div className="inline-block bg-[#73a0b1]/20 border border-[#73a0b1]/30 text-[#73a0b1] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            PREPARE — Stage 1
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Preventive Executive Wellness Programming
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed max-w-3xl">
            The best time to invest in executive wellness is before a crisis emerges. C-Safe's preventive
            programming builds the culture, connection and resilience that reduce burnout — and create an
            environment where senior leaders are far less likely to reach a breaking point.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#0d1f3c]">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-[#0a1628] border border-[#c9a84c]/20 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">The 12-Month Leadership Wellness Calendar</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              C-Safe's flagship wellness program delivers a curated monthly experience to your leadership team —
              fully managed, fully handled, from logistics to facilitation. Every month is different. Every
              month is intentional.
            </p>
            <p className="text-slate-400 leading-relaxed mb-6">
              From breathwork and mindfulness to private chef experiences and signature team events, the
              calendar is designed to build real connection, reduce chronic stress and make wellness
              a cultural expectation at the top — not a one-time perk.
            </p>
            <a href="/executive-wellness-calendar" className="inline-flex items-center gap-2 text-[#c9a84c] font-semibold text-sm hover:underline">
              View the full 12-month calendar →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title: "Fully Managed", desc: "C-Safe handles all logistics, vendor coordination and scheduling — no work required from your team beyond showing up." },
              { title: "Customized to Your Team", desc: "Programming is tailored to your company's culture, team size and calendar. No off-the-shelf packages." },
              { title: "Standalone or Retainer Add-On", desc: "Available as a standalone program or as part of a full C-Safe Wellness Group advisory retainer." },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-[#0a1628] border border-[#1e3a5f] rounded-lg p-6">
                <div className="w-8 h-0.5 bg-[#73a0b1] mb-4" />
                <h3 className="text-white font-bold mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-6 bg-[#0a1628]">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-6">
          <a href="/executive-wellness-calendar" className="flex-1 bg-[#0d1f3c] border border-[#1e3a5f] rounded-lg p-6 hover:border-[#c9a84c]/40 transition-colors">
            <p className="text-[#c9a84c] text-xs font-semibold uppercase tracking-widest mb-2">Sample Calendar</p>
            <p className="text-white font-bold">View the Full 12-Month Calendar</p>
            <p className="text-slate-400 text-sm mt-2">See every month's event and description.</p>
          </a>
          <a href="/services" className="flex-1 bg-[#0d1f3c] border border-[#1e3a5f] rounded-lg p-6 hover:border-[#c9a84c]/40 transition-colors">
            <p className="text-[#c9a84c] text-xs font-semibold uppercase tracking-widest mb-2">Full Framework</p>
            <p className="text-white font-bold">The Executive Continuity Framework™</p>
            <p className="text-slate-400 text-sm mt-2">All services across Prepare, Respond and Recover.</p>
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
