import React from "react";
import Hero from "./Hero";
import Overview from "./Overview";
import Stats from "./Stats";
import MarketIntel from "./MarketIntel";
import CtaImage from "./CtaImage";
import DetailedTable from "./DetailedTable";

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
}
};

const page = () => {
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
    </main>
  );
};

export default page;
