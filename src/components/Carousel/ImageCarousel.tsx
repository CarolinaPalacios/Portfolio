import { useState, type MouseEventHandler } from 'react'
import Slider from 'react-slick'

import type { Image } from '../../utils/utils'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

interface Props {
  images: Image
  title: string
  video?: string
}

const ImageCarousel = ({ images, video, title }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const NextArrow = ({ onClick }: { onClick: MouseEventHandler }) => {
    return (
      <div
        className='text-3xl absolute z-10 cursor-pointer -right-10 top-[50%] mobile-xs:-right-6 mobile-md:-right-2 mobile-sm:-right-6 tablet-md:-right-5'
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
        className='text-3xl absolute z-10 cursor-pointer -left-5 top-[50%] mobile-xs:-left-6 mobile-sm:-left-6
        tablet-md:left-5 mobile-md:-left-2.5'
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
    adaptiveHeight: true,
    centerPadding: '0',
    nextArrow: <NextArrow onClick={() => setCurrentIndex(currentIndex + 1)} />,
    prevArrow: <PrevArrow onClick={() => setCurrentIndex(currentIndex - 1)} />,
    beforeChange: (current: number, next: number) => setCurrentIndex(next),
  }
  return (
    <div className='desktop-xl:mr-20 mr-20 mobile-sm:mr-0 mobile-md:mr-0 desktop-lg:mr-10 desktop-lg:mt-10 mobile-md:mt-5 tablet-md:mt-10 tablet-md:mr-10'>
      <Slider {...settings}>
        <div className='relative desktop-lg:left-5 mobile-md:left-4 mobile-sm:top-2 mobile-md:top-2 tablet-md:left-20'>
          <img
            src={
              images.cover ||
              'https://res.cloudinary.com/dr4c4eqnr/image/upload/v1697684509/etrttzuquplxxgy8ncnv.svg'
            }
            alt={title}
            className='desktop-xl:h-[550px] desktop-xl:w-[850px] desktop-lg:w-[665px] desktop-lg:h-[450px] mobile-xs:w-[200px] mobile-xs:h-[200px] mobile-sm:w-[280px] mobile-sm:h-[240px] mobile-md:w-[550px] tablet-md:h-[500px] tablet-md:w-[640px]'
          />
        </div>
        {images.secondImage && (
          <div className='relative desktop-lg:left-5 mobile-md:left-4 mobile-sm:top-2 mobile-md:top-2 tablet-md:left-20'>
            <img
              src={images.secondImage}
              alt={title}
              className='desktop-xl:h-[550px] desktop-lg:h-[450px] desktop-lg:w-[665px] desktop-xl:w-[850px] mobile-xs:w-[200px] mobile-xs:h-[200px] mobile-sm:w-[280px] mobile-sm:h-[240px] mobile-md:w-[550px] tablet-md:h-[500px] tablet-md:w-[640px]'
            />
          </div>
        )}
        {images.thirdImage && (
          <div className='relative desktop-lg:left-5 mobile-md:left-4 mobile-sm:top-2 mobile-md:top-2 tablet-md:left-20'>
            <img
              src={images.thirdImage}
              alt={title}
              className='desktop-xl:h-[550px] desktop-lg:h-[450px] desktop-lg:w-[665px] desktop-xl:w-[850px] mobile-xs:w-[200px] mobile-xs:h-[200px] mobile-sm:w-[280px] mobile-sm:h-[240px] mobile-md:w-[550px] tablet-md:h-[500px] tablet-md:w-[640px]'
            />
          </div>
        )}
        {images.fourthImage && (
          <div className='relative desktop-lg:left-5 mobile-md:left-4 mobile-sm:top-2 mobile-md:top-2 tablet-md:left-20'>
            <img
              src={images.fourthImage}
              alt={title}
              className='desktop-xl:h-[550px] desktop-lg:h-[450px] desktop-lg:w-[665px] desktop-xl:w-[850px] mobile-xs:w-[200px] mobile-xs:h-[200px] mobile-sm:w-[280px] mobile-sm:h-[240px] mobile-md:w-[550px] tablet-md:h-[500px] tablet-md:w-[640px]'
            />
          </div>
        )}
        {images.fifthImage && (
          <div className='relative desktop-lg:left-5 mobile-md:left-4 mobile-sm:top-2 mobile-md:top-2 tablet-md:left-20'>
            <img
              src={images.fifthImage}
              alt={title}
              className='desktop-xl:h-[550px] desktop-lg:h-[450px] desktop-lg:w-[665px] desktop-xl:w-[850px] mobile-xs:w-[200px] mobile-xs:h-[200px] mobile-sm:w-[280px] mobile-sm:h-[240px] mobile-md:w-[550px] tablet-md:h-[500px] tablet-md:w-[640px]'
            />
          </div>
        )}
        {images.sixthImage && (
          <div className='relative desktop-lg:left-5 mobile-md:left-4 mobile-sm:top-2 mobile-md:top-2 tablet-md:left-20'>
            <img
              src={images.sixthImage}
              alt={title}
              className='desktop-xl:h-[550px] desktop-lg:h-[450px] desktop-lg:w-[665px] desktop-xl:w-[850px] mobile-xs:w-[200px] mobile-xs:h-[200px] mobile-sm:w-[280px] mobile-sm:h-[240px] mobile-md:w-[550px] tablet-md:h-[500px] tablet-md:w-[640px]'
            />
          </div>
        )}
        {video && (
          <div className='relative desktop-lg:left-5 mobile-md:left-4 mobile-sm:top-2 mobile-md:top-2 tablet-md:left-20'>
            <iframe
              className='desktop-lg:h-[450px] desktop-xl:h-[550px] desktop-lg:w-[95%] desktop-xl:w-[100%] mobile-md:w-[550px] mobile-md:h-[420px] mobile-sm:w-full mobile-sm:h-[240px] tablet-md:h-[500px] tablet-md:w-[640px]'
              src={video}
              title={title}
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            ></iframe>
          </div>
        )}
      </Slider>
    </div>
  )
}

export default ImageCarousel
