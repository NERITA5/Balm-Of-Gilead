"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar"; // Adjust import path as needed
import Footer from "@/components/Footer"; // Adjust import path as needed
import { ArrowRight, Images, Layers, Award, Users, BookOpen, Compass, ShieldCheck } from "lucide-react";

// 1. Streamlined Institutional Categories
const filterCategories = [
  { id: "all",         label: "All Records",         icon: Layers },
  { id: "campuses",    label: "Our Campuses",        icon: Users },
  { id: "academics",   label: "Graduations & Defenses", icon: Award },
  { id: "training",    label: "Practical Training",   icon: BookOpen },
];

// 2. Master Institutional Real Asset Database (Mapping Your 12 Specific Files)
const mediaCatalog = [
  {
    title: "Tombel Campus Administration Frontage",
    category: "campuses",
    tag: "Campuses",
    description: "Main central operations complex based at Three Corner, Bonamoussadi Quarter, Tombel Town.",
    image: "/real-milestones/campus-tombel.jpg",
    span: "lg:col-span-2 lg:row-span-2"
  },
  {
    title: "Limbe Campus Red Cross Hall",
    category: "campuses",
    tag: "Campuses",
    description: "Lecture facility and clinical emergency simulation halls based in Limbe.",
    image: "/real-milestones/campus-limbe.jpg",
    span: "lg:col-span-1 lg:row-span-1"
  },
  {
    title: "Defense of First Batch Students",
    category: "academics",
    tag: "Academics",
    description: "Milestone final presentation and academic defense panel evaluation of our pioneer cohort.",
    image: "/real-milestones/first-batch-defense.jpg",
    span: "lg:col-span-1 lg:row-span-2"
  },
  {
    title: "Chief of Health District & Dubai Faculty Visit",
    category: "campuses",
    tag: "Partnerships",
    description: "Hosting the Tombel Chief of Health District alongside international visiting professors from Dubai.",
    image: "/real-milestones/dubai-prof-visit.jpg",
    span: "lg:col-span-1 lg:row-span-1"
  },
  {
    title: "Practical Vocational Skill Training Session",
    category: "training",
    tag: "Training",
    description: "Hands-on vocational exercises developing vital industrial and patient-care competencies.",
    image: "/real-milestones/skill-training.jpg",
    span: "lg:col-span-2 lg:row-span-1"
  },
  {
    title: "Advanced Computer Infrastructure Unit",
    category: "training",
    tag: "Training",
    description: "Modern high-speed computing network systems supporting research and digital training formats.",
    image: "/real-milestones/computer-unit.jpg",
    span: "lg:col-span-1 lg:row-span-1"
  },
  {
    title: "20th May National Day March Past",
    category: "campuses",
    tag: "Campus Life",
    description: "Balm of Gilead students and administration proudly marching on the ceremonial field (May 2025).",
    image: "/real-milestones/march-past-2025.jpg",
    span: "lg:col-span-1 lg:row-span-1"
  },
  {
    title: "Institutional Students & Staff Body Assembly",
    category: "campuses",
    tag: "Campus Life",
    description: "The dedicated faculty, executive administration, and student community of BAGHIBSTECH.",
    image: "/real-milestones/staff-students.jpg",
    span: "lg:col-span-2 lg:row-span-2"
  },
  {
    title: "Clinical Laboratory Science Practicals",
    category: "training",
    tag: "Training",
    description: "Students executing real-time medical diagnostics inside our fully equipped laboratory blocks.",
    image: "/real-milestones/lab-students.jpg",
    span: "lg:col-span-1 lg:row-span-1"
  },
  {
    title: "Pioneer Nursing Assistants Graduation Ceremony",
    category: "academics",
    tag: "Academics",
    description: "Celebrating the formal graduation and national certification of our first batch of Nursing Assistants.",
    image: "/real-milestones/nursing-graduation.jpg",
    span: "lg:col-span-1 lg:row-span-2"
  },
  {
    title: "Official Matriculation Ceremony",
    category: "academics",
    tag: "Academics",
    description: "Formally welcoming the incoming student cohort under the supervision of the University of Bamenda.",
    image: "/real-milestones/matriculation.jpg",
    span: "lg:col-span-2 lg:row-span-1"
  },
  {
    title: "Inaugural Thesis Defense Session - Campus A",
    category: "academics",
    tag: "Academics",
    description: "Academic defenses taking place inside the main presentation hall at Campus A, Tombel Town.",
    image: "/real-milestones/campus-a-defense.jpg",
    span: "lg:col-span-1 lg:row-span-1"
  }
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredMedia = activeFilter === "all" 
    ? mediaCatalog 
    : mediaCatalog.filter(item => item.category === activeFilter);

  return (
    <main className="min-h-screen bg-slate-50 text-[#0b3160]">
      <Navbar />

      {/* 1. Header Banner Area */}
      <section className="bg-[#0b3160] text-white pt-24 pb-24 px-4 relative overflow-hidden border-b-4 border-[#d91e27]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-red-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto text-center space-y-4 relative z-10">
          <span className="inline-block text-[11px] font-black tracking-widest text-red-400 uppercase bg-white/5 border border-white/10 px-4 py-2 rounded-lg">
            Institutional Verification Records
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase leading-none">
            Our Campuses <span className="text-red-400">In Focus</span>
          </h1>
          <p className="text-slate-200 text-xs sm:text-sm md:text-base font-semibold max-w-2xl mx-auto leading-relaxed">
            Explore authentic milestones from the Balm of Gilead Higher Institute of Biomedical Sciences and Technology. Real locations, true student success.
          </p>
        </div>
      </section>

      {/* 2. Media Navigation Control Hub */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Category Filter Controls Bar */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-slate-200 items-center justify-start lg:justify-center">
          {filterCategories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-black uppercase tracking-wider border transition-all duration-200 ${
                  isSelected 
                    ? "bg-[#0b3160] text-white border-transparent shadow-md" 
                    : "bg-white text-slate-600 border-slate-200 hover:border-[#0b3160] hover:text-[#0b3160]"
                }`}
              >
                <Icon size={14} className={isSelected ? "text-red-400" : "text-slate-400"} />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* 3. Masonry Grid Architecture Layout */}
        {filteredMedia.length === 0 ? (
          <div className="text-center py-20 bg-white border border-slate-200 rounded-2xl max-w-md mx-auto p-8 shadow-sm">
            <Compass size={40} className="mx-auto text-gray-300 mb-3 stroke-[1.5]" />
            <p className="font-black text-sm uppercase tracking-wider">No Media Entries Found</p>
            <p className="text-gray-500 text-xs mt-1">Check back soon for updated institutional imagery updates.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[220px]">
            {filteredMedia.map((item, idx) => {
              return (
                <div 
                  key={idx}
                  className={`group relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-800 ${item.span} transition-all duration-300 hover:shadow-xl`}
                >
                  {/* Backup Placeholder Graphic Layer */}
                  <div className="absolute inset-0 bg-slate-700 flex flex-col items-center justify-center text-slate-400 p-4 text-center">
                    <Images size={32} className="opacity-15 mb-2 stroke-[1.5]" />
                    <span className="text-[9px] uppercase tracking-widest font-bold opacity-30">[ Loading: {item.title} ]</span>
                  </div>

                  {/* High-Performance Background Image Layer */}
                  {item.image && (
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 scale-100 group-hover:scale-103"
                      style={{ backgroundImage: `url('${item.image}')` }}
                    />
                  )}

                  {/* High-Contrast Gradient Veil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#082548]/95 via-[#0b3160]/40 to-transparent opacity-90 z-10" />

                  {/* Text Information Layout Box */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-20 flex flex-col justify-end text-white space-y-1.5">
                    <span className="text-[9px] font-black tracking-widest uppercase bg-red-600 text-white px-2 py-0.5 rounded w-fit shadow-sm">
                      {item.tag}
                    </span>
                    <h3 className="font-black text-sm sm:text-base tracking-tight leading-snug text-white group-hover:text-red-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-300 text-[11px] font-medium leading-relaxed opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-16 transition-all duration-300 overflow-hidden hidden sm:block">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* 4. Action Verification Footer Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-8">
        <div className="bg-white rounded-2xl border-t-4 border-[#0b3160] p-8 md:p-12 shadow-xl relative overflow-hidden text-center max-w-4xl mx-auto">
          <div className="max-w-xl mx-auto space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#0b3160] uppercase">
              Ready to Train on This Infrastructure?
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-semibold leading-relaxed">
              Admissions remain active for the current upcoming academic cycles. Technical processing triggers instantly upon system validation of credentials.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Link 
                href="/admissions"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#d91e27] hover:bg-[#b8141b] text-white font-black rounded-xl transition-all text-xs tracking-widest uppercase shadow-md"
              >
                Apply Online <ArrowRight size={14} className="stroke-[2.5]" />
              </Link>
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white border-2 border-slate-200 hover:border-[#0b3160] text-slate-700 hover:text-[#0b3160] font-black rounded-xl transition-all text-xs tracking-widest uppercase"
              >
                Inquire For Tour
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}