'use client';

import React, { useEffect, useState } from 'react';

interface Achievement {
  title: string;
  description: string;
  logo: string;
  link: string;
}

const AchievementsSection = () => {
  const [achievements, setAchievements] = useState<Achievement[]>([]);

  useEffect(() => {
    fetch('/Asset/Data.json')
      .then((res) => res.json())
      .then((data) => setAchievements(data.achievements));
  }, []);

  return (
    <section id="achievements" className="py-16 px-6 text-white bg-[#0a0a0a]">
      <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
        Achievements & Certifications
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map((achievement, index) => (
          <a
            key={index}
            href={achievement.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative h-72 rounded-xl overflow-hidden shadow-md shadow-cyan-500/10 hover:shadow-cyan-500/30 transition duration-500"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url(${achievement.logo})` }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent p-6 flex flex-col justify-end z-10">
              <h3 className="text-xl font-bold text-white mb-1">
                {achievement.title}
              </h3>
              <p className="text-sm text-gray-300">{achievement.description}</p>
            </div>

            <div className="absolute inset-0 z-0 rounded-xl group-hover:shadow-[0_0_20px_4px_rgba(0,255,255,0.3)] transition duration-500 pointer-events-none" />
          </a>
        ))}
      </div>
    </section>
  );
};

export default AchievementsSection;
