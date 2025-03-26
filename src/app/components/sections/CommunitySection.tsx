'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function CommunitySection() {
  return (
    <section className="py-16 bg-black text-white text-center">
      {/* Animation d'apparition */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Titre de la section */}
        <h2 className="text-3xl font-bold text-yellow-500 mb-6">
          Join Community
        </h2>

        {/* Conteneur du texte avec animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="max-w-lg sm:max-w-2xl mx-auto bg-gray-900 p-6 rounded-lg shadow-md mb-6"
        >
          <p className="text-lg ">
            Community is at the heart of our platform. Our voting system allows
            players to directly choose the next games that will be integrated
            into CLOVERSGAMES. How it works:
            <br />
            <br /> ✨ Developers submit their games <br />
            <br />
            🎮 The community votes for their favorite games
            <br />
            <br />
            🎯 Games that reach the required vote threshold are integrated{' '}
            <br />
            <br />
            🌟 Participate in creating the future of gaming
          </p>
        </motion.div>

        {/* Bouton "Rejoindre" */}
        <motion.a
          href="/community"
          className="inline-block mt-6 px-6 py-3 text-black font-semibold rounded-full shadow-md transition-all duration-300 bg-gray-400 text-white hover:bg-gray-600 mb-10"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Join Us
        </motion.a>
        <Image
          src="/communityBanner.png"
          alt="Bannière de la communauté"
          width={1200} // Ajuste selon ton besoin
          height={300} // Ajuste selon ton besoin
          className="rounded-lg shadow-lg"
        />
      </motion.div>
    </section>
  )
}
