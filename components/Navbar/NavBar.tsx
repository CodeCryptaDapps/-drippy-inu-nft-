'use client';

import React, { useState } from 'react';

// styles
import styles from './NavBar.module.scss';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import BrandLogo from '../BrandLogo';

interface ToggleState {
  [key: string]: boolean;
}
const NavBar = () => {
  const currentRoute = usePathname();
  const [toggle, setToggle] = useState<ToggleState>({});
  console.log(currentRoute);
  const handleToggle = (id: string) => {
    setToggle((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const linkList = [
    { id: 1, title: 'HOME', url: '/' },
    { id: 2, title: 'ABOUT', url: '/#about' },
    { id: 3, title: 'TOKENOMICS', url: '/#tokenomics' },
    { id: 4, title: 'ROADMAP', url: '/#roadmap' },
    { id: 5, title: 'HOW TO BUY', url: '/#howtobuy' },
    { id: 6, title: 'WHITEPAPER', url: '/#whitepaper' },
    { id: 7, title: 'SOCIALS', url: '/#socials' },
  ];

  return (
    <div>
      <section
        className={`${styles.navContainer} flex flex-row items-center justify-between`}
      >
        <nav className='flex container flex-row items-center justify-between'>
          {/* Logo */}
          <section
            className={` w-full lg:w-4/12 flex flex-row items-center`}
            data-aos='zoom-out'
            data-aos-duration='1500'
          >
            <div className={styles.logo}>
              <BrandLogo />
            </div>
          </section>
          <section
            className={`w-full lg:w-7/12  ${
              toggle['navbar'] ? styles.navMove : styles.displayNav
            }`}
          >
            <aside className='w-full  '>
              {/* nav Links */}

              <ul
                // data-aos='fade-right'
                // data-aos-duration='1500'
                className={` ${styles.navItems} flex flex-col mt-[100px] lg:mt-0 lg:flex-row justify-between items-center `}
              >
                {linkList.map(({ id, title, url }) => (
                  <li
                    key={id}
                    className={currentRoute === url ? 'isActive' : 'notActive'}
                  >
                    {title === 'Academy' ? (
                      <a
                        onClick={() => handleToggle('navbar')}
                        href={url}
                        target='_blank'
                        rel='noreferrer'
                      >
                        {title}
                      </a>
                    ) : (
                      <Link onClick={() => handleToggle('navbar')} href={url}>
                        {title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </aside>
          </section>
          {/* Hambuger icon */}
          <section
            onClick={() => handleToggle('navbar')}
            className={toggle['navbar'] ? styles.open : styles.ham}
            id='navbar'
          >
            <span></span>
            <span></span>
            <span></span>
          </section>
        </nav>
      </section>
    </div>
  );
};

export default NavBar;
