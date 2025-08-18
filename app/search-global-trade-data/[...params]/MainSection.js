import React from "react";
import Link from "next/link";

const MainSection = ({ data , appliedFilters}) => {
  const { filters, table } = data;

  const baseUrl = "/search-global-trade-data"
  const buildUrl = (filters) => {
    return `${baseUrl}/${filters
      .map(
        (f) =>
          `${f.label.replace(/\s+/g, "-").toLowerCase()}-${f.value
            .replace(/\s+/g, "_")
            .toLowerCase()}`
      )
      .join("/")}`;
  };

  const getFilterHref = (label, value) => {
    label = label.toLowerCase();

    const existing = appliedFilters.find(
      (f) => f.label.toLowerCase() === label
    );

    let newFilters;
    if (existing) {
      // Replace value if already exists
      newFilters = appliedFilters.map((f) =>
        f.label.toLowerCase() === label ? { ...f, value } : f
      );
    } else {
      // Add new filter if not present
      newFilters = [...appliedFilters, { label, value }];
    }
    console.log(buildUrl(newFilters))
    return buildUrl(newFilters);
  };


  return (
    <section className="w-full  grid grid-cols-1 md:grid-cols-12 gap-6 mt-10">
      {/* Left Filters */}
      <aside className="col-span-2 bg-white shadow-md rounded-2xl p-4 text-center space-y-6">
        <h3 className="text-xl font-semibold text-black">Filters</h3>

        {/* HS Code Filter */}
        <div>
          <h4 className="text-xs font-semibold text-black uppercase mb-2">
            HS Code
          </h4>
          <ul className="flex flex-col gap-2">
            {filters.hsCodes.map((code, i) => (
              <li key={i}>
                <Link
                  href={getFilterHref("hscode", code)}
                  className="inline-block px-3 py-1.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 hover:bg-blue-100 transition"
                >
                  {code}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Country Filter */}
        <div>
          <h4 className="text-xs font-semibold text-black uppercase mb-2">
            Country
          </h4>
          <ul className="flex flex-col gap-2">
            {filters.countries.map((country, i) => (
              <li key={i}>
                <Link
                  href={getFilterHref("countryin", country)}
                  className="inline-block px-3 py-1.5 rounded-full text-xs font-medium bg-green-50 text-green-700 hover:bg-green-100 transition"
                >
                  {country}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Port of Unloading Filter */}
        <div>
          <h4 className="text-xs font-semibold text-black uppercase mb-2">
            Port of Unloading
          </h4>
          <ul className="flex flex-col gap-2">
            {filters.ports.map((port, i) => (
              <li key={i}>
                <Link
                  href={getFilterHref("port", port)}
                  className="inline-block px-3 py-1.5 rounded-full text-xs font-medium bg-purple-50 text-purple-700 hover:bg-purple-100 transition"
                >
                  {port}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Right Table */}
      <div className="col-span-10 bg-white shadow-md rounded-2xl p-6">
        <h3 className="text-xl font-semibold text-black mb-4">
          Trade Data
        </h3>

        <div className="overflow-hidden rounded-lg border border-gray-200">
          <table className="w-full text-sm border-collapse table-fixed">
            <thead className="bg-gray-100 text-black">
              <tr>
                {table.headers.map((head, i) => (
                  <th
                    key={i}
                    className={`px-3 py-2 border-b text-left font-medium 
                    ${head.toLowerCase() === "date" ? "w-24" : ""} 
                      ${head.toLowerCase() === "hs code" ? "w-26" : ""} 
                      ${head.toLowerCase() === "exporter" ? "w-26" : ""} 

                      ${head.toLowerCase() === "quantity" ? "w-26" : ""} 
                      ${head.toLowerCase() === "unit" ? "w-14" : ""} 
                      ${head.toLowerCase() === "value" ? "w-24" : ""} 
                      ${head.toLowerCase() === "product description" ? "w-64" : ""}`}
                  >
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.rows.map((row, i) => (
                <tr
                  key={i}
                  className="hover:bg-gray-50 transition border-b last:border-0"
                >
                  <td className="px-3 py-2">{row.date}</td>
                  <td className="px-3 py-2">{row.hsCode}</td>
                  <td className="px-3 py-2">
                    <p className="line-clamp-2">{row.product}</p>
                  </td>
                  <td className="px-3 py-2">{row.exporter}</td>
                  <td className="px-3 py-2 text-center">{row.qty}</td>
                  <td className="px-3 py-2">{row.unit}</td>
                  <td className="px-3 text-center py-2">{row.value}</td>
                  <td className="px-3 py-2 text-center">{row.origin}</td>
                  <td className="px-3 py-2">{row.port}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-6 gap-2">
  {Array.from({ length: 5 }, (_, i) => {
    const page = i + 1;
    const isActive = page === table.pagination.currentPage;

    return isActive ? (
      <span
        key={page}
        className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg shadow cursor-default"
      >
        {page}
      </span>
    ) : (
      <Link
        key={page}
        href="/pricing"
        className="px-4 py-2 bg-gray-100 text-black text-sm rounded-lg hover:bg-gray-200 transition"
      >
        {page}
      </Link>
    );
  })}

  {table.pagination.currentPage < table.pagination.totalPages && (
            <Link
              href={table.pagination.nextPageUrl}
              className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg shadow hover:bg-blue-700 transition"
            >
              Next Page →
            </Link>
          )}
</div>

      </div>
    </section>
  );
};

export default MainSection;

