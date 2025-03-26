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

      {/* Grid contenant les partenaires */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10">
        {partners.map((partner, index) => (
          <a
            key={index}
            href={partner.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Lien vers ${partner.name}`}
            className="min-w-[120px] w-48 h-48 bg-white flex items-center justify-center rounded-lg shadow-md transition-transform transform hover:scale-110 hover:shadow-2xl ease-in-out duration-300"
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              width={112}
              height={112}
              className="w-full h-full object-contain"
            />
          </a>
        ))}
      </div>
    </section>
  )
}
