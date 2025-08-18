import React from 'react'

const PortDataByCountry = () => {
  return (
    <section className="bg-slate-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-10">
          Search <span className="text-black">Global Ports Data</span> By Country
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {countries.map((country) => (
            <div
              key={country.name}
              className="bg-gray-50  shadow-md hover:shadow-xl transition-all duration-300 p-6"
            >
              <div className="flex items-center mb-4">
                
                <img
  src={`https://flagcdn.com/w40/${countryFlags[country.name.toLowerCase().replace(/^\w/, c => c.toUpperCase())]}.png`}
  alt={`${country.name} Flag`}
  className="w-12 h-8 mr-3 object-cover "
/>

<Link
                  href={`/ports-data/${country.name}/A-1`}
                  className="text-xl font-semibold text-black hover:text-blue-600 transition"
                >
                  {country.name}
                </Link>
              </div>
              <ul className="text-sm text-black space-y-1">
  {country.ports.map((port) => (
    <li key={port}>
      <Link
        href={`/global-ports/${country.name}/${port
          .toUpperCase()
          .replace(/[^A-Z0-9]/g, "-")}`}
        className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 py-0.5 underline hover:scale-102 transition cursor-pointer"
      >
        {port}
        <span className="text-xs">↗</span>
      </Link>
    </li>
  ))}
</ul>
              <div className="mt-4 text-right">
                <Link
                  href={`/ports-data/${country.name}/A-1`}
                  className="text-sm py-2 px-3 text-white bg-blue-600 hover:underline font-medium"
                >
                  View all →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PortDataByCountry



import Link from "next/link";

const countries = [
  {
    name: "Indonesia",
    ports: [
      "CENGKARENG SOEKARNO HATTA U",
      "LOBAM",
      "TANJUNG PERAK",
      "TANJUNG PRIOK",
      "Cengkareng Sukarno Hatta u",
    ],
  },
  {
    name: "Mexico",
    ports: [
      "AEROPUERTO INTERNACI",
      "MANZANILLO",
      "COLOMBIA",
      "NUEVO LAREDO",
      "PUENTE INTERNACIONAL",
    ],
  },
  {
    name: "Philippines",
    ports: [
      "Ninoy Aquino Int'l Airport",
      "Manila Int'l Container Port",
      "Port of Subic",
      "Sub-Port of Siain",
      "Port of Clark",
    ],
  },
  {
    name: "Russia",
    ports: [
      "TAIPEI AIRPORT TAIWAN",
      "TVER",
      "MOSNOV",
      "MOSCOW  RUSSIA",
      "Other",
    ],
  },
  {
    name: "Tanzania",
    ports: [
      "KILIMANJARO INTERN. AIRPORT",
      "SIRARI",
      "TUNDUMA",
      "TANGA PORT",
      "NAMANGA",
    ],
  },
  {
    name: "Vietnam",
    ports: [
      "CANG CAT LAI HCM",
      "HO CHI MINH",
      "TAN CAIMEP TVAI PORT TCTT",
      "WAREHOUSE HIROTA VN",
      "IMARKET VIET NAM CO LIMITED",
    ],
  },
];

const countryFlags = {
  Indonesia: "id",
  Mexico: "mx",
  Philippines: "ph",
  Russia: "ru",
  Tanzania: "tz",
  Vietnam: "vn",
};