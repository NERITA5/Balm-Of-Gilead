"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone, GraduationCap, Clock, MessageCircle } from "lucide-react";

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
          <a href="https://whatsapp.com/channel/0029VbBHrJ29cDDelgGLIs13" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-emerald-400 hover:text-white transition-colors">
            <MessageCircle size={13} />
            <span>Join WhatsApp Channel</span>
          </a>
          <a href="tel:+237676247307" className="flex items-center gap-1.5 text-white hover:text-red-400 transition-colors">
            <Phone size={12} className="fill-white/10" />
            <span>Hotline: 676 247 307</span>
          </a>
        </div>
      </div>

      {/* 2. Premium Dual-Layer Identity & Navigation Wrapper */}
      <nav className={`sticky top-0 z-50 w-full transition-all duration-300 bg-white ${
        scrolled ? "shadow-xl border-b border-slate-200" : "border-b border-slate-100"
      }`}>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3 lg:py-4">
            
            {/* Branding Block */}
            <Link href="/" className="flex items-center gap-3 shrink-0 group">
              <div className="relative w-14 h-14 sm:w-20 sm:h-20 flex items-center justify-center">
                <img src="/logo.png" alt="BAGHIBSTECH Logo" className="w-full h-full object-contain" />
              </div>
              <div className="hidden sm:block">
                <h1 className="font-black text-[#0b3160] tracking-tight leading-none text-xl sm:text-2xl uppercase">BALM OF GILEAD</h1>
                <p className="text-[10px] font-extrabold text-[#d91e27] tracking-widest uppercase mt-1">HIGHER INSTITUTE OF BIOMEDICAL SCI. & TECH.</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => (
                <div key={link.label} className="relative" onMouseEnter={() => setOpenDropdown(link.label)} onMouseLeave={() => setOpenDropdown(null)}>
                  <Link href={link.href} className="flex items-center gap-1 px-3 py-2 text-xs font-black text-[#0b3160] hover:text-[#d91e27] uppercase tracking-wider rounded-lg transition-all">
                    {link.label}
                    {link.dropdown && <ChevronDown size={12} />}
                  </Link>
                  
                  {/* Dropdown Menu */}
                  {link.dropdown && openDropdown === link.label && (
                    <div className="absolute top-full left-0 w-64 bg-white shadow-2xl border border-slate-100 rounded-xl py-2 z-50">
                      {link.dropdown.map((sub) => (
                        <Link key={sub.label} href={sub.href} className="block px-4 py-3 text-xs font-bold text-[#0b3160] hover:bg-slate-50 hover:text-[#d91e27]">
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link href="/apply" className="ml-4 px-6 py-3 bg-[#d91e27] text-white text-xs font-black rounded-xl uppercase hover:bg-[#b8141b] transition-all">Apply Online</Link>
            </div>

            {/* Mobile Trigger */}
            <button 
              className="lg:hidden p-3 bg-[#0b3160] text-white rounded-xl shadow-lg border-2 border-white transition-all active:scale-95"
              onClick={() => setMobileOpen(!mobileOpen)} 
              aria-label="Toggle Mobile Menu"
            >
              {mobileOpen ? <X size={28} className="stroke-[3]" /> : <Menu size={28} className="stroke-[3]" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide Drawer */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 px-4 py-6 shadow-2xl">
            {navLinks.map((link) => (
              <div key={link.label} className="py-3 border-b border-slate-100">
                <Link href={link.href} className="text-sm font-bold text-[#0b3160] uppercase block" onClick={() => setMobileOpen(false)}>
                  {link.label}
                </Link>
              </div>
            ))}
            <Link href="https://whatsapp.com/channel/0029VbBHrJ29cDDelgGLIs13" target="_blank" className="block py-4 text-sm font-bold text-emerald-600 uppercase border-b border-slate-100">
              Join WhatsApp Channel
            </Link>
            <Link href="/apply" className="block text-center mt-6 py-4 bg-[#d91e27] text-white text-sm font-black rounded-xl uppercase" onClick={() => setMobileOpen(false)}>
              Apply Online Now
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}