'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Duration of the animation
      once: true,      // Ensure the animation only runs once
      offset: 100,     // Offset to trigger animation when elements are near the viewport
    });
  }, []);

  return <>{children}</>;
}
