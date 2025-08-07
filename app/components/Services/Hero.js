'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
<section className=" bg-white pt-32 pb-8 px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
        {/* Left Image */}
        <div className="w-full">
          <img
            src="https://eximtradedata.com/images/our_services.webp"
            alt="Global Trade Analysis"
            className="w-full  shadow-xl object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight">
            Import Export Data Analysis <span className="text-blue-600">| Services</span>
          </h2>
          <p className="text-black text-lg">
            Discover business opportunities from the global market with the world&apos;s leading import export data analysis company, <strong>Exim Trade Data</strong>.
            Our efficient business intelligence platform tracks global shipping activities and provides deep insights into the international supply chain.
          </p>
          <p className="text-black text-lg">
            Leverage our trade statistics and market access data to identify reliable suppliers and connect with high-quality sales prospects worldwide.
          </p>
          <Link href="/pricing" className="relative cursor-pointer inline-flex items-center justify-center text-lg px-6 py-2 overflow-hidden font-semibold text-white transition-all duration-300  bg-blue-600  hover:scale-105 ">
  Try Exim GTIS
</Link>
        </div>
      </div>
    </section>
  )
}

export default Hero