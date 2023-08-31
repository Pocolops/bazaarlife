'use client'
import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import SliderImg_1 from '../../../public/images/slider/sliderImg_1.jpg';
import SliderImg_2 from '../../../public/images/slider/sliderImg_2.jpg'
import SliderImg_3 from '../../../public/images/slider/sliderImg_3.jpg';
import Image from 'next/image';

const Hero = () => {
  return (
    <div>
      <Carousel autoPlay infiniteLoop showStatus={false} showIndicators={false} showThumbs={false} interval={3000}>
        <div>
          <Image src={SliderImg_1} alt="Slider 1" />
          
        </div>
        <div>
          <Image src={SliderImg_2} alt="Slider 2" />
         
        </div>
        <div>
          <Image src={SliderImg_3} alt="Slider 3" />
          
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
