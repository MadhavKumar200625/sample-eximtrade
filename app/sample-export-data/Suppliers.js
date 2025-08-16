"use client";
import Image from "next/image";
import React from "react";

const Suppliers = () => {
  const exporters = [
    "VICTORIA CONCERN Co.Ltd",
    "Geoteam ZAO",
    "Astra JV CJSC",
    "ALEKSANDRAPOL BREWERY",
    "SPS CIGARONNE Limited Liability Company (LLC)",
    "Wurth OOO",
    "ARMEN-HAMIK EGHBAYRNER Joint Venture, Limited Liability Company",
    "Astra JV CJSC",
    "VICTORIA CONCERN Co.Ltd",
    "NO information",
  ];

  return (
    <section className="px-6 sm:px-10 lg:px-16 py-12 bg-slate-100">
      <div className="container mx-auto grid lg:grid-cols-3 gap-10 items-center">
        
        {/* Left Column */}
        <div className="lg:col-span-2">
          <p className="text-sm font-semibold text-sky-600 uppercase tracking-wider mb-2">
            Top Exporters in Armenia
          </p>
          <h2 className="text-3xl font-bold text-black mb-6">
            Armenia Suppliers List
          </h2>

          {/* Exporters List */}
          <ul className="mb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3">
            {exporters.map((name, idx) => (
              <li key={idx} className="text-black flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-500 mt-2 shrink-0"></span>
                <span>{name}</span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="flex justify-start">
            <button className="bg-blue-600 text-lg text-white px-6 py-2  flex items-center justify-center shadow hover:scale-105 transition-transform">
              Get Foreign Buyers Details
            </button>
          </div>
        </div>

        {/* Right Column (Image) */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-xs sm:max-w-sm">
            <Image
              src="https://eximtradedata.com/images/port-card.webp"
              alt="Exporters"
              width={500}
              height={600}
              className="rounded-lg shadow-md object-contain w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Suppliers;