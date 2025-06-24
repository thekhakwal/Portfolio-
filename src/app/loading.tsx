'use client';

import React from 'react';
import { Loader2 } from 'lucide-react';

const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#0d0f17] text-white">
      <div className="flex items-center gap-3 animate-pulse">
        <Loader2 className="w-8 h-8 text-pink-500 animate-spin" />
        <span className="text-xl font-semibold tracking-wide">
          Loading your experience...
        </span>
      </div>

      {/* Optional neon glow under text */}
      <div className="mt-4 w-32 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full animate-pulse" />
    </div>
  );
};

export default Loading;
