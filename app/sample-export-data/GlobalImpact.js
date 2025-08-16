"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const GlobalImpact = () => {
  const points = [
    "Explore 200+ markets",
    "Gain edge with market trends",
    "Track your competitor shipments",
    "Find verified international buyers",
    "Get quality business leads",
    "Reduce cost & raise your ROI",
  ];

  return (
    <section className="px-6 sm:px-10 lg:px-16 py-12 bg-gray-100">
      <div className="container mx-auto grid lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Image */}
        <div className="flex justify-center">
          <div className="w-full max-w-sm">
            <Image
              src="https://eximtradedata.com/images/dash_image.png"
              alt="Global Trade Intelligence"
              width={500}
              height={500}
              className="rounded-lg shadow-md object-contain w-full h-auto"
            />
          </div>
        </div>

        {/* Right Content */}
        <div>
          <p className="text-sm font-semibold text-sky-600 uppercase tracking-wider mb-2">
            Exim Global Trade Intelligence System
          </p>
          <h2 className="text-3xl font-bold text-black mb-6">
            Make an impact in the global market
          </h2>

          {/* Points List */}
          <ul className="mb-8 space-y-3">
            {points.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-sky-500 mt-2 shrink-0"></span>
                <span className="text-black">{item}</span>
              </li>
            ))}
          </ul>

          {/* CTA Placeholder */}
          <div>
            <div className="flex md:justify-start md:ml-4 ml-0 justify-center ">
              <Link
                href="/pricing"
                className="bg-blue-600 text-lg text-white px-6 py-2 flex items-center justify-center shadow cursor-pointer hover:scale-105 transition"
              >
                Get Free Trial
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
}

export default GlobalImpact