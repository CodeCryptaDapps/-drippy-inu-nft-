import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Logo from '@/public/assets/drippyLogo.png';

const BrandLogo = () => {
  return (
    <Link href='/'>
      <Image src={Logo} alt='Etherjet logo' />
      {/* <IlemiLogo /> */}
    </Link>
  );
};

export default BrandLogo;
