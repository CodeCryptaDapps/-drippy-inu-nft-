import { images } from '@/exports/images';
import Image from 'next/image';
import React from 'react';

const Nft = () => {
  const nftData = [
    { imageUrl: images.nftdog1},
    { imageUrl: images.nftdog2},
    { imageUrl: images.nftdog3},
    { imageUrl: images.nftdog4},
    { imageUrl: images.nftdog5},
    { imageUrl: images.nftdog6},
    { imageUrl: images.nftdog7},
    { imageUrl: images.nftdog8},
    { imageUrl: images.nftdog9},
    { imageUrl: images.nftdog10 },
    { imageUrl: images.nftdog11 },
    { imageUrl: images.nftdog12 },
  ];

  return (
    <section className='container flex flex-wrap gap-3 justify-between mb-5'>
      {nftData.map((item, idx) => (
        <figure
          data-aos='zoom-in-left'
          key={idx}
          className='w-full md:w-[32%] lg:w-[23%]'
        >
          <Image src={item?.imageUrl} alt='Drippy nfts' />
        </figure>
      ))}
    </section>
  );
};

export default Nft;
