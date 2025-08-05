// components/Hero.jsx
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-sky-100 via-blue-50 to-sky-50 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">

        {/* Text Section */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            Find <br className="hidden md:block" />
            <span className="text-blue-600">Global Buyers & Sellers</span>
          </h1>
          <p className="text-md md:text-lg text-gray-700 mb-8">
            Are you looking to expand globally? Get
            Customised Import Export Data on Exim Trade Data. Reach out to get access to accurate
            Global Import Export Trade Data.
          </p>

         <div className="flex justify-center lg:justify-start">
  <Link
    href="/contact"
    className="relative inline-block px-6 py-3 text-white font-semibold text-sm md:text-lg rounded-full overflow-hidden group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-xl hover:shadow-blue-500/50"
  >
    <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-white/10 to-white/5 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 blur-sm"></span>
    <span className="relative z-10">Consult Our Expert</span>
  </Link>
</div>
        </div>

        {/* Image Section */}
        <div className="flex-1">
          <Image
            src="/planning-dashboard.png" // Place this image in /public/
            alt="Enterprise Planning"
            width={500}
            height={300}
            className="w-full max-w-lg lg:max-w-sm mx-auto"
          />
        </div>
      </div>
    </section>
  );
}