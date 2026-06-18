"use client";

import { useState } from "react";
import Link from "next/link";

type Answers = Record<string, string>;

const STEPS = [
  {
    id: "intro",
    label: "About You",
  },
  {
    id: "org",
    label: "Your Organization",
  },
  {
    id: "situation",
    label: "Your Situation",
  },
  {
    id: "readiness",
    label: "Readiness",
  },
];

export default function AssessmentPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [result, setResult] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const set = (key: string, value: string) =>
    setAnswers((prev) => ({ ...prev, [key]: value }));

  const canAdvance = () => {
    if (step === 0) return answers.name && answers.title && answers.inquiry_type;
    if (step === 1) return answers.decision_maker && answers.company_size && answers.industry;
    if (step === 2) return answers.salary_range && answers.education && answers.mh_experience;
    if (step === 3) return answers.urgency && answers.current_plan;
    return true;
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      await fetch(
        "https://alluring-encouragement-production.up.railway.app/public/lead_v3",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...answers,
            source: "csafe-consultants.sintra.site/assessment",
          }),
        }
      );
    } catch {
      // proceed regardless
    }
    await new Promise((r) => setTimeout(r, 2200));
    setSubmitting(false);
    setResult(true);
  };

  const SelectOption = ({
    field,
    value,
    label,
  }: {
    field: string;
    value: string;
    label: string;
  }) => (
    <button
      type="button"
      onClick={() => set(field, value)}
      className={`w-full text-left px-5 py-4 rounded-lg border text-sm transition-all duration-150 ${
        answers[field] === value
          ? "border-[#c9a84c] bg-[#c9a84c]/10 text-white"
          : "border-[#1e3a5f] bg-[#0a1628] text-slate-400 hover:border-[#c9a84c]/40 hover:text-slate-300"
      }`}
    >
      <span
        className={`inline-block w-4 h-4 rounded-full border mr-3 align-middle transition-colors ${
          answers[field] === value
            ? "border-[#c9a84c] bg-[#c9a84c]"
            : "border-slate-600"
        }`}
      />
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-[#0a1628] text-white font-sans">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a1628]/95 backdrop-blur border-b border-[#1e3a5f]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img src="/csafe-logo.png" alt="C-Safe Wellness Group" className="w-10 h-10 object-contain" />
            <span className="text-xl font-bold text-white">
              C-Safe <span className="text-[#c9a84c]">Wellness Group</span>
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm text-slate-300">
            <Link href="/#services" className="hover:text-[#c9a84c] transition-colors">Services</Link>
            <Link href="/team" className="hover:text-[#c9a84c] transition-colors">Our Team</Link>
            <Link href="/assessment" className="text-[#c9a84c] font-semibold">Fit Assessment</Link>
            <Link href="/#contact" className="bg-[#c9a84c] text-[#0a1628] px-4 py-2 rounded font-semibold hover:bg-[#b8963f] transition-colors">
              Request a Confidential Call
            </Link>
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
            <Link href="/#services" className="text-slate-300 hover:text-[#c9a84c]" onClick={() => setMenuOpen(false)}>Services</Link>
            <Link href="/team" className="text-slate-300 hover:text-[#c9a84c]" onClick={() => setMenuOpen(false)}>Our Team</Link>
            <Link href="/assessment" className="text-[#c9a84c] font-semibold" onClick={() => setMenuOpen(false)}>Fit Assessment</Link>
            <Link href="/#contact" className="text-[#c9a84c] font-semibold" onClick={() => setMenuOpen(false)}>Request a Confidential Call</Link>
          </div>
        )}
      </nav>

      <div className="max-w-2xl mx-auto px-6 pt-32 pb-24">

        {/* Result Screen */}
        {result ? (
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#c9a84c]/15 border-2 border-[#c9a84c] mb-8">
              <svg className="w-10 h-10 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="inline-block bg-[#c9a84c]/10 border border-[#c9a84c]/30 text-[#c9a84c] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              Assessment Complete
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
              {answers.name ? `${answers.name.split(" ")[0]}, you're` : "You're"} a Strong Fit<br />
              <span className="text-[#c9a84c]">for C-Safe Wellness Group.</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-xl mx-auto">
              Based on your responses, your organization is exactly the type of partner C-Safe Wellness Group
              was built to serve. You understand the stakes — and you&apos;re thinking about this the right way.
            </p>
            <p className="text-slate-400 text-base leading-relaxed mb-10 max-w-xl mx-auto">
              The next step is a brief, confidential conversation where we can learn more about your organization&apos;s
              specific situation and walk you through exactly how C-Safe works. No obligation. No pressure.
              Just a direct conversation with someone who has been in these situations before.
            </p>

            <div className="bg-[#0d1f3c] border border-[#c9a84c]/30 rounded-xl p-6 mb-8 text-left">
              <p className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest mb-3">What Happens Next</p>
              <div className="space-y-3">
                {[
                  "Your responses are reviewed confidentially before the call",
                  "You speak directly with a C-Safe clinical advisor — not a salesperson",
                  "We share how we would approach your organization's specific needs",
                  "You decide if it's the right fit — zero pressure, complete discretion",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="text-[#c9a84c] font-bold mt-0.5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="bg-[#c9a84c] text-[#0a1628] px-8 py-4 rounded font-bold text-lg hover:bg-[#b8963f] transition-colors"
              >
                Request My Confidential Call
              </Link>
              <Link
                href="/"
                className="border border-[#c9a84c]/40 text-[#c9a84c] px-8 py-4 rounded font-semibold text-lg hover:border-[#c9a84c] hover:bg-[#c9a84c]/10 transition-colors"
              >
                Learn More First
              </Link>
            </div>
          </div>
        ) : submitting ? (
          /* Analyzing screen */
          <div className="text-center py-20">
            <div className="relative inline-flex items-center justify-center w-20 h-20 mb-8">
              <div className="absolute inset-0 rounded-full border-2 border-[#c9a84c]/20 animate-ping" />
              <div className="absolute inset-0 rounded-full border-2 border-t-[#c9a84c] border-r-transparent border-b-transparent border-l-transparent animate-spin" />
              <div className="w-8 h-8 rounded-full bg-[#c9a84c]/20 border border-[#c9a84c]/40" />
            </div>
            <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-3">Reviewing Your Responses</p>
            <p className="text-white text-xl font-bold mb-2">Analyzing Your Fit Profile</p>
            <p className="text-slate-400 text-sm">This takes just a moment&hellip;</p>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="text-center mb-10">
              <div className="inline-block bg-[#c9a84c]/10 border border-[#c9a84c]/30 text-[#c9a84c] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
                Confidential Fit Assessment
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Is C-Safe the Right Partner<br />
                <span className="text-[#c9a84c]">for Your Organization?</span>
              </h1>
              <p className="text-slate-400 leading-relaxed max-w-lg mx-auto">
                C-Safe works with a select group of organizations. This brief assessment helps us understand
                your situation and determine how we can best serve you. Takes under 3 minutes.
              </p>
            </div>

            {/* Progress */}
            <div className="flex items-center gap-2 mb-10">
              {STEPS.map((s, i) => (
                <div key={s.id} className="flex items-center flex-1">
                  <div className="flex flex-col items-center flex-1">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border transition-all ${
                      i < step
                        ? "bg-[#c9a84c] border-[#c9a84c] text-[#0a1628]"
                        : i === step
                        ? "border-[#c9a84c] text-[#c9a84c] bg-[#c9a84c]/10"
                        : "border-[#1e3a5f] text-slate-600"
                    }`}>
                      {i < step ? (
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        i + 1
                      )}
                    </div>
                    <span className={`text-xs mt-1 font-medium ${i === step ? "text-[#c9a84c]" : "text-slate-600"}`}>
                      {s.label}
                    </span>
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className={`h-px flex-1 mx-1 mb-4 transition-colors ${i < step ? "bg-[#c9a84c]" : "bg-[#1e3a5f]"}`} />
                  )}
                </div>
              ))}
            </div>

            {/* Step 0 — About You */}
            {step === 0 && (
              <div className="space-y-5">
                <div>
                  <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wide mb-2">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    value={answers.name ?? ""}
                    onChange={(e) => set("name", e.target.value)}
                    placeholder="Jane Smith"
                    className="w-full bg-[#0a1628] border border-[#1e3a5f] rounded px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-[#c9a84c] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wide mb-2">
                    Your Title / Position *
                  </label>
                  <input
                    type="text"
                    value={answers.title ?? ""}
                    onChange={(e) => set("title", e.target.value)}
                    placeholder="Chief Human Resources Officer"
                    className="w-full bg-[#0a1628] border border-[#1e3a5f] rounded px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-[#c9a84c] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wide mb-3">
                    This inquiry is for... *
                  </label>
                  <div className="space-y-3">
                    <SelectOption field="inquiry_type" value="business" label="A business or organization I represent" />
                    <SelectOption field="inquiry_type" value="personal" label="A personal or family situation" />
                    <SelectOption field="inquiry_type" value="both" label="Both — professional and personal" />
                  </div>
                </div>
              </div>
            )}

            {/* Step 1 — Your Organization */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wide mb-3">
                    Are you a decision maker for your organization? *
                  </label>
                  <div className="space-y-3">
                    <SelectOption field="decision_maker" value="yes" label="Yes — I have full authority to make this decision" />
                    <SelectOption field="decision_maker" value="partial" label="Partial — I influence decisions but need approval" />
                    <SelectOption field="decision_maker" value="no" label="No — I am gathering information for someone else" />
                  </div>
                </div>
                <div>
                  <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wide mb-3">
                    Company size *
                  </label>
                  <div className="space-y-3">
                    <SelectOption field="company_size" value="under50" label="Under 50 employees" />
                    <SelectOption field="company_size" value="50-250" label="50 – 250 employees" />
                    <SelectOption field="company_size" value="250-1000" label="250 – 1,000 employees" />
                    <SelectOption field="company_size" value="1000+" label="1,000+ employees" />
                  </div>
                </div>
                <div>
                  <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wide mb-3">
                    Industry *
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      ["finance", "Finance / Banking"],
                      ["healthcare", "Healthcare"],
                      ["law", "Law / Legal Services"],
                      ["tech", "Technology"],
                      ["entertainment", "Entertainment / Media"],
                      ["pe", "Private Equity / VC"],
                      ["logistics", "Logistics / Supply Chain"],
                      ["other", "Other"],
                    ].map(([v, l]) => (
                      <SelectOption key={v} field="industry" value={v} label={l} />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 2 — Your Situation */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wide mb-3">
                    Executive compensation range (primary leader in question) *
                  </label>
                  <div className="space-y-3">
                    {[
                      ["60-90", "$60,000 – $90,000"],
                      ["90-150", "$90,000 – $150,000"],
                      ["150-200", "$150,000 – $200,000"],
                      ["200-250", "$200,000 – $250,000"],
                      ["250+", "$250,000+"],
                    ].map(([v, l]) => (
                      <SelectOption key={v} field="salary_range" value={v} label={l} />
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wide mb-3">
                    Highest level of education completed *
                  </label>
                  <div className="space-y-3">
                    {[
                      ["hs", "High School / GED"],
                      ["associates", "Associate's Degree"],
                      ["bachelors", "Bachelor's Degree"],
                      ["masters", "Master's Degree"],
                      ["doctorate", "Doctorate / Professional Degree (JD, MD, PhD, etc.)"],
                    ].map(([v, l]) => (
                      <SelectOption key={v} field="education" value={v} label={l} />
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wide mb-3">
                    Have you ever worked with mental health or addiction professionals before? *
                  </label>
                  <div className="space-y-3">
                    <SelectOption field="mh_experience" value="yes_positive" label="Yes — and it was a positive experience" />
                    <SelectOption field="mh_experience" value="yes_mixed" label="Yes — but it was mixed or unsatisfactory" />
                    <SelectOption field="mh_experience" value="no" label="No — this would be a first" />
                    <SelectOption field="mh_experience" value="unsure" label="Not sure / prefer not to say" />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3 — Readiness */}
            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wide mb-3">
                    Has your organization experienced a leadership disruption in the past 2 years? *
                  </label>
                  <div className="space-y-3">
                    <SelectOption field="disruption" value="yes_handled" label="Yes — and we handled it ourselves" />
                    <SelectOption field="disruption" value="yes_support" label="Yes — and we wished we had more support" />
                    <SelectOption field="disruption" value="no" label="No — but we want to be prepared" />
                    <SelectOption field="disruption" value="prefer_not" label="Prefer not to share" />
                  </div>
                </div>
                <div>
                  <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wide mb-3">
                    Does your organization currently have a formal plan for executive mental health crises? *
                  </label>
                  <div className="space-y-3">
                    <SelectOption field="current_plan" value="yes_formal" label="Yes — a documented, formal plan" />
                    <SelectOption field="current_plan" value="informal" label="Somewhat — we have informal protocols" />
                    <SelectOption field="current_plan" value="no" label="No — that's exactly why I'm here" />
                    <SelectOption field="current_plan" value="eap" label="We rely on our EAP" />
                  </div>
                </div>
                <div>
                  <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wide mb-3">
                    How would you describe the urgency of your inquiry? *
                  </label>
                  <div className="space-y-3">
                    <SelectOption field="urgency" value="proactive" label="Proactive — planning ahead before we need it" />
                    <SelectOption field="urgency" value="active" label="Active concern — a situation is developing" />
                    <SelectOption field="urgency" value="urgent" label="Urgent — we need support now" />
                    <SelectOption field="urgency" value="exploring" label="Exploratory — researching options" />
                  </div>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex gap-4 mt-10">
              {step > 0 && (
                <button
                  onClick={() => setStep((s) => s - 1)}
                  className="flex-1 border border-[#1e3a5f] text-slate-400 py-3.5 rounded font-semibold hover:border-[#c9a84c]/40 hover:text-slate-300 transition-colors"
                >
                  Back
                </button>
              )}
              {step < STEPS.length - 1 ? (
                <button
                  onClick={() => setStep((s) => s + 1)}
                  disabled={!canAdvance()}
                  className="flex-1 bg-[#c9a84c] text-[#0a1628] py-3.5 rounded font-bold text-base hover:bg-[#b8963f] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Continue
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={!canAdvance() || submitting}
                  className="flex-1 bg-[#c9a84c] text-[#0a1628] py-3.5 rounded font-bold text-base hover:bg-[#b8963f] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  See My Results
                </button>
              )}
            </div>

            <p className="text-center text-slate-600 text-xs mt-5">
              All responses are completely confidential and used solely to personalize your consultation.
            </p>
          </>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-[#0a1628] border-t border-[#1e3a5f] py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src="/csafe-logo.png" alt="C-Safe Wellness Group" className="w-7 h-7 object-contain" />
            <span className="text-white font-bold text-lg">
              C-Safe <span className="text-[#c9a84c]">Wellness Group</span>
            </span>
          </div>
          <p className="text-slate-500 text-sm text-center">
            Leadership you can trust. &copy; {new Date().getFullYear()} C-Safe Wellness Group.
          </p>
          <div className="flex gap-6 text-slate-500 text-sm">
            <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
            <Link href="/team" className="hover:text-slate-300 transition-colors">Our Team</Link>
            <Link href="/#contact" className="hover:text-slate-300 transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
