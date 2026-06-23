import Link from "next/link";
import { Phone, MapPin, MessageCircle, ArrowUpRight } from "lucide-react";

const programLinks = [
  { label: "Health & Biomedical Sciences", href: "/programs#health" },
  { label: "Business & Management",        href: "/programs#business" },
  { label: "Engineering",                  href: "/programs#engineering" },
  { label: "Agriculture",                  href: "/programs#agriculture" },
  { label: "Home Economics",               href: "/programs#home-economics" },
];

const quickLinks = [
  { label: "Home",             href: "/" },
  { label: "About Us",         href: "/about" },
  { label: "Programs",         href: "/programs" },
  { label: "Admissions",       href: "/admissions" },
  { label: "Gallery",          href: "/gallery" },
  { label: "News",             href: "/news" },
  { label: "Contact Us",       href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0b3160] text-slate-100 border-t border-white/10 font-sans">
      
      {/* Upper Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

          {/* 1. Brand Identity Module */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-4">
              {/* Official Seal Integration (Sized beautifully for footer weighting) */}
              <div className="w-16 h-16 shrink-0 bg-white/5 rounded-xl p-1 flex items-center justify-center border border-white/10 shadow-md">
                <img 
                  src="/logo.png" 
                  alt="BAGHIBSTECH - Balm of Gilead Logo"
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <div>
                <p className="font-black text-base sm:text-lg tracking-tight text-white uppercase leading-none">
                  Balm of Gilead
                </p>
                <p className="text-[11px] font-bold text-red-400 tracking-wider uppercase mt-1.5">
                  Higher Institute of Biomedical Sci. &amp; Tech.
                </p>
              </div>
            </div>
            
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-sm">
              Empowering future leaders with high-quality clinical, technological, and corporate vocational training formats. Fully accredited and affiliated with the University of Bamenda.
            </p>

            <div className="inline-flex items-center gap-2 text-2xs font-bold text-white bg-red-600 px-3 py-1.5 rounded-md tracking-wider uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              Admissions Active 2026 / 2027
            </div>
          </div>

          {/* 2. Program Anchors Links */}
          <div className="lg:col-span-2 lg:pl-4">
            <h4 className="font-black text-xs text-white uppercase tracking-widest mb-5 border-b border-white/10 pb-2">
              Programs
            </h4>
            <ul className="space-y-3">
              {programLinks.map((l) => (
                <li key={l.label}>
                  <Link 
                    href={l.href} 
                    className="text-slate-300 hover:text-white text-xs font-semibold transition-colors flex items-center gap-1 group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 text-red-400 transition-opacity translate-y-[-0.5px]">·</span>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Quick Navigation Links */}
          <div className="lg:col-span-2 lg:pl-4">
            <h4 className="font-black text-xs text-white uppercase tracking-widest mb-5 border-b border-white/10 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link 
                    href={l.href} 
                    className="text-slate-300 hover:text-white text-xs font-semibold transition-colors flex items-center gap-1 group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 text-red-400 transition-opacity translate-y-[-0.5px]">·</span>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Professional Institutional Contacts & WhatsApp CTA Hub */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <h4 className="font-black text-xs text-white uppercase tracking-widest mb-5 border-b border-white/10 pb-2">
                Contact Us
              </h4>
              <ul className="space-y-4 text-xs font-medium">
                <li className="flex items-start gap-3 text-slate-300">
                  <MapPin size={16} className="text-red-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white block font-bold text-xs tracking-tight">Tombel Campus</strong>
                    Three Corner, Bonamoussadi Quarter, Tombel
                  </span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <MapPin size={16} className="text-red-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white block font-bold text-xs tracking-tight">Limbe Campus</strong>
                    Mile 2, Red Cross Building, Limbe
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={15} className="text-white shrink-0" />
                  <a href="tel:+237676247307" className="text-slate-300 hover:text-white font-bold tracking-tight transition-colors">
                    (+237) 676 247 307 / 671 719 692
                  </a>
                </li>
              </ul>
            </div>

            {/* Premium WhatsApp Community Anchor Block */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-3">
              <div>
                <p className="text-xs font-black text-white tracking-tight">Join Our WhatsApp Group</p>
                <p className="text-[11px] text-slate-400 mt-0.5">Stay instantly updated with announcements, admissions, and critical parameters.</p>
              </div>
              <a 
                href="https://wa.me/237676247307" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white hover:bg-slate-100 text-[#0b3160] font-black rounded-lg text-xs tracking-wide uppercase transition-all shadow-sm"
              >
                <MessageCircle size={15} className="text-emerald-600 fill-emerald-600" />
                Join WhatsApp Group <ArrowUpRight size={13} className="stroke-[2.5]" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Technical Status Bar */}
      <div className="border-t border-white/5 bg-[#082548]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-[11px] font-bold tracking-wider uppercase text-slate-400">
          <p className="text-center md:text-left text-white/70">
            Academic Excellence · Practical Skills · Professional Ethics · Innovation · Service To Humanity
          </p>
          <p className="shrink-0 text-center">
            © {new Date().getFullYear()} Balm of Gilead · Affiliated with The University of Bamenda
          </p>
        </div>
      </div>

    </footer>
  );
}