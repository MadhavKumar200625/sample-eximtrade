import React from 'react'

const ExclusiveFeatures = () => {
  return (
    <section className=" bg-white py-20 px-4">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-12">
      Some Exclusive Features of our Global Trade Database
    </h2>

    <div className="grid md:grid-cols-3 gap-8">
      {/* Card 1 */}
      <div className="rounded-3xl shadow-xl p-8 text-left bg-gradient-to-br from-[#f9f9ff] to-[#e6f0ff] border border-blue-100">
        <h3 className="text-xl font-semibold text-blue-800 mb-4">Analyze Your Product Demand</h3>
        <ul className="space-y-3 text-left text-blue-900">
          <li className="flex items-start gap-2">
            <span className="text-blue-600 text-lg">➤</span> Real-time shipment records
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 text-lg">➤</span> Global Products List
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 text-lg">➤</span> Potential Buyers List
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 text-lg">➤</span> Global Suppliers Data
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 text-lg">➤</span> Most traded HS Codes
          </li>
        </ul>
      </div>

      {/* Card 2 */}
      <div className="rounded-3xl shadow-xl p-8 text-left bg-gradient-to-br from-[#fff8f5] to-[#ffeae0] border border-orange-100">
        <h3 className="text-xl font-semibold text-blue-800 mb-4">Empower Your Research With</h3>
        <ul className="space-y-3 text-left text-blue-900">
          <li className="flex items-start gap-2">
            <span className="text-blue-600 text-lg">✔</span> Global Trends Reports
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 text-lg">✔</span> Chapter Wise Reports
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 text-lg">✔</span> Product Specific Reports
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 text-lg">✔</span> Country Wise Data Records
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 text-lg">✔</span> Importer Exporter Nexus
          </li>
        </ul>
      </div>

      {/* Card 3 */}
      <div className="rounded-3xl shadow-xl p-8 text-left bg-gradient-to-br from-[#f5fff9] to-[#e0ffee] border border-green-100">
        <h3 className="text-xl font-semibold text-blue-800 mb-4">Find Quality Business Leads With</h3>
        <ul className="space-y-3 text-left text-blue-900">
          <li className="flex items-start gap-2">
            <span className="text-blue-600 text-lg">★</span> Buyers Dashboard
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 text-lg">★</span> Exporters Directory
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 text-lg">★</span> Contact Information
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 text-lg">★</span> Global Company Profiles
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 text-lg">★</span> Importers Exporters Tree
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
  )
}

export default ExclusiveFeatures