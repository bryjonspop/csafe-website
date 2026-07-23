"use client";

import { useState } from "react";

export default function First48Page() {
  const [formData, setFormData] = useState({ name: "", company: "", email: "" });
  const [accessGranted, setAccessGranted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "6e13265e-35ec-4f41-8e8b-d00a931dd1f3",
          subject: "First 48 Guide — Access Request",
          name: formData.name,
          company: formData.company,
          email: formData.email,
        }),
      });
      if (res.ok) {
        setAccessGranted(true);
        setTimeout(() => {
          document.getElementById("guide-content")?.scrollIntoView({ behavior: "smooth" });
        }, 300);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a1628] text-white font-sans">

      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a1628]/95 backdrop-blur border-b border-[#1e3a5f]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img src="/csafe-logo.png" alt="C-Safe" className="w-9 h-9 object-contain" />
            <span className="text-lg font-bold tracking-tight text-white">
              C-Safe <span className="text-[#c9a84c]">Wellness Group</span>
            </span>
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="/#services" className="hover:text-[#c9a84c] transition-colors">Services</a>
            <a href="/insights" className="hover:text-[#c9a84c] transition-colors">Insights</a>
            <a href="/resources/first-48" className="text-[#c9a84c] font-semibold">The First 48</a>
            <a href="/assessment" className="hover:text-[#c9a84c] transition-colors">Fit Assessment</a>
            <a href="/#contact" className="bg-[#c9a84c] text-[#0a1628] px-4 py-2 rounded font-semibold hover:bg-[#b8963f] transition-colors">
              Confidential Call
            </a>
          </div>
          <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-[#0d1f3c] border-t border-[#1e3a5f] px-6 py-4 flex flex-col gap-4 text-sm">
            <a href="/#services" className="text-slate-300 hover:text-[#c9a84c]" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="/insights" className="text-slate-300 hover:text-[#c9a84c]" onClick={() => setMenuOpen(false)}>Insights</a>
            <a href="/resources/first-48" className="text-[#c9a84c] font-semibold" onClick={() => setMenuOpen(false)}>The First 48</a>
            <a href="/assessment" className="text-slate-300 hover:text-[#c9a84c]" onClick={() => setMenuOpen(false)}>Fit Assessment</a>
            <a href="/#contact" className="text-[#c9a84c] font-semibold" onClick={() => setMenuOpen(false)}>Request a Confidential Call</a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0d1f3c] to-[#0a1628]" />
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #c9a84c 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="relative max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#c9a84c]/10 border border-[#c9a84c]/30 text-[#c9a84c] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            Free Executive Resource · Confidential
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-5 text-white">
            The First 48 Hours
          </h1>
          <p className="text-xl text-[#c9a84c] font-semibold mb-4">Executive Crisis Preparedness Guide</p>
          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8">
            Organizations prepare for cyberattacks and lawsuits. Most have no plan when a senior leader faces
            a personal crisis. The first 48 hours often determine whether the situation stays manageable —
            or becomes a reputational event.
          </p>
          <div className="w-16 h-0.5 bg-[#c9a84c] mx-auto" />
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#0d1f3c] border-y border-[#1e3a5f] py-8 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { stat: "76%", label: "of senior leaders report significant burnout or stress" },
            { stat: "1 in 5", label: "executives will face a substance use concern in their career" },
            { stat: "$500B+", label: "lost annually to executive absenteeism and impairment" },
            { stat: "48 hrs", label: "the window that determines whether a crisis is managed or becomes a scandal" },
          ].map(({ stat, label }) => (
            <div key={stat} className="flex flex-col items-center gap-2">
              <span className="text-3xl font-bold text-[#c9a84c]">{stat}</span>
              <span className="text-slate-400 text-xs leading-snug">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* What's inside preview */}
      <section className="py-16 px-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-2">What&apos;s Inside</h2>
        <div className="w-10 h-0.5 bg-[#c9a84c] mb-6" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          {[
            "Why the first 48 hours are the highest-risk window",
            "The DUI playbook — clinical stabilization before legal exposure",
            "Complete privacy architecture — zero company paper trail",
            "Discreet, private DUI education options",
            "The 48-hour hour-by-hour response timeline",
            "What leadership should and should not do",
            "How C-Safe adds value at each stage",
            "A printable Executive Crisis Response Checklist",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3 bg-[#0d1f3c] border border-[#1e3a5f] rounded-lg px-4 py-3">
              <span className="text-[#c9a84c] mt-0.5 text-xs font-bold shrink-0">▸</span>
              <span className="text-slate-300 text-sm">{item}</span>
            </div>
          ))}
        </div>

        {/* Access gate */}
        {!accessGranted ? (
          <div className="bg-[#0d1f3c] border border-[#c9a84c]/30 rounded-xl p-8">
            <p className="text-[#c9a84c] text-xs font-semibold uppercase tracking-widest mb-2">Request Access</p>
            <h3 className="text-xl font-bold text-white mb-2">Read the full guide — free and confidential.</h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              No spam. No sales calls unless you ask. We protect your information with the same discretion
              we extend to every executive we serve.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                required
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[#0a1628] border border-[#1e3a5f] rounded px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-[#c9a84c] transition-colors"
              />
              <input
                required
                type="text"
                placeholder="Company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full bg-[#0a1628] border border-[#1e3a5f] rounded px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-[#c9a84c] transition-colors"
              />
              <input
                required
                type="email"
                placeholder="Work Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-[#0a1628] border border-[#1e3a5f] rounded px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-[#c9a84c] transition-colors"
              />
              {error && (
                <p className="text-red-400 text-xs">Something went wrong. Please try again.</p>
              )}
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-[#c9a84c] text-[#0a1628] py-3.5 rounded font-bold text-base hover:bg-[#b8963f] transition-colors disabled:opacity-60"
              >
                {submitting ? "Verifying..." : "Request Access →"}
              </button>
              <p className="text-center text-slate-600 text-xs">
                100% confidential. We do not share your information under any circumstances.
              </p>
            </form>
          </div>
        ) : (
          <div className="bg-[#0d1f3c] border border-emerald-900/40 rounded-xl p-6 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-emerald-950 border border-emerald-700 flex items-center justify-center shrink-0 text-emerald-400 font-bold text-lg">✓</div>
            <div>
              <p className="text-white font-semibold">Access granted, {formData.name.split(" ")[0]}.</p>
              <p className="text-slate-400 text-sm">The full guide is below. Scroll down to read.</p>
            </div>
          </div>
        )}
      </section>

      {/* GUIDE CONTENT — only shown after access granted */}
      {accessGranted && (
        <div id="guide-content">

          {/* Why This Matters */}
          <section className="py-10 px-6 bg-[#0d1f3c] border-t border-[#1e3a5f]">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-2">Why Have C-Safe Before You Need It?</h2>
              <div className="w-10 h-0.5 bg-[#c9a84c] mb-6" />
              <p className="text-slate-300 leading-relaxed mb-4">
                A single mismanaged executive crisis can trigger board scrutiny, investor concern, media coverage,
                and team destabilization — all before any formal legal exposure. Companies rarely lose executives
                to the crisis itself. They lose them to the mismanaged response.
              </p>
              <p className="text-slate-300 leading-relaxed mb-6">
                A trusted behavioral health partner enables fast, confidential, coordinated support instead of
                reactive decision-making. C-Safe is that partner — placed inside your leadership structure
                <em> before</em> a crisis occurs.
              </p>
              <div className="bg-[#0a1628] border-l-4 border-[#c9a84c] rounded-r-lg p-5">
                <p className="text-white font-semibold mb-1">The C-Safe Difference</p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  We are not a treatment center. We are not an EAP. We are a dedicated, confidential advisory partner
                  placed inside your leadership structure before a crisis occurs — so that when the call comes,
                  the infrastructure to handle it is already in place.
                </p>
              </div>
            </div>
          </section>

          {/* Common Crises */}
          <section className="py-12 px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-2">Common Executive Crises</h2>
              <div className="w-10 h-0.5 bg-[#c9a84c] mb-6" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Executive arrested for a DUI",
                  "Death of a spouse, parent, or child",
                  "Child hospitalized for addiction or mental health",
                  "Alcohol or medication impairment at work",
                  "Acute burnout, anxiety, or depression",
                  "Family conflict or divorce proceedings",
                  "Executive substance use crisis",
                  "Post-treatment return-to-work challenges",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 bg-[#0d1f3c] border border-[#1e3a5f] rounded-lg px-4 py-3">
                    <span className="text-[#c9a84c] mt-0.5 text-xs font-bold">▸</span>
                    <span className="text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* DUI Section */}
          <section className="py-12 px-6 bg-[#0d1f3c] border-t border-[#1e3a5f]">
            <div className="max-w-3xl mx-auto">
              <div className="inline-block bg-[#c9a84c]/10 border border-[#c9a84c]/30 text-[#c9a84c] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                Special Focus
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">DUI and the Executive: Why It Requires a Different Response</h2>
              <div className="w-10 h-0.5 bg-[#c9a84c] mb-6" />
              <p className="text-slate-300 leading-relaxed mb-4">
                A DUI arrest is one of the highest-stakes crisis scenarios an organization can face. The executive&apos;s
                personal exposure is immediate — but the organizational implications can be far greater. How the first
                48 hours are managed determines whether this remains a private matter or becomes a public one.
              </p>
              <p className="text-slate-300 leading-relaxed mb-8">
                C-suite leaders operate under scrutiny that most employees never experience. A DUI arrest creates
                simultaneous exposure across multiple fronts: personal legal liability, board and investor notification
                obligations, potential media attention, and questions about fitness for duty. Without a coordinated
                plan, each of these fronts escalates independently — and compounds the others.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="border border-red-900/40 rounded-lg overflow-hidden">
                  <div className="bg-red-950/60 px-4 py-3">
                    <span className="text-red-300 font-bold text-sm uppercase tracking-wide">Without C-Safe</span>
                  </div>
                  <div className="bg-[#0a1628] px-4 py-4 space-y-3">
                    {[
                      "Reactive, uncoordinated response",
                      "Legal counsel engaged before clinical needs assessed",
                      "Incident tied to company HR records",
                      "Executive navigates the process alone",
                      "DUI education in public group settings",
                      "Board learns through exposure, not a plan",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2 text-sm text-red-300/80">
                        <span className="mt-0.5 shrink-0">✗</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="border border-emerald-900/40 rounded-lg overflow-hidden">
                  <div className="bg-emerald-950/60 px-4 py-3">
                    <span className="text-emerald-300 font-bold text-sm uppercase tracking-wide">With C-Safe in Place</span>
                  </div>
                  <div className="bg-[#0a1628] px-4 py-4 space-y-3">
                    {[
                      "Immediate, confidential 24-hour activation",
                      "Clinical stabilization coordinated first — reduces exposure",
                      "Process managed externally — zero company paper trail",
                      "Dedicated advisor coordinates every step",
                      "Discreet, private DUI education — at our office or we come to you",
                      "Controlled communication strategy protects all parties",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2 text-sm text-emerald-300/80">
                        <span className="mt-0.5 shrink-0">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-4">How C-Safe Responds to an Executive DUI</h3>
              <div className="space-y-4">
                {[
                  {
                    num: "01",
                    title: "Immediate Confidential Activation",
                    body: "The designated company contact reaches C-Safe directly. Response is initiated within hours — not days. A dedicated advisor is assigned immediately.",
                  },
                  {
                    num: "02",
                    title: "Clinical Assessment First",
                    body: "Before any organizational decisions are made, C-Safe conducts a confidential clinical assessment. Every step that follows is shaped by this — not by urgency, not by legal pressure.",
                  },
                  {
                    num: "03",
                    title: "Stabilization Before Legal Escalation",
                    body: "C-Safe coordinates clinical stabilization before legal, HR, or PR strategies are formally engaged. Early stabilization often reduces legal exposure and creates the most favorable possible context for any subsequent process.",
                  },
                  {
                    num: "04",
                    title: "Complete Privacy — Fully External to the Company",
                    body: "All C-Safe communications and records exist entirely outside company systems. No HR file. No company paper trail. No connection to company reputation. What moves through C-Safe stays with C-Safe.",
                  },
                  {
                    num: "05",
                    title: "Discreet DUI Education — On the Executive's Terms",
                    body: "Where required by court order or chosen proactively, C-Safe coordinates DUI risk-reduction and education through private, one-on-one channels. Sessions at our Atlanta office or we come directly to you. C-Safe is actively pursuing DUI school certification to bring this service fully in-house — no group settings, no public exposure.",
                  },
                ].map(({ num, title, body }) => (
                  <div key={num} className="flex gap-4 bg-[#0a1628] border border-[#1e3a5f] rounded-lg p-5 hover:border-[#c9a84c]/30 transition-colors">
                    <span className="text-[#c9a84c] font-bold text-xl min-w-[2.5rem]">{num}</span>
                    <div>
                      <p className="text-white font-semibold mb-1">{title}</p>
                      <p className="text-slate-400 text-sm leading-relaxed">{body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-[#0a1628] border-l-4 border-[#c9a84c] rounded-r-lg p-5">
                <p className="text-white font-semibold mb-1">The Bottom Line</p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  A DUI does not have to end a career or compromise an organization. With the right response
                  infrastructure in place before the situation occurs, it can be handled as a private clinical
                  matter — not a public event. That is exactly what C-Safe is built to do.
                </p>
              </div>
            </div>
          </section>

          {/* Inline CTA */}
          <section className="py-10 px-6 bg-[#c9a84c]">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-[#0a1628] font-bold text-xl mb-2">Does your organization have a plan before this happens?</p>
              <p className="text-[#0a1628]/70 text-sm mb-6">Most companies discover the gaps during a crisis — not before one.</p>
              <a href="/#contact" className="inline-block bg-[#0a1628] text-white px-8 py-3 rounded font-bold hover:bg-[#0d1f3c] transition-colors">
                Request a Confidential Call
              </a>
            </div>
          </section>

          {/* 48-Hour Response Plan */}
          <section className="py-14 px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-2">The First 48-Hour Response Plan</h2>
              <div className="w-10 h-0.5 bg-[#c9a84c] mb-6" />
              <div className="space-y-3">
                {[
                  {
                    range: "0–4 hrs",
                    color: "bg-[#c9a84c]",
                    title: "Immediate Triage",
                    body: "Protect the individual and assess immediate safety. C-Safe is contacted by the designated company point of contact. A confidential response plan is activated.",
                  },
                  {
                    range: "4–12 hrs",
                    color: "bg-[#73a0b1]",
                    title: "Confidential Assessment",
                    body: "Clinical assessment is initiated. C-Safe gathers information about the executive's immediate needs, available options, and organizational context. No action is taken before the clinical picture is understood.",
                  },
                  {
                    range: "12–24 hrs",
                    color: "bg-[#4279ae]",
                    title: "Coordination and Planning",
                    body: "C-Safe coordinates clinical, legal, and organizational resources as appropriate. Provider options are vetted. Transport and logistics are established. The company's designated contact is updated on a strict need-to-know basis only.",
                  },
                  {
                    range: "24–36 hrs",
                    color: "bg-[#355687]",
                    title: "Communication Strategy",
                    body: "A communication framework is developed that protects the executive's privacy and the organization's reputation. Legal counsel is briefed as appropriate — after clinical needs are addressed, not before.",
                  },
                  {
                    range: "36–48 hrs",
                    color: "bg-[#0c1935]",
                    title: "Stabilization and Continuity",
                    body: "The executive is stabilized — in treatment, outpatient care, or a structured protocol. A return-to-work plan is initiated. Aftercare coordination begins immediately.",
                  },
                ].map(({ range, color, title, body }) => (
                  <div key={range} className="flex gap-0 rounded-lg overflow-hidden border border-[#1e3a5f]">
                    <div className={`${color} flex items-center justify-center px-3 py-4 min-w-[4.5rem] text-center`}>
                      <span className="text-white text-xs font-bold leading-tight">{range}</span>
                    </div>
                    <div className="bg-[#0d1f3c] px-5 py-4 flex-1">
                      <p className="text-white font-semibold text-sm mb-1">{title}</p>
                      <p className="text-slate-400 text-sm leading-relaxed">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Do / Don't */}
          <section className="py-12 px-6 bg-[#0d1f3c] border-y border-[#1e3a5f]">
            <div className="max-w-3xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-white font-bold text-base mb-4 flex items-center gap-2">
                    <span className="text-emerald-400 text-lg">✓</span> Leadership Should
                  </h3>
                  <div className="space-y-2">
                    {[
                      "Contact C-Safe immediately — before HR or legal",
                      "Secure a single trusted point of contact",
                      "Allow C-Safe to coordinate clinical response first",
                      "Maintain strict confidentiality within leadership",
                      "Document only what is legally required",
                      "Trust the process — reactive decisions cause the most damage",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2 text-sm text-emerald-300/80">
                        <span className="mt-0.5 shrink-0 text-emerald-400">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-bold text-base mb-4 flex items-center gap-2">
                    <span className="text-red-400 text-lg">✗</span> Leadership Should Avoid
                  </h3>
                  <div className="space-y-2">
                    {[
                      "Confronting the executive without a clinical advisor",
                      "Placing the executive on leave before assessment",
                      "Sharing details beyond the minimum necessary",
                      "Relying on an EAP for a C-suite crisis",
                      "Making placement decisions on speed alone",
                      "Letting the legal process drive the clinical response",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2 text-sm text-red-300/80">
                        <span className="mt-0.5 shrink-0 text-red-400">✗</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How C-Safe Adds Value */}
          <section className="py-14 px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-2">How C-Safe Adds Value</h2>
              <div className="w-10 h-0.5 bg-[#c9a84c] mb-6" />
              <div className="space-y-4">
                {[
                  {
                    title: "Confidential Executive Consultation",
                    body: "Direct advisory access — 24-hour response, no public intake, no waiting lists. Every engagement begins with a confidential consultation that protects the executive and the organization simultaneously.",
                  },
                  {
                    title: "Clinical Stabilization Before Legal Action",
                    body: "C-Safe coordinates behavioral health stabilization and assessment before legal, HR, or PR strategies are formally engaged — reducing exposure and creating the most favorable context for any subsequent process.",
                  },
                  {
                    title: "Complete Privacy — Fully External",
                    body: "All C-Safe communications and records exist entirely outside company systems. No HR file. No company paper trail. Complete separation between the executive's personal situation and organizational reputation.",
                  },
                  {
                    title: "DUI Education — Private and Discreet",
                    body: "Court-required or proactive DUI education delivered through private, one-on-one channels. Available at our Atlanta office or delivered directly to the executive. C-Safe is pursuing DUI school certification to provide fully in-house programming — no group settings, no public exposure.",
                  },
                  {
                    title: "Vetted Provider Placement",
                    body: "C-Safe maintains a curated network of elite behavioral health providers. No placement is made without clinical vetting against the executive's specific needs, schedule, and confidentiality requirements.",
                  },
                  {
                    title: "Family Support Included",
                    body: "Crisis doesn't stop at the executive. C-Safe extends support to immediate family members — up to two treatment episodes annually per covered executive — with the same discretion and urgency.",
                  },
                  {
                    title: "Return-to-Work and Aftercare",
                    body: "C-Safe stays engaged through the recovery and reintegration phase. A structured return-to-work protocol protects both the executive's progress and the organization's operational stability.",
                  },
                ].map(({ title, body }, i) => (
                  <div key={title} className={`flex gap-4 rounded-lg p-5 border ${i % 2 === 0 ? "bg-[#0d1f3c] border-[#1e3a5f]" : "bg-[#0a1628] border-[#1e3a5f]"} hover:border-[#c9a84c]/30 transition-colors`}>
                    <div className="w-1 bg-[#c9a84c] rounded-full shrink-0 self-stretch" />
                    <div>
                      <p className="text-white font-semibold mb-1">{title}</p>
                      <p className="text-slate-400 text-sm leading-relaxed">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Checklist */}
          <section className="py-14 px-6 bg-[#0d1f3c] border-t border-[#1e3a5f]">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-2">Executive Crisis Response Checklist</h2>
              <div className="w-10 h-0.5 bg-[#c9a84c] mb-3" />
              <p className="text-slate-400 text-sm mb-8">Every item should have a designated owner before a crisis occurs — not during it.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    phase: "Immediate (0–4 Hours)",
                    color: "text-[#c9a84c]",
                    border: "border-[#c9a84c]/30",
                    items: [
                      "C-Safe has been contacted and activated",
                      "Designated point of contact notified",
                      "Executive's immediate safety assessed",
                      "Confidential communication channel established",
                      "No premature organizational action taken",
                    ],
                  },
                  {
                    phase: "Assessment (4–24 Hours)",
                    color: "text-[#73a0b1]",
                    border: "border-[#73a0b1]/30",
                    items: [
                      "Clinical assessment initiated by C-Safe",
                      "Executive's needs and risk level identified",
                      "Provider options vetted by C-Safe",
                      "Transport and logistics coordinated",
                      "Internal communication framework drafted",
                    ],
                  },
                  {
                    phase: "Coordination (24–48 Hours)",
                    color: "text-[#4279ae]",
                    border: "border-[#4279ae]/30",
                    items: [
                      "Treatment or support placement confirmed",
                      "Legal and HR briefed only as necessary",
                      "Communications reviewed and controlled",
                      "Board protocol activated if required",
                      "Family support resources engaged",
                    ],
                  },
                  {
                    phase: "Ongoing",
                    color: "text-emerald-400",
                    border: "border-emerald-900/40",
                    items: [
                      "Regular updates flowing through C-Safe only",
                      "Return-to-work protocol initiated",
                      "Aftercare plan in development",
                      "Organizational stability being monitored",
                      "Post-crisis debrief with C-Safe scheduled",
                    ],
                  },
                ].map(({ phase, color, border, items }) => (
                  <div key={phase} className={`bg-[#0a1628] border ${border} rounded-lg p-5`}>
                    <p className={`${color} font-bold text-sm uppercase tracking-wide mb-4`}>{phase}</p>
                    <div className="space-y-2">
                      {items.map((item) => (
                        <div key={item} className="flex items-start gap-2 text-sm text-slate-300">
                          <span className="text-slate-600 mt-0.5 shrink-0">☐</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-20 px-6 bg-[#0a1628]">
            <div className="max-w-xl mx-auto text-center">
              <p className="text-[#c9a84c] text-xs font-semibold uppercase tracking-widest mb-4">C-Safe Wellness Group</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Is Your Organization&apos;s Crisis Plan<br />
                <span className="text-[#c9a84c]">Ready Before the First Call Comes?</span>
              </h2>
              <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-md mx-auto">
                A 30-minute Executive Preparedness Assessment with C-Safe identifies the gaps — and closes them
                before the situation arrives.
              </p>
              <a
                href="/#contact"
                className="inline-block bg-[#c9a84c] text-[#0a1628] px-10 py-4 rounded font-bold text-lg hover:bg-[#b8963f] transition-colors"
              >
                Request a Confidential Call
              </a>
            </div>
          </section>

        </div>
      )}

      {/* Footer */}
      <footer className="bg-[#0a1628] border-t border-[#1e3a5f] py-8 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-3">
            <img src="/csafe-logo.png" alt="C-Safe" className="w-7 h-7 object-contain" />
            <span className="text-white font-bold text-base">C-Safe <span className="text-[#c9a84c]">Wellness Group</span></span>
          </a>
          <p className="text-slate-600 text-xs text-center">
            This guide is for informational purposes only and does not constitute legal, clinical, or compliance advice.
            © 2026 C-Safe Wellness Group.
          </p>
          <a href="mailto:info@csafeteam.com" className="text-[#c9a84c] text-sm font-semibold hover:underline whitespace-nowrap">
            info@csafeteam.com
          </a>
        </div>
      </footer>
    </div>
  );
}
