"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';  // Updated import

const blogContent = {
  title: 'How to Become a React Developer',
  description:
    'In this article, we will cover the basics of becoming a React developer, including resources, tutorials, and tips for success.',
  image: 'https://via.placeholder.com/1200x800?text=React+Developer+Blog', // Replace with actual blog image
  content: `
    <h2>Introduction to React</h2>
    <p>React is one of the most popular JavaScript libraries for building user interfaces. It’s fast, flexible, and has a huge community. Here’s what you’ll need to get started.</p>
    <h3>Step 1: Learn JavaScript Basics</h3>
    <p>Before diving into React, it’s important to have a strong understanding of JavaScript fundamentals...</p>
    <h3>Step 2: Learn JSX</h3>
    <p>JSX is a syntax extension for JavaScript that looks similar to HTML. It’s used to describe what the UI should look like in React.</p>
    <h3>Step 3: Understanding Components</h3>
    <p>In React, everything is a component. Components are the building blocks of React applications...</p>
    <h3>Step 4: Advanced Topics</h3>
    <p>Once you’re comfortable with React basics, you can explore more advanced topics like state management, hooks, and context API.</p>
    <h2>Conclusion</h2>
    <p>By following these steps, you can start your journey to becoming a React developer. Happy coding!</p>
  `,
};

const BlogPage = () => {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();  // Now using useRouter from next/navigation

  // UseEffect to ensure useRouter() is called only on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Navigate back to the blog list
  const goBackToBlogList = () => {
    router.push('/#blog');  // Adjust this URL to your actual blog list section or page
  };

  // Ensure the code is run only on the client side
  if (!isClient) {
    return null;
  }

  return (
    <div className="py-16 px-6 text-white">
      <div className="max-w-3xl mx-auto">
        {/* Blog Image */}
        <img
          src={blogContent.image}
          alt={blogContent.title}
          className="w-full h-auto rounded-lg mb-6"
        />

        {/* Blog Title */}
        <h1 className="text-4xl font-bold text-gradient mb-4">{blogContent.title}</h1>

        {/* Blog Description */}
        <p className="text-lg text-gray-400 mb-8">{blogContent.description}</p>

        {/* Blog Content */}
        <div
          className="blog-content text-gray-300"
          dangerouslySetInnerHTML={{ __html: blogContent.content }}
        ></div>

        {/* Back to Blog List */}
        <button
          onClick={goBackToBlogList}
          className="mt-8 px-6 py-2 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full text-white text-sm transition-transform hover:scale-105"
        >
          Back to Blog List
        </button>
      </div>
    </div>
  );
};

export default BlogPage;
