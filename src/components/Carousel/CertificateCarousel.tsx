import { useState, type MouseEventHandler } from 'react'
import Slider from 'react-slick'

import type { Image } from '../../utils/utils'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

interface Props {
  images: Image
  title: string
}

const CertificateCarousel = ({ images, title }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const NextArrow = ({ onClick }: { onClick: MouseEventHandler }) => {
    return (
      <div
        className='text-3xl absolute z-10 cursor-pointer right-2 top-[50%] mobile-xs:-right-6 mobile-md:-right-3.5 mobile-sm:-right-5 tablet-md:right-6
        desktop-xl:-right-2'
        onClick={onClick}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='icon icon-tabler icon-tabler-arrow-right'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          stroke-width='1.75'
          stroke='currentColor'
          fill='none'
          stroke-linecap='round'
          stroke-linejoin='round'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M5 12l14 0'></path>
          <path d='M13 18l6 -6'></path>
          <path d='M13 6l6 6'></path>
        </svg>
      </div>
    )
  }
  const PrevArrow = ({ onClick }: { onClick: MouseEventHandler }) => {
    return (
      <div
        className='text-3xl absolute z-10 cursor-pointer -left-6 top-[50%] mobile-xs:-left-6 mobile-sm:-left-6 mobile-md:left-0
        tablet-md:left-5
        desktop-xl:-left-3'
        onClick={onClick}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='icon icon-tabler icon-tabler-arrow-left'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          stroke-width='1.75'
          stroke='currentColor'
          fill='none'
          stroke-linecap='round'
          stroke-linejoin='round'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M5 12l14 0'></path>
          <path d='M5 12l6 6'></path>
          <path d='M5 12l6 -6'></path>
        </svg>
      </div>
    )
  }

  const isMobileXS = window.innerWidth >= 0 && window.innerWidth <= 359

  const settings = {
    dots: !isMobileXS ? true : false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: '0',
    adaptiveHeight: true,
    nextArrow: <NextArrow onClick={() => setCurrentIndex(currentIndex + 1)} />,
    prevArrow: <PrevArrow onClick={() => setCurrentIndex(currentIndex - 1)} />,
    beforeChange: (current: number, next: number) => setCurrentIndex(next),
  }
  return (
    <div className='desktop-lg:mt-5 mobile-sm:mr-0 mobile-md:mr-0 mobile-md:mt-6 desktop-xl:mr-12 tablet-md:mt-10'>
      <Slider {...settings}>
        <div
          className='relative 
        desktop-lg:left-6 mobile-md:left-6 mobile-sm:top-2 mobile-md:top-2 tablet-md:left-24'
        >
          <img
            src={
              images.cover ||
              'https://res.cloudinary.com/dr4c4eqnr/image/upload/v1697684509/etrttzuquplxxgy8ncnv.svg'
            }
            alt={title}
            className='desktop-xl:h-[400px] desktop-xl:w-[500px] desktop-lg:w-[450px] desktop-lg:h-[350px] mobile-xs:w-[200px] mobile-xs:h-[200px] mobile-sm:w-[280px] mobile-sm:h-[240px] mobile-md:w-[550px] tablet-md:h-[450px] tablet-md:w-[600px]'
          />
        </div>
        {images.secondImage && (
          <div
            className='relative 
        desktop-lg:left-6 mobile-md:left-6 mobile-sm:top-2 mobile-md:top-2 tablet-md:left-24'
          >
            <img
              src={images.secondImage}
              alt={title}
              className='desktop-xl:h-[400px] desktop-xl:w-[500px] desktop-lg:w-[450px] desktop-lg:h-[350px] mobile-xs:w-[200px] mobile-xs:h-[200px] mobile-sm:w-[280px] mobile-sm:h-[240px] mobile-md:w-[550px] tablet-md:h-[450px] tablet-md:w-[600px]'
            />
          </div>
        )}
        {images.thirdImage && (
          <div
            className='relative 
        desktop-lg:left-6 mobile-md:left-6 mobile-sm:top-2 mobile-md:top-2 tablet-md:left-24'
          >
            <img
              src={images.thirdImage}
              alt={title}
              className='desktop-xl:h-[400px] desktop-xl:w-[500px] desktop-lg:w-[450px] desktop-lg:h-[350px] mobile-xs:w-[200px] mobile-xs:h-[200px] mobile-sm:w-[280px] mobile-sm:h-[240px] mobile-md:w-[550px] tablet-md:h-[450px] tablet-md:w-[600px]'
            />
          </div>
        )}
        {images.fourthImage && (
          <div
            className='relative 
        desktop-lg:left-6 mobile-md:left-6 mobile-sm:top-2 mobile-md:top-2 tablet-md:left-24'
          >
            <img
              src={images.fourthImage}
              alt={title}
              className='desktop-xl:h-[400px] desktop-xl:w-[500px] desktop-lg:w-[450px] desktop-lg:h-[350px] mobile-xs:w-[200px] mobile-xs:h-[200px] mobile-sm:w-[280px] mobile-sm:h-[240px] mobile-md:w-[550px] tablet-md:h-[450px] tablet-md:w-[600px]'
            />
          </div>
        )}
        {images.fifthImage && (
          <div
            className='relative 
        desktop-lg:left-6 mobile-md:left-6 mobile-sm:top-2 mobile-md:top-2 tablet-md:left-24'
          >
            <img
              src={images.fifthImage}
              alt={title}
              className='desktop-xl:h-[400px] desktop-xl:w-[500px] desktop-lg:w-[450px] desktop-lg:h-[350px] mobile-xs:w-[200px] mobile-xs:h-[200px] mobile-sm:w-[280px] mobile-sm:h-[240px] mobile-md:w-[550px] tablet-md:h-[450px] tablet-md:w-[600px]'
            />
          </div>
        )}
        {images.sixthImage && (
          <div
            className='relative 
        desktop-lg:left-6 mobile-md:left-6 mobile-sm:top-2 mobile-md:top-2 tablet-md:left-24'
          >
            <img
              src={images.sixthImage}
              alt={title}
              className='desktop-xl:h-[400px] desktop-xl:w-[500px] desktop-lg:w-[450px] desktop-lg:h-[350px] mobile-xs:w-[200px] mobile-xs:h-[200px] mobile-sm:w-[280px] mobile-sm:h-[240px] mobile-md:w-[550px] tablet-md:h-[450px] tablet-md:w-[600px]'
            />
          </div>
        )}
      </Slider>
    </div>
  )
}

export default CertificateCarousel
