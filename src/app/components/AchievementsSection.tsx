import React from 'react';

const achievements = [
  {
    title: 'Certified React Developer',
    description: 'Completed a comprehensive ReactJS course to build modern, interactive web applications.',
    logo: '/Asset/Html.png', // Replace with your actual certification logo URL
  },
  {
    title: 'Google Analytics Certified',
    description: 'Demonstrated expertise in analyzing and measuring the performance of websites using Google Analytics.',
    logo: 'https://img.icons8.com/ios/452/google-analytics.png', // Replace with your actual certification logo URL
  },
  {
    title: 'Full-Stack Web Development',
    description: 'Completed a full-stack web development program including frontend and backend development using Node.js, Express, and MongoDB.',
    logo: 'https://img.icons8.com/ios/452/nodejs.png', // Replace with your actual certification logo URL
  },
  {
    title: 'UI/UX Design Specialist',
    description: 'Certified in creating intuitive, user-friendly, and aesthetically pleasing designs with Figma and Adobe XD.',
    logo: 'https://img.icons8.com/ios/452/figma.png', // Replace with your actual certification logo URL
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-16 px-6 text-white">
      <h2 className="text-3xl font-bold text-gradient mb-8">
        Achievements & Certifications
      </h2>

      {/* Grid layout for 3 cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
        {achievements.slice(0, 3).map((achievement, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-10 bg-[#1a1c23] rounded-lg shadow-xl transition-all hover:scale-105 duration-300 group"
          >
            {/* Certification Logo */}
            <img
              src={achievement.logo}
              alt={achievement.title}
              className="w-28 h-28 mb-6 group-hover:scale-110 transition-transform duration-300"
            />
            <h3 className="text-xl font-semibold text-white mb-3">{achievement.title}</h3>
            <p className="text-sm text-gray-400 text-center">{achievement.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AchievementsSection;
