'use client'

import Layout from './components/layout/Layout' // Importation du Layout
import Image from 'next/image'
import Button from './components/ui/Button'

export default function Home() {
  const handleClick = () => {
    alert('Le bouton a été cliqué!')
  }

  return (
    <Layout>
      <h1>Bienvenue sur ma page d accueil</h1>

      {/* Affichage de l'image */}
      <Image
        src="/next.svg"
        alt="Logo Next"
        width={500}
        height={300}
        className="bg-gray-200"
      />

      {/* Utilisation du bouton */}
      <Button onClick={handleClick}>Cliquez-moi</Button>
    </Layout>
  )
}
