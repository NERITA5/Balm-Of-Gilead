import { Phone, Award, Users, Trophy } from "lucide-react";

export const metadata = {
  title: "Student Ambassador Program | Earn Rewards | Balm of Gilead",
  description: "Join the Balm of Gilead Student Ambassador program for the 2026/2027 academic year. Refer new students and earn up to 40,000 FCFA per enrollment. View our reward tiers and contact us to get started.",
};

export default function ReferralPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-[#0b3160] mb-4">Student Ambassador Program</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Help us build the Balm of Gilead community. Refer new students for the 2026/2027 academic year and earn generous rewards for your support.
          </p>
        </div>

        {/* Tuition Table */}
        <div className="mb-16 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="bg-[#0b3160] text-white px-6 py-4 font-black flex justify-between">
            <span>Program</span>
            <span>Tuition / Reg. Fee</span>
          </div>
          {[
            { p: "Vocational Programs", t: "275,000 FRS", r: "25,000 FRS" },
            { p: "HND Programs", t: "320,000 FRS", r: "30,000 FRS" },
            { p: "Direct Degree Programs", t: "350,000 FRS", r: "30,000 FRS" },
            { p: "Top-Up Bachelor of Science", t: "395,000 FRS", r: "30,000 FRS" },
            { p: "Master Programs (Online/Offline)", t: "650,000 FRS", r: "50,000 FRS" },
          ].map((item, idx) => (
            <div key={idx} className="flex justify-between px-6 py-4 border-b border-slate-100 text-sm">
              <span className="font-bold text-[#0b3160]">{item.p}</span>
              <span className="text-gray-600 font-medium">{item.t} / {item.r}</span>
            </div>
          ))}
        </div>

        {/* Tiered Reward Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col">
            <Award className="text-[#0b3160] mb-4" size={32} />
            <h3 className="text-lg font-black text-[#0b3160] mb-2 uppercase">Standard</h3>
            <p className="text-3xl font-black text-[#d91e27] mb-4">25,000 FCFA</p>
            <p className="text-sm text-gray-600 mt-auto">Per individual referral. Perfect for alumni and community members.</p>
          </div>
          <div className="bg-[#0b3160] p-8 rounded-3xl text-white shadow-xl flex flex-col transform md:-translate-y-4">
            <Users className="text-red-400 mb-4" size={32} />
            <h3 className="text-lg font-black text-white mb-2 uppercase">Master</h3>
            <p className="text-3xl font-black text-red-400 mb-4">30,000 FCFA</p>
            <p className="text-sm text-slate-300 mt-auto">For dedicated ambassadors referring 5+ students per season.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col">
            <Trophy className="text-[#d91e27] mb-4" size={32} />
            <h3 className="text-lg font-black text-[#0b3160] mb-2 uppercase">Elite</h3>
            <p className="text-3xl font-black text-[#d91e27] mb-4">40,000 FCFA</p>
            <p className="text-sm text-gray-600 mt-auto">For top-tier recruiters reaching 10+ successful student enrollments.</p>
          </div>
        </div>

        {/* Action Box */}
        <div className="text-center bg-white p-10 rounded-3xl border border-slate-200 shadow-sm">
          <h2 className="text-2xl font-black text-[#0b3160] mb-6">Ready to start referring?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+237676247307" className="flex items-center justify-center gap-3 bg-[#0b3160] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#1e4a82] transition">
              <Phone size={18} /> 676 247 307
            </a>
            <a href="tel:+237671719692" className="flex items-center justify-center gap-3 bg-[#d91e27] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#b8141b] transition">
              <Phone size={18} /> 671 719 692
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}