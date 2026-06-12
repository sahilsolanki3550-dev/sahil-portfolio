import React from 'react'
import SectionHeader from './common/SectionHeader'

import reactIcon from "@/public/Skillsicons/react.svg"
import naxtjs from "@/public/Skillsicons/nextJs.svg"
import typescript from "@/public/Skillsicons/typeScript.svg"
import tailwind from "@/public/Skillsicons/tailwind.svg"
import nodejs from "@/public/Skillsicons/nodejs.png"
import express from "@/public/Skillsicons/express.png"
import mongoDb from "@/public/Skillsicons/mongoDb.png"
import Image from 'next/image'

const skills = [
    {
        title: "React.js",
        description: "Component-based UI Development",
        icon: reactIcon,
        color: "text-purple-400",
        bg: "bg-purple-500/10",
        glow: "shadow-[0_0_30px_rgba(168,85,247,0.2)]",
    },
    {
        title: "Next.js",
        description: "Full-stack React Framework",
        icon: naxtjs,
        color: "text-violet-300",
        bg: "bg-violet-500/10",
        glow: "shadow-[0_0_30px_rgba(139,92,246,0.2)]",
    },
    {
        title: "TypeScript",
        description: "Static Type Safety",
        icon: typescript,
        color: "text-emerald-400",
        bg: "bg-emerald-500/10",
        glow: "shadow-[0_0_30px_rgba(16,185,129,0.2)]",
    },
    {
        title: "Tailwind CSS",
        description: "Utility-First Styling",
        icon: tailwind,
        color: "text-fuchsia-400",
        bg: "bg-fuchsia-500/10",
        glow: "shadow-[0_0_30px_rgba(217,70,239,0.2)]",
    },
     {
        title: "Node.js",
        description: "Utility-First Styling",
        icon: nodejs,
        color: "text-fuchsia-400",
        bg: "bg-fuchsia-500/10",
        glow: "shadow-[0_0_30px_rgba(217,70,239,0.2)]",
    },
     {
        title: "Express.js",
        description: "Utility-First Styling",
        icon: express,
        color: "text-fuchsia-400",
        bg: "bg-fuchsia-500/10",
        glow: "shadow-[0_0_30px_rgba(217,70,239,0.2)]",
    },
    {
        title: "MongoDb",
        description: "Utility-First Styling",
        icon: mongoDb,
        color: "text-fuchsia-400",
        bg: "bg-fuchsia-500/10",
        glow: "shadow-[0_0_30px_rgba(217,70,239,0.2)]",
    },
]

const SkillsSection = () => {
    return (
        <section id='skills' className='container mx-auto pt-20 pb-15 space-y-15'>
            <SectionHeader title='My Skills' description='The skills I work with in development' />

            <div className="grid gap-6 grid-cols-2 sm:grid-cols-4 xl:grid-cols-5 px-20 ">
                {/* <div className='hidden xl:block'></div> */}

                {skills.map((skill, index) => (
                  <div
  key={index}
  className={`bg-white/5 backdrop-blur-xl border border-white/10 
  hover:bg-linear-to-br hover:from-purple-500/10 hover:via-transparent hover:to-emerald-500/10
  hover:scale-110 hover:-translate-y-2 
  transition-all duration-700 ${skill.glow} 
  hover:shadow-[0_0_35px_rgba(168,85,247,0.25),0_0_60px_rgba(16,185,129,0.2)] 
  p-5 rounded-[20px] flex flex-col items-center text-center gap-5`}
>

                        <div className={`size-13 relative rounded-full flex items-center justify-center `}>
                            <Image 
                                alt={skill.title} 
                                src={skill.icon} 
                                fill
                                className='object-contain w-full h-full'
                            />
                        </div>

                        <div className='space-y-3'>
                            <h3 className={`text-lg font-bold text-white ${skill.color}`}>
                                {skill.title}
                            </h3>
                            <p className="text-slate-500 text-xs sm:text-sm">
                                {/* kept same */}
                            </p>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    )
}

export default SkillsSection