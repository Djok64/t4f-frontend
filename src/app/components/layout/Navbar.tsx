'use client'

import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-black-800 p-4 border-b border-gray-300">
      {' '}
      {/* Ajout de la bordure grise */}
      <div className="flex justify-between items-center">
        {/* Partie gauche (Logo + texte) */}
        <div className="flex items-center space-x-2">
          <img src="/token_clover_tangible.png" alt="Logo" className="h-8" />
          <Link
            href="/"
            className="text-white text-lg font-bold hover:text-gray-400"
          >
            WORLD OF CLOVERS
          </Link>
        </div>

        {/* Menu principal visible sur grand écran */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-white hover:text-gray-400">
            Accueil
          </Link>
          <Link href="/Games" className="text-white hover:text-gray-400">
            Games
          </Link>
          <Link href="/Shop" className="text-white hover:text-gray-400">
            Shop
          </Link>
          <Link href="/News" className="text-white hover:text-gray-400">
            News
          </Link>
          <Link href="/Community" className="text-white hover:text-gray-400">
            Community
          </Link>
        </div>

        {/* Partie droite (Réseaux sociaux et Wallet/Account) */}
        <div className="flex items-center space-x-4">
          <button className="text-white hover:text-gray-400">Wallet</button>
          <button className="text-white hover:text-gray-400">Account</button>
          <a
            href="https://facebook.com"
            target="_blank"
            className="text-white hover:text-gray-400"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            className="text-white hover:text-gray-400"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
