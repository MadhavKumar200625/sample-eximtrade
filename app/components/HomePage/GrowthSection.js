import React from "react";
import Link from "next/link";

const GrowthSection = () => {
  return (
    <section className="bg-[#f4f9ff] py-14 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
            Best Market Research Platform
          </h2>
          {/* {font change} */}
          <p className="text-md md:text-lg text-gradient text-black bg-clip-text  mb-4">
            Get Meaningful Industrial Insights with Exim GTIS 
          </p>
          <p className="text-md text-black mb-6">
            <span className="font-semibold text-black">Exim GTIS</span> is
            amongst the top global import export trade data provider and also
            the best platform for market intelligence that helps identify the
            key performing factors for your company and streamline your
            workflow. Find the latest market trends, most traded{" "}
            <Link
              className="text-black font-semibold hover:underline"
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
            <Link href="global-trade-database"><button className="relative px-6 py-3 bg-blue-600 text-white font-semibold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300">
              <span className="z-10 relative">Explore Exim GTIS</span>
            </button></Link>

            {/* Get API Access Button - Hover Sweep Gradient */}
            <Link href="/api-development-and-integration-company"><button className=" cursor-pointer relative px-6 py-3 bg-blue-600 text-white font-semibold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300">
              <span className="relative z-10">Get API Access</span>
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
