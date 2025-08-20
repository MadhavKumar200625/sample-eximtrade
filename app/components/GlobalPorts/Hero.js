import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="w-full bg-white pt-32 pb-14 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        <div className="w-full">
          <img
            src="/global-ports/global-ports-data.webp"
            alt="Global Ports Data"
            className="w-full h-auto "
          />
        </div>
    
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">
            Global Ports Data
          </h2>
          <p className="text-lg text-zinc-700 leading-relaxed">
            Explore the global supply chain networks through our <span className="font-semibold text-blue-700">global ports data</span> reports. Find the total import export shipment volume, traded goods, value, quantity, import and export companies through our container ports data. Improve your market research with proper planning, coordination and scheduling of shipment activities. Search <span className="font-semibold text-blue-700">global ports data</span> by country through our port database. Also, you can download the shipment data of the world sea port list in Excel/PDF.
          </p>
    
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
      <Link
        href="/pricing"
className="relative overflow-hidden px-6 mx-1 py-3 bg-blue-600 cursor-pointer  text-white text-md hover:scale-105  transition-all    font-semibold shadow-xl group"      >
        Schedule a Demo
      </Link>
      <Link
        href="/api-development-and-integration-company">
        <button className="relative overflow-hidden px-6 mx-1 py-3 bg-blue-600 cursor-pointer text-white text-md hover:scale-105  transition-all    font-semibold shadow-xl group">
              Get API Access
                </button>
      </Link>
    </div>
        </div>
      </div>
    </section>
  )
}

export default Hero