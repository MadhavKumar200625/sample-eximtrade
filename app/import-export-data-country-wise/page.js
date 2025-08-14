import React from 'react'
import Hero from './Hero'
import Countries from './Countries'
import { ArrowRight } from "lucide-react";


const page = () => {
  return (
    <main>
        <Hero></Hero>
        <Countries></Countries>
        <section className="w-full bg-gradient-to-r from-sky-300 to-sky-100 text-black py-8 px-6">
      <div className="w-full  flex flex-col md:flex-row items-center justify-between px-32">
        
        {/* Left Content */}
          <h2 className="text-3xl max-w-2xl   font-bold leading-tight">
            GET GLOBAL TRADE DATA ONLINE AT YOUR FINGERTIPS!
          </h2>

          {/* CTA Button */}
          <button className="flex items-center gap-3 bg-blue-600 text-white text-xl px-6 py-3 cursor-pointer font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200">
            Schedule a Demo
            <ArrowRight size={20} />
          </button>

      </div>
    </section>
    </main>
  )
}

export default page