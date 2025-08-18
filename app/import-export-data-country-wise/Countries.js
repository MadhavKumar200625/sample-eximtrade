'use client'
import Link from 'next/link';
import React from 'react'
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";


const countries = [
  {
    name: 'Armenia',
    continent: 'ASIA',
    flag: 'https://flagcdn.com/w40/am.png',
  },
  {
    name: 'Azerbaijan',
    continent: 'ASIA',
    flag: 'https://flagcdn.com/w40/az.png',
  },
  {
    name: 'Bahrain',
    continent: 'ASIA',
    flag: 'https://flagcdn.com/w40/bh.png',
  },
  {
    name: 'Bangladesh',
    continent: 'ASIA',
    flag: 'https://flagcdn.com/w40/bd.png',
  },
  {
    name: 'Brunei',
    continent: 'ASIA',
    flag: 'https://flagcdn.com/w40/bn.png',
  },
  {
    name: 'Cambodia',
    continent: 'ASIA',
    flag: 'https://flagcdn.com/w40/kh.png',
  },
  {
    name: 'China',
    continent: 'ASIA',
    flag: 'https://flagcdn.com/w40/cn.png',
  },
  {
    name: 'Hong Kong',
    continent: 'ASIA',
    flag: 'https://flagcdn.com/w40/hk.png',
  },
  {
    name: 'India',
    continent: 'ASIA',
    flag: 'https://flagcdn.com/w40/in.png',
  },
  {
    name: 'Indonesia',
    continent: 'ASIA',
    flag: 'https://flagcdn.com/w40/id.png',
  },
  {
    name: 'Iran',
    continent: 'ASIA',
    flag: 'https://flagcdn.com/w40/ir.png',
  },
  {
    name: 'Israel',
    continent: 'ASIA',
    flag: 'https://flagcdn.com/w40/il.png',
  },
  {
    name: 'Japan',
    continent: 'ASIA',
    flag: 'https://flagcdn.com/w40/jp.png',
  },
  {
    name: 'Jordan',
    continent: 'ASIA',
    flag: 'https://flagcdn.com/w40/jo.png',
  },
  {
    name: 'Kazakhstan',
    continent: 'ASIA',
    flag: 'https://flagcdn.com/w40/kz.png',
  },
  {
    name: 'Korea',
    continent: 'ASIA',
    flag: 'https://flagcdn.com/w40/kr.png',
  },
  {
    name: 'Kuwait',
    continent: 'ASIA',
    flag: 'https://flagcdn.com/w40/kw.png',
  },
  {
    name: 'Laos',
    continent: 'ASIA',
    flag: 'https://flagcdn.com/w40/la.png',
  },
  {
    name: 'Lebanon',
    continent: 'ASIA',
    flag: 'https://flagcdn.com/w40/lb.png',
  },
  {
    name: 'Maldives',
    continent: 'ASIA',
    flag: 'https://flagcdn.com/w40/mv.png',
  },
  {
    name: 'Mongolia',
    continent: 'ASIA',
    flag: 'https://flagcdn.com/w40/mn.png',
  },
  {
    name: 'Myanmar',
    continent: 'ASIA',
    flag: 'https://flagcdn.com/w40/mm.png',
  },
  {
    name: 'Nepal',
    continent: 'ASIA',
    flag: 'https://flagcdn.com/w40/np.png',
  },
  {
    name: 'Oman',
    continent: 'ASIA',
    flag: 'https://flagcdn.com/w40/om.png',
  },
  {
    name: 'Pakistan',
    continent: 'ASIA',
    flag: 'https://flagcdn.com/w40/pk.png',
  },
  {
    name: 'Philippines',
    continent: 'ASIA',
    flag: 'https://flagcdn.com/w40/ph.png',
  },
  {
    name: 'Qatar',
    continent: 'ASIA',
    flag: 'https://flagcdn.com/w40/qa.png',
  },
  {
    name: 'Russia',
    continent: 'ASIA',
    flag: 'https://flagcdn.com/w40/ru.png',
  },
  {
    name: 'Saudi Arabia',
    continent: 'ASIA',
    flag: 'https://flagcdn.com/w40/sa.png',
  },
  {
    name: 'Singapore',
    continent: 'ASIA',
    flag: 'https://flagcdn.com/w40/sg.png',
  },
  {
    name: 'Sri Lanka',
    continent: 'ASIA',
    flag: 'https://flagcdn.com/w40/lk.png',
  },
  {
    name: 'Syria',
    continent: 'ASIA',
    flag: 'https://flagcdn.com/w40/sy.png',
  },
  {
    name: 'Taiwan',
    continent: 'ASIA',
    flag: 'https://flagcdn.com/w40/tw.png',
  },
  {
    name: 'Thailand',
    continent: 'ASIA',
    flag: 'https://flagcdn.com/w40/th.png',
  },
  {
    name: 'Turkey',
    continent: 'ASIA',
    flag: 'https://flagcdn.com/w40/tr.png',
  },
  {
    name: 'UAE',
    continent: 'ASIA',
    flag: 'https://flagcdn.com/w40/ae.png',
  },
  {
    name: 'Uzbekistan',
    continent: 'ASIA',
    flag: 'https://flagcdn.com/w40/uz.png',
  },
  {
    name: 'Vietnam',
    continent: 'ASIA',
    flag: 'https://flagcdn.com/w40/vn.png',
  },
  {
    name: 'Yemen',
    continent: 'ASIA',
    flag: 'https://flagcdn.com/w40/ye.png',
  },
  {
    name: 'Algeria',
    continent: 'AFRICA',
    flag: 'https://flagcdn.com/dz.svg',
  },
  {
    name: 'Angola',
    continent: 'AFRICA',
    flag: 'https://flagcdn.com/ao.svg',
  },
  {
    name: 'Botswana',
    continent: 'AFRICA',
    flag: 'https://flagcdn.com/bw.svg',
  },
  {
    name: 'Burkina Faso',
    continent: 'AFRICA',
    flag: 'https://flagcdn.com/bf.svg',
  },
  {
    name: 'Burundi',
    continent: 'AFRICA',
    flag: 'https://flagcdn.com/bi.svg',
  },
  {
    name: 'Cameroon',
    continent: 'AFRICA',
    flag: 'https://flagcdn.com/cm.svg',
  },
  {
    name: 'Chad',
    continent: 'AFRICA',
    flag: 'https://flagcdn.com/td.svg',
  },
  {
    name: 'Congo',
    continent: 'AFRICA',
    flag: 'https://flagcdn.com/cg.svg',
  },
  {
    name: "Cote D'Ivoire",
    continent: 'AFRICA',
    flag: 'https://flagcdn.com/ci.svg',
  },
  {
    name: 'Egypt',
    continent: 'AFRICA',
    flag: 'https://flagcdn.com/eg.svg',
  },
  {
    name: 'Ethiopia',
    continent: 'AFRICA',
    flag: 'https://flagcdn.com/et.svg',
  },
  {
    name: 'Ghana',
    continent: 'AFRICA',
    flag: 'https://flagcdn.com/gh.svg',
  },
  {
    name: 'Kenya',
    continent: 'AFRICA',
    flag: 'https://flagcdn.com/ke.svg',
  },
  {
    name: 'Lesotho',
    continent: 'AFRICA',
    flag: 'https://flagcdn.com/ls.svg',
  },
  {
    name: 'Liberia',
    continent: 'AFRICA',
    flag: 'https://flagcdn.com/lr.svg',
  },
  {
    name: 'Libya',
    continent: 'AFRICA',
    flag: 'https://flagcdn.com/ly.svg',
  },
  {
    name: 'Madagascar',
    continent: 'AFRICA',
    flag: 'https://flagcdn.com/mg.svg',
  },
  {
    name: 'Malawi',
    continent: 'AFRICA',
    flag: 'https://flagcdn.com/mw.svg',
  },
  {
    name: 'Mali',
    continent: 'AFRICA',
    flag: 'https://flagcdn.com/ml.svg',
  },
  {
    name: 'Mauritania',
    continent: 'AFRICA',
    flag: 'https://flagcdn.com/mr.svg',
  },
  {
    name: 'Mauritius',
    continent: 'AFRICA',
    flag: 'https://flagcdn.com/mu.svg',
  },
  {
    name: 'Morocco',
    continent: 'AFRICA',
    flag: 'https://flagcdn.com/ma.svg',
  },
  {
    name: 'Mozambique',
    continent: 'AFRICA',
    flag: 'https://flagcdn.com/mz.svg',
  },
  {
    name: 'Namibia',
    continent: 'AFRICA',
    flag: 'https://flagcdn.com/na.svg',
  },
  {
    name: 'Nigeria',
    continent: 'AFRICA',
    flag: 'https://flagcdn.com/ng.svg',
  },
  {
    name: 'Rwanda',
    continent: 'AFRICA',
    flag: 'https://flagcdn.com/rw.svg',
  },
  {
    name: 'Sao Tome and Principe',
    continent: 'AFRICA',
    flag: 'https://flagcdn.com/st.svg',
  },
  {
    name: 'Sierra Leone',
    continent: 'AFRICA',
    flag: 'https://flagcdn.com/sl.svg',
  },
  {
    name: 'South Africa',
    continent: 'AFRICA',
    flag: 'https://flagcdn.com/za.svg',
  },
  {
    name: 'Tanzania',
    continent: 'AFRICA',
    flag: 'https://flagcdn.com/tz.svg',
  },
  {
    name: 'Tunisia',
    continent: 'AFRICA',
    flag: 'https://flagcdn.com/tn.svg',
  },
  {
    name: 'Uganda',
    continent: 'AFRICA',
    flag: 'https://flagcdn.com/ug.svg',
  },
  {
    name: 'Zambia',
    continent: 'AFRICA',
    flag: 'https://flagcdn.com/zm.svg',
  },
  {
    name: 'Zimbabwe',
    continent: 'AFRICA',
    flag: 'https://flagcdn.com/zw.svg',
  },
  {
    name: 'Austria',
    continent: 'EUROPE',
    flag: 'https://flagcdn.com/at.svg',
  },
  {
    name: 'Belgium',
    continent: 'EUROPE',
    flag: 'https://flagcdn.com/be.svg',
  },
  {
    name: 'Bosnia and Herzegovina',
    continent: 'EUROPE',
    flag: 'https://flagcdn.com/ba.svg',
  },
  {
    name: 'Bulgaria',
    continent: 'EUROPE',
    flag: 'https://flagcdn.com/bg.svg',
  },
  {
    name: 'Croatia',
    continent: 'EUROPE',
    flag: 'https://flagcdn.com/hr.svg',
  },
  {
    name: 'Cyprus',
    continent: 'EUROPE',
    flag: 'https://flagcdn.com/cy.svg',
  },
  {
    name: 'Czech Republic',
    continent: 'EUROPE',
    flag: 'https://flagcdn.com/cz.svg',
  },
  {
    name: 'Denmark',
    continent: 'EUROPE',
    flag: 'https://flagcdn.com/dk.svg',
  },
  {
    name: 'Finland',
    continent: 'EUROPE',
    flag: 'https://flagcdn.com/fi.svg',
  },
  {
    name: 'France',
    continent: 'EUROPE',
    flag: 'https://flagcdn.com/fr.svg',
  },
  {
    name: 'Germany',
    continent: 'EUROPE',
    flag: 'https://flagcdn.com/de.svg',
  },
  {
    name: 'Greece',
    continent: 'EUROPE',
    flag: 'https://flagcdn.com/gr.svg',
  },
  {
    name: 'Hungary',
    continent: 'EUROPE',
    flag: 'https://flagcdn.com/hu.svg',
  },
  {
    name: 'Iceland',
    continent: 'EUROPE',
    flag: 'https://flagcdn.com/is.svg',
  },
  {
    name: 'Ireland',
    continent: 'EUROPE',
    flag: 'https://flagcdn.com/ie.svg',
  },
  {
    name: 'Italy',
    continent: 'EUROPE',
    flag: 'https://flagcdn.com/it.svg',
  },
  {
    name: 'Latvia',
    continent: 'EUROPE',
    flag: 'https://flagcdn.com/lv.svg',
  },
  {
    name: 'Luxembourg',
    continent: 'EUROPE',
    flag: 'https://flagcdn.com/lu.svg',
  },
  {
    name: 'Lithuania',
    continent: 'EUROPE',
    flag: 'https://flagcdn.com/lt.svg',
  },
  {
    name: 'Malta',
    continent: 'EUROPE',
    flag: 'https://flagcdn.com/mt.svg',
  },
  {
    name: 'Moldova',
    continent: 'EUROPE',
    flag: 'https://flagcdn.com/md.svg',
  },
  {
    name: 'Netherlands',
    continent: 'EUROPE',
    flag: 'https://flagcdn.com/nl.svg',
  },
  {
    name: 'North Macedonia',
    continent: 'EUROPE',
    flag: 'https://flagcdn.com/mk.svg',
  },
  {
    name: 'Poland',
    continent: 'EUROPE',
    flag: 'https://flagcdn.com/pl.svg',
  },
  {
    name: 'Portugal',
    continent: 'EUROPE',
    flag: 'https://flagcdn.com/pt.svg',
  },
  {
    name: 'Romania',
    continent: 'EUROPE',
    flag: 'https://flagcdn.com/ro.svg',
  },
  {
    name: 'Serbia',
    continent: 'EUROPE',
    flag: 'https://flagcdn.com/rs.svg',
  },
  {
    name: 'Slovenia',
    continent: 'EUROPE',
    flag: 'https://flagcdn.com/si.svg',
  },
  {
    name: 'Spain',
    continent: 'EUROPE',
    flag: 'https://flagcdn.com/es.svg',
  },
  {
    name: 'Sweden',
    continent: 'EUROPE',
    flag: 'https://flagcdn.com/se.svg',
  },
  {
    name: 'Switzerland',
    continent: 'EUROPE',
    flag: 'https://flagcdn.com/ch.svg',
  },
  {
    name: 'UK',
    continent: 'EUROPE',
    flag: 'https://flagcdn.com/gb.svg',
  },
  {
    name: 'Ukraine',
    continent: 'EUROPE',
    flag: 'https://flagcdn.com/ua.svg',
  },
  {
    name: 'Canada',
    continent: 'NORTH AMERICA',
    flag: 'https://flagcdn.com/ca.svg',
  },
  {
    name: 'Costa Rica',
    continent: 'NORTH AMERICA',
    flag: 'https://flagcdn.com/cr.svg',
  },
  {
    name: 'Cuba',
    continent: 'NORTH AMERICA',
    flag: 'https://flagcdn.com/cu.svg',
  },
  {
    name: 'Dominican Republic',
    continent: 'NORTH AMERICA',
    flag: 'https://flagcdn.com/do.svg',
  },
  {
    name: 'El Salvador',
    continent: 'NORTH AMERICA',
    flag: 'https://flagcdn.com/sv.svg',
  },
  {
    name: 'Guatemala',
    continent: 'NORTH AMERICA',
    flag: 'https://flagcdn.com/gt.svg',
  },
  {
    name: 'Honduras',
    continent: 'NORTH AMERICA',
    flag: 'https://flagcdn.com/hn.svg',
  },
  {
    name: 'Jamaica',
    continent: 'NORTH AMERICA',
    flag: 'https://flagcdn.com/jm.svg',
  },
  {
    name: 'Mexico',
    continent: 'NORTH AMERICA',
    flag: 'https://flagcdn.com/mx.svg',
  },
  {
    name: 'Nicaragua',
    continent: 'NORTH AMERICA',
    flag: 'https://flagcdn.com/ni.svg',
  },
  {
    name: 'Panama',
    continent: 'NORTH AMERICA',
    flag: 'https://flagcdn.com/pa.svg',
  },
  {
    name: 'US',
    continent: 'NORTH AMERICA',
    flag: 'https://flagcdn.com/us.svg',
  },
   {
    name: 'Australia',
    continent: 'OCEANIA',
    flag: 'https://flagcdn.com/au.svg',
  },
  {
    name: 'Fiji',
    continent: 'OCEANIA',
    flag: 'https://flagcdn.com/fj.svg',
  },
  {
    name: 'New Zealand',
    continent: 'OCEANIA',
    flag: 'https://flagcdn.com/nz.svg',
  },
  {
    name: 'Papua New Guinea',
    continent: 'OCEANIA',
    flag: 'https://flagcdn.com/pg.svg',
  },
  {
    name: 'Argentina',
    continent: 'SOUTH AMERICA',
    flag: 'https://flagcdn.com/ar.svg',
  },
  {
    name: 'Bolivia',
    continent: 'SOUTH AMERICA',
    flag: 'https://flagcdn.com/bo.svg',
  },
  {
    name: 'Brazil',
    continent: 'SOUTH AMERICA',
    flag: 'https://flagcdn.com/br.svg',
  },
  {
    name: 'Chile',
    continent: 'SOUTH AMERICA',
    flag: 'https://flagcdn.com/cl.svg',
  },
  {
    name: 'Colombia',
    continent: 'SOUTH AMERICA',
    flag: 'https://flagcdn.com/co.svg',
  },
  {
    name: 'Ecuador',
    continent: 'SOUTH AMERICA',
    flag: 'https://flagcdn.com/ec.svg',
  },
  {
    name: 'Guyana',
    continent: 'SOUTH AMERICA',
    flag: 'https://flagcdn.com/gy.svg',
  },
  {
    name: 'Paraguay',
    continent: 'SOUTH AMERICA',
    flag: 'https://flagcdn.com/py.svg',
  },
  {
    name: 'Peru',
    continent: 'SOUTH AMERICA',
    flag: 'https://flagcdn.com/pe.svg',
  },
  {
    name: 'Suriname',
    continent: 'SOUTH AMERICA',
    flag: 'https://flagcdn.com/sr.svg',
  },
  {
    name: 'Venezuela',
    continent: 'SOUTH AMERICA',
    flag: 'https://flagcdn.com/ve.svg',
  },
  {
    name: 'Uruguay',
    continent: 'SOUTH AMERICA',
    flag: 'https://flagcdn.com/uy.svg',
  }
];

const Countries = () => {
  const continents = [...new Set(countries.map(c => c.continent))];
  const [activeContinent, setActiveContinent] = useState(continents[0]);

  const filteredCountries = countries.filter(c => c.continent === activeContinent);

  return (
    <section className="bg-white py-12 px-6">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-4">
        Country wise Import Export Data
      </h2>

      {/* Subheading */}
      <p className="text-base text-black text-center max-w-4xl mx-auto mb-8">
        Access the accurate import export data statistics of 200+ countries based on customs data reported by other countries. 
        Find shipment records by HS Code, product description, quantity, unit, value, country of origin/destination, importer name, 
        exporter name and port of loading/unloading shipping information.
      </p>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {continents.map(continent => (
          <button
            key={continent}
            onClick={() => setActiveContinent(continent)}
            className={`px-4 py-2 rounded-lg font-medium border ${
              activeContinent === continent
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-black border-gray-300 hover:bg-gray-100"
            }`}
          >
            {continent}
          </button>
        ))}
      </div>

      {/* Continent Heading */}
      <h3 className="text-2xl font-semibold text-black mb-6 text-center">
        {activeContinent} Import-Export Trade Data
      </h3>

      {/* Country Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  xl:px-20">
        {filteredCountries.map((country, idx) => (
          <div
            key={idx}
className="flex items-center gap-4 p-4  text-white border border-blue-300 rounded-xl shadow hover:shadow-lg transition">
            {/* Flag */}
            <Link  href={`country-wise-${country.name.replace(" ","-")}-import-data`}><img src={country.flag} alt={country.name} className="w-18 h-auto " /></Link>

            

            {/* Country Info */}
            <div className="flex flex-col">
<Link
  href={`country-wise-${country.name.replace(" ", "-")}-import-and-export-data`}
  className="flex items-center gap-1 font-semibold md:text-xl text-lg underline text-black"
>
  {country.name} Import Export Data
  <ArrowUpRight className="w-5 h-5" />
</Link>              
              <div className="flex gap-2 mt-2">
                <Link href={`country-wise-${country.name.replace(" ","-")}-import-data`} className="text-sm px-3 py-1 bg-transparent shadow-md text-black border border-blue-600 hover:text-white hover:bg-blue-600  hover:scale-108 transition">
                  Import Data
                </Link>
                <Link href={`country-wise-${country.name.replace(" ","-")}-export-data`} className="text-sm px-3 py-1 bg-transparent shadow-md text-black border border-blue-600  hover:text-white hover:bg-blue-600  hover:scale-108 transition">
                  Export Data
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Countries