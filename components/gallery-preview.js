"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Microscope, Layers, Award, Users, BookOpen } from "lucide-react";

// 1. Updated selection with the 3 required real assets
const galleryItems = [
  {
    title: "Official Matriculation Ceremony",
    image: "/real-milestones/matriculation.jpg",
    size: "lg:col-span-2 lg:row-span-2"
  },
  {
    title: "First Batch Defense",
    image: "/real-milestones/first-batch-defense.jpg",
    size: "lg:col-span-1 lg:row-span-1"
  },
  {
    title: "Limbe Campus Facilities",
    image: "/real-milestones/campus-limbe.jpg",
    size: "lg:col-span-1 lg:row-span-1"
  },
];

export default function GalleryPreview() {
  return (
    <section id="gallery" className="bg-slate-50 py-24 lg:py-32 px-4 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading Module */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div className="space-y-4 text-center md:text-left">
            <span className="inline-block text-[11px] font-black tracking-widest text-[#d91e27] uppercase bg-red-50 border border-red-100 px-3.5 py-1.5 rounded-md">
              Campus Life &amp; Facilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0b3160] uppercase tracking-tight">
              Inside Balm of Gilead
            </h2>
            <p className="text-slate-600 max-w-xl text-xs sm:text-sm font-semibold leading-relaxed">
              A glimpse into our academic environment, from official matriculations to our physical campus infrastructure.
            </p>
          </div>

          <Link 
            href="/gallery" 
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#0b3160] hover:text-[#d91e27] transition-colors group shrink-0 border-b-2 border-slate-200 hover:border-[#d91e27] pb-1.5"
          >
            Open Full Gallery <ArrowUpRight size={14} className="stroke-[2.5]" />
          </Link>
        </div>

        {/* 3-Image Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[250px] mb-24">
          {galleryItems.map((item, idx) => (
            <div 
              key={idx}
              className={`group relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-900 ${item.size} transition-all duration-300 hover:shadow-xl`}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                style={{ backgroundImage: `url('${item.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#082548]/90 to-transparent z-10" />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h4 className="font-black text-white leading-snug">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* AI-GENERATED VISION SECTION */}
        <div className="relative rounded-3xl overflow-hidden h-[400px] flex items-center shadow-2xl border border-white/20">
          <img 
            src="/programs/biomedical.jpg" 
            alt="Future of Biomedical Science" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0b3160]/85" />
          <div className="relative p-10 md:p-16 max-w-2xl text-white space-y-6">
            <div className="flex items-center gap-3 text-red-400">
              <Microscope size={28} />
              <span className="uppercase font-black tracking-widest text-xs">Vision for the Future</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-black leading-tight">Empowering the Next Generation of Clinical Pioneers</h3>
            <p className="text-slate-300 font-medium">We blend traditional academic rigor with modern simulated environments to ensure our graduates lead the healthcare evolution in Cameroon.</p>
          </div>
        </div>

      </div>
    </section>
  );
}