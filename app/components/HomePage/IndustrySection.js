'use client'
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const industries = [
  {
    name: "Importers",
    desc: "Leading Trade Intelligence Platform for Global Importers",
    img: "https://eximtradedata.com/images/importer_md_banner1.webp",
  },
  {
    name: "Exporters",
    desc: "Enhance Your Sales Potential with Our Global Exporters Database",
    img: "https://eximtradedata.com/images/exporters_md_banner1.webp",
  },
  {
    name: "Corporation",
    desc: "Best Market Intelligence Platform for Corporate Companies",
    img: "https://eximtradedata.com/images/corporation_md_banner1.webp",
  },
  {
    name: "Automative",
    desc: "Identify the Current Market Trends & Demands in the Automotive Market",
    img: "https://eximtradedata.com/images/automative_md_banner1.webp",
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
   <div className="relative px-4 py-14 =">
  {/* Section Title */}
  <div className="max-w-6xl mx-auto text-center ">
    <h2 className="text-4xl font-bold text-indigo-800">✨ Explore More Industries</h2>
    
  </div>

  {/* Slider Container */}
  <div className="relative max-w-6xl mx-auto px-4 overflow-hidden">
    {/* Left Fade */}
   

    {/* Slider */}
    <div
      
      className="grid-cols-4 grid gap-8  no-scrollbar scroll-smooth py-10 px-2"
        style={{ scrollbarWidth: 'none' }}

    >
{industries.map((industry, idx) => (
  <div
    key={idx}
    className="group min-w-[270px] h-[350px] relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
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
    <Link href={industry.name.toLowerCase()}>
    <button
  className="absolute top-4 right-4 z-30 text-sm text-white bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500 px-4 py-1.5 rounded-full opacity-0 group-hover:opacity-100 translate-x-6 group-hover:translate-x-0 transition-all duration-100 shadow-md"
>
  Read More →
</button>
    </Link>


    {/* Content */}
    <div className="relative z-20 h-full flex flex-col justify-end p-5 text-white">
      <h3 className="text-xl font-semibold">{industry.name}</h3>
      <p className="text-sm text-white/90 mt-2 line-clamp-3">{industry.desc}</p>
    </div>
  </div>
))}
    </div>

    
  </div>
</div>
  );
}