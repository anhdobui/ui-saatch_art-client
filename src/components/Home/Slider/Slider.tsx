/* eslint-disable import/no-unresolved */
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import banner1 from '../../../access/hp-hero-slide1-06052023-large.jpg'
import banner2 from '../../../access/hp-hero-slide1-06092023-large.jpg'
function SliderHome() {
  return (
    <div className='container'>
      <Swiper
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation]}
        className=''
        onInit={(swiper: any) => {
          swiper.params.navigation.prevEl = '.prev-button'
          swiper.params.navigation.nextEl = '.next-button'
          swiper.navigation.init()
          swiper.navigation.update()
        }}
      >
        <SwiperSlide>
          <div className='relative mb-10'>
            <img src={banner1} alt='' className='h-auto w-full' />
            <div className='absolute inset-0 bg-black bg-opacity-20'>
              <a href='/' className='absolute bottom-[90px] flex h-[102px] w-full flex-col items-center '>
                <h2 className='h-[71px] font-crimson-text text-[62px] text-white'>New This Week</h2>
                <p className='h-[31px] font-helvetica-text text-[22px] text-white'>
                  Discover New Art Our Curators Love Every Week
                </p>
              </a>
              <a href='/' className='absolute bottom-0 flex h-[60px] w-full translate-y-[50%] justify-center'>
                <div className='flex h-[60px] w-[220px] items-center justify-center bg-gray-700 text-[22px] font-bold text-white'>
                  Shop Collections
                </div>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative mb-10'>
            <img src={banner2} alt='' className='h-auto w-full' />
            <div className='absolute inset-0 bg-black bg-opacity-20'>
              <a href='/' className='absolute bottom-[90px] flex h-[102px] w-full flex-col items-center '>
                <h2 className='h-[71px] font-crimson-text text-[62px] text-white'>New This Week</h2>
                <p className='h-[31px] font-helvetica-text text-[22px] text-white'>
                  Discover New Art Our Curators Love Every Week
                </p>
              </a>
              <a href='/' className='absolute bottom-0 flex h-[60px] w-full translate-y-[50%] justify-center'>
                <div className='flex h-[60px] w-[220px] items-center justify-center bg-gray-700 text-[22px] font-bold text-white'>
                  Shop Collections
                </div>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <div className='swiper-button-prev prev-button z-50 text-white '></div>
        <div className='swiper-button-next next-button z-50 text-white'></div>
      </Swiper>
    </div>
  )
}

export default SliderHome
