import React from 'react'
import myImg from '@/public/my.png'
import Image from 'next/image'
import SectionHeader from './common/SectionHeader'

const AboutMe = () => {
  return (
    <section
      id='about'
      className='relative container mx-auto font-inter pt-20 pb-20 space-y-16'
    >

      {/* 🔴 Background Gradient Glow */}
      <div className='absolute top-20 left-10 w-72 h-72 bg-pink-500/20 blur-[120px] rounded-full -z-10'></div>
      <div className='absolute bottom-10 right-80 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full -z-10'></div>

      <SectionHeader title='About me' description='A quick introduction about me' />

      <div className='grid grid-cols-1 md:grid-cols-1 gap-8 md:gap-20 items-center'>

        {/* <div className='col-span-2 flex justify-center md:justify-end order-1 md:order-2'>
          <div className='relative w-full md:w-[420px] h-[360px] group'>

            <div className='absolute inset-0 rounded-3xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 p-[2px]'>
              <div className='w-full h-full bg-[#0a0a0a] rounded-3xl'></div>
            </div>

            <div className='absolute inset-0 rounded-3xl overflow-hidden'>
              <Image
                alt='User image'
                src={myImg}
                fill
                className='object-cover group-hover:scale-105 transition duration-500'
              />
            </div>

            <div className='absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20'></div>

          </div>
        </div> */}

        {/* 🟢 Text Side */}
        <div className='col-span-4 text-white/80 space-y-5 text-lg order-2 md:order-1'>

          <p className='leading-relaxed hover:text-white transition duration-300'>
            I have experience in frontend development, where I’ve built responsive and user-friendly web applications using 
            <span className='text-pink-400 font-semibold'> React</span>, 
            <span className='text-purple-400 font-semibold'> Next.js</span>, and 
            <span className='text-blue-400 font-semibold'> TypeScript</span>. 
            I enjoy working on UI and turning ideas into clean, functional interfaces that people can actually use.
          </p>

          <p className='leading-relaxed hover:text-white transition duration-300'>
            Along with frontend, I’ve started learning backend development with 
            <span className='text-green-400 font-semibold'> Node.js</span> and working with APIs. 
            I'm interested in understanding how things work behind the scenes and how frontend and backend connect.
          </p>

          <p className='leading-relaxed hover:text-white transition duration-300'>
            My goal is to become a 
            <span className='text-yellow-400 font-semibold'> Full-Stack Developer</span>, 
            and I’m looking for internship opportunities where I can improve my skills and gain real experience.
          </p>

        </div>

      </div>
    </section>
  )
}

export default AboutMe