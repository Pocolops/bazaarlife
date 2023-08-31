'use client'
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import SliderImg_1 from '../../../public/assets/slider/sliderImg_1.jpg';
import SliderImg_2 from '../../../public/assets/slider/sliderImg_2.jpg'
import SliderImg_3 from '../../../public/assets/slider/sliderImg_3.jpg';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='relative'>
      <Carousel autoPlay infiniteLoop showStatus={false} showIndicators={false} showThumbs={false} interval={3000}>
        <div>
          <Image 
          src='/assets/slider/SliderImg_1.jpg'
          alt="Slider 1" 
          />
        </div>
        <div>
          <Image 
          src='/assets/slider/SliderImg_2.jpg' 
          alt="Slider 2" 
          />
         
        </div>
        <div>
          <Image 
          src='/assets/slider/SliderImg_3.jpg'
          alt="Slider 3" 
          />
          
        </div>
      </Carousel>
      <div className='w-full h-40 bg-gradient-to-t from gra-100 to-transparent absolute bottom-0 z-20'></div>
    </div>
  );
};

export default Hero;

