import { GraduationCap, BookOpen, MapPin, CalendarDays } from "lucide-react";

const stats = [
  { icon: GraduationCap, value: "20+",  label: "Accredited Programs" },
  { icon: BookOpen,      value: "5",    label: "Schools of Study" },
  { icon: MapPin,        value: "2",    label: "Campus Locations" },
  { icon: CalendarDays,  value: "2024", label: "Year Established" },
];

export default function StatsBar() {
  return (
    <section className="bg-white border-b border-slate-200 py-10 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid Wrapper with solid structural dividers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 divide-y-0 divide-x-0 sm:gap-x-6 md:grid-cols-4 lg:divide-x lg:divide-slate-200/80">
          {stats.map(({ icon: Icon, value, label }, index) => (
            <div 
              key={label} 
              className={`flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 group ${
                index !== 0 ? "lg:pl-8" : ""
              }`}
            >
              {/* Institutional Themed Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 text-[#0b3160] group-hover:text-[#d91e27] group-hover:bg-red-50 group-hover:border-red-100 flex items-center justify-center shrink-0 transition-all duration-300 shadow-sm">
                <Icon size={20} className="stroke-[2]" />
              </div>
              
              {/* Content Metrics */}
              <div className="text-center sm:text-left space-y-0.5">
                <p className="text-3xl font-black text-[#0b3160] tracking-tight group-hover:text-[#d91e27] transition-colors">
                  {value}
                </p>
                <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest">
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}