import About from '@/components/About';
import Hero from '@/components/Hero';
import HowToBuy from '@/components/HowToBuy';
import JoinCommunity from '@/components/Navbar/JoinCommunity';
import NfsSlider from '@/components/NfsSlider';
import Nft from '@/components/Nft';
import Roadmap from '@/components/Roadmap';
import Tokenomics from '@/components/Tokenomics';
import { images } from '@/exports/images';
import Image from 'next/image';
import Link from 'next/link';

const socialLinks = [
  {
    id: 16,
    icon: images.orange,
    href: '',
  },
  {
    id: 1,
    icon: images.social5,
    href: '',
  },
  {
    id: 2,
    icon: images.social1,
    href: '',
  },
  {
    id: 3,
    icon: images.social2,
    href: '',
  },
  {
    id: 4,
    icon: images.social3,
    href: 'https://twitter.com/1DrippyInu',
  },
  {
    id: 5,
    icon: images.social4,
    href: 'https://t.me/DrippyXinu',
  },
  {
    id: 6,
    icon: images.social6,
    href: 'https://t.me/DrippyXinu',
  },
];

export default function Home() {
  return (
    <main className='flex flex-col justify-between overflow-hidden'>
      <Hero />
      <About />
      <Tokenomics />
      <Roadmap />
      <Nft />
      <section className='container'>
        <NfsSlider />
      </section>

      <section className='fxBg'></section>
      <HowToBuy />

      <JoinCommunity />

      <footer id='socials' className='text-center py-10'>
        <h2>🔗 SOCIALS 🔗</h2>

        <section className='w-full flex flex-col md:flex-row items-center justify-between gap-4 md:px-14 lg:px-24'>
          <Image
            src={images.thd}
            alt=''
            className='w-[100px] h-[auto] mt-5 md:mt-0'
          />
          <div>
            <div className='mb-5 text-start text-[10px]'>
              <h3>Drippy Inu: WAIT</h3>
              <h3>WDRIP: 0xf30224eb7104aca47235beb3362e331ece70616a</h3>
            </div>
            <div className='w-full main-btn !px-[9px]'>
              <Link className='  font-bold text-[12px]' href='/'>
                Pulsechain & Binance Smartchain
              </Link>
            </div>
          </div>

          <figure className='flex justify-center items-center gap-3 my-10'>
            {socialLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                target='_blank'
                rel='noopener noreferrer'
                className='group'
              >
                <Image
                  src={link.icon}
                  alt=''
                  className='w-12 h-12 object-contain group-last:w-[189px]'
                />
              </Link>
            ))}
          </figure>
          <Link
            className='main-btn rounded-sm font-bold text-[12px]'
            href='https://t.me/DrippyXinu'
            target='_blank'
            rel='noopener noreferrer'
          >
            Join Telegram For 24/7 Live Voice Chat (VC)
          </Link>
        </section>

        <small>© 2024 DRIPPYINU. ALL RIGHTS RESERVED.</small>
      </footer>
    </main>
  );
}
