import { images } from '@/exports/images';
import Image from 'next/image';
import React from 'react';

const JoinCommunity = () => {
  return (
    <section className=' join  '>
      <article className='  container flex flex-col md:flex-row justify-between py-[150px]'>
        <div className='w-full md:w-3/12 '>
          <p>
            Join the Drip.Community LIVE as we navigate the crypto wilderness,
            embracing the storms of change, and turning every droplet into a
            downpour of prosperity. 🚀💦 #DripCoinChronicles #CryptoSaga&quot;
          </p>

          <p className='mt-10 flex gap-2'>
            - Drip Community{' '}
            <Image
              src={images.drippyIcon}
              alt=''
              className='w-[24px] h-[24px] '
            />{' '}
          </p>
        </div>

        <div className='w-full md:w-4/12 text-center md:text-end'>
          <a
            href='https://www.youtube.com/@coinboutique/streams'
            target='_blank'
            rel='noreferrer '
          >
            CLICK TO WATCH LIVE STREAM
          </a>
        </div>
      </article>
    </section>
  );
};

export default JoinCommunity;
