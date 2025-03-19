'use client'

import Image from 'next/image'
import FloatingMoon from './components/ui/FloatingMoon'
import HeroSection from './components/sections/HeroSection'

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen pt-10 px-4">
      <FloatingMoon />
      {/* Conteneur des deux blocs (Texte & Image) */}
      <div className="w-full max-w-5xl flex flex-col">
        <HeroSection />
      </div>
    </div>
  )
}
