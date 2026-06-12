'use client'
import { Briefcase, Code2, FolderKanban, Home, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const MobileNavBar = () => {
    const [active, setActive] = React.useState('#home')

    return (
        <div className="fixed top-3 left-1/2 -translate-x-1/2 z-50 md:hidden">
            
            <nav className="flex items-center gap-3 bg-[#ffffff0d] backdrop-blur-md border border-[#ffffff1a] rounded-full px-1 py-1 shadow-lg">

                {/* Home */}
                <Link
                    href="#home"
                    onClick={() => setActive('#home')}
                    className={`flex flex-col items-center justify-center text-xs px-3 py-1 rounded-full transition ${
                        active === '#home' ? 'text-white' : 'text-white/60'
                    }`}
                >
                    <Home size={18} />
                    <span>Home</span>

                    {active === '#home' && (
                        <span className="w-1 h-1 bg-white rounded-full mt-1"></span>
                    )}
                </Link>

                {/* About */}
                <Link
                    href="#about"
                    onClick={() => setActive('#about')}
                    className={`flex flex-col items-center text-xs px-3 py-1 rounded-full ${
                        active === '#about' ? 'text-white' : 'text-white/60'
                    }`}
                >
                    <User size={18} />
                    <span>About</span>

                    {active === '#about' && (
                        <span className="w-1 h-1 bg-white rounded-full mt-1"></span>
                    )}
                </Link>

                {/* Experience */}
                <Link
                    href="#experience"
                    onClick={() => setActive('#experience')}
                    className={`flex flex-col items-center text-xs px-3 py-1 rounded-full ${
                        active === '#experience' ? 'text-white' : 'text-white/60'
                    }`}
                >
                    <Briefcase size={18} />
                    <span>Exp</span>

                    {active === '#experience' && (
                        <span className="w-1 h-1 bg-white rounded-full mt-1"></span>
                    )}
                </Link>

                {/* Skills */}
                <Link
                    href="#skills"
                    onClick={() => setActive('#skills')}
                    className={`flex flex-col items-center text-xs px-3 py-1 rounded-full ${
                        active === '#skills' ? 'text-white' : 'text-white/60'
                    }`}
                >
                    <Code2 size={18} />
                    <span>Skills</span>

                    {active === '#skills' && (
                        <span className="w-1 h-1 bg-white rounded-full mt-1"></span>
                    )}
                </Link>

                {/* Projects */}
                <Link
                    href="#projects"
                    onClick={() => setActive('#projects')}
                    className={`flex flex-col items-center text-xs px-3 py-1 rounded-full ${
                        active === '#projects' ? 'text-white' : 'text-white/60'
                    }`}
                >
                    <FolderKanban  size={18} />
                    <span>Projects</span>

                    {active === '#projects' && (
                        <span className="w-1 h-1 bg-white rounded-full mt-1"></span>
                    )}
                </Link>

            </nav>
        </div>
    )
}

export default MobileNavBar