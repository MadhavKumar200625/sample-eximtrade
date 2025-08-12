"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const continentData = [
  {
    name: "ASIA",
    countries: [
      { label: "Vietnam", code: "vn", url: "/vietnam-import-export-data" },
      { label: "Indonesia", code: "id", url: "/indonesia-import-export-data" },
    ],
  },
  {
    name: "AFRICA",
    countries: [
      { label: "Tanzania", code: "tz", url: "/tanzania-import-export-data" },
      { label: "Cote D'Ivoire", code: "ci", url: "/cote-divoire-import-export-data" },
      { label: "Botswana", code: "bw", url: "/botswana-import-export-data" },
      { label: "Congo", code: "cg", url: "/congo-import-export-data" },
    ],
  },
  {
    name: "EUROPE",
    countries: [
      { label: "UK", code: "gb", url: "/uk-import-export-data" },
      { label: "Russia", code: "ru", url: "/russia-import-export-data" },
      { label: "Moldova", code: "md", url: "/moldova-import-export-data" },
      { label: "Ukraine", code: "ua", url: "/ukraine-import-export-data" },
    ],
  },
  {
    name: "AMERICA",
    countries: [
      { label: "Argentina", code: "ar", url: "/argentina-import-export-data" },
      { label: "Brazil", code: "br", url: "/brazil-import-export-data" },
      { label: "Mexico", code: "mx", url: "/mexico-import-export-data" },
      { label: "US", code: "us", url: "/us-import-export-data" },
    ],
  },
  {
    name: "OCEANIA",
    countries: [
      { label: "Australia", code: "au", url: "/australia-import-export-data" },
      { label: "Fiji", code: "fj", url: "/fiji-import-export-data" },
    ],
  },
];

export default function CountrySection() {
  return (
    <section className="bg-gradient-to-r from-blue-50 via-white to-blue-50 py-16 px-4 md:px-20">
      <div className="bg-white shadow-lg border border-gray-200 rounded-none p-8">
    

        {/* Grid with separator lines */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-x divide-gray-300 text-center">
          {continentData.map((continent) => (
            <div key={continent.name} className="px-4">
              <h3 className="text-lg font-semibold text-blue-600 mb-4">
                {continent.name}
              </h3>
              <ul className="space-y-3">
                {continent.countries.map((country) => (
                  <li key={country.label}>
                    <Link
                      href={country.url}
                      className="flex items-center justify-center space-x-2 text-black hover:underline hover:scale-[1.02] transition-transform duration-200"
                    >
                      <img
                        src={`https://flagcdn.com/w20/${country.code}.png`}
                        alt={`${country.label} flag`}
                        className="w-5 h-auto"
                      />
                      <span>{country.label}</span>
                      <ArrowUpRight  size={16} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-10">
          <Link
            href="/pricing"
            className="px-6 py-3 bg-blue-600 text-white text-base font-medium hover:scale-105 transition-transform duration-200 cursor-pointer inline-block"
          >
            Check Pricing →
          </Link>
        </div>
      </div>
    </section>
  );
}