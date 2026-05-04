import React from 'react'

interface SectionHeaderProps {
  title: string
  description?: string
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description }) => {
  return (
    <div className='flex flex-col items-center space-y-4 font-inter relative'>

      {/* ✨ Background Glow */}
      <div className='absolute w-60 h-20 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 blur-3xl -z-10'></div>

      {/* 🏷 Title */}
      <h1 className='text-4xl md:text-5xl pb-2 font-bold text-center bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent'>
        {title}
      </h1>

      {/* 🔥 Animated Gradient Underline */}
      <div className='relative w-32 h-[6px] rounded-full overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-pulse'></div>
      </div>

      {/* 📝 Description */}
      {description && (
        <p className='text-white/70 text-lg text-center max-w-xl leading-relaxed'>
          {description}
        </p>
      )}

    </div>
  )
}

export default SectionHeader