'use client';
import React from 'react';

const logos = [
  'https://eximtrade-new.vercel.app/images/clients/lonza.png',
  'https://eximtrade-new.vercel.app/images/clients/duracell.png',
  'https://eximtrade-new.vercel.app/images/clients/absolute-advantage_logo.png',
  'https://eximtrade-new.vercel.app/images/clients/bcg.png',
  'https://eximtrade-new.vercel.app/images/clients/afepasa.png',
  'https://eximtrade-new.vercel.app/images/clients/neohealth.png',
];

const ClientsSection = () => {
  return (
    <section className="relative  py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* LEFT TEXT */}
        <div className="z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Our Clients
          </h2>
          <h3 className="text-2xl text-black mb-4">Trusted By Top Brands</h3>
          <p className="text-black text-lg leading-relaxed">
            We are privileged to work with some of the most prestigious clients
            in the industry. Our vision is to deliver fast, prompt & reliable
            information to our clients that adds value to their business.
          </p>
        </div>

        {/* RIGHT SLIDER */}
        <div className="relative w-full overflow-hidden">
          {/* Fader Left & Right */}
          <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white via-white/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white via-white/90 to-transparent z-10 pointer-events-none" />

          {/* Single Infinite Slider */}
          <div className="flex item w-max animate-slide-left gap-10">
            {[...logos, ...logos].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`logo-${i}`}
                className="h-34 w-auto drop-shadow-md object-contain"
              />
            ))}
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default ClientsSection;