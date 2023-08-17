import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import { SlidersContent as images } from '../constant'
import styles from '../style'

const Sliders = () => {
  return (
    <div className={`${styles.paddingY} p-10 m-10 overflow-x-scroll whitespace-nowrap`}>
      <Swiper
        spaceBetween={5}
        slidesPerView={3}
        loop={true}
      >
        { images.map((img, index) => (
          <SwiperSlide>
            <img src={img.image} alt={img.alt + index} 
              className='w-64 m-2 shadow-lg transform rounded 
              hover:scale-105 transition-transform duration-200 md:w-80'/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Sliders
