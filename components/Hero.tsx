'use client';

import { images } from '@/exports/images';
import Image from 'next/image';
import { Link as ScrollLink } from 'react-scroll';
import React from 'react';

const Hero = () => {
  return (
    <section className='flex flex-col   '>
      <figure
        data-aos='zoom-in-left'
        data-aos-duration='1500'
        className='h-[50vh] md:h-[100%] relative'
      >
        <Image
          src={images.heroImage}
          alt=''
          className='object-cover object-top h-[100%] md:h-[auto] '
        />
        <div
          data-aos='zoom-in-left'
          // data-aos-delay='300'
          className='text-center absolute bottom-10 left-0 right-0 cursor-pointer'
        >
          <ScrollLink
            className='main-btn'
            to='howtobuy'
            spy={true}
            smooth={true}
          >
            HOW TO MINT
          </ScrollLink>
        </div>
      </figure>
    </section>
  );
};

export default Hero;
