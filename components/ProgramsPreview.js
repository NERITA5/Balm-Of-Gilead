"use client";

import Link from "next/link";
import { ArrowRight, Heart, Briefcase, Cpu, Leaf, UtensilsCrossed, HelpCircle } from "lucide-react";

const schools = [
  {
    icon: Heart,
    accentColor: "text-[#d91e27]",
    iconBg: "bg-red-50 border-red-100",
    title: "Health & Biomedical Sciences",
    description: "HND and Degree programs in Nursing, Midwifery, Medical Lab Science, and Sonography. Plus Master's in Public Health, Psychiatry, and more.",
    programs: ["HND Nursing", "BSc Midwifery", "Medical Lab Science", "Sonography"],
    href: "/programs#health",
  },
  {
    icon: Briefcase,
    accentColor: "text-[#0b3160]",
    iconBg: "bg-blue-50 border-blue-100",
    title: "Business & Management",
    description: "HND and Degree programs in Accountancy, Banking & Finance, and Marketing & Trade — with direct and top-up options.",
    programs: ["Accountancy", "Banking & Finance", "Marketing & Trade"],
    href: "/programs#business",
  },
  {
    icon: Cpu,
    accentColor: "text-purple-700",
    iconBg: "bg-purple-50 border-purple-100",
    title: "Engineering & Technology",
    description: "HND programs in Software and Hardware Engineering carefully engineered to meet Cameroon's growing technical demands.",
    programs: ["Software Engineering", "Hardware Engineering"],
    href: "/programs#engineering",
  },
  {
    icon: Leaf,
    accentColor: "text-emerald-700",
    iconBg: "bg-emerald-50 border-emerald-100",
    title: "School of Agriculture",
    description: "Practical HND programs in Crop Production and Animal Production Technology optimized for sustainable commercial frameworks.",
    programs: ["Crop Production", "Animal Production Technology"],
    href: "/programs#agriculture",
  },
  {
    icon: UtensilsCrossed,
    accentColor: "text-amber-700",
    iconBg: "bg-amber-50 border-amber-100",
    title: "Home Economics",
    description: "HND in Baking & Food Processing, Hotel Management & Catering, alongside specialized short professional training certifications.",
    programs: ["Baking & Food Tech", "Hotel Management", "Catering Programs"],
    href: "/programs#home-economics",
  },
];

export default function ProgramsPreview() {
  return (
    <section className="bg-slate-50 py-24 px-4 border-b border-slate-200">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading Module */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block text-[11px] font-black tracking-widest text-[#d91e27] uppercase bg-red-50 border border-red-100 px-4 py-2 rounded-lg">
            Academic Fields of Study
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0b3160] tracking-tight">
            Our Schools & Programs
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm sm:text-base font-semibold leading-relaxed">
            Five specialized schools focused on equipping you with industry-ready, verified professional skills.
          </p>
        </div>

        {/* Core Institutional Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {schools.map((school) => {
            const Icon = school.icon;
            return (
              <Link 
                key={school.title} 
                href={school.href}
                className="group bg-white rounded-2xl border border-slate-200 p-8 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 hover:border-[#0b3160]/20 hover:-translate-y-2 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-slate-100 group-hover:bg-[#d91e27] transition-colors" />

                <div className="space-y-6">
                  <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center ${school.iconBg} ${school.accentColor}`}>
                    <Icon size={24} className="stroke-[1.5]" />
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-black text-xl text-[#0b3160] tracking-tight group-hover:text-[#d91e27] transition-colors">
                      {school.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                      {school.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {school.programs.map((p) => (
                      <span 
                        key={p} 
                        className="text-[10px] font-black uppercase bg-slate-100 text-slate-600 rounded-md px-3 py-1.5 tracking-wider"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[#0b3160] text-xs font-black uppercase tracking-widest mt-8 pt-6 border-t border-slate-100">
                  <span>View Curriculum</span> 
                  <ArrowRight size={14} className="stroke-[2.5] group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}

          {/* Institutional Advisory Support CTA Card */}
          <div className="bg-[#0b3160] rounded-2xl p-8 flex flex-col justify-center text-white border border-transparent shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16" />
            
            <div className="space-y-6 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-red-400">
                <HelpCircle size={24} className="stroke-[1.5]" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-black tracking-tight">Need Guidance?</h3>
                <p className="text-slate-300 text-sm font-medium leading-relaxed">
                  Connect with our campus academic counselors for a personalized assessment of your enrollment options.
                </p>
              </div>
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#d91e27] hover:bg-[#b8141b] text-white text-xs font-black px-6 py-4 rounded-xl uppercase tracking-widest transition-all w-full shadow-lg"
              >
                Speak to Admissions <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}