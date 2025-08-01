"use client";

import Image from "next/image";
import Link from "next/link";


export default function CustomPlan() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-zinc-100 py-20 px-4">

    <div className="bg-white  shadow-xl rounded-2xl mb-10 p-8 mx-auto max-w-6xl  md:mt-8 border border-zinc-200 ">
  <h2 className="text-3xl font-bold text-center text-blue-600 mb-4">Customized Plan</h2>
  <p className="text-center text-zinc-600  mb-8 text-lg">Create Your Own Plan</p>

  {/* Feature Grid */}
<div className="grid grid-cols-1 sm:text-left text-center sm:grid-cols-2 md:grid-cols-3 sm:translate-x-20 sm:gap-0 gap-8 mb-10">
        <ul className="space-y-3 text-zinc-700 ">
      <li>✅ Choose From 200+ Countries</li>
      <li>✅ Complete Historical Data Access</li>
    </ul>
    <ul className="space-y-3 max-w-xl text-zinc-700 ">
      <li>✅ Unlimited Searches</li>
      <li>✅ Customizable Download Records</li>
    </ul>
    <ul className="space-y-3 max-w-xl text-zinc-700 ">
      <li>✅ Customized User Licence</li>
      <li>✅ Priority Customer Support</li>
    </ul>
  </div>

  {/* Country Data */}
  <div className="border-t border-zinc-200 pt-6">
<h3 className="text-4xl font-semibold text-blue-500 mb-4 text-center">Data Available</h3>
  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-4 text-zinc-700 text-sm text-center mb-8">
      {/* Asia & Africa */}
      <div>
        <h4 className="font-bold text-xl text-indigo-600 md:mt-0 mt-4 mb-2">🌏 Asia</h4>
        <ul className="space-y-1 text-lg">
          <li>🇨🇳 China</li>
          <li>🇯🇵 Japan</li>
          <li>🇰🇷 South Korea</li>
        </ul>

        
      </div>

      <div>
        <h4 className="font-bold text-xl text-indigo-600 md:mt-0 mt-4 mb-2">🌍 Africa</h4>
        <ul className="space-y-1 text-lg">
          <li>🇹🇩 Chad</li>
          <li>🇬🇭 Ghana</li>
          <li>🇰🇪 Kenya</li>
          <li>🇹🇿 Tanzania</li>
          <li>🇿🇦 South Africa</li>
        </ul>
      </div>

      {/* Europe, America, Oceania */}
      <div>
        <h4 className="font-bold text-xl text-indigo-600 md:mt-0 mt-4 mb-2">🌍 Europe</h4>
        <ul className="space-y-1 text-lg">
          <li>🇬🇧 UK</li>
          <li>🇪🇸 Spain</li>
          <li>🇷🇺 Russia</li>
          <li>🇳🇱 Netherlands</li>
          <li>🇩🇪 Germany</li>
        </ul>

        
      </div>
      <div><h4 className="font-bold text-xl text-indigo-600 md:mt-0 mt-4 mb-2">🌎 America</h4>
        <ul className="space-y-1 text-lg">
          <li>🇺🇸 US</li>
          <li>🇲🇽 Mexico</li>
          <li>🇦🇷 Argentina</li>
          <li>🇨🇦 Canada</li>
          <li>🇧🇷 Brazil</li>
        </ul>

        </div>

        <div>
            <h4 className="font-bold text-xl text-indigo-600 md:mt-0 mt-4 mb-2">🌏 Oceania</h4>
        <ul className="space-y-1 text-lg">
          <li>🇫🇯 Fiji</li>
          <li>🇦🇺 Australia</li>
          <li>🇳🇿 New Zealand</li>
        </ul>
        </div>
    </div>
  </div>

  {/* CTA */}
  <div className="text-center mt-10">
    <a href="/get-free-trial" className="inline-block bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-500 text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition">
      Get Free Trial
    </a>
  </div>
</div>
</section>
  );
}
