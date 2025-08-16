"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Buyers = () => {
  const exporters = [
    "NAKOIL LUBRICANTS TRADING ENTERPRISE LTD Liability",
    "FORTE MUSICAL CENTER Co.Ltd",
    "CLIMATECHNIK Limited Liability Company (LLC)",
    "AR-BE ARMENIAN-BELARUSIAN TRADING HOUSE",
    "VIOLET SHOWROOM",
    "TURVAND Co.Ltd",
    "ARGO-PHARM Co.Ltd",
    "AMV Limited Liability Company (LLC)",
    "ALFA-PHARM PHARMACY CHAIN",
    "VISHKA Limited Liability Company (LLC)",
  ];

  return (
    <section className="px-6 sm:px-10 lg:px-16 py-12 bg-slate-100">
      <div className="container mx-auto grid lg:grid-cols-3 gap-10 items-center">
        
        {/* Left Column */}
        <div className="lg:col-span-2">
          <p className="text-sm font-semibold text-sky-600 uppercase tracking-wider mb-2">
            Top Importers in Armenia

          </p>
          <h2 className="text-3xl font-bold text-black mb-6">
            Armenia Buyers List
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
              Get Global Buyers Details
            </button>
          </div>
        </div>

        {/* Right Column (Image) */}
        <div className="flex justify-center lg:justify-end">
          <Link href="/global-ports" className="w-full max-w-xs sm:max-w-sm">
          
            <Image
              src="https://eximtradedata.com/images/port-card.webp"
              alt="Exporters"
              width={500}
              height={600}
              className="rounded-lg shadow-md object-contain w-full h-auto"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Buyers;