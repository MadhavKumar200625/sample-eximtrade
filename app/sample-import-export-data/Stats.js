'use client'
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import Link from 'next/link';

const stats = [
  { value: 8630, label: "Total Import Value", title: "Armenia Import Data" },
  { value: 5300, label: "Total Export Value", title: "Armenia Export Data" },
];

const Stats = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 2000;
    const frameRate = 10;
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
    <section className="bg-slate-100 py-12 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-12">
      <h1 className="text-black pb-8 text-xl sm:text-2xl md:text-3xl font-bold text-center">
        Armenia Export Import Data 2023-24 Overview
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-full sm:max-w-5xl md:max-w-6xl">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="p-6 rounded-2xl shadow-lg bg-white border flex flex-col justify-center items-center w-full"
          >
            <Link
              href={`/country-wise-${stat.title}`}
              className="text-black border transition hover:bg-slate-100 border-black px-3 py-2 mb-4 text-sm sm:text-base"
            >
              {stat.title}
            </Link>
            <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black my-4">
              ${counts[i].toLocaleString()}M
            </p>
            <p className="text-md sm:text-lg font-medium text-black">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Stats;