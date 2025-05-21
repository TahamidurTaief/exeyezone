'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import logo from '@/public/img/Logo/logo.png';
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { IoMdPhonePortrait } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import { CgMenuGridR } from "react-icons/cg";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to check if link is active
  const isActive = (href) => {
    return pathname === href || 
           (href !== '/' && pathname.startsWith(href));
  };

  // Nav links data
  const navLinks = [
    { href: '/about', text: 'About' },
    { href: '/courses', text: 'Courses' },
    { href: '/products', text: 'Products' },
    { href: '/services', text: 'Services' },
    { href: '/portfolio', text: 'Blog' },
    { href: '/contact', text: 'Contact' },
  ];

  return (
    <header className='sticky top-0 z-50'>
      <nav>
        {/* Top contact info bar */}
        <div className='bg-[var(--secondary)] py-1 w-full hidden md:block'>
          <div className='container'>
            <div className='text-white font-poppins font-medium text-sm items-center justify-center text-center'>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-7 w-full">
                  <div className="flex flex-row gap-2 items-center">
                    <IoMdPhonePortrait className='text-lg' />
                    <p className="text-sm font-lato font-normal">01766454576</p>
                  </div>

                  <div className="flex flex-row gap-2 items-center">
                    <SiGmail className='text-md' />
                    <p className="text-sm font-lato font-normal">exeyezoneltd@gmail.com</p>
                  </div>
                </div>
                <div>
                  <div className="flex flex-row gap-5 items-center">
                    <Link href=""><FaFacebook className='text-lg hover:text-blue-500 duration-200'/></Link>
                    <Link href=""><FaYoutube className='text-xl hover:text-red-500 duration-200'/></Link>
                    
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main sticky nav bar */}
        <div className="bg-white drop-shadow-md w-full">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-2">
              <Link href="/" className="flex items-center">
                <Image src={logo} alt="exeyezone logo" width={130} />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex">
                <ul className="flex flex-row text-sm font-normal text-gray-800  gap-6 font-poppins items-center">
                  {navLinks.map((link) => (
                    <li 
                      key={link.href} 
                      className={`${isActive(link.href) ? 'font-semibold text-[var(--primary)]' : ''}`}
                    >
                      <Link href={link.href} className='hover:text-[var(--primary)]'>{link.text}</Link>
                    </li>
                  ))}
                </ul>

                <div className="bg-[var(--primary)] hover:bg-[var(--secondary)] duration-200 text-white text-sm font-poppins px-7 py-3 rounded-md cursor-pointer">
                  <Link href="/hireus"> <p className='justify-center items-center text-center font-semibold'>Hire Us</p></Link>
              </div>
              </div>

              

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center bg-[var(--third)] p-1 rounded-md">
                <button
                  onClick={toggleMenu}
                  className="text-gray-800 focus:outline-none cursor-pointer"
                  aria-label="Toggle menu"
                >
                  <CgMenuGridR className='text-2xl'/>
                </button>
              </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
              <div className="md:hidden bg-white drop-shadow-lg rounded-lg mt-2">
                <ul className="flex flex-col text-sm font-normal text-gray-800 gap-4 font-poppins p-4">
                  {navLinks.map((link) => (
                    <li 
                      key={link.href} 
                      className={`${isActive(link.href) ? 'font-semibold text-[var(--primary)]' : ''}`}
                    >
                      <Link 
                        href={link.href} 
                        onClick={toggleMenu}
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                  <li className="bg-[var(--primary)] hover:bg-[var(--secondary)] active:bg-[var(--secondary)] rounded px-5 py-2 text-center">
                    <Link href="/hireus" className='justify-center items-center text-center font-semibold text-white' onClick={toggleMenu}>Hire Us</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;