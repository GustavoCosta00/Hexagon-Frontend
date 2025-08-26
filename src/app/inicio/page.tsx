import React from 'react'
import Banner from '../components/Banner'
import HeroMainSection from '../components/HeroMainSection'
import HeroSection from '../components/HeroSection'

const page = () => {
  return (
    <div>
      <main>
        <Banner />
        <HeroMainSection />
        <HeroSection />
      </main>
    </div>
  )
}

export default page