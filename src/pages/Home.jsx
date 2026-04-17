import React from 'react'
import Hero from '../components/Hero'
import PopularCategories from '../components/PopularCategories'
import HotelCards from '../components/HotelCards'
import HomeVideo from '../components/HomeVideo'
import FeaturesSection from '../components/FeaturesSection'
import Testimonials from '../components/Testimonials'


const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <PopularCategories/>
        <HotelCards/>
        <HomeVideo/>
        <FeaturesSection/>
        <Testimonials/>
      </main>
    </>

  )
}

export default Home