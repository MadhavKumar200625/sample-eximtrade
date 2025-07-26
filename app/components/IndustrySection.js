'use client'
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const industries = [
  {
    name: "Agribusiness",
    desc: "Track crop trade, fertilizers, and more to optimize global agribusiness strategies.",
    img: "https://eximtrade-new.vercel.app/images/agribusiness_md_banner.webp",
  },
  {
    name: "Automotive",
    desc: "Explore trends in parts, vehicles, and supply chains shaping the auto industry.",
    img: "https://eximtrade-new.vercel.app/images/automative_md_banner.webp",
  },
  {
    name: "Importers",
    desc: "Leading Trade Intelligence Platform for Global Importers",
    img: "https://eximtrade-new.vercel.app/images/importer_md_banner1.webp",
  },
  {
    name: "Supply Chain & Logistics",
    desc: "The Leading Trade Intelligence Platform for Supply Chain & Logistics Companies",
    img: "https://eximtrade-new.vercel.app/images/logistic_md_banner.webp",
  },
  {
    name: "Importers",
    desc: "Leading Trade Intelligence Platform for Global Importers",
    img: "https://eximtrade-new.vercel.app/images/importer_md_banner1.webp",
  },
  {
    name: "Supply Chain & Logistics",
    desc: "The Leading Trade Intelligence Platform for Supply Chain & Logistics Companies",
    img: "https://eximtrade-new.vercel.app/images/logistic_md_banner.webp",
  },
  
  
];

export default function IndustrySlider() {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto scroll every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % industries.length;
      scrollToIndex(nextIndex);
    }, 4000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const scrollToIndex = (index) => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const cardWidth = container.firstChild instanceof HTMLElement ? container.firstChild.offsetWidth + 24 : 274;
    container.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  return (
   <div className="relative px-4 py-20 =">
  {/* Section Title */}
  <div className="max-w-6xl mx-auto text-center mb-12">
    <h2 className="text-4xl font-bold text-indigo-800">✨ Industry</h2>
    <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
      Gain a deeper understanding of the global market with our powerful trade intelligence platform, designed to deliver industry-specific insights that drive smarter business decisions.
    </p>
  </div>

  {/* Slider Container */}
  <div className="relative max-w-6xl mx-auto px-4 overflow-hidden">
    {/* Left Fade */}
    <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
    {/* Right Fade */}
    <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

    {/* Slider */}
    <div
      ref={sliderRef}
      className="flex gap-8 overflow-x-auto no-scrollbar scroll-smooth py-10 px-2"
        style={{ scrollbarWidth: 'none' }}

    >
{industries.map((industry, idx) => (
  <div
    key={idx}
    className="group min-w-[270px] h-[370px] relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
  >
    {/* Background Image */}
    <Image
      src={industry.img}
      alt={industry.name}
      layout="fill"
      objectFit="cover"
      className="z-0"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-black/40 z-10 transition-all duration-300 group-hover:bg-black/60" />

    {/* Read More Button - Top Right */}
    <button
  className="absolute top-4 right-4 z-30 text-sm text-white bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500 px-4 py-1.5 rounded-full opacity-0 group-hover:opacity-100 translate-x-6 group-hover:translate-x-0 transition-all duration-100 shadow-md"
>
  Read More →
</button>

    {/* Content */}
    <div className="relative z-20 h-full flex flex-col justify-end p-5 text-white">
      <h3 className="text-xl font-semibold">{industry.name}</h3>
      <p className="text-sm text-white/90 mt-2 line-clamp-3">{industry.desc}</p>
    </div>
  </div>
))}
    </div>

    {/* Dots */}
    <div className="flex justify-center mt-8 gap-2">
      {industries.map((_, idx) => (
        <div
          key={idx}
          className={`w-4 h-2 rounded-full transition-all duration-300 cursor-pointer ${
            activeIndex === idx ? "bg-indigo-600 scale-110" : "bg-gray-300"
          }`}
          onClick={() => scrollToIndex(idx)}
        />
      ))}
    </div>
  </div>
</div>
  );
}