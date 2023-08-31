'use client'
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

const Hero = () => {
  return (
    <div>
      <Carousel>
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
    </div>
  );
};

export default Hero;
