import Link from "next/link";
import { CheckCircle, FileText, Phone, ArrowRight, AlertCircle, HelpCircle } from "lucide-react";

export const metadata = {
  title: "Admissions | Balm of Gilead Higher Institute",
  description: "Apply to Balm of Gilead. Learn about admission requirements, dynamic 2026/2027 academic guidelines, and the application process.",
};

const steps = [
  { num: "01", title: "Complete Online Form", desc: "Fill out the online admission form with your structural personal and academic details." },
  { num: "02", title: "Submit Your Information", desc: "Submit your online profile along with relevant educational history backgrounds for structural review." },
  { num: "03", title: "Receive Guidance", desc: "Our formal institutional admissions team will review your core application assets and contact you directly." },
  { num: "04", title: "Visit Campus", desc: "Come directly to our Tombel or Limbe campus setups with all required original source documents to complete registration." },
];

const documents = [
  "Birth Certificate",
  "Academic Certificates",
  "Passport-size photographs",
  "Registration Fee",
];

export default function AdmissionsPage() {
  return (
    <>
      {/* 1. HERO SECTION - Styled to match the premium dark blue brand tone of image_175581.jpg */}
      <section className="bg-[#0b3160] py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-500 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-5xl mx-auto text-center text-white relative z-10">
          <span className="inline-block text-xs font-bold tracking-widest text-[#d91e27] uppercase mb-4 bg-white/10 px-4 py-1.5 rounded-full">
            Admissions Open
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 max-w-3xl mx-auto leading-tight">
            Start Your Journey <br />
            <span className="text-[#d91e27]">With Us</span>
          </h1>
          <p className="text-slate-200 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            We are now accepting applications. Follow our simple verification process to secure your position.
          </p>
        </div>
      </section>

      {/* 2. ADMISSION REQUIREMENTS - Two-Column High-Contrast Visual Balance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-[#d91e27] uppercase mb-2 block">
              Prerequisites
            </span>
            <h2 className="text-3xl font-extrabold text-[#0b3160]">
              Admission Requirements
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Please review institutional entry milestones below based on your chosen program path.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* HND Health Programs Card */}
            <div className="bg-white border-2 border-slate-100 shadow-sm rounded-2xl p-8 flex flex-col justify-between transition-all hover:border-slate-200">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-2.5 h-7 bg-[#0b3160] rounded-full block" />
                  <h3 className="font-extrabold text-xl text-[#0b3160]">HND Programs</h3>
                </div>
                <p className="text-xs font-semibold text-[#d91e27] uppercase tracking-wider mb-6">
                  Nursing, Midwifery, Medical Laboratory Science, Sonography
                </p>
                
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-sm text-gray-600">
                    <CheckCircle size={16} className="text-[#0b3160] mt-0.5 shrink-0 stroke-[2.5]" />
                    <span>GCE Advanced Level</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-600">
                    <CheckCircle size={16} className="text-[#0b3160] mt-0.5 shrink-0 stroke-[2.5]" />
                    <span>Science background</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-600">
                    <CheckCircle size={16} className="text-[#0b3160] mt-0.5 shrink-0 stroke-[2.5]" />
                    <span>Relevant O-Level and A-Level science subjects</span>
                  </li>
                </ul>
              </div>

              {/* Explicit Visual Guardrail for Arts Non-Eligibility */}
              <div className="mt-8 pt-4 border-t border-red-100 bg-red-50/50 -mx-8 -mb-8 p-8 rounded-b-2xl flex items-start gap-3">
                <AlertCircle size={18} className="text-[#d91e27] shrink-0 mt-0.5" />
                <p className="text-xs font-bold text-red-900">
                  Notice: Arts students are not eligible for these health science HND programs.
                </p>
              </div>
            </div>

            {/* Vocational Programs Card */}
            <div className="bg-white border-2 border-slate-100 shadow-sm rounded-2xl p-8 flex flex-col justify-between transition-all hover:border-slate-200">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-2.5 h-7 bg-[#d91e27] rounded-full block" />
                  <h3 className="font-extrabold text-xl text-[#0b3160]">Vocational Training</h3>
                </div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-6">
                  All Short Professional & Vocational Frameworks
                </p>
                
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-sm text-gray-600">
                    <CheckCircle size={16} className="text-[#d91e27] mt-0.5 shrink-0 stroke-[2.5]" />
                    <span>First School Leaving Certificate</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-600">
                    <CheckCircle size={16} className="text-[#d91e27] mt-0.5 shrink-0 stroke-[2.5]" />
                    <span>GCE O-Level</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-600">
                    <CheckCircle size={16} className="text-[#d91e27] mt-0.5 shrink-0 stroke-[2.5]" />
                    <span>GCE Advanced Level</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-emerald-100 bg-emerald-50/30 -mx-8 -mb-8 p-8 rounded-b-2xl flex items-start gap-3">
                <CheckCircle size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-xs font-bold text-emerald-950">
                  Notice: Both Arts and Science students are eligible for vocational programs.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Help Banner */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50 border border-slate-200 rounded-2xl px-6 py-5 max-w-5xl mx-auto">
            <div className="flex items-start gap-3">
              <HelpCircle size={20} className="text-[#0b3160] mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-bold text-[#0b3160]">Need Custom Eligibility Guidance?</p>
                <p className="text-xs text-gray-500 mt-0.5">Connect with an admissions advisor immediately to review your GCE combinations.</p>
              </div>
            </div>
            <a href="tel:+237676247307" className="text-sm font-bold text-white bg-[#0b3160] hover:bg-[#072244] px-5 py-2.5 rounded-xl transition shrink-0">
              Call 676 247 307
            </a>
          </div>
        </div>
      </section>

      {/* 3. INSTRUCTIONAL STEPS - Minimalist Grid System matching Page 4 of image_175581.jpg */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-[#d91e27] uppercase mb-2 block">
              Workflow
            </span>
            <h2 className="text-3xl font-extrabold text-[#0b3160]">
              Application Process
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {steps.map((step) => (
              <div key={step.num} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 relative group transition-all hover:shadow-md">
                <span className="text-4xl font-black text-slate-100 group-hover:text-red-50 transition-colors block mb-4 font-mono">
                  {step.num}
                </span>
                <h3 className="font-bold text-base text-[#0b3160] mb-2">{step.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. REQUIRED DOCUMENTS - Clean Checklist Layout */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-[#d91e27] uppercase mb-2 block">
              Checklist
            </span>
            <h2 className="text-3xl font-extrabold text-[#0b3160]">
              Required Documents
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Ensure you prepare the following structural portfolio items prior to visiting the final campus registration blocks.
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 md:p-10">
            <div className="grid sm:grid-cols-2 gap-5">
              {documents.map((doc) => (
                <div key={doc} className="flex items-center gap-3.5 text-sm font-semibold text-[#0b3160] bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                  <FileText size={18} className="text-[#d91e27] shrink-0" />
                  <span>{doc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION - Direct Dynamic Target Conversion Component */}
      <section className="bg-white py-16 px-4 text-center border-t border-slate-100">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-[#0b3160] tracking-tight mb-4">
            Ready to Secure Your Future?
          </h2>
          <p className="text-gray-500 mb-8 max-w-md mx-auto text-sm leading-relaxed">
            Connect immediately with our structural counselors to start your formal admission application profile.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a 
              href="tel:+237676247307"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#d91e27] hover:bg-[#b8141b] text-white font-bold rounded-xl transition-all shadow-md shadow-red-900/10 text-sm tracking-wide"
            >
              <Phone size={16} className="stroke-[2.5]" /> Call: 676 247 307
            </a>
            <a 
              href="https://wa.me/237676247307" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-slate-200 hover:border-[#0b3160] hover:text-[#0b3160] text-gray-700 font-bold rounded-xl transition-all text-sm tracking-wide bg-slate-50"
            >
              Join WhatsApp Group
            </a>
          </div>
        </div>
      </section>
    </>
  );
}