'use client'
import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { countries } from "@/app/data";

export default function SearchComponent() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);


  return (
    <section className="w-full px-6 pb-16 pt-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-fadeIn">
<h2 className="text-3xl md:text-3xl font-black text-white text-center mb-8 drop-shadow-lg tracking-wide">
  Search Global Import Export Trade Data
</h2>      <div className="max-w-7xl mx-auto bg-white shadow-2xl rounded-3xl p-8 transition-all duration-500">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3 animate-fadeUp delay-100">
          <input
            type="text"
            placeholder="Enter Products"
            className="border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-400 outline-none shadow-sm"
          />

          <input
            type="text"
            placeholder="HS Code"
            className="border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-400 outline-none shadow-sm"
          />

          <div className="relative col-span-1 lg:col-span-2">
  <div className="relative w-full max-w-sm">
  <button
    onClick={() => setShowDropdown(!showDropdown)}
    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-left flex items-center justify-between shadow-sm hover:shadow-md focus:ring-2 focus:ring-indigo-400"
  >
    {selectedCountry || "Select Country"}
    <ChevronDown size={18} />
  </button>

  {showDropdown && (
    <div className="absolute mt-2 -left-1/2  z-10 bg-white rounded-xl shadow-xl p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-h-80 overflow-y-scroll transition-transform duration-300 origin-top-right animate-slide-in-rtl w-3xl">
      {Object.entries(countries).map(([country, flag], index) => (
        <div
          key={index}
          className="flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-indigo-100 transition-all"
          onClick={() => {
            setSelectedCountry(country);
            setShowDropdown(false);
          }}
        >
          <span className="text-xl">{flag}</span>
          <span className="text-sm font-medium">{country}</span>
        </div>
      ))}
    </div>
  )}
</div>
</div>

          <select className="border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-400 outline-none shadow-sm col-span-1 animate-fadeUp delay-150">
            <option value="">Select Type</option>
            <option value="import">Import</option>
            <option value="export">Export</option>
          </select>

          
<button className="relative mx-auto justify-center overflow-hidden px-10 py-3 bg-gray-100 hover:text-white hover:scale-105 text-blue-700 border border-blue-500 rounded-full font-semibold shadow-md group flex items-center">
  <span className="relative z-10 flex items-center gap-1">
    <Search className="w-4 h-4" />
    Search
  </span>
  <span className="absolute inset-0 w-full bg-gradient-to-l from-sky-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 -translate-x-full rounded-full"></span>
</button>
        </div>

        
      </div>
    </section>
  );
}