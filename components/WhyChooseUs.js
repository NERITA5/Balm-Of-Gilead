import { Award, Wifi, TrendingUp, Shield, Users, Globe } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "University Affiliated",
    description: "Officially affiliated with the University of Bamenda, ensuring your qualifications are nationally accredited and highly respected.",
  },
  {
    icon: TrendingUp,
    title: "Career-Oriented Training",
    description: "Practical, hands-on clinical and technical programs designed to make you strictly job-ready from graduation day onward.",
  },
  {
    icon: Users,
    title: "Experienced Faculty",
    description: "Learn from qualified, veteran medical practitioners and corporate lecturers with direct operational experience.",
  },
  {
    icon: Globe,
    title: "Entrepreneurship Focus",
    description: "Go entirely beyond job employment—we actively train you to establish private practices, ventures, and medical facilities.",
  },
  {
    icon: Wifi,
    title: "Free Campus Internet",
    description: "Stay permanently connected to online learning engines with complimentary campus-wide high-speed fiber internet.",
  },
  {
    icon: Shield,
    title: "Red Cross Participation",
    description: "Direct community impact opportunities through integrated operations inside regional Red Cross volunteer channels.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="bg-white py-20 lg:py-24 px-4 border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 xl:gap-16 items-center">

          {/* Left Column: Mission, Vision, & Corporate Statement */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <span className="inline-block text-[11px] font-black tracking-widest text-[#d91e27] uppercase bg-red-50 border border-red-100 px-3.5 py-1.5 rounded-md">
              Institutional Framework
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-black text-[#0b3160] tracking-tight leading-tight">
              More Than A Degree — <br />
              <span className="text-[#d91e27]">A Complete Professional Future</span>
            </h2>
            
            <p className="text-gray-500 font-medium text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
              At Balm of Gilead, we do not simply lecture—we engineer elite specialists. Every core tract systematically conditions technical precision, entrepreneurial execution, and strict ethics.
            </p>

            {/* Structured Mission & Vision Interactive Cards */}
            <div className="space-y-4 pt-2 text-left max-w-xl mx-auto lg:mx-0">
              <div className="flex gap-4 p-5 rounded-xl bg-slate-50 border border-slate-200 group hover:bg-white hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-[#0b3160] text-white flex items-center justify-center shrink-0 font-black text-xs tracking-wider shadow-sm">
                  M
                </div>
                <div className="space-y-1">
                  <p className="font-black text-[#0b3160] text-xs uppercase tracking-wider">Our Core Mission</p>
                  <p className="text-gray-500 font-medium text-xs sm:text-sm leading-relaxed">
                    To completely empower competitive profiles through top-tier technological formats, rigorous clinical execution, and modern professional ethics.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-5 rounded-xl bg-slate-50 border border-slate-200 group hover:bg-white hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-[#d91e27] text-white flex items-center justify-center shrink-0 font-black text-xs tracking-wider shadow-sm">
                  V
                </div>
                <div className="space-y-1">
                  <p className="font-black text-[#d91e27] text-xs uppercase tracking-wider">Our Core Vision</p>
                  <p className="text-gray-500 font-medium text-xs sm:text-sm leading-relaxed">
                    To stand as the absolute vanguard institution for accredited technical fields, advancing health security and vocational innovation across Cameroon.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium High-Contrast Metrics Block */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {features.map(({ icon: Icon, title, description }) => (
              <div 
                key={title}
                className="group p-5 bg-white rounded-xl border border-slate-200/80 hover:border-[#0b3160] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Small Square Institutional Icon Block */}
                  <div className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-200/80 text-[#0b3160] group-hover:text-white group-hover:bg-[#0b3160] group-hover:border-transparent flex items-center justify-center mb-4 transition-all duration-300 shadow-2xs">
                    <Icon size={16} className="stroke-[2.5]" />
                  </div>
                  
                  <div className="space-y-1.5">
                    <h3 className="font-black text-[#0b3160] tracking-tight text-sm uppercase group-hover:text-[#d91e27] transition-colors">
                      {title}
                    </h3>
                    <p className="text-gray-500 font-medium text-xs leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}