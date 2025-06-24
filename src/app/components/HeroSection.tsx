'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';

interface HeroData {
  sequenceTexts: string[];
  description: string;
  buttonText: string;
  buttonHref: string;
  imageSrc: string;
}

const HeroSection = () => {
  const [heroData, setHeroData] = useState<HeroData | null>(null);

  useEffect(() => {
    const fetchHeroData = async () => {
      const res = await fetch('/Asset/Data.json');
      const data = await res.json();
      setHeroData(data.heroSection);
    };

    fetchHeroData();
  }, []);

  if (!heroData) return null;

  return (
    <section className="relative flex flex-col md:flex-row justify-between items-center py-20 text-white overflow-hidden min-h-screen">
      {/* Background Glow Effects */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-purple-600 rounded-full opacity-20 blur-[160px] z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-pink-500 rounded-full opacity-20 blur-[120px] z-0" />

      {/* Left Content */}
      <div data-aos="fade-right" data-aos-duration="1000" className="relative z-10 max-w-xl px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight min-h-[70px]">
         <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight min-h-[70px]">
  <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight min-h-[70px]">
  <span className="text-pink-500 drop-shadow-[0_0_25px_rgba(236,72,153,0.5)]">
    <Typewriter
      options={{
        strings: heroData.sequenceTexts,
        autoStart: true,
        loop: true,
        delay: 80,
        deleteSpeed: 50,
      }}
    />
  </span>
</h1>

</h1>

          
        </h1>

        <p className="text-gray-300 mb-6 text-lg">
          {heroData.description}
        </p>

        <div className="relative inline-block rounded-full p-[2px] bg-gradient-to-r from-cyan-500 to-pink-500 transition-transform duration-300 hover:scale-105">
          <div className="bg-[#0d0f17] rounded-full">
            <a href={heroData.buttonHref}>
              <button className="px-6 py-2 text-white rounded-full text-sm">
                {heroData.buttonText}
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative z-10 mt-10 md:mt-0 px-6">
        <Image
          src={heroData.imageSrc}
          alt="Hero"
          width={400}
          height={500}
          className="object-cover rounded-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection;
