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
          <div className='container relative'>
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
        <div className="bg-white/95 backdrop-blur-sm shadow-sm w-full">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-3">
              <Link href="/" className="flex items-center">
                <Image src={logo} alt="exeyezone logo" width={130} />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-8">
                <ul className="flex flex-row text-sm font-medium text-gray-700 gap-8 font-poppins items-center">
                  {navLinks.map((link) => (
                    <li 
                      key={link.href} 
                      className="relative group"
                    >
                      <Link 
                        href={link.href} 
                        className={`transition-colors duration-200 hover:text-[var(--primary)] pb-1 ${
                          isActive(link.href) ? 'text-[var(--primary)]' : ''
                        }`}
                      >
                        {link.text}
                      </Link>
                      {/* Active underline */}
                      <span 
                        className={`absolute bottom-0 left-0 w-full h-0.5 bg-[var(--primary)] transition-transform duration-300 ${
                          isActive(link.href) ? 'scale-x-100' : 'scale-x-0'
                        }`}
                      />
                      {/* Hover underline */}
                      <span 
                        className={`absolute bottom-0 left-0 w-full h-0.5 bg-[var(--primary)] transition-transform duration-300 origin-left ${
                          isActive(link.href) ? 'scale-x-0' : 'scale-x-0 group-hover:scale-x-100'
                        }`}
                      />
                    </li>
                  ))}
                </ul>

                <Link href="/hireus" className="bg-[var(--primary)]  hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 text-white text-sm font-poppins font-semibold px-6 py-2.5 rounded-full">
                  Hire Us
                </Link>
              </div>

              

              {/* Mobile menu button */}
              <div className="lg:hidden flex items-center">
                <button
                  onClick={toggleMenu}
                  className="text-gray-800 hover:text-[var(--primary)] focus:outline-none cursor-pointer transition-colors duration-200 p-2 hover:bg-gray-50 rounded-lg"
                  aria-label="Toggle menu"
                >
                  <CgMenuGridR className='text-2xl'/>
                </button>
              </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
              <div className="absolute min-w-52 right-5 lg:hidden bg-white shadow-xl rounded-xl mt-2 border border-gray-100">
                <div className="flex flex-col justify-between h-full">
                <ul className="flex flex-col text-sm font-medium text-gray-700 gap-1 font-poppins p-3">
                  {navLinks.map((link) => (
                    <li 
                      key={link.href} 
                      className={`rounded-lg transition-colors duration-200 ${
                        isActive(link.href) 
                          ? 'bg-[var(--primary)]/10 text-[var(--primary)] font-semibold' 
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <Link 
                        href={link.href} 
                        onClick={toggleMenu}
                        className="block px-4 py-2.5"
                      >
                        {link.text}
                      </Link>
                    </li>
                    
                  ))}
                  <li className="mt-2">
                      <Link 
                        href="/hireus" 
                        className='block bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] hover:shadow-md active:shadow-sm rounded-lg px-5 py-2.5 text-center font-semibold text-white transition-all duration-200' 
                        onClick={toggleMenu}
                      >
                        Hire Us
                      </Link>
                    </li>
                </ul>
                
                

                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;