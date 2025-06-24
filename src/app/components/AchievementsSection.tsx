import React from 'react';

const achievements = [
  {
    title: 'Certified React Developer',
    description: 'Completed a comprehensive ReactJS course to build modern, interactive web applications.',
    logo: '/Asset/Html.png',
    link: 'https://example.com/react-cert',
  },
  {
    title: 'Google Analytics Certified',
    description: 'Expert in tracking and analyzing user behavior using Google Analytics.',
    logo: 'https://img.icons8.com/ios/452/google-analytics.png',
    link: 'https://example.com/analytics-cert',
  },
  {
    title: 'Full-Stack Web Development',
    description: 'Built full-stack projects using Node.js, Express, MongoDB, and React.',
    logo: 'https://img.icons8.com/ios/452/nodejs.png',
    link: 'https://example.com/fullstack-cert',
  },
];

const AchievementsSection = () => {
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
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url(${achievement.logo})` }}
            />

            {/* Overlay Text */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent p-6 flex flex-col justify-end z-10">
              <h3 className="text-xl font-bold text-white mb-1">
                {achievement.title}
              </h3>
              <p className="text-sm text-gray-300">{achievement.description}</p>
            </div>

            {/* Neon Glow Hover Effect */}
            <div className="absolute inset-0 z-0 rounded-xl group-hover:shadow-[0_0_20px_4px_rgba(0,255,255,0.3)] transition duration-500 pointer-events-none" />
          </a>
        ))}
      </div>
    </section>
  );
};

export default AchievementsSection;
