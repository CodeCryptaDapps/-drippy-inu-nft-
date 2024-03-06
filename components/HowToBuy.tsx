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
              1. Visit Drippy Inu NFT Buy button on this website:
              <ul className='list-disc pl-10'>
                <li> Connect MetaMask:</li>
                <li> Click on &quot;Connect Wallet&quot;.</li>
                <li> Choose MetaMask and authorize the connection.</li>
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
              Use #DRIPPYINU $DRIPPY #DRIPX $PLS & tag the official Twitter
              account @DRIPPYINU
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
              <li> Defi Education</li>
              <li> Keep Wallet Safe Tutorials</li>
              <li> Enroll Into Pulsechain</li>
              <li>24/7 VC For All Defi Answer</li>
              <li> Defi After Dark Voice Chat (VC)</li>
              <li>Whats Trending Fridays</li>
              <li>Top Defi Picks (ROI Dapps)</li>
              <li>Bible Study Sundays</li>
              <li>INC Rewards Every 28 Days per NFT</li>
              <li>BNB rewards Every 28 Days per NFT</li>
              <li>NFT Giveaways</li>
              <li>Token Airdrops</li>
              <li>NFT Smart Wallets</li>
              <li>Drippy Inu Whale Airdrop</li>
            </ul>
            <p>
              Drippy Inu will airdrop its token to NFT holders to be paired with
              WDRIP making a few nft holders a whale in the drippy Inu
              ecosystem.
              <br /> <br />
              Congratulations! You&apos;ve now made the best investment to
              educate thy self.
            </p>
          </div>
          <h4 className='war'>MEME WARS COMING SOON</h4>
        </aside>
      </section>
    </section>
  );
};

export default HowToBuy;
