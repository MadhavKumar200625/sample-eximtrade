import React from 'react'

const page = () => {
  return (
    <div className="bg-gradient-to-br to-[#f4fafe] from-[#e8f0ff] px-6 pt-32 pb-12 md:px-12">
  {/* Main Headings */}
  <div className="text-center max-w-5xl mx-auto mb-8">
    <h1 className="text-3xl md:text-4xl font-bold text-black">
      Exim Global Trade Intelligence System
    </h1>
    <h2 className=" sm:text-lg md:text-xl font-medium mt-4 text-gray-700">
  World&apos;s largest <span className="font-semibold text-blue-600">global trade database</span>. Connect with millions of international <span className="font-semibold text-blue-600">buyers and suppliers</span> in one go
</h2>
  </div>

  {/* Content Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 max-w-6xl mx-auto">
    {/* Left Image */}
    <div>
      <img
        src="https://eximtradedata.com/images/exim_data.png"
        alt="Global Trade"
        className="w-full max-h-[450px] object-contain"
      />
    </div>

    {/* Right Form */}
    <div className="bg-white shadow-xl rounded-2xl p-8 md:p-10 border border-blue-100">
      <h2 className="text-xl md:text-2xl font-semibold text-black mb-6">
        Get Started With Exim GTIS Platform
      </h2>
      <form className="space-y-5">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Customer Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Company Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
          <input
            type="text"
            placeholder="Enter company name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Phone with Country Selector */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <div className="flex">
            <select className="border border-gray-300 rounded-l-lg px-3 py-2 bg-gray-50 text-sm focus:outline-none">
              <option value="+91">🇮🇳 +91</option>
              <option value="+1">🇺🇸 +1</option>
              <option value="+44">🇬🇧 +44</option>
              {/* Add your full country map list here */}
            </select>
            <input
              type="tel"
              placeholder="Phone number"
              className="w-full border-t border-b border-r border-gray-300 rounded-r-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email ID</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Requirement */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Requirement</label>
          <textarea
            rows={4}
            placeholder="Tell us your requirement"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          ></textarea>
        </div>

        {/* Submit */}
        <button
  type="submit"
  className="w-full bg-gradient-to-r from-blue-600 to-sky-600 hover:from-sky-600 hover:to-blue-600 text-white font-semibold py-3 rounded-2xl shadow-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 ease-in-out"
>
   Get Started
</button>
      </form>
    </div>
  </div>
</div>
  )
}

export default page