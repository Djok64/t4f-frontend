'use client' // Permet l'interactivité côté client

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
]

export default function Carousel() {
  return (
    <div className="max-w-7xl mx-auto my-10">
      {' '}
      {/* Centering horizontally and adding margin */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50} // Espacement entre les slides
        slidesPerView={1} // Nombre d'images visibles
        navigation // Flèches de navigation
        pagination={{ clickable: true }} // Ajout de la pagination
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto-défilement
        loop={true} // Boucle infinie
        className="rounded-lg shadow-lg"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-[500px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-lg" // Ajuste la hauteur en fonction des tailles d'écran
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
