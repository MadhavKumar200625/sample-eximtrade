"use client";
import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend,
  XAxis,
  YAxis,
} from "recharts";

const importPartnersData = [
  { country: "Russia", value: 4.12 },
  { country: "China", value: 2.82 },
  { country: "Iran", value: 0.596 },
  { country: "Germany", value: 0.402 },
  { country: "USA", value: 0.358 },
  { country: "Italy", value: 0.274 },
  { country: "Turkey", value: 0.259 },
  { country: "India", value: 0.255 },
  { country: "Japan", value: 0.19 },
  { country: "Vietnam", value: 0.177 },
];

const Who = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">

        <div className="bg-white border rounded-xl shadow-lg p-4">
          <ResponsiveContainer width="100%" height={400}>
            <RadarChart data={importPartnersData}>
              <PolarGrid />

              <Radar
                name="Value in Billion"
                dataKey="value"
                stroke="#0ea5e9"
                fill="#0ea5e9"
                fillOpacity={0.5}
              />

              {/* Categories - acts like X-axis */}
              <PolarAngleAxis
                dataKey="country"
                tick={{ fill: "#000", fontSize: 12 }}
                tickMargin={20} // pushes labels away from chart
              />

              {/* Numeric values - acts like Y-axis */}
              <PolarRadiusAxis
                angle={90}
                domain={[0, 4]}
                ticks={[0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4]}
                tick={{ fill: "#000", fontSize: 12 }}
                tickFormatter={(v) => v.toFixed(1)}
              />

              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </div>


        <div>
          <p className="text-sm font-semibold text-black uppercase tracking-wider mb-2">
            Armenia&apos;s Top 10 Import Partners
          </p>
          <h2 className="text-3xl font-bold text-black mb-4">
            Who does Armenia import from?
          </h2>
          <p className="text-gray-700 mb-4">
            In the financial year 2024, Russia was responsible for the maximum
            Armenia import shipments with over 47.74% share in overall Armenia
            imports. As per Armenia import details report, the top 10 trading
            partners for Armenia imports were Russia ($4.12B), China ($2.82B),
            Iran ($596M), Germany ($402M), USA ($358M), Italy ($274M), Turkey
            ($259M), India ($255M), Japan ($190M), Vietnam ($177M).
          </p>
          <p className="text-gray-700 mb-6">
            Armenia top 10 import partner countries had exported around
            $9.450999 billion with an overall 109.51% share in Armenia total
            imports. You will get a better overview of Armenia imports from
            other countries. If you are looking for year wise Armenia import
            data by country, please click below.
          </p>
          {/* CTA Button Placeholder */}
          <div className="mt-6">
            <div className="flex justify-center ">
              <button
                className="bg-blue-600 text-lg text-white px-6 py-2 flex items-center justify-center shadow cursor-pointer hover:scale-105 transition"
              >
                Get Country Wise Data
              </button>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Who;
