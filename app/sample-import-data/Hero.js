import Link from 'next/link'
import React from 'react'


const Hero = () => {
  return (
    <section className="w-full bg-white text-black pb-14 pt-28 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-start space-y-6">
        
        {/* Top Text */}
        <p className="uppercase tracking-wider text-md font-semibold text-black">
          Armenia Import Data
        </p>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
         Get Latest Armenia Import Customs Shipment Trade Data
        </h2>

        {/* Subheading */}
        <p className="text-lg leading-relaxed">
          <strong>Armenia import data</strong> shows that the overall Armenia imports declined this year. Armenia total import value was around $8.63B billion during FY 2024. Germany and Belgium were responsible for the maximum Armenia imports by country. During this period, Armenia most prominent imports were mineral fuels, nuclear reactors, vehicles and Electrical machinery, equipment. Armenia is a very niche market for worldwide exporters. Through expert market intelligence, global suppliers can find genuine Armenia buyers and increase their sales.
        </p>

        {/* Extra Info - Italic Style */}
        <p className="italic text-gray-700">
         Find historical or latest Armenia import data 2023, Armenia importers list, product/industry wise Armenia import statistics and ports volume reports.
        </p>

        {/* Space for Buttons */}
        <div className="flex justify-center gap-4 mb-12">
        <Link href="/pricing" className="bg-blue-600 text-lg text-white px-6 py-2  shadow cursor-pointer hover:scale-105 transition">
          Online Data
        </Link>
        <Link href="/contact" className="bg-white border-blue-600 border text-lg text-black px-6 py-2  shadow cursor-pointer hover:scale-105 transition">
          Offline Data
        </Link>
      </div>
      </div>
    </section>
  )
}

export default Hero