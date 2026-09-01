import type { Metadata } from "next";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: { absolute: "How Do You Intervene With a CEO? | C-Safe Wellness Group" },
  description:
    "A professional intervention with a CEO requires clinical planning, organizational sensitivity and logistical readiness that standard intervention approaches are not built to handle. Here is how it works.",
  alternates: { canonical: "https://www.csafeteam.com/faq/how-to-intervene-with-a-ceo" },
  openGraph: { url: "https://www.csafeteam.com/faq/how-to-intervene-with-a-ceo", type: "article" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "QAPage",
  name: "How Do You Intervene With a CEO?",
  mainEntity: {
    "@type": "Question",
    name: "How do you intervene with a CEO?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Intervening with a CEO requires a structured, professionally coordinated approach that accounts for the executive's unique position, the organization's needs, and the privacy requirements of everyone involved. Unlike a standard intervention, an executive intervention involves clinical planning, careful participant selection, organizational coordination, and a fully prepared treatment pathway before the conversation happens. C-Safe coordinates all elements of this process through vetted intervention professionals experienced with executive situations.",
    },
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.csafeteam.com/" },
    { "@type": "ListItem", position: 2, name: "FAQ", item: "https://www.csafeteam.com/faq" },
    { "@type": "ListItem", position: 3, name: "How Do You Intervene With a CEO?", item: "https://www.csafeteam.com/faq/how-to-intervene-with-a-ceo" },
  ],
};

export default function HowToInterveneCEOPage() {
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
              <li className="text-slate-400">How to Intervene With a CEO</li>
            </ol>
          </nav>
          <div className="inline-block bg-[#c9a84c]/10 border border-[#c9a84c]/30 text-[#c9a84c] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">Intervention</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            How Do You Intervene With a CEO?
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Intervening with a CEO is not the same as intervening with anyone else. The organizational dynamics, the power relationships and the consequences of a misstep are categorically different. Getting it right requires a different level of planning.
          </p>
        </div>
      </section>

      <article className="py-12 px-6 bg-[#0d1f3c]">
        <div className="max-w-3xl mx-auto space-y-8 text-slate-300 text-base leading-relaxed">

          <div>
            <h2 className="text-white text-xl font-bold mb-3">Why CEO Interventions Require a Different Approach</h2>
            <p>
              A standard intervention relies on the authority of personal relationships to motivate acceptance of care. With a CEO, the power dynamics in most relationships are reversed. Employees, direct reports and even family members may struggle to speak candidly because of the executive's position, temperament or past responses to challenge.
            </p>
            <p className="mt-3">
              There is also the organizational dimension. A poorly planned intervention can trigger defensive responses that surface publicly, expose the organization to legal risk, or permanently damage relationships that the business depends on. The stakes of getting it wrong are enormous — for the executive, for the people who care about them, and for the organization.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold mb-3">What a Professional Executive Intervention Actually Looks Like</h2>
            <p>
              A well-coordinated executive intervention is not a confrontation. It is a structured, carefully planned process designed to help the executive hear the impact of their behavior from the people who matter most to them — and to accept a pathway to care that is already prepared.
            </p>
            <p className="mt-3">
              The planning phase typically involves: a thorough clinical assessment of the situation and the executive's history, selection of the right intervention model, identification and preparation of participants, development of specific messages for each person in the room, and — critically — a confirmed treatment placement and logistics plan before the conversation begins. If the executive agrees to go, they go that day. There is no waiting, no scrambling, no opportunity for the decision to reverse.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold mb-3">Who Should Be in the Room</h2>
            <p>
              Participant selection is one of the most consequential decisions in an executive intervention. The wrong person in the room — someone who freezes under pressure, someone the executive has a damaged relationship with, someone who cannot deliver their message without escalating — can derail the entire process.
            </p>
            <p className="mt-3">
              In executive interventions, participants are often a carefully selected combination of family members, close personal relationships and, in some cases, professional peers or board members who have the standing to speak meaningfully. Each participant is prepared individually before the intervention. Everyone in the room knows their role and their message before they enter.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold mb-3">The Treatment Pathway Must Be Ready Before the Conversation</h2>
            <p>
              One of the most common mistakes in unplanned or poorly coordinated interventions is that the treatment logistics are not in place when the executive agrees to go. The window of agreement is narrow. If the answer is "yes" and the next question is "we need a few days to find a program," that window often closes. The executive retreats, rationalizes, or is advised by others not to follow through.
            </p>
            <p className="mt-3">
              In a properly coordinated executive intervention, the treatment program is identified, assessed for fit, and prepared to receive the executive before the intervention takes place. Transport is arranged. Logistics are managed. When the executive says yes, the path is already clear.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-bold mb-3">What Happens if the Executive Says No</h2>
            <p>
              Not every intervention results in immediate acceptance of care. A well-run intervention, even when the executive does not immediately agree to treatment, plants a clear and documented message — one that often leads to acceptance days or weeks later. It also establishes a record that the organization acted responsibly and offered a clinical pathway before pursuing other options.
            </p>
            <p className="mt-3">
              The clinical team and the organization need a clearly thought-through plan for this scenario before the intervention begins. What happens next if the executive says no is not a question to answer in the moment.
            </p>
          </div>

          <div className="bg-[#0a1628] border border-[#c9a84c]/20 rounded-xl p-6">
            <h2 className="text-white text-lg font-bold mb-3">C-Safe's Role in Executive Intervention</h2>
            <p>
              C-Safe coordinates all elements of the executive intervention process — clinical planning, participant preparation, treatment placement and logistics. We work with a vetted network of intervention professionals experienced specifically with executive and high-profile situations. Every intervention is planned around the executive's circumstances, privacy requirements and the organization's needs.
            </p>
            <p className="mt-3 text-sm text-slate-400">
              C-Safe is not an emergency service. If someone is in immediate danger, call <a href="tel:911" className="text-[#c9a84c]">911</a>. For immediate mental health crisis support, call or text <a href="tel:988" className="text-[#c9a84c]">988</a>.
            </p>
          </div>
        </div>
      </article>

      <section className="py-12 px-6 bg-[#0a1628]">
        <div className="max-w-3xl mx-auto">
          <p className="text-slate-500 text-xs font-semibold uppercase tracking-widest mb-5">Related Questions</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {[
              { href: "/faq/executive-intervention-confidentiality", label: "How do you protect confidentiality during an executive intervention?" },
              { href: "/faq/hr-executive-drinking-problem", label: "What should HR do if an executive has a drinking problem?" },
              { href: "/faq/when-should-board-get-involved", label: "When should a board get involved?" },
              { href: "/executive-intervention-services", label: "C-Safe Executive Intervention Services →" },
            ].map(({ href, label }) => (
              <a key={href} href={href} className="bg-[#0d1f3c] border border-[#1e3a5f] rounded-lg p-4 text-sm text-slate-300 hover:border-[#c9a84c]/40 hover:text-white transition-colors">
                {label} →
              </a>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/resources/first-48" className="flex-1 text-center border border-[#c9a84c]/40 text-[#c9a84c] px-6 py-3 rounded font-semibold text-sm hover:border-[#c9a84c] transition-colors">Read: The First 48 Hours</a>
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
