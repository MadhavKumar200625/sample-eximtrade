import Image from "next/image";
import Link from "next/link";

const features = [
  "Measure trade metrics and evaluate the market with a unique do-it-yourself alternative to cumbersome raw trade data that includes on-screen assistance from a professional business analyst for a low pay-per-record fee.",
  "Create an organized database by cleaning and categorize your workplace with import export customs data fields and auto rules.",
  "Access our highly advanced customized dashboards and global export import trade data to make profitable business decisions based on current data reports and valuable industry insights.",
  <>
    Easily organize fresh and old data. Dashboards, shipping records, and custom fields including{" "}
    <Link href="/global-hs-code-list" className="text-blue-500 underline">
      HS codes
    </Link>{" "}
    are all accessible on the move.
  </>,
  "Access the latest import export trade data & business intelligence reports, equipped with cutting-edge features and reliable global trade",
  "A cutting-edge platform that allows users to change trade plans based on market data by finding increasing items, markets, and the appropriate price range, as well as contact information for exporters and importers.",
  "Our import export data services empower you to spice up your database with actionable and customizable ready-to-use import export data.",
  "A platform that allows you to create, share and communicate while enlisting the help of your team and advancing your company strategies."
];

export default function FeaturesSection() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Gradient Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-500 bg-clip-text text-transparent">
          Features of Import Export Data
        </h2>

        {/* Image + Content Row */}
        <div className="flex flex-col lg:flex-row items-stretch gap-12">
          {/* Image */}
          <div className="relative w-full lg:w-1/2 min-h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://eximtradedata.com/images/services.svg"
              alt="Features Image"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between min-h-[500px]">
            <div className="space-y-8">
              {features.map((point, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <div className="text-xl font-bold text-blue-600 shrink-0">
                    0{index + 1}.
                  </div>
                  <div className="text-gray-800 text-base leading-relaxed border-b border-gray-300 pb-4">
                    {point}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 text-center lg:text-left">
              <button className="px-6 py-3 text-white text-lg font-medium rounded-xl bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-500 transition-all duration-300 hover:from-sky-600 hover:to-indigo-600 hover:scale-105 shadow-md hover:shadow-lg focus:outline-none backdrop-blur-xl bg-opacity-70">
                Request Trade Data
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}