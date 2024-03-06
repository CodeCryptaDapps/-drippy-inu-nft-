import About from '@/components/About';
import Hero from '@/components/Hero';
import HowToBuy from '@/components/HowToBuy';
import JoinCommunity from '@/components/Navbar/JoinCommunity';
import Nft from '@/components/Nft';
import Roadmap from '@/components/Roadmap';
import Tokenomics from '@/components/Tokenomics';
import { images } from '@/exports/images';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex flex-col justify-between overflow-hidden'>
      <Hero />
      <About />
      <Tokenomics />
      <Roadmap />
      <Nft />

      <section className='fxBg'></section>
      <HowToBuy />

      <JoinCommunity />

      <footer id='social' className='text-center py-10'>
        <h2>🔗 SOCIALS 🔗</h2>

        <figure className='flex justify-center items-center gap-3 w-full md:w-3/12 mx-auto my-10'>
          {/* <a href='' target='_blank'  ></a> */}
          <Image src={images.social1} alt='' />
          <Image src={images.social2} alt='' />
          <Image src={images.social3} alt='' />
          <Image src={images.social4} alt='' />
        </figure>

        <small>© 2024 DRIPPYPRC20. ALL RIGHTS RESERVED.</small>
      </footer>
    </main>
  );
}
