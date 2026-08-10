"use client";

import { useState } from "react";
import Link from "next/link";

const LINKS = [
  { href: "/#services", label: "Services" },
  { href: "/team", label: "Our Team" },
  { href: "/insights", label: "Insights" },
  { href: "/resources", label: "Resources" },
  { href: "/assessment", label: "Fit Assessment" },
];

export default function Nav({ active }: { active?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a1628]/95 backdrop-blur border-b border-[#1e3a5f]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src="/csafe-logo.png" alt="C-Safe Wellness Group" className="w-10 h-10 object-contain" />
          <span className="text-xl font-bold text-white">
            C-Safe <span className="text-[#c9a84c]">Wellness Group</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7 text-sm text-slate-300">
          {LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={
                active === label
                  ? "text-[#c9a84c] font-semibold"
                  : "hover:text-[#c9a84c] transition-colors"
              }
            >
              {label}
            </Link>
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
          <Link
            href="/#contact"
            className="bg-[#c9a84c] text-[#0a1628] px-4 py-2 rounded font-semibold hover:bg-[#b8963f] transition-colors"
          >
            Confidential Call
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0d1f3c] border-t border-[#1e3a5f] px-6 py-5 flex flex-col gap-4 text-sm">
          {LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={
                active === label
                  ? "text-[#c9a84c] font-semibold"
                  : "text-slate-300 hover:text-[#c9a84c] transition-colors"
              }
            >
              {label}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setOpen(false)}
            className="bg-[#c9a84c] text-[#0a1628] px-4 py-3 rounded font-bold text-center hover:bg-[#b8963f] transition-colors"
          >
            Request a Confidential Call
          </Link>
        </div>
      )}
    </nav>
  );
}
