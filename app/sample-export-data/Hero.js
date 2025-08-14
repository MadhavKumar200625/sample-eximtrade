import React from 'react'

const Hero = () => {
  return (
    <section className="w-full bg-white text-black pb-14 pt-28 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-start space-y-6">
        
        {/* Top Text */}
        <p className="uppercase tracking-wider text-md font-semibold text-black">
          Armenia Export Data
        </p>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          Get Latest Armenia Export Customs Shipment Trade Data
        </h2>

        {/* Subheading */}
        <p className="text-lg leading-relaxed">
          <strong>Armenia export data</strong> depicts rapid growth in the country&apos;s overall exports this year. 
          Past year export data of Armenia suggests the country&apos;s total exports to be valued around $5.3B in FY 2022. 
          Nuclear reactors, vehicles and Electrical machinery were responsible for the maximum product wise Armenia exports. 
          Germany and Italy accounted for the most volume for Armenia exports by country. Armenia export companies can gain quality leads 
          through global market intelligence reports.
        </p>

        {/* Extra Info - Italic Style */}
        <p className="italic text-gray-700">
          Get historical or latest Armenia export data 2023, product wise Armenia export statistics, 
          Armenia exporters list, global buyers & suppliers list and port volume reports.
        </p>

        {/* Space for Buttons */}
        <div className="flex justify-center gap-4 mb-12">
        <button className="bg-blue-600 text-lg text-white px-6 py-2  shadow cursor-pointer hover:scale-105 transition">
          Online Data
        </button>
        <button className="bg-white border-blue-600 border text-lg text-black px-6 py-2  shadow cursor-pointer hover:scale-105 transition">
          Offline Data
        </button>
      </div>
      </div>
    </section>
  )
}

export default Hero