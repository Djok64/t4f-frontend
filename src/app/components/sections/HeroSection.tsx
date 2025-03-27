'use client' // Indique que ce composant est interactif côté client
import Button from '../ui/Button'
import { useRouter } from 'next/navigation'

export default function HeroSection() {
  const router = useRouter()
  const handleJoinCommunity = () => {
    alert('JoinCommunity fonctionnality coming soon')
  }

  const handleDiscoverToken = () => {
    router.push('/token')
  }

  return (
    <section className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-32 p-6 md:p-10 lg:p-20 max-w-7xl mx-auto">
      {/* Bloc Texte */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-yellow-500">
          DISCOVER THE WEB3 UNIVERS
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          THE FIRST PLAY TO EARN GAMING PLATFORM WITH RARE AND VALUABLE
          TOKENOMICS
        </p>

        {/* Boutons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <Button
            onClick={handleJoinCommunity}
            className="px-4 py-3 font-semibold rounded-full shadow-md transition-all duration-300 bg-gray-400 text-white hover:bg-gray-600"
          >
            Join Community
          </Button>
          <Button
            onClick={handleDiscoverToken}
            className="px-4 py-3 font-semibold rounded-full shadow-md transition-all duration-300 bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700"
          >
            Discover Token
          </Button>
        </div>
      </div>

      {/* Bloc Image */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src="/token_clover_tangible.png"
          alt="Illustration"
          className="w-full max-w-sm md:max-w-md lg:max-w-full h-auto object-cover rounded-2xl shadow-lg animate-floating"
        />
      </div>
    </section>
  )
}
