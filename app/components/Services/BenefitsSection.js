import Image from 'next/image';

const benefits = [
  {
    img: 'https://eximtradedata.com/images/reduce_the_risk_involved.svg',
    title: 'Reduce the Risk Involved',
    desc: 'Our market analysis reports help you evaluate the overall supply chain, demand, and trends in the global trade market eliminating all the potential risks involved in trading.',
  },
  {
    img: 'https://eximtradedata.com/images/trending_product.svg',
    title: 'Expand Your Business Network',
    desc: 'Build relations in the overseas market using our international global import export trade data and meet potential buyers and suppliers in the foreign trade market.',
  },
  {
    img: 'https://eximtradedata.com/images/monitor_about.svg',
    title: 'Find Potential Market',
    desc: 'Discover a new marketplace for your import-export trade business with our analytically designed database of global import-export data.',
  },
  {
    img: 'https://eximtradedata.com/images/researched_market_data.svg',
    title: 'Researched Market Data',
    desc: 'In-depth market intelligence reports to help you gain complete transparency into the global import-export trade market and statistics.',
  },
  {
    img: 'https://eximtradedata.com/images/affordable_pricing.svg',
    title: 'Affordable pricing',
    desc: 'We have programs for every sector and business, from small & medium companies to large corporations, and supply import-export data at competitive pricing.',
  },
  {
    img: 'https://eximtradedata.com/images/navigate_global_market.svg',
    title: 'Navigate Global Market',
    desc: 'Cover the communication gap, interact more frequently with your clients across global countries with our latest and smartly developed tools and grab more business opportunities.',
  },
  {
    img: 'https://eximtradedata.com/images/trade_challenges.svg',
    title: 'Overcome the Trade Challenges',
    desc: 'Form your import-export trade strategy based on the current market scenario with our customized global import-export trade data and stay ahead of the market competition.',
  },
  {
    img: 'https://eximtradedata.com/images/ideal_match.svg',
    title: 'Find an Ideal Match to Meet Your Business',
    desc: 'Target relevant and potential audiences and markets for your trade business with Exim’s import-export trade data and enhance the overall productivity of your trade business.',
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-white via-sky-50 to-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-500 bg-clip-text text-transparent">
          Benefits of Import Export Data
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="bg-white shadow-md rounded-2xl border hover:shadow-lg transition duration-300 p-4 flex flex-col h-full">
              <div className="w-full h-40 relative mb-4 rounded-lg overflow-hidden">
                <Image
                  src={benefit.img}
                  alt={benefit.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{benefit.title}</h3>
              <p className="text-sm text-gray-600">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}