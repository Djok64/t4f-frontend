'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const slidesData = [
  { image: '/prevente2.png', alt: 'Prévente', link: '/shop' },
  { image: '/AIRDROP.png', alt: 'Airdrop', link: '/shop' },
  { image: '/conversion.jpg', alt: 'Conversion', link: '/token' },
  { image: '/prevente2.png', alt: 'Prévente', link: '/shop' },
  { image: '/AIRDROP.png', alt: 'Airdrop', link: '/shop' },
]

const Carousel = () => {
  return (
    <div className="max-w-full mx-auto mt-6 relative px-2">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10} // Réduit l’espace entre les slides
        slidesPerView={1} // 1 seul slide visible sur mobile
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 15 }, // Tablette : 2 slides
          1024: { slidesPerView: 3, spaceBetween: 20 }, // Desktop : 3 slides
          1280: { slidesPerView: 4, spaceBetween: 20 }, // Grand écran : 4 slides
        }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="rounded-lg shadow-lg"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-fit:cover rounded-lg"
            />
            <a
              href={slide.link}
              className="absolute bottom-3 left-3 text-white bg-black bg-opacity-70 px-3 py-1 rounded-lg text-xs font-semibold transition-all duration-300 hover:bg-opacity-90"
            >
              En savoir plus
            </a>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-pagination mt-4 !bottom-0" />
    </div>
  )
}

export default Carousel
