import React from 'react'
import Link from 'next/link'

const ContactQuestion = () => {
  return (
<section className="bg-gradient-to-b from-blue-200 via-sky-100   to-sky-50 py-20 px-6 sm:px-10 lg:px-24">
  <div className="max-w-7xl mx-auto text-center space-y-6">
    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800">
      Need Industry Specific Insights?
    </h2>
    <p className="max-w-3xl mx-auto text-base sm:text-lg text-gray-600">
      Get an edge over your competitors with industry driven insights. Gain the market knowledge of different industries and plan a comprehensive marketing strategy based on our impressive business intelligence reports.
    </p>

    <Link
      href="/contact"
      className="inline-flex items-center justify-center gap-2 text-white bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 transition-all px-6 py-3 rounded-full text-sm sm:text-base font-semibold shadow-lg hover:scale-105 duration-300"
    >
      Contact Us →
    </Link>
  </div>
</section>  )
}

export default ContactQuestion