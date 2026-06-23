"use client";
import { useState } from 'react';

export default function AdmissionForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const res = await fetch('/api/admissions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      window.location.href = "https://wa.me/237676247307?text=Hello,%20I%20have%20just%20submitted%20my%20application%20form%20for%20admission.%20Please%20guide%20me%20on%20the%20next%20steps.";
    } else {
      alert("Submission failed. Please try again.");
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Registration Fee Notice */}
      <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
        <h3 className="font-bold text-[#0b3160] text-sm uppercase tracking-widest mb-3">Registration Fee Structure</h3>
        <ul className="text-sm text-gray-600 space-y-2" aria-label="Registration fees by program level">
          <li className="flex justify-between"><span>Vocational Programs:</span> <span className="font-bold text-[#d91e27]">25,000 FRS</span></li>
          <li className="flex justify-between"><span>HND & Degree Programs:</span> <span className="font-bold text-[#d91e27]">30,000 FRS</span></li>
          <li className="flex justify-between"><span>Master’s Programs:</span> <span className="font-bold text-[#d91e27]">50,000 FRS</span></li>
        </ul>
        <p className="text-xs text-gray-400 mt-4 italic">*Registration fees are required to process your application.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="fullName" className="block text-xs font-bold text-gray-500 uppercase mb-1">Full Name</label>
          <input id="fullName" name="fullName" required placeholder="Full Name" className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#0b3160] outline-none" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-xs font-bold text-gray-500 uppercase mb-1">Phone Number</label>
          <input id="phone" name="phone" required placeholder="WhatsApp Number" className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#0b3160] outline-none" />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-xs font-bold text-gray-500 uppercase mb-1">Email Address</label>
        <input id="email" name="email" type="email" required placeholder="you@email.com" className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#0b3160] outline-none" />
      </div>

      <div>
        <label htmlFor="program" className="block text-xs font-bold text-gray-500 uppercase mb-1">Desired Program</label>
        <select id="program" name="program" required className="w-full p-3 border border-slate-200 rounded-xl text-slate-600 outline-none">
          <option value="">Select Your Desired Program</option>
          <option value="Nursing">Nursing</option>
          <option value="Midwifery">Midwifery</option>
          <option value="Medical Laboratory Science">Medical Laboratory Science</option>
          <option value="Sonography">Sonography</option>
          <option value="Business Management">Business Management</option>
          <option value="Engineering">Engineering</option>
        </select>
      </div>

      <div>
        <label htmlFor="level" className="block text-xs font-bold text-gray-500 uppercase mb-1">Highest Qualification</label>
        <select id="level" name="level" required className="w-full p-3 border border-slate-200 rounded-xl text-slate-600 outline-none">
          <option value="">Highest Qualification</option>
          <option value="GCE O-Level">GCE O-Level</option>
          <option value="GCE A-Level">GCE A-Level</option>
          <option value="HND/Degree">HND / Degree</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-bold text-gray-500 uppercase mb-1">Additional Notes</label>
        <textarea id="message" name="message" placeholder="Questions or additional information" className="w-full p-3 border border-slate-200 rounded-xl h-24 outline-none focus:ring-2 focus:ring-[#0b3160]" />
      </div>

      <button 
        disabled={loading} 
        type="submit"
        className="w-full bg-[#d91e27] hover:bg-[#b8141b] text-white py-4 px-6 rounded-xl font-black uppercase tracking-widest transition-all active:scale-95 disabled:opacity-50"
      >
        {loading ? "Processing..." : "Submit Application"}
      </button>
    </form>
  );
}