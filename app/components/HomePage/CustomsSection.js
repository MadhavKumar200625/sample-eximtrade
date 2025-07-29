import React from "react";

const CustomsSection = () => {
  return (
    <section
      className="relative py-24 px-4 md:px-16 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 overflow-hidden"
      id="insights"
    >
      <div className="max-w-7xl mx-auto text-center mb-20 animate-fadeUp">
        <h2 className="text-4xl md:text-5xl font-bold text-indigo-700 mb-4">
          ✨ Empower Your Market Research
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          With Global Import Export Data
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
        {/* Card 1 */}
        <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 transform animate-fadeUp delay-100">
          <img
            src="https://eximtrade-new.vercel.app/images/actionable_insight.svg"
            alt="Insights"
            className="w-100 h-100 mx-auto"
          />
          <h3 className="text-2xl font-semibold text-blue-700 mb-3 text-center">
            Actionable Insights
          </h3>
          <p className="text-gray-600 text-center">
            We combine the years of accumulated expertise of our data scientists
            and business intelligence tools to discover meaningful insights from
            the global customs data. All categories to make data-driven current
            market opportunities.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 transform animate-fadeUp delay-200">
          <img
            src="https://eximtrade-new.vercel.app/images/know_market.svg"
            alt="Market Knowledge"
            className="w-100 h-100 mx-auto"
          />
          <h3 className="text-2xl font-semibold text-blue-700 mb-3 text-center">
            Know Your Market
          </h3>
          <p className="text-gray-600 text-center">
            For any business, the main challenge is to find buyers for their
            products. Our well researched global shipment data helps you to
            evaluate and develop your marketing strategy to grab new buyers in
            the foreign market.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 transform animate-fadeUp delay-300">
          <img
            src="https://eximtrade-new.vercel.app/images/streamline_business.svg"
            alt="Streamline Business"
            className="w-100 h-100 mx-auto"
          />
          <h3 className="text-2xl font-semibold text-blue-700 mb-3 text-center">
            Streamline Your Business
          </h3>
          <p className="text-gray-600 text-center">
            Streamline all your trading operations and pave the way for top-line
            growth for your business. With a precise overview of every business
            activity, discover the inefficient process and optimize your
            business operation through our global import export trade data.
          </p>
        </div>
      </div>

      {/* Gradient Blur Background Accent */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute -bottom-20 -right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-300" />
      </div>
    </section>
  );
};

export default CustomsSection;
