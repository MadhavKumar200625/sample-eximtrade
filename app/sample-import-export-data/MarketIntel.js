"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const sampleImportData = {
  countries: [
    { name: "Russia", qty: 4120_000_000 },
    { name: "China", qty: 2820_000_000 },
    { name: "Iran", qty: 596_000_000 },
    { name: "Germany", qty: 402_000_000 },
    { name: "USA", qty: 358_000_000 },
  ],
  products: [
    { name: "Mineral fuels", qty: 2260_000_000 },
    { name: "Electrical machinery", qty: 862_000_000 },
    { name: "Nuclear reactors", qty: 848_000_000 },
    { name: "Vehicles", qty: 817_000_000 },
    { name: "Natural or cultured", qty: 692_000_000 },
  ],
  buyers: [
    { name: "NAKOIL LUBRICANTS TRADING ENTERPRISE LTD" },
    { name: "FORTE MUSICAL CENTER Co.Ltd" },
    { name: "CLIMATECHNIK Limited Liability Company (LLC)" },
  ],
};

const sampleExportData = {
  countries: [
    { name: "Russia", qty: 4000_000_000 },
    { name: "United Arab", qty: 535_000_000 },
    { name: "China", qty: 372_000_000 },
    { name: "Switzerland", qty: 256_000_000 },
    { name: "Iraq", qty: 246_000_000 },
  ],
  products: [
    { name: "Natural or cultured", qty: 991_000_000 },
    { name: "Ores, slag", qty: 924_000_000 },
    { name: "Electrical machinery", qty: 509_000_000 },
    { name: "Beverages, spirits", qty: 357_000_000 },
    { name: "Tobacco", qty: 341_000_000 },
  ],
  suppliers: [
    { name: "VICTORIA CONCERN Co.Ltd" },
    { name: "Geoteam ZAO" },
    { name: "Astra JV CJSC" },
    { name: "ALEKSANDRAPOL BREWERY" },
  ],
};

const MarketIntel = () => {
  const [activeTab, setActiveTab] = useState("import");

  const renderTable = (data, type) => (
    <div className="grid gap-8 md:grid-cols-3">
      {/* Top Country */}
      <div className="bg-white shadow-md border border-gray-200 p-6 rounded-xl">
        <h3 className="text-lg font-semibold ">
          Top Country
        </h3>
        <h3 className="text-lg  mb-4">
          {type === "import" ? "Top Imports of Armenia by Country" : "Top Exports of Armenia by Country"}
        </h3>
        <table className="w-full text-left text-black">
          <thead className="border-b">
            <tr>
              <th className="py-2">Country</th>
              <th className="py-2">Value</th>
            </tr>
          </thead>
          <tbody>
            {data.countries.map((item, idx) => (
              <tr key={idx} className="border-b last:border-0">
                <td className="py-2">{item.name}</td>
                <td className="py-2">${(item.qty / 1_000_000_000).toFixed(2)}B</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Top Product */}
      <div className="bg-white shadow-md border border-gray-200 p-6 rounded-xl">

        <h3 className="text-xl font-semibold ">
          Top Product
        </h3>

        <h3 className="text-lg  mb-4">
          {type === "import" ? "Top Imports of Armenia by Product" : "Top Exports of Armenia by Product"}
        </h3>
        <table className="w-full text-left text-black">
          <thead className="border-b">
            <tr>
              <th className="py-2">Product</th>
              <th className="py-2">Value</th>
            </tr>
          </thead>
          <tbody>
            {data.products.map((item, idx) => (
              <tr key={idx} className="border-b last:border-0">
                <td className="py-2">{item.name}</td>
                <td className="py-2">${(item.qty / 1_000_000_000).toFixed(2)}B</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Buyers / Suppliers */}
      <div className="bg-white shadow-md border border-gray-200 p-6 rounded-xl">
        <h3 className="text-xl font-semibold ">
          {type === "import" ? "Armenia Buyers List" : "Armenia Suppliers List"}
        </h3>
        <h3 className="text-lg mb-4 ">
          {type === "import" ? "Top Armenia Import Companies" : "Top Armenia Export Companies"}
        </h3>
        <table className="w-full text-left text-black">
          <thead className="border-b">
            <tr>
              <th className="py-2">{type === "import" ? "Buyer" : "Supplier"}</th>
            </tr>
          </thead>
          <tbody>
            {(type === "import" ? data.buyers : data.suppliers).map((item, idx) => (
              <tr key={idx} className="border-b last:border-0">
                <td className="py-2">{item.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <section className="bg-gray-50 py-16 relative">
      <div className="container mx-auto px-6">
        {/* Top Text */}
        <motion.h1
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="text-3xl md:text-4xl font-bold text-black text-center mb-4"
>
  Armenia Import Export Data 2023-24
</motion.h1>

{/* Subheading */}
<motion.p
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="text-lg md:text-xl font-medium text-black text-center mb-10"
>
  If you are looking to extend your business in or outside Armenia, then our Exim Global Trade Intelligence System could help your business. Through Exim GTIS, you can identify Armenia market demand, Armenia import and export data, top Armenia import export companies, ports volume, competitors, etc. It will help you get a better analysis of the Armenia market and can drive quality leads. Below, we have shared an overview of Armenia export and import data report for FY 2023-24.
</motion.p>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-10">
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

        {/* Content */}
        {activeTab === "import"
          ? renderTable(sampleImportData, "import")
          : renderTable(sampleExportData, "export")}
      </div>
    </section>
  );
};

export default MarketIntel;