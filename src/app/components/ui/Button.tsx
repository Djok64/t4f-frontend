import React from 'react'

interface ButtonProps {
  onClick: () => void // Fonction exécutée au clic
  children: React.ReactNode // Texte du bouton
  className?: string // Permet de passer un style personnalisé avec tailwind
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className }) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  )
}
export default Button
