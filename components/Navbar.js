"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone, GraduationCap, Clock } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Programs",
    href: "/programs",
    dropdown: [
      { label: "Health & Biomedical Sciences", href: "/programs#health" },
      { label: "Business & Management",        href: "/programs#business" },
      { label: "Engineering",                  href: "/programs#engineering" },
      { label: "Agriculture",                  href: "/programs#agriculture" },
      { label: "Home Economics",               href: "/programs#home-economics" },
    ],
  },
  { label: "Admissions", href: "/admissions" },
  { label: "About Us",   href: "/about" },
  { label: "Gallery",    href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
  { label: "Referral",   href: "/referral" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* 1. Top Utility Strip */}
      <div className="bg-[#082548] text-white text-[11px] font-bold tracking-widest uppercase py-2.5 px-4 sm:px-6 lg:px-8 flex justify-between items-center border-b border-white/5 relative z-50">
        <div className="flex items-center gap-2">
          <GraduationCap size={14} className="text-red-400" />
          <span className="text-slate-200">Affiliated with The University of Bamenda</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-1.5 text-slate-300">
            <Clock size={13} className="text-red-400" />
            <span>Admissions Active 2026 / 2027</span>
          </div>
          <a href="tel:+237676247307" className="flex items-center gap-1.5 text-white hover:text-red-400 transition-colors">
            <Phone size={12} className="fill-white/10" />
            <span>Hotlines: 676 247 307 / 671 719 692</span>
          </a>
        </div>
      </div>

      {/* 2. Premium Dual-Layer Identity & Navigation Wrapper */}
      <nav className={`sticky top-0 z-50 w-full transition-all duration-300 bg-white ${
        scrolled ? "shadow-xl border-b border-slate-200" : "border-b border-slate-100"
      }`}>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between py-3 lg:py-4 gap-4">
            
            {/* Branding Block */}
            <Link href="/" className="flex items-center gap-4 shrink-0 group">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.02]">
                <img src="/logo.png" alt="BAGHIBSTECH Logo" className="w-full h-full object-contain" loading="eager" />
              </div>
              <div>
                <h1 className="font-black text-[#0b3160] tracking-tight leading-none text-xl sm:text-2xl uppercase">BALM OF GILEAD</h1>
                <p className="text-[10px] sm:text-[11px] font-extrabold text-[#d91e27] tracking-widest uppercase mt-1">
                  HIGHER INSTITUTE OF BIOMEDICAL SCI. &amp; TECH.
                </p>
                <div className="h-[2px] w-16 bg-[#d91e27] mt-1.5 rounded-full transition-all duration-300 group-hover:w-24" />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              <div className="flex items-center gap-1 mr-4">
                {navLinks.map((link) =>
                  link.dropdown ? (
                    <div key={link.label} className="relative"
                      onMouseEnter={() => setOpenDropdown(link.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <button className="flex items-center gap-1 px-3 py-2 text-xs font-black text-[#0b3160]/90 hover:text-[#d91e27] uppercase tracking-wider rounded-lg hover:bg-slate-50 transition-all">
                        {link.label}
                        <ChevronDown size={12} className={`transition-transform duration-200 stroke-[2.5] ${openDropdown === link.label ? "rotate-180 text-[#d91e27]" : ""}`} />
                      </button>
                      {openDropdown === link.label && (
                        <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-2xl border border-slate-200/80 py-2 z-50 overflow-hidden">
                          <div className="absolute top-0 left-0 right-0 h-1 bg-[#d91e27]" />
                          {link.dropdown.map((item) => (
                            <Link key={item.label} href={item.href} className="block px-5 py-3 text-xs font-bold text-slate-700 hover:bg-slate-50 hover:text-[#d91e27] border-b border-slate-100 last:border-none transition-colors">
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link key={link.label} href={link.href} className="px-3 py-2 text-xs font-black text-[#0b3160]/90 hover:text-[#d91e27] uppercase tracking-wider rounded-lg hover:bg-slate-50 transition-all">
                      {link.label}
                    </Link>
                  )
                )}
              </div>

              <Link href="/apply" className="inline-flex items-center justify-center px-6 py-3 bg-[#d91e27] hover:bg-[#b8141b] text-white text-xs font-black rounded-xl uppercase tracking-widest transition-all shadow-md active:scale-98">
                Apply Online
              </Link>
            </div>

            {/* Mobile Trigger */}
            <div className="absolute top-4 right-4 lg:hidden">
              <button className="p-2 rounded-xl text-[#0b3160] hover:bg-slate-50 border border-slate-100 transition"
                onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle Menu Container">
                {mobileOpen ? <X size={22} className="stroke-[2.5]" /> : <Menu size={22} className="stroke-[2.5]" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide Drawer */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 px-4 py-4 space-y-1 shadow-inner max-h-[calc(100vh-5rem)] overflow-y-auto">
            {navLinks.map((link) => (
              <div key={link.label} className="border-b border-slate-50 last:border-none pb-2 last:pb-0">
                <Link href={link.href} className="block px-4 py-3 text-xs font-black text-[#0b3160] uppercase tracking-wide hover:bg-slate-50 rounded-lg transition" onClick={() => setMobileOpen(false)}>
                  {link.label}
                </Link>
              </div>
            ))}
            <div className="pt-4 px-2">
              <Link href="/apply" className="block text-center w-full py-3.5 bg-[#d91e27] text-white text-xs font-black rounded-xl tracking-wider uppercase transition shadow-md" onClick={() => setMobileOpen(false)}>
                Apply Online Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}