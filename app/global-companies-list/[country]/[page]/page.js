import React from 'react'
import Companies from "@/app/global-companies-list/Companies";
import Hero from "@/app/global-companies-list/Hero";

let productDirectory = {
  defaultLetter: "A",
  totalValues: 700,
  companies: Array.from({ length: 100 }, (_, i) => ({
    ROW_NUM: i + 1,
    product: `AS Company ${i + 1}`,
  })),
  defaultCountry:"India"
};

const customsCountries = "argentina,bangladesh,${capitalizeWords(country)},botswana,burundi,cameroon,chile,colombia,costa_rica,cote_d_ivoire,dr_congo,ecuador,ethiopia,fiji,ghana,guatemala,guyana,india,indonesia,kazakhstan,kenya,kosovo,lesotho,liberia,malawi,mexico,moldova,nicaragua,nigeria,pakistan,panama,paraguay,peru,philippines,russia,rwanda,sao_tome_and_principe,sierra_leone,singapore,sri_lanka,tanzania,turkey,uganda,ukraine,uruguay,uzbekistan,venezuela,vietnam,zambia,zimbabwe";
const allCountries = "afghanistan,algeria,angola,argentina,armenia,australia,austria,azerbaijan,bahrain,bangladesh,barbados,belarus,belgium,benin,bermuda,bhutan,${capitalizeWords(country)},botswana,brazil,bulgaria,burundi,cambodia,cameroon,canada,chad,chile,china,colombia,costa_rica,cote_d_ivoire,croatia,cyprus,czech_republic,denmark,dominican_republic,dr_congo,ecuador,egypt,estonia,ethiopia,fiji,finland,france,gabon,georgia,germany,ghana,greece,guatemala,guinea,guyana,hungary,india,indonesia,iran,iraq,ireland,israel,italy,jamaica,japan,jordan,kazakhstan,kenya,kosovo,kuwait,kyrgyzstan,latvia,lesotho,liberia,libya,lithuania,luxembourg,malawi,malaysia,maldives,mauritius,mexico,moldova,morocco,mozambique,nepal,netherland,new_zealand,nicaragua,niger,nigeria,norway,oman,pakistan,palestine,panama,papua_new_guinea,paraguay,peru,philippines,poland,portugal,qatar,romania,russia,rwanda,sao_tome_and_principe,saudi_arabia,senegal,serbia,seychelles,sierra_leone,singapore,slovakia,slovenia,somalia,south_africa,south_korea,spain,sri_lanka,sudan,sweden,switzerland,syria,taiwan,tajikistan,tanzania,thailand,togo,trinidad_and_tobago,tunisia,turkey,turkmenistan,uganda,ukraine,united_arab_emirates,united_kingdom,uruguay,usa,uzbekistan,venezuela,vietnam,yemen,zambia,zimbabwe";


const page = async({params}) => {
  const { country,  page } = await params;


  const pageNumber = parseInt(page.split("-")[0]);
  const from = (pageNumber - 1) * 100 + 1;
  const to = pageNumber * 100;

  const payload = {"source":customsCountries.includes(country.toLowerCase())? country.toLowerCase():"all","type":"master","country_name":country.toLowerCase(),"company_start_from":page.split("-")[0], "from_":from, "to":to};
  
  try{

  
  const res = await fetch("http://103.30.72.94:8001/countriesProductList", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }

  const json = await res.json();

  productDirectory = {
    defaultLetter: page.split("-")[0].toUpperCase(),
    totalValues: json.data["Total Count"] ?? 0,
    companies: json.data.Company ?? [],
  };

}catch{
productDirectory.defaultLetter = page.split("-")[0].toUpperCase()
productDirectory.defaultCountry = capitalizeWords(country.replace(/^country-/, "").replace(/_/g, " "))

}

function capitalizeWords(str) {
  return str
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}


return(
  <main>
        <Hero heading={capitalizeWords(`${capitalizeWords(country.replace("_"," "))} Companies List | List of ${capitalizeWords(country.replace("_"," "))} Companies`)} subHeading={`Find the top import export companies list from our all ${capitalizeWords(country)} companies database directory. Explore the list of ${capitalizeWords(country)} companies and their products from our ${capitalizeWords(country)} company directory. Discover trade statistics of best B2B companies with our B2B business directory ${capitalizeWords(country)}. Identify latest ${capitalizeWords(country)} market trends, risks, product demand, and monitor competition.`}></Hero>
        <Companies {...productDirectory} ></Companies>
    </main>
)
}

export default page