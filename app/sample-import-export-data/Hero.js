import Link from 'next/link'
import React from 'react'


const Hero = () => {
  return (
    <section className="w-full bg-white text-black pb-14 pt-28 px-6">
      <div className=" mx-auto px-10 md:px-20 flex flex-col  space-y-4">
        
        

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl text-center font-bold leading-tight">
         Armenia Customs Data | Armenia Import Export Data 2023, 2024

        </h2>

        {/* Subheading */}
        <p className="text-lg text-center leading-relaxed">
          Find business opportunities from Armenia with valuable insights through historical and latest <strong>Armenia import export data</strong> 2023, 2024. Get accurate and verified information based on Armenia customs data. Identify yearwise Armenia imports and exports by HS code, country, product and access Armenia buyers list, Armenia suppliers list, ports volume reports. Plan an expert marketing strategy based on these insights and increase your sales. We offer the best economical market research platform and also, you can get a trade API access too.
        </p>

        {/* Extra Info - Italic Style */}
        <p className="italic text-center font-semibold text-black">
          Get free sample on latest Armenia trade statistics or schedule a demo
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