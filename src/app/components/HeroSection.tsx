// components/HeroSection.tsx
import React from 'react';
import Image from 'next/image';
import womanImage from '../../../public/K1.jpg'; // Replace with actual image path

const HeroSection = () => {
  return (
    <section className="relative flex flex-col md:flex-row justify-between items-center py-20 text-white overflow-hidden min-h-screen">
      {/* Soft Background Glow Effects */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-purple-600 rounded-full opacity-20 blur-[160px] z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-pink-500 rounded-full opacity-20 blur-[120px] z-0" />

      {/* Left Section */}
      <div  data-aos="fade-right"  // First row animation: fade right to left
            data-aos-duration="1000"  className="relative z-10 max-w-xl px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">FRONTEND</span><br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">DEVELOPER</span>
        </h1>
        <p className="text-gray-300 mb-6 text-lg">
          I am Komal Kharkwal – <span className="text-blue-400">web-developer</span> with a passion for creating beautiful and responsive websites.
        </p>

        {/* Gradient Border-Only Button */}
        <div className="relative inline-block rounded-full p-[2px] bg-gradient-to-r from-cyan-500 to-pink-500 transition-transform duration-300 hover:scale-105">
  <div className="bg-[#0d0f17] rounded-full">
    <a href="#portfolio">
  <button className="px-6 py-2 text-white rounded-full text-sm">
    VIEW MY WORK
  </button>
</a>

  </div>
</div>
      </div>

      {/* Right Section - Image */}
      <div className="relative z-10 mt-10 md:mt-0 px-6">
        <Image
          src={womanImage}
          alt="Tatiana"
          width={400}
          height={500}
          className="object-cover rounded-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection;
