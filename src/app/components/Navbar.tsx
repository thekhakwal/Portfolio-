'use client';

import React, { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav data-aos="fade-down" className="w-full px-6 py-4 flex justify-between items-center border border-gray-600/30 rounded-full bg-[#0f1115] text-white mt-6 z-50 relative">
      {/* Logo/Name */}
      <div className="text-sm md:text-lg font-semibold">
        <span className='text-2xl'>&lt; </span>Komal Kharkwal /<span className='text-2xl'> &gt;</span>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden z-50">
        <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`absolute md:static top-20 right-6 w-[85vw] md:w-auto md:flex gap-6 text-sm uppercase text-gray-300 bg-[#0f1115] md:bg-transparent rounded-xl p-5 md:p-0 transition-all duration-300 z-40 ${
          isOpen ? 'flex flex-col shadow-lg border border-gray-700' : 'hidden'
        }`}
      >
        <a href="#services" className="hover:text-white">Services</a>
        <a href="#technologies" className="hover:text-white">Technologies</a>
        <a href="#portfolio" className="hover:text-white">Portfolio</a>
        <a href="#contact" className="hover:text-white">Contact</a>

        {/* Hire Me Button (Mobile) */}
        <div className="md:hidden mt-4 relative inline-block rounded-full p-[2px] bg-gradient-to-r from-cyan-500 to-pink-500 group hover:scale-105 transition-transform">
          <button className="w-full flex items-center justify-center gap-2 px-4 py-1.5 bg-[#0f1115] text-white rounded-full text-sm">
            Hire Me
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>

      {/* Hire Me Button (Desktop) */}
      <div className="hidden md:inline-block relative rounded-full p-[2px] bg-gradient-to-r from-cyan-500 to-pink-500 group transition-transform hover:scale-105">
        <button className="flex items-center gap-2 px-4 py-1.5 bg-[#0f1115] text-white rounded-full text-sm">
          Hire Me
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
