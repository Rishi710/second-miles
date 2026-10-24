import type { Metadata } from 'next';
import { Bricolage_Grotesque, DM_Sans, Space_Mono } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm',
  display: 'swap',
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'SecondMiles Find the money hiding in your menu',
  description:
    'SecondMiles turns your delivery and ordering data into simple decisions: what to sell, what to charge, what to fix. Clear answers for restaurants, every week.',
  keywords: [
    'restaurant growth',
    'menu engineering',
    'delivery margins',
    'pricing for restaurants',
    'food business analytics',
    'Deliveroo Uber Eats Just Eat performance',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${dmSans.variable} ${spaceMono.variable}`}
    >
      <body suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
