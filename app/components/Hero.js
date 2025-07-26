// components/Hero.jsx
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        
        {/* Text Section */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Board is the <br className="hidden md:block" />
            <span className="text-blue-600">Enterprise Planning Platform</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            We enable continuous planning with greater forecast accuracy to power
            financial and operational plans that drive confident, aligned decisions.
          </p>
          
          <div className="flex justify-center lg:justify-start">
            <a
              href="#"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg transition duration-300 hover:scale-105 hover:from-purple-600 hover:to-blue-600"
            >
            Watch Demo
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1">
          <Image
            src="/planning-dashboard.png" // Place this image in /public/
            alt="Enterprise Planning"
            width={600}
            height={400}
            className="w-full max-w-lg mx-auto"
          />
        </div>
      </div>
    </section>
  );
}