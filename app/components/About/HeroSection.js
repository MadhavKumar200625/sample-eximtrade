import React from "react";

const HeroSection = () => {
  return (
    <section className="relative py-24 bg-gradient-to-r from-[#f0f4ff] to-[#eaf0ff] overflow-hidden">
  <div className="  px-6 md:px-10 lg:px-20 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
    
    {/* Left: Image with soft gradient overlay */}
    <div className="relative w-full">
      <div className="rounded-3xl overflow-hidden shadow-xl relative z-10">
        <img
          src="https://eximtradedata.com/images/about_us.webp"
          alt="About Exim Trade Data"
          className="object-cover w-full h-96"
        />
      </div>
      <div className="absolute top-[-40px] left-[-40px] w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-30 z-0"></div>
    </div>

    {/* Right: Text */}
    <div className="text-[#1f2d5a]">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug relative">
        About Us

      </h2>
      <p className="text-base md:text-lg text-gray-700 mb-4 leading-relaxed">
        At <span className="font-semibold text-blue-600">Exim Trade Data</span>, we provide cutting-edge insights into global trade activities, empowering businesses with precise, real-time export-import analytics tailored for growth.
      </p>
      <p className="text-base md:text-lg text-gray-700 leading-relaxed">
        Backed by a highly skilled technical team with decades of expertise in data mining and analytics, we simplify global trade decisions with accurate, systematic intelligence across regions and commodities.
      </p>
    </div>
    
  </div>
</section>
  );
};

export default HeroSection;
