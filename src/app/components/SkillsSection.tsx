import React from 'react';

const skills = [
  { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TailwindCSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'ReactJS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'WordPress', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg' },
  { name: 'Sass', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 px-6 text-white">
      <div className="max-w-4xl mx-auto relative z-10 mb-12">
        <h2 className="text-center text-6xl font-bold bg-gradient-to-r from-pink-500 to-blue-400 text-transparent bg-clip-text">
          MY Skills
        </h2>
      </div>

      {/* Row 1: Left to Right */}
      <div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 justify-items-center">
        {skills.slice(0, 5).map((skill, index) => (
          <div key={index} className="flex flex-col items-center group">
            <img
              src={skill.logo}
              alt={skill.name}
              className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300"
            />
            <p className="text-sm text-gray-300">{skill.name}</p>
          </div>
        ))}
      </div>

      {/* Row 2: Right to Left */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 justify-items-center mt-8">
        {skills.slice(5).map((skill, index) => (
          <div key={index} className="flex flex-col items-center group">
            <img
              src={skill.logo}
              alt={skill.name}
              className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300"
            />
            <p className="text-sm text-gray-300">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
