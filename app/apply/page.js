import AdmissionForm from "@/components/AdmissionForm";

export const metadata = {
  title: "Apply Online | Admission Application | Balm of Gilead",
  description: "Start your academic journey at the Balm of Gilead Higher Institute. Fill out our online admission application form to apply for our Health, Business, Engineering, or Agriculture programs.",
};

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-20 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-black text-[#0b3160] mb-3">Admission Application</h1>
          <p className="text-slate-600">
            Take the first step toward your professional future. Complete the form below to submit your application for the 2026/2027 academic year.
          </p>
        </div>

        {/* Application Container */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-sm border border-slate-200">
          <AdmissionForm />
        </div>
      </div>
    </div>
  );
}