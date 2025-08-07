"use client";
import Image from "next/image";
import Link from "next/link";

const Section5 = ({ industries }) => {
  return (
<section className="w-full bg-white py-20 px-4 md:px-20">
          <div className=" mx-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-14">
          Explore More Industries
        </h2>

        <div className="grid lg:grid-cols-2  gap-10">
          {industries.map((industry, idx) => (
            <div
              key={idx}
              className="flex items-center bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-gray-200 p-5 group hover:-translate-y-1"
            >
              <div className="w-44 h-24 md:w-48 md:h-28 relative rounded-xl overflow-hidden shadow-sm border border-gray-200 bg-gray-50">
                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="ml-4 flex flex-col justify-between">
                <h4 className="text-md uppercase tracking-wide text-black font-semibold">
                  {industry.title}
                </h4>
                <h3 className="text-lg md:text-xl font-semibold text-black mt-1">
                  {industry.heading}
                </h3>
                <p className="text-black text-sm mt-2 line-clamp-3 leading-relaxed">
                  {industry.description}
                </p>
                <Link
                  href={industry.link || "/industries-covered"}
                  className="mt-3 inline-block text-sm font-medium text-blue-600  transition"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/industries-covered"
            className="inline-block bg-blue-600 text-white font-semibold text-lg px-7 py-3 hover:scale-105 shadow-md  transition-all duration-300"
          >
            Explore More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Section5;