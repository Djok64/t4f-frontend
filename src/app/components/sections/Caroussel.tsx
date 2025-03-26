'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const slidesData = [
  {
    image: '/prevente2.png',
    alt: 'Prévente',
    link: '/shop',
  },
  {
    image: '/AIRDROP.png',
    alt: 'Airdrop',
    link: '/shop',
  },
  {
    image:
      '/DALLE_2025-02-08_01.41.39_-_A_visual_representation_of_cryptocurrency_exchange_showcasing_the_conversion_process_between_two_coins__a_vibrant_golden_coin_with_a_four-leaf_clover.png',
    alt: 'Cryptocurrency Exchange',
    link: 'token',
  },
  {
    image: '/conversion.jpg',
    alt: 'Conversion',
    link: '/token',
  },
  {
    image: '/prevente2.png',
    alt: 'Prévente',
    link: '/shop',
  },
  {
    image: '/AIRDROP.png',
    alt: 'Airdrop',
    link: '/shop',
  },
]

export default function Carousel() {
  return (
    <div className="max-w-7xl mx-auto mt-10 relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20} // Espacement entre les slides
        slidesPerView={4} // Affiche 4 cartes à la fois
        navigation // Ajoute des flèches de navigation
        pagination={{ clickable: true }} // Active la pagination cliquable
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto-défilement
        loop={true} // Boucle infinie
        className="rounded-lg shadow-lg"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index} className="relative group">
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-80 object-cover rounded-lg transition-transform duration-300 transform group-hover:scale-105 group-hover:shadow-xl"
            />
            {/* Bouton "En savoir plus" lié à l'image */}
            <a
              href={slide.link}
              className="absolute bottom-4 left-4 text-white bg-black bg-opacity-70 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-opacity-90"
            >
              En savoir plus
            </a>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination bien placée sous le carrousel */}
      <div className="swiper-pagination mt-5 !bottom-0" />
    </div>
  )
}
