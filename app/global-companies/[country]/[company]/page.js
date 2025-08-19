import Hero from './Hero';
import React from 'react'
import Overview from './Overview';
import Stats from './Stats';
import MarketIntel from './MarketIntel';
import DetailedTable from './DetailedTable';
import CtaImage from './CtaImage';
import FAQSection from '@/app/components/FAQ';

const fetchDataFromApi = async (country, company_name) => {
  const allCountries = "afghanistan,algeria,angola,argentina,armenia,australia,austria,azerbaijan,bahrain,bangladesh,barbados,belarus,belgium,benin,bermuda,bhutan,bolivia,botswana,brazil,bulgaria,burundi,cambodia,cameroon,canada,chad,chile,china,colombia,costa_rica,cote_d_ivoire,croatia,cyprus,czech_republic,denmark,dominican_republic,dr_congo,ecuador,egypt,estonia,ethiopia,fiji,finland,france,gabon,georgia,germany,ghana,greece,guatemala,guinea,guyana,hungary,india,indonesia,iran,iraq,ireland,israel,italy,jamaica,japan,jordan,kazakhstan,kenya,kosovo,kuwait,kyrgyzstan,latvia,lesotho,liberia,libya,lithuania,luxembourg,malawi,malaysia,maldives,mauritius,mexico,moldova,morocco,mozambique,nepal,netherland,new_zealand,nicaragua,niger,nigeria,norway,oman,pakistan,palestine,panama,papua_new_guinea,paraguay,peru,philippines,poland,portugal,qatar,romania,russia,rwanda,sao_tome_and_principe,saudi_arabia,senegal,serbia,seychelles,sierra_leone,singapore,slovakia,slovenia,somalia,south_africa,south_korea,spain,sri_lanka,sudan,sweden,switzerland,syria,taiwan,tajikistan,tanzania,thailand,togo,trinidad_and_tobago,tunisia,turkey,turkmenistan,uganda,ukraine,united_arab_emirates,united_kingdom,uruguay,usa,uzbekistan,venezuela,vietnam,yemen,zambia,zimbabwe".split(",");

  const customsCountries = "argentina,bangladesh,bolivia,botswana,burundi,cameroon,chile,colombia,costa_rica,cote_d_ivoire,dr_congo,ecuador,ethiopia,fiji,ghana,guatemala,guyana,india,indonesia,kazakhstan,kenya,kosovo,lesotho,liberia,malawi,mexico,moldova,nicaragua,nigeria,pakistan,panama,paraguay,peru,philippines,russia,rwanda,sao_tome_and_principe,sierra_leone,singapore,sri_lanka,tanzania,turkey,uganda,ukraine,uruguay,uzbekistan,venezuela,vietnam,zambia,zimbabwe".split(",");

  const formattedCountry = country.toLowerCase().replace(/\s+/g, "_");

  const payload = {
    source: customsCountries.includes(formattedCountry) ? formattedCountry : "all",
    type: "master",
    country_name: formattedCountry,
    company_name: company_name,
  };

  const endpoints = [
    "valueCount",
    "uniqueBuyerSupplier",
    "topHSCode",
    "topOriginCountryDestinationCountry",
    "topPortOfLoadingUnloading",
    "topBuyerSupplier",
    "topExporterImporter"
  ];

  const baseUrl = "http://103.30.72.94:8011/companyReport/";

  const responses = await Promise.all(
    endpoints.map((ep) =>
      fetch(baseUrl + ep, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).then((res) => res.json())
    )
  );

  const [
    valueCount,
    uniqueBuyerSupplier,
    topHSCode,
    topOriginCountryDestinationCountry,
    topPortOfLoadingUnloading,
    topBuyerSupplier,
    topExporterImporter
  ] = responses.map((r) => r.data || []);

  return {
    companyName: company_name,
    section2: {
      heading: company_name,
      exportOverview: {
        text: `As per our global export database, ${company_name} made total ${valueCount[0]?.["Total Export Shipment"] || 0} export shipments with a total export value of $${valueCount[0]?.["Total Value"] || 0}.`,
        pointers: [
          `Top Export Markets: ${topOriginCountryDestinationCountry.filter(d => d["Top Export Country"]).map(d => `${d["Top Export Country"].trim()} (${d["Total Value"]} USD)`).slice(0,4).join(", ")}.`,
          `Major Export Product Category along with HS Code: ${topHSCode.filter(d => d["Top Export HS Code"]).map(d => `HSN Code : ${d["Top Export HS Code"]} Total Shipment - ${d["Total Shipment"]}`).slice(0,5).join(" | ")}`
        ]
      },
      importOverview: {
        text: `As per our global import database, ${company_name} made total ${valueCount[1]?.["Total Import Shipment"] || 0} import shipments with a total import value of $${valueCount[1]?.["Total Value"] || 0}.`,
        pointers: [
          `Top Import Markets: ${topOriginCountryDestinationCountry.filter(d => d["Top Import Country"]).map(d => `${d["Top Import Country"].trim()} (${d["Total Value"]} USD)`).slice(0,4).join(", ")}.`,
          `Major Import Product Category along with HS Code: ${topHSCode.filter(d => d["Top Import HS Code"]).map(d => `HSN Code : ${d["Top Import HS Code"]} Total Shipment - ${d["Total Shipment"]}`).slice(0,5).join(" | ")}`
        ]
      },
      staticOverview: {
        text: "Exim GTIS is the best cost-effective market research platform offering 200+ countries trade data reports by country, company, ports. The information is 100% verified and accurate based on direct customs authorities. Find emerging markets, top trends, demand, importers, exporters and monitor competition.",
      }
    },
    section3: {
      shipmentSent: valueCount[0]?.["Total Export Shipment"] || 0,
      buyers: uniqueBuyerSupplier[0]?.["Buyers"] || 0,
      shipmentReceived: valueCount[1]?.["Total Import Shipment"] || 0,
      suppliers: uniqueBuyerSupplier[1]?.["Suppliers"] || 0,
    },
    section4: {
      import: {
        hsCodes: topHSCode.filter(d => d["Top Import HS Code"]).map(d => ({ code: d["Top Import HS Code"], value: d["Total Shipment"] })),
        countries: topOriginCountryDestinationCountry.filter(d => d["Top Import Country"]).map(d => ({ name: d["Top Import Country"].trim(), qty: d["Total Shipment"] })),
        ports: topPortOfLoadingUnloading.filter(d => d["Top Import Port"]).map(d => ({ name: d["Top Import Port"], qty: d["Total Shipment"] })),
        suppliers: topBuyerSupplier.filter(d => d["Top Suppliers"]).map(d => ({ name: d["Top Suppliers"], qty: d["Total Shipment"] }))
      },
      export: {
        hsCodes: topHSCode.filter(d => d["Top Export HS Code"]).map(d => ({ code: d["Top Export HS Code"], value: d["Total Shipment"] })),
        countries: topOriginCountryDestinationCountry.filter(d => d["Top Export Country"]).map(d => ({ name: d["Top Export Country"].trim(), qty: d["Total Shipment"] })),
        ports: topPortOfLoadingUnloading.filter(d => d["Top Export Port"]).map(d => ({ name: d["Top Export Port"], qty: d["Total Shipment"] })),
        buyers: topBuyerSupplier.filter(d => d["Top Buyers"]).map(d => ({ name: d["Top Buyers"], qty: d["Total Shipment"] }))
      }
    },
    section5: {
      importData: {},
      exportData: []
    },
    section7: {}
  };
};



let data = {
  companyName: "AMPHENOL INTERCONNECT INDIA PRIVATE LIMITED",
  section2: {
    heading:"AMPHENOL INTERCONNECT INDIA PRIVATE LIMITED",
  exportOverview: {
    text: "As per our global export database, AMPHENOL INTERCONNECT INDIA PRIVATE LIMITED made total 129054 export shipments with a total export value of $176378386.85 in FY23-24.",
    pointers: [
      "Top Export Markets: USA (77,121,351 USD), FRANCE (19,776,398 USD), GERMANY (8,413,536 USD), UNITED KINGDOM (7,430,519 USD).",
      "Major Export Product Category along with HS Code: Under HSN Code : 85389000 Product Description - OthersUnder HSN Code : 85369090 Product Description - OthersUnder HSN Code : 85443000 Product Description - OthersUnder HSN Code : 85444299 Product Description - OthersUnder HSN Code : 39232990 Product Description - Others"
    ]
  },
  importOverview: {
    text: "As per our global import database, AMPHENOL INTERCONNECT INDIA PRIVATE LIMITED made total 55,719 import shipments with a total import value of $71,502,741.57 in FY23-24.",
    pointers: [
      "Top Import Markets: FRANCE (15,041,801 USD), USA (16,349,493 USD), MEXICO (7,231,125 USD), CHINA (6,742,621 USD).",
      "Major Import Product Category along with HS Code: Under HSN Code : 85389000 Product Description - OthersUnder HSN Code : 39269099 Product Description - OthersUnder HSN Code : 85366990 Product Description - OthersUnder HSN Code : 85369090 Product Description - OthersUnder HSN Code : 85469010 Product Description - Others"
    ]
  },
  staticOverview: {
    text: "Exim GTIS is the best cost-effective market research platform offering 200+ countries trade data reports by country, company, ports. The information is 100% verified and accurate based on direct customs authorities. Find emerging markets, top trends, demand, importers, exporters and monitor competition.",
    
  }
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
      { code: "85389000", value: 67 },
      { code: "85369090", value: 7 },
      { code: "85443000", value: 4 },
      { code: "85444299", value: 1 },
      { code: "39232990", value: 1 }
    ],
    countries: [
      { name: "USA", qty: 81 },
      { name: "FRANCE", qty: 81 },
      { name: "GERMANY", qty: 81 },
      { name: "UNITED KINGDOM", qty: 81 },
    ],
    ports: [
      { name: "SAHAR AIR CARGO ACC", qty: 760 },
      { name: "SAHAR AIR", qty: 706 },
      { name: "BANGALORE ACC", qty: 441 },
      { name: "BANGALORE AIR", qty: 325 },
      { name: "DIGHI ICD", qty: 268 }
    ],
    suppliers: [
      { name: "XXXXXXXXXX", qty: 19481 },
      { name: "XXXXXXXXXX", qty: 3702 },
      { name: "XXXXXXXXXX", qty: 3702 },
      { name: "XXXXXXXXXX", qty: 3702 },
    ]
  },
  export: {
   
    hsCodes: [
      { code: "85389000", value: 67 },
      { code: "85369090", value: 7 },
      { code: "85443000", value: 4 },
      { code: "85444299", value: 1 },
      { code: "39232990", value: 1 }
    ],
    countries: [
      { name: "USA", qty: 81 },
      { name: "FRANCE", qty: 81 },
      { name: "GERMANY", qty: 81 },
      { name: "UNITED KINGDOM", qty: 81 },
    ],
    ports: [
      { name: "SAHAR AIR CARGO ACC", qty: 760 },
      { name: "SAHAR AIR", qty: 706 },
      { name: "BANGALORE ACC", qty: 441 },
      { name: "BANGALORE AIR", qty: 325 },
      { name: "DIGHI ICD", qty: 268 }
    ],
    buyers: [
      { name: "XXXXXXXXXX", qty: 19481 },
      { name: "XXXXXXXXXX", qty: 3702 },
      { name: "XXXXXXXXXX", qty: 3702 },
      { name: "XXXXXXXXXX", qty: 3702 },
    ]
  },
  }
,
  
  section5: {
  importData: 
    {
  Date: "1/19/2023",
  "HS Code": "84529090",
  "Product Details":
    "LU 6015 ECCENTRIC WHEEL UP & DOWN MOVEMENT OF NEEDLE ROW (03 QTY)",
  Quantity: "9.5",
  "Quantity Unit": "KGM",
  "Value($)": "1350",
  "Country of Origin": "Sri Lanka",
  "Country of Destination": "China",
  Importer: "********",
  Exporter: "********",
},

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

const page = async({params}) => {
  const {country , company} = await params;


  try{
    let response = await fetchDataFromApi(country,company)

    data.companyName = response.companyName
    data.section2 = response.section2
    data.section3 = response.section3
    data.section4 = response.section4
    data.companyName = response.companyName
    data.companyName = response.companyName
    data.companyName = response.companyName
    
  }catch{

  }

  data.section7 = {
    faqs: [
        {
          question: `How many import shipments were made at ${company} port during FY 2024?`,
          answer: `In 2024, there were ${
             0
          } shipments made at ${company} port.`,
        },
        {
          question: `How many active buyers were at ${company} port in 2024?`,
          answer: `There were around ${
             0
          } active buyers at ${company} port in 2024.`,
        },
        {
          question: `Who was the leading buyer to ${company} port in 2024?`,
          answer: `${
             "N/A"
          } was the leading buyer to ${company} Port in 2024.`,
        },
        {
          question: `How many active suppliers were at ${company} Port in 2024?`,
          answer: `There were around ${
           0
          } active suppliers at ${company} port in 2024.`,
        },
        {
          question: `Who was the leading exporter from ${company} Port in 2024?`,
          answer: `${
             "N/A"
          } was the leading exporter from ${company} Port in 2024.`,
        },
        {
          question: `How can I access the yearwise ${company} port data?`,
          answer:
            "Through Exim Global Trade Intelligence System, you can access global ports data by hs code, buyer, supplier, country, port details.",
        },
      ],
  }
  return (
    <main>
      <Hero></Hero>
      <Overview data={data.section2}></Overview>
      <Stats companyName={data.companyName} data={data.section3}></Stats>
      <MarketIntel companyName={data.companyName} importData={data.section4.import} exportData={data.section4.export}></MarketIntel>
      <DetailedTable companyName={data.companyName} importData={data.section5.importData} exportData={data.section5.importData}></DetailedTable>
      <CtaImage></CtaImage>
      <FAQSection faqs={data.section7.faqs}></FAQSection>
    </main>
  )
}

export default page