import React from 'react'

import Hero from './Hero';
import ShowFilters from './ShowFilters';
import MainSection from './MainSection';
import SearchGlobalData from './SearchGlobalData';


const fetchTradeData = async (params) =>{
  const {
    type,         
    country,      
    product,      
    hscode,       
    port,        
    countryin    
  } = params;

  let payload = {
    source: country?.toLowerCase(),
    type: "master",
    size: 10,
    filters: {},
    distinct_filters: []
  };

  if (type === "export") {
    payload.filters.origin_country = country;
    if (product) payload.filters.Product_Description = product;
    if (hscode) payload.filters.hs_code = hscode + "%";
    if (countryin) payload.filters.destination_country = countryin;
    if (port) payload.filters.Port_of_loading = port;

    payload.distinct_filters = [
      "destination_country",
      "hs_code",
      "Port_of_loading"
    ];
  } else if (type === "import") {
    payload.filters.destination_country = country;
    if (product) payload.filters.Product_Description = product;
    if (hscode) payload.filters.hs_code = hscode + "%";
    if (countryin) payload.filters.origin_country = countryin;
    if (port) payload.filters.Port_of_Unloading = port;

    payload.distinct_filters = [
      "origin_country",
      "hs_code",
      "Port_of_Unloading"
    ];
  }

  const res = await fetch("http://103.30.72.94:8011/distinctCount", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    throw new Error("Failed to fetch trade data");
  }

  const apiResponse = await res.json();

  return {
    
    section4: {
      filters: {
        hsCodes: apiResponse.unique
          .filter((u) => u.startsWith("hs_code"))
          .map((u) => u.split(":")[1].split(",")[0].trim()),
        countries: apiResponse.unique
          .filter((u) => u.startsWith(type === "export" ? "destination_country" : "origin_country"))
          .map((u) => u.split(":")[1].split(",")[0].trim()),
        ports: apiResponse.unique
          .filter((u) =>
            u.startsWith(type === "export" ? "Port_of_loading" : "Port_of_Unloading")
          )
          .map((u) => u.split(":")[1].split(",")[0].trim()),
      },
      table: {
        headers: [
          "DATE",
          "HS CODE",
          "PRODUCT DESCRIPTION",
          type === "export" ? "EXPORTER" : "IMPORTER",
          "QUANTITY",
          "UNIT",
          "TOTAL VALUE USD",
          type === "export" ? "DESTINATION COUNTRY" : "ORIGIN COUNTRY",
          type === "export" ? "PORT OF LOADING" : "PORT OF UNLOADING",
        ],
        rows: apiResponse.data.map((d) => ({
          date: d._source.date,
          hsCode: d._source.hs_code,
          product: d._source.Product_Description,
          exporter: type === "export" ? d._source.exporter : d._source.importer,
          qty: d._source.quantity,
          unit: d._source.unit,
          value: d._source.total_value_usd,
          origin: type === "export"
            ? d._source.destination_country
            : d._source.origin_country,
          port: type === "export"
            ? d._source.Port_of_Loading
            : d._source.Port_of_Unloading,
        })),
        pagination: {
          currentPage: 1,
          totalPages: Math.ceil(apiResponse.data.length / 10),
          nextPageUrl: "/pricing", 
        }
      }
    }
  };
}


let data = {
  section1: {
    subheading: "Discover Real Trade Insights",
    heading: "Sri Lanka Export Data under HS Code 24022050",
  },

  section2: {
    // wholly based on params (sample values for now)
    params: {
      country: "Sri Lanka",
      type: "export",
      product: "01",
      hscode: "24022050",
      countryin: "Unknown",
    },
  },

  section3: {
    
  },

  section4: {
    filters: {
      hsCodes: ["24022050", "24022060"],
      countries: ["Sri Lanka", "India", "Bangladesh"],
      ports: ["Colombo", "Hambantota"],
    },
    table: {
      headers: [
        "DATE",
        "HS CODE",
        "PRODUCT DESCRIPTION",
        "EXPORTER",
        "QUANTITY",
        "UNIT",
        "TOTAL VALUE USD",
        "ORIGIN COUNTRY",
        "PORT OF UNLOADING",
      ],
      rows: [
        {
          date: "12/8/2023",
          hsCode: "24022050",
          product:
            "CIGARETTES, EACH EXCEEDING 72 MM BUT NOT EXCEEDING 84 MM IN LENGTH, ITEM NO : 01 S 28426 OF 08/12/2023",
          exporter: "XXXXXXXXXX",
          qty: "14",
          unit: "KGM",
          value: "587.03",
          origin: "Unknown",
          port: "XPRESS NUPTSE",
        },
        {
          date: "12/7/2023",
          hsCode: "24022050",
          product:
            "CIGARETTES, EACH EXCEEDING 72 MM BUT NOT EXCEEDING 84 MM IN LENGTH, ITEM NO : 01 S 28275 OF 07/12/2023",
          exporter: "XXXXXXXXXX",
          qty: "14",
          unit: "KGM",
          value: "206.77",
          origin: "Unknown",
          port: "SOL RESILIENCE",
        },
        {
          date: "12/7/2023",
          hsCode: "24022050",
          product:
            "CIGARETTES, EACH EXCEEDING 72 MM BUT NOT EXCEEDING 84 MM IN LENGTH, ITEM NO : 01 S 28254 OF 07/12/2023",
          exporter: "XXXXXXXXXX",
          qty: "14",
          unit: "KGM",
          value: "850",
          origin: "Unknown",
          port: "SOL RESILIENCE",
        },
        {
          date: "12/7/2023",
          hsCode: "24022050",
          product:
            "CIGARETTES, EACH EXCEEDING 72 MM BUT NOT EXCEEDING 84 MM IN LENGTH, ITEM NO: 01 S 28217 OF 07/12/2023",
          exporter: "XXXXXXXXXX",
          qty: "42",
          unit: "KGM",
          value: "946.02",
          origin: "Unknown",
          port: "MV BLUE SKY",
        },
        {
          date: "12/7/2023",
          hsCode: "24022050",
          product:
            "CIGARETTES, EACH EXCEEDING 72 MM BUT NOT EXCEEDING 84 MM IN LENGTH, ITEM NO : 01 S 28224 OF 07/12/2023",
          exporter: "XXXXXXXXXX",
          qty: "14",
          unit: "KGM",
          value: "420",
          origin: "Unknown",
          port: "MSC BERANGERE",
        },
        {
          date: "12/7/2023",
          hsCode: "24022050",
          product:
            "CIGARETTES, EACH EXCEEDING 72 MM BUT NOT EXCEEDING 84 MM IN LENGTH, ITEM NO : 01 S 28222 OF 07/12/2023",
          exporter: "XXXXXXXXXX",
          qty: "14.5",
          unit: "KGM",
          value: "206.77",
          origin: "Unknown",
          port: "MSC BERANGERE",
        },
        {
          date: "12/7/2023",
          hsCode: "24022050",
          product:
            "CIGARETTES, EACH EXCEEDING 72 MM BUT NOT EXCEEDING 84 MM IN LENGTH, ITEM NO : 01 S 28247 OF 07/12/2023",
          exporter: "XXXXXXXXXX",
          qty: "29.01",
          unit: "KGM",
          value: "413.55",
          origin: "Unknown",
          port: "SOL RESILIENCE",
        },
        {
          date: "12/7/2023",
          hsCode: "24022050",
          product:
            "CIGARETTES, EACH EXCEEDING 72 MM BUT NOT EXCEEDING 84 MM IN LENGTH, ITEM NO : 01 S 28240 OF 07/12/2023",
          exporter: "XXXXXXXXXX",
          qty: "18.4",
          unit: "KGM",
          value: "1563.72",
          origin: "Unknown",
          port: "MSC MAKOTO II",
        },
        {
          date: "12/7/2023",
          hsCode: "24022050",
          product:
            "CIGARETTES, EACH EXCEEDING 72 MM BUT NOT EXCEEDING 84 MM IN LENGTH, ITEM NO : 01 S 28237 OF 07/12/2023",
          exporter: "XXXXXXXXXX",
          qty: "27.6",
          unit: "KGM",
          value: "1761.09",
          origin: "Unknown",
          port: "VIRA BHUM",
        },
        {
          date: "12/6/2023",
          hsCode: "24022050",
          product:
            "CIGARETTES, EACH EXCEEDING 72 MM BUT NOT EXCEEDING 84 MM IN LENGTH, ITEM NO : 01 S 28072 OF 06/12/2023",
          exporter: "XXXXXXXXXX",
          qty: "14.5",
          unit: "KGM",
          value: "206.77",
          origin: "Unknown",
          port: "AL BIDDA",
        },
      ],
      pagination: {
        currentPage: 1,
        totalPages: 10,
        nextPageUrl: "/pricing",
      },
    },
  },

  section5: {
    heading: "Search Global Export - Import Trade Data",
    content: `Exim Trade Data provides 100% genuine and the latest Export Data of 01 under HS Code 24022050 of Sri Lanka to Unknown. We collect Export Data of 01 under HS Code 24022050 of Sri Lanka to Unknown with product and date. Export Data of 01 under HS Code 24022050 helps to analyze Export price, company name, port, importer and exporter, product description, quantity, market trends, and many other data points. International Trade data of a country helps the global exporters and importers to do analysis and market research to find local suppliers and buyers in that country.`,
    pointers: [
      "Accelerate your export-import trade by data-based decision & avoid risk.",
      "Align your business model with global strategic planning & stay ahead.",
    ],
  },
};


const page = async({params}) => {

  const parame = await params
    data.section3.appliedFilters = parame.params.map((param) => {
  const [label, ...value] = param.split("-");
  return {
    label: label
      .replace(/_/g, " ")         // change underscores to spaces
      .replace(/^./, (s) => s.toUpperCase()), // capitalize first letter
    value: value.join(" ").replace(/_/g, " ")
  };
});

const queryParams = {
    type: data.section3.appliedFilters.find(f => f.label === "Type")?.value?.toLowerCase() || "export",
    country: data.section3.appliedFilters.find(f => f.label === "Country")?.value || "",
    product: data.section3.appliedFilters.find(f => f.label === "Product")?.value || "",
    hscode: data.section3.appliedFilters.find(f => f.label === "Hscode")?.value || "",
    countryin: data.section3.appliedFilters.find(f => f.label === "Countryin")?.value || "",
    port: data.section3.appliedFilters.find(f => f.label === "Port")?.value || "",
  };

const { type, country, product, hscode, countryin, year } = queryParams;

// Formatters
const formatText = (txt) => txt?.replace(/[_-]/g, " ").trim();
const upper = (txt) => txt?.toUpperCase();

// Section 1
let sec1Heading = `Latest ${formatText(country)} ${upper(type)} Data`;
if (product) sec1Heading += ` of ${formatText(product)}`;
if (hscode) sec1Heading += ` under HS Code ${hscode}`;
if (countryin) sec1Heading += ` to ${formatText(countryin)}`;

let sec1Subheading = `Complete Detailed Competitor Analysis through our latest ${upper(type)} Data of ${formatText(country)}${year ? " " + year : ""}.`;
if (product) sec1Subheading += ` Find detailed ${formatText(country)} ${upper(type)} Data statistics consisting of the name of ${product} importer in ${formatText(country)} with Date, HS code, Product Details, quantity, Unit, Total Value in USD, Country, port Loading & unloading, buyer and more shipping information details below.`;

// Section 5
let sec5Heading = "Search Global Export - Import Trade Data";

let sec5Content = `Exim Trade Data provides 100% genuine and the latest ${upper(type)} Data`;
if (product) sec5Content += ` of ${formatText(product)}`;
if (hscode) sec5Content += ` under HS Code ${hscode}`;
sec5Content += ` of ${formatText(country)}`;
if (countryin) sec5Content += ` to ${formatText(countryin)}`;
if (year) sec5Content += ` in ${year}`;
sec5Content += `. We collect ${upper(type)} Data`;
if (product) sec5Content += ` of ${formatText(product)}`;
if (hscode) sec5Content += ` under HS Code ${hscode}`;
sec5Content += ` of ${formatText(country)}`;
if (countryin) sec5Content += ` to ${formatText(countryin)} with product and date.`;
sec5Content += ` ${upper(type)} Data helps to analyze ${upper(type)} price, company name, port, importer and exporter, product description, quantity, market trends, and many other data points. International Trade data of a country helps the global exporters and importers to do analysis and market research to find local suppliers and buyers in that country.`;

// Assign to data object
data.section1 = {
  heading: sec1Heading,
  subheading: sec1Subheading
};

data.section5 = {
  heading: sec5Heading,
  content: sec5Content,
  pointers: [] // fill if needed
};
  try{
    const tradeData = await fetchTradeData(queryParams)
    data.section4 = tradeData.section4
  }catch{

  }

 return (
    <main>
        <Hero data={data.section1}></Hero>
        <ShowFilters appliedFilters={data.section3.appliedFilters}></ShowFilters>
        <MainSection data={data.section4} appliedFilters={data.section3.appliedFilters}></MainSection>
        <SearchGlobalData data={data.section5}></SearchGlobalData>

        <section className="w-full p-12">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    
    <div className="flex flex-col items-center p-6 rounded-2xl shadow-md bg-white hover:shadow-xl transition">
      <img src="/search-data-results/expand-your-business-network.webp" alt="Expand Your Business Network" className="w-16 h-16 mb-4" />
      <h3 className="text-lg font-semibold text-gray-800 text-center">Expand Your Business Network</h3>
    </div>

    <div className="flex flex-col items-center p-6 rounded-2xl shadow-md bg-white hover:shadow-xl transition">
      <img src="/search-data-results/risk-free-market-entry-strategy.webp" alt="Risk Free Market Entry Strategy" className="w-16 h-16 mb-4" />
      <h3 className="text-lg font-semibold text-gray-800 text-center">Risk Free Market Entry Strategy</h3>
    </div>

    <div className="flex flex-col items-center p-6 rounded-2xl shadow-md bg-white hover:shadow-xl transition">
      <img src="/search-data-results/authentic-export-import-trade-data.webp" alt="Authentic Export-Import Trade Data" className="w-16 h-16 mb-4" />
      <h3 className="text-lg font-semibold text-gray-800 text-center">Authentic Export-Import Trade Data</h3>
    </div>

    <div className="flex flex-col items-center p-6 rounded-2xl shadow-md bg-white hover:shadow-xl transition">
      <img src="/search-data-results/import-export-trade-data.webp" alt="Import-Export Trade Data" className="w-16 h-16 mb-4" />
      <h3 className="text-lg font-semibold text-gray-800 text-center">Import-Export Trade Data</h3>
    </div>

  </div>
</section>
    </main>
  );
}

export default page