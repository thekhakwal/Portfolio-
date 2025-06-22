import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center text-gray-500 text-sm py-4 bg-[#0d0f17] border-t border-gray-800">
      © {new Date().getFullYear()} Komal Kharkwal. All rights reserved.
    </footer>
  );
};

export default Footer;
