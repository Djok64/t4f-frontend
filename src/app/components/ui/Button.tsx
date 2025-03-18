// Indiquer que ce composant doit être rendu côté client
'use client'

import React from 'react'

// Déclaration des propriétés du composant, avec un enfant et un gestionnaire d'événement onClick optionnel
interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    // Le bouton qui reçoit le gestionnaire d'événement `onClick`
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
    >
      {children}
    </button>
  )
}

export default Button
