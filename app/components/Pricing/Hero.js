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
      gradient: "from-orange-400 to-yellow-400",
      icon: "🌐",
    },
    {
      name: "Basic",
      description:
        "More Searches, More Downloads, & More Control With the Basic Plan.",
      inr: 9999,
      usd: 140,
      downloads: "10,000",
      validity: "12 Months",
      gradient: "from-red-500 to-orange-400",
      icon: "💼",
    },
    {
      name: "Plus",
      description:
        "Explore Emerging Markets, Trends, & Get More Download Credits.",
      inr: 19999,
      usd: 300,
      downloads: "30,000",
      validity: "24 Months",
      gradient: "from-purple-500 to-indigo-500",
      icon: "🏆",
    },
    {
      name: "Premium",
      description:
        "Access Detailed Trade Info by Product, Country, & Ports.",
      inr: 29999,
      usd: 350,
      downloads: "50,000",
      validity: "30 Months",
      gradient: "from-cyan-400 to-blue-500",
      icon: "💎",
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
        >
          {/* Top gradient header */}
          <div
            className={`bg-gradient-to-r ${plan.gradient} p-6 flex flex-col items-center text-white`}
          >
            <div className="w-14 h-14 flex items-center justify-center text-3xl bg-white/20 rounded-full mb-3">
              {plan.icon}
            </div>
            <div className="text-3xl font-bold">
              {currency === "INR" ? `₹${plan.inr}` : `$${plan.usd}`}
            </div>
            <div className="text-sm opacity-80">Per plan</div>
          </div>

          {/* Body */}
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-lg font-bold mb-2">{plan.name}</h3>
            <p className="text-sm text-gray-600 mb-4">{plan.description}</p>
            <ul className="space-y-2 text-sm mb-6 flex-1">
              <li>✔️ Full Data Search</li>
              <li>✔️ {plan.downloads} Download Credits</li>
              <li>✔️ {plan.validity} Validity</li>
            </ul>
            <Link
              href="/import-export-data-country-wise"
              className="block text-center py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              Explore More →
            </Link>
          </div>
        </div>
      ))}
    </div>
      </div>
    </section>
  );
}