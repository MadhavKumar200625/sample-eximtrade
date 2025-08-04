"use client";
import { useState } from "react";
import Link from "next/link";

export default function Hero() {
  const [currency, setCurrency] = useState("INR");

  const plans = [
    {
      name: "Starter",
      description:
        "Highly Recommended for beginners. For Better Analysis & Comprehensive Market Research",
      inr: 4999,
      usd: 70,
      downloads: "5,000",
      validity: "6 Months",
    },
    {
      name: "Basic",
      description:
        "Get More Searches, More Downloads, & More Control With The Basic Plan",
      inr: 9999,
      usd: 140,
      downloads: "10,000",
      validity: "12 Months",
    },
    {
      name: "Plus",
      description:
        "Explore Emerging Markets, Trends, Opportunities And Get More Download Limit",
      inr: 19999,
      usd: 300,
      downloads: "30,000",
      validity: "24 Months",
    },
    {
      name: "Premium",
      description:
        "Access detailed trade information By Product, Country, & Ports With Premium Plan",
      inr: 29999,
      usd: 350,
      downloads: "50,000",
      validity: "30 Months",
    },
  ];

  return (
<section className="pb-20 pt-32 bg-gradient-to-tl from-blue-50 via-sky-100 to-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
    Welcome to the World&apos;s Largest <br />
    <span className="bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-500 bg-clip-text text-transparent">
      Global Trade Analysis
    </span>
  </h2>
  <h3 className="text-xl md:text-2xl font-semibold text-blue-600 mb-4">
    Import Export Trade Analysis
  </h3>
  <p className="text-gray-600 text-base md:text-lg">
    With the latest updated import export trade analysis, expand your reach to the most diverse markets. <br />
    Drive high-quality ROI leads from all over the globe.
  </p>
        {/* Currency Toggle */}
        <div className="flex justify-center mb-10">
          <div className="flex border rounded-full bg-gray-100">
            <button
              onClick={() => setCurrency("INR")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                currency === "INR"
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              INR
            </button>
            <button
              onClick={() => setCurrency("USD")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                currency === "USD"
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              USD
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition bg-white text-black font-bold flex flex-col"
            >
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{plan.description}</p>

              <div className="text-3xl font-bold text-blue-600 mb-4">
                {currency === "INR"
                  ? `₹${plan.inr}`
                  : `$${plan.usd}`}
              </div>

              <ul className="text-sm text-gray-700 space-y-2 flex-1">
                <li>✔️ Full Data Search</li>
                <li>✔️ {plan.downloads} Download Credits</li>
                <li>✔️ {plan.validity} Validity</li>
              </ul>

              <Link
  href="/import-export-data-country-wise"
  className="inline-block mt-6 mx-auto bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-500 text-white font-semibold px-6 py-3 rounded-3xl shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1 duration-300"
>
  Explore More 
</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}