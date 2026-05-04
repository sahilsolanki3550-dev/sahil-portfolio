'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const HeroSection = () => {
    const roles = ["Frontend Developer", "Moving to Full-Stack"];
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    useEffect(() => {
        const currentWord = roles[index];
        let timeout: ReturnType<typeof setTimeout>;

        if (!isDeleting && charIndex < currentWord.length) {
            timeout = setTimeout(() => {
                setText(currentWord.substring(0, charIndex + 1));
                setCharIndex(charIndex + 1);
            }, 100);
        }
        else if (!isDeleting && charIndex === currentWord.length) {
            timeout = setTimeout(() => setIsDeleting(true), 2000);
        }
        else if (isDeleting && charIndex > 0) {
            timeout = setTimeout(() => {
                setText(currentWord.substring(0, charIndex - 1));
                setCharIndex(charIndex - 1);
            }, 50);
        }
        else {
            setIsDeleting(false);
            setIndex((index + 1) % roles.length);
        }

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, index]);

    useEffect(() => {
        const dots = document.querySelectorAll(".dot");

        const moveDots = (e: MouseEvent) => {
            dots.forEach((dot) => {
                const rect = (dot as HTMLElement).getBoundingClientRect();
                const dx = e.clientX - rect.left - rect.width / 2;
                const dy = e.clientY - rect.top - rect.height / 2;

                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 200) {
                    (dot as HTMLElement).style.transform =
                        `translate(${dx * 0.15}px, ${dy * 0.15}px)`;
                } else {
                    (dot as HTMLElement).style.transform = "translate(0,0)";
                }
            });
        };

        window.addEventListener("mousemove", moveDots);
        return () => window.removeEventListener("mousemove", moveDots);
    }, []);


    return (

        <section
            id='home'
            className="relative w-full overflow-hidden"
        >
            <div className="absolute inset-0 -z-10 overflow-hidden">

                {/* ORB 1 */}
                <div className="absolute w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[120px] 
  top-[10%] left-[5%] animate-blob"></div>

                {/* ORB 2 */}
                <div className="absolute w-[400px] h-[400px] bg-purple-500/30 rounded-full blur-[120px] 
  bottom-[10%] right-[5%] animate-blob animation-delay-2000"></div>

                {/* ORB 3 */}
                <div className="absolute w-[300px] h-[300px] bg-pink-500/20 rounded-full blur-[100px] 
  top-[50%] left-[50%] animate-blob animation-delay-4000"></div>

            </div>
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="grid-bg"></div>

                {/* New animation */}
                <div className="code-line cl1"></div>
                <div className="code-line cl2"></div>
                <div className="code-line cl3"></div>
                <div className="code-line cl4"></div>
            </div>    <main className='relative container mx-auto flex flex-col items-center justify-center py-10 space-y-8 font-inter pt-30 md:pt-35 pb-10'>



                {/* Badge */}
                <div className={`text-white px-6 py-3 border-4 text-sm bg-black/60 backdrop-blur-md border-purple-500 
            shadow-[0_0_15px_rgba(59,130,246,0.6)] rounded-full
            transition-all duration-700 ease-out
            ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                    Welcome to my portfolio
                </div>

                {/* Heading */}
                <h1 className='text-white text-center flex flex-col '>

                    <span className={`text-2xl transition-all duration-700 delay-100
                ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}>
                        Hello, I' am
                    </span>

                    <span className={`text-5xl md:text-6xl font-extrabold md:leading-20 
                bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text
                transition-all duration-700 delay-200
                ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                        Sahil Solanki
                    </span>

                    {/* Typing (NO animation applied = no glitch) */}
                    <div className='text-3xl h-10 flex justify-center'>
                        <span className='pr-2 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text'>
                            {text}
                            {text && (
                                <span className='ml-1 border-r-2 border-purple-400 animate-blink'></span>
                            )}
                        </span>
                    </div>
                </h1>

                {/* Description */}
                <div className={`text-[#d1d5db] text-center text-lg md:max-w-3xl space-y-1
            transition-all duration-700 delay-300 
            ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                    <p className='hover:text-white transition-all duration-500'>
                        Frontend developer with hands-on experience in building responsive and dynamic web applications using React and Next.js.
                    </p>
                    <p className='hover:text-white transition-all duration-500'>
                        Currently expanding into full-stack development with Node.js while focusing on performance, usability, and clean design.
                    </p>
                </div>

                {/* Buttons */}
                <div className={`flex gap-3 transition-all duration-700 delay-500
            ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>

                    <Link href="#projects"
                        className='py-4 px-4 md:px-8 rounded-full text-white text-sm font-medium 
                    bg-gradient-to-r from-blue-500 to-purple-500 
                    shadow-[0_10px_30px_rgba(99,102,241,0.4)]
                    hover:scale-110 hover:shadow-[0_0_40px_rgba(168,85,247,0.8)]
                    transition-all duration-300 flex justify-center items-center'>
                        View Projects
                    </Link>

                    <a href='/Solanki_Sahil_Resume.pdf'
                        download="Solanki_Sahil_Resume.pdf"
                        className='py-4 px-6 md:px-8 rounded-full text-white border border-gray-600 
                    bg-white/10 hover:bg-white/20 
                    hover:scale-110 hover:shadow-lg
                    transition-all duration-300 flex justify-center items-center'>
                        Download Resume
                    </a>

                </div>

                <div className='text-gray-500 animate-pulse text-sm absolute bottom-0'>
                    Scroll to explore
                </div>
            </main>
        </section>
    )
}

export default HeroSection