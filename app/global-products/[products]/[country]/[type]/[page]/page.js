import React from 'react'
import Products from "@/app/global-products/Products";
import Hero from "@/app/global-products/Hero";

let productDirectory = {
  defaultLetter: "A",
  countries: [
    "Bangladesh",
    "India",
    "Sri Lanka",
    "Nepal",
    "Pakistan",
    "Bhutan",
    "China",
    "USA",
    "UK",
  ],
  types: ["Import", "Export"],
  totalValues: 700,
  products: Array.from({ length: 100 }, (_, i) => ({
    ROW_NUM: i + 1,
    product: `AS Product ${i + 1}`,
  })),
  defaultTradeType : "Import",
  defaultCountry : "Bangladesh"
};


const page = async({params}) => {
  const { products, country, type, page } = await params;

const countryKey = country.replace(/^country-/, "").replace(/-/g, "_").toLowerCase();
  const typeKey = type.replace(/^type-/, "").toLowerCase();
  const columnName = `${countryKey}_${typeKey}_on`;

  const pageNumber = parseInt(page.replace("pg-", ""), 10);

  const payload = {
    source: "countries_product",
    type: "list",
    size: (pageNumber - 1) * 100 + 1,
    filters: products.replace(/^product-/,"").toUpperCase(),
    columns: columnName,
  };
  try{

  
  const res = await fetch("http://103.30.72.94:8001/countriesProductList", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    cache: "no-store", // ensure fresh data
  });

  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }

  // console.log(res)

  const json = await res.json();

  productDirectory = {
    defaultLetter: products.replace(/^product-/,"").toUpperCase(),
    countries: [
      "Bangladesh",
      "India",
      "Sri Lanka",
      "Nepal",
      "Pakistan",
      "Bhutan",
      "China",
      "USA",
      "UK",
    ],
    types: ["Import", "Export"],
    totalValues: json.total_values ?? 0,
    products: json.data ?? [],
  };

}catch{
productDirectory.defaultLetter = products.replace(/^product-/,"").toUpperCase()
productDirectory.defaultTradeType = capitalizeWords(type.replace(/^type-/, ""))
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
        <Hero heading={capitalizeWords("Directry Of "+country.replace(/^country-/, "").replace(/_/g, " ")+" "+typeKey+" Products Starting with "+products.replace(/^product-/,"")+" Alphabet")}></Hero>
        <Products {...productDirectory} ></Products>
    </main>
)
}

export default page