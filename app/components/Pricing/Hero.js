"use client";
import { useState } from "react";
import Link from "next/link";

export default function Hero() {
  const [currency, setCurrency] = useState("INR");

  const plans = [
    {
      name: "Starter",
      description:
        "Highly Recommended for Beginners. For Better Analysis & Market Research.",
      inr: 4999,
      usd: 70,
      downloads: "5,000",
      validity: "6 Months",
    },
    {
      name: "Basic",
      description:
        "More Searches, More Downloads, & More Control With the Basic Plan.",
      inr: 9999,
      usd: 140,
      downloads: "10,000",
      validity: "12 Months",
    },
    {
      name: "Plus",
      description:
        "Explore Emerging Markets, Trends, & Get More Download Credits.",
      inr: 19999,
      usd: 300,
      downloads: "30,000",
      validity: "24 Months",
    },
    {
      name: "Premium",
      description:
        "Access Detailed Trade Info by Product, Country, & Ports.",
      inr: 29999,
      usd: 350,
      downloads: "50,000",
      validity: "30 Months",
    },
  ];

  return (
    <section id="pricing_section" className="pt-28 pb-24 bg-gradient-to-t from-white to-blue-50 text-black">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Welcome to the World&apos;s Largest <br />
            <span className="text-blue-600 drop-shadow-lg">Global Trade Analysis</span>
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-black mb-4 tracking-wide">
            Import Export Trade Analysis That Delivers Results
          </h3>
          <p className="text-lg max-w-3xl mx-auto font-medium">
            Expand your reach to the most diverse markets with our updated data platform. <br />
            Drive <span className="text-blue-600 font-semibold">high-quality ROI</span> leads from all over the globe.
          </p>
        </div>

        {/* Currency Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex border-2 border-blue-600 cursor-pointer rounded-full overflow-hidden shadow-lg">
            <button
              onClick={() => setCurrency("INR")}
              className={`px-6 py-2 font-semibold transition  cursor-pointer ${
                currency === "INR" ? "bg-blue-600 text-white" : "bg-white text-black hover:bg-blue-100"
              }`}
            >
              INR
            </button>
            <button
              onClick={() => setCurrency("USD")}
              className={`px-6 py-2 font-semibold transition  cursor-pointer ${
                currency === "USD" ? "bg-blue-600 text-white" : "bg-white text-black hover:bg-blue-100"
              }`}
            >
              USD
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        {/* Pricing Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
  {plans.map((plan, i) => {
    const bgColors = ['#fff8f5', '#f0faff', '#fefce8', '#f3e8ff'];

    return (
      <div
        key={plan.name}
        className={`rounded-2xl p-6 shadow-lg transition-transform duration-300 hover:-translate-y-1 border-2 ${
          
            'text-black'
        }`}
        style={{ backgroundColor: bgColors[i] }}
      >
        <h3 className="text-2xl font-bold mb-3">{plan.name}</h3>
        <p className={`text-sm mb-5 font-medium text-ellipsis line-clamp-2 ${ 'text-black'}`}>
          {plan.description}
        </p>

        <div className={`text-4xl font-extrabold mb-6 ${'text-blue-700'}`}>
          {currency === "INR" ? `₹${plan.inr}` : `$${plan.usd}`}
        </div>

        <ul className={`text-sm space-y-2 mb-6 font-medium ${ 'text-black'}`}>
          <li>✔️ Full Data Search</li>
          <li>✔️ {plan.downloads} Download Credits</li>
          <li>✔️ {plan.validity} Validity</li>
        </ul>

        <Link
          href="/import-export-data-country-wise"
          className={`mt-auto inline-block w-full text-center font-semibold px-5 py-2 rounded-lg transition-all duration-300 ${
            
               'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          Explore More →
        </Link>
      </div>
    );
  })}
</div>
      </div>
    </section>
  );
}