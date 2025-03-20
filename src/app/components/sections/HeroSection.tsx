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
    <section className="flex items-center justify-between gap-20 p-10 lg:p-20 lg:gap-32 max-w-7xl mx-auto">
      {/* Bloc Texte */}
      <div className="w-1/2 md:w-full flex flex-col justify-center text-left space-y-6">
        <h1 className="text-6xl font-bold leading-tight md:text-5xl">
          Découvrez notre univers Web3
        </h1>
        <p className="text-2xl text-gray-700 md:text-xl">
          Jouez, collectionnez et échangez vos NFTs tout en profitant d'une
          expérience unique dans notre écosystème blockchain.
        </p>

        {/* Boutons */}
        <div className="flex gap-4">
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
      <div className="w-1/2 md:w-full">
        <img
          src="/token_clover_tangible.png"
          alt="Illustration"
          className="w-full h-auto object-cover rounded-2xl shadow-lg max-w-full animate-floating "
        />
      </div>
    </section>
  )
}
