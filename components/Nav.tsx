"use client"

import { useState, useEffect, useRef } from 'react';

import Link from 'next/link';
import Image from 'next/image';

export default function Nav() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const mobileMenuRef = useRef<HTMLDivElement>(null);
    

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    const handleClickOutside = (event: MouseEvent) => {
        if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
          setIsMobileMenuOpen(false);
        }
      };

    useEffect(() => {
        if (isMobileMenuOpen) {
          document.addEventListener('mousedown', handleClickOutside);
        } else {
          document.removeEventListener('mousedown', handleClickOutside);
        }
    
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [isMobileMenuOpen]);
    
    return (
        <nav className="bg-opacity-50 backdrop-filter backdrop-blur-lg fixed top-0 left-0 w-full z-50">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                < Link className="flex items-center" href="/">
                    < Image src="/otb.svg" alt="Over the board" width={32} height={32} />
                </Link>

                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button
                        type="button"
                        className="block text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 focus:text-gray-700 dark:focus:text-gray-300 focus:outline-none"
                        onClick={toggleMobileMenu}
                    >
                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3 5H21V7H3V5ZM3 11H21V13H3V11ZM3 17H21V19H3V17Z"
                            />
                        </svg>
                    </button>
                </div>


                {/* Desktop menu */}
                <div className="hidden md:flex md:items-center" id="navbar-desktop">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0">
                        <Link href="/" className="block py-2 pl-3 pr-4 text-white dark:text-white">Home</Link>
                        <Link href="/about" className="block py-2 pl-3 pr-4 text-white dark:text-white">About us</Link>
                        <Link href="/contact" className="block py-2 pl-3 pr-4 text-white dark:text-white">Contact</Link>
                    </ul>
                </div>

                
            </div>
            {/* Mobile menu */}
            <div 
            ref={mobileMenuRef}
            className={`md:hidden ${
                    isMobileMenuOpen ? 'block' : 'hidden'
                    }`} id="navbar-mobile">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0">
                        <Link href="/" className="block py-2 pl-3 pr-4 text-white dark:text-white" onClick={toggleMobileMenu}>Home</Link>
                        <Link href="/about" className="block py-2 pl-3 pr-4 text-white dark:text-white" onClick={toggleMobileMenu}>About us</Link>
                        <Link href="/contact" className="block py-2 pl-3 pr-4 text-white dark:text-white" onClick={toggleMobileMenu}>Contact</Link>
                    </ul>
                </div>
        </nav>

    )
  }