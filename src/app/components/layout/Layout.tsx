// src/app/components/layout/Layout.tsx

'use client'

import Navbar from './Navbar' // Importation de la Navbar
import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Navbar />
      <main className="p-4">
        {children} {/* Contenu dynamique qui sera injecté dans ce layout */}
      </main>
    </div>
  )
}

export default Layout
