"use client";

import Link from "next/link";
import { useState } from "react";

export default function TeamPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a1628] text-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a1628]/95 backdrop-blur border-b border-[#1e3a5f]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img src="/csafe-logo.png" alt="C-Safe Wellness Group logo" className="w-10 h-10 object-contain" />
            <span className="text-xl font-bold tracking-tight text-white">
              C-Safe <span className="text-[#c9a84c]">Wellness Group</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm text-slate-300">
            <Link href="/#services" className="hover:text-[#c9a84c] transition-colors">Services</Link>
            <Link href="/#wellness-calendar" className="hover:text-[#c9a84c] transition-colors">Wellness Calendar</Link>
            <Link href="/#who-we-serve" className="hover:text-[#c9a84c] transition-colors">Who We Serve</Link>
            <Link href="/team" className="text-[#c9a84c] font-semibold">Our Team</Link>
            <Link
              href="/#contact"
              className="bg-[#c9a84c] text-[#0a1628] px-4 py-2 rounded font-semibold hover:bg-[#b8963f] transition-colors"
            >
              Request a Confidential Call
            </Link>
          </div>

          <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
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
            <Link href="/#services" className="text-slate-300 hover:text-[#c9a84c]" onClick={() => setMenuOpen(false)}>Services</Link>
            <Link href="/#wellness-calendar" className="text-slate-300 hover:text-[#c9a84c]" onClick={() => setMenuOpen(false)}>Wellness Calendar</Link>
            <Link href="/#who-we-serve" className="text-slate-300 hover:text-[#c9a84c]" onClick={() => setMenuOpen(false)}>Who We Serve</Link>
            <Link href="/team" className="text-[#c9a84c] font-semibold" onClick={() => setMenuOpen(false)}>Our Team</Link>
            <Link href="/#contact" className="text-[#c9a84c] font-semibold" onClick={() => setMenuOpen(false)}>Request a Confidential Call</Link>
          </div>
        )}
      </nav>

      {/* Header */}
      <section className="pt-36 pb-16 px-6 text-center">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #c9a84c 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative max-w-3xl mx-auto">
          <p className="text-[#c9a84c] text-xs font-semibold uppercase tracking-widest mb-4">The People Behind C-Safe</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Leadership You Can <span className="text-[#c9a84c]">Trust</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            C-Safe Wellness Group is built by clinicians, not consultants. Every person on this team brings
            real-world clinical expertise and a deep commitment to discretion, outcomes, and executive-level care.
          </p>
        </div>
      </section>

      {/* Team Cards */}
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center">

          {/* BD Smith Card */}
          <div className="w-full max-w-sm">
            <div className="relative overflow-hidden rounded-xl bg-[#0d1f3c] border border-[#1e3a5f]">
              {/* Photo */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src="/bd-headshot.png"
                  alt="Bryan Smith, CEO"
                  className="w-full h-full object-cover object-top"
                  style={{ filter: "brightness(0.82) contrast(1.08)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f3c] via-transparent to-transparent" />
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h2 className="text-white text-xl font-bold">Bryan Smith</h2>
                    <p className="text-[#c9a84c] text-sm font-semibold mt-0.5">Chief Executive Officer</p>
                  </div>
                  <div className="flex gap-1 mt-1">
                    <span className="text-xs bg-[#c9a84c]/10 border border-[#c9a84c]/30 text-[#c9a84c] px-2 py-0.5 rounded-full">LPC</span>
                    <span className="text-xs bg-[#c9a84c]/10 border border-[#c9a84c]/30 text-[#c9a84c] px-2 py-0.5 rounded-full">CAADC</span>
                  </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Bryan Smith is a Licensed Professional Counselor (LPC) and Certified Advanced Alcohol and Drug
                  Counselor (CAADC) with dual master&apos;s degrees in clinical mental health counseling and addictions
                  counseling. His career spans Executive Director and Clinical Director roles at multiple treatment
                  centers across New Jersey and Georgia — leading high-performing clinical teams, shaping
                  evidence-based programs, and setting the standard for what exceptional care looks like at scale.
                </p>
                <p className="text-slate-400 text-sm leading-relaxed mt-3">
                  Bryan has built a reputation working with clientele who demand the highest level of discretion
                  and quality — including the families of public figures, entertainers, and professional athletes.
                  He understands what&apos;s at stake when someone at the top needs help: the privacy concerns, the
                  reputational sensitivities, the pressure to get it right the first time. That experience is
                  exactly what C-Safe Wellness Group is built on.
                </p>
                <p className="text-slate-400 text-sm leading-relaxed mt-3">
                  More than credentials, Bryan brings a genuine calling to this work. Over a career defined by
                  service and a relentless commitment to excellence, he has remained focused on one thing —
                  delivering the kind of care he would want for his own family. That standard doesn&apos;t change
                  based on who&apos;s in the room. It&apos;s just who he is.
                </p>
              </div>
            </div>
          </div>

          {/* Open Position Card */}
          <div className="w-full max-w-sm">
            <div className="relative overflow-hidden rounded-xl border-2 border-dashed border-[#c9a84c]/30 bg-[#0d1f3c]/40 h-full min-h-[520px] flex flex-col items-center justify-center p-10 text-center group hover:border-[#c9a84c]/60 transition-colors">

              {/* Silhouette placeholder */}
              <div className="w-28 h-28 rounded-full bg-[#1e3a5f] border-2 border-dashed border-[#c9a84c]/30 flex items-center justify-center mb-6 group-hover:border-[#c9a84c]/60 transition-colors">
                <svg className="w-14 h-14 text-[#c9a84c]/30 group-hover:text-[#c9a84c]/50 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
                </svg>
              </div>

              <div className="w-8 h-0.5 bg-[#c9a84c]/40 mx-auto mb-5 group-hover:w-16 transition-all duration-300" />

              <h2 className="text-white text-xl font-bold mb-2">Join the Leadership Team</h2>
              <p className="text-[#c9a84c] text-sm font-semibold mb-4">Co-Founder &amp; Partner</p>

              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                C-Safe Wellness Group is actively seeking a mission-aligned partner to help build the standard
                for executive mental health advisory. If you bring clinical expertise, business acumen, and a
                commitment to discretion — this seat was built for you.
              </p>

              <div className="space-y-2 text-left w-full mb-6">
                {[
                  "Clinical or behavioral health background",
                  "Passion for executive-level care",
                  "Business development experience a plus",
                  "Discretion and integrity non-negotiable",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-slate-400">
                    <span className="text-[#c9a84c] mt-0.5 shrink-0">—</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/#contact"
                className="inline-block border border-[#c9a84c] text-[#c9a84c] px-6 py-2.5 rounded font-semibold text-sm hover:bg-[#c9a84c] hover:text-[#0a1628] transition-colors"
              >
                Start a Confidential Conversation
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-6 bg-[#0d1f3c] border-t border-[#1e3a5f]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            The Team Is Being Built with <span className="text-[#c9a84c]">Intention</span>
          </h2>
          <p className="text-slate-400 leading-relaxed mb-8">
            Every person who joins C-Safe Wellness Group is chosen for their clinical credibility, professional
            integrity, and commitment to serving leaders who need real support — quietly, and at the highest level.
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-[#c9a84c] text-[#0a1628] px-8 py-4 rounded font-bold text-lg hover:bg-[#b8963f] transition-colors"
          >
            Request a Confidential Call
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a1628] border-t border-[#1e3a5f] py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src="/csafe-logo.png" alt="C-Safe Wellness Group logo" className="w-7 h-7 object-contain" />
            <span className="text-white font-bold text-lg">
              C-Safe <span className="text-[#c9a84c]">Wellness Group</span>
            </span>
          </div>
          <p className="text-slate-500 text-sm text-center">
            Leadership you can trust. &copy; {new Date().getFullYear()} C-Safe Wellness Group. All rights reserved.
          </p>
          <div className="flex gap-6 text-slate-500 text-sm">
            <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
            <Link href="/#services" className="hover:text-slate-300 transition-colors">Services</Link>
            <Link href="/#contact" className="hover:text-slate-300 transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
