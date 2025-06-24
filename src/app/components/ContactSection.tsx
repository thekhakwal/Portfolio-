'use client';

import React, { useEffect, useState } from 'react';
import { Linkedin, Instagram } from 'lucide-react';

interface ContactData {
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  email: string;
  socials: {
    linkedin: string;
    instagram: string;
    github: string;
  };
}

const ContactSection = () => {
  const [data, setData] = useState<ContactData | null>(null);

  useEffect(() => {
    fetch('/Asset/Data.json')
      .then((res) => res.json())
      .then((json) => setData(json.contact));
  }, []);

  if (!data) return null;

  return (
    <section id="contact" className="relative py-20 px-6 text-white bg-[#0d0f17] overflow-hidden">
      {/* Background Blur Effects */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-purple-600 opacity-20 blur-[160px] rounded-full -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-pink-500 opacity-20 blur-[120px] rounded-full -z-10" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 relative z-10">
        {/* Left Side */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">
            <span className="text-pink-500">{data.titleLine1}</span><br />
            <span className="text-blue-400">{data.titleLine2}</span>
          </h2>
          <p className="text-lg font-light">{data.subtitle}</p>

          <div>
            <h4 className="text-gray-400 text-sm mb-1">CONTACT</h4>
            <a href={`mailto:${data.email}`} className="text-blue-400 hover:underline">
              {data.email}
            </a>
          </div>

          <div>
            <h4 className="text-gray-400 text-sm mb-2">SOCIAL MEDIA</h4>
            <div className="flex gap-4 text-gray-400 items-center">
              <a href={data.socials.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 hover:text-blue-500 transition" />
              </a>
              <a href={data.socials.instagram} target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 hover:text-pink-500 transition" />
              </a>
              <a href={data.socials.github} target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 fill-gray-400 hover:fill-white transition"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.11 3.29 9.45 7.86 10.99.58.11.79-.25.79-.56 0-.28-.01-1.03-.02-2.01-3.2.7-3.87-1.54-3.87-1.54-.53-1.35-1.3-1.71-1.3-1.71-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.21 1.79 1.21 1.04 1.78 2.73 1.26 3.4.97.11-.75.41-1.26.75-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.19-3.11-.12-.29-.52-1.45.11-3.02 0 0 .97-.31 3.18 1.18.92-.26 1.91-.39 2.89-.4.98.01 1.97.14 2.89.4 2.2-1.49 3.17-1.18 3.17-1.18.63 1.57.23 2.73.11 3.02.74.81 1.19 1.85 1.19 3.11 0 4.43-2.69 5.4-5.25 5.68.42.36.8 1.09.8 2.21 0 1.6-.01 2.89-.01 3.29 0 .31.21.68.8.56C20.72 21.47 24 17.13 24 12.02 24 5.74 18.77.5 12 .5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <form className="space-y-6">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 bg-transparent border border-gray-700 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-pink-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 bg-transparent border border-gray-700 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-pink-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea
              rows={4}
              className="w-full px-4 py-2 bg-transparent border border-gray-700 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-pink-500"
              placeholder="Type your message..."
            />
          </div>

          <div className="relative inline-block group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-300"></div>
            <button
              type="submit"
              className="relative px-6 py-2 text-sm font-semibold rounded-full border border-pink-500 bg-[#0d0f17] text-white hover:scale-105 transition"
            >
              SEND
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
