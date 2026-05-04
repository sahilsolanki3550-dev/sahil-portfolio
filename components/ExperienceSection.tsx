import SectionHeader from "./common/SectionHeader";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    period: "Jan 2026 – Present",
    role: "Frontend Development Intern",
    company: "Ascendtis IT Solutions LLP",
    points: [
      "Developed responsive UI using Next.js, TypeScript, and Tailwind CSS",
      "Built reusable and modular React components",
      "Integrated APIs to display dynamic data",
      "Improved performance and optimized rendering",
    ],
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "API Integration"],
  },
  {
    period: "Jul 2, 2025 – Jul 16, 2025",
    role: "MERN Stack Internship (Online - 2 weeks)",
    company: "CreArt Solution",
    points: [
      "Built Employee Management System with CRUD functionality",
      "Developed frontend using React.js",
      "Integrated REST APIs for data handling",
      "Worked on frontend-backend data flow",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="relative container mx-auto font-inter pt-20 pb-20 space-y-20"
    >
      {/* 🔥 Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full -z-10"></div>

      {/* Header */}
      <SectionHeader
        title="Experience"
        description="My Professional Journey in Web Development"
      />

      {/* Timeline */}
      <div className="relative flex flex-col gap-14">

        {/* 🔥 Gradient Timeline Line */}
        <div className="absolute left-9 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-pink-500 via-purple-500 to-blue-500 md:-translate-x-1/2"></div>

        {experiences.map((exp, index) => (
          <div
            key={exp.role}
            className="relative flex flex-col md:flex-row items-start md:items-center justify-between w-full "
          >

            {/* 💎 Card */}
            <div
              className={`md:w-5/11 ml-12 md:ml-0 p-6 rounded-2xl relative group transition-all duration-500  ${
                index % 2 === 0 ? "md:order-1" : "md:order-2"
              }`}
            >

              {/* ✨ Gradient Border */}
              {/* <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 p-[1px] opacity-0 group-hover:opacity-100 transition duration-500"></div> */}

              {/* 🧊 Glass Card */}
<div className="rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 p-6 
  transition-all duration-500
  hover:-translate-y-1
  shadow-[0_0_25px_rgba(0,0,0,0.2)]
  hover:shadow-[0_0_35px_rgba(59,130,246,0.25),0_0_60px_rgba(6,182,212,0.2)]"
>
               <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
  {exp.period}
</span>

               <h3 className="text-xl md:text-2xl font-bold mt-1 text-white group-hover:text-blue-300 transition">
  {exp.role}
</h3>
                <p className="text-sm text-white/70 font-medium mb-3">
                  {exp.company}
                </p>

                {/* Points */}
                <ul className="text-sm text-slate-400 space-y-2 mb-4 list-disc pl-5">
                  {exp.points.map((point, i) => (
                    <li key={i} className="hover:text-white transition">
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Skills */}
                {exp.skills && (
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-pink-500/20 to-blue-500/20 border border-white/20 text-white hover:scale-110 transition"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

              </div>
            </div>

            {/* 🔥 Timeline Dot */}
            <div className="absolute left-4 md:left-1/2 size-10 rounded-full md:-translate-x-1/2 z-10 flex items-center justify-center bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 shadow-[0_0_20px_rgba(168,85,247,0.8)] hover:scale-125 transition-all duration-500">
              <Briefcase size={18} className="text-white" />
            </div>

            {/* Spacer */}
            <div
              className={`md:w-5/12 hidden md:block ${
                index % 2 === 0 ? "md:order-2" : "md:order-1"
              }`}
            ></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;