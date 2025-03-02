'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-[#f8fafc] shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link href="/">
          <Image
            src="massdriver_logo.svg"
            alt="Massdriver Logo"
            width={150}
            height={40}
            className="cursor-pointer"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 items-center font-medium text-black">
          {/* Features Dropdown */}
          <div className="relative group">
            <button className="flex items-center space-x-1 hover:text-gray-500">
              <span>Features</span>
              <Image
                src="https://www.svgrepo.com/show/9249/down-chevron.svg"
                alt=""
                className="mt-1"
                width={12}
                height={12}
              />
            </button>
            <div className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-md w-56 rounded-md p-2">
              <Link href="/features" className="block px-4 py-2 hover:bg-gray-100">
                View all features
              </Link>
            </div>
          </div>

          {/* Solutions Dropdown */}
          <div className="relative group">
            <button className="flex items-center space-x-1 hover:text-gray-500">
              <span>Solutions</span>
              <Image
                src="https://www.svgrepo.com/show/9249/down-chevron.svg"
                alt=""
                className="mt-1"
                width={12}
                height={12}
              />
            </button>
            <div className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-md w-56 rounded-md p-2">
              <Link href="/solutions/internal-developer-platform" className="block px-4 py-2 hover:bg-gray-100">
                Developer Self Service
              </Link>
            </div>
          </div>

          {/* Other Menu Links */}
          <Link href="/pricing" className="hover:text-[#38a8e7]">
            Pricing
          </Link>
          <Link href="/blog" className="hover:text-[#38a8e7]">
            Blog
          </Link>
          <Link href="/docs" className="hover:text-[#38a8e7]">
            Docs
          </Link>
          <Link href="/templates" className="hover:text-[#38a8e7]">
            Templates
          </Link>

          {/* Community Dropdown */}
          <div className="relative group">
            <button className="flex items-center space-x-1 hover:text-gray-500">
              <span>Community</span>
              <Image
                src="https://www.svgrepo.com/show/9249/down-chevron.svg"
                alt=""
                className="mt-1"
                width={12}
                height={12}
              />
            </button>
            <div className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-md w-56 rounded-md p-2">
              <Link href="/community" className="block px-4 py-2 hover:bg-gray-100">
                View all community resources
              </Link>
            </div>
          </div>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center flex-nowrap gap-x-6">
        <Link
            href="https://app.massdriver.cloud/login"
            className="px-4 py-2 font-bold rounded-md transition-colors hover:text-gray-500 whitespace-nowrap"
            >
            Sign In
            </Link>

            <Link
                href="https://app.massdriver.cloud/register"
                className="px-6 py-3 rounded-md text-white font-bold flex items-center space-x-2 transition-all 
                            bg-gradient-to-r from-[#18acc0] to-[#3ca8eb] hover:from-teal-400 hover:to-blue-400 shadow-md whitespace-nowrap"
                >
                <span>Try Free</span>
                <span>→</span>
                </Link>

        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md absolute top-16 left-0 w-full p-4">
          <Link href="/features" className="block py-2">Features</Link>
          <Link href="/solutions" className="block py-2">Solutions</Link>
          <Link href="/pricing" className="block py-2">Pricing</Link>
          <Link href="/blog" className="block py-2">Blog</Link>
          <Link href="/docs" className="block py-2">Docs</Link>
          <div className="border-t mt-2 pt-2">
            <Link href="https://app.massdriver.cloud/login" className="block py-2">Sign In</Link>
            <Link href="https://app.massdriver.cloud/register" className="block py-2 text-blue-600">Try Free</Link>
          </div>
        </div>
      )}
    </header>
  );
}
