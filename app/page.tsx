import About from "@/components/About";
import Hero from "@/components/Hero";
import HowToBuy from "@/components/HowToBuy";
import JoinCommunity from "@/components/Navbar/JoinCommunity";
import Nft from "@/components/Nft";
import Roadmap from "@/components/Roadmap";
import Tokenomics from "@/components/Tokenomics";
import { images } from "@/exports/images";
import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  {
    id: 1,
    icon: images.social5,
    href: "",
  },
  {
    id: 2,
    icon: images.social1,
    href: "",
  },
  {
    id: 3,
    icon: images.social2,
    href: "",
  },
  {
    id: 4,
    icon: images.social3,
    href: "https://twitter.com/1DrippyInu",
  },
  {
    id: 5,
    icon: images.social4,
    href: "https://t.me/DrippyXinu",
  },
  {
    id: 6,
    icon: images.social6,
    href: "https://t.me/DrippyXinu",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col justify-between overflow-hidden">
      <Hero />
      <About />
      <Tokenomics />
      <Roadmap />
      <Nft />

      <section className="fxBg"></section>
      <HowToBuy />

      <JoinCommunity />

      <footer id="socials" className="text-center py-10">
        <h2>🔗 SOCIALS 🔗</h2>

        <section className="w-full flex flex-col md:flex-row items-center justify-between gap-8 md:px-14 lg:px-24">
          <Link className="main-btn rounded-sm font-bold" href="/">
            Pulsechain & Binance Smartchain
          </Link>

          <figure className="flex justify-center items-center gap-3 my-10">
            {socialLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Image
                  src={link.icon}
                  alt=""
                  className="w-12 h-12 object-contain group-last:w-[189px]"
                />
              </Link>
            ))}
          </figure>
          <Link className="main-btn rounded-sm font-bold" href="/" >
            Join Telegram For 24/7 Live Voice Chat (VC)
          </Link>
        </section>

        <small>© 2024 DRIPPYPRC20. ALL RIGHTS RESERVED.</small>
      </footer>
    </main>
  );
}
