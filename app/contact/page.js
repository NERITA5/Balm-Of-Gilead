"use client";
import { useState } from "react";
import { Phone, MapPin, MessageCircle, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", program: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", form);
    setSubmitted(true);
  };

  return (
    <>
      {/* 1. HERO SECTION - Premium Deep Blue Layout matching image_175581.jpg */}
      <section className="bg-[#0b3160] py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-500 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <span className="inline-block text-xs font-bold tracking-widest text-[#d91e27] uppercase mb-4 bg-white/10 px-4 py-1.5 rounded-full">
            Get in Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-5 leading-tight">
            Contact Us
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-xl mx-auto font-medium leading-relaxed">
            Questions about admissions, structural programs, or registration parameters? We are here to assist you.
          </p>
        </div>
      </section>

      {/* 2. CORE INTERFACE CONTAINER */}
      <section className="py-12 sm:py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">

            {/* LEFT COLUMN: Contact Details & Campus Hubs */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold tracking-widest text-[#d91e27] uppercase mb-1 block">
                  Support Hub
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b3160] tracking-tight">
                  We'd Love to Hear From You
                </h2>
                <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                  Whether you are a prospective student, parent, or partner, our professional teams are ready to support your onboarding.
                </p>
              </div>

              {/* Channels */}
              <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm space-y-5">
                <h3 className="font-black text-xs text-gray-400 uppercase tracking-widest border-b border-slate-100 pb-2">
                  Communication Channels
                </h3>
                
                <div className="space-y-4">
                  {[
                    { href: "tel:+237676247307", label: "676 247 307", sub: "Primary Admissions Support", color: "bg-red-50 text-[#d91e27]" },
                    { href: "tel:+237671719692", label: "671 719 692", sub: "Alternative Registrar Line", color: "bg-red-50 text-[#d91e27]" },
                  ].map((item) => (
                    <a key={item.label} href={item.href} className="flex items-center gap-4 group.block">
                      <div className={`w-11 h-11 rounded-xl ${item.color} flex items-center justify-center shrink-0 transition-transform group-hover:scale-105`}>
                        <Phone size={18} className="stroke-[2.5]" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[#0b3160] group-hover:text-[#d91e27] transition-colors">{item.label}</p>
                        <p className="text-xs text-gray-400 font-medium mt-0.5">{item.sub}</p>
                      </div>
                    </a>
                  ))}

                  <a href="https://wa.me/237676247307" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group.block">
                    <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 transition-transform group-hover:scale-105">
                      <MessageCircle size={18} className="stroke-[2.5]" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#0b3160] group-hover:text-emerald-600 transition-colors">WhatsApp Hub</p>
                      <p className="text-xs text-gray-400 font-medium mt-0.5">Click to join group or chat</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Campuses Card */}
              <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm space-y-5">
                <h3 className="font-black text-xs text-gray-400 uppercase tracking-widest border-b border-slate-100 pb-2">
                  Our Locations
                </h3>
                
                <div className="space-y-4">
                  {[
                    { name: "Tombel Campus", address: "Three Corner, Bonamoussadi Quarter, Tombel" },
                    { name: "Limbe Campus", address: "Mile 2, Red Cross Building, Limbe" },
                  ].map((c) => (
                    <div key={c.name} className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#0b3160] shrink-0">
                        <MapPin size={18} className="stroke-[2.5]" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[#0b3160]">{c.name}</p>
                        <p className="text-xs text-gray-500 mt-1 leading-relaxed">{c.address}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Interactive Form Module */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-100 shadow-sm p-6 sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-16 px-4 gap-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-inner">
                    <CheckCircle size={32} className="stroke-[2.5]" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#0b3160]">Message Dispatched</h3>
                  <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
                    Your inquiry has been stored inside our institutional dataset router. An advisor will contact you within 24 hours.
                  </p>
                  <button 
                    onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", program: "", message: "" }); }}
                    className="mt-4 text-xs font-bold text-[#d91e27] hover:underline uppercase tracking-wider"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-extrabold text-[#0b3160] mb-6 tracking-tight border-b border-slate-50 pb-3">
                    Send Us a Secure Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">Full Name *</label>
                        <input type="text" name="name" required value={form.name} onChange={handleChange}
                          placeholder="Your full name"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#0b3160] focus:ring-2 focus:ring-slate-100 outline-none text-sm transition font-medium text-[#0b3160]" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">Phone Number *</label>
                        <input type="tel" name="phone" required value={form.phone} onChange={handleChange}
                          placeholder="6XX XXX XXX"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#0b3160] focus:ring-2 focus:ring-slate-100 outline-none text-sm transition font-medium text-[#0b3160]" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">Email Address</label>
                      <input type="email" name="email" value={form.email} onChange={handleChange}
                        placeholder="you@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#0b3160] focus:ring-2 focus:ring-slate-100 outline-none text-sm transition font-medium text-[#0b3160]" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">Program of Interest</label>
                      <select name="program" value={form.program} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#0b3160] focus:ring-2 focus:ring-slate-100 outline-none text-sm transition bg-white font-medium text-[#0b3160]">
                        <option value="">Select an entry path...</option>
                        <optgroup label="Health & Biomedical Sciences">
                          <option>HND Nursing</option>
                          <option>HND Midwifery</option>
                          <option>HND Medical Laboratory Science</option>
                          <option>HND Sonography</option>
                          <option>BSc Nursing</option>
                          <option>Master's in Public Health</option>
                          <option>Nursing Assistant</option>
                          <option>Pharmacy Assistant</option>
                        </optgroup>
                        <optgroup label="Business & Management">
                          <option>HND Accountancy</option>
                          <option>HND Banking and Finance</option>
                          <option>HND Marketing and Trade</option>
                        </optgroup>
                        <optgroup label="School of Engineering">
                          <option>HND Software Engineering</option>
                          <option>HND Hardware Engineering</option>
                        </optgroup>
                        <optgroup label="School of Agriculture">
                          <option>HND Crop Production Technology</option>
                          <option>HND Animal Production Technology</option>
                        </optgroup>
                        <optgroup label="Home Economics">
                          <option>HND Baking and Food Processing</option>
                          <option>Hotel Management and Catering</option>
                          <option>Short Catering Program</option>
                        </optgroup>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">Your Message *</label>
                      <textarea name="message" required value={form.message} onChange={handleChange} rows={4}
                        placeholder="State your dynamic questions regarding entry files..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#0b3160] focus:ring-2 focus:ring-slate-100 outline-none text-sm transition resize-none font-medium text-[#0b3160]" />
                    </div>
                    <button type="submit"
                      className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#d91e27] hover:bg-[#b8141b] text-white font-bold rounded-xl transition-all shadow-md shadow-red-950/10 text-sm tracking-wide uppercase"
                    >
                      Send Message <Send size={15} className="stroke-[2.5]" />
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}