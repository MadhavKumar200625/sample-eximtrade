import React from "react";
import {
  Package,
  Globe,
  DollarSign,
  MapPin,
  Truck,
  BarChart,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const Includes = () => {
  return (
    <section className="py-16 bg-white">
      {/* Top Text */}
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="uppercase tracking-wide text-sm font-semibold">
          Armenia Import Trade Data
        </p>
        <h2 className="text-3xl font-bold mt-2">
          What Does Armenia Import Data Include
        </h2>
        <p
          className="mt-4 text-base leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: `From historical to the latest, we have full import data of Armenia. Our Armenia import customs data will help you find top Armenia import commodities by HS code, price, country, Armenia buyers list, ports, competitor shipments for your market research. Utilize these key Armenia import statistics to your advantage and prepare an excellent marketing strategy to outclass your competition.
            We provide both online and offline Armenia imports data access to our customers. Also, you can customize your requirements accordingly. You can request a full sample on Armenia import data <strong>HS Code, Product Description, Quantity, Unit, Price, Country of Origin/Destination, Importer Name, Exporter Name, Loading/Unloading Port, etc.</strong>`,
          }}
        />
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto mt-12 px-4 grid lg:grid-cols-2 gap-10">
        {/* Left Icons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {[
            { icon: Package, text: "HS Code Wise Data" },
            { icon: Globe, text: "Global Buyer Details" },
            { icon: DollarSign, text: "Value & Price Trends" },
            { icon: MapPin, text: "Port Information" },
            { icon: Truck, text: "Shipment Details" },
            { icon: BarChart, text: "Market Analysis" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center p-4 bg-gradient-to-tr from-gray-100 to-gray-50 rounded-xl shadow hover:shadow-lg transition"
            >
              <item.icon size={28} className="mb-2 text-black" />
              <p className="text-sm font-medium text-black text-center">
                {item.text}
              </p>
            </div>
          ))}

          {/* Button Space */}
          <div className="col-span-2 sm:col-span-3 mt-4">
            <div className="flex justify-center ">
              <button
                href="/pricing"
                className="bg-blue-600 text-lg text-white px-6 py-2 flex items-center justify-center shadow cursor-pointer hover:scale-105 transition"
              >
                Download Full Sample
                <ArrowRight
                  size={20}
                  className="ml-2 mt-0.5 text-sm"
                ></ArrowRight>
              </button>
            </div>
          </div>
        </div>

        {/* Right Table */}
        <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-200">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-gray-100 to-gray-200">
                <th className="p-3 font-semibold text-black border-r border-gray-300">
                  Field Name
                </th>
                <th className="p-3 font-semibold text-black">Detail</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Date", "Mar 31 2016 12:00AM"],
                ["HS Code", "30049099"],
                [
                  "Product Details",
                  "PHARMACEUTICAL PRODUCTS : ATRACURIUM BESYLATE INJECTION USP 10MG/ML 2.5 ML",
                ],
                ["Quantity", "9450"],
                ["Quantity Unit", "NOS"],
                ["Value($)", "8127"],
                ["Country of Origin", "India"],
                ["Country of Destination", "Armenia"],
                ["Importer", "*****"],
                ["Exporter", "SWISS PARENTERALS LIMITED"],
              ].map(([field, detail], idx) => (
                <tr
                  key={idx}
                  className={`hover:bg-gray-50 transition ${
                    idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <td className="p-3 font-medium text-black border-r border-gray-300">
                    {field}
                  </td>
                  <td className="p-3 text-black">{detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Includes;
