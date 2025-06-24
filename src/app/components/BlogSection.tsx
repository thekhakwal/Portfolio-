'use client';

import React, { useEffect, useState } from 'react';

interface BlogPost {
  title: string;
  description: string;
  image: string;
  link: string;
}

const BlogSection = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetch('/Asset/Data.json')
      .then(res => res.json())
      .then(data => setBlogs(data.blogs));
  }, []);

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
            className="group relative rounded-xl overflow-hidden shadow-lg transition duration-500 hover:shadow-[0_0_25px_rgba(236,72,153,0.3),0_0_10px_rgba(6,182,212,0.2)]"
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
