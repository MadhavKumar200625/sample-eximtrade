"use client"
import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const data = [
  { name: 'Natural/Cultured', value: 0.991 },
  { name: 'Ores, Slag', value: 0.924 },
  { name: 'Electrical Machinery', value: 0.509 },
  { name: 'Beverages, Spirits', value: 0.357 },
  { name: 'Tobacco', value: 0.341 },
  { name: 'Vehicles', value: 0.307 },
  { name: 'Iron & Steel', value: 0.266 },
  { name: 'Nuclear Reactors', value: 0.19 },
  { name: 'Aluminum & Articles', value: 0.144 },
  { name: 'Knitted/Crocheted', value: 0.135 },
];

const What = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <p className="uppercase tracking-wide font-semibold mb-2 text-black">
            Armenia top 10 major exports
          </p>
          <h2 className="text-3xl font-bold mb-4 text-black">
            What does Armenia export?
          </h2>
          <p className="text-lg mb-4 text-black">
            As per Armenia import shipment data, nuclear reactors were the top most exports by Armenia in FY 2022. In terms of export value, Armenia&apos;s top 10 product exports were Natural or cultured ($991M), Ores, slag ($924M), Electrical machinery ($509M), Beverages, spirits ($357M), Tobacco ($341M), Vehicles ($307M), Iron and steel ($266M), Nuclear reactors ($190M), Aluminum and articles ($144M), Knitted or crocheted ($135M).
          </p>
          <p className="text-lg mb-6 text-black">
            The total export value for Armenia&apos;s top 10 export commodities value was recorded to be <strong>$4.164001 Billion</strong> along with <strong>78.57%</strong> share of Armenia&apos;s total exports during FY 2022. Here, we have provided detailed insights into Armenia exports by percentage.
          </p>
          
          {/* CTA placeholder */}
          <div className="mt-4">
            <div className="flex justify-center ">
              <Link
                href="/pricing"
                className="bg-blue-600 text-lg text-white px-6 py-2 flex items-center justify-center shadow cursor-pointer hover:scale-105 transition"
              >
                Check Pricing{" "}
                <ArrowRight
                  size={20}
                  className="ml-2 mt-0.5 text-sm"
                ></ArrowRight>
              </Link>
            </div>
          </div>
        </div>
{/* Right Chart */}
<div className="bg-white border rounded-xl shadow-lg p-4">
  <h3 className="text-xl font-semibold text-black mb-4">Value in Billion USD</h3>
  <ResponsiveContainer width="100%" height={400}>
    <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 80 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis 
        dataKey="name" 
        interval={0} 
        tick={{ fontSize: 12 }}
        angle={-45} 
        textAnchor="end"
      />
      <YAxis domain={[0, 1]} tickFormatter={(v) => `${v}B`} />
      <Tooltip formatter={(v) => `${v} Billion USD`} />
      <Bar dataKey="value" fill="#0067b8" radius={[4, 4, 0, 0]} />
    </BarChart>
  </ResponsiveContainer>
</div>

      </div>
    </section>
  )
}

export default What