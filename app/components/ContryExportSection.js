export default function CountryStatsSection() {
  const countries = [
    {
      name: "USA",
      flag: "https://flagcdn.com/us.svg",
      content:
        "Discover potential sales opportunities in the US market with our impressive US import export data reports. Analyze accurate analytics, forecasts, and top companies to double your business revenue.",
    },
    {
      name: "Tanzania",
      flag: "https://flagcdn.com/tz.svg",
      content:
        "Generate leads from verified Tanzania data based on global trade. Explore top buyers, suppliers, importers, and exporters from our Tanzania Import Export Database.",
    },
    {
      name: "Mexico",
      flag: "https://flagcdn.com/mx.svg",
      content:
        "Get verified Mexico data based on global trade reported by other nations. Track total shipments, top buyers/sellers, and grow your business with confidence.",
    },
    {
      name: "Russia",
      flag: "https://flagcdn.com/ru.svg",
      content:
        "Gain insights from Russia's customs data. Discover top imports/exports, Russian buyers & suppliers, and build a strong presence with 2023-24 market intelligence.",
    },
    {
      name: "Panama",
      flag: "https://flagcdn.com/pa.svg",
      content:
        "Find detailed Panama data via customs data reported globally. Identify potential buyers, suppliers, and current demand to optimize your market strategy.",
    },
  ];

  return (
<section className="py-20 bg-gradient-to-br from-blue-200 via-white to-indigo-200 text-gray-900"> 

  
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-3">✨ Global Import Export Database</h2>
    <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
      Discover country-wise global import export data. Find top-performing products, buyers, suppliers & convert them into your leads.
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 px-6 md:px-12">
    {countries.map((country, idx) => (
      <div
        key={idx}
        className="flex flex-col items-center text-center space-y-4"
      >
        <img
          src={country.flag}
          alt={`${country.name} flag`}
          className="w-24 h-24  shadow-md"
        />
        <h3 className="text-xl font-semibold text-blue-800">{country.name}</h3>
        <p className="text-sm text-gray-600 max-w-xs line-clamp-2">
          {country.content}
        </p>
        <button className="relative inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 via-sky-500 to-blue-500 rounded-full shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
  <span className="relative z-10">Read More...</span>
  <span className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400 via-sky-400 to-pink-400 opacity-0 group-hover:opacity-100 group-hover:blur-md transition duration-500"></span>
</button>
      </div>
    ))}
  </div>

  <div className="mt-16 flex justify-center">
    <button className="px-8 py-3 text-white text-lg font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition duration-300">
      Enquire Now
    </button>
  </div>
</section>
  );
}