'use client'
import Image from 'next/image'

const partners = [
  { name: 'ChatGPT', logo: '/GptLogo.png', link: 'https://chatgpt.com/' },
  {
    name: 'CoinGecko',
    logo: '/CoinGueko.png',
    link: 'https://www.coingecko.com/',
  },
  {
    name: 'CoinMarketCap',
    logo: '/CoinMarket.png',
    link: 'https://coinmarketcap.com/',
  },
  { name: 'Lovable', logo: '/Lovable.png', link: 'https://lovable.ai/' },
  { name: 'Metamask', logo: '/Metamask.png', link: 'https://metamask.io/' },
  { name: 'Phantom', logo: '/Phantom.png', link: 'https://phantom.com/' },
  { name: 'Raydium', logo: '/Raydium.png', link: 'https://raydium.io/swap/' },
  { name: 'Solana', logo: '/Solana.png', link: 'https://solana.com/fr' },
  {
    name: 'Solflare',
    logo: '/Solflare.png',
    link: 'https://www.solflare.com/',
  },
  { name: 'ChatGPT', logo: '/GptLogo.png', link: 'https://chatgpt.com/' },
]

export default function PartnersSection() {
  return (
    <section className="py-16 bg-black">
      {/* Titre de la section */}
      <h2 className="text-3xl font-bold text-center text-yellow-500 mb-10">
        Our Partners
      </h2>

      {/* Conteneur flex pour meilleure responsivité */}
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10">
        {partners.map((partner, index) => (
          <a
            key={index}
            href={partner.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Lien vers ${partner.name}`}
            className="w-24 h-24 sm:w-32 sm:h-32 bg-white flex items-center justify-center rounded-lg shadow-md transition-transform transform hover:scale-110 hover:shadow-2xl ease-in-out duration-300"
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              width={112}
              height={112}
              className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
            />
          </a>
        ))}
      </div>
    </section>
  )
}
