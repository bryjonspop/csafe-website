import type { Metadata } from "next";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: { absolute: "Executive Behavioral Health FAQ | C-Safe Wellness Group" },
  description:
    "Answers to the most common questions organizations ask about executive mental health, substance use, intervention, confidentiality and crisis response — from C-Safe Wellness Group.",
  alternates: { canonical: "https://www.csafeteam.com/faq" },
  openGraph: { url: "https://www.csafeteam.com/faq", type: "website" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.csafeteam.com/" },
    { "@type": "ListItem", position: 2, name: "FAQ", item: "https://www.csafeteam.com/faq" },
  ],
};

const FAQ_PAGES = [
  {
    href: "/faq/what-is-executive-behavioral-health",
    q: "What is executive behavioral health?",
    preview: "Executive behavioral health addresses mental health, substance use and personal crises involving senior leaders — and why it requires a fundamentally different approach than standard employee support.",
    tag: "Foundational",
  },
  {
    href: "/faq/hr-executive-drinking-problem",
    q: "What should HR do if an executive has a drinking problem?",
    preview: "HR faces a uniquely difficult situation when the person with a problem outranks the process designed to handle it. Here is how to navigate it carefully and correctly.",
    tag: "HR Guidance",
  },
  {
    href: "/faq/how-to-intervene-with-a-ceo",
    q: "How do you intervene with a CEO?",
    preview: "Intervening with a senior executive requires clinical planning, organizational sensitivity and logistical readiness that standard intervention approaches are not built to handle.",
    tag: "Intervention",
  },
  {
    href: "/faq/when-should-board-get-involved",
    q: "When should a board get involved in an executive crisis?",
    preview: "Boards have fiduciary and governance responsibilities that make executive behavioral health crises a board-level concern — and knowing when to act makes all the difference.",
    tag: "Governance",
  },
  {
    href: "/faq/are-eaps-enough-for-executives",
    q: "Are EAPs enough for executives?",
    preview: "Employee Assistance Programs were not designed for executive situations. Understanding the gap is the first step to protecting your leadership team.",
    tag: "EAP vs. C-Safe",
  },
  {
    href: "/faq/executive-intervention-confidentiality",
    q: "How do you protect confidentiality during an executive intervention?",
    preview: "Confidentiality in executive interventions is not just a preference — it is a clinical, legal and organizational requirement. Here is how it is protected at every stage.",
    tag: "Confidentiality",
  },
];

const TAG_COLORS: Record<string, string> = {
  "Foundational": "bg-[#73a0b1]/10 text-[#73a0b1] border-[#73a0b1]/30",
  "HR Guidance": "bg-blue-900/30 text-blue-300 border-blue-700/30",
  "Intervention": "bg-[#c9a84c]/10 text-[#c9a84c] border-[#c9a84c]/30",
  "Governance": "bg-purple-900/30 text-purple-300 border-purple-700/30",
  "EAP vs. C-Safe": "bg-rose-900/30 text-rose-300 border-rose-700/30",
  "Confidentiality": "bg-green-900/30 text-green-300 border-green-700/30",
};

export default function FAQIndexPage() {
  return (
    <div className="min-h-screen bg-[#0a1628] text-white font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <NavBar />

      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-[#0a1628] via-[#0d1f3c] to-[#0a1628]">
        <div className="max-w-4xl mx-auto text-center">
          <nav aria-label="Breadcrumb" className="text-xs text-slate-500 mb-8 flex justify-center">
            <ol className="flex items-center gap-2">
              <li><a href="/" className="hover:text-slate-300">Home</a></li>
              <li className="text-slate-700">/</li>
              <li className="text-slate-400">FAQ</li>
            </ol>
          </nav>
          <div className="inline-block bg-[#c9a84c]/10 border border-[#c9a84c]/30 text-[#c9a84c] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            Executive Behavioral Health
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Questions Organizations Ask<br />
            <span className="text-[#c9a84c]">Before They Need to Ask Them</span>
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            These are the questions boards, HR leaders and General Counsel ask when a senior leader's
            wellbeing becomes an organizational concern. Direct answers — no jargon, no hedging.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#0d1f3c]">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          {FAQ_PAGES.map(({ href, q, preview, tag }) => (
            <a
              key={href}
              href={href}
              className="group bg-[#0a1628] border border-[#1e3a5f] rounded-xl p-6 hover:border-[#c9a84c]/40 transition-colors flex flex-col gap-3"
            >
              <span className={`self-start text-xs font-semibold border px-2 py-0.5 rounded-full ${TAG_COLORS[tag]}`}>
                {tag}
              </span>
              <h2 className="text-white font-bold text-base leading-snug group-hover:text-[#c9a84c] transition-colors">
                {q}
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed flex-1">{preview}</p>
              <span className="text-[#c9a84c] text-xs font-semibold mt-1">Read the answer →</span>
            </a>
          ))}
        </div>
      </section>

      <section className="py-14 px-6 bg-[#0a1628]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-slate-400 text-base leading-relaxed mb-8">
            Don't see your question here? C-Safe offers confidential consultations with no obligation and no names required at the initial stage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/services" className="border border-[#c9a84c]/40 text-[#c9a84c] px-6 py-3 rounded font-semibold text-sm hover:border-[#c9a84c] transition-colors">
              View All Services
            </a>
            <a href="/#contact" className="bg-[#c9a84c] text-[#0a1628] px-6 py-3 rounded font-semibold text-sm hover:bg-[#b8963f] transition-colors">
              Request a Confidential Call
            </a>
          </div>
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
