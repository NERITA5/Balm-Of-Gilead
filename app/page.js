import Link from "next/link";
import { Microscope, MapPin, Phone, Mail, GraduationCap } from "lucide-react";
import { homeMetadata } from "./metadata";
export const metadata = homeMetadata;
export default function HomePage() {
  return (
    <main className="bg-white min-h-screen font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#0b3160] text-white py-20 lg:py-32 overflow-hidden border-b-4 border-[#d91e27]">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center lg:text-left">
          <div className="space-y-6 max-w-2xl mx-auto lg:mx-0">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-red-400">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" /> Admissions Active For 2026 / 2027
            </div>
            <h1 className="text-4xl lg:text-6xl font-black uppercase tracking-tight leading-none">
              Empowering Future <br />
              <span className="text-red-400">Leaders In Health, Tech,</span> <br /> Business & Agriculture.
            </h1>
            <p className="text-slate-200 text-sm leading-relaxed">
              Established in 2024 and officially affiliated with the University of Bamenda. We deliver premium clinical education and hands-on vocational training designed for global impact.
            </p>
            <div className="pt-4">
              <Link href="/admissions" className="inline-block px-8 py-4 bg-[#d91e27] hover:bg-[#b8141b] text-white font-black text-xs uppercase tracking-widest rounded transition-all">Explore Programs</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. REFINED INSTITUTIONAL BADGE */}
      <section className="pt-16 pb-8 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="border border-slate-200 rounded-2xl p-10 bg-slate-50/50 shadow-sm">
            <h2 className="text-center text-[#0b3160] font-black tracking-[0.3em] uppercase text-xs mb-12">
              Institutional Accreditation & Affiliation
            </h2>
            <div className="flex justify-center items-center gap-16 md:gap-24 mb-12">
              {[
                { src: "/logos/abhips.png", label: "ABHIPS" },
                { src: "/logos/uba.png", label: "UNIVERSITY OF BAMENDA" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-5">
                  <div className="h-40 w-40 flex items-center justify-center p-3 bg-white rounded-2xl border border-slate-200 shadow-md">
                    <img src={item.src} alt={item.label} className="max-h-full max-w-full object-contain" />
                  </div>
                  <span className="text-[10px] font-black text-[#0b3160] tracking-widest text-center">{item.label}</span>
                </div>
              ))}
            </div>
            <div className="pt-8 border-t border-slate-200">
              <h4 className="text-center text-[9px] font-black text-[#1e3a8a] uppercase tracking-[0.25em] mb-4">Official Authorization Numbers</h4>
              <div className="flex flex-col items-center gap-2">
                <div className="text-[11px] font-bold text-slate-700 bg-white px-6 py-2 rounded border border-slate-200 shadow-sm">000663MINEFOP/SG/DFOP/CSACD/OBAC</div>
                <div className="text-[11px] font-bold text-slate-700 bg-white px-6 py-2 rounded border border-slate-200 shadow-sm">07736/NHA/MNESUP/DDES/ESUP/SDA/MF</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. GALLERY PREVIEW - Padding Adjusted to pt-8 to close gap */}
      <section className="pt-8 pb-24 max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-[#d91e27]">Institutional Milestones</span>
            <h2 className="text-3xl lg:text-4xl font-black text-[#0b3160] uppercase mt-2">Inside Balm of Gilead</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 aspect-video rounded-2xl overflow-hidden relative group">
             <img src="/real-milestones/matriculation.jpg" alt="Matriculation" className="w-full h-full object-cover" />
             <div className="absolute bottom-4 left-4 bg-white px-3 py-1 text-[10px] font-black uppercase tracking-widest text-[#0b3160]">Official Matriculation</div>
          </div>
          <div className="grid gap-6">
            <div className="aspect-square rounded-2xl overflow-hidden relative">
              <img src="/real-milestones/first-batch-defense.jpg" alt="Defense" className="w-full h-full object-cover" />
              <div className="absolute bottom-4 left-4 bg-white px-3 py-1 text-[10px] font-black uppercase tracking-widest text-[#0b3160]">Thesis Defense</div>
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden relative">
              <img src="/real-milestones/campus-limbe.jpg" alt="Campus" className="w-full h-full object-cover" />
              <div className="absolute bottom-4 left-4 bg-white px-3 py-1 text-[10px] font-black uppercase tracking-widest text-[#0b3160]">Limbe Campus</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. VISION SECTION */}
      <section className="bg-[#0b3160] py-24 px-6 text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-red-500">
              <Microscope size={28} />
              <span className="text-[10px] font-black uppercase tracking-widest">Our Strategic Vision</span>
            </div>
            <h3 className="text-3xl lg:text-5xl font-black uppercase leading-tight">Empowering Clinical Pioneers</h3>
            <p className="text-slate-300 leading-relaxed font-medium">
              We bridge theoretical academic mechanics with active field execution. Our mission is to produce graduates who don't just participate in the healthcare, technology, business, and agricultural sectors—they lead them.
            </p>
          </div>
          <div className="relative aspect-video bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
            <img src="/programs/biomedical.jpg" alt="Biomedical Sciences" className="w-full h-full object-cover" />
            <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded text-[10px] font-bold text-white uppercase tracking-widest">Biomedical Lab</div>
          </div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="bg-slate-50 border-t border-slate-200 py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <h4 className="font-black text-[#0b3160] text-lg mb-4">BALM OF GILEAD</h4>
            <p className="text-slate-500 text-sm max-w-xs">Excellence in health and technology education, preparing the next generation of leaders.</p>
          </div>
          <div>
            <h5 className="font-black text-[#0b3160] text-xs uppercase mb-4 tracking-widest">Navigation</h5>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>Programs</li>
              <li>Admissions</li>
              <li>Gallery</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h5 className="font-black text-[#0b3160] text-xs uppercase mb-4 tracking-widest">Contact</h5>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-center gap-2"><MapPin size={14}/> Limbe, Cameroon</li>
              <li className="flex items-center gap-2"><Phone size={14}/> +237 676 247 307</li>
              <li className="flex items-center gap-2"><Mail size={14}/> balmofgilead059@gmail.com</li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}