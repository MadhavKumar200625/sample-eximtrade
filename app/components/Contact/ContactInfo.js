"use client";

import { useState } from "react";
import { ChevronDown, Send } from "lucide-react";
import { countries } from "@/app/data";
import Image from "next/image";

const ContactInfo = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  return (
    <section className="relative z-10 pb-20 bg-slate-100 grid md:grid-cols-2 py-12 mt-10 px-4 gap-16 md:px-20 ">
      <div className="  grid md:grid-cols-1 gap-10">
        {/* Card 1: Support */}
        <div className="group bg-white/70 backdrop-blur-lg border border-gray-200  p-8 shadow-2xl hover:shadow-3xl transition-all duration-200 hover:-translate-y-2">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-14 w-14 bg-blue-100 text-blue-600 text-2xl flex items-center justify-center ">
              📞
            </div>
            <h2 className="text-2xl font-bold text-black">Support Enquiry</h2>
          </div>
          <div className="space-y-5 text-black text-base">
            <div className="flex gap-3">
              <span className="text-xl">📱</span>
              <div>
                <p className="font-semibold">Phone</p>
                <a
                  href="tel:+919876543210"
                  className="text-blue-600 hover:underline"
                >
                  +91 96258 12393
                </a>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="text-xl">✉️</span>
              <div>
                <p className="font-semibold">Email</p>
                <a
                  href="mailto:support@yourdomain.com"
                  className="text-blue-600 hover:underline"
                >
                  info@eximtradedata.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Visit Us */}
        <div className="group bg-white/70 backdrop-blur-lg border border-gray-200  p-8 shadow-2xl hover:shadow-3xl transition-all duration-200 hover:-translate-y-1">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-14 w-14 bg-green-100 text-green-600 text-2xl flex items-center justify-center ">
              🏢
            </div>
            <h2 className="text-2xl font-bold text-black">Reach Us</h2>
          </div>
          <div className="space-y-5 text-black text-base">
            <div className="flex gap-3">
              <span className="text-xl">📌</span>
              <div>
                <p className="font-semibold">Location</p>
                <p>G-232 , Noida Sector-63, Uttar Pradesh - 201301, India</p>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="text-xl">🕒</span>
              <div>
                <p className="font-semibold">Hours</p>
                <p>Monday - Friday: 9:00 am to 7:00 pm</p>
                <p>Saturday: 9:00 am to 5:00 pm</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto  bg-white  shadow-2xl hover:shadow-3xl p-8 md:p-12">
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-10 ">
          Contact Us
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Your Name */}
         <div>
    <label className="block text-sm font-medium text-black mb-1">Your Name</label>
    <input
      type="text"
      placeholder="Enter your name"
      className="w-full border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-[#0067b8] outline-none"
    />
  </div>

  {/* Company Name */}
  <div>
    <label className="block text-sm font-medium text-black mb-1">Company Name</label>
    <input
      type="text"
      placeholder="Enter company name"
      className="w-full border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-[#0067b8] outline-none"
    />
  </div>

  {/* Your Email */}
  <div>
    <label className="block text-sm font-medium text-black mb-1">Your Email</label>
    <input
      type="email"
      placeholder="Enter your email"
      className="w-full border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-[#0067b8] outline-none"
    />
  </div>

  {/* Your Mobile Number */}
  <div>
    <label className="block text-sm font-medium text-black mb-1">Your Mobile Number</label>
    <input
      type="tel"
      placeholder="Enter your mobile number"
      className="w-full border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-[#0067b8] outline-none"
    />
  </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-black mb-1">
              Select Country
            </label>
            <div className="relative">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setShowDropdown(!showDropdown);
                }}
                className="w-full border border-gray-300  px-4 py-2 flex items-center justify-between text-black bg-white focus:ring-2 focus:ring-[#0067b8]"
              >
                {selectedCountry || "Select Country"}
                <ChevronDown size={18} />
              </button>

              {showDropdown && (
                <div className="absolute right-0 z-10 mt-2 w-[500px] max-h-60 overflow-y-scroll border border-gray-200 bg-white shadow-lg  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-4">
                  {Object.entries(countries).map(([country, flag], index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-2  cursor-pointer hover:bg-gray-100 text-sm"
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
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-black mb-1">
              Message
            </label>
            <textarea
              rows={4}
              placeholder="Write your message..."
              className="w-full border border-gray-300  px-4 py-2 focus:ring-2 focus:ring-[#0067b8] outline-none resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-center mt-4">
            <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 cursor-pointer hover:scale-105 text-white   transition-all duration-200">
              <Send size={18} />
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactInfo;
