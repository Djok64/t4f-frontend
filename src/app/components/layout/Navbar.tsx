// src/app/components/layout/Navbar.tsx

'use client'

import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex justify-between items-center">
        {/* Partie gauche de la navbar (Logo + liens) */}
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-white hover:text-gray-400">
              CLOVERSGAMES
            </Link>
          </li>
          <li>
            <Link href="/Games" className="text-white hover:text-gray-400">
              Games
            </Link>
          </li>
          <li>
            <Link href="/Shop" className="text-white hover:text-gray-400">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/News" className="text-white hover:text-gray-400">
              News
            </Link>
          </li>
          <li>
            <Link href="/Community" className="text-white hover:text-gray-400">
              Community
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
