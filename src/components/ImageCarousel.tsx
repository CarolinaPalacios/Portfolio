import { useState, type MouseEventHandler } from 'react';
import Slider from 'react-slick';
import { SlArrowRight, SlArrowLeft } from 'react-icons/sl';

import type { Image } from '../utils/utils';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Props {
  images: Image;
  title: string;
  video?: string;
}

const ImageCarousel = ({ images, video, title }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const NextArrow = ({ onClick }: { onClick: MouseEventHandler }) => {
    return (
      <div
        className='text-3xl text-redbook absolute z-10 cursor-pointer right-0 top-[50%]'
        onClick={onClick}
      >
        <SlArrowRight />
      </div>
    );
  };
  const PrevArrow = ({ onClick }: { onClick: MouseEventHandler }) => {
    return (
      <div
        className='text-3xl text-redbook absolute z-10 cursor-pointer -left-5 top-[50%]'
        onClick={onClick}
      >
        <SlArrowLeft />
      </div>
    );
  };
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: '0',
    nextArrow: <NextArrow onClick={() => setCurrentIndex(currentIndex + 1)} />,
    prevArrow: <PrevArrow onClick={() => setCurrentIndex(currentIndex - 1)} />,
    beforeChange: (current: number, next: number) => setCurrentIndex(next),
  };
  return (
    <div>
      <Slider {...settings}>
        <div className='relative left-10'>
          <img
            src={images.cover || '../../../assets/default.svg'}
            alt={title}
            className='h-[500px] w-[600px]'
          />
        </div>
        {images.secondImage && (
          <div>
            <img
              src={images.secondImage}
              alt={title}
              className='aspect-auto transition-transform duration-300 hover:scale-105 w-96 max-h-[285px] cursor-pointer'
            />
          </div>
        )}
        {images.thirdImage && (
          <div>
            <img
              src={images.thirdImage}
              alt={title}
              className='aspect-auto transition-transform duration-300 hover:scale-105 w-96 max-h-[285px] cursor-pointer'
            />
          </div>
        )}
        {video && (
          <div className='relative left-10'>
            <iframe
              width='600'
              height='500'
              src={video}
              title={title}
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            ></iframe>
          </div>
        )}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
