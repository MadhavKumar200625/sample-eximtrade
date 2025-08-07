"use client";

import Image from "next/image";
import Link from "next/link";


export default function CustomPlan() {
  return (
    <section className="bg-slate-50 py-12 px-4">

    <div className="bg-white  shadow-xl  mb-10 p-8 mx-auto max-w-6xl  md:mt-8 border border-zinc-200 ">
  <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-4">Customized Plan</h2>
  <p className="text-center text-black  mb-8 text-lg">Create Your Own Plan</p>

  {/* Feature Grid */}
<div className="grid grid-cols-1 sm:text-left text-center sm:grid-cols-2 md:grid-cols-3 sm:translate-x-20 sm:gap-0 gap-8 mb-10">
        <ul className="space-y-3 text-black ">
      <li>✅ Choose From 200+ Countries</li>
      <li>✅ Complete Historical Data Access</li>
    </ul>
    <ul className="space-y-3 max-w-xl text-black ">
      <li>✅ Unlimited Searches</li>
      <li>✅ Customizable Download Records</li>
    </ul>
    <ul className="space-y-3 max-w-xl text-black ">
      <li>✅ Customized User Licence</li>
      <li>✅ Priority Customer Support</li>
    </ul>
  </div>

  {/* Country Data */}
  <div className="border-t border-zinc-200 pt-6">
<h3 className="text-4xl font-semibold text-black mb-4 text-center">Data Available</h3>
  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-4 text-black text-sm text-center mb-8">
      {/* Asia & Africa */}
      <div>
        <h4 className="font-bold text-xl text-blue-600 md:mt-0 mt-4 mb-2">🌏 Asia</h4>
        <ul className="space-y-1 text-lg">
          <li>🇨🇳 China</li>
          <li>🇯🇵 Japan</li>
          <li>🇰🇷 South Korea</li>
        </ul>

        
      </div>

      <div>
        <h4 className="font-bold text-xl text-blue-600 md:mt-0 mt-4 mb-2">🌍 Africa</h4>
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
        <h4 className="font-bold text-xl text-blue-600 md:mt-0 mt-4 mb-2">🌍 Europe</h4>
        <ul className="space-y-1 text-lg">
          <li>🇬🇧 UK</li>
          <li>🇪🇸 Spain</li>
          <li>🇷🇺 Russia</li>
          <li>🇳🇱 Netherlands</li>
          <li>🇩🇪 Germany</li>
        </ul>

        
      </div>
      <div><h4 className="font-bold text-xl text-blue-600 md:mt-0 mt-4 mb-2">🌎 America</h4>
        <ul className="space-y-1 text-lg">
          <li>🇺🇸 US</li>
          <li>🇲🇽 Mexico</li>
          <li>🇦🇷 Argentina</li>
          <li>🇨🇦 Canada</li>
          <li>🇧🇷 Brazil</li>
        </ul>

        </div>

        <div>
            <h4 className="font-bold text-xl text-blue-600 md:mt-0 mt-4 mb-2">🌏 Oceania</h4>
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
    <Link href="/get-free-trial" className="relative cursor-pointer text-lg inline-flex items-center justify-center px-6 py-2 overflow-hidden font-semibold text-white transition-all duration-300  bg-blue-600  hover:scale-105">
      Get Free Trial
    </Link>
  </div>
</div>
</section>
  );
}
