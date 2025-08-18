import React from "react";
import Hero from "./Hero";
import Overview from "./Overview";
import Stats from "./Stats";
import MarketIntel from "./MarketIntel";
import CtaImage from "./CtaImage";
import DetailedTable from "./DetailedTable";
import FAQSection from "@/app/components/FAQ";

async function fetchPortData(portName, country) {
  const customsCountries = ["argentina","bangladesh","bolivia","botswana","burundi","cameroon","chile","colombia","costa_rica","cote_d_ivoire","dr_congo","ecuador"];

  const source = customsCountries.includes(country.toLowerCase())
    ? country.toLowerCase()
    : "all";

  const payload = {
    source,
    type: "master",
    country_name: country,
    port_name: portName,
  };

  const baseUrl = "http://103.30.72.94:8011";

  const endpoints = [
    "import/portReport/topHSCode",
    "import/portReport/topOriginCountryDestinationCountry",
    "import/portReport/topBuyerSupplier",
    "import/portReport/uniqueBuyerSupplier",
    "export/portReport/topHSCode",
    "export/portReport/topOriginCountryDestinationCountry",
    "export/portReport/topBuyerSupplier",
    "export/portReport/uniqueBuyerSupplier",
    "portReport/forTotal",
  ];

  const responses = await Promise.all(
    endpoints.map((ep) =>
      fetch(`${baseUrl}/${ep}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).then((res) => res.json())
    )
  );

  // Map responses to your structure
  const [
    importHSCode,
    importCountries,
    importBuyers,
    importSuppliers,
    exportHSCode,
    exportCountries,
    exportBuyers,
    exportSuppliers,
    totalData,
  ] = responses.map((r) => r.data);

  let data = {
    portName,
    section1: {
      heading: `${portName} Port Data`,
    },
    section2: {
      shipments: totalData?.[0]?.["Total Importer"] || "0",
      buyers: totalData?.[0]?.["distinct Importer"] || "0",
      suppliers: totalData?.[0]?.["distinct Exporter"] || "0",
    },
    section3: {
      shipmentSent: totalData?.[0]?.["Total Importer"] || 0,
      buyers: totalData?.[0]?.["distinct Importer"] || 0,
      shipmentReceived: totalData?.[0]?.["Total Exporter"] || 0,
      suppliers: totalData?.[0]?.["distinct Exporter"] || 0,
    },
    section4: {
      import: {
        hsCodes: importHSCode?.map((d) => ({
          code: d["Top Import HS Code"],
          value: d["Total Shipment"],
        })),
        countries: importCountries?.map((d) => ({
          name: d["Top Import Country"],
          qty: d["Total Shipment"],
        })),
        buyers: importBuyers?.map((d) => ({
          name: d["Top Buyers"],
          qty: d["Total Shipment"],
        })),
        suppliers: importSuppliers?.map((d) => ({
          name: d["Buyers"], // API returns "Buyers" key here
          qty: d["Total Shipment"],
        })),
      },
      export: {
        hsCodes: exportHSCode?.map((d) => ({
          code: d["Top Export HS Code"],
          value: d["Total Shipment"],
        })),
        countries: exportCountries?.map((d) => ({
          name: d["Top Export Country"],
          qty: d["Total Shipment"],
        })),
        buyers: exportBuyers?.map((d) => ({
          name: d["Top Suppliers"], // API key is "Top Suppliers"
          qty: d["Total Shipment"],
        })),
        suppliers: exportSuppliers?.map((d) => ({
          name: d["Suppliers"],
          qty: d["Total Shipment"],
        })),
      },
    },
    section5: {
      heading: "Get Detailed Port Shipment Data",
      bgImage: "/images/cta-bg.jpg",
    },
    section6: {
  portName: "CENGKARENG SOEKARNO HATTA U",
  importData: [
    {
      hsCode: "84529090",
      description:
        "LU 6015 ECCENTRIC WHEEL UP & DOWN MOVEMENT OF NEEDLE ROW (03 QTY)",
      qty: "9.5",
      origin: "Sri Lanka",
      destination: "China",
    },
    {
      hsCode: "84529090",
      description:
        "LU 6015 ECCENTRIC WHEEL UP & DOWN MOVEMENT OF NEEDLE ROW (03 QTY)",
      qty: "9.5",
      origin: "Sri Lanka",
      destination: "China",
    },
  ],
  exportData: [
    {
      hsCode: "85044090",
      description: "UPS POWER SUPPLY UNIT",
      qty: "150",
      origin: "Indonesia",
      destination: "USA",
    },
    {
      hsCode: "30049099",
      description: "PHARMACEUTICAL PRODUCTS",
      qty: "120",
      origin: "Indonesia",
      destination: "Germany",
    },
  ],
},section7: {
      faqs: [
        {
          question: `How many import shipments were made at ${portName} port during FY 2024?`,
          answer: `In 2024, there were ${
            totalData?.[0]?.["Total Importer"] || 0
          } shipments made at ${portName} port.`,
        },
        {
          question: `How many active buyers were at ${portName} port in 2024?`,
          answer: `There were around ${
            totalData?.[0]?.["distinct Importer"] || 0
          } active buyers at ${portName} port in 2024.`,
        },
        {
          question: `Who was the leading buyer to ${portName} port in 2024?`,
          answer: `${
            importBuyers?.[0]?.["Top Buyers"] || "N/A"
          } was the leading buyer to ${portName} Port in 2024.`,
        },
        {
          question: `How many active suppliers were at ${portName} Port in 2024?`,
          answer: `There were around ${
            totalData?.[0]?.["distinct Exporter"] || 0
          } active suppliers at ${portName} port in 2024.`,
        },
        {
          question: `Who was the leading exporter from ${portName} Port in 2024?`,
          answer: `${
            exportSuppliers?.[0]?.["Suppliers"] || "N/A"
          } was the leading exporter from ${portName} Port in 2024.`,
        },
        {
          question: `How can I access the yearwise ${portName} port data?`,
          answer:
            "Through Exim Global Trade Intelligence System, you can access global ports data by hs code, buyer, supplier, country, port details.",
        },
      ],
    },
  };

  return data;
}

let data = {
  portName: "CENGKARENG SOEKARNO HATTA U",
  section1: {
    heading: "CENGKARENG SOEKARNO HATTA U Port Data",
  },
  section2: {
    shipments: "xxx",
    buyers: "76723",
    suppliers: "18878",
  },
  section3: {
    shipmentSent: 3754149,
    buyers: 76723,
    shipmentReceived: 3754149,
    suppliers: 18878,
  },
  section4: {
  import: {
    hsCodes: [
      { code: "73089099", value: 67 },
      { code: "85444299", value: 7 },
      { code: "40169390", value: 4 },
      { code: "85045020", value: 1 },
      { code: "85365096", value: 1 }
    ],
    countries: [
      { name: "Indonesia", qty: 81 }
    ],
    buyers: [
      { name: "ESCO BINTAN INDONESIA", qty: 760 },
      { name: "PT PEPPERL AND FUCHS BINTAN", qty: 706 },
      { name: "SANDEN ELECTRONICS INDONESIA", qty: 441 },
      { name: "CCI BINTAN", qty: 325 },
      { name: "PT AMC BINTAN", qty: 268 }
    ],
    suppliers: [
      { name: "NA", qty: 3702 }
    ]
  },
  export: {
    hsCodes: [
      { code: "71131190", value: 700 },
      { code: "84733010", value: 387 },
      { code: "85334000", value: 309 },
      { code: "84439100", value: 281 },
      { code: "90318090", value: 196 }
    ],
    countries: [
      { name: "Indonesia", qty: 6246 },
      { name: "INDONESIA", qty: 111 }
    ],
    buyers: [
      { name: "PT MAPPLE MITRA ADIPERKASA", qty: 83016 },
      { name: "TRAKINDO UTAMA", qty: 56356 },
      { name: "PTSARIMODE FASHINDO ADIPERKASA", qty: 42631 },
      { name: "PT FASHION MARKETPLACE INDONESIA", qty: 31311 },
      { name: "PTMISUMI INDONESIA", qty: 22744 }
    ],
    suppliers: [
      { name: "NA", qty: 1603852 },
      { name: "PT AEROFOOD INDONESIA", qty: 109 },
      { name: "KDS INDONESIA", qty: 1 },
      { name: "PT PAN BROTHERS TBK", qty: 1 }
    ]
  }
},
  section5: {
    heading: "Get Detailed Port Shipment Data",
    bgImage: "/images/cta-bg.jpg",
  },
  section6: {
  portName: "CENGKARENG SOEKARNO HATTA U",
  importData: [
    {
      hsCode: "84529090",
      description:
        "LU 6015 ECCENTRIC WHEEL UP & DOWN MOVEMENT OF NEEDLE ROW (03 QTY)",
      qty: "9.5",
      origin: "Sri Lanka",
      destination: "China",
    },
    {
      hsCode: "84529090",
      description:
        "LU 6015 ECCENTRIC WHEEL UP & DOWN MOVEMENT OF NEEDLE ROW (03 QTY)",
      qty: "9.5",
      origin: "Sri Lanka",
      destination: "China",
    },
  ],
  exportData: [
    {
      hsCode: "85044090",
      description: "UPS POWER SUPPLY UNIT",
      qty: "150",
      origin: "Indonesia",
      destination: "USA",
    },
    {
      hsCode: "30049099",
      description: "PHARMACEUTICAL PRODUCTS",
      qty: "120",
      origin: "Indonesia",
      destination: "Germany",
    },
  ],
  
},
section7: {
      
    },
};

const page = async ({params}) => {
  const {Country , Port} = await params;

  try{
  data = await fetchPortData(Port,Country)
  }catch{
    data.portName = Port
    data.section7 = {
      faqs: [
        {
          question: `How many import shipments were made at ${Port} port during FY 2024?`,
          answer: `In 2024, there were ${
             0
          } shipments made at ${Port} port.`,
        },
        {
          question: `How many active buyers were at ${Port} port in 2024?`,
          answer: `There were around ${
             0
          } active buyers at ${Port} port in 2024.`,
        },
        {
          question: `Who was the leading buyer to ${Port} port in 2024?`,
          answer: `${
             "N/A"
          } was the leading buyer to ${Port} Port in 2024.`,
        },
        {
          question: `How many active suppliers were at ${Port} Port in 2024?`,
          answer: `There were around ${
           0
          } active suppliers at ${Port} port in 2024.`,
        },
        {
          question: `Who was the leading exporter from ${Port} Port in 2024?`,
          answer: `${
             "N/A"
          } was the leading exporter from ${Port} Port in 2024.`,
        },
        {
          question: `How can I access the yearwise ${Port} port data?`,
          answer:
            "Through Exim Global Trade Intelligence System, you can access global ports data by hs code, buyer, supplier, country, port details.",
        },
      ],
    }
  }
  return (
    <main>
      <Hero heading={data.section1.heading} />
      <Overview portName={data.portName} stats={data.section2} />
      <Stats portName={data.portName} data={data.section3} />
      <MarketIntel portName={data.portName} importData={data.section4.import} exportData={data.section4.export} />
      <CtaImage portName={data.portName} />
      <DetailedTable portName={data.section6.portName}
  importData={data.section6.importData}
  exportData={data.section6.exportData} />
  <FAQSection faqs={data.section7.faqs}></FAQSection>
    </main>
  );
};

export default page;
