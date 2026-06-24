"use client";

import Link from "next/link";
import { ArrowRight, Layers, CreditCard } from "lucide-react";

const schools = [
  {
    id: "health",
    title: "School of Health & Biomedical Sciences",
    intro: "Premium clinical education with hands-on training.",
    image: "/programs/biomedical.jpg",
    accent: "bg-[#d91e27]",
    categories: [
      { name: "Clinical Programs", programs: ["Nursing", "Midwifery", "Medical Laboratory Science", "Sonography"] },
      { name: "Vocational & Assistive", programs: ["Nursing Assistant", "Pharmacy Assistant", "Assistant Laboratory Technician"] },
    ],
  },
  {
    id: "business",
    title: "School of Business & Management Studies",
    intro: "Strategic leadership and financial management training.",
    image: "/programs/business.jpg",
    accent: "bg-[#0b3160]",
    categories: [
      { name: "Core Business", programs: ["Accountancy", "Banking and Finance", "Marketing and Trade"] },
      { name: "Management", programs: ["Hotel & Catering Management", "Human Resource Management"] },
    ],
  },
  {
    id: "engineering",
    title: "School of Engineering",
    intro: "Technical foundation for a career in the digital economy.",
    image: "/programs/engineering.jpg",
    accent: "bg-[#0b3160]",
    categories: [
      { name: "Tech Programs", programs: ["Software Engineering", "Hardware Engineering"] },
    ],
  },
  {
    id: "agric",
    title: "School of Agriculture",
    intro: "Modern farming techniques and food production technology.",
    image: "/programs/agriculture.jpg",
    accent: "bg-[#0b3160]",
    categories: [
      { name: "Production", programs: ["Crop Production Technology", "Animal Production Technology"] },
    ],
  },
  {
    id: "home-econ",
    title: "School of Home Economics",
    intro: "Professional training in hospitality and domestic management.",
    image: "/programs/home-econom.jpg",
    accent: "bg-[#0b3160]",
    categories: [
      { name: "Hospitality", programs: ["Professional Catering", "Hotel Management"] },
    ],
  },
];

const feeStructure = [
  { program: "Vocational Programs", duration: "1 Year", cost: "275,000 FRS", reg: "25,000 FRS" },
  { program: "HND Programs", duration: "3 Years", cost: "320,000 FRS", reg: "30,000 FRS" },
  { program: "Direct Degree Programs", duration: "4 Years", cost: "450,000 FRS", reg: "30,000 FRS" },
  { program: "Top-Up Bachelor of Science", duration: "N/A", cost: "495,000 FRS", reg: "30,000 FRS" },
  { program: "Master Programs (Online/Offline)", duration: "2 Years", cost: "650,000 FRS", reg: "50,000 FRS" },
];

export default function ProgramsPage() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      {/* 1. HERO SECTION */}
      <section className="bg-[#0b3160] pt-28 pb-24 px-4 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center text-white relative z-10">
          <span className="inline-block text-xs font-bold tracking-widest text-white uppercase mb-4 bg-[#d91e27] px-4 py-1.5 rounded-full shadow-sm">Academic Portfolios</span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-6 leading-tight">
            Academic Excellence <br /> Across Diverse Disciplines
          </h1>
        </div>
      </section>

      {/* 2. SCHOOLS GRID */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {schools.map((school) => (
            <div key={school.id} id={school.id} className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm">
              <div className="space-y-6">
                <div className={`h-1.5 w-16 ${school.accent} rounded-full`} />
                <h2 className="text-2xl font-black text-[#0b3160]">{school.title}</h2>
                <p className="text-gray-600 text-sm">{school.intro}</p>
                <div className="grid gap-4">
                  {school.categories.map((cat) => (
                    <div key={cat.name}>
                      <h4 className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-2">{cat.name}</h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {cat.programs.map((p) => (
                          <li key={p} className="flex items-center gap-2 text-xs font-semibold text-[#0b3160]">
                            <Layers size={12} className="text-[#d91e27]" /> {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <div className="aspect-video rounded-2xl overflow-hidden bg-slate-200">
                <img src={school.image} alt={school.title} className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. FEE STRUCTURE SECTION */}
      <section className="py-16 px-4 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <CreditCard className="text-[#d91e27]" size={32} />
            <h2 className="text-3xl font-black text-[#0b3160]">Program Fee Structure</h2>
          </div>
          <div className="rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#0b3160] text-white">
                  <th className="p-4">Program</th>
                  <th className="p-4 hidden sm:table-cell">Duration</th>
                  <th className="p-4">Tuition</th>
                  <th className="p-4">Reg.</th>
                </tr>
              </thead>
              <tbody>
                {feeStructure.map((item, index) => (
                  <tr key={index} className="border-b border-slate-100 hover:bg-slate-50 transition">
                    <td className="p-4 font-bold text-[#0b3160]">{item.program}</td>
                    <td className="p-4 text-gray-600 hidden sm:table-cell">{item.duration}</td>
                    <td className="p-4 font-bold text-[#d91e27]">{item.cost}</td>
                    <td className="p-4 text-gray-600">{item.reg}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-xl mx-auto bg-[#0b3160] p-12 rounded-3xl text-white">
          <h2 className="text-2xl font-black mb-4">Ready to Enroll?</h2>
          <p className="text-slate-300 text-sm mb-8">Join the next generation of leaders at the Balm of Gilead Higher Institute.</p>
          <Link href="/apply" className="inline-flex items-center gap-2 px-8 py-4 bg-[#d91e27] text-white font-black rounded-xl hover:bg-[#b8141b] transition-all">
            Apply Online Now <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}