import React from 'react'
import Hero from './Hero'
import MainSection from './MainSection'


const allCountries =
  "afghanistan,algeria,angola,argentina,armenia,australia,austria,azerbaijan,bahrain,bangladesh,barbados,belarus,belgium,benin,bermuda,bhutan,bolivia,botswana,brazil,bulgaria,burundi,cambodia,cameroon,canada,chad,chile,china,colombia,costa_rica,cote_d_ivoire,croatia,cyprus,czech_republic,denmark,dominican_republic,dr_congo,ecuador,egypt,estonia,ethiopia,fiji,finland,france,gabon,georgia,germany,ghana,greece,guatemala,guinea,guyana,hungary,india,indonesia,iran,iraq,ireland,israel,italy,jamaica,japan,jordan,kazakhstan,kenya,kosovo,kuwait,kyrgyzstan,latvia,lesotho,liberia,libya,lithuania,luxembourg,malawi,malaysia,maldives,mauritius,mexico,moldova,morocco,mozambique,nepal,netherland,new_zealand,nicaragua,niger,nigeria,norway,oman,pakistan,palestine,panama,papua_new_guinea,paraguay,peru,philippines,poland,portugal,qatar,romania,russia,rwanda,sao_tome_and_principe,saudi_arabia,senegal,serbia,seychelles,sierra_leone,singapore,slovakia,slovenia,somalia,south_africa,south_korea,spain,sri_lanka,sudan,sweden,switzerland,syria,taiwan,tajikistan,tanzania,thailand,togo,trinidad_and_tobago,tunisia,turkey,turkmenistan,uganda,ukraine,united_arab_emirates,united_kingdom,uruguay,usa,uzbekistan,venezuela,vietnam,yemen,zambia,zimbabwe".split(
    ","
  );

const customsCountries =
  "argentina,bangladesh,bolivia,botswana,burundi,cameroon,chile,colombia,costa_rica,cote_d_ivoire,dr_congo,ecuador,ethiopia,fiji,ghana,guatemala,guyana,india,indonesia,kazakhstan,kenya,kosovo,lesotho,liberia,malawi,mexico,moldova,nicaragua,nigeria,pakistan,panama,paraguay,peru,philippines,russia,rwanda,sao_tome_and_principe,sierra_leone,singapore,sri_lanka,tanzania,turkey,uganda,ukraine,uruguay,uzbekistan,venezuela,vietnam,zambia,zimbabwe".split(
    ","
  );

async function fetchPortData(country, pageNum = 1) {
  const perPage = 8;
  const from_ = (pageNum - 1) * perPage + 1;
  const to = pageNum * perPage;

  const source = customsCountries.includes(country.toLowerCase())
    ? country.toLowerCase()
    : "all";

  const payload = {
    source,
    type: "master",
    country_name: country,
    from_: String(from_),
    to: String(to),
  };

    const res = await fetch("http://103.30.72.94:8011/globalPortLoading", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store", 
    });

    if (!res.ok) throw new Error("Failed to fetch port data");

    const json = await res.json();
    return {
      data: json.data || [],
      total_values: json.total_values || 0,
    };
  
}

let data = {
    data:[
        {
            "Port": "NA",
            "exporter": 1337,
            "ex_total_shipment": 10721,
            "importer": 892,
            "im_total_shipment": 905
        },
        {
            "Port": "SAHAR AIR",
            "exporter": 1096,
            "ex_total_shipment": 18150,
            "importer": 1513,
            "im_total_shipment": 1526
        },
        {
            "Port": "CHENNAI SEA",
            "exporter": 924,
            "ex_total_shipment": 20335,
            "importer": 1319,
            "im_total_shipment": 1334
        },
        {
            "Port": "JNPT",
            "exporter": 871,
            "ex_total_shipment": 8262,
            "importer": 805,
            "im_total_shipment": 818
        },
        {
            "Port": "DELHI AIR",
            "exporter": 836,
            "ex_total_shipment": 11873,
            "importer": 1104,
            "im_total_shipment": 1117
        }
    ]
, total_values:250
}

const page = async({params}) => {
    const {country , code} = await params

    try{
        data = await fetchPortData(country,parseInt(code.split("-")[1]))
    }catch{
        console.log(data)
    }
  return (
    <main>
        <Hero countryName={country}></Hero>
        <MainSection heading={country} subheading={country} data={data.data} totalValues={data.total_values} letter={code.split("-")[0]} pg={parseInt(code.split("-")[1])}></MainSection>
    </main>
  )
}

export default page