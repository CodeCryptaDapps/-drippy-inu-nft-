"use client"

import { images } from "@/exports/images";
import Image from "next/image";
import React from "react";
import { Link } from "react-scroll";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row justify-between items-center py-[50px] container gap-10 "
    >
      <article
        data-aos="fade-left"
        className="w-full md:w-5/12 text-center flex flex-row relative"
      >
        <figure className="absolute top-[5%] lg:top-[30%] left-[1%] lg:left-[-12%] w-[10%] lg:w-[auto]">
          <Image
            src={images.dripIcon}
            alt=""
            // className='  h-[24px] '
          />{" "}
        </figure>
        <div className="w-10/12 mx-auto">
          <h1>ABOUT DRIPPY INU</h1>

          <p>
            &quot;Drippy Inu, the decentralized pride of Drip.Community on
            PulseChain. Drippy Inu pays homage to the endearing droplets of
            wealth, symbolizing the constant flow in our crypto journey. Just
            like the rainmaker, Forex, Drippy Inu is your steadfast companion,
            smiling through the bullish and bearish moments.Thanks to
            Drip.Community-
            <br /> <br />
            Join us in the embrace of prosperity, laughter through the dips, and
            jubilation during the rips. Let&apos;s make every drop count in the
            Drip.Community saga!&quot;
          </p>

          <p className="flex items-center gap-3 justify-center mt-10">
            $DRIPPY WITH US{" "}
            <Image
              src={images.drippyIcon}
              alt=""
              className="w-[24px] h-[24px] "
            />{" "}
          </p>

          <div className="my-7">
            <button className="main-btn w-10/12 mx-auto">
              OFFICIAL CONTRACT
            </button>
            <p className="mt-4">0xd00000000000000000000000000000000000</p>
          </div>
          <Link to="howtobuy" spy={true} smooth={true}>
            <button className="main-btn">CLICK TO BUY HERE</button>
          </Link>
        </div>
        <figure className="absolute bottom-0 right-[5%] md:right-[-20%] w-[20%] lg:w-[auto]">
          <Image
            src={images.drippy}
            alt=""
            // className='w-[24px] h-[24px] '
          />{" "}
        </figure>
      </article>

      <figure data-aos="fade-right" className="w-full md:w-6/12">
        <Image src={images.drippyLargeImage} alt="dripply nft image" />
      </figure>
    </section>
  );
};

export default About;
