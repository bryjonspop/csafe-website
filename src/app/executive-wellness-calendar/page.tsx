import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Executive Wellness Calendar — 12-Month Leadership Program",
  description:
    "C-Safe's curated 12-month executive wellness calendar delivers monthly leadership programming — from mindfulness and massage to signature team experiences — fully managed for your C-suite.",
  alternates: {
    canonical: "https://www.csafeteam.com/executive-wellness-calendar",
  },
};

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
    desc: "Licensed massage therapists come to you. No scheduling apps, no commute — just 20 minutes of real relief for the people carrying the most weight. It's a small gesture that lands loud.",
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

export default function ExecutiveWellnessCalendar() {
  return (
    <div className="min-h-screen bg-[#0a1628] text-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a1628]/95 backdrop-blur border-b border-[#1e3a5f]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img src="/csafe-logo.png" alt="C-Safe Wellness Group logo" className="w-10 h-10 object-contain" />
            <span className="text-xl font-bold tracking-tight text-white">
              C-Safe <span className="text-[#c9a84c]">Wellness Group</span>
            </span>
          </a>
          <a
            href="/#contact"
            className="bg-[#c9a84c] text-[#0a1628] px-4 py-2 rounded font-semibold text-sm hover:bg-[#b8963f] transition-colors"
          >
            Request a Confidential Call
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-[#0a1628] via-[#0d1f3c] to-[#0a1628]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-[#c9a84c]/10 border border-[#c9a84c]/30 text-[#c9a84c] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            Add-On Program
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Executive Wellness Calendar
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-6">
            A curated 12-month leadership wellness program — fully managed by C-Safe, delivered to your team,
            and designed to build connection, reduce burnout, and make wellness a cultural expectation at the top.
          </p>
          <div className="inline-flex items-center gap-2 bg-[#c9a84c]/10 border border-[#c9a84c]/30 text-[#c9a84c] text-sm font-semibold px-5 py-2 rounded-full">
            Fully managed by C-Safe Wellness Group
          </div>
        </div>
      </section>

      {/* Full Calendar Grid */}
      <section className="py-16 px-6 bg-[#0d1f3c]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {WELLNESS_CALENDAR.map(({ month, title, desc, tag }) => (
              <div
                key={month}
                className="bg-[#0a1628] border border-[#1e3a5f] rounded-lg p-6 hover:border-[#c9a84c]/40 transition-colors flex flex-col gap-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest">{month}</span>
                  <span
                    className={`text-xs font-semibold border px-2 py-0.5 rounded-full ${
                      TAG_COLORS[tag] ?? "bg-slate-800 text-slate-400 border-slate-700"
                    }`}
                  >
                    {tag}
                  </span>
                </div>
                <h2 className="text-white font-bold text-base leading-snug">{title}</h2>
                <p className="text-slate-400 text-sm leading-relaxed flex-1">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-[#0a1628]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Add This to Your Retainer?
          </h2>
          <p className="text-slate-400 text-base leading-relaxed mb-8">
            This program is available as a standalone add-on or as part of a full C-Safe Wellness Group retainer.
            Pricing and scheduling are customized to your team size and company calendar.
          </p>
          <a
            href="/#contact"
            className="inline-block bg-[#c9a84c] text-[#0a1628] px-8 py-4 rounded font-bold text-lg hover:bg-[#b8963f] transition-colors"
          >
            Inquire About the Wellness Calendar
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a1628] border-t border-[#1e3a5f] py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/csafe-logo.png" alt="C-Safe Wellness Group logo" className="w-8 h-8 object-contain" />
            <span className="text-white font-bold">
              C-Safe <span className="text-[#c9a84c]">Wellness Group</span>
            </span>
          </div>
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} C-Safe Wellness Group. All rights reserved.
          </p>
          <a href="/" className="text-slate-400 text-sm hover:text-[#c9a84c] transition-colors">
            ← Back to Homepage
          </a>
        </div>
      </footer>
    </div>
  );
}
