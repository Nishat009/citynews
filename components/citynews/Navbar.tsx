// components/layout/Navbar.tsx
"use client"; // needed for interactivity (state, scroll)

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, Search, X } from 'lucide-react'; // or use heroicons / your icon lib
import { navItems } from '../data/cityNewsData';
import Image from 'next/image';
import logo from '@/public/image/logo.png'; // Ensure you have a logo image at this path
import NavDropdown from './NavDropDown';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Main Navbar */}
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 z-[9999999] ${isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
                    }`}
            >
                <div className="mx-auto px-4 ">
                    <div className='border-b'> 
                        <Link href="/">
                        <Image src={logo} className="flex justify-center my-5 mx-auto items-center" alt="The Downtown" width={180} height={40} />

                    </Link>

                    </div>

                    <div className="flex items-center justify-center my-3 max-w-[1380px] mx-auto">



                        {/* Desktop Menu */}
                        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
                            {navItems.map((item) => (
                <NavDropdown
  key={item.label}
  label={item.label}
  href={'href' in item ? item.href : undefined}
  submenu={'submenu' in item ? item.submenu : undefined}
/>
              ))}
                        </nav>

                        {/* Right Icons */}
                        <div className="flex items-center space-x-4 md:space-x-6">
                            {/* <button aria-label="Search" className="text-gray-700 hover:text-yellow-600 transition">
                                <Search className="w-5 h-5 md:w-6 md:h-6" />
                            </button> */}

                            {/* Mobile Hamburger */}
                            <button
                                className="lg:hidden text-gray-800"
                                onClick={() => setIsMobileOpen(!isMobileOpen)}
                                aria-label="Toggle menu"
                            >
                                {isMobileOpen ? (
                                    <X className="w-6 h-6" />
                                ) : (
                                    <Menu className="w-6 h-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {isMobileOpen && (
                <div className="fixed inset-0 z-40 lg:hidden bg-black/50" onClick={() => setIsMobileOpen(false)}>
                    <div
                        className="absolute top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white shadow-xl p-6 overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center mb-8">
                            <span className="text-xl font-bold">Menu</span>
                            <button onClick={() => setIsMobileOpen(false)}>
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                        <nav className="flex flex-col space-y-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="text-lg font-medium uppercase text-gray-800 hover:text-yellow-600 transition py-2 border-b border-gray-100"
                                    onClick={() => setIsMobileOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            )}

            {/* Spacer to prevent content jump when navbar becomes fixed */}
            <div className="h-16 md:h-20" />
        </>
    );
}