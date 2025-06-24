// components/LoadingScreen.tsx
import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#0f1115] z-[9999]">
      <div className="flex flex-col items-center gap-4">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-pink-500"></div>
        <p className="text-white text-sm tracking-wide">Loading, please wait...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
