'use client';

import React, { useState } from 'react';

interface Props {
  onClose: () => void;
}

const HireMeModal: React.FC<Props> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '',
    timeframe: '',
    service: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (Object.values(formData).some(value => value.trim() === '')) {
      alert('Please fill in all fields');
      return;
    }
    console.log(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="relative bg-[#0f1115] w-full max-w-2xl p-6 sm:p-8 rounded-lg shadow-xl overflow-y-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
          aria-label="Close Modal"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold text-white mb-2 text-center">Hire Me</h2>
        <p className="text-sm text-gray-400 mb-6 text-center">
          Drop your request and I'll contact you back.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 text-white">
          {/* Full Name & Email */}
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="flex-1 p-3 rounded-md bg-[#1a1c23] border border-gray-700"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="flex-1 p-3 rounded-md bg-[#1a1c23] border border-gray-700"
            />
          </div>

          {/* Budget, Timeframe, Service Type */}
          <div className="flex flex-col md:flex-row gap-4 lg:gap-1">
            <input
              type="number"
              name="budget"
              placeholder="$ (USD)"
              value={formData.budget}
              onChange={handleChange}
              required
              className="flex-1 p-3 rounded-md bg-[#1a1c23] border border-gray-700"
            />
            <input
              type="text"
              name="timeframe"
              placeholder="e.g., 1 week"
              value={formData.timeframe}
              onChange={handleChange}
              required
              className="flex-1 p-3 rounded-md bg-[#1a1c23] border border-gray-700"
            />
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="flex-1 p-3 rounded-md bg-[#1a1c23] border border-gray-700"
            >
              <option value="">Service Type</option>
              <option value="Web Development">Web Development</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="AR Development">AR Development</option>
            </select>
          </div>

          {/* Message */}
          <textarea
            name="message"
            placeholder="Type your message here..."
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 h-28 rounded-md bg-[#1a1c23] border border-gray-700 resize-none"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-md hover:brightness-110 transition"
          >
            Submit
          </button>
        </form>

        <p className="text-xs text-gray-500 mt-4 text-center">
          This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
        </p>
      </div>
    </div>
  );
};

export default HireMeModal;
