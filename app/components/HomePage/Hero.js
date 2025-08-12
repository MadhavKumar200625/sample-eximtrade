// components/Hero.jsx
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br bg-white pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">

        {/* Text Section */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            Find <br className="hidden md:block" />
            <span className="text-black">Global Buyers & Sellers</span>
          </h1>
          <p className="text-md md:text-lg text-gray-700 mb-8">
            Are you looking to expand globally? Get
            Customised Import Export Data on Exim Trade Data. Reach out to get access to accurate
            Global Import Export Trade Data.
          </p>

         <div className="flex justify-center lg:justify-start">
  <Link
    href="/contact"
    className="relative inline-block px-6 py-3 text-white font-semibold text-sm md:text-lg overflow-hidden group bg-blue-600"
  >
    <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition duration-300 blur-sm"></span>
    <span className="relative z-10">Consult Our Expert</span>
  </Link>
</div>
        </div>

        <div className="flex-1">
          <Image
            src="/find-global-buyers-and-sellers.png" 
            alt="Enterprise Planning"
            width={600}
            height={300}
            className="w-full max-w-lg  mx-auto"
          />
        </div>
      </div>
    </section>
  );
}