"use client";

import { useState } from "react";

export default function TheDrinkPage() {
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
          subject: "Sales Culture Guide — Access Request",
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
            <a href="/resources" className="text-[#c9a84c] font-semibold">Resources</a>
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
            <a href="/resources" className="text-[#c9a84c] font-semibold" onClick={() => setMenuOpen(false)}>Resources</a>
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
            The Drink That<br />
            <span className="text-[#c9a84c]">Came With the Job</span>
          </h1>
          <p className="text-xl text-[#c9a84c] font-semibold mb-4">Sales Culture, High-Risk Environments, and the Addiction Nobody Saw Coming</p>
          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8">
            You were in the suite. The stadium. The client dinner that ran until midnight.
            The drink in your hand was not a choice — it was part of the job description.
            This guide is for the sales professional who never thought they had a problem
            because it never looked like one.
          </p>
          <div className="w-16 h-0.5 bg-[#c9a84c] mx-auto" />
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#0d1f3c] border-y border-[#1e3a5f] py-8 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { stat: "2x", label: "Sales and business development professionals drink at twice the rate of the general workforce" },
            { stat: "73%", label: "of alcohol-dependent professionals report their drinking started or escalated in a client-facing role" },
            { stat: "Years", label: "Average time between first signs of alcohol dependence and first acknowledgment — in high-performing professionals" },
            { stat: "0", label: "Times most sales professionals received any education on alcohol use risk in their industry" },
          ].map(({ stat, label }) => (
            <div key={stat} className="flex flex-col items-center gap-2">
              <span className="text-3xl font-bold text-[#c9a84c]">{stat}</span>
              <span className="text-slate-400 text-xs leading-snug">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Preview */}
      <section className="py-16 px-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-2">What This Guide Covers</h2>
        <div className="w-10 h-0.5 bg-[#c9a84c] mb-6" />
        <p className="text-slate-400 text-sm leading-relaxed mb-6">
          A clear-eyed look at how sales culture creates the conditions for alcohol dependence —
          and why the people inside it are almost always the last to know.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          {[
            "Why sales culture is one of the highest-risk environments for alcohol dependence",
            "How the suite, the stadium, and the client dinner quietly changed your relationship with drinking",
            "Why addiction forms gradually in high-performing people — without a single dramatic moment",
            "The withdrawal symptoms you've been calling a cold for years",
            "Why you never connected the dots — and why that's not your fault",
            "What the body does when alcohol becomes a daily chemical requirement",
            "Why being trained in business and not addiction left you completely exposed",
            "What to do when you're ready to understand what's actually happening",
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
              <input required type="text" placeholder="Your Name" value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[#0a1628] border border-[#1e3a5f] rounded px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-[#c9a84c] transition-colors" />
              <input required type="text" placeholder="Company" value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full bg-[#0a1628] border border-[#1e3a5f] rounded px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-[#c9a84c] transition-colors" />
              <input required type="email" placeholder="Work Email" value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-[#0a1628] border border-[#1e3a5f] rounded px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-[#c9a84c] transition-colors" />
              {error && <p className="text-red-400 text-xs">Something went wrong. Please try again.</p>}
              <button type="submit" disabled={submitting}
                className="w-full bg-[#c9a84c] text-[#0a1628] py-3.5 rounded font-bold text-base hover:bg-[#b8963f] transition-colors disabled:opacity-60">
                {submitting ? "Verifying..." : "Request Access →"}
              </button>
              <p className="text-center text-slate-600 text-xs">100% confidential. We do not share your information under any circumstances.</p>
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

      {/* FULL GUIDE */}
      {accessGranted && (
        <div id="guide-content">

          <section className="py-12 px-6 bg-[#0d1f3c] border-t border-[#1e3a5f]">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[#c9a84c] font-bold text-2xl min-w-[2.5rem]">01</span>
                <h2 className="text-xl font-bold text-white">No Sales, No Money. No Drink, No Deal.</h2>
              </div>
              <div className="w-10 h-0.5 bg-[#c9a84c] mb-6 ml-16" />
              <div className="ml-16 space-y-4">
                <p className="text-slate-300 leading-relaxed">
                  Sales is one of the most unforgiving professions that exists. The pressure is immediate, constant, and attached directly to your income. You do not miss quota and collect a salary. You miss quota and feel it — in your bank account, your standing, your confidence, your future with the company.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  That pressure does not stay at the office. It follows you to the client dinner, to the box seats, to the concert in the suite where the drinks are free and the relationship you are building requires you to be on — relaxed, engaging, present, and likeable — for four hours straight after a full day of work.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  The drink in your hand is not optional. Not really. It smooths the conversation. It signals that you are not uptight, not transactional, not just there to close. It is the social lubricant that the culture was built on — and you learned, early, that it works.
                </p>
                <div className="bg-[#0a1628] border-l-4 border-[#c9a84c] rounded-r-lg p-5">
                  <p className="text-white font-semibold mb-1">The environment is the problem</p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Most conversations about addiction focus on the individual. This one starts with the environment — because in sales, the environment does most of the work. You did not choose a lifestyle. You accepted a job. The lifestyle came with it.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 px-6">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[#c9a84c] font-bold text-2xl min-w-[2.5rem]">02</span>
                <h2 className="text-xl font-bold text-white">The Suite. The Stadium. The Dinner That Never Ends.</h2>
              </div>
              <div className="w-10 h-0.5 bg-[#c9a84c] mb-6 ml-16" />
              <div className="ml-16 space-y-4">
                <p className="text-slate-300 leading-relaxed">
                  Client entertainment is work. You know this because you are exhausted at the end of it. You have been &quot;on&quot; for six hours. You have managed the conversation, navigated the personalities, remembered the names of the client&apos;s kids, and kept the energy up through dinner, through dessert, through the ride back to the hotel.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  But it does not look like work. It looks like a game, a concert, a steak dinner, and an open bar. And in that environment, drinking is not just permitted — it is expected. It is the atmosphere. The bottles are already on the table when you sit down. The suite is fully stocked before you arrive. Declining is awkward. Keeping pace is easy.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  Do this twice a week for five years and the math is not complicated. What started as situational drinking becomes habitual. What was social becomes necessary. Not because you are weak — because the environment trained you, consistently and over time, to associate performance with alcohol.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
                  {[
                    { label: "The venue", items: ["Suites", "Stadiums", "Concerts", "Client dinners", "Golf outings", "Holiday parties"] },
                    { label: "The signal", items: ["Drinks are waiting", "Open bar included", "Bottle service arranged", "Round ordered for the table", "Refills are automatic"] },
                    { label: "The message", items: ["Relax", "Connect", "Close", "Celebrate", "You earned this", "This is how it's done"] },
                  ].map(({ label, items }) => (
                    <div key={label} className="bg-[#0d1f3c] border border-[#1e3a5f] rounded-lg p-4">
                      <p className="text-[#c9a84c] text-xs font-bold uppercase tracking-wide mb-3">{label}</p>
                      <div className="space-y-1">
                        {items.map(i => (
                          <p key={i} className="text-slate-400 text-xs">▸ {i}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 px-6 bg-[#0d1f3c] border-t border-[#1e3a5f]">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[#c9a84c] font-bold text-2xl min-w-[2.5rem]">03</span>
                <h2 className="text-xl font-bold text-white">How Addiction Forms When You Never See It Coming</h2>
              </div>
              <div className="w-10 h-0.5 bg-[#c9a84c] mb-6 ml-16" />
              <div className="ml-16 space-y-4">
                <p className="text-slate-300 leading-relaxed">
                  Most people picture addiction as a visible collapse. A dramatic moment. A rock bottom you could not miss. For sales professionals who developed a dependency inside a culture that normalized everything along the way — it does not look like that at all.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  It looks like a Tuesday. You had a rough day. You close the laptop and pour a drink because you always do. Nothing dramatic. No alarm. Just a pattern that has become so embedded in your daily rhythm that the thought of not doing it feels foreign.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  The formation is gradual. First, drinking in high-pressure social situations. Then drinking to decompress after them. Then drinking to prepare for them. Then drinking because you are drinking, and it has been that way long enough that it no longer requires a reason.
                </p>
                <div className="space-y-2 mt-4">
                  {[
                    { stage: "Stage 1", label: "Situational", desc: "Drinking at client events — normal, expected, unremarkable." },
                    { stage: "Stage 2", label: "Habitual", desc: "Drinking to decompress after client events. Most nights. Part of the wind-down." },
                    { stage: "Stage 3", label: "Dependent", desc: "Drinking regardless of events. The body starts expecting it. Not having it feels wrong." },
                    { stage: "Stage 4", label: "Required", desc: "Drinking to function. To sleep. To start the morning. The need is physical now, not social." },
                  ].map(({ stage, label, desc }) => (
                    <div key={stage} className="flex gap-4 bg-[#0a1628] border border-[#1e3a5f] rounded-lg p-4 hover:border-[#c9a84c]/30 transition-colors">
                      <div className="text-center min-w-[3.5rem]">
                        <p className="text-[#c9a84c] text-xs font-bold">{stage}</p>
                        <p className="text-slate-500 text-xs">{label}</p>
                      </div>
                      <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 px-6">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[#c9a84c] font-bold text-2xl min-w-[2.5rem]">04</span>
                <h2 className="text-xl font-bold text-white">If You Never Stop, You Never Know</h2>
              </div>
              <div className="w-10 h-0.5 bg-[#c9a84c] mb-6 ml-16" />
              <div className="ml-16 space-y-4">
                <p className="text-slate-300 leading-relaxed">
                  Here is the clinical reality that almost no one in sales has ever been told: if you drink consistently enough that your body never fully clears alcohol, you will never experience withdrawal. And if you never experience withdrawal, you have no way of knowing that your body has become physically dependent on it.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  Withdrawal is the body&apos;s signal that it has been reconfigured around the presence of alcohol. It only appears in the absence of the substance. If the substance is always present — if the pattern is daily, or near-daily, with no extended dry periods — the signal never fires.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  You are not in denial. You are not hiding something. You genuinely do not know — because the information that would tell you is the information your drinking pattern has suppressed.
                </p>
                <div className="bg-[#0a1628] border border-[#c9a84c]/30 rounded-xl p-6 text-center my-4">
                  <p className="text-white text-lg font-bold leading-relaxed">
                    &quot;I don&apos;t have a problem. I would know if I had a problem.&quot;
                  </p>
                  <p className="text-slate-400 text-sm mt-3 leading-relaxed max-w-lg mx-auto">
                    This is the most common thing said by people who are physically dependent on alcohol and have never had a reason to stop long enough to find out.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 px-6 bg-[#0d1f3c] border-t border-[#1e3a5f]">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[#c9a84c] font-bold text-2xl min-w-[2.5rem]">05</span>
                <h2 className="text-xl font-bold text-white">You Thought It Was a Cold. It Was Withdrawal.</h2>
              </div>
              <div className="w-10 h-0.5 bg-[#c9a84c] mb-6 ml-16" />
              <div className="ml-16 space-y-4">
                <p className="text-slate-300 leading-relaxed">
                  Think about the last time you went a full day — or two — without drinking. Maybe a long flight. A family obligation. A day you were too sick to keep it down. Think about how you felt.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  Sweating. Anxious. Trouble sleeping. Shaky. Head pounding. Nauseous. Achy in a way that does not quite feel like a normal hangover. Maybe you attributed it to stress. Travel fatigue. Coming down with something. You had a drink and felt better within the hour — and moved on, assuming whatever it was had passed.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  It had not passed. You had treated it. Unknowingly. But you treated it.
                </p>
                <div className="mt-4 rounded-xl overflow-hidden border border-[#1e3a5f]">
                  <div className="bg-[#0a1628] px-5 py-3 border-b border-[#1e3a5f]">
                    <p className="text-[#c9a84c] text-xs font-bold uppercase tracking-wide">Withdrawal symptoms commonly mistaken for something else</p>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3">
                    {[
                      { symptom: "Sweating", mistaken: "Stress / travel" },
                      { symptom: "Shaking hands", mistaken: "Caffeine / nerves" },
                      { symptom: "Racing heart", mistaken: "Anxiety / pressure" },
                      { symptom: "Nausea", mistaken: "Bad food / cold" },
                      { symptom: "Headache", mistaken: "Dehydration" },
                      { symptom: "Insomnia", mistaken: "Stress / jet lag" },
                      { symptom: "Irritability", mistaken: "Work pressure" },
                      { symptom: "Body aches", mistaken: "Flu / illness" },
                      { symptom: "Foggy thinking", mistaken: "Fatigue / burnout" },
                    ].map(({ symptom, mistaken }) => (
                      <div key={symptom} className="bg-[#0d1f3c] p-4 border-b border-r border-[#1e3a5f]">
                        <p className="text-white text-sm font-semibold">{symptom}</p>
                        <p className="text-slate-500 text-xs mt-1">Often called: {mistaken}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-slate-300 leading-relaxed mt-4">
                  None of these symptoms on their own are alarming. That is exactly the problem. They are vague enough to be explained away — and a drink makes them disappear fast enough that there is never a reason to investigate further.
                </p>
                <div className="bg-[#0a1628] border-l-4 border-red-500/60 rounded-r-lg p-5">
                  <p className="text-red-400 font-bold text-sm mb-1">Important</p>
                  <p className="text-red-200/80 text-sm leading-relaxed">
                    Alcohol withdrawal in a physically dependent person can be medically dangerous — including seizure risk. If you are considering stopping or significantly reducing your drinking after a period of heavy daily use, do not do it alone. Speak with a medical professional or call C-Safe before you stop. This is not a warning to scare you. It is information you deserve to have.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 px-6">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[#c9a84c] font-bold text-2xl min-w-[2.5rem]">06</span>
                <h2 className="text-xl font-bold text-white">You Were Trained for Business. Not for This.</h2>
              </div>
              <div className="w-10 h-0.5 bg-[#c9a84c] mb-6 ml-16" />
              <div className="ml-16 space-y-4">
                <p className="text-slate-300 leading-relaxed">
                  At no point in your sales training, your onboarding, your quota calls, or your performance reviews did anyone sit across from you and explain what consistent alcohol exposure does to the human brain over time. No one described the physiology of dependence. No one told you that the same entertaining culture that gets you in front of clients also puts you at significantly elevated risk for alcohol use disorder.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  You were trained to read a room, manage objections, and close. You were not trained to recognize the signs that the environment was changing your brain chemistry. That is not a personal failure. It is a gap in the information you were given.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  The organizations that put you in those environments — the suites, the dinners, the events — had no system for monitoring the cumulative effect of that exposure on the people they sent in. Most still do not. The risk was built into the culture and nobody named it.
                </p>
                <div className="bg-[#0a1628] border-l-4 border-[#c9a84c] rounded-r-lg p-5">
                  <p className="text-white font-semibold mb-1">This is a business problem, not just a personal one</p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    The sales professional sitting on a dependency they do not recognize is not a liability to be managed. They are a person who was placed in a high-risk environment, given no tools to protect themselves, and is now paying a cost that the organization has never acknowledged. C-Safe works with companies to close that gap — before the person or the organization reaches a crisis point.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 px-6 bg-[#0d1f3c] border-t border-[#1e3a5f]">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[#c9a84c] font-bold text-2xl min-w-[2.5rem]">07</span>
                <h2 className="text-xl font-bold text-white">What the Body Is Actually Doing</h2>
              </div>
              <div className="w-10 h-0.5 bg-[#c9a84c] mb-6 ml-16" />
              <div className="ml-16 space-y-4">
                <p className="text-slate-300 leading-relaxed">
                  Alcohol is a central nervous system depressant. When consumed regularly, the brain compensates — it recalibrates its chemistry to account for the constant presence of a depressant by producing more stimulating chemicals to stay in balance.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  Over time, the brain stops being able to maintain that balance without alcohol in the system. When alcohol is removed — even briefly — the nervous system goes into an overactivated state. That is withdrawal. The sweating, the shaking, the anxiety, the racing heart. The system is firing too hard because it has been compensating for a depressant that is no longer there.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  This is not a character flaw. It is biology. The brain adapted to its environment — the same way it always does. The problem is that the environment was built to make that adaptation invisible until it had already happened.
                </p>
                <div className="space-y-2 mt-4">
                  {[
                    "The brain does not distinguish between social drinking and dependent drinking — it responds to quantity and frequency",
                    "Tolerance builds silently — needing more to feel the same is a physical signal, not a preference",
                    "The mood improvement from drinking is not enjoyment — it is the relief of withdrawal being treated",
                    "Sleep disrupted by alcohol looks like stress insomnia — the cause is rarely identified without clinical help",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="text-[#c9a84c] mt-1 text-xs shrink-0">▸</span>
                      <span className="text-slate-400 text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 px-6">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[#c9a84c] font-bold text-2xl min-w-[2.5rem]">08</span>
                <h2 className="text-xl font-bold text-white">What to Do When You Are Ready to Know the Truth</h2>
              </div>
              <div className="w-10 h-0.5 bg-[#c9a84c] mb-6 ml-16" />
              <div className="ml-16 space-y-4">
                <p className="text-slate-300 leading-relaxed">
                  You do not have to have an answer yet. You do not have to have made a decision. You do not have to be certain that what you are reading applies to you.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  All you have to have is a question. Something that made you read this guide. A moment you have been explaining away. A pattern you have noticed and then not noticed. A morning where something felt off and you are not entirely sure it was the coffee.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  That question is worth a conversation. A private one — outside of your company, outside of HR, outside of your doctor&apos;s office if you are not ready for it to be on record. A conversation with someone who understands the environment you have been operating in, the pressure that shaped your patterns, and what it actually takes to get an honest picture of where you are.
                </p>
                <div className="space-y-3 mt-4">
                  {[
                    { title: "Start with a controlled pause", body: "Pick a window — a weekend, a short trip — where you choose not to drink and pay attention to how you feel. Not to prove anything. Just to gather information. What your body does in that window will tell you more than anything else in this guide." },
                    { title: "Do not stop abruptly if you drink heavily every day", body: "If your pattern is daily, heavy drinking over an extended period, do not attempt to stop suddenly without medical supervision. Call C-Safe or a medical provider first. The conversation is confidential. The safety is not optional." },
                    { title: "Talk to someone who understands this specific world", body: "A general therapist, a GP, or a hotline is not equipped to navigate the culture-specific dynamics of sales, client entertainment, and high-performance business environments. C-Safe is. That specificity matters." },
                  ].map(({ title, body }, i) => (
                    <div key={title} className={`flex gap-4 rounded-lg p-5 border ${i % 2 === 0 ? "bg-[#0d1f3c] border-[#1e3a5f]" : "bg-[#0a1628] border-[#1e3a5f]"}`}>
                      <div className="w-1 bg-[#c9a84c] rounded-full shrink-0 self-stretch" />
                      <div>
                        <p className="text-white font-semibold mb-1">{title}</p>
                        <p className="text-slate-400 text-sm leading-relaxed">{body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Inline CTA */}
          <section className="py-10 px-6 bg-[#c9a84c]">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-[#0a1628] font-bold text-xl mb-2">You have been performing in a high-risk environment without a safety net. C-Safe is that net.</p>
              <p className="text-[#0a1628]/70 text-sm mb-6">One confidential call. No commitment. No record. Just clarity.</p>
              <a href="/#contact" className="inline-block bg-[#0a1628] text-white px-8 py-3 rounded font-bold hover:bg-[#0d1f3c] transition-colors">
                Request a Confidential Call
              </a>
            </div>
          </section>

          <section className="py-12 px-6 bg-[#0d1f3c] border-t border-[#1e3a5f]">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[#c9a84c] font-bold text-2xl min-w-[2.5rem]">09</span>
                <h2 className="text-xl font-bold text-white">What C-Safe Offers Sales Leaders and the Companies That Employ Them</h2>
              </div>
              <div className="w-10 h-0.5 bg-[#c9a84c] mb-6 ml-16" />
              <div className="ml-16 space-y-4">
                <p className="text-slate-300 leading-relaxed">
                  C-Safe works at two levels simultaneously: with the individual who is navigating a personal situation, and with the organization that employs them.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  {[
                    {
                      label: "For the sales professional",
                      items: [
                        "Confidential clinical assessment — no company record",
                        "Clear picture of where you actually are",
                        "Options explained without pressure or agenda",
                        "Vetted provider placement if treatment is indicated",
                        "Support through every step — including return to work",
                      ],
                    },
                    {
                      label: "For the organization",
                      items: [
                        "Proactive education on alcohol risk in sales culture",
                        "Policy frameworks that protect people and the company",
                        "Crisis response when a senior sales leader needs support",
                        "Family coverage included in retainer",
                        "24-hour advisory access — no waiting, no public intake",
                      ],
                    },
                  ].map(({ label, items }) => (
                    <div key={label} className="bg-[#0a1628] border border-[#c9a84c]/20 rounded-xl p-5">
                      <p className="text-[#c9a84c] text-xs font-bold uppercase tracking-wide mb-4">{label}</p>
                      <div className="space-y-2">
                        {items.map(item => (
                          <div key={item} className="flex items-start gap-2 text-sm text-slate-300">
                            <span className="text-[#c9a84c] mt-0.5 shrink-0">▸</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Bottom line */}
          <section className="py-14 px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-2">The Bottom Line</h2>
              <div className="w-10 h-0.5 bg-[#c9a84c] mb-6" />
              <div className="bg-[#0d1f3c] border border-[#c9a84c]/20 rounded-xl p-7 space-y-4">
                <p className="text-slate-300 leading-relaxed">
                  You did not get here because you are weak or reckless. You got here because you were good at your job, inside a culture that handed you a drink and called it relationship building. The environment did not come with a warning label. Nobody told you what the cumulative cost could be.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  Now you know. What you do with that information is the only thing that matters from here.
                </p>
                <p className="text-white font-bold text-base leading-relaxed">
                  The question is not whether the drink came with the job. It did. The question is whether you are going to let it stay.
                </p>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-20 px-6 bg-[#0a1628]">
            <div className="max-w-xl mx-auto text-center">
              <p className="text-[#c9a84c] text-xs font-semibold uppercase tracking-widest mb-4">C-Safe Wellness Group</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                You Already Have<br />
                <span className="text-[#c9a84c]">Enough Information to Make the Call.</span>
              </h2>
              <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-md mx-auto">
                A confidential conversation with C-Safe costs nothing and commits you to nothing.
                It is simply an honest conversation with someone who understands your world.
              </p>
              <a href="/#contact" className="inline-block bg-[#c9a84c] text-[#0a1628] px-10 py-4 rounded font-bold text-lg hover:bg-[#b8963f] transition-colors">
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
            This guide is for informational purposes only and does not constitute clinical, legal, or compliance advice.
            © 2026 C-Safe Wellness Group. All rights reserved.
          </p>
          <a href="mailto:info@csafeteam.com" className="text-[#c9a84c] text-sm font-semibold hover:underline whitespace-nowrap">
            info@csafeteam.com
          </a>
        </div>
      </footer>

    </div>
  );
}
