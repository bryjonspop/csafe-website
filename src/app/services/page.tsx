import type { Metadata } from "next";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: {
    absolute: "Executive Behavioral Health Services for Companies | C-Safe",
  },
  description:
    "Confidential executive crisis response, intervention, treatment placement, family support and return-to-work planning for CEOs, boards, HR and General Counsel.",
  alternates: {
    canonical: "https://www.csafeteam.com/services",
  },
  openGraph: {
    url: "https://www.csafeteam.com/services",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.csafeteam.com/" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.csafeteam.com/services" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Executive Behavioral Health Advisory",
  provider: {
    "@type": "Organization",
    name: "C-Safe Wellness Group",
    url: "https://www.csafeteam.com",
  },
  description:
    "Confidential executive behavioral health advisory covering crisis response, intervention coordination, independent treatment placement, family support and leadership recovery planning for senior executives at mid-to-large companies.",
  serviceType: "Executive Behavioral Health Advisory",
  areaServed: { "@type": "Country", name: "United States" },
  url: "https://www.csafeteam.com/services",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What should HR do when an executive has a drinking problem?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When HR identifies signs of alcohol misuse in a senior leader, the priority is getting qualified clinical guidance before taking any formal action. Disciplinary or legal steps pursued prematurely can escalate the situation, create liability, and eliminate the possibility of a confidential resolution. HR should contact C-Safe for a discreet consultation — no names required at the initial stage. C-Safe helps HR, General Counsel and leadership teams assess the situation, understand available options, and move carefully with both the organization's and the executive's interests in mind.",
      },
    },
    {
      "@type": "Question",
      name: "How does an executive intervention work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An executive intervention is a structured, professionally facilitated process designed to help a senior leader recognize the impact of a behavioral health issue and accept care. Unlike informal confrontation, a coordinated intervention involves clinical planning, careful participant selection, message preparation and logistical readiness — so that if the executive agrees to treatment, the pathway is already in place. C-Safe coordinates the clinical and logistical elements of the intervention process, working with a vetted team of intervention professionals. Interventions are planned around the executive's circumstances, privacy requirements and the organization's needs.",
      },
    },
    {
      "@type": "Question",
      name: "How can a company help a CEO enter treatment confidentially?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "C-Safe manages the entire process outside of company systems and public intake channels. From the initial clinical assessment and treatment matching through logistics, travel coordination and admissions, every step is handled with discretion. C-Safe coordinates the process through discreet, need-to-know communication pathways while respecting applicable clinical, organizational and legal requirements. Payment and insurance options are discussed transparently based on the executive's circumstances and preferences. C-Safe uses an independent National Clinical Network to identify the right program based on clinical need, privacy requirements and circumstances — not bed availability or financial incentives.",
      },
    },
    {
      "@type": "Question",
      name: "What happens when an executive returns to work after treatment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The return-to-work phase is where many organizations struggle most. C-Safe provides a structured Leadership Recovery and Return-to-Work plan that covers the executive's phased reintegration, ongoing clinical monitoring, internal communication guidance and stakeholder management. The goal is protecting the executive's dignity, the organization's stability and the leadership team's confidence — without overexposing the situation. C-Safe remains available as an ongoing advisor throughout the reintegration period.",
      },
    },
    {
      "@type": "Question",
      name: "How is C-Safe different from an EAP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Employee Assistance Programs are designed for the general workforce. They operate through public intake processes, limited session models and provider networks built for volume — not for the discretion, speed or clinical complexity that executive situations demand. C-Safe is a dedicated advisory firm that works exclusively with organizations on behalf of senior leaders. We operate outside company systems, respond within 24 hours, provide priority coordination and access to a carefully vetted National Clinical Network, subject to clinical appropriateness and provider availability, and provide independent clinical guidance without any financial relationship to the treatment programs we recommend.",
      },
    },
    {
      "@type": "Question",
      name: "Does C-Safe receive referral fees from treatment centers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. C-Safe does not accept referral fees, commissions or any form of compensation from treatment centers or clinical providers. Our recommendations are based entirely on the executive's clinical needs, circumstances and privacy requirements. This independence is fundamental to what we do — organizations and executives need to know that C-Safe's guidance is never influenced by financial incentives.",
      },
    },
    {
      "@type": "Question",
      name: "Can a board contact C-Safe before identifying the executive?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Board members, General Counsel and HR leaders frequently contact C-Safe for a confidential consultation before any executive is identified. These early conversations help organizations understand their options, plan their approach and assess the appropriate level of response — all before committing to any action. No names are required at the initial stage. Information is handled discreetly and shared only as authorized or as required for safety, clinical coordination or applicable legal obligations.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can C-Safe respond?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Initial inquiries receive a response within 24 hours. Once engaged under a retainer, C-Safe is available for priority advisory support with same-day responsiveness for active situations. C-Safe is not an emergency service. If someone is in immediate danger, call 911. If a mental health or substance-use crisis requires immediate intervention, call or text 988 (Suicide and Crisis Lifeline).",
      },
    },
  ],
};

const STAGES = [
  {
    phase: "PREPARE",
    label: "Stage 1",
    color: "border-[#73a0b1]",
    headerColor: "text-[#73a0b1]",
    badgeColor: "bg-[#73a0b1]/10 border-[#73a0b1]/30 text-[#73a0b1]",
    services: [
      {
        title: "Executive Crisis Readiness",
        desc: "Proactive crisis protocols, organizational response planning and leadership continuity frameworks — built before a situation arises, so the organization is never caught unprepared.",
        href: "/executive-crisis-readiness",
      },
      {
        title: "Preventive Executive Wellness Programming",
        desc: "A curated 12-month leadership wellness experience designed to reduce burnout, build team cohesion and create a culture where executive wellbeing is treated as a business asset.",
        href: "/executive-wellness-programs",
      },
      {
        title: "Board, HR and General Counsel Response Planning",
        desc: "Role-specific decision frameworks and communication protocols for the people most likely to be managing a leadership crisis — so they know exactly what to do and who to call.",
        href: "/executive-crisis-readiness",
      },
    ],
  },
  {
    phase: "RESPOND",
    label: "Stage 2",
    color: "border-[#c9a84c]",
    headerColor: "text-[#c9a84c]",
    badgeColor: "bg-[#c9a84c]/10 border-[#c9a84c]/30 text-[#c9a84c]",
    services: [
      {
        title: "Executive Crisis Advisory",
        desc: "Real-time clinical and organizational guidance when a situation is in motion. C-Safe advises CEOs, boards, HR and General Counsel on how to respond with speed, discretion and appropriate clinical care.",
        href: "/executive-crisis-response",
      },
      {
        title: "Executive Intervention Coordination",
        desc: "Professionally coordinated interventions planned around the executive's circumstances, privacy requirements and the organization's needs — with treatment logistics ready before the conversation happens.",
        href: "/executive-intervention-services",
      },
      {
        title: "Independent Executive Treatment Placement",
        desc: "Access to a National Clinical Network of elite, vetted programs. Placement recommendations are based exclusively on the executive's clinical needs, circumstances and privacy requirements — never on financial relationships or bed availability.",
        href: "/executive-treatment-placement",
      },
      {
        title: "Executive Transport and Clinical Logistics",
        desc: "Discreet travel coordination and clinical logistics for executives entering treatment — managed entirely outside company systems and public processes.",
        href: "/executive-crisis-response",
      },
      {
        title: "Family and Stakeholder Support",
        desc: "Structured support for family members, board liaisons and key stakeholders navigating a leadership crisis — with clear communication frameworks and access to clinical guidance.",
        href: "/executive-family-support",
      },
    ],
  },
  {
    phase: "RECOVER",
    label: "Stage 3",
    color: "border-[#4279ae]",
    headerColor: "text-[#4279ae]",
    badgeColor: "bg-[#4279ae]/10 border-[#4279ae]/30 text-[#4279ae]",
    services: [
      {
        title: "Leadership Recovery and Return-to-Work Planning",
        desc: "A structured reintegration plan covering phased return, clinical monitoring, performance expectations and organizational communication — designed to protect the executive's dignity and the organization's stability.",
        href: "/executive-return-to-work",
      },
      {
        title: "Family Reintegration Support",
        desc: "Clinical coordination and guidance for families navigating the recovery period — including aftercare planning, family systems support and connection to appropriate ongoing care.",
        href: "/executive-family-support",
      },
      {
        title: "Organizational Communication and Continuity Planning",
        desc: "Guidance on internal messaging, board communication and stakeholder management during and after a leadership transition — so the organization maintains confidence and continuity.",
        href: "/executive-return-to-work",
      },
      {
        title: "Ongoing Clinical and Executive Advisory",
        desc: "Continued access to C-Safe's advisory team throughout the recovery period — providing clinical guidance, monitoring support and rapid response to any emerging concerns.",
        href: "/executive-crisis-response",
      },
    ],
  },
];

const FAQS = [
  {
    q: "What should HR do when an executive has a drinking problem?",
    a: "When HR identifies signs of alcohol misuse in a senior leader, the priority is getting qualified clinical guidance before taking any formal action. Disciplinary or legal steps pursued prematurely can escalate the situation, create liability, and eliminate the possibility of a confidential resolution. HR should contact C-Safe for a discreet consultation — no names required at the initial stage. C-Safe helps HR, General Counsel and leadership teams assess the situation, understand available options, and move carefully with both the organization's and the executive's interests in mind.",
  },
  {
    q: "How does an executive intervention work?",
    a: "An executive intervention is a structured, professionally facilitated process designed to help a senior leader recognize the impact of a behavioral health issue and accept care. Unlike informal confrontation, a coordinated intervention involves clinical planning, careful participant selection, message preparation and logistical readiness — so that if the executive agrees to treatment, the pathway is already in place. C-Safe coordinates the clinical and logistical elements of the intervention process, working with a vetted team of intervention professionals. Interventions are planned around the executive's circumstances, privacy requirements and the organization's needs.",
  },
  {
    q: "How can a company help a CEO enter treatment confidentially?",
    a: "C-Safe manages the entire process outside of company systems and public intake channels. From the initial clinical assessment and treatment matching through logistics, travel coordination and admissions, every step is handled with discretion. C-Safe coordinates the process through discreet, need-to-know communication pathways while respecting applicable clinical, organizational and legal requirements. Payment and insurance options are discussed transparently based on the executive's circumstances and preferences. C-Safe uses an independent National Clinical Network to identify the right program based on clinical need, privacy requirements and circumstances — not bed availability or financial incentives.",
  },
  {
    q: "What happens when an executive returns to work after treatment?",
    a: "The return-to-work phase is where many organizations struggle most. C-Safe provides a structured Leadership Recovery and Return-to-Work plan that covers the executive's phased reintegration, ongoing clinical monitoring, internal communication guidance and stakeholder management. The goal is protecting the executive's dignity, the organization's stability and the leadership team's confidence — without overexposing the situation. C-Safe remains available as an ongoing advisor throughout the reintegration period.",
  },
  {
    q: "How is C-Safe different from an EAP?",
    a: "Employee Assistance Programs are designed for the general workforce. They operate through public intake processes, limited session models and provider networks built for volume — not for the discretion, speed or clinical complexity that executive situations demand. C-Safe is a dedicated advisory firm that works exclusively with organizations on behalf of senior leaders. We operate outside company systems, respond within 24 hours, provide priority coordination and access to a carefully vetted National Clinical Network, subject to clinical appropriateness and provider availability, and provide independent clinical guidance without any financial relationship to the treatment programs we recommend.",
  },
  {
    q: "Does C-Safe receive referral fees from treatment centers?",
    a: "No. C-Safe does not accept referral fees, commissions or any form of compensation from treatment centers or clinical providers. Our recommendations are based entirely on the executive's clinical needs, circumstances and privacy requirements. This independence is fundamental to what we do — organizations and executives need to know that C-Safe's guidance is never influenced by financial incentives.",
  },
  {
    q: "Can a board contact C-Safe before identifying the executive?",
    a: "Yes. Board members, General Counsel and HR leaders frequently contact C-Safe for a confidential consultation before any executive is identified. These early conversations help organizations understand their options, plan their approach and assess the appropriate level of response — all before committing to any action. No names are required at the initial stage. Information is handled discreetly and shared only as authorized or as required for safety, clinical coordination or applicable legal obligations.",
  },
  {
    q: "How quickly can C-Safe respond?",
    a: "Initial inquiries receive a response within 24 hours. Once engaged under a retainer, C-Safe is available for priority advisory support with same-day responsiveness for active situations. C-Safe is not an emergency service. If someone is in immediate danger, call 911. If a mental health or substance-use crisis requires immediate intervention, call or text 988 (Suicide and Crisis Lifeline).",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#0a1628] text-white font-sans">
      {/* Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <NavBar activePage="/services" />

      {/* Breadcrumb */}
      <div className="pt-24 pb-2 px-6 bg-[#0a1628]">
        <div className="max-w-6xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-xs text-slate-500">
            <ol className="flex items-center gap-2">
              <li><a href="/" className="hover:text-slate-300 transition-colors">Home</a></li>
              <li className="text-slate-700">/</li>
              <li className="text-slate-400">Services</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 px-6 bg-[#0a1628]">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-[#c9a84c]/10 border border-[#c9a84c]/30 text-[#c9a84c] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            Executive Behavioral Health Advisory
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Executive Behavioral Health Services Built Around Leadership Continuity
          </h1>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-3xl">
            C-Safe Wellness Group helps organizations prepare for, respond to and recover from behavioral health
            and personal crises involving senior leaders. We serve as an independent clinical advisor to CEOs,
            boards, Human Resources and General Counsel — providing confidential guidance, coordinated
            intervention, treatment placement and leadership recovery support.
          </p>
          <div className="bg-[#0d1f3c] border border-[#1e3a5f] rounded-lg p-5 max-w-2xl">
            <p className="text-slate-400 text-sm leading-relaxed">
              <span className="text-white font-semibold">Discretion note:</span> Information is handled
              discreetly and shared only as authorized or as required for safety, clinical coordination or
              applicable legal obligations. Initial inquiries receive a response within 24 hours.{" "}
              <span className="text-slate-300">C-Safe is not an emergency service.</span> Call{" "}
              <a href="tel:911" className="text-[#c9a84c] font-semibold">911</a> or{" "}
              <a href="tel:988" className="text-[#c9a84c] font-semibold">988</a> when immediate safety is at risk.
            </p>
          </div>
        </div>
      </section>

      {/* The Executive Continuity Framework */}
      <section className="py-16 px-6 bg-[#0d1f3c]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-3">Our Approach</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The Executive Continuity Framework™
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              A complete advisory system covering every stage of the executive behavioral health continuum —
              from proactive preparation through active crisis response and full leadership recovery.
            </p>
          </div>

          <div className="space-y-14">
            {STAGES.map(({ phase, label, color, headerColor, badgeColor, services }) => (
              <div key={phase}>
                <div className={`flex items-center gap-4 mb-6 pb-4 border-b ${color}`}>
                  <span className={`text-xs font-semibold border px-3 py-1 rounded-full ${badgeColor}`}>
                    {label}
                  </span>
                  <h3 className={`text-2xl md:text-3xl font-bold ${headerColor}`}>{phase}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {services.map(({ title, desc, href }) => (
                    <a
                      key={title}
                      href={href}
                      className="group bg-[#0a1628] border border-[#1e3a5f] rounded-lg p-6 hover:border-[#c9a84c]/40 transition-colors flex flex-col gap-3"
                    >
                      <div className="w-8 h-0.5 bg-[#c9a84c] group-hover:w-12 transition-all duration-300" />
                      <h4 className="text-white font-bold text-base leading-snug">{title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed flex-1">{desc}</p>
                      <span className="text-[#c9a84c] text-xs font-semibold mt-1 group-hover:underline">
                        Learn more →
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* National Clinical Network */}
      <section className="py-16 px-6 bg-[#0a1628]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#0d1f3c] border border-[#c9a84c]/20 rounded-xl p-8 md:p-10">
            <div className="inline-block bg-[#c9a84c]/10 border border-[#c9a84c]/30 text-[#c9a84c] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
              Treatment Placement
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              National Clinical Network
            </h2>
            <p className="text-slate-300 text-base leading-relaxed mb-4">
              C-Safe maintains relationships with a carefully vetted network of clinical programs across the
              United States. We do not publicly list partner treatment centers, and we do not accept referral
              fees or compensation of any kind from clinical providers.
            </p>
            <p className="text-slate-400 text-base leading-relaxed">
              Every treatment recommendation is based exclusively on the executive's clinical needs,
              personal circumstances and privacy requirements — ensuring that placement decisions are driven
              by what is clinically right, not what is financially convenient.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-[#0d1f3c]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-3">Common Questions</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-3">
            {FAQS.map(({ q, a }) => (
              <details
                key={q}
                className="group bg-[#0a1628] border border-[#1e3a5f] rounded-lg overflow-hidden open:border-[#c9a84c]/30"
                open
              >
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none hover:bg-[#0d1f3c] transition-colors">
                  <span className="text-white font-semibold text-base pr-4">{q}</span>
                  <span className="text-[#c9a84c] flex-shrink-0 text-xl leading-none group-open:rotate-45 transition-transform duration-200">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-1">
                  <p className="text-slate-400 text-sm leading-relaxed">{a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Resource Links */}
      <section className="py-14 px-6 bg-[#0a1628] border-t border-[#1e3a5f]">
        <div className="max-w-5xl mx-auto">
          <p className="text-slate-500 text-xs font-semibold uppercase tracking-widest mb-6 text-center">
            Related Resources
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "The First 48 Hours",
                desc: "Free guide — what to do in the hours that shape every executive crisis outcome.",
                href: "/resources/first-48",
                label: "Free Resource",
              },
              {
                title: "Fit Assessment",
                desc: "Takes under 3 minutes. Understand whether C-Safe is the right fit for your organization.",
                href: "/assessment",
                label: "3 Minutes",
              },
              {
                title: "Our Team",
                desc: "Meet the clinical and advisory professionals behind C-Safe.",
                href: "/team",
                label: "About Us",
              },
              {
                title: "Insights",
                desc: "Case studies and analysis of real leadership crises and how they were managed.",
                href: "/insights",
                label: "Case Studies",
              },
            ].map(({ title, desc, href, label }) => (
              <a
                key={title}
                href={href}
                className="group bg-[#0d1f3c] border border-[#1e3a5f] rounded-lg p-5 hover:border-[#c9a84c]/40 transition-colors flex flex-col gap-2"
              >
                <span className="text-[#c9a84c] text-xs font-semibold uppercase tracking-widest">{label}</span>
                <span className="text-white font-bold text-sm group-hover:text-[#c9a84c] transition-colors">{title}</span>
                <span className="text-slate-500 text-xs leading-relaxed">{desc}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-[#c9a84c]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
            Ready to Protect Your Leadership Team?
          </h2>
          <p className="text-[#0a1628]/80 text-lg mb-8 max-w-2xl mx-auto">
            A 30-minute confidential call costs nothing. Request one below — no names required at the initial stage.
          </p>
          <a
            href="/#contact"
            className="inline-block bg-[#0a1628] text-white px-8 py-4 rounded font-bold text-lg hover:bg-[#0d1f3c] transition-colors"
          >
            Request a Confidential Call
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a1628] border-t border-[#1e3a5f] py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img
              src="/csafe-logo.png"
              alt="C-Safe Wellness Group — executive behavioral health advisory"
              className="w-8 h-8 object-contain"
            />
            <span className="text-white font-bold text-lg">
              C-Safe <span className="text-[#c9a84c]">Wellness Group</span>
            </span>
          </div>
          <p className="text-slate-500 text-sm text-center">
            Leadership you can trust. &copy; {new Date().getFullYear()} C-Safe Wellness Group. All rights reserved.
          </p>
          <div className="flex gap-6 text-slate-500 text-sm">
            <a href="/services" className="hover:text-slate-300 transition-colors">Services</a>
            <a href="/team" className="hover:text-slate-300 transition-colors">Team</a>
            <a href="/insights" className="hover:text-slate-300 transition-colors">Insights</a>
            <a href="/#contact" className="hover:text-slate-300 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
