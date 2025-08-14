
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 via-white to-blue-50 pb-8 pt-32 px-4 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-4">
            Best API Development Services
          </h2>
          <p className="text-xl text-black mb-8">
            Get fast, secure and highly scalable API development & integration solutions. Build more innovative applications with our state-of-the-art API development.
          </p>

          <div className="flex  gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-blue-600 text-white text-base font-medium hover:scale-105 transition-transform duration-200 cursor-pointer"
            >
                Consult Our Expert
            </Link>
            
          </div>
        </div>

        <div className="p-10">
<div className="w-full aspect-video   ">
          <img
            className="w-full rounded-lg h-full"
            src="/Actionable-Insights.png"
            
          ></img>
        </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
