"use client";

import { useState } from "react";

export default function QuestionsFamiliesForgetPage() {
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
          subject: "Treatment Center Guide — Access Request",
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
            The Questions Every<br />Family Forgets to Ask
          </h1>
          <p className="text-xl text-[#c9a84c] font-semibold mb-4">A C-Safe Guide to Selecting the Right Treatment Center</p>
          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8">
            Most families make the most important decision of their lives in the worst possible moment.
            Treatment centers know this — and many count on it. This guide gives you the 13 questions
            that separate a life-changing placement from a costly mistake.
          </p>
          <div className="w-16 h-0.5 bg-[#c9a84c] mx-auto" />
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#0d1f3c] border-y border-[#1e3a5f] py-8 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { stat: "14,000+", label: "treatment facilities operating in the U.S. — quality varies dramatically" },
            { stat: "1 in 3", label: "treatment centers employ clinicians working under supervision, not fully licensed" },
            { stat: "4", label: "individual therapy sessions in a typical 30-day stay at one session per week" },
            { stat: "72%", label: "of families report they did not know what to ask before selecting a facility" },
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
          13 questions every executive family should ask before a single intake form is signed —
          and what the answers actually mean.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          {[
            "Whether your therapist is actually fully licensed — or working toward it",
            "What one session per week really looks like across a 30-day stay",
            "Why treatment center reviews cannot be trusted at face value",
            "How to tell if unlicensed staff are running clinical therapy groups",
            "What to ask about medication management and withdrawal protocols",
            "Whether the program is gender-specific, age-appropriate, and specialized",
            "The family program question every center answers well — and almost none execute",
            "What scholarship clients reveal about a facility's real priorities",
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

      {/* FULL GUIDE — shown after access granted */}
      {accessGranted && (
        <div id="guide-content">

          {/* Intro */}
          <section className="py-10 px-6 bg-[#0d1f3c] border-t border-[#1e3a5f]">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-2">Why These Questions Matter</h2>
              <div className="w-10 h-0.5 bg-[#c9a84c] mb-6" />
              <p className="text-slate-300 leading-relaxed mb-4">
                Every treatment center will tell you they are the best option for your loved one. They will use
                words like &quot;evidence-based,&quot; &quot;trauma-informed,&quot; and &quot;individualized care.&quot;
                These words cost nothing to say.
              </p>
              <p className="text-slate-300 leading-relaxed mb-6">
                The questions in this guide cost them something to answer honestly. Ask every one of them —
                before a single intake form is signed.
              </p>
              <div className="bg-[#0a1628] border-l-4 border-[#c9a84c] rounded-r-lg p-5">
                <p className="text-white font-semibold mb-1">The C-Safe Standard</p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  C-Safe vets every facility in our network against these standards before they are ever offered
                  as an option. We ask these questions before a single recommendation is made — so you never
                  have to navigate this alone.
                </p>
              </div>
            </div>
          </section>

          {/* Questions 1–13 */}
          {[
            {
              num: "01",
              title: "Who Is Actually Doing the Clinical Work?",
              ask: "Are your therapists fully licensed, or are they working toward licensure under supervision?",
              body: `This is the single most misrepresented fact in the industry. When a center says "fully licensed clinicians," what they often mean is: one fully licensed clinician supervising several associates still accumulating hours toward their own license. That associate is doing your loved one's therapy. The supervisor may see them briefly once a week — or less.

This is legal. It is common. It is not what the brochure implies.`,
              bullets: [
                "\"Licensed Professional Counselor Associate\" (LPC A), \"Registered Intern,\" \"Pre-licensed\" — these are supervised clinicians, not fully independent practitioners",
                "Ask how many supervisees one supervisor carries — the higher that number, the less oversight each clinician receives",
                "Ask specifically: who will be my loved one's primary therapist, and what is their exact licensure status?",
              ],
              flag: null,
            },
            {
              num: "02",
              title: "What Is the Treatment Model?",
              ask: "Is this a 12 step program, and what other clinical models do you use?",
              body: "12 step (AA/NA) is the most widely known framework in recovery — and it works for many people. But it is not the only approach, and it is not the right fit for everyone. Other evidence-based models include SMART Recovery, CBT, DBT, Motivational Interviewing, and Trauma Informed Care. Centers that only offer 12 step programming with no clinical model to back it up are running a peer support group, not a treatment program.",
              bullets: [
                "Ask what evidence-based clinical modalities are embedded into daily programming — not just listed on the website",
                "12 step is a peer support framework, not psychotherapy — both have value, neither replaces the other",
                "Ask how clinical therapy and peer support are integrated into the weekly schedule",
              ],
              flag: "Centers that cannot name a specific clinical modality beyond 12 step are a warning sign.",
            },
            {
              num: "03",
              title: "How Many Clients Is Each Therapist Carrying?",
              ask: "What is the average caseload for a primary therapist at your facility?",
              body: "This number tells you more about quality of care than any testimonial on their website. Industry standard is 1 therapist per 8 to 12 clients in a residential setting. Above 15 is a warning sign. Above 20 is a crisis. A therapist carrying 20 clients in a 30 day program cannot give each person meaningful clinical attention. What you get instead is group therapy dressed up as individual care.",
              bullets: [
                "Ask the specific number — not a range, not an estimate",
                "Ask whether caseloads vary by program level (residential vs. PHP vs. IOP)",
                "High caseloads are often hidden behind warm marketing language about community and connection",
              ],
              flag: null,
            },
            {
              num: "04",
              title: "How Many Individual Therapy Sessions Per Week?",
              ask: "How many one on one therapy sessions will my loved one have each week?",
              body: "One session per week is the industry norm. It is not enough. Here is what one session per week looks like across a standard 30 day stay: Session 1 is getting to know you. Session 2 identifies core issues. Session 3 begins doing real work. Session 4 is discharge planning. That is your 30 day individual therapy experience.",
              bullets: [
                "Ask for two or more individual sessions per week minimum",
                "Ask to see a sample weekly schedule before admission — not after",
                "Ask how treatment goals are documented and tracked between sessions",
              ],
              flag: "One session per week in a 30 day program means 4 total individual therapy sessions. That is not treatment. That is an introduction.",
            },
            {
              num: "05",
              title: "Do Techs Run Groups?",
              ask: "Who facilitates your therapy groups — licensed clinicians or behavioral health technicians?",
              body: "Behavioral health technicians are essential to residential care. They provide supervision, structure, and peer support around the clock. Many are in recovery themselves and bring genuine lived experience. What they are not is clinicians. At many facilities, techs are running psychotherapy groups — process groups, trauma groups, grief groups. These are clinical interventions requiring graduate-level training and licensure. Running them without that foundation is not just ineffective. In trauma cases, it can cause harm.",
              bullets: [
                "Ask specifically who facilitates process groups and psychoeducation groups",
                "Ask for the clinical credentials of every group facilitator by name",
                "Ask whether a licensed clinician is present during group therapy or available for immediate supervision after",
              ],
              flag: "If the answer involves phrases like \"peers in recovery\" or \"our team\" without credential specifics — push harder.",
            },
            {
              num: "06",
              title: "Is the Program Specialized — Alcohol, Drugs, or Mental Health?",
              ask: "Does your program specialize in alcohol use disorder, substance use disorder, or co occurring mental health conditions?",
              body: "Most centers say yes to all three. Very few specialize in all three. When a client comes in with both a substance use disorder and a diagnosable mental health condition, they are diagnosed with co occurring disorders. Every accredited center is required to address this. Almost none are equally skilled at both sides of it. Centers that treat addiction as primary and mental health as secondary — or vice versa — will miss half the picture.",
              bullets: [
                "Is there a psychiatrist or psychiatric nurse practitioner on staff — not on call, but on staff daily?",
                "How is the mental health component structured separately from the addiction component?",
                "What percentage of their current client population carries a co occurring diagnosis?",
              ],
              flag: null,
            },
            {
              num: "07",
              title: "Medication Management: What Do They Use and Who Manages It?",
              ask: "What medications do you use for withdrawal management, and is there a physician on site?",
              body: "Withdrawal from alcohol, benzodiazepines, or opioids can be medically dangerous. Alcohol and benzo withdrawal can cause seizures and death — medical supervision is non-negotiable. Opioid withdrawal is rarely fatal but can be made significantly safer with medication assisted treatment (MAT) including Suboxone, Vivitrol, or Methadone. Centers that are ideologically opposed to MAT and force clients off medically necessary medications in the name of being drug-free are prioritizing a philosophy over a person's health.",
              bullets: [
                "Is there a licensed physician or Medical Director overseeing withdrawal protocols on site?",
                "What is your position on medication assisted treatment (MAT)?",
                "Will my loved one be required to discontinue current psychiatric medications during treatment?",
                "What happens if a medical complication arises overnight?",
              ],
              flag: "Ideological opposition to MAT for opioid use disorder is not a clinical position. It is a policy. Ask them to defend it with evidence.",
            },
            {
              num: "08",
              title: "Is There a Real Family Program?",
              ask: "Describe your family program — what does it include, and how often does it meet?",
              body: "Family programming is one of the most effective predictors of long term recovery. It is also one of the most overpromised and underdelivered services in the industry. Every center has a family program. What they often mean is a family weekend once per month, a few handouts, and a referral to Al Anon.",
              bullets: [
                "Weekly family therapy sessions with a licensed clinician — virtual or in person",
                "Individual support for family members, not just education about the patient",
                "A structured reintegration plan before discharge — not developed the day of discharge",
                "Ask how many families are currently actively engaged in the program",
              ],
              flag: "Easy to sell. Hard to execute. Ask the follow up questions.",
            },
            {
              num: "09",
              title: "Do Not Trust the Reviews",
              ask: "How do you collect client reviews, and at what point in treatment are clients asked to leave them?",
              body: "Many treatment centers include client reviews as an informal or semi formal part of the discharge process. Clients are encouraged — and in some cases quietly expected — to leave a positive review before they leave. These reviews are written by real people in an emotionally vulnerable, grateful state at the exact moment a center has the most influence over them. They cannot tell you how long clients stay sober after discharge, whether the program was clinically sound, or whether the staff credentials match what the website claims.",
              bullets: [
                "Use reviews as one data point among many — not as a decision",
                "Search for patterns in negative reviews, not just their volume",
                "Ask the center directly how and when they collect reviews",
                "Independent verification through a qualified professional is the only reliable standard",
              ],
              flag: null,
            },
            {
              num: "10",
              title: "Do They Scholarship Clients?",
              ask: "Do you offer scholarship or sliding scale placements for clients without full ability to pay?",
              body: "This question is not about finances. It is about character. Centers that offer scholarship placements are demonstrating that their primary commitment is to clinical outcomes — not revenue. They are willing to absorb cost for the right client. They are building reputation, not just census. This is not a disqualifier if a center does not offer scholarships — but if they do, it is a meaningful signal about the values of the clinical leadership running the program.",
              bullets: [
                "Ask directly — most centers will not volunteer this information",
                "A yes speaks to mission-driven leadership at the top",
                "A strong reaction to the question speaks to something else",
              ],
              flag: null,
            },
            {
              num: "11",
              title: "Is the Program Gender-Specific?",
              ask: "Do you offer gender-specific treatment tracks or groups?",
              body: "Men and women face meaningfully different challenges in recovery — different trauma patterns, different social pressures, different relationship dynamics, different biological responses to substances. The research supports gender-responsive treatment, particularly for women with trauma histories. A one size fits all approach in a co-ed mixed-gender setting often means the program was designed for the majority — and that majority, historically, has been male.",
              bullets: [
                "Are there gender-specific process groups and therapy tracks?",
                "Are living and programming spaces separated in co-ed settings?",
                "Are there clinicians with specific training in gender-responsive treatment?",
              ],
              flag: null,
            },
            {
              num: "12",
              title: "Is the Program Age-Appropriate?",
              ask: "What is the general age range of your current client population?",
              body: "A 55 year old executive sharing a group with 22 year olds is not therapeutic — it is awkward, often counterproductive, and a clinical mismatch. Life context, career pressure, generational attitudes toward mental health, and recovery identity all vary significantly across age groups. Treatment designed for the general adult population often fails leadership-level individuals who have spent decades managing how they present to the world.",
              bullets: [
                "Ask for the actual age range of the current census — not a marketing answer",
                "Ask whether there are tracks specifically for mid-career or senior professionals",
                "Ask whether the program has experience with high-functioning, high-accountability individuals",
              ],
              flag: null,
            },
            {
              num: "13",
              title: "What Type of Recovery Approach Does the Program Use?",
              ask: "Is your program 12 step, holistic, faith-based, evidence-based clinical — or a combination?",
              body: "Programs vary widely: 12 step is peer-supported and spiritually grounded but is not a clinical model on its own. Evidence-based clinical (CBT, DBT, EMDR) requires trained clinicians and is the standard of care. Holistic approaches incorporate yoga, mindfulness, nutrition, and expressive arts — valuable as adjuncts, not as replacements. Faith-based recovery is transformative for some and inappropriate for others. None of these are wrong. All of them are incomplete without clinical structure underneath.",
              bullets: [
                "Ask how clinical therapy and adjunct programming are integrated — not just listed",
                "Ask what a typical day looks like hour by hour",
                "Ask what happens if a client does not connect with the spiritual or faith component",
              ],
              flag: null,
            },
          ].map(({ num, title, ask, body, bullets, flag }) => (
            <section key={num} className={`py-12 px-6 ${parseInt(num) % 2 === 0 ? "bg-[#0d1f3c] border-t border-[#1e3a5f]" : ""}`}>
              <div className="max-w-3xl mx-auto">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[#c9a84c] font-bold text-2xl min-w-[2.5rem]">{num}</span>
                  <h2 className="text-xl font-bold text-white">{title}</h2>
                </div>
                <div className="w-10 h-0.5 bg-[#c9a84c] mb-5 ml-16" />
                <div className="ml-16">
                  <div className="bg-[#0a1628] border border-[#1e3a5f] rounded-lg px-4 py-3 mb-5 flex items-start gap-3">
                    <span className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest shrink-0 mt-0.5">Ask</span>
                    <p className="text-slate-300 text-sm italic">&quot;{ask}&quot;</p>
                  </div>
                  {body.split("\n\n").map((para, i) => (
                    <p key={i} className="text-slate-300 leading-relaxed mb-4">{para}</p>
                  ))}
                  <div className="space-y-2 mb-5">
                    {bullets.map((b) => (
                      <div key={b} className="flex items-start gap-3">
                        <span className="text-[#c9a84c] mt-1 text-xs shrink-0">▸</span>
                        <span className="text-slate-400 text-sm leading-relaxed">{b}</span>
                      </div>
                    ))}
                  </div>
                  {flag && (
                    <div className="bg-[#0a1628] border-l-4 border-red-500/60 rounded-r-lg p-4">
                      <p className="text-red-300 text-sm leading-relaxed"><span className="font-bold text-red-400">Red flag: </span>{flag}</p>
                    </div>
                  )}
                </div>
              </div>
            </section>
          ))}

          {/* Inline CTA */}
          <section className="py-10 px-6 bg-[#c9a84c]">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-[#0a1628] font-bold text-xl mb-2">You should not have to become an expert to get expert care.</p>
              <p className="text-[#0a1628]/70 text-sm mb-6">C-Safe asks these questions before a single recommendation is made. That is what we are built for.</p>
              <a href="/#contact" className="inline-block bg-[#0a1628] text-white px-8 py-3 rounded font-bold hover:bg-[#0d1f3c] transition-colors">
                Request a Confidential Call
              </a>
            </div>
          </section>

          {/* Bottom line */}
          <section className="py-14 px-6 bg-[#0d1f3c] border-t border-[#1e3a5f]">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-2">The Bottom Line</h2>
              <div className="w-10 h-0.5 bg-[#c9a84c] mb-6" />
              <p className="text-slate-300 leading-relaxed mb-4">
                Every treatment center will tell you they are the best option for your loved one. They will use
                words like &quot;evidence-based,&quot; &quot;trauma-informed,&quot; &quot;individualized care,&quot;
                and &quot;family-centered.&quot; These words cost nothing to say.
              </p>
              <p className="text-slate-300 leading-relaxed mb-6">
                The questions in this guide cost them something to answer honestly. Ask every one of them.
              </p>
              <div className="bg-[#0a1628] border border-[#c9a84c]/20 rounded-xl p-6">
                <p className="text-white font-bold text-base mb-2">
                  C-Safe Wellness Group exists because too many families were never told what to ask —
                  and too many executives paid for that silence with their careers, their families,
                  and sometimes their lives.
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  We ask these questions before a single recommendation is made. We vet every center in our
                  network against these standards before they are ever offered as an option. And we stay in
                  the room through every step of the process — so you are never navigating this alone.
                </p>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-20 px-6 bg-[#0a1628]">
            <div className="max-w-xl mx-auto text-center">
              <p className="text-[#c9a84c] text-xs font-semibold uppercase tracking-widest mb-4">C-Safe Wellness Group</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Talk to Someone<br />
                <span className="text-[#c9a84c]">Who Already Knows the Answers?</span>
              </h2>
              <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-md mx-auto">
                A confidential conversation with C-Safe costs nothing. We will tell you exactly what to ask,
                what to listen for, and whether a facility meets the standard before you commit.
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
            This guide is for informational purposes only and does not constitute clinical, legal, or compliance advice.
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
