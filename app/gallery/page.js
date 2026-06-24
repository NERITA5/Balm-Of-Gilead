"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Layers, Award, Users, BookOpen } from "lucide-react";

// 1. Streamlined Institutional Categories
const filterCategories = [
  { id: "all", label: "All Records", icon: Layers },
  { id: "campuses", label: "Our Campuses", icon: Users },
  { id: "academics", label: "Graduations & Defenses", icon: Award },
  { id: "training", label: "Practical Training", icon: BookOpen },
];

// 2. Comprehensive Master Institutional Asset Database
const mediaCatalog = [
  // --- CAMPUSES ---
  { title: "Tombel Campus Administration Frontage", category: "campuses", tag: "Campuses", description: "Main central operations complex based at Three Corner, Bonamoussadi Quarter, Tombel Town.", image: "/real-milestones/campus-tombel.jpg", span: "lg:col-span-2 lg:row-span-2" },
  { title: "Limbe Campus Red Cross Hall", category: "campuses", tag: "Campuses", description: "Lecture facility and clinical emergency simulation halls based in Limbe.", image: "/real-milestones/campus-limbe.jpg", span: "lg:col-span-1 lg:row-span-1" },
  { title: "Chief of Health District & Dubai Faculty Visit", category: "campuses", tag: "Partnerships", description: "Hosting the Tombel Chief of Health District alongside international visiting professors from Dubai.", image: "/real-milestones/dubai-prof-visit.jpg", span: "lg:col-span-1 lg:row-span-1" },
  { title: "20th May National Day March Past", category: "campuses", tag: "Campus Life", description: "Balm of Gilead students and administration proudly marching on the ceremonial field.", image: "/real-milestones/march-past-2025.jpg", span: "lg:col-span-1 lg:row-span-1" },
  { title: "Institutional Students & Staff Body Assembly", category: "campuses", tag: "Campus Life", description: "The dedicated faculty, executive administration, and student community of BAGHIBSTECH.", image: "/real-milestones/staff-students.jpg", span: "lg:col-span-2 lg:row-span-2" },

  // --- ACADEMICS ---
  { title: "Defense of First Batch Students", category: "academics", tag: "Academics", description: "Milestone final presentation and academic defense panel evaluation of our pioneer cohort.", image: "/real-milestones/first-batch-defense.jpg", span: "lg:col-span-1 lg:row-span-2" },
  { title: "Pioneer Nursing Assistants Graduation Ceremony", category: "academics", tag: "Academics", description: "Celebrating the formal graduation and national certification of our first batch of Nursing Assistants.", image: "/real-milestones/nursing-graduation.jpg", span: "lg:col-span-1 lg:row-span-2" },
  { title: "Official Matriculation Ceremony", category: "academics", tag: "Academics", description: "Formally welcoming the incoming student cohort under the supervision of the University of Bamenda.", image: "/real-milestones/matriculation.jpg", span: "lg:col-span-2 lg:row-span-1" },
  { title: "Inaugural Thesis Defense Session - Campus A", category: "academics", tag: "Academics", description: "Academic defenses taking place inside the main presentation hall at Campus A, Tombel Town.", image: "/real-milestones/campus-a-defense.jpg", span: "lg:col-span-1 lg:row-span-1" },

  // --- PRACTICAL TRAINING ---
  { title: "Practical Vocational Skill Training Session", category: "training", tag: "Vocational", description: "Hands-on vocational exercises developing vital industrial and patient-care competencies.", image: "/real-milestones/skill-training.jpg", span: "lg:col-span-2 lg:row-span-1" },
  { title: "Clinical Laboratory Science Practicals", category: "training", tag: "Training", description: "Students executing real-time medical diagnostics inside our fully equipped laboratory blocks.", image: "/real-milestones/lab-students.jpg", span: "lg:col-span-1 lg:row-span-1" },
  { title: "Advanced Computer Infrastructure Unit", category: "training", tag: "Technical", description: "Modern high-speed computing network systems supporting research and digital training.", image: "/gallery/sonography/computer-unit.jpg", span: "lg:col-span-1 lg:row-span-1" },
  { title: "Nursing Student Ward Simulation", category: "training", tag: "Nursing", description: "Clinical bedside practice and patient management simulation for nursing students.", image: "/gallery/nursing/nursing-student-1.jpg", span: "lg:col-span-1 lg:row-span-1" },
  { title: "Advanced Clinical Ward Practice", category: "training", tag: "Nursing", description: "Hands-on clinical nursing procedures in our simulated ward.", image: "/gallery/nursing/nursing-student-2.jpg", span: "lg:col-span-1 lg:row-span-1" },
  { title: "Diagnostic Sonography Lab Unit", category: "training", tag: "Sonography", description: "Real-world ultrasound diagnostic training performed by our biomedical students.", image: "/gallery/sonography/lab-unit.jpg", span: "lg:col-span-1 lg:row-span-1" },
  { title: "Distraction Observation Room", category: "training", tag: "Sonography", description: "Specialized diagnostic observation room for clinical imaging training.", image: "/gallery/sonography/distraction-room.jpg", span: "lg:col-span-1 lg:row-span-1" },
  { title: "Caregiver Training Hall", category: "training", tag: "Training", description: "Facility dedicated to specialized caregiver training and geriatric support practice.", image: "/gallery/sonography/hall-caregivers.jpg", span: "lg:col-span-1 lg:row-span-1" }
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredMedia = activeFilter === "all" 
    ? mediaCatalog 
    : mediaCatalog.filter(item => item.category === activeFilter);

  return (
    <main className="min-h-screen bg-slate-50 text-[#0b3160]">
      {/* Header Banner Area */}
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
            Explore authentic milestones from the Balm of Gilead Higher Institute of Biomedical Sciences and Technology.
          </p>
        </div>
      </section>

      {/* Media Navigation */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-slate-200 justify-center">
          {filterCategories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-black uppercase tracking-wider border transition-all duration-300 ${
                  isSelected ? "bg-[#0b3160] text-white border-transparent shadow-lg" : "bg-white text-slate-600 hover:border-[#0b3160] hover:text-[#0b3160]"
                }`}
              >
                <Icon size={14} />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[250px]">
          {filteredMedia.map((item, idx) => (
            <div 
              key={idx}
              className={`group relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-800 ${item.span} transition-all duration-500 hover:shadow-2xl`}
            >
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                   style={{ backgroundImage: `url('${item.image}')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#082548]/95 via-[#0b3160]/40 to-transparent z-10" />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <span className="text-[9px] font-black uppercase bg-red-600 text-white px-2 py-1 rounded w-fit tracking-wider">
                  {item.tag}
                </span>
                <h3 className="font-black text-white mt-2 text-sm sm:text-base transition-colors group-hover:text-red-300">
                  {item.title}
                </h3>
                <p className="text-slate-200 text-[11px] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1 hidden sm:block">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Professional Call-to-Action */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="bg-[#0b3160] rounded-3xl p-10 md:p-16 shadow-2xl relative overflow-hidden text-center text-white border border-slate-700">
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-black uppercase mb-6 tracking-tight">
              Start Your Professional Journey
            </h2>
            <p className="text-slate-300 text-sm md:text-base mb-10 max-w-xl mx-auto">
              Join the next generation of healthcare pioneers at Balm of Gilead Institute. Admissions are now active for the current academic year.
            </p>
            <Link 
              href="/apply" 
              className="inline-flex items-center gap-3 bg-[#d91e27] hover:bg-white text-white hover:text-[#0b3160] px-8 py-4 rounded-xl font-black uppercase text-xs transition-all duration-300 tracking-widest shadow-lg"
            >
              Apply Online Now <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}