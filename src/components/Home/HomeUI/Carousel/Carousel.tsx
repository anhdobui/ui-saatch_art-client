import { Navigation, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import ThumbnailStory from './../Story/ThumbnailStory/ThumbnailStory'
import React, { ReactNode } from 'react'

interface CarouselInfc {
  children?: ReactNode
}
function Carousel({ children }: CarouselInfc) {
  const childComponents = React.Children.toArray(children)
  return (
    <div className=''>
      <Swiper
        autoplay={{ delay: 2000 }}
        modules={[Navigation, Autoplay]}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next'
        }}
      >
        {childComponents.map((item, index) => (
          <SwiperSlide key={index}>{item}</SwiperSlide>
        ))}
        <div className='swiper-button-prev r-0 absolute top-[calc(50%-65px)] ml-5 h-[60px] w-9 translate-y-[-50%] bg-white-60 text-[40px] font-light text-white'></div>
        <div className='swiper-button-next l-0 absolute top-[calc(50%-65px)] z-50 mr-5 h-[60px] w-9 translate-y-[-50%] bg-white-60 text-[40px] font-light  text-white'></div>
      </Swiper>
    </div>
  )
}

export default Carousel
