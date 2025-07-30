import React from 'react'
import Link from 'next/link'

const ImportExportSection = () => {
  return (
    <section className="w-full py-20 bg-white ">
  <div className="container mx-auto px-6 md:px-12 lg:px-20">
    <div className="max-w-5xl mx-auto text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-500">
        Get Valuable Import Export Data Statistics
      </h2>
      <p className="mt-4 text-gray-700  text-base md:text-lg">
        Identify business prospects from top trading countries by <strong>HS Code</strong>, Product Name, Description, Quantity, Value, Importer Name, Exporter Name, Port and Shipment Details. Get customised import export data reports and expand your business to the global market.
      </p>
    </div>
    <div className="flex justify-center">
      <Link href="/import-export-data-country-wise" className="px-6 py-3 text-white text-lg font-medium rounded-xl bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-500 transition-all duration-300 hover:from-sky-600 hover:to-indigo-600 hover:scale-105 shadow-md hover:shadow-lg focus:outline-none backdrop-blur-xl bg-opacity-70">
                Request Trade Data
              </Link>
    </div>
  </div>
</section>
  )
}

export default ImportExportSection