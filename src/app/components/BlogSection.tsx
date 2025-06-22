import React from 'react';

const blogs = [
  {
    title: 'How to Become a React Developer',
    description: 'In this article, we will cover the basics of becoming a React developer, including resources, tutorials, and tips for success.',
    image: 'https://via.placeholder.com/300x200?text=Blog+Image', // Placeholder image URL
    link: '/blog/how-to-become-a-react-developer',
  },
  {
    title: 'Understanding JavaScript Closures',
    description: 'JavaScript closures are an essential concept in JS. This article explores closures in-depth with code examples and use cases.',
    image: 'https://via.placeholder.com/300x200?text=Blog+Image', // Placeholder image URL
    link: '/blog/understanding-javascript-closures',
  },
  {
    title: 'Tailwind CSS: The Ultimate Guide',
    description: 'Tailwind CSS is a utility-first CSS framework. In this guide, we’ll cover how to use it effectively and how it improves workflow.',
    image: 'https://via.placeholder.com/300x200?text=Blog+Image', // Placeholder image URL
    link: '/blog/tailwind-css-guide',
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-16 px-6 text-white">
      <h2 className="text-3xl font-bold text-gradient mb-8">
        Latest Blog Posts
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="flex flex-col bg-[#1a1c23] p-6 rounded-lg shadow-lg transition-all hover:scale-105 duration-300 group"
          >
            {/* Blog Image */}
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover mb-4 rounded-md group-hover:opacity-80 transition-opacity duration-300"
            />
            {/* Blog Title */}
            <h3 className="text-xl font-semibold text-white mb-3">{blog.title}</h3>
            {/* Blog Description */}
            <p className="text-sm text-gray-400 mb-4">{blog.description}</p>
            {/* Read More Link */}
            <a
              href={blog.link}
              className="text-sm text-cyan-500 hover:underline"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
