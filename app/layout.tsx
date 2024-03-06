import type { Metadata } from 'next';
import { Oswald } from 'next/font/google';
import './globals.css';
import AOSAnimation from '@/utils/AosInit';
import NavBar from '@/components/Navbar/NavBar';

const oswald = Oswald({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DRIPPY INU',
  description:
    '"Drippy Inu, the decentralized pride of Drip.Community on PulseChain. Drippy Inu pays homage to the endearing droplets of wealth, symbolizing the constant flow in our crypto journey. Just like the rainmaker, Forex, Drippy Inu is your steadfast companion, smiling through the bullish and bearish moments.Thanks to Drip.Community-',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={oswald.className}>
        <AOSAnimation>
          <NavBar />
          {children}
        </AOSAnimation>
      </body>
    </html>
  );
}
