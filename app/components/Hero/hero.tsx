"use client"
import React from 'react';

import { Carousel } from 'react-responsive-carousel';

const Hero = () => {
  return (
    <div>
        <Carousel>
                <div>
                    <img src="" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
    </div>
  )
}

export default Hero