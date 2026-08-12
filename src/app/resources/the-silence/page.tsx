"use client";

import { useState } from "react";

export default function TheSilencePage() {
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
          subject: "The Silence Guide — Access Request",
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
            The Silence Is Costing You<br />
            <span className="text-[#c9a84c]">More Than the Problem</span>
          </h1>
          <p className="text-xl text-[#c9a84c] font-semibold mb-4">Why Leaders Refuse to Ask for Help — and What It&apos;s Actually Destroying</p>
          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8">
            The same instinct that made you a leader — handle it yourself, show no weakness, stay in control —
            is the instinct most likely to end your career, your marriage, and your health.
            This guide is for the leader who already knows something is wrong and hasn&apos;t told anyone yet.
          </p>
          <div className="w-16 h-0.5 bg-[#c9a84c] mx-auto" />
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#0d1f3c] border-y border-[#1e3a5f] py-8 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { stat: "77%", label: "of male executives report they would handle a personal crisis alone before involving anyone else" },
            { stat: "3x", label: "longer men in leadership wait to seek help compared to the general population" },
            { stat: "60%", label: "of executive derailments involve an unaddressed personal issue that was known but never disclosed" },
            { stat: "1", label: "honest conversation is often the difference between a manageable situation and a crisis" },
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
          A candid, clinically grounded look at why high-performing leaders — especially men —
          are the last to ask for help, and what that silence costs them at home and at work.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          {[
            "Why the traits that build careers make it hardest to ask for help",
            "Why men in leadership carry this burden more than anyone",
            "What asking for help actually signals to the people watching",
            "The hidden cost of staying silent while the problem compounds",
            "Why \"coming clean\" feels like confessing — and what that does to trust",
            "The question every spouse eventually asks — and why it breaks everything",
            "How the same trust rupture happens inside the organization",
            "What vulnerability looks like at the leadership level — and why it works",
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

          {/* Section 1 */}
          <section className="py-12 px-6 bg-[#0d1f3c] border-t border-[#1e3a5f]">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[#c9a84c] font-bold text-2xl min-w-[2.5rem]">01</span>
                <h2 className="text-xl font-bold text-white">The Myth That Built Your Career — and Is Now Working Against You</h2>
              </div>
              <div className="w-10 h-0.5 bg-[#c9a84c] mb-6 ml-16" />
              <div className="ml-16 space-y-4">
                <p className="text-slate-300 leading-relaxed">
                  You did not get to the top by asking for help. You got there by solving problems — quietly, independently, before anyone noticed they existed. You built a reputation for being the person who handles things. The one who does not panic. The one who always has an answer.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  That reputation is real. It is earned. And it is now the single biggest obstacle between you and the support you need.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  Because when the problem is personal — when it is addiction, or mental health, or a marriage quietly collapsing, or a dependency that started as a coping mechanism and became something else — the instinct to handle it yourself is still operating. Even when handling it yourself is not working. Even when it has not been working for a long time.
                </p>
                <div className="bg-[#0a1628] border-l-4 border-[#c9a84c] rounded-r-lg p-5">
                  <p className="text-white font-semibold mb-1">The core misread</p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Asking for help is not what weak people do. It is what people who understand leverage do. Every leader who has ever built something significant has known when to bring in expertise they did not have. That same judgment — applied to your personal life — is not vulnerability. It is strategy.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="py-12 px-6">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[#c9a84c] font-bold text-2xl min-w-[2.5rem]">02</span>
                <h2 className="text-xl font-bold text-white">Why Men in Leadership Carry This the Hardest</h2>
              </div>
              <div className="w-10 h-0.5 bg-[#c9a84c] mb-6 ml-16" />
              <div className="ml-16 space-y-4">
                <p className="text-slate-300 leading-relaxed">
                  This is not about gender as a limitation. It is about conditioning as a liability.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  Men in leadership — particularly in high-stakes industries — are shaped by a culture that treats stoicism as professionalism. Silence as strength. Emotional restraint as competence. That conditioning starts early, gets reinforced at every level of an organization, and becomes so embedded that it no longer feels like a choice. It feels like identity.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  The result is a specific kind of suffering: carrying weight alone, in a role where admitting weight exists feels like professional suicide. Men in these positions do not just avoid asking for help — they become skilled at performing the opposite. Everything is fine. Under control. Handled.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  Until it is not.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
                  {[
                    { label: "What they show", value: "Composure. Confidence. Control." },
                    { label: "What they carry", value: "Exhaustion. Shame. Isolation." },
                    { label: "What they need", value: "Permission to be honest about both." },
                  ].map(({ label, value }) => (
                    <div key={label} className="bg-[#0d1f3c] border border-[#1e3a5f] rounded-lg p-4 text-center">
                      <p className="text-[#c9a84c] text-xs font-bold uppercase tracking-wide mb-2">{label}</p>
                      <p className="text-slate-300 text-sm leading-snug">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="py-12 px-6 bg-[#0d1f3c] border-t border-[#1e3a5f]">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[#c9a84c] font-bold text-2xl min-w-[2.5rem]">03</span>
                <h2 className="text-xl font-bold text-white">The Cost of the Silence</h2>
              </div>
              <div className="w-10 h-0.5 bg-[#c9a84c] mb-6 ml-16" />
              <div className="ml-16 space-y-4">
                <p className="text-slate-300 leading-relaxed">
                  Problems that go unaddressed do not stay the same size. They grow. They change shape. They find their way into decisions, relationships, and performance in ways that are difficult to trace back to a source — until the source becomes impossible to ignore.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  The executive who is quietly struggling with alcohol does not wake up one morning in a different life. The deterioration is gradual — and then sudden. The missed signals. The slight changes in judgment. The slow withdrawal from people who might notice. By the time it becomes visible, it has been building for years.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  What the silence costs — at every stage:
                </p>
                <div className="space-y-2">
                  {[
                    "Decision quality degrades before performance metrics reflect it",
                    "Relationships absorb the stress of what isn't being said",
                    "The window for early, discreet intervention gets smaller every month",
                    "The longer the silence, the harder the eventual disclosure becomes",
                    "The problem and the performance of being fine become equally exhausting to maintain",
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

          {/* Section 4 */}
          <section className="py-12 px-6">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[#c9a84c] font-bold text-2xl min-w-[2.5rem]">04</span>
                <h2 className="text-xl font-bold text-white">When &quot;Coming Clean&quot; Feels Like Confessing</h2>
              </div>
              <div className="w-10 h-0.5 bg-[#c9a84c] mb-6 ml-16" />
              <div className="ml-16 space-y-4">
                <p className="text-slate-300 leading-relaxed">
                  Here is what no one talks about directly: for many leaders, asking for help does not just feel like admitting weakness. It feels like admitting they have been lying.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  If you have been telling your spouse, your board, your team — and yourself — that everything is fine, then disclosing the truth is not just an act of vulnerability. It is a correction of the record. And that correction raises an immediate and uncomfortable question for everyone in the room:
                </p>
                <div className="bg-[#0a1628] border border-[#c9a84c]/30 rounded-xl p-6 my-4 text-center">
                  <p className="text-white text-lg font-bold leading-relaxed italic">
                    &quot;If you were hiding this — what else have you been hiding?&quot;
                  </p>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  This is the fear underneath the fear. Not just the shame of the disclosure itself — but the door it opens. The credibility it calls into question. The inventory it invites.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  It is a legitimate fear. And it is why so many leaders wait far longer than they should. Not because they do not want to get better — but because the act of asking feels like it will cost them more than the problem already has.
                </p>
                <div className="bg-[#0a1628] border-l-4 border-[#c9a84c] rounded-r-lg p-5">
                  <p className="text-white font-semibold mb-1">The truth about disclosure</p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    The longer the silence, the more damage the disclosure does — not less. Every month the problem continues unaddressed adds to the weight of the eventual conversation. Coming forward early, voluntarily, with a plan already forming is not weakness. It is the most controlled version of a conversation that will happen one way or another.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="py-12 px-6 bg-[#0d1f3c] border-t border-[#1e3a5f]">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[#c9a84c] font-bold text-2xl min-w-[2.5rem]">05</span>
                <h2 className="text-xl font-bold text-white">The Question Every Spouse Eventually Asks</h2>
              </div>
              <div className="w-10 h-0.5 bg-[#c9a84c] mb-6 ml-16" />
              <div className="ml-16 space-y-4">
                <p className="text-slate-300 leading-relaxed">
                  In over a decade of clinical work with executives and their families, this is the pattern that emerges most consistently when a leader finally discloses something they have been carrying alone:
                </p>
                <p className="text-slate-300 leading-relaxed">
                  The spouse does not only respond to the thing being disclosed. They respond to the fact that it was hidden. And the disclosure — no matter how carefully delivered, no matter how much relief follows — immediately opens a second wound: the wound of the concealment itself.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  The question is not always spoken out loud. Sometimes it lives in the silence after. Sometimes it comes weeks later. But it comes:
                </p>
                <div className="bg-[#0a1628] border border-[#c9a84c]/30 rounded-xl p-6 my-4 text-center">
                  <p className="text-white text-lg font-bold italic leading-relaxed">
                    &quot;If I didn&apos;t know about this — what else don&apos;t I know?&quot;
                  </p>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  This is not paranoia. It is a rational response to a revised understanding of the relationship. Trust is not just built on what is shared — it is built on the confidence that what matters will be shared. When that confidence breaks, it does not break selectively. It calls everything into question.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  Rebuilding that trust — at home — requires time, consistency, transparency, and often clinical support for both partners. It is one of the most important and underestimated parts of any executive recovery process. Most treatment programs barely address it. C-Safe treats it as a core component of care.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section className="py-12 px-6">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[#c9a84c] font-bold text-2xl min-w-[2.5rem]">06</span>
                <h2 className="text-xl font-bold text-white">The Same Rupture Happens Inside the Organization</h2>
              </div>
              <div className="w-10 h-0.5 bg-[#c9a84c] mb-6 ml-16" />
              <div className="ml-16 space-y-4">
                <p className="text-slate-300 leading-relaxed">
                  The dynamics that play out at home play out in the boardroom. Different stakes, different language — same fundamental question.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  When an executive&apos;s personal situation becomes known — through disclosure or discovery — the organization does not only respond to the situation itself. It responds to the fact that the situation existed without their knowledge. Boards ask whether their fiduciary oversight was adequate. Investors reassess their confidence. Leadership teams quietly recalibrate.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div className="border border-red-900/40 rounded-lg overflow-hidden">
                    <div className="bg-red-950/60 px-4 py-3">
                      <span className="text-red-300 font-bold text-sm uppercase tracking-wide">Discovered, not disclosed</span>
                    </div>
                    <div className="bg-[#0a1628] px-4 py-4 space-y-3">
                      {[
                        "Organization learns through external event or third party",
                        "No plan exists — response is reactive",
                        "Trust is fractured: what else wasn't shared?",
                        "Board and investors operate from a position of unknown risk",
                        "Narrative is controlled by the event, not the executive",
                      ].map((item) => (
                        <div key={item} className="flex items-start gap-2 text-sm text-red-300/80">
                          <span className="mt-0.5 shrink-0">✗</span><span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="border border-emerald-900/40 rounded-lg overflow-hidden">
                    <div className="bg-emerald-950/60 px-4 py-3">
                      <span className="text-emerald-300 font-bold text-sm uppercase tracking-wide">Disclosed, with a plan</span>
                    </div>
                    <div className="bg-[#0a1628] px-4 py-4 space-y-3">
                      {[
                        "Executive controls the timing and framing of disclosure",
                        "C-Safe infrastructure already coordinating care",
                        "Trust is protected: proactive honesty signals strength",
                        "Board and investors see a leader making decisive moves",
                        "Narrative belongs to the executive — not the event",
                      ].map((item) => (
                        <div key={item} className="flex items-start gap-2 text-sm text-emerald-300/80">
                          <span className="mt-0.5 shrink-0">✓</span><span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section className="py-12 px-6 bg-[#0d1f3c] border-t border-[#1e3a5f]">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[#c9a84c] font-bold text-2xl min-w-[2.5rem]">07</span>
                <h2 className="text-xl font-bold text-white">What Asking for Help Actually Does to Leadership</h2>
              </div>
              <div className="w-10 h-0.5 bg-[#c9a84c] mb-6 ml-16" />
              <div className="ml-16 space-y-4">
                <p className="text-slate-300 leading-relaxed">
                  The assumption is that disclosure weakens a leader&apos;s position. The evidence says otherwise.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  Leaders who acknowledge difficulty — and respond to it with decisive, structured action — consistently generate more trust, not less. Not because people admire the struggle. Because they admire the response. The willingness to be honest about a hard thing and then do something about it is, in practice, one of the most powerful demonstrations of leadership capacity that exists.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  Vulnerability is not the absence of strength. It is strength operating without the protection of pretense. And the people in the room — the board, the team, the spouse — already know something is wrong. They have been waiting, often for a long time, to see whether you would address it or continue performing around it.
                </p>
                <div className="bg-[#0a1628] border-l-4 border-[#c9a84c] rounded-r-lg p-5 mt-4">
                  <p className="text-white font-semibold mb-1">What the room actually sees</p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    When a leader asks for help, the room does not see weakness. It sees someone who can accurately assess a situation — including one involving themselves — and take action. That is exactly the judgment the role requires. The leaders who lose credibility are not the ones who sought help. They are the ones who waited until the situation forced the conversation.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 8 */}
          <section className="py-12 px-6">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[#c9a84c] font-bold text-2xl min-w-[2.5rem]">08</span>
                <h2 className="text-xl font-bold text-white">Building the Bridge — At Home and at Work</h2>
              </div>
              <div className="w-10 h-0.5 bg-[#c9a84c] mb-6 ml-16" />
              <div className="ml-16 space-y-4">
                <p className="text-slate-300 leading-relaxed">
                  Trust, once fractured, is rebuilt through behavior — not words. Not one conversation. Not one apology. Not one good month. It is rebuilt through a pattern of transparency that is sustained long enough for people to update their assessment of you.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  At home, that means ongoing honesty about the process — not just the outcome. Your spouse does not need to know every clinical detail. They need to know you are engaged, that nothing significant is being withheld, and that the dynamic of carrying things alone has genuinely changed.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  At work, it means being visible in your recovery without making the recovery the story. The goal is not to perform vulnerability for the board. It is to demonstrate, through consistent and capable leadership, that the situation has been addressed and that your judgment is sound.
                </p>
                <div className="space-y-3 mt-4">
                  {[
                    { title: "Start with one person", body: "You do not have to disclose to everyone at once. The first honest conversation — with a spouse, a trusted colleague, or a professional advisor — is the hardest and the most important. Everything else follows from it." },
                    { title: "Have support before you have the conversation", body: "Disclosing without a plan in place is not courageous — it is destabilizing. C-Safe exists to be the infrastructure behind the disclosure: the clinical support, the communication strategy, the continuity plan." },
                    { title: "Rebuild through consistency, not confession", body: "Trust is not rebuilt in a single conversation. It is rebuilt in the weeks and months after — through the absence of new concealment, and the presence of new honesty." },
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
              <p className="text-[#0a1628] font-bold text-xl mb-2">The first call is the hardest one. We make it easier.</p>
              <p className="text-[#0a1628]/70 text-sm mb-6">C-Safe provides a confidential space to talk before any decision is made. No commitment. No record. Just clarity.</p>
              <a href="/#contact" className="inline-block bg-[#0a1628] text-white px-8 py-3 rounded font-bold hover:bg-[#0d1f3c] transition-colors">
                Request a Confidential Call
              </a>
            </div>
          </section>

          {/* Section 9 */}
          <section className="py-12 px-6 bg-[#0d1f3c] border-t border-[#1e3a5f]">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[#c9a84c] font-bold text-2xl min-w-[2.5rem]">09</span>
                <h2 className="text-xl font-bold text-white">What C-Safe Is Built For</h2>
              </div>
              <div className="w-10 h-0.5 bg-[#c9a84c] mb-6 ml-16" />
              <div className="ml-16 space-y-4">
                <p className="text-slate-300 leading-relaxed">
                  Most resources for executives in crisis are designed for the moment the situation becomes undeniable. C-Safe is designed for the moment before that — when the executive already knows something is wrong and has not yet decided what to do about it.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  A confidential conversation with C-Safe is not a commitment to treatment. It is not a disclosure to your organization. It is a private conversation with someone who has sat across from hundreds of leaders carrying exactly what you are carrying — and who can help you understand your options before any decision is made.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  We do not have beds to fill. We do not have quotas. We are not a referral service or an EAP. We are a dedicated advisory partner — and our only interest is in helping you make the most informed, most protected, most strategically sound decision for your life and your leadership.
                </p>
                <div className="space-y-2 mt-2">
                  {[
                    "Confidential — nothing leaves the conversation without your consent",
                    "No waiting lists — you speak with someone who knows this world, today",
                    "No organizational record — fully external to your company",
                    "Clinical expertise — not a coach, not a hotline, not a call center",
                    "Covering the whole picture — you, your family, and your organization",
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

          {/* Bottom line */}
          <section className="py-14 px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-2">The Bottom Line</h2>
              <div className="w-10 h-0.5 bg-[#c9a84c] mb-6" />
              <div className="bg-[#0d1f3c] border border-[#c9a84c]/20 rounded-xl p-7 space-y-4">
                <p className="text-slate-300 leading-relaxed">
                  You have built your career on the ability to solve problems. This is a problem. And like every other problem you have faced at the highest level, it requires the right resources — not just effort.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  Asking for help is not the thing that puts your career, your marriage, or your reputation at risk. Waiting is. The silence you are protecting is not protecting you. It is compounding the cost of a conversation that is coming regardless.
                </p>
                <p className="text-white font-bold text-base leading-relaxed">
                  The strongest move available to you right now is the one you have been putting off. Pick up the phone before the situation does it for you.
                </p>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-20 px-6 bg-[#0a1628]">
            <div className="max-w-xl mx-auto text-center">
              <p className="text-[#c9a84c] text-xs font-semibold uppercase tracking-widest mb-4">C-Safe Wellness Group</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                You Already Know<br />
                <span className="text-[#c9a84c]">Something Needs to Change.</span>
              </h2>
              <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-md mx-auto">
                A confidential call with C-Safe costs nothing and commits you to nothing.
                It is simply the conversation that should have happened earlier — and can still happen now.
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
