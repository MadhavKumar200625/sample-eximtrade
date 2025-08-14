'use client';

import { useState } from "react";
import { ChevronDown, Send } from "lucide-react";
import { countries } from "@/app/data";
import Image from "next/image";

export default function ContactUs() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  return (
    <section className="w-full px-4 py-16 bg-slate-100">
      <div className="max-w-5xl mx-auto  bg-white  shadow-lg p-8 md:p-12">
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-10 ">
          Contact Us
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Your Name */}
          <div>
            <label className="block text-sm font-medium text-black mb-1">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#0067b8] outline-none"
            />
          </div>

          {/* Company Name */}
          <div>
            <label className="block text-sm font-medium text-black mb-1">Company Name</label>
            <input
              type="text"
              placeholder="Enter company name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#0067b8] outline-none"
            />
          </div>

          {/* Country Dropdown */}
          <div>
            <label className="block text-sm font-medium text-black mb-1">Select Country</label>
            <div className="relative">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setShowDropdown(!showDropdown);
                }}
                className="w-full border border-gray-300 rounded-md px-4 py-2 flex items-center justify-between text-black bg-white focus:ring-2 focus:ring-[#0067b8]"
              >
                {selectedCountry || "Select Country"}
                <ChevronDown size={18} />
              </button>

              {showDropdown && (
                <div className="absolute z-10 -right-20  mt-2 w-[150%] max-h-60 overflow-y-scroll border border-gray-200 bg-white shadow-lg rounded-md grid grid-cols-2 md:grid-cols-3 gap-2 p-3">
                  {Object.entries(countries).map(([country, flag], index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-2 rounded cursor-pointer hover:bg-gray-100 text-sm"
                      onClick={() => {
                        setSelectedCountry(country);
                        setShowDropdown(false);
                      }}
                    >
                     <Image
                                             src={flag}
                                             height={10}
                                             width={10}
                                             alt={country}
                                           ></Image>
                      <span>{country}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Message */}
          <div className="md:col-span-3">
            <label className="block text-sm font-medium text-black mb-1">Message</label>
            <textarea
              rows={4}
              placeholder="Write your message..."
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#0067b8] outline-none resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-3 flex justify-center mt-4">
            <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 cursor-pointer hover:scale-105 text-white   transition-all duration-200">
              <Send size={18} />
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}