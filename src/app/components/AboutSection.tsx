'use client';
import React from 'react';
import Image from 'next/image';
import aboutData from '../../../public/Asset/Data.json'; // adjust path if needed

const AboutSection = () => {
  const data = aboutData.about;

  return (
    <section id="about" className="relative py-20 px-6 text-white overflow-hidden">
      {/* Matching Themed Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d0f17] via-[#11131b] to-[#0b0d13] -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-purple-600 opacity-20 blur-[160px] rounded-full z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-pink-500 opacity-20 blur-[120px] rounded-full z-0" />

      <div data-aos="fade-right" className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
        {/* Image Box */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="rounded-2xl overflow-hidden bg-[#0f1115] border border-gray-700/30 shadow-[0_0_60px_rgba(236,72,153,0.15)] hover:shadow-[0_0_90px_rgba(236,72,153,0.25)] transition duration-300">
            <Image
              src={data.image}
              alt="About Me"
              width={400}
              height={500}
              className="rounded-2xl object-cover"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 backdrop-blur-md bg-white/5 p-6 md:p-8 rounded-2xl border border-gray-700/30 shadow-inner">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-blue-400 text-transparent bg-clip-text">
            {data.title}
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4 text-base">
            {data.description}
          </p>

          <div className="grid grid-cols-2 gap-4 text-sm text-gray-400 mb-6">
            <div>
              <span className="block text-pink-400 font-semibold">🌍 Location</span>
              {data.location}
            </div>
            <div>
              <span className="block text-pink-400 font-semibold">💻 Experience</span>
              {data.experience}
            </div>
            <div>
              <span className="block text-pink-400 font-semibold">🎯 Focus</span>
              {data.focus}
            </div>
            <div>
              <span className="block text-pink-400 font-semibold">📨 Email</span>
              {data.email}
            </div>
          </div>

          <a
            href={data.cta.href}
            className="inline-block px-6 py-2 border border-pink-500 rounded-full text-sm text-pink-400 hover:bg-pink-500/20 hover:text-white transition"
          >
            {data.cta.text}
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
