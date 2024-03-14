import { images } from '@/exports/images';
import Image from 'next/image';
import React from 'react';

const HowToBuy = () => {
  return (
    <section id='howtobuy' className='container my-[100px]'>
      <hgroup data-aos='fade-up' className='text-center'>
        <h2 className='flex items-center gap-2 justify-center'>
          {' '}
          <Image
            src={images.drippyIcon}
            alt=''
            className='w-[24px] h-[24px] '
          />{' '}
          HOW TO BUY{' '}
          <Image
            src={images.drippyIcon}
            alt=''
            className='w-[24px] h-[24px] '
          />{' '}
        </h2>
        <h4>Drippy Inu NFT</h4>
      </hgroup>

      <section className='flex flex-col md:flex-row justify-between gap-3'>
        <article data-aos='fade-left' className='w-full md:w-6/12'>
          <div className='my-7 w-full md:w-11/12 mx-auto flex items-center justify-between'>
            <a
              href='https://mint.launchifi.xyz/collections/0xcC827795BF764895533a1076cD74bcFe0BFdB240?chain=369#top'
              target='_blank'
              rel='noreferrer'
              className='main-btn'
            >
              MINT ON PULSECHAIN
            </a>

            <a
              href='https://mint.launchifi.xyz/collections/0xF9a9aC457354b4868dACE87dE1D36A221BE7244e?chain=56#top'
              target='_blank'
              rel='noreferrer'
              className='main-btn'
            >
              MINT ON BSC
            </a>
          </div>
          <ul>
            <li className='my-3'>
              <h4>
                <strong>STEP 1:</strong> SET UP A CRYPTO WALLET
              </h4>
              Before you can buy Drippy Inu NFTs, you need a wallet that
              supports the Binance SmartChain network (BSC). One popular option
              is MetaMask. You can find this plug-in via the Google App Store.
            </li>
            <li className='my-3'>
              <h4>
                <strong>STEP 2:</strong>BUY BNB ON AN EXCHANGE
              </h4>
              Buy the desired amount of BNB on the exchange of your preference.
              (Binance, Coinbase, Gemini, etc.)
            </li>
            <li className='my-3'>
              <h4>
                <strong>STEP 3:</strong> SEND BNB TO YOUR METAMASK WALLET
              </h4>
              Make sure you are pasting your wallet address. Double check.
            </li>
            <li className='my-3'>
              <h4 className='mb-3'>
                <strong>STEP 4:</strong> Connect MetaMask to Drippy Inu NFT
                Marketplace
              </h4>
              <span className='underline'>
                1. Visit Drippy Inu NFT Buy button on this website:
              </span>
              <ul className='list-disc pl-10'>
                <li className='underline'> Connect MetaMask:</li>
                <li className='underline'>
                  {' '}
                  Click on &quot;Connect Wallet&quot;.
                </li>
                <li className='underline'>
                  {' '}
                  Choose MetaMask and authorize the connection.
                </li>
              </ul>
            </li>

            <li className='my-3'>
              <h4 className='mb-3'>
                <strong>STEP 5:</strong> Buy Drippy Inu NFT
              </h4>
              1. Visit Drippy Inu NFT Buy button on this website:
              <ul className='list-disc pl-10 mb-5'>
                <li> Drippy Inu NFTs. </li>
                <li> Select and Purchase: </li>
                <li> Click on the purchase option. </li>
                <li> Confirm the transaction in MetaMask.</li>
                <li> Wait for Confirmation: </li>
                <li>
                  {' '}
                  Wait for the transaction to be confirmed on the blockchain.{' '}
                </li>
                <li> View NFT in MetaMask: </li>
                <li>
                  Once confirmed, you&apos;ll see the Drippy Inu NFT in your
                  MetaMask wallet.{' '}
                </li>
              </ul>
              Congratulations! You&apos;ve successfully set up MetaMask,
              purchased BNB on Binance Smart Chain, and acquired a Drippy Inu
              NFT. Ensure that you follow security best practices and only
              interact with reputable platforms.
            </li>

            <li className='my-3'>
              <h4 className='mb-3'>
                <strong>STEP 6:</strong> MAKE MEMES AND SHARE THEM WITH THE
                COMMUNITY
              </h4>
              Use{' '}
              <span className='underline'>
                #DRIPPYINU $DRIPPY #DRIPX $PLS #BNB
              </span>{' '}
              & tag the official Twitter account{' '}
              <span className='underline'>@DRIPPYINU</span>
            </li>
          </ul>
        </article>
        <aside
          data-aos='fade-right'
          className='w-full md:w-4/12 flex flex-col justify-between'
        >
          <div>
            <h2 className='mb-3'>Whats inside?</h2>
            1. Visit Drippy Inu NFT Buy button on this website:
            <ul className='list-disc pl-10 mb-5'>
              <br />
              <li> Drippy Inu NFTs. </li>
              <li> Tenshi V3 Single Staking Tutorials</li>
              <li> Defi Education 101</li>
              <li> Defi Zoom Mondays</li>
              <li> Keep Wallet Safe Tutorials</li>
              <li> Enroll Into Pulsechain</li>
              <li> Enroll Into Pulsechain</li>
              <li>24/7 VC For All Defi Answer</li>
              <li> Defi After Dark Voice Chat (VC)</li>
              <li> Dumb Money Movie Nights</li>
              <li>Whats Trending Fridays</li>
              <li>Top Defi Picks (ROI Dapps)</li>
              <li>Crypto Gospel Sundays</li>
              <li>INC Rewards Every 28 Days per NFT</li>
              <li>BNB rewards Every 28 Days per NFT</li>
              <li>NFT Giveaways</li>
              <li>Token Airdrops</li>
              <li>Pulsechain Token Airdrops</li>
              <li>TangGang Meet Ups</li>
              <li>NFT Smart Wallets</li>
              <li>Drippy Inu Whale Airdrop</li>
              <li>Community Sticking Together</li>
            </ul>
            <p>
              Drippy Inu will airdrop its token to NFT holders to be paired with
              WDRIP making a few nft holders a whale in the drippy Inu
              ecosystem.
              <br /> <br />
              Congratulations! You&apos;ve now made a purchased to educate
              yourself.
            </p>
          </div>
          <h4 className='war'>MEME WARS COMING SOON</h4>
        </aside>
      </section>
    </section>
  );
};

export default HowToBuy;
