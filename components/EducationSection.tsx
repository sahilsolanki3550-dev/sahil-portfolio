import React from 'react'
import SectionHeader from './common/SectionHeader'
import { GraduationCap, BookOpen, School } from "lucide-react";

const education = [
  {
    period: "2023 – 2026",
    degree: "B.E. Computer Engineering",
    institute: "Sigma Institute of Engineering, Vadodara",
    icon: GraduationCap,
  },
  {
    period: "2020 – 2023",
    degree: "Diploma Computer Engineering",
    institute: "The Maharaja Sayajirao University, Vadodara",
    icon: BookOpen,
  },
  {
    period: "2020",
    degree: "SSC – 10th",
    institute: "Shree Swami Vivekanand Vidyalaya, Vadodara",
    icon: School,
  },
];

const EducationSection = () => {
  return (
    <section className='py-15 space-y-15'>
      <SectionHeader title='My Education' description='' />

      <div className="container mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {education.map((edu, index) => (
          <div
            key={index}
           className="p-6 rounded-2xl bg-white/5 border border-white/10 
shadow-[0_10px_30px_rgba(0,0,0,0.25),0_0_20px_rgba(255,255,255,0.05)]
hover:bg-gradient-to-br hover:from-indigo-500/10 hover:via-transparent hover:to-emerald-500/10
hover:scale-105 
hover:shadow-[0_0_35px_rgba(99,102,241,0.25),0_0_60px_rgba(16,185,129,0.2),0_0_80px_rgba(255,255,255,0.06)]
transition-all duration-500 flex gap-6 items-start"
          >

            {/* Content */}
            <div className="flex flex-col gap-2">

              <div className='flex items-center justify-center size-12 bg-gray-600/80 rounded-full mb-5
              shadow-[0_0_15px_rgba(255,255,255,0.1)]'>
                <edu.icon className='text-white'/>
              </div>

              <span className="font-bold text-sm text-white/90">
                {edu.period}
              </span>

              <h3 className="text-lg sm:text-xl font-bold text-white">
                {edu.degree}
              </h3>

              <p className="text-gray-300 text-sm">
                {edu.institute}
              </p>

            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default EducationSection