import "./globals.css";
import Navbar from "./Components/Navbar/Navbar";
import Head from 'next/head'
import Image from "next/image";


import favicon from "@/public/img/Logo/logo.png"
import Footer from "./Components/Footer/Footer";



export const metadata = {
  title: "exeyezone",
  description: "Perfection is out habit.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <Head>
      <link rel="icon" href="./public/img/Logo/logo.png" sizes="any" />
      </Head>


      <body className="min-h-[90vh]">
        <Navbar />
        {children} 
        <Footer />
      </body>
    </html>
  );
}
