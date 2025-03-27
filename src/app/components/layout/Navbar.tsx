'use client'
import { useState } from 'react'
import { ROUTES } from '../../../constants/routes'
import Button from '../ui/Button'
import Link from 'next/link'
import { FaDiscord, FaTelegram } from 'react-icons/fa'
import { HiMenu, HiX } from 'react-icons/hi' // Import des icônes pour le menu burger

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleLogin = () => {
    alert('Login fonctionnality coming soon')
  }

  const handleConnectWallet = () => {
    alert('Connect Wallet fonctionnality coming soon')
  }

  return (
    <nav className="bg-black-800 p-2 border-b border-gray-300 relative">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4">
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

        {/* Menu principal */}
        <div className="hidden md:flex space-x-6">
          <Link
            href="/"
            className="text-white text-sm md:text-base hover:text-gray-400"
          >
            Home
          </Link>
          <Link
            href={ROUTES.GAMES}
            className="text-white text-sm md:text-base hover:text-gray-400"
          >
            Games
          </Link>
          <Link
            href={ROUTES.SHOP}
            className="text-white text-sm md:text-base hover:text-gray-400"
          >
            Shop
          </Link>
          <Link
            href={ROUTES.NEWS}
            className="text-white text-sm md:text-base hover:text-gray-400"
          >
            News
          </Link>
          <Link
            href={ROUTES.TOKEN}
            className="text-white text-sm md:text-base hover:text-gray-400"
          >
            Token
          </Link>
          <Link
            href={ROUTES.COMMUNITY}
            className="text-white text-sm md:text-base hover:text-gray-400"
          >
            Community
          </Link>
        </div>

        {/* Boutons et réseaux sociaux */}
        <div className="hidden md:flex items-center space-x-4 md:space-x-2">
          <Button
            onClick={handleLogin}
            className="px-4 py-3 md:px-3 md:py-2 text-sm font-semibold rounded-full shadow-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700"
          >
            Loggin
          </Button>
          <Button
            onClick={handleConnectWallet}
            className="px-4 py-3 md:px-3 md:py-2 text-sm font-semibold rounded-full shadow-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700"
          >
            Connect Wallet
          </Button>
          {/* Icônes réseaux sociaux cachées en mode tablette */}
          <a
            href="https://discord.gg/KrgVbVYM"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 text-2xl hidden lg:inline"
          >
            <FaDiscord />
          </a>
          <a
            href="https://t.me/tokenT4F"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 text-2xl hidden lg:inline"
          >
            <FaTelegram />
          </a>
        </div>

        {/* Menu burger */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white text-3xl focus:outline-none relative z-20"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Menu mobile */}
      <div
        className={`absolute top-0 left-0 pt-6 w-full bg-black bg-opacity-90 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden flex flex-col items-center justify-center space-y-6 text-white text-lg z-10`}
        style={{ display: isOpen ? 'flex' : 'none' }}
      >
        <Link href="/" className="hover:text-gray-400" onClick={toggleMenu}>
          Home
        </Link>
        <Link
          href={ROUTES.GAMES}
          className="hover:text-gray-400"
          onClick={toggleMenu}
        >
          Games
        </Link>
        <Link
          href={ROUTES.SHOP}
          className="hover:text-gray-400"
          onClick={toggleMenu}
        >
          Shop
        </Link>
        <Link
          href={ROUTES.NEWS}
          className="hover:text-gray-400"
          onClick={toggleMenu}
        >
          News
        </Link>
        <Link
          href={ROUTES.TOKEN}
          className="hover:text-gray-400"
          onClick={toggleMenu}
        >
          Token
        </Link>
        <Link
          href={ROUTES.COMMUNITY}
          className="hover:text-gray-400"
          onClick={toggleMenu}
        >
          Community
        </Link>
        <Button
          onClick={handleLogin}
          className="px-6 py-3 font-semibold rounded-full shadow-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700"
        >
          Loggin
        </Button>
        <Button
          onClick={handleConnectWallet}
          className="px-6 py-3 font-semibold rounded-full shadow-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700"
        >
          Connect Wallet
        </Button>
      </div>
    </nav>
  )
}

export default Navbar
