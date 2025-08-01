'use client';

import { useState } from 'react';

export default function CountryStatsSection() {
  const continents = {
    Americas: ['USA', 'Mexico', 'Panama'],
    Africa: ['Tanzania'],
    Europe: ['Russia'],
  };

  const countries = [
    {
      name: 'USA',
      continent: 'Americas',
      flag: 'https://flagcdn.com/us.svg',
      content:
        'Discover potential sales opportunities in the US market with our impressive US import export data reports.',
    },
    {
      name: 'Tanzania',
      continent: 'Africa',
      flag: 'https://flagcdn.com/tz.svg',
      content:
        'Generate leads from verified Tanzania data based on global trade.',
    },
    {
      name: 'Mexico',
      continent: 'Americas',
      flag: 'https://flagcdn.com/mx.svg',
      content:
        'Get verified Mexico data based on global trade reported by other nations.',
    },
    {
      name: 'Russia',
      continent: 'Europe',
      flag: 'https://flagcdn.com/ru.svg',
      content:
        'Get Verified Mexico import export data based on Global trade data reported by other countries.',
    },
    {
      name: 'Panama',
      continent: 'Americas',
      flag: 'https://flagcdn.com/pa.svg',
      content:
        'Find detailed Panama data via customs data reported globally.',
    },
  ];

  const [selectedContinent, setSelectedContinent] = useState('Americas');

  return (
    <section className="py-14 bg-gradient-to-br from-blue-200 via-white to-indigo-200 text-gray-900">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-3">
          ✨ Global Import Export Database
        </h2>
        <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
          Discover country-wise global import export data. Find top-performing products, buyers, suppliers & convert them into your leads.
        </p>
      </div>

      <div className="flex px-6 md:px-12 gap-6">

        <div className=" ">
          <div className="sticky top-24 ">
            <ul className="space-y-4  text-lg font-medium">
              {Object.keys(continents).map((continent) => (
                <li
                  key={continent}
                  className={`cursor-pointer px-14 py-2 text-center rounded-3xl transition-colors ${
                    selectedContinent === continent
                      ? 'bg-blue-600 text-white'
                      : 'hover:bg-blue-100 text-blue-800'
                  }`}
                  onClick={() => setSelectedContinent(continent)}
                >
                  {continent}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Country Cards */}
        <div className="w-full pb-8  overflow-y-auto no-scrollbar">
          <div className="grid grid-cols-2 px-4 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {countries
              .filter((country) => country.continent === selectedContinent)
              .map((country, idx) => (
                <div
                  key={idx}
                  className="cursor-pointer p-4 rounded-3xl bg-white shadow-xl hover:shadow-3xl hover:scale-[1.02] transition-all duration-300 text-center space-y-2"
                >
                  <img
                    src={country.flag}
                    alt={`${country.name} flag`}
                    className="w-22  mx-auto  shadow"
                  />
                  <h3 className="text-sm font-semibold text-blue-800">{country.name}</h3>
                  <p className="text-xs text-gray-600 line-clamp-3">{country.content}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}