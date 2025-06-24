'use client';

import React from 'react';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiGithub,
  SiFigma,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
} from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: SiHtml5, color: 'text-orange-500' },
  { name: 'CSS', icon: SiCss3, color: 'text-blue-500' },
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-400' },
  { name: 'React', icon: SiReact, color: 'text-cyan-400' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
  { name: 'Tailwind', icon: SiTailwindcss, color: 'text-cyan-300' },
  { name: 'GitHub', icon: SiGithub, color: 'text-gray-300' },
  { name: 'Figma', icon: SiFigma, color: 'text-pink-400' },
];

const SkillsSection = () => {
  return (
    <section id="technologies" className="py-20 px-6 text-white">
 {/* Matching Themed Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d0f17] via-[#11131b] to-[#0b0d13] -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-purple-600 opacity-20 blur-[160px] rounded-full z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-pink-500 opacity-20 blur-[120px] rounded-full z-0" />

      <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
        My Tech Stack
      </h2>

      <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div
              key={index}
              className={`w-32 h-32 bg-[#1a1c23] flex flex-col items-center justify-center rounded-xl shadow-[0_0_20px_rgba(236,72,153,0.1),0_0_10px_rgba(6,182,212,0.1)] hover:shadow-[0_0_25px_rgba(236,72,153,0.3),0_0_15px_rgba(6,182,212,0.2)] transition-all duration-500 hover:scale-110 animate-float`}
            >
              <Icon className={`text-4xl mb-2 ${skill.color}`} />
              <p className="text-xs text-center text-gray-300">{skill.name}</p>
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0); }
        }
        .animate-float {
          animation: float 3.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;
