"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const DetailedTable = ({ companyName, importData, exportData }) => {
  const [activeTab, setActiveTab] = useState("import");

  const renderTable = (data) => (
    <div className="overflow-x-auto mt-6">
    <table className="w-full border border-gray-300 text-left text-black">
      <thead className="bg-gray-100 border-b">
        <tr>
          <th className="px-4 py-2 border-r w-1/3">Field Name</th>
          <th className="px-4 py-2">Detail</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(data).map(([field, value], idx) => (
          <tr
            key={idx}
            className="border-b last:border-0 hover:bg-gray-50 transition"
          >
            <td className="px-4 py-2 border-r font-medium">{field}</td>
            <td className="px-4 py-2">{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );

  return (
    <section className="bg-white py-16 relative">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold text-black text-center mb-10"
        >
        {companyName} Import and Export Shipment Sample Data
        </motion.h2>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab("import")}
            className={`px-6 py-2 font-medium rounded-lg border ${
              activeTab === "import"
                ? "bg-black text-white border-black"
                : "bg-white text-black border-gray-300 hover:bg-gray-100"
            }`}
          >
            Import
          </button>
          <button
            onClick={() => setActiveTab("export")}
            className={`px-6 py-2 font-medium rounded-lg border ${
              activeTab === "export"
                ? "bg-black text-white border-black"
                : "bg-white text-black border-gray-300 hover:bg-gray-100"
            }`}
          >
            Export
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {renderTable(importData)}
          {renderTable(exportData)}
        </div>

        {/* Table */}
        {/* {activeTab === "import" ? renderTable(importData) : renderTable(exportData)} */}

        
      </div>
    </section>
  );
};

export default DetailedTable;