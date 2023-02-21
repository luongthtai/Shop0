import React from 'react'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import HeroSection from './sections/HeroSection/HeroSection'
import CurtomerSection from './sections/CurtomerSection/CurtomerSection'
import LatesNews from './sections/LatestNews/LatesNews'
import Aos from 'aos'
import 'aos/dist/aos.css'

Aos.init({
  duration: 800,
})

export default function About() {
  return (
    <main>
      <Breadcrumb location="About"/>

      <HeroSection />
      <CurtomerSection />
      <LatesNews />

    </main>
  )
}
