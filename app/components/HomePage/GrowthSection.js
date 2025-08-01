import React from "react";
import Link from "next/link";

const GrowthSection = () => {
  return (
    <section className="bg-[#f4f9ff] py-14 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            ✨Best Market Research Platform
          </h2>
          <p className="text-md md:text-lg text-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-4">
            Get Meaningful Industrial Insights with Exim GTIS
          </p>
          <p className="text-md text-gray-700 mb-6">
            <span className="font-semibold text-blue-600">Exim GTIS</span> is
            amongst the top global import export trade data provider and also
            the best platform for market intelligence that helps identify the
            key performing factors for your company and streamline your
            workflow. Find the latest market trends, most traded{" "}
            <Link
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent font-semibold hover:underline"
              href="/global-hs-code-list"
            >
              HS codes
            </Link>
            , countries, ports, competitors and top import-export companies.
            Mitigate financial risk and reach out to the verified buyers and
            suppliers. Double your sales and generate the maximum revenue
            through our market research platform.
          </p>

          <div className="flex flex-wrap gap-4">
            {/* Explore Button - Vibrant Gradient */}
            <Link href="global-trade-database"><button className="relative px-6 py-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white text-sm rounded-full font-semibold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300">
              <span className="z-10 relative">Explore Exim GTIS</span>
            </button></Link>

            {/* Get API Access Button - Hover Sweep Gradient */}
            <Link href="/api-development-and-integration-company"><button className="relative overflow-hidden px-6 py-3 bg-gray-100 hover:text-white text-sm hover:scale-105 text-blue-700 border border-blue-500 rounded-full font-semibold shadow-md group">
              <span className="relative z-10">Get API Access</span>
              <span className="absolute inset-0 w-full bg-gradient-to-l from-sky-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0 -translate-x-full rounded-full"></span>
            </button></Link>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="flex justify-center">
          <img
            src="/market-research-platform.png"
            alt="Market Research Illustration"
            className="max-w-[350px] w-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default GrowthSection;
