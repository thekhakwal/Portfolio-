'use client';

import React, { useEffect, useState } from 'react';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

const TimelineSection = () => {
  const [timelineData, setTimelineData] = useState<TimelineItem[]>([]);

  useEffect(() => {
    fetch('/Asset/Data.json')
      .then((res) => res.json())
      .then((data) => {
        const latest = data.timeline.slice(-5).reverse();
        setTimelineData(latest);
      });
  }, []);

  return (
    <section id="journey" className="py-24 px-4 text-white bg-[#0f1115]">
     <div className="max-w-4xl mx-auto relative z-10 mb-12">
        <h2 className="text-center text-6xl font-bold bg-gradient-to-r from-pink-500 to-blue-400 text-transparent bg-clip-text">
          MY JOURNEY
        </h2>
      </div>

      <div className="max-w-5xl mx-auto relative">
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 via-pink-500 to-purple-600 opacity-60 z-0" />

        <div className="flex flex-col gap-16 relative z-10">
          {timelineData.map((item, index) => (
            <div key={index} className="flex items-center justify-between relative w-full">
              {/* Left side */}
              <div className={`hidden md:block md:w-5/12 ${index % 2 !== 0 && 'order-2'}`}>
                <div className="bg-[#1a1c23] rounded-xl p-6 border border-gray-700 shadow-[0_0_25px_rgba(236,72,153,0.3),0_0_10px_rgba(6,182,212,0.2)]">
                  <p className="text-pink-400 text-sm mb-1 font-bold">{item.year}</p>
                  <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-300">{item.description}</p>
                </div>
              </div>

              {/* Dot */}
              <div className="hidden md:flex w-6 h-6 bg-gradient-to-r from-cyan-500 to-pink-500 border-[6px] border-[#0f1115] rounded-full z-20" />

              {/* Right Spacer */}
              <div className={`hidden md:block md:w-5/12 ${index % 2 === 0 && 'order-2'}`} />

              {/* Mobile View */}
              <div className="md:hidden flex flex-col items-center text-center gap-4">
                <div className="w-5 h-5 bg-gradient-to-r from-cyan-500 to-pink-500 border-[4px] border-[#0f1115] rounded-full shadow-md" />
                <div className="bg-[#1a1c23] w-full rounded-xl p-5 border border-gray-700 shadow-[0_0_25px_rgba(236,72,153,0.3),0_0_10px_rgba(6,182,212,0.2)]">
                  <p className="text-pink-400 text-sm font-bold mb-1">{item.year}</p>
                  <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-300">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
