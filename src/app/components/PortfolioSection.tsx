import React from 'react';
import { ExternalLink, Github } from 'lucide-react';


const projects = [
  {
    image: '/Asset/Html.png',
    title: 'Website Coding (HTML, CSS, JS)',
    viewLink: '#',
    githubLink: '#',
  },
  {
    image: '/portfolio/project2.png',
    title: 'Website Coding (HTML, CSS, JS)',
    viewLink: '#',
    githubLink: '#',
  },
  {
    image: '/portfolio/project3.png',
    title: 'Website Coding (HTML, CSS, JS)',
    viewLink: '#',
    githubLink: '#',
  },
  {
    image: '/portfolio/project4.png',
    title: 'Website Coding (HTML, CSS, JS)',
    viewLink: '#',
    githubLink: '#',
  },
  {
    image: '/portfolio/project5.png',
    title: 'Website Coding (HTML, CSS, JS)',
    viewLink: '#',
    githubLink: '#',
  },
  {
    image: '/portfolio/project6.png',
    title: 'Website Coding (HTML, CSS, JS)',
    viewLink: '#',
    githubLink: '#',
  },
];

const PortfolioSection = () => {
  return (
    <section  id="portfolio" className="relative py-16 md:py-20 px-6 text-white overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0d0f17] via-[#11131b] to-[#0b0d13] -z-10" />
      <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-purple-600 rounded-full opacity-20 blur-[160px] z-0" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-pink-500 rounded-full opacity-20 blur-[120px] z-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-center text-6xl font-bold mb-12 bg-gradient-to-r from-pink-500 to-blue-400 text-transparent bg-clip-text">
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#0f1115] border border-gray-600/30 rounded-xl overflow-hidden group hover:shadow-[0_0_25px_rgba(236,72,153,0.3),0_0_10px_rgba(6,182,212,0.2)] transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col items-start gap-2">
                <span className="text-sm text-white mb-1">{project.title}</span>
                <div className="flex gap-3">
                  <a
                    href={project.viewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 text-xs rounded-full border border-pink-500 hover:bg-pink-500/20 transition text-pink-400 hover:text-white"
                  >
                    View
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 text-xs rounded-full border border-cyan-500 hover:bg-cyan-500/20 transition text-cyan-400 hover:text-white flex items-center gap-1"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
