'use client';

import { images } from '@/exports/images';
import Image from 'next/image';
import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const NfsSlider = () => {
  const nftData = [
    { imageUrl: images.nft1 },
    { imageUrl: images.nft2 },
    { imageUrl: images.nft3 },
    { imageUrl: images.nft4 },
    { imageUrl: images.nft5 },
    { imageUrl: images.nft6 },
    { imageUrl: images.nft7 },
    { imageUrl: images.nft8 },
    { imageUrl: images.nft9 },
    { imageUrl: images.nft10 },
    { imageUrl: images.nft11 },
  ];
  return (
    <main className='slides relative'>
      <Swiper
        spaceBetween={30}
        // pagination={{
        //   dynamicBullets: true,
        // }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        scrollbar={{ el: '.swiper-scrollbar' }}
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          500: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 4,
          },
        }}
        modules={[Autoplay, Navigation, Pagination]}
        className='mySwiper'
      >
        <section className=''>
          {nftData.map(({ imageUrl }, idx) => (
            <SwiperSlide key={idx}>
              <figure className='mt-4'>
                <Image src={imageUrl} alt='' />
              </figure>
            </SwiperSlide>
          ))}
        </section>
      </Swiper>{' '}
    </main>
  );
};

export default NfsSlider;
