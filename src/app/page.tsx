'use client'

import Image from 'next/image'
import FloatingMoon from './components/ui/FloatingMoon'
import HeroSection from './components/sections/HeroSection'
import Carousel from './components/sections/Caroussel'
import PartnersSection from './components/sections/PartnersSection'
import CommunitySection from './components/sections/CommunitySection'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-10 px-4">
      <FloatingMoon />
      {/* Conteneur des deux blocs (Texte & Image) */}
      <div className="w-full max-w-5xl flex flex-col mb-10">
        <HeroSection />
      </div>
      <div className="w-full max-w-7xl flex justify-center mb-10">
        {/* Ici, on centre le carrousel */}
        <Carousel />
      </div>
      <div className="w-full max-w-7xl flex justify-center mb-10">
        <PartnersSection />
      </div>
      <div className="w-full max-w-7xl flex justify-center mb-10">
        <CommunitySection />
      </div>
    </div>
  )
}
