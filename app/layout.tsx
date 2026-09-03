import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'SecondMiles — Growth Intelligence for Food Businesses',
  description: 'SecondMiles is the growth intelligence partner for modern food businesses — helping them find and act on the opportunities hidden in their online performance.',
  keywords: ['growth intelligence', 'food business', 'restaurant analytics', 'menu optimisation', 'pricing intelligence', 'delivery margins', 'conversion rate'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
