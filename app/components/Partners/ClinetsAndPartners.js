import React from 'react'

const ClinetsAndPartners = () => {
  return (
    <section className="bg-gradient-to-br from-blue-100 via-sky-100 to-sky-50 py-16 px-4 sm:px-10 lg:px-20">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
    
    {/* Left Text Content */}
    <div className="space-y-6 lg:text-left text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 leading-tight">
        We are looking for more reputed and trusted
        import export data providers across the globe.
      </h2>
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 leading-tight">
        We believe in growing together with our<br />
        clients and partners.
      </h2>
    </div>

    {/* Right Image */}
    <div className="relative w-full h-72 sm:h-96 rounded-3xl bg-white lg:h-full">
      <img
        src="https://eximtradedata.com/images/partner-with-us.svg" // replace with your actual image path
        alt="Global Partnership"
        className="w-full h-80 object-cover rounded-3xl shadow-xl"
      />
    </div>
    
  </div>
</section>
  )
}

export default ClinetsAndPartners