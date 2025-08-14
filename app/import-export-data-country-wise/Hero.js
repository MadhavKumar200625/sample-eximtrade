'use client'
import React from 'react'
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
  { value: 134002002, label: "Global Shipments" },
  { value: 942542, label: "Global Verified Buyers" },
  { value: 802870, label: "Global Verified Suppliers" },
];

const Hero = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 2000; // animation duration in ms
    const frameRate = 10; // update every 30ms
    stats.forEach((stat, i) => {
      let current = 0;
      const increment = stat.value / (duration / frameRate);
      const interval = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          current = stat.value;
          clearInterval(interval);
        }
        setCounts(prev => {
          const newCounts = [...prev];
          newCounts[i] = Math.floor(current);
          return newCounts;
        });
      }, frameRate);
    });
  }, []);

  return (
    <section className="bg-gradient-to-b from-sky-100 via-sky-50 to-white pt-28 pb-12 px-6">
      {/* Top Text */}
      <p className="text-lg font-medium text-black text-center mb-2">
        Import Export Data of 200+ Countries
      </p>

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-4">
        Explore 200+ Markets with Exim GTIS Import Export Database
      </h2>

      {/* Sub Heading */}
      <p className="text-base text-black text-center max-w-4xl mx-auto mb-4">
        Find buyers from all around the world through our exclusive import export data reports.
        Our Exim Global Trade Intelligence System will help you find verified importers and exporters
        from over 200+ countries. Align your business model according to the latest market trends,
        price forecasts, product demand, industry wise insights and various KPI indicators provided
        in our platform. Explore top markets like China, USA, India, Turkey, Australia and European
        countries and find their top imports, exports, top trading markets, companies, ports volume.
      </p>

      {/* Italic Text */}
      <p className="italic text-black text-center mb-6">
        Request a sample trade data report or schedule a free demo to transform your business
      </p>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mb-12">
        <button className="bg-blue-600 text-xl text-white px-6 py-2  shadow cursor-pointer hover:scale-105 transition">
          Online Data
        </button>
        <button className="bg-green-600 text-xl text-white px-6 py-2  shadow cursor-pointer hover:scale-105 transition">
          Offline Data
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center max-w-5xl mx-auto">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="p-6 rounded-2xl shadow-lg bg-white border"
          >
            <p className="text-3xl md:text-4xl font-bold text-black">
              {counts[i].toLocaleString()}
            </p>
            <p className="text-lg font-medium text-black">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Hero