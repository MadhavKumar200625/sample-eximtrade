'use client'

import { useState } from "react";
import { ChevronDown, Send } from "lucide-react";
import { countries } from "@/app/data";

export default function ContactUs() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  return (
    <section className="relative w-full px-4 py-12 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-indigo-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-80px] right-[-80px] w-[200px] h-[200px] bg-purple-500 opacity-20 rounded-full blur-2xl animate-pulse"></div>

      <div className="max-w-6xl mx-auto backdrop-blur-md bg-white/10 text-white rounded-3xl shadow-2xl p-8 md:px-16  border border-white/20">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center drop-shadow-md">
          Contact Us
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeUp">
          {/* Your Name */}
          <div>
            <label className="block text-sm font-medium mb-2">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full rounded-xl bg-white/20 text-white placeholder-white/60 px-4 py-3 focus:ring-2 focus:ring-indigo-400 outline-none border border-white/20 shadow-sm"
            />
          </div>

          {/* Company Name */}
          <div>
            <label className="block text-sm font-medium mb-2">Company Name</label>
            <input
              type="text"
              placeholder="Enter company name"
              className="w-full rounded-xl bg-white/20 text-white placeholder-white/60 px-4 py-3 focus:ring-2 focus:ring-indigo-400 outline-none border border-white/20 shadow-sm"
            />
          </div>

          {/* Country Dropdown */}
          <div className="">
            <label className="block text-sm font-medium mb-2">Select Country</label>
            <div className="relative w-full">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setShowDropdown(!showDropdown);
                }}
                className="w-full rounded-xl bg-white/20 text-white px-4 py-3 border border-white/20 text-left flex items-center justify-between shadow-sm hover:shadow-md focus:ring-2 focus:ring-indigo-400"
              >
                {selectedCountry || "Select Country"}
                <ChevronDown size={18} />
              </button>

              {showDropdown && (
  <div className="absolute mt-2 left-0 z-10 bg-gray-500 text-white rounded-xl border border-gray-700 shadow-xl p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-h-80 overflow-y-scroll w-full transition-all duration-300 animate-slide-in-rtl">
    {Object.entries(countries).map(([country, flag], index) => (
      <div
        key={index}
        className="flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-indigo-600/20 transition-all"
        onClick={() => {
          setSelectedCountry(country);
          setShowDropdown(false);
        }}
      >
        <span className="text-xl">{flag}</span>
        <span className="text-sm">{country}</span>
      </div>
    ))}
  </div>
)}
            </div>
          </div>

          {/* Message */}
          <div className="md:col-span-3">
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              rows={3}
              placeholder="Write your message..."
              className="w-full rounded-xl bg-white/20 text-white placeholder-white/60 px-4 py-3 focus:ring-2 focus:ring-indigo-400 outline-none border border-white/20 shadow-sm resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-3 flex justify-center mt-4">
            <button className="relative inline-flex items-center gap-2 px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium shadow-xl hover:scale-105 transition-transform">
              <Send size={18} />
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}