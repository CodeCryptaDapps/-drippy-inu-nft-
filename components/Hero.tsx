import { images } from '@/exports/images';
import Image from 'next/image';
import Link from 'next/link';
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
          className='text-center absolute bottom-10 left-0 right-0'
        >
          <Link className='main-btn' href='#howtobuy'>
            HOW TO BUY
          </Link>
        </div>
      </figure>
    </section>
  );
};

export default Hero;
