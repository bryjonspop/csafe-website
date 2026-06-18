"use client";

import { useState } from "react";

const WELLNESS_CALENDAR = [
  {
    month: "January",
    title: "Goal-Setting & Breathwork",
    desc: "New year, new edge. A certified breathwork facilitator guides your team through intention-setting and nervous system reset — because the way your leaders start the year determines how they finish it.",
    tag: "Mindfulness",
  },
  {
    month: "February",
    title: "In-Office Chair Massages",
    desc: "Licensed therapists come to you. No scheduling apps, no commute — just 20 minutes of real relief for the people carrying the most weight. It's a small gesture that lands loud.",
    tag: "Physical Wellness",
  },
  {
    month: "March",
    title: "Sound Bowl & Guided Meditation",
    desc: "Nothing else on the calendar sounds like this. A live sound bath with crystal bowls drops the whole room into a state of deep rest that most executives haven't felt in years. They'll talk about it for months.",
    tag: "Mindfulness",
  },
  {
    month: "April",
    title: "Team Volunteer Day",
    desc: "Step outside the office and into the community — together. Something shifts when a leadership team rolls up their sleeves side by side. The trust built here doesn't stay at the service site.",
    tag: "Culture",
  },
  {
    month: "May",
    title: "Financial Wellness Speaker",
    desc: "High performers carry financial stress quietly — and it costs them focus, sleep, and clarity. A certified financial planner opens the conversation that most C-suites never have. Practical, eye-opening, and overdue.",
    tag: "Education",
  },
  {
    month: "June",
    title: "Porsche Track Experience",
    desc: "The year's main event. Your team behind the wheel of a Porsche at a private Atlanta motorsports facility — full throttle, zero pretense. This is the one everyone shows up early for.",
    tag: "Signature Event",
  },
  {
    month: "July",
    title: "Private Chef Cooking Class",
    desc: "A world away from the conference room. A private chef leads the team through a hands-on cooking experience that's equal parts hilarious and delicious. The inside jokes last longer than the food.",
    tag: "Team Building",
  },
  {
    month: "August",
    title: "In-Office Chair Massages",
    desc: "Q3 is where burnout quietly sets in. This mid-year reset comes right on time — and the fact that it's a repeat tells your team something important: this is culture, not a one-time perk.",
    tag: "Physical Wellness",
  },
  {
    month: "September",
    title: "Improv & Communication Workshop",
    desc: "No scripts. No rank. Just real-time listening, quick thinking, and genuine laughter. Improv is the most effective team trust exercise most executives have never tried — until now.",
    tag: "Team Building",
  },
  {
    month: "October",
    title: "Escape Room Challenge",
    desc: "Locked in a room with a ticking clock — that's when you see how your team really operates. The debrief afterward is worth its weight in gold. Fun, revealing, and unexpectedly competitive.",
    tag: "Team Building",
  },
  {
    month: "November",
    title: "Gratitude & Mental Health Circle",
    desc: "The holidays hit leaders hard. This facilitated session creates space to reflect, exhale, and reconnect — right before the season that needs it most. Powerful in ways that surprise even the skeptics.",
    tag: "Mindfulness",
  },
  {
    month: "December",
    title: "Annual Holiday Celebration",
    desc: "End the year the right way. A curated, premium experience built around recognition, connection, and genuine celebration — because the people who gave the most deserve more than a gift card.",
    tag: "Culture",
  },
];

const TAG_COLORS: Record<string, string> = {
  Mindfulness: "bg-purple-900/40 text-purple-300 border-purple-700/40",
  "Physical Wellness": "bg-teal-900/40 text-teal-300 border-teal-700/40",
  Culture: "bg-rose-900/40 text-rose-300 border-rose-700/40",
  Education: "bg-blue-900/40 text-blue-300 border-blue-700/40",
  "Signature Event": "bg-[#c9a84c]/20 text-[#c9a84c] border-[#c9a84c]/40",
  "Team Building": "bg-green-900/40 text-green-300 border-green-700/40",
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch(
        "https://alluring-encouragement-production.up.railway.app/public/lead_v3",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            source: "csafe-wellness-group.sintra.site",
          }),
        }
      );
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a1628] text-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a1628]/95 backdrop-blur border-b border-[#1e3a5f]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/csafe-logo.png" alt="C-Safe Wellness Group logo" className="w-10 h-10 object-contain" />
            <span className="text-xl font-bold tracking-tight text-white">
              C-Safe <span className="text-[#c9a84c]">Wellness Group</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm text-slate-300">
            <a href="#services" className="hover:text-[#c9a84c] transition-colors">Services</a>
            <a href="#wellness-calendar" className="hover:text-[#c9a84c] transition-colors">Wellness Calendar</a>
            <a href="#who-we-serve" className="hover:text-[#c9a84c] transition-colors">Who We Serve</a>
            <a href="/team" className="hover:text-[#c9a84c] transition-colors">Our Team</a>
            <a href="/insights" className="hover:text-[#c9a84c] transition-colors">Insights</a>
            <a href="/assessment" className="relative hover:text-[#c9a84c] transition-colors flex items-center gap-1.5">
              Fit Assessment
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c9a84c] opacity-60" style={{animationDuration: '2s'}} />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c9a84c]" />
              </span>
            </a>
            <a
              href="#contact"
              className="bg-[#c9a84c] text-[#0a1628] px-4 py-2 rounded font-semibold hover:bg-[#b8963f] transition-colors"
            >
              Request a Confidential Call
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-[#0d1f3c] border-t border-[#1e3a5f] px-6 py-4 flex flex-col gap-4 text-sm">
            <a href="#services" className="text-slate-300 hover:text-[#c9a84c]" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#wellness-calendar" className="text-slate-300 hover:text-[#c9a84c]" onClick={() => setMenuOpen(false)}>Wellness Calendar</a>
            <a href="#who-we-serve" className="text-slate-300 hover:text-[#c9a84c]" onClick={() => setMenuOpen(false)}>Who We Serve</a>
            <a href="#how-it-works" className="text-slate-300 hover:text-[#c9a84c]" onClick={() => setMenuOpen(false)}>How It Works</a>
            <a href="/team" className="text-slate-300 hover:text-[#c9a84c]" onClick={() => setMenuOpen(false)}>Our Team</a>
            <a href="/assessment" className="text-slate-300 hover:text-[#c9a84c]" onClick={() => setMenuOpen(false)}>Fit Assessment</a>
            <a href="#contact" className="text-[#c9a84c] font-semibold" onClick={() => setMenuOpen(false)}>Request a Confidential Call</a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0d1f3c] to-[#0a1628]" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #c9a84c 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="inline-block bg-[#c9a84c]/10 border border-[#c9a84c]/30 text-[#c9a84c] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
            B2B Executive Mental Health &amp; Wellness Advisory
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-white">
            Protect Your Leadership.<br />
            <span className="text-[#c9a84c]">Before Crisis Decides For You.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            C-Safe Wellness Group is a discreet, high-touch advisory firm serving C-suite teams at mid-to-large companies.
            We provide confidential mental health and addiction support that protects your people — and your business —
            without disruption, exposure, or guesswork.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-[#c9a84c] text-[#0a1628] px-8 py-4 rounded font-bold text-lg hover:bg-[#b8963f] transition-colors"
            >
              Request a Confidential Call
            </a>
            <a
              href="#services"
              className="border border-[#c9a84c]/50 text-[#c9a84c] px-8 py-4 rounded font-semibold text-lg hover:border-[#c9a84c] hover:bg-[#c9a84c]/10 transition-colors"
            >
              How We Help
            </a>
          </div>

          {/* Trust signals */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              { stat: "24-Hour", label: "Callback Guarantee" },
              { stat: "100%", label: "Confidential Process" },
              { stat: "Elite", label: "Treatment Network Access" },
            ].map(({ stat, label }) => (
              <div key={stat} className="border border-[#1e3a5f] rounded-lg p-5 bg-[#0d1f3c]/60">
                <div className="text-2xl font-bold text-[#c9a84c]">{stat}</div>
                <div className="text-slate-400 text-sm mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Stakes */}
      <section className="bg-[#0d1f3c] py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            When a Leader Goes Down, <span className="text-[#c9a84c]">the Business Feels It</span>
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
            An executive in crisis doesn&apos;t just affect one person. It affects board confidence, team performance,
            investor relations, and operational continuity. Most companies aren&apos;t prepared — and they don&apos;t realize it
            until the crisis is already in motion.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              {
                icon: "⚠️",
                title: "The 3 D's",
                body: "Death. Divorce. Disappointment. These are the three crisis triggers most likely to derail a C-suite leader — and none of them announce themselves in advance.",
              },
              {
                icon: "🔒",
                title: "EAPs Fall Short",
                body: "Employee Assistance Programs weren't built for executives. They lack the discretion, speed, and caliber of care that leadership-level situations demand.",
              },
              {
                icon: "📉",
                title: "Delayed Response Is Expensive",
                body: "The longer a leadership crisis goes unaddressed, the greater the risk to productivity, retention, and company reputation. Speed and discretion are everything.",
              },
            ].map(({ icon, title, body }) => (
              <div key={title} className="bg-[#0a1628] border border-[#1e3a5f] rounded-lg p-6">
                <div className="text-3xl mb-3">{icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6 bg-[#0a1628]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-3">What We Provide</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">A Full-Spectrum Advisory Suite</h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              From proactive wellness to acute crisis response — we handle every stage with discretion, speed, and care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Executive Treatment Placement",
                desc: "Direct access to elite, vetted treatment programs. We place the right person in the right facility — fast, confidential, with no conflicts of interest.",
              },
              {
                title: "Crisis Response & Intervention",
                desc: "When a situation requires immediate action, we mobilize. Professional intervention coordination with logistics managed end to end.",
              },
              {
                title: "Family & Stakeholder Support",
                desc: "Supporting the people around the executive — family members, board liaisons, and key stakeholders — through a defined, confidential process.",
              },
              {
                title: "Transport & Logistics",
                desc: "High-touch travel coordination for executives entering treatment — without involving internal HR or public-facing company resources.",
              },
              {
                title: "Preventive Wellness Programming",
                desc: "Proactive programs to identify risk early, reduce leadership burnout, and create a culture of sustainable high performance at the top.",
              },
              {
                title: "Executive Hiring Support",
                desc: "Mental health and addiction risk screening for incoming C-suite hires — protect your investment before the offer letter is signed.",
              },
            ].map(({ title, desc }) => (
              <div
                key={title}
                className="group bg-[#0d1f3c] border border-[#1e3a5f] rounded-lg p-6 hover:border-[#c9a84c]/50 transition-colors"
              >
                <div className="w-8 h-0.5 bg-[#c9a84c] mb-4 group-hover:w-12 transition-all duration-300" />
                <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Leadership Wellness Calendar */}
      <section id="wellness-calendar" className="py-20 px-6 bg-[#0d1f3c]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-3">Add-On Program</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Monthly Leadership Wellness Calendar
            </h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              A curated 12-month experience program for your leadership team — designed to build connection,
              reduce burnout, and make wellness a cultural expectation at the top.
            </p>
            <div className="inline-flex items-center gap-2 mt-6 bg-[#c9a84c]/10 border border-[#c9a84c]/30 text-[#c9a84c] text-sm font-semibold px-5 py-2 rounded-full">
              Fully managed by C-Safe Wellness Group
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {WELLNESS_CALENDAR.map(({ month, title, desc, tag }) => (
              <div
                key={month}
                className="bg-[#0a1628] border border-[#1e3a5f] rounded-lg p-6 hover:border-[#c9a84c]/40 transition-colors flex flex-col gap-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest">{month}</span>
                  <span className={`text-xs font-semibold border px-2 py-0.5 rounded-full ${TAG_COLORS[tag] ?? "bg-slate-800 text-slate-400 border-slate-700"}`}>
                    {tag}
                  </span>
                </div>
                <h3 className="text-white font-bold text-base leading-snug">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed flex-1">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-400 text-sm mb-6 max-w-xl mx-auto">
              This program is available as a standalone add-on or as part of a full C-Safe Wellness Group retainer.
              Pricing and scheduling are customized to your team size and company calendar.
            </p>
            <a
              href="#contact"
              className="inline-block bg-[#c9a84c] text-[#0a1628] px-8 py-4 rounded font-bold text-lg hover:bg-[#b8963f] transition-colors"
            >
              Inquire About the Wellness Calendar
            </a>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section id="who-we-serve" className="py-20 px-6 bg-[#0a1628]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-3">Ideal Partners</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Who We Serve</h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              C-Safe Wellness Group works exclusively with organizations where leadership continuity is a board-level concern.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "PE-Backed Companies",
              "Founder-Led Businesses",
              "Publicly Traded Firms",
              "Law & Financial Services",
              "Healthcare & Life Sciences",
              "Entertainment & Media",
              "Logistics & Supply Chain",
              "Technology Companies",
              "High-Growth Startups",
            ].map((item) => (
              <div
                key={item}
                className="border border-[#1e3a5f] rounded-lg px-5 py-4 text-sm text-slate-300 text-center hover:border-[#c9a84c]/40 hover:text-white transition-colors"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6 bg-[#0d1f3c]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-3">The Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">How It Works</h2>
            <p className="text-slate-400 mt-4 max-w-xl mx-auto">
              Simple, confidential, and built around your company&apos;s needs — not ours.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "Confidential Discovery Call",
                desc: "We begin with a private conversation — no names required. You describe the situation or goals; we outline how C-Safe can help.",
              },
              {
                step: "02",
                title: "Custom Coverage Proposal",
                desc: "We build a tailored retainer proposal for your executive team. Coverage is structured by individual — each covered executive has unlimited access throughout the year.",
              },
              {
                step: "03",
                title: "Onboarding & Activation",
                desc: "Once engaged, your team is activated within 24–48 hours. No waiting lists. No public intake processes.",
              },
              {
                step: "04",
                title: "On-Call Advisory & Response",
                desc: "From that point forward, C-Safe Wellness Group is your first call. We respond within 24 hours and mobilize resources as needed — quietly, professionally, and with full discretion.",
              },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex gap-6 items-start bg-[#0a1628] border border-[#1e3a5f] rounded-lg p-6">
                <div className="text-[#c9a84c] font-bold text-2xl min-w-[3rem]">{step}</div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">{title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 px-6 bg-[#c9a84c]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
            Don&apos;t Decide When You&apos;re Desperate.
          </h2>
          <p className="text-[#0a1628]/80 text-lg mb-8 max-w-2xl mx-auto">
            The companies that navigate leadership crises best are the ones that prepared before they needed to.
            A 30-minute call costs nothing. Waiting could cost everything.
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#0a1628] text-white px-8 py-4 rounded font-bold text-lg hover:bg-[#0d1f3c] transition-colors"
          >
            Request a Confidential Call
          </a>
        </div>
      </section>

      {/* Assessment Callout */}
      <section className="py-20 px-6 bg-[#0a1628]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#c9a84c] text-xs font-semibold uppercase tracking-widest mb-4">Takes Under 3 Minutes</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            Not Sure If C-Safe Is Right<br />
            <span className="text-[#c9a84c]">for Your Organization?</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            We work with a select group of companies. Our confidential fit assessment
            helps us understand your situation — and gives you a clear sense of how we can help.
          </p>

          {/* Animated arrow + CTA */}
          <div className="flex flex-col items-center gap-5">
            <a
              href="/assessment"
              className="group inline-flex items-center gap-3 bg-transparent border-2 border-[#c9a84c] text-[#c9a84c] px-10 py-4 rounded font-bold text-lg hover:bg-[#c9a84c] hover:text-[#0a1628] transition-all duration-300"
            >
              Take the Fit Assessment
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            {/* Elegant animated down-chevron */}
            <div className="flex flex-col items-center gap-1 opacity-50" style={{animation: 'floatDown 2.4s ease-in-out infinite'}}>
              <svg className="w-5 h-5 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
              </svg>
              <svg className="w-5 h-5 text-[#c9a84c] -mt-3 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          <style>{`
            @keyframes floatDown {
              0%, 100% { transform: translateY(0px); opacity: 0.4; }
              50% { transform: translateY(6px); opacity: 0.8; }
            }
          `}</style>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 px-6 bg-[#0d1f3c]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-3">Get in Touch</p>
            <h2 className="text-3xl font-bold text-white">Request a Confidential Call</h2>
            <p className="text-slate-400 mt-3 text-sm">
              All inquiries are handled with complete discretion. We respond within 24 hours.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-16 border border-[#c9a84c]/30 rounded-lg bg-[#0a1628]">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="text-xl font-bold text-white mb-2">Request Received</h3>
              <p className="text-slate-400">
                We&apos;ll be in touch within 24 hours. All communications are handled with full discretion.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wide mb-2">
                    Your Name *
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#0a1628] border border-[#1e3a5f] rounded px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-[#c9a84c] transition-colors"
                    placeholder="Jane Smith"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wide mb-2">
                    Company *
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-[#0a1628] border border-[#1e3a5f] rounded px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-[#c9a84c] transition-colors"
                    placeholder="Acme Corp"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wide mb-2">
                    Email *
                  </label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#0a1628] border border-[#1e3a5f] rounded px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-[#c9a84c] transition-colors"
                    placeholder="jane@company.com"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wide mb-2">
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#0a1628] border border-[#1e3a5f] rounded px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-[#c9a84c] transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>
              <div>
                <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wide mb-2">
                  What brings you here? (optional)
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#0a1628] border border-[#1e3a5f] rounded px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-[#c9a84c] transition-colors resize-none"
                  placeholder="Brief context — no identifying details required at this stage."
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-[#c9a84c] text-[#0a1628] py-4 rounded font-bold text-lg hover:bg-[#b8963f] transition-colors disabled:opacity-60"
              >
                {submitting ? "Sending..." : "Request a Confidential Call"}
              </button>
              <p className="text-center text-slate-600 text-xs">
                Your inquiry is 100% confidential. We do not share client information under any circumstances.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a1628] border-t border-[#1e3a5f] py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src="/csafe-logo.png" alt="C-Safe Wellness Group logo" className="w-8 h-8 object-contain" />
            <span className="text-white font-bold text-lg">
              C-Safe <span className="text-[#c9a84c]">Wellness Group</span>
            </span>
          </div>
          <p className="text-slate-500 text-sm text-center">
            Leadership you can trust. &copy; {new Date().getFullYear()} C-Safe Wellness Group. All rights reserved.
          </p>
          <div className="flex gap-6 text-slate-500 text-sm">
            <a href="#services" className="hover:text-slate-300 transition-colors">Services</a>
            <a href="#wellness-calendar" className="hover:text-slate-300 transition-colors">Wellness Calendar</a>
            <a href="/team" className="hover:text-slate-300 transition-colors">Our Team</a>
            <a href="#contact" className="hover:text-slate-300 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
