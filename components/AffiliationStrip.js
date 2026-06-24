import React from 'react';

const affiliations = [
  { name: "Alheri Bilingual Higher Institute", logo: "/logos/abhips.png" },
  { name: "University of Bamenda", logo: "/logos/uba.png" },
];

export default function AffiliationStrip() {
  return (
    <section className="bg-slate-50 py-12 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-10">
          Our Affiliations
        </h2>
        
        <div className="flex flex-wrap justify-center gap-12 items-center opacity-80">
          {affiliations.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center gap-4">
              <div className="h-24 w-24 flex items-center justify-center">
                <img 
                  src={item.logo} 
                  alt={item.name} 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <span className="text-[10px] font-bold text-slate-600 uppercase text-center max-w-[150px]">
                {item.name}
              </span>
            </div>
          ))}
        </div>
        
        {/* Authorization Number Section */}
        <div className="mt-12 text-center">
          <p className="text-[10px] text-slate-400 font-mono uppercase">
            Authorization: 000663MINEFOP/SG/DFOP/CSACD/OBAC
          </p>
        </div>
      </div>
    </section>
  );
}