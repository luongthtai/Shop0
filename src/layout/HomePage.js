import React from 'react'
import HeroSection from './Section/HeroSection/HeroSection'
import GameWorld from './Section/GameWorld/GameWorld'
import Brand from './Section/Brand/Brand'
import Selling from './Section/Selling/Selling'
import BestSeller from './Section/BestSeller/BestSeller'
import PopularSales from './Section/PopularSales/PopularSales'
import NewArrivals from './Section/NewArrivals/NewArrivals'
import PopularItems from './Section/PopularItems/PopularItems'
import Aos from 'aos'
import 'aos/dist/aos.css'

Aos.init({
  duration: 800,
})

export default function HomePage() {
  return (
    <>
      <main className='pt-5'>
        <HeroSection />
        <GameWorld />
        <Brand />
        <Selling />
        <BestSeller />
        <PopularSales />
        <NewArrivals />
        <PopularItems />
      </main>

    </>
  )
}
