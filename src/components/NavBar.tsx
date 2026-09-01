"use client";

import { useState } from "react";

export default function NavBar({ activePage }: { activePage?: string }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/services", label: "Services" },
    { href: "/executive-wellness-calendar", label: "Wellness Calendar" },
    { href: "/team", label: "Our Team" },
    { href: "/insights", label: "Insights" },
    { href: "/resources/first-48", label: "The First 48" },
    { href: "/assessment", label: "Fit Assessment", dot: true },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a1628]/95 backdrop-blur border-b border-[#1e3a5f]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <img
            src="/csafe-logo.png"
            alt="C-Safe Wellness Group — executive behavioral health advisory firm"
            className="w-10 h-10 object-contain"
          />
          <span className="text-xl font-bold tracking-tight text-white">
            C-Safe <span className="text-[#c9a84c]">Wellness Group</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          {links.map(({ href, label, dot }) => (
            <a
              key={href}
              href={href}
              className={`hover:text-[#c9a84c] transition-colors flex items-center gap-1.5 ${activePage === href ? "text-[#c9a84c] font-semibold" : ""}`}
            >
              {label}
              {dot && (
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c9a84c] opacity-60" style={{ animationDuration: "2s" }} />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c9a84c]" />
                </span>
              )}
            </a>
          ))}
          <a
            href="tel:+18332723350"
            className="flex items-center gap-1.5 text-[#c9a84c] text-sm font-semibold hover:text-[#b8963f] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            1-833-CSAFE-50
          </a>
          <a
            href="/#contact"
            className="bg-[#c9a84c] text-[#0a1628] px-4 py-2 rounded font-semibold hover:bg-[#b8963f] transition-colors"
          >
            Request a Confidential Call
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0d1f3c] border-t border-[#1e3a5f] px-6 py-4 flex flex-col gap-4 text-sm">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-slate-300 hover:text-[#c9a84c] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="tel:+18332723350"
            className="text-[#c9a84c] font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            1-833-CSAFE-50
          </a>
          <a
            href="/#contact"
            className="text-[#c9a84c] font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            Request a Confidential Call
          </a>
        </div>
      )}
    </nav>
  );
}
