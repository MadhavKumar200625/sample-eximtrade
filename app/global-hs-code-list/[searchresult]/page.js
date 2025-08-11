import React from 'react'
import Search from '../search'
import { getConnection } from "@/libs/db";
import Link from 'next/link';
import FAQSection from '../../components/FAQ';

const HSCodeFAQ = [
  {
    question: "1. What is HS Code/HSN Code?",
    answer: ``
  },
  {
    question: "2. Why HS Codes are important?",
    answer: ``
  },
  {
    question: "3. General Format of HS/HSN Code?",
    answer: ``
  },
  {
    question: "4. How can you find HS Code for your Product?",
    answer: ``
  },
  {
    question: "5. Does HS Code Different per country?",
    answer: ``
  },
  {
    question: "6. How are HS Codes categorized in India?",
    answer: ``
  },
  {
    question: "7. What does HS/HSN Code List of India Covers?",
    answer: ``
  },
  {
    question: "8. How do I find ITC-HS Code for my product?",
    answer: ``
  },
  {
    question: "9. Why Exim Trade Data Global HS Code List?",
    answer: ``
  },
  {
    question: "10. What is the HS Code System of India?",
    answer: ``
  }
];

const page = async ({params}) => {

    
      const {searchresult} = await params;
    const type = searchresult.split("-")[0];      // first part
const value = searchresult.split("-").pop();  // last part

console.log(type);  // "hs"
console.log(value); // "001"
  const db = await getConnection();
  let result;

  if (type === 'hs') {
    result = await db.query`
      SELECT hs_code, item_description, igst, id
      FROM hs_code_rates
      WHERE hs_code LIKE ${value + '%'}
      ORDER BY hs_code
    `;
  } 
  else if (type === 'product') {
    result = await db.query`
      SELECT hs_code, item_description, igst, id
      FROM hs_code_rates
      WHERE item_description LIKE ${'%' + value + '%'}
      ORDER BY hs_code
    `;
  } 
  
  else {
    return <p className="p-8 text-red-600">Invalid search type.</p>;
  }

  if (!result.recordset.length) {
    return <p className="p-8 text-gray-600">No results found for &quot;{value}&quot;.</p>;
  }
      const rowColors = ["bg-white", "bg-slate-50", "bg-slate-100"];
  return (
    <main>
            <Search></Search>

        <section className=" px-4 py-12 text-center bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-black mb-4">
            Global HS Code List, Harmonized System Code List Of Item, HSN Codes List

          </h2>

          <h3 className="text-2xl  text-black mb-4">
            Find Complete Global HS Code List of 5000+ commodities by Chapter, Headings and Subheadings. Discover HS Code for your product with our easy to use HS Code Finder.



          </h3>

          <div className="overflow-x-auto mt-10 border border-gray-300  shadow-md">
            <table className="min-w-full text-left text-black border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-6 py-4 text-base font-semibold border-b border-gray-300 w-48">
                    {type == "hs" ? `Heading - ${value}`:"HS Code"} 
                  </th>
                  <th className="px-6 py-4 text-base font-semibold border-b border-gray-300 w-[50%] border-l">
                    HS Code Description
                  </th>
                  <th className="px-6 py-4 text-base font-semibold border-b border-gray-300 border-l">
                    
                  </th>
                  <th className="px-6 py-4 text-base font-semibold border-b border-gray-300 border-l">
                    
                  </th>
                </tr>
              </thead>
              <tbody>
                {result.recordset.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`${
                      rowColors[idx % 3]
                    } hover:bg-gray-100 transition`}
                  >
                    <td className="px-6 py-4 font-semibold border-b border-gray-200">
                      <div className="block w-full">{row.hs_code}</div>
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200 border-l">
                      <div className="block text-lg w-full">{row.item_description}</div>
                    </td>
                    <td className="px-4 py-4 border-b border-gray-200 border-l">
                      <Link href={`/search/country-India/type-import/hscode-${row.hs_code}`} className="block text-blue-600 cursor-pointer underline text-center w-full">Import Data HS Code - {row.hs_code}</Link>
                    </td>
                    <td className="px-4 py-4 border-b border-gray-200 border-l">
                      <Link href={`/search/country-India/type-import/hscode-${row.hs_code}`} className="block text-center underline cursor-pointer text-blue-600 w-full">Export Data HS Code - {row.hs_code}</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

        <FAQSection title="FAQs About Global HS Code List" faqs={HSCodeFAQ}/>
    </main>
  )
}

export default page