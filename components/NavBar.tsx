'use client'
import { Briefcase, Code2, FolderKanban, Home, Mail, User } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import logo from "@/public/portfolioLogo.png"

const NavBar = () => {
    // const pathname = usePathname()
    // const isActive = (path: string) => pathname === path
    const [active, setActive] = useState('#home')

    return (
        <header className='border-b border-white/10 py-3 bg-[#040604] backdrop-blur-md fixed top-0 z-50  w-full shadow-lg shadow-black/20'>
            {/* Logo + Name */}

            <div className='container mx-auto flex justify-between items-center '>
                <div className='flex items-center gap-2 group'>
                    <div className='rounded-full size-14 flex items-center justify-center transition-all duration-300 scale-105 shadow-[0_0_15px_rgba(99,102,241,0.5)]'>
                        <Image alt='' src={logo}  className='rounded-full  object-contain w-12 transition-all duration-300 '/> 
                    </div>
                    <div>
                        <h3 className='text-white font-semibold text-xl leading-4 mt-2 tracking-wide'>Sahil Solanki</h3>
                        <span className='text-[#9ca3af] text-xs transition-colors duration-300 group-hover:text-indigo-400'>Aspiring Full Satck Developer</span>
                    </div>
                </div>


                <nav className='rounded-full bg-[#ffffff0d] border border-[#ffffff1a] p-1.5 flex items-center gap-5 backdrop-blur-lg shadow-md shadow-black/30'>
                 {/* <Link onClick={() => setActive('#home')} href="#" className={`relative text-sm font-medium hover:text-white rounded-full flex items-center gap-1 px-4 py-2 border  transition-all duration-300  hover:bg-white/10 hover:bg-linear-to-r hover:from-indigo-500/20 hover:to-purple-500/20 hover:shadow-[0_0_10px_rgba(99,102,241,0.4)] ${active === '#home' ? "border-indigo-400 text-white shadow-[0_0_10px_rgba(99,102,241,0.6)]" : "border-transparent text-white/70"}`}>
                        <Home size={15} className='mt-1 ransition-transform duration-300 group-hover:scale-110 shadow-[0_0_6px_rgba(99,102,241,0.8)]' />
                        Home
                        {active === '#home' && (
                            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full"></span>
                        )}
                    </Link> */}
                    <Link onClick={() => setActive('#home')} href="#" className={`relative text-sm font-medium hover:text-white rounded-full flex items-center gap-1 px-4 py-2 border  transition-all duration-300  hover:bg-white/10  ${active === '#home' ? "border-blue-400 text-white" : "border-transparent text-white/70"}`}>
                        <Home size={15} className='mt-1' />
                        Home
                        {/* Active Dot */}
                        {active === '#home' && (
                            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full"></span>
                        )}
                    </Link>
                    <Link onClick={() => setActive('#about')} href="#about" className={` relative text-sm font-medium rounded-full flex items-center gap-1 px-4 py-2 border  hover:bg-gray-700 transition-all duration-300 hover:text-white ${active === '#about' ? "border-blue-400 text-white" : "border-transparent text-white/70"}`}>
                        <User size={15} className='mt-1' />
                        About
                        {/* Active Dot */}
                        {active === '#about' && (
                            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full"></span>
                        )}
                    </Link>
                    <Link onClick={() => setActive('#experience')} href="#experience" className={`relative text-sm font-medium text-white rounded-full flex items-center gap-1 px-4 py-2 border  hover:bg-gray-700 transition-all duration-300 hover:text-white ${active === '#experience' ? "border-blue-400 text-white" : "border-transparent text-white/70"}`}>
                        <Briefcase size={15} className='mt-1' />
                        Experience
                        {/* Active Dot */}
                        {active === '#experience' && (
                            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full"></span>
                        )}
                    </Link>
                    <Link onClick={() => setActive('#skills')} href="#skills" className={`relative text-sm font-medium hover:text-white rounded-full flex items-center gap-1 px-4 py-2 border  hover:bg-gray-700 transition-all duration-300 ${active === '#skills' ? "border-blue-400 text-white" : "border-transparent text-white/70"}`}>
                        <Code2 size={15} className='mt-1' />
                        Skills
                        {/* Active Dot */}
                        {active === '#skills' && (
                            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full"></span>
                        )}
                    </Link>
                    <Link onClick={() => setActive('#projects')}
                        href="#projects" className={` relative text-sm font-medium text-white rounded-full flex items-center gap-1 px-4 py-2 border  hover:bg-gray-700 transition-all duration-300 ${active === '#projects' ? "border-blue-400 text-white" : "border-transparent text-white/70"}`}>
                        <FolderKanban   size={15} className='mt-1' />
                        Projects
                        {/* Active Dot */}
                        {active === '#projects' && (
                            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full"></span>
                        )}
                    </Link>
                    <Link onClick={() => setActive('#contact')}
                        href="#contact" className={` relative text-sm font-medium text-white rounded-full flex items-center gap-1 px-4 py-2 border  hover:bg-gray-700 transition-all duration-300 ${active === '#contact' ? "border-blue-400 text-white" : "border-transparent text-white/70"}`}>
                        <Mail  size={15} className='mt-1' />
                        Contact
                        {/* Active Dot */}
                        {active === '#contact' && (
                            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full"></span>
                        )}
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default NavBar
