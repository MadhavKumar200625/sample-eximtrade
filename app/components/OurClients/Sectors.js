'use client';

import Image from 'next/image';
import Link from 'next/link';

const sectors = [
  {
    title: 'Agribusiness',
    subtitle: 'Get Expert Data Solutions for a Successful Agribusiness',
    description:
      'The Agribusiness Industry is a field of uncertainty and risk. Exim Trade Data provides expert market intelligence solutions that help you analyze financial risks involved in the agriculture sector.',
    image: 'https://eximtradedata.com/images/agribusiness_md_banner.webp',
  },
  {
    title: 'Automotive',
    subtitle: 'Identify the Current Market Trends & Demands in the Automotive Market',
    description:
      'The Automotive Market is a very fast paced market in which everyone wants to excel with each other. Through our impressive trade intelligence platform, you can stand out amongst your competitors. Our interactive business intelligence reports help you with the accurate forecasts of the latest market technology, trends, and demands.',
    image: 'https://eximtradedata.com/images/automative_md_banner.webp',
  },
  {
    title: 'Energy & Natural Resources',
    subtitle: 'Become a Leader in the Energy Sector through Expert Market Intelligence',
    description:
      'The Energy Market is continuously striving for new innovations that offer a sustainable future and reasonable pricing. In order to keep pace with the challenging Energy market, you need to plan strategically. At Exim Trade Data, we provide expert energy market intelligence reports that help you predict the future risks, product pricing, production demand and discover the top buyers & suppliers in the Energy Market.',
    image: 'https://eximtradedata.com/images/energy_md_banner.webp',
  },
  {
    title: 'Research & Consulting',
    subtitle: 'Global Trade Intelligence Platform for Research & Consulting Companies',
    description:
      'Empower your market research through our global trade intelligence platform. Make more accurate decisions based on our business intelligence reports. Identify the most profitable markets by HSN Code, product details, quantity, price, port shipments, country, buyers, and supplier details. Reach to the top trading companies through our global companies list and discover the potential business growth opportunities.',
    image: 'https://eximtradedata.com/images/research_and_consulting_md_banner.webp',
  },
];

export default function Sectors() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Sectors We Work With
        </h2>
        <Link href="/country-ports">
          <span className="text-blue-600 font-medium hover:underline hover:underline-offset-4 transition-all text-lg cursor-pointer">
            View All →
          </span>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {sectors.map((sector, index) => (
          <Link href="/title" key={index} className="group">
            <div className="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
              <div className="relative h-40 w-full">
                <Image
                  src={sector.image}
                  alt={sector.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{sector.title}</h3>
                <p className="text-blue-600 font-medium mb-2">{sector.subtitle}</p>
                <p className="text-gray-600 text-sm line-clamp-3">{sector.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}