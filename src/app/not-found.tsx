'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#0d0f17] text-white px-6 text-center">
      <h1 className="text-7xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-transparent bg-clip-text mb-6">
        404
      </h1>
      <p className="text-lg text-gray-300 mb-4">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 mt-4 px-5 py-2 border border-pink-500 text-pink-400 hover:text-white hover:border-white rounded-full transition-all duration-300"
      >
        <ArrowLeft className="w-4 h-4" />
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
