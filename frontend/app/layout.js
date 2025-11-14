import "./globals.css";
import Navbar from "./Components/Navbar/Navbar";
import Head from 'next/head'
import Image from "next/image";
import { Poppins, Raleway, Lato } from 'next/font/google';


import favicon from "@/public/img/Logo/logo.png"
import Footer from "./Components/Footer/Footer";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-raleway',
  display: 'swap',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://exeyezone.com'),
  title: {
    default: 'Exeyezone - Professional Software Solutions & Digital Products',
    template: '%s | Exeyezone'
  },
  description: "Perfection is our habit. We provide professional software solutions, web development, mobile apps, and digital products. Transform your ideas into reality with Exeyezone.",
  keywords: ['exeyezone', 'software solutions', 'web development', 'mobile apps', 'digital products', 'custom software', 'IT services', 'software development'],
  authors: [{ name: 'Exeyezone', url: 'https://exeyezone.com' }],
  creator: 'Exeyezone',
  publisher: 'Exeyezone',
  
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://exeyezone.com',
    siteName: 'Exeyezone',
    title: 'Exeyezone - Professional Software Solutions & Digital Products',
    description: 'Perfection is our habit. Transform your ideas into reality with our professional software solutions.',
    images: [
      {
        url: '/img/Logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'Exeyezone Logo',
      }
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Exeyezone - Professional Software Solutions',
    description: 'Perfection is our habit. Transform your ideas into reality.',
    creator: '@exeyezone',
    images: ['/img/Logo/logo.png'],
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  
  alternates: {
    canonical: 'https://exeyezone.com',
  },
  
  icons: {
    icon: '/img/Logo/logo.png',
    shortcut: '/img/Logo/logo.png',
    apple: '/img/Logo/logo.png',
  },
  
  manifest: '/manifest.json',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${raleway.variable} ${lato.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="icon" href="/img/Logo/logo.png" sizes="any" />
      </head>

      <body className="min-h-[90vh]">
        <Navbar />
        {children} 
        <Footer />
      </body>
    </html>
  );
}
