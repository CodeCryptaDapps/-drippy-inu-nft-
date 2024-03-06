import { images } from '@/exports/images';
import Image from 'next/image';
import React from 'react';

const Nft = () => {
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
    { imageUrl: images.nft11 },
    { imageUrl: images.nft10 },
    { imageUrl: images.nft11 },
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
