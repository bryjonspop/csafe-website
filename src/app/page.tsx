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
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          access_key: "6e13265e-35ec-4f41-8e8b-d00a931dd1f3",
          subject: "New Inquiry — C-Safe Wellness Group",
          ...formData,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
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
            <a href="/resources/first-48" className="hover:text-[#c9a84c] transition-colors">The First 48</a>
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
            <a href="/resources/first-48" className="text-slate-300 hover:text-[#c9a84c]" onClick={() => setMenuOpen(false)}>The First 48</a>
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
              {error && (
                <p className="text-red-400 text-sm text-center">
                  Something went wrong. Please try again or email us directly at bryan@csafeteam.com
                </p>
              )}
              <p className="text-center text-slate-600 text-xs">
                Your inquiry is 100% confidential. We do not share client information under any circumstances.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* The First 48 Teaser */}
      <section className="py-14 px-6 bg-[#0d1f3c] border-t border-[#1e3a5f]">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 bg-[#c9a84c]/10 border border-[#c9a84c]/30 text-[#c9a84c] text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
              Free Executive Resource · Confidential
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              The First 48 Hours
            </h2>
            <p className="text-slate-400 text-base leading-relaxed mb-5">
              Organizations prepare for cyberattacks and compliance failures. Most have no plan
              when a senior leader faces a personal crisis. Our free guide covers exactly what to
              do — and what not to do — in the 48 hours that determine whether a situation stays
              manageable.
            </p>
            <a
              href="/resources/first-48"
              className="inline-flex items-center gap-2 bg-[#c9a84c] text-[#0a1628] px-6 py-3 rounded font-bold hover:bg-[#b8963f] transition-colors"
            >
              Request Access — Free &amp; Confidential
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
          <div className="flex-shrink-0 hidden md:grid grid-cols-2 gap-3 w-64">
            {[
              { stat: "76%", label: "senior leaders report burnout" },
              { stat: "1 in 5", label: "executives face substance concerns" },
              { stat: "$500B+", label: "lost to impairment annually" },
              { stat: "48 hrs", label: "window that shapes the outcome" },
            ].map(({ stat, label }) => (
              <div key={stat} className="bg-[#0a1628] border border-[#1e3a5f] rounded-lg p-3 text-center">
                <div className="text-[#c9a84c] font-bold text-xl">{stat}</div>
                <div className="text-slate-500 text-xs mt-1 leading-tight">{label}</div>
              </div>
            ))}
          </div>
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
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-6 text-slate-500 text-sm">
              <a href="#services" className="hover:text-slate-300 transition-colors">Services</a>
              <a href="#wellness-calendar" className="hover:text-slate-300 transition-colors">Wellness Calendar</a>
              <a href="/team" className="hover:text-slate-300 transition-colors">Our Team</a>
              <a href="#contact" className="hover:text-slate-300 transition-colors">Contact</a>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/in/bryan-smith-283b61419/?trk=public-profile-join-page" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-500 hover:text-[#c9a84c] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61591192140412" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-slate-500 hover:text-[#c9a84c] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.instagram.com/csafeteam" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-slate-500 hover:text-[#c9a84c] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://www.tiktok.com/@csafeteam" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-slate-500 hover:text-[#c9a84c] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.73a4.85 4.85 0 01-1.01-.04z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

