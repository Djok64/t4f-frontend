'use client'

import Button from '../ui/Button'
import Link from 'next/link'
import { FaDiscord, FaTelegram } from 'react-icons/fa' // Import des icônes

const Navbar = () => {
  const handleLogin = () => {
    alert('Login fonctionnality coming soon')
  }

  const handleConnectWallet = () => {
    alert('Connect Wallet fonctionnality coming soon')
  }
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
          <Button
            onClick={handleLogin}
            className="px-4 py-3 font-semibold rounded-full shadow-md transition-all duration-300 bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700"
          >
            Loggin
          </Button>
          <Button
            onClick={handleConnectWallet}
            className="px-4 py-3 font-semibold rounded-full shadow-md transition-all duration-300 bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700"
          >
            Connect Wallet
          </Button>
          {/* Icônes des réseaux sociaux */}
          <a
            href="https://discord.gg/KrgVbVYM"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 text-2xl"
          >
            <FaDiscord />
          </a>
          <a
            href="https://t.me/tokenT4F"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 text-2xl"
          >
            <FaTelegram />
          </a>
          <a
            href="https://x.com/tokent4f"
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
