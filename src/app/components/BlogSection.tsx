import React from 'react';

const blogs = [
  {
    title: 'How to Become a React Developer',
    description: 'In this article, we cover the basics of becoming a React developer, including tips and resources for success.',
    image: '/Asset/Html.png',
    link: '/blog/how-to-become-a-react-developer',
  },
  {
    title: 'Understanding JavaScript Closures',
    description: 'Closures are a key JavaScript concept. Learn how they work with examples and practical use cases.',
    image: 'https://via.placeholder.com/600x400?text=Closures+Blog',
    link: '/blog/understanding-javascript-closures',
  },
  {
    title: 'Tailwind CSS: The Ultimate Guide',
    description: 'A complete guide to using Tailwind CSS to build modern, responsive UIs with ease.',
    image: 'https://via.placeholder.com/600x400?text=Tailwind+Blog',
    link: '/blog/tailwind-css-guide',
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-16 px-6 text-white bg-[#0d0f17]">
     
        <h2 className="text-center text-6xl py-2 font-bold mb-12 bg-gradient-to-r from-pink-500 to-blue-400 text-transparent bg-clip-text">
            Latest Blog Posts
        </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog, index) => (
          <a
            key={index}
            href={blog.link}
            className="group relative rounded-xl overflow-hidden shadow-lg transition duration-500 
              hover:shadow-[0_0_25px_rgba(236,72,153,0.3),0_0_10px_rgba(6,182,212,0.2)]"
          >
            {/* Background Image */}
            <div
              className="h-64 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url(${blog.image})` }}
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent p-6 flex flex-col justify-end z-10">
              <h3 className="text-xl font-bold mb-2 text-white">{blog.title}</h3>
              <p className="text-sm text-gray-300 line-clamp-3">{blog.description}</p>
              <span className="mt-4 text-sm text-cyan-400 group-hover:underline">
                Read More →
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
