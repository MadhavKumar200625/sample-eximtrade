'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
<section className="bg-gradient-to-br from-white via-blue-50 to-white pt-32 pb-8 px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
        {/* Left Image */}
        <div className="w-full">
          <img
            src="https://eximtradedata.com/images/our_services.webp"
            alt="Global Trade Analysis"
            className="w-full rounded-2xl shadow-xl object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Import Export Data Analysis <span className="text-blue-600">| Services</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Discover business opportunities from the global market with the world&apos;s leading import export data analysis company, <strong>Exim Trade Data</strong>.
            Our efficient business intelligence platform tracks global shipping activities and provides deep insights into the international supply chain.
          </p>
          <p className="text-gray-600 text-lg">
            Leverage our trade statistics and market access data to identify reliable suppliers and connect with high-quality sales prospects worldwide.
          </p>
          <Link href="/pricing" className="px-6 py-3 cursor-pointer text-white text-lg font-semibold rounded-xl bg-gradient-to-r from-[#4F46E5] via-[#3B82F6] to-[#06B6D4] transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 hover:brightness-110 focus:outline-none">
  Try Exim GTIS
</Link>
        </div>
      </div>
    </section>
  )
}

export default Hero