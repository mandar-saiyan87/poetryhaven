import React from 'react'
import PoemCard from './shared/PoemCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

function FeaturedSlider({ featuredpoems }) {



  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={23}
        freeMode
        modules={[FreeMode]}
        className='swiper_main'
        breakpoints={{
          1200: {
            slidesPerView: 4.5,
            spaceBetween: 15
          },

          1024: {
            slidesPerView: 3.5,
            spaceBetween: 15
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15
          },
          575: {
            slidesPerView: 2.5,
            spaceBetween: 15
          },
          320: {
            slidesPerView: 1.5,
            spaceBetween: 15
          }
        }}
      >
        {featuredpoems.map((poem) => (
          <SwiperSlide key={poem.id} style={{ maxWidth: '450px' }}>
            <PoemCard poem={poem} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <Slider {...settings} className='my-3'>
        {featuredpoems.map((poem) => (
          <PoemCard key={poem.id} poem={poem} />
        ))}
      </Slider> */}
    </>
  )
}

export default FeaturedSlider