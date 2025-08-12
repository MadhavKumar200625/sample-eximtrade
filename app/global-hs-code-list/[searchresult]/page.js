import React from "react";
import Search from "../Search";
import { getConnection } from "@/libs/db";
import Link from "next/link";
import FAQSection from "../../components/FAQ";

const HSCodeFAQ = [
  {
    question: "1. What is HS Code/HSN Code?",
    answer: ``,
  },
  {
    question: "2. Why HS Codes are important?",
    answer: ``,
  },
  {
    question: "3. General Format of HS/HSN Code?",
    answer: ``,
  },
  {
    question: "4. How can you find HS Code for your Product?",
    answer: ``,
  },
  {
    question: "5. Does HS Code Different per country?",
    answer: ``,
  },
  {
    question: "6. How are HS Codes categorized in India?",
    answer: ``,
  },
  {
    question: "7. What does HS/HSN Code List of India Covers?",
    answer: ``,
  },
  {
    question: "8. How do I find ITC-HS Code for my product?",
    answer: ``,
  },
  {
    question: "9. Why Exim Trade Data Global HS Code List?",
    answer: ``,
  },
  {
    question: "10. What is the HS Code System of India?",
    answer: ``,
  },
];

const page = async ({ params }) => {
  const { searchresult } = await params;
  const type = searchresult.split("-")[0];
  const value = searchresult.split("-").pop();

  console.log(type);
  console.log(value);
  const db = await getConnection();
  let result;
  let heading;
  let tc1Heading;

  if (type === "hs") {
    result = await db.query`
      SELECT hs_code, hs_code_description AS item_description
      FROM hscode_list
      WHERE RTRIM(hs_code) LIKE ${value + "%"}
      ORDER BY hs_code
    `;
    console.log(result);
  } else if (type === "product") {
    result = await db.query`
      SELECT hs_code, hs_code_description AS item_description
      FROM hscode_list
      WHERE item_description LIKE ${"%" + value + "%"}
      ORDER BY hs_code
    `;
  } else {
    if (type === "chapter") {
      result = await db.query`
    SELECT hs_code, hs_code_description AS item_description
    FROM hscode_list 
    WHERE hs_code LIKE ${value + "%"} AND LEN(hs_code) = 4
    ORDER BY hs_code;
  `;

      tc1Heading = `Chapter - ${value}`;
    } else if (type === "heading") {
      result = await db.query`
    SELECT hs_code, hs_code_description AS item_description
    FROM hscode_list 
    WHERE hs_code LIKE ${value + "%"} AND LEN(hs_code) >= 6
    ORDER BY hs_code;
  `;

      tc1Heading = `Heading - ${value}`;
    } else {
      return <p className="p-8 text-red-600">Invalid search type.</p>;
    }
  }

  if (result.recordset.length) {
    // return (
    //   <p className="p-8 text-gray-600">
    //     No results found for &quot;{value}&quot;.
    //   </p>
    // );
    let headingObject = await db.query`
  select hs_code_description as item_description 
  from hscode_list 
  where hs_code = ${value}
  `;
    heading = headingObject.recordset[0].item_description;
  } else {
    heading = "Not Found";
  }
  const rowColors = ["bg-white", "bg-slate-50", "bg-slate-100"];
  return (
    <main>
      <Search></Search>

      <section className=" px-4 py-12 text-center bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-black mb-4">
            {type == "hs"
              ? `Harmonize system code of ${value} - ${heading}`
              : `${
                  type == "chapter"
                    ? `${heading} import export Hs Code Data`
                    : `${
                        type == "heading"
                          ? `HS Codes Heading of ${value} - ${heading}`
                          : `Harmonize system code of live`
                      }`
                }`}
          </h2>

          <h3 className="text-2xl  text-black mb-4">
            Find Complete Global HS Code List of 5000+ commodities by Chapter,
            Headings and Subheadings. Discover HS Code for your product with our
            easy to use HS Code Finder.
          </h3>

          <div className="overflow-x-auto mt-10 border border-gray-300  shadow-md">
            <table className="min-w-full text-left text-black border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-6 py-4 text-base font-semibold border-b border-gray-300 w-40">
                    {type == "hs"
                      ? `Heading - ${value}`
                      : tc1Heading ?? "HS Code"}
                  </th>
                  <th className="px-6 py-4 text-base font-semibold border-b border-gray-300 w-[55%] border-l">
                    {heading ?? "HS Code Description"}
                  </th>
                  <th className="px-6 py-4 text-base font-semibold border-b border-gray-300 border-l">Import Data</th>
                  <th className="px-6 py-4 text-base font-semibold border-b border-gray-300 border-l">Export Data</th>
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
                      <Link
                        href={`/global-hs-code-list/${
                          type == "heading"
                            ? `hs-code-${row.hs_code}`
                            : `heading-${row.hs_code}`
                        }`}
                        className="block w-full"
                      >
                        {type == "chapter"
                          ? `Heading ${row.hs_code}`
                          : row.hs_code}
                      </Link>
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200 border-l">
                      <Link
                        href={`/global-hs-code-list/${
                          type == "heading"
                            ? `hs-code-${row.hs_code}`
                            : `heading-${row.hs_code}`
                        }`}
                        className="block  w-full"
                      >
                        {row.item_description}
                      </Link>
                    </td>
                    <td className="px-4 py-4 border-b border-gray-200 border-l">
                      <Link
                        href={`/search/country-India/type-import/hscode-${row.hs_code}`}
                        className="block bg-blue-600 text-white p-2 text-x cursor-pointer underline text-center w-full"
                      >
                        HS Code - {row.hs_code}
                      </Link>
                    </td>
                    <td className="px-4 py-4 border-b border-gray-200 border-l">
                      <Link
                        href={`/search/country-India/type-import/hscode-${row.hs_code}`}
                        className="block text-center bg-gray-400 p-2 text-white underline cursor-pointer  w-full"
                      >
                        HS Code - {row.hs_code}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <FAQSection title="FAQs About Global HS Code List" faqs={HSCodeFAQ} />
    </main>
  );
};

export default page;
