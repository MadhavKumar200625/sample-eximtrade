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
import Image from "next/image";

const Includes = () => {
  return (
    <section className="py-16 bg-white">
      {/* Top Text */}
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="uppercase tracking-wide text-sm font-semibold">
          Armenia Export Trade Data
        </p>
        <h2 className="text-3xl font-bold mt-2">
          What Does Armenia Export Data Include?
        </h2>
        <p
          className="mt-4 text-base leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: `Our Armenia export data contains all essential information that could help you spot verified buyers from the global market. You can find top exports of Armenia by hs code, price, quantity, country, Armenia suppliers, global buyers list, ports volume and competitor shipments for analysis.
            We have 100% authentic information based on Armenia import customs data. You can opt for online, offline or customized plans at a reasonable price. You could find a detailed sample export data of Armenia by <strong>HS code, product, quantity, unit, value, country of origin/destination, supplier name, buyer name, port of loading/unloading and other shipping details, etc.</strong>`,
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
              <div className="w-full h-40 relative mb-4  overflow-hidden">
                              <Image
                                src={`/countries/${item.text.replace(/ /g,"-").toLowerCase().replace("&","and")}.webp`}
                                alt={`/countries/${item.text.replace(/ /g,"-").toLowerCase().replace("&","and")}.webp`}
                                fill
                                className="object-contain"
                              />
                            </div>
              <p className="text-xl font-medium text-black text-center">
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
                ["Date", "Mar 18 2016 12:00AM"],
                ["HS Code", "90189099"],
                [
                  "Product Details",
                  "QUARTZ GLASS REFLECTOR (MONOBLOCK) WITH SILVER COATING O.D:14.75MM;I.D:11.8MM;LENGTH:46.0MM (PARTS FOR N.D YAG LASER-OP)",
                ],
                ["Quantity", "48"],
                ["Quantity Unit", "PCS"],
                ["Value($)", "4752.63"],
                ["Country of Origin", "Armenia"],
                ["Country of Destination", "India"],
                ["Importer", "APPASAMY ASSOCIATES"],
                ["Exporter", "*****"],
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
