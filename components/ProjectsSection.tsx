'use client'
import React from 'react'
import SectionHeader from './common/SectionHeader'
import Image from 'next/image'
import atsPro from '@/public/projects/atsPro.png'
import ems from '@/public/projects/ems.png'
import jwtAuth from '@/public/projects/jwtAuth.png'
import Link from 'next/link'

const projects = [
  {
    name: "AtsPro - Resume Analyzer",
    description: "A web app that analyzes resumes against job descriptions and provides feedback to improve matching score.",
    image: atsPro,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/sahilsolanki3550-dev/ATSPro",
    live: "https://ats-pro-indol.vercel.app/"
  },
  {
    name: "AuthFlow - JWT Authentication System",
    description: "A web app with secure user authentication using JWT, including login, registration, and protected routes.",
    image: jwtAuth,
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/sahilsolanki3550-dev/mern-jwt-authentication",
    live: "https://mern-jwt-authentication-lrep.vercel.app/"
  },
  {
    name: "Employee Management System",
    description: "A web app to manage employee records with CRUD operations and seamless data handling using a full-stack approach.",
    image: ems,
    technologies: ["React", "Node.js", "Express", "MongoDB", "REST API"],
    github: "https://github.com/sahilsolanki3550-dev/ems-mern-crud",
    live: "https://ems-mern-crud-e5va.vercel.app/"
  }
];

const ProjectsSection = () => {
  return (
    <section id='projects' className='container mx-auto pt-20 pb-15 space-y-15 font-inter text-white'>
      <SectionHeader title='My Projects' description='Some of the projects I have built and worked on' />

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {projects.map((project, index) => (
          <div 
            onClick={() => window.open(project.live, "_blank")}
            key={index}
            className='rounded-2xl overflow-hidden bg-white/5 border border-white/10 
shadow-[0_0_25px_rgba(255,255,255,0.04)] 
hover:bg-gradient-to-br hover:from-indigo-500/10 hover:via-transparent hover:to-emerald-500/10
hover:scale-105 
hover:shadow-[0_0_35px_rgba(99,102,241,0.25),0_0_60px_rgba(16,185,129,0.2),0_0_90px_rgba(255,255,255,0.06)]
group transition-all duration-700 cursor-pointer'
          >

            {/* Image */}
            <div className='relative h-47 w-full overflow-hidden'>
              <Image 
                alt={project.name}
                src={project.image} 
                fill 
                 sizes="(max-width: 768px) 100vw, 33vw"
                className='rounded-t-2xl object-cover group-hover:scale-110 transition-all duration-500 ease-in-out' 
              />
            </div>

            {/* Content */}
            <div className='p-5 space-y-3 pb-10 
            transition-all duration-500 
            group-hover:translate-y-[-4px]'>

              {/* Title */}
              <h1 className='text-white text-xl font-semibold transition duration-300 
              group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-emerald-400 
              group-hover:bg-clip-text group-hover:text-transparent'>
                {project.name}
              </h1>

              {/* Description */}
              <p className='text-gray-300 text-sm transition duration-300 group-hover:text-gray-200'>
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className='flex flex-wrap gap-2 py-2'>
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className='text-xs px-3 py-1 rounded-full bg-white/10 text-white/80 border border-white/10
                    transition-all duration-300
                    hover:-translate-y-1 hover:scale-105
                    bg-gradient-to-r from-indigo-500/20 to-emerald-500/20
                    hover:text-white
                    hover:shadow-[0_0_10px_rgba(99,102,241,0.25)]'
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className='flex items-center gap-2 text-white cursor-pointer transition'>
                <Link 
                  href={project.github} 
                  target='_blank' 
                  onClick={(e) => e.stopPropagation()}
                  className="text-sm ml-3 underline underline-offset-4 
                  transition-all duration-300 
                  hover:bg-gradient-to-r hover:from-indigo-400 hover:to-emerald-400 
                  hover:bg-clip-text hover:text-transparent"
                >
                  View Code
                </Link>

                <Link 
                  href={project.live} 
                  target='_blank' 
                  onClick={(e) => e.stopPropagation()}
                  className="text-sm ml-3 underline underline-offset-4 
                  transition-all duration-300 
                  hover:bg-gradient-to-r hover:from-indigo-400 hover:to-emerald-400 
                  hover:bg-clip-text hover:text-transparent"
                >
                  View Project
                </Link>
              </div>

            </div>

          </div>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection