import AdmissionForm from "@/components/AdmissionForm";

export const metadata = {
  title: "Apply Online | Admission Application | Balm of Gilead",
  description: "Start your academic journey at the Balm of Gilead Higher Institute. Fill out our online admission application form to apply for our Health, Business, Engineering, or Agriculture programs.",
};

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-20 px-6">
      <div className="max-w-2xl mx-auto">
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#d91e27] mb-3 block">
            Institutional Admissions
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-[#0b3160] mb-4 uppercase tracking-tight">
            Apply For 2026/2027
          </h1>
          <p className="text-slate-600 text-sm leading-relaxed max-w-lg mx-auto">
            Take the first step toward your professional future. Complete the form below to initiate your application. 
            All submissions are reviewed by our admissions team.
          </p>
        </div>

        {/* Application Container */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-lg border border-slate-100">
          <AdmissionForm />
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            Balm of Gilead Higher Institute of Professional Studies
          </p>
          <p className="text-[9px] text-slate-400 mt-2">
            Limbe, Cameroon | University of Bamenda Affiliated
          </p>
        </div>
        
      </div>
    </div>
  );
}