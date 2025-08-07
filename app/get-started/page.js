import React from 'react';

const Page = () => {
  return (
    <div className="bg-gradient-to-br from-[#e8f0ff] to-[#f4fafe] px-6 pb-10 pt-24 md:px-12 min-h-screen overflow-auto">
      {/* Heading Section */}
      <div className="text-center max-w-4xl mx-auto mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-black">
          Exim Global Trade Intelligence System
        </h1>
        <h2 className="mt-4 text-base sm:text-lg md:text-xl text-black font-medium">
          World&apos;s largest <span className="text-blue-600 font-semibold">global trade database</span>. Connect with millions of international <span className="text-blue-600 font-semibold">buyers and suppliers</span> in one go.
        </h2>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
        {/* Form Section */}
        <div className="bg-white shadow-xl  p-6 sm:p-8 md:p-10 border border-blue-100 overflow-y-auto max-h-[75vh]">
          <h2 className="text-xl md:text-2xl font-semibold text-black mb-6">
            Get Started With Exim GTIS Platform
          </h2>

          <form className="space-y-5">
            {/* Name + Company */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-black mb-1">Customer Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-1">Company Name</label>
                <input
                  type="text"
                  placeholder="Company Inc."
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-black mb-1">Phone Number</label>
              <div className="flex">
                <select className="border border-gray-300 rounded-l-lg px-3 py-2 bg-gray-50 text-sm focus:outline-none">
                  <option value="+91">🇮🇳 +91</option>
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+44">🇬🇧 +44</option>
                </select>
                <input
                  type="tel"
                  placeholder="9876543210"
                  className="w-full border-t border-b border-r border-gray-300 rounded-r-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-black mb-1">Email ID</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Requirement */}
            <div>
              <label className="block text-sm font-medium text-black mb-1">Requirement</label>
              <textarea
                rows={2}
                placeholder="Briefly describe what you need"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3  shadow-md hover:shadow-lg transform hover:scale-105 transition duration-200"
            >
              Get Started
            </button>
          </form>
        </div>

        {/* Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="https://eximtradedata.com/images/exim_data.png"
            alt="Global Trade"
            className="w-full max-w-[500px] h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;