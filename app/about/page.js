import Link from "next/link";
import { MapPin, ArrowRight, Award, Users, Globe } from "lucide-react";

export const metadata = {
  title: "About Us | Balm of Gilead Higher Institute of Biomedical Science and Technology",
  description: "Learn about Balm of Gilead Higher Institute. Our mission, vision, and academic excellence in health, technology, and vocational training across our campuses in Tombel and Limbe, Cameroon.",
};

export default function AboutPage() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="bg-[#0b3160] py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-500 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-5xl mx-auto text-center text-white relative z-10">
          <span className="inline-block text-xs font-bold tracking-widest text-[#d91e27] uppercase mb-4 bg-white/10 px-4 py-1.5 rounded-full">
            About Our Institute
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 max-w-3xl mx-auto leading-tight">
            Excellence in Education.<br />
            <span className="text-[#d91e27]">Commitment to Service.</span>
          </h1>
          <p className="text-slate-200 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            Established in 2024 and affiliated with the University of Bamenda, we provide quality education and vocational training for a better tomorrow.
          </p>
        </div>
      </section>

      {/* 2. CORE INTERFACE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="text-xs font-bold tracking-widest text-[#d91e27] uppercase mb-2 block">About Us</span>
                <h2 className="text-3xl font-extrabold text-[#0b3160] tracking-tight mb-4">
                  Building Future Leaders, One Student at a Time
                </h2>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  Welcome to Balm of Gilead Higher Institute of Biomedical Science and Technology. Our mission is to empower individuals through comprehensive education and vocational training, equipping them with the skills necessary to excel in their chosen careers. With campuses in Tombel and Limbe, we focus on academic excellence, practical skills, entrepreneurship, and innovation.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4 items-start p-2 rounded-xl transition hover:bg-slate-50">
                  <div className="w-12 h-12 bg-red-50 border border-red-100 rounded-xl flex items-center justify-center shrink-0 text-[#d91e27]">
                    <Award size={22} className="stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-[#0b3160] mb-1">Quality Education</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">We deliver high-quality, practical, and theoretical training across various medical, technological, and agricultural disciplines.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-2 rounded-xl transition hover:bg-slate-50">
                  <div className="w-12 h-12 bg-red-50 border border-red-100 rounded-xl flex items-center justify-center shrink-0 text-[#d91e27]">
                    <Users size={22} className="stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-[#0b3160] mb-1">Experienced Faculty</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">Our highly qualified, dedicated lecturers are completely committed to your academic, technical, and professional milestone successes.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-2 rounded-xl transition hover:bg-slate-50">
                  <div className="w-12 h-12 bg-red-50 border border-red-100 rounded-xl flex items-center justify-center shrink-0 text-[#d91e27]">
                    <Globe size={22} className="stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-[#0b3160] mb-1">Community Impact</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">We foster an active culture of excellence, innovation, and direct community service through real-world medical/technical applications.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
              <div className="bg-[#0b3160] text-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-xl font-bold border-b border-white/10 pb-3 mb-4 text-white">Our Mission</h3>
                <p className="text-slate-200 text-sm leading-relaxed font-medium">To empower individuals through quality education, vocational training, and practical skill development, equipping them to excel in their careers and contribute positively to society.</p>
              </div>

              <div className="bg-slate-50 border border-slate-200 text-slate-800 rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-bold border-b border-slate-200 pb-3 mb-4 text-[#0b3160]">Our Vision</h3>
                <p className="text-gray-600 text-sm leading-relaxed">To become a leading institution in health sciences, technology, business, agriculture, and entrepreneurship by producing competent professionals and innovative leaders across the region.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CAMPUS LOCATIONS */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-[#d91e27] uppercase mb-2 block">Our Footprint</span>
            <h2 className="text-3xl font-extrabold text-[#0b3160]">Two Modern Campuses, One High Standard</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { 
                name: "Tombel Campus", 
                address: "Three Corner, Bonamoussadi Quarter, Tombel", 
                desc: "The foundational core of our specialized healthcare and technical diagnostic training setups.",
                img: "/real-milestones/campus-tombel.jpg",
                alt: "Balm of Gilead Higher Institute Tombel campus building"
              },
              { 
                name: "Limbe Campus",  
                address: "Mile 2, Red Cross Building, Limbe", 
                desc: "Strategic coastal campus framework enhancing access to high-impact health, trade, and vocational learning spaces.",
                img: "/real-milestones/campus-limbe.jpg",
                alt: "Balm of Gilead Higher Institute Limbe campus facilities"
              },
            ].map((campus) => (
              <div key={campus.name} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-300 border border-slate-100">
                <div className="h-52 bg-slate-200 relative overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-105" 
                    style={{ backgroundImage: `url('${campus.img}')` }} 
                    role="img" 
                    aria-label={campus.alt} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <span className="absolute bottom-4 left-4 z-10 text-white font-bold text-xl">{campus.name}</span>
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-600 mb-4">{campus.desc}</p>
                  <div className="flex items-start gap-2.5 text-sm text-[#0b3160] font-medium bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <MapPin size={16} className="text-[#d91e27] mt-0.5 shrink-0" />
                    <span>{campus.address}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="bg-white py-20 px-4 text-center border-t border-slate-100">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-[#0b3160] mb-4">Begin Your Professional Journey Today</h2>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/apply" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#d91e27] hover:bg-[#b8141b] text-white font-bold rounded-xl transition-all shadow-md text-sm tracking-wide">
              Apply Online Now <ArrowRight size={16} />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-slate-200 hover:border-[#0b3160] hover:text-[#0b3160] text-gray-700 font-bold rounded-xl transition-all text-sm tracking-wide">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}