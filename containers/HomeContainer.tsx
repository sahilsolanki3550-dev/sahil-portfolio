import AboutMe from '@/components/AboutMe'
import { ContactMe } from '@/components/ContactMe'
import EducationSection from '@/components/EducationSection'
import ExperienceSection from '@/components/ExperienceSection'
import HeroSection from '@/components/HeroSection'
import MobileNavBar from '@/components/MobileNavBar'
import NavBar from '@/components/NavBar'
import ProjectsSection from '@/components/ProjectsSection'
import SkillsSection from '@/components/SkillsSection'
import React from 'react'

const HomeContainer = () => {
  return (
    <>
      
      <div>
        <HeroSection />
      </div>
      <div>
        <AboutMe />
      </div>
      <div>
        <ExperienceSection />
      </div>
      <div>
        <SkillsSection />
      </div>
      <div>
        <ProjectsSection />
      </div>
      <div>
        <EducationSection />
      </div>
      <div>
        <ContactMe />
      </div>
    </>
  )
}

export default HomeContainer
