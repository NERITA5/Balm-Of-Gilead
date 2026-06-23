"use client";

import Link from "next/link";
import { ArrowRight, MapPin, Calendar, Award } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0b3160] text-white pt-20 pb-32 lg:pb-40 px-4">
      
      {/* Premium Dynamic Radial Glows replacing flat gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-red-600/15 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto w-full z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Left Side: Strong Typographic Value Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Professional Enrollment Status Badge */}
            <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/10 rounded-lg px-4 py-2 w-fit mx-auto lg:mx-0">
              <span className="w-2 h-2 rounded-full bg-[#d91e27] animate-pulse" />
              <span className="text-white text-xs font-black tracking-widest uppercase">
                Active Enrollment — 2026/2027 Session
              </span>
            </div>

            {/* High-Impact Headline Layout Matching Mockup */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Empowering Future <br />
              Leaders in <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-500">Health,</span> <br />
              Technology &amp; Management
            </h1>

            {/* Subtitle */}
            <p className="text-slate-200 text-sm sm:text-base md:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium opacity-95">
              Balm of Gilead Higher Institute — affiliated with the University of Bamenda — structures 
              world-class clinical education, engineering pipelines, and corporate vocational frameworks across Cameroon.
            </p>

            {/* Square/Edged Custom CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-2">
              <Link 
                href="/admissions"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#d91e27] hover:bg-[#b8141b] text-white font-bold rounded-xl transition-all shadow-lg shadow-red-950/20 text-sm tracking-wide uppercase"
              >
                Apply Online Now <ArrowRight size={16} className="stroke-[2.5]" />
              </Link>
              <Link 
                href="/programs"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/20 hover:border-white hover:bg-white/5 text-white font-bold rounded-xl transition-all text-sm tracking-wide uppercase"
              >
                Explore Specializations
              </Link>
            </div>

            {/* Clean Secondary Location Meta Row */}
            <div className="pt-6 border-t border-white/10 grid sm:grid-cols-2 gap-4 text-left max-w-xl mx-auto lg:mx-0">
              <div className="flex items-start gap-2.5 text-xs font-bold text-slate-300">
                <MapPin size={16} className="text-red-400 shrink-0 mt-0.5" />
                <span>Tombel: Three Corner, Bonamoussadi Quarter</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs font-bold text-slate-300">
                <MapPin size={16} className="text-red-400 shrink-0 mt-0.5" />
                <span>Limbe: Mile 2, Red Cross Building</span>
              </div>
            </div>

          </div>

          {/* Right Side: Professional Visual Placement Block (Fixes the missing graphic gap) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] rounded-[2rem] overflow-hidden border-4 border-white/10 shadow-2xl bg-slate-800 group">
              
              {/* Overlay Graphic Background Grid Layer */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b3160]/90 via-[#0b3160]/20 to-transparent z-10" />
              
              {/* Fallback Asset Simulator Canvas */}
              <div className="absolute inset-0 bg-slate-700 flex flex-col items-center justify-center p-6 text-center text-slate-400 font-bold tracking-wider text-xs group-hover:scale-105 transition-transform duration-500">
                <Award size={48} className="text-white/20 mb-3 stroke-[1.5]" />
                <span className="uppercase text-2xs">[ Medical Student &amp; Lab Placement Graphic ]</span>
              </div>

              {/* Dynamic Information Overlay Card Box */}
              <div className="absolute bottom-6 left-6 right-6 z-20 text-left bg-white/10 backdrop-blur-md border border-white/10 p-5 rounded-xl">
                <div className="flex items-center gap-2 text-red-400 text-2xs font-black uppercase tracking-widest">
                  <Calendar size={12} />
                  <span>Affiliated Framework</span>
                </div>
                <p className="text-sm font-black text-white mt-1.5 leading-snug">
                  Quality clinical &amp; technological tracks supervised by the University of Bamenda.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 5. SMOOTH BOTTOM VECTOR CURVE — Merges perfectly into the white content layer beneath */}
      <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none overflow-hidden">
        <svg 
          viewBox="0 0 1440 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="absolute bottom-0 w-full h-full text-white transform translate-y-1"
          preserveAspectRatio="none"
        >
          <path 
            d="M0,64L120,80C240,96,480,128,720,128C960,128,1200,96,1320,80L1440,64L1440,120L1320,120C1200,120,960,120,720,120C480,120,240,120,120,120L0,120Z" 
            fill="currentColor"
          />
        </svg>
      </div>

    </section>
  );
}