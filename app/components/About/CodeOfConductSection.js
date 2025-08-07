import React from 'react'

const CodeOfConductSection = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-white via-gray-50 to-blue-100">
  <div className="mx-8 px-6 md:px-10 lg:px-16 flex flex-col lg:flex-row items-center gap-12">
    
    {/* Left Image */}
    <div className="w-full lg:w-1/3">
      <img
        src="https://eximtradedata.com/images/code_of_conduct.svg"
        alt="Code of Conduct"
        className="shadow-2xl w-full object-cover"
      />
    </div>

    {/* Right Text Content */}
    <div className="w-full lg:w-2/3 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Our Code of Conduct</h2>
      <p className="text-black mb-4 leading-relaxed">
        Exim Trade Data is highly specialized in providing <strong>export-import data analysis services</strong> and serves the highest aspirations of our customers and their business requirements.
      </p>
      <p className="text-black mb-4 leading-relaxed">
        Our primary objective is to meet the expectations set by our customers. To ensure trust and confidence, we strongly believe in maintaining a fair and transparent process in all matters that may affect the interest of our customers.
      </p>
      <p className="text-black mb-6 leading-relaxed">
        <strong>Exim trade data</strong> leaves no stone unturned in carrying out data analysis research and data mining to uphold our authentic code of conduct.
      </p>
      <blockquote className="italic text-blue-600 font-semibold text-lg border-l-4 border-blue-600 pl-4">
        “Honesty is integrated in the soul of our company value and professional conduct.“
      </blockquote>
    </div>
  </div>
</section>
  )
}

export default CodeOfConductSection