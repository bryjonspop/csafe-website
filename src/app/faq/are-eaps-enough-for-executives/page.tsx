import type { Metadata } from "next";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: { absolute: "Are EAPs Enough for Executives? | C-Safe Wellness Group" },
  description:
    "Employee Assistance Programs were not designed for executive situations. Understanding why EAPs fall short — and what organizations need instead — is the first step to protecting senior leadership.",
  alternates: { canonical: "https://www.csafeteam.com/faq/are-eaps-enough-for-executives" },
  openGraph: { url: "https://www.csafeteam.com/faq/are-eaps-enough-for-executives", type: "article" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "QAPage",
  name: "Are EAPs Enough for Executives?",
  mainEntity: {
    "@type": "Question",
    name: "Are EAPs enough for executives?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Employee Assistance Programs are not designed for executive situations. They were built for the general workforce and operate through public intake processes, limited session models and provider networks built for volume — not for the discretion, speed or clinical complexity that leadership-level situations require. EAPs also lack the organizational advisory function that executive behavioral health situations demand: helping boards, HR and General Counsel navigate the situation as an organizational matter, not just a personal one.",
    },
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.csafeteam.com/" },
    { "@type": "ListItem", position: 2, name: "FAQ", item: "https://www.csafeteam.com/faq" },
    { "@type": "ListItem", position: 3, name: "Are EAPs Enough for Executives?", item: "https://www.csafeteam.com/faq/are-eaps-enough-for-executives" },
  ],
};

export default function AreEAPsEnoughPage() {
  return (
    <div className="min-h-screen bg-[#0a1628] text-white font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <NavBar />

      <section className="pt-32 pb-12 px-6 bg-gradient-to-br from-[#0a1628] via-[#0d1f3c] to-[#0a1628]">
        <div className="max-w-3xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-xs text-slate-500 mb-8">
            <ol className="flex items-center gap-2">
              <li><a href="/" className="hover:text-slate-300">Home</a></li>
              <li className="text-slate-700">/</li>
              <li><a href="/faq" className="hover:text-slate-300">FAQ</a></li>
              <li className="text-slate-700">/</li>
              <li className="text-slate-400">Are EAPs Enough for Executives?</li>
            </ol>
          </nav>
          <div className="inline-block bg-rose-900/30 border border-rose-700/30 text-rose-300 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">EAP vs. C-Safe</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Are EAPs Enough for Executives?
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            No. And understanding why is important — not because EAPs are ineffective for the workforce they were designed to serve, but because executive situations expose the limits of what any general-population support program can do.
          </p>
        </div>
      </section>

      <article className="py-12 px-6 bg-[#0d1f3c]">
        <div className="max-w-3xl mx-auto space-y-8 text-slate-300 text-base leading-relaxed">

          <div>
            <h2 className="text-white text-xl font-bold mb-3">What EAPs Were Designed to Do</h2>
            <p>
              Employee Assistance Programs were created to provide accessible, short-term behavioral health support for the general workforce. They typically offer a limited number of counseling sessions, referrals to community providers, and basic crisis resources — delivered through a confidential, standardized intake process designed to serve thousands of employees across a large organization.
            </p>
            <p className="mt-3">
              For the population and the situations they were designed to serve, EAPs fulfill a genuine and important function. The problem is not the EAP. The problem is applying a general-workforce tool to an executive-tier situation that is categorically different.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold mb-3">Where EAPs Fall Short for Executives</h2>
            <div className="space-y-4 mt-3">
              {[
                {
                  title: "Public Intake Processes",
                  body: "EAP intake — even when described as confidential — runs through systems that the organization operates or contracts. For a senior leader, calling the EAP number creates a record that exists within or adjacent to company infrastructure. This alone is often enough to prevent executives from ever making the call.",
                },
                {
                  title: "Session Limits and Provider Networks Built for Volume",
                  body: "EAPs typically offer 3–8 sessions before transitioning to other services. Executive behavioral health situations — particularly those involving substance use, leadership impairment or acute crisis — require clinical depth and continuity that short-term session models cannot provide.",
                },
                {
                  title: "No Organizational Advisory Function",
                  body: "EAPs serve the individual employee. They are not designed to advise boards, HR or General Counsel on how to navigate an executive behavioral health situation as an organizational matter. When the executive is the CEO, the situation is simultaneously personal and institutional — and managing only the personal dimension leaves the organization exposed.",
                },
                {
                  title: "Insufficient Treatment Network",
                  body: "Executive situations often require access to elite, specialized clinical programs that operate with the discretion, privacy and quality that leadership-level care demands. EAP networks are built for accessibility and breadth, not for the clinical specificity and privacy standards that executive placement requires.",
                },
                {
                  title: "No Crisis Response Capability",
                  body: "EAPs are not built for rapid mobilization in active crisis situations. When a senior leader needs to be in a clinical setting within 24–48 hours, the EAP referral-and-scheduling model does not have the infrastructure to support it.",
                },
              ].map(({ title, body }) => (
                <div key={title} className="bg-[#0a1628] border border-[#1e3a5f] rounded-lg p-5">
                  <h3 className="text-white font-semibold mb-2">{title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold mb-3">What Organizations Need Instead</h2>
            <p>
              Organizations that take executive risk seriously need an advisory relationship that is in place before a crisis emerges — one that provides independent clinical guidance, rapid response capability, access to elite treatment resources and the organizational advisory function that EAPs do not offer.
            </p>
            <p className="mt-3">
              This does not replace the EAP for the general workforce. It supplements it at the executive tier — where the stakes, the privacy requirements and the organizational complexity are categorically different.
            </p>
          </div>

          <div className="bg-[#0a1628] border border-[#c9a84c]/20 rounded-xl p-6">
            <h2 className="text-white text-lg font-bold mb-3">How C-Safe Is Different from an EAP</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3 text-sm">
              {[
                ["EAP", "C-Safe"],
                ["General workforce", "C-suite and senior leadership only"],
                ["3–8 session model", "Unlimited access for covered executives"],
                ["Public intake process", "Fully external, no company paper trail"],
                ["Referral-based", "Direct advisory and coordination"],
                ["No org. advisory function", "Advises boards, HR and GC directly"],
                ["Standard provider network", "National Clinical Network, vetted for executive fit"],
              ].map(([left, right], i) => (
                <div key={i} className={`flex gap-2 ${i === 0 ? "font-semibold text-white col-span-2" : ""}`}>
                  {i === 0 ? (
                    <>
                      <span className="flex-1 text-slate-500 uppercase tracking-wider text-xs">{left}</span>
                      <span className="flex-1 text-[#c9a84c] uppercase tracking-wider text-xs">{right}</span>
                    </>
                  ) : (
                    <>
                      <span className="flex-1 text-slate-500">{left}</span>
                      <span className="flex-1 text-slate-300">{right}</span>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>

      <section className="py-12 px-6 bg-[#0a1628]">
        <div className="max-w-3xl mx-auto">
          <p className="text-slate-500 text-xs font-semibold uppercase tracking-widest mb-5">Related Questions</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {[
              { href: "/faq/what-is-executive-behavioral-health", label: "What is executive behavioral health?" },
              { href: "/faq/hr-executive-drinking-problem", label: "What should HR do if an executive has a drinking problem?" },
              { href: "/faq/when-should-board-get-involved", label: "When should a board get involved?" },
              { href: "/services", label: "View C-Safe's full service framework →" },
            ].map(({ href, label }) => (
              <a key={href} href={href} className="bg-[#0d1f3c] border border-[#1e3a5f] rounded-lg p-4 text-sm text-slate-300 hover:border-[#c9a84c]/40 hover:text-white transition-colors">
                {label} →
              </a>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/assessment" className="flex-1 text-center border border-[#c9a84c]/40 text-[#c9a84c] px-6 py-3 rounded font-semibold text-sm hover:border-[#c9a84c] transition-colors">Take the Fit Assessment</a>
            <a href="/#contact" className="flex-1 text-center bg-[#c9a84c] text-[#0a1628] px-6 py-3 rounded font-semibold text-sm hover:bg-[#b8963f] transition-colors">Request a Confidential Call</a>
          </div>
        </div>
      </section>

      <footer className="bg-[#0a1628] border-t border-[#1e3a5f] py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-white font-bold">C-Safe <span className="text-[#c9a84c]">Wellness Group</span></span>
          <p className="text-slate-500 text-sm">&copy; {new Date().getFullYear()} C-Safe Wellness Group. All rights reserved.</p>
          <a href="/faq" className="text-slate-400 text-sm hover:text-[#c9a84c] transition-colors">← All FAQ</a>
        </div>
      </footer>
    </div>
  );
}
