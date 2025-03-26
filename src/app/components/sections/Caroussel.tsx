'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const images = [
  '/prevente2.png',
  '/AIRDROP.png',
  '/DALLE_2025-02-08_01.41.39_-_A_visual_representation_of_cryptocurrency_exchange_showcasing_the_conversion_process_between_two_coins__a_vibrant_golden_coin_with_a_four-leaf_clover.png',
  '/conversion.jpg',
  '/prevente2.png',
  '/AIRDROP.png',
  '/DALLE_2025-02-08_01.41.39_-_A_visual_representation_of_cryptocurrency_exchange_showcasing_the_conversion_process_between_two_coins__a_vibrant_golden_coin_with_a_four-leaf_clover.png',
]

export default function Carousel() {
  return (
    <div className="max-w-7xl mx-auto mt-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20} // Espacement entre les slides
        slidesPerView={4} // Affiche 4 cartes à la fois
        navigation // Ajoute des flèches de navigation
        pagination={{
          clickable: true,
          el: '.swiper-pagination', // Définir un élément personnalisé pour la pagination
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto-défilement
        loop={true} // Boucle infinie
        className="rounded-lg shadow-lg"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="relative">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-80 object-cover rounded-lg" // Fixe la taille de l'image à h-80 (taille uniforme)
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination */}
      <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal mt-5" />
    </div>
  )
}
