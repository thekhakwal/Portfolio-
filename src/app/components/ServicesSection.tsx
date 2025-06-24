'use client';

import React, { useEffect, useState } from 'react';

interface ServiceItem {
  title: string;
  icon: string;
  description: string;
}

const ServicesSection = () => {
  const [services, setServices] = useState<ServiceItem[]>([]);

  useEffect(() => {
    fetch('/Asset/Data.json')
      .then((res) => res.json())
      .then((data) => setServices(data.services));
  }, []);

  return (
    <section id="services" className="relative py-16 md:py-20 px-6 text-white overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0d0f17] via-[#11131b] to-[#0b0d13] -z-10" />
      <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-purple-600 rounded-full opacity-20 blur-[160px] z-0" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-pink-500 rounded-full opacity-20 blur-[120px] z-0" />

      {/* Heading */}
      <div className="max-w-4xl mx-auto relative z-10 mb-12">
        <h2 className="text-center text-6xl font-bold bg-gradient-to-r from-pink-500 to-blue-400 text-transparent bg-clip-text">
          MY SERVICES
        </h2>
      </div>

      {/* Central Line */}
      <div className="absolute left-1/2 top-32 bottom-32 w-px bg-gradient-to-b from-pink-500 via-purple-600 to-blue-500 opacity-20 z-0" />

      {/* Services Cards */}
      <div className="max-w-4xl mx-auto flex flex-col gap-12 relative z-10">
        {services.map((service, index) => (
          <div
            key={index}
            className={`relative border border-gray-600/30 rounded-xl p-6 bg-[#0f1115] backdrop-blur-md shadow-md transition-all duration-300 w-full md:w-[75%] hover:border-transparent hover:shadow-[0_0_25px_rgba(236,72,153,0.4),0_0_15px_rgba(6,182,212,0.3)] ${
              index % 2 === 0 ? 'self-start' : 'self-end'
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="text-2xl">{service.icon}</div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
