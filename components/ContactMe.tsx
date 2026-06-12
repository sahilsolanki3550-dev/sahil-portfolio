import React from 'react'
import SectionHeader from './common/SectionHeader'
import Link from 'next/link'
import linkdin from "@/public/social/linkdin.png"
import github from "@/public/social/github.png"
import email from "@/public/social/email.png"
import Image from 'next/image'

const contacts = [
  {
    icon: linkdin,
    url: 'https://www.linkedin.com/in/sahil-solanki-326652294/',
  },
  {
    icon: github,
    url: 'https://github.com/sahilsolanki3550-dev',
  },
  {
    icon: email,
    url: 'mailto:sahilsolanki3550@gmail.com',
  },
]

export const ContactMe = () => {
  return (
    <section id="contact" className='py-20 space-y-15 font-inter'>
      <SectionHeader title="Let's Connect" description='' />

      <div className='container mx-auto flex justify-center gap-10'>
        {contacts.map((contact, index) => (
          <Link
            key={index}
            href={contact.url}
            target='_blank'
            className='rounded-full size-17 relative flex justify-center items-center 
            backdrop-blur-xl border border-white/10 
            shadow-[0_10px_25px_rgba(0,0,0,0.3),0_0_15px_rgba(255,255,255,0.05)]
            hover:bg-gradient-to-br hover:from-indigo-500/10 hover:via-transparent hover:to-emerald-500/10
            hover:scale-110 hover:-translate-y-2 
            hover:shadow-[0_0_30px_rgba(99,102,241,0.25),0_0_60px_rgba(16,185,129,0.2),0_0_80px_rgba(255,255,255,0.06)]
            transition-all duration-500'
          >
            <Image
              alt=''
              src={contact.icon}
              fill
              className='object-cover rounded-full'
            />
          </Link>
        ))}
      </div>
    </section>
  )
}