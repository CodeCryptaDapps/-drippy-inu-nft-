import About from '@/components/About';
import Hero from '@/components/Hero';
import Nft from '@/components/Nft';
import Roadmap from '@/components/Roadmap';
import Tokenomics from '@/components/Tokenomics';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex flex-col justify-between '>
      <Hero />
      <About />
      <Tokenomics />
      <Roadmap />
      <Nft />

      <section className='fxBg'></section>
    </main>
  );
}
