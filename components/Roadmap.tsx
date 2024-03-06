import React from 'react';

const Roadmap = () => {
  return (
    <section id='roadmap' className='roadmap container py-[50px]'>
      <h2 data-aos='zoom-in' className='text-center mb-5'>
        DRIPPY MAP 🗺
      </h2>

      <article className='flex flex-wrap gap-5 justify-between'>
        <ul
          data-aos='fade-left'
          className='w-full md:w-[32%] lg:w-[23%] flex flex-col items-center md:items-start'
        >
          <h4>PHASE 01</h4>
          <li>✅ DRIPPY INU NFTS</li>
          <li>✅ DRIPPY INU TOKEN</li>
          <li>✅ DRIPPY INU AIRDROP</li>
          <li>✅ REHYPOTHECATION</li>
        </ul>
        <ul
          data-aos='fade-left'
          className='w-full md:w-[32%] lg:w-[23%] flex flex-col items-center md:items-start'
        >
          <h4>PHASE 02</h4>
          <li>✅ DRIPX 3500 STAKING</li>
          <li>✅ INC & BNB REWARDS</li>
          <li>✅ PLS FARM REWARDS</li>
          <li>✅ WDRIP/DRIP INU</li>
        </ul>
        <ul
          data-aos='fade-left'
          className='w-full md:w-[32%] lg:w-[23%] flex flex-col items-center md:items-start'
        >
          <h4>PHASE 03</h4>
          <li>⏰ 1 MILLION MC</li>
          <li>⏰ 10 MILLION MC</li>
          <li>⏰ 25 MILLION MC</li>
        </ul>
        <ul
          data-aos='fade-left'
          className='w-full md:w-[32%] lg:w-[23%] flex flex-col items-center md:items-start'
        >
          <h4>PHASE 04</h4>
          <li>⏰ 1 BILLION MC</li>
          <li>⏰ 10 BILLION MC</li>
          <li>⏰ 100 BILLION MC</li>
        </ul>
      </article>
    </section>
  );
};

export default Roadmap;
