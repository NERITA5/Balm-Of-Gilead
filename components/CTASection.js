import Link from "next/link";
import { ArrowRight, Gift, HelpCircle, PhoneCall } from "lucide-react";

export default function CTASection() {
  return (
    <section id="referral" className="bg-slate-50 py-20 lg:py-24 px-4 relative overflow-hidden border-t border-b border-slate-200">
      
      {/* Structural Accent Elements - Subtle professional branding glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-600/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-red-600/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto z-10">
        <div className="grid lg:grid-cols-12 gap-10 xl:gap-14 items-center">

          {/* Left Column: Premium Institutional CTA */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <span className="inline-block text-[11px] font-black tracking-widest text-[#d91e27] uppercase bg-red-50 border border-red-100 px-3.5 py-1.5 rounded-md">
              Start Your Journey With Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0b3160] tracking-tight leading-tight">
              Your Professional Future <br />
              Starts <span className="text-[#d91e27]">Right Here</span>
            </h2>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
              Admissions are fully active for the 2026/2027 academic year calendar. Secure your file processing today to gain competitive early enrollment approval slots.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
              <Link 
                href="/admissions"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#d91e27] hover:bg-[#b8141b] text-white font-bold rounded-xl transition-all text-sm tracking-wide shadow-md shadow-red-950/10 uppercase"
              >
                Apply Online Now <ArrowRight size={15} className="stroke-[2.5]" />
              </Link>
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-slate-200 hover:border-[#0b3160] text-slate-700 hover:text-[#0b3160] font-bold rounded-xl transition-all text-sm tracking-wide uppercase"
              >
                <HelpCircle size={15} /> Ask An Advisor
              </Link>
            </div>
          </div>

          {/* Right Column: Premium Structured Referral Card Layout */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden relative">
              {/* Header Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#d91e27]" />
              
              <div className="p-6 sm:p-8 md:p-10">
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-red-50 text-[#d91e27] border border-red-100 flex items-center justify-center shrink-0">
                    <Gift size={20} className="stroke-[2]" />
                  </div>
                  <div>
                    <h3 className="font-black text-lg sm:text-xl text-[#0b3160] tracking-tight">Institutional Referral Program</h3>
                    <p className="text-2xs font-bold text-gray-400 uppercase tracking-widest mt-0.5">Empower Students, Earn Rewards</p>
                  </div>
                </div>

                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
                  Know an ambitious applicant looking for state-of-the-art clinical labs or business tracks? Introduce them to Balm of Gilead and receive certified incentives upon successful registration verification.
                </p>

                {/* Grid Split Financial Architecture Display */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 text-center group hover:bg-white hover:shadow-md transition-all duration-300">
                    <p className="text-2xl sm:text-3xl font-black text-[#0b3160] tracking-tight">25,000</p>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-wider mt-1">FCFA / Candidate</p>
                    <div className="h-px bg-slate-200 my-2" />
                    <span className="text-[10px] font-bold text-slate-600 bg-white border px-2 py-0.5 rounded uppercase">Standard Tier</span>
                  </div>
                  <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 text-center group hover:bg-white hover:shadow-md transition-all duration-300">
                    <p className="text-2xl sm:text-3xl font-black text-[#d91e27] tracking-tight">30,000</p>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-wider mt-1">FCFA / Candidate</p>
                    <div className="h-px bg-slate-200 my-2" />
                    <span className="text-[10px] font-bold text-red-700 bg-red-50 border border-red-100 px-2 py-0.5 rounded uppercase">Master Tier</span>
                  </div>
                </div>

                {/* Direct High-Impact Hotline Verification Button */}
                <a 
                  href="tel:+237676247307"
                  className="w-full inline-flex items-center justify-center gap-2 py-4 bg-[#0b3160] hover:bg-[#072447] text-white text-xs sm:text-sm font-black rounded-xl transition-all shadow-md tracking-wider uppercase"
                >
                  <PhoneCall size={15} /> Call to Register Placement: 676 247 307
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}