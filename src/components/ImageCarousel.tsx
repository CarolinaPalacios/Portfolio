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
        className='text-3xl text-redbook absolute z-10 cursor-pointer -right-10 top-[50%]'
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
    <div className='mr-16'>
      <Slider {...settings}>
        <div className='relative left-5'>
          <img
            src={images.cover || '../../../assets/default.svg'}
            alt={title}
            className='h-[500px] w-[650px]'
          />
        </div>
        {images.secondImage && (
          <div className='relative left-5'>
            <img
              src={images.secondImage}
              alt={title}
              className='h-[500px] w-[650px]'
            />
          </div>
        )}
        {images.thirdImage && (
          <div className='relative left-5'>
            <img
              src={images.thirdImage}
              alt={title}
              className='h-[500px] w-[650px]'
            />
          </div>
        )}
        {images.fourthImage && (
          <div className='relative left-5'>
            <img
              src={images.fourthImage}
              alt={title}
              className='h-[500px] w-[650px]'
            />
          </div>
        )}
        {images.fifthImage && (
          <div className='relative left-5'>
            <img
              src={images.fifthImage}
              alt={title}
              className='h-[500px] w-[650px]'
            />
          </div>
        )}
        {images.sixthImage && (
          <div className='relative left-5'>
            <img
              src={images.sixthImage}
              alt={title}
              className='h-[500px] w-[650px]'
            />
          </div>
        )}
        {video && (
          <div className='relative left-5'>
            <iframe
              width='650'
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
