'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'

const NavBar = () => {
    const pathname = usePathname()
    return (
        <header className="bg-gray-800 py-4 px-6 shadow-lg">
            <nav className="max-w-6xl mx-auto">
                <Link
                    href="/"
                    className={`mr-6 text-lg font-medium transition-colors duration-200 ${pathname === '/'
                            ? 'text-white border-b-2 border-blue-500'
                            : 'text-gray-300 hover:text-white'
                        }`}
                >
                    Home
                </Link>
                <Link
                    href="/about"
                    className={`mr-6 text-lg font-medium transition-colors duration-200 ${pathname === '/about'
                            ? 'text-white border-b-2 border-blue-500'
                            : 'text-gray-300 hover:text-white'
                        }`}
                >
                    About Us
                </Link>

                <Link
                    href="/adventure"
                    className={`mr-6 text-lg font-medium transition-colors duration-200 ${pathname === '/adventure'
                            ? 'text-white border-b-2 border-blue-500'
                            : 'text-gray-300 hover:text-white'
                        }`}
                >
                    Adventure
                </Link>
            </nav>
        </header>
    );
};

export default NavBar;
