import React from 'react'

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-32 grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
  {/* Left Side: Heading */}
  <div>
    <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
      Helping <span className="text-blue-600 drop-shadow-md">Businesses</span> with Improved <br />Decision Making & Strategic Planning
    </h2>
  </div>

  {/* Right Side: Styled Paragraphs as Cards */}
  <div className="space-y-6">
    <div className="bg-white/50 backdrop-blur-sm border-l-4 border-blue-500 p-5 rounded-xl shadow-md hover:shadow-xl transition duration-300">
      <p className="text-gray-800 text-lg leading-relaxed">
        In business, it&apos;s all about building connections and sharing healthy business relationships.
        At <strong>Exim Trade Data</strong>, we believe in growing along with our customers.
        Customer Satisfaction is our utmost priority. That is why, we provide solutions that are crafted to our client&apos;s needs.
      </p>
    </div>

    <div className="border-l-8 border-blue-500 bg-white/40 backdrop-blur-sm p-5 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
      <p className="text-gray-800 text-lg leading-relaxed">
       Over the years, we have worked across all sectors and successfully delivered the result centric data solutions. We have served various businesses including retail, finance, academic, aerospace, construction, chemical, law firms etc.


      </p>
    </div>

    <div className="border-l-8 border-blue-500 bg-white/40 backdrop-blur-sm p-5 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
      <p className="text-gray-800 text-lg leading-relaxed">
        We are glad that we added value to their business by providing
        quality business reports. Our cost-effective business tool helped many <span className="text-blue-600 font-semibold">businesses</span>
        with global market research and driving more sales. We hope to build more connections in the future & contribute to their success.
      </p>
    </div>
  </div>
</section>
  )
}

export default Hero