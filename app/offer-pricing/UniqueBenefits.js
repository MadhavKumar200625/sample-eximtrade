"use client";

import Image from "next/image";

const benefits = [
  {
    title: "Visual Reports",
    desc: "Find the spot on visual reports for comprehensive market research. Discover top 10 HS codes, month wise, country wise, Importer Exporter wise shipment records. Utilize this information for crucial business decisions.",
    image: "https://eximtradedata.com/images/visual_reports.svg",
  },
  {
    title: "Product Trends",
    desc: "Stay ahead of your competition with the latest market trends. Discover the latest product trends by HS Code, Chapter, Heading, Subheading, Destination Country, Exporter, Exporter District & State, Mode of Transport, and Port of Discharge/Loading etc.",
    image: "https://eximtradedata.com/images/product_trends.svg",
  },
  {
    title: "Advance Search",
    desc: "Keeping the user convenience in mind, we have advance search option that help you to sort the information as per your requirement. You can select country, data type, data duration, & product. Also, you can download your search query results in excel/pdf format.",
    image: "https://eximtradedata.com/images/advance_search.svg",
  },
  {
    title: "Importer Exporter Tree",
    desc: "Find product sourcing, new buyers and suppliers through our Importer Exporter Tree. It helps you identify the 3 levels of the network of Importers and Exporters. That helps you gain quality business leads and expand your market at the international level.",
    image: "https://eximtradedata.com/images/import_export_tree.svg",
  },
];

export default function EximBenefitsSection() {
  return (
<section className="py-8 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-black mb-4">Unlock Unique Benefits of Exim GTIS</h2>
        <p className="text-black mb-10 max-w-3xl mx-auto">
          Gain unparalleled insights and elevate your business with our powerful analytics platform.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-white  shadow-xl border border-zinc-200 p-6 hover:shadow-2xl transition duration-300"
            >
              <div className="w-24 h-24 mx-auto mb-4">
                <Image
                  src={benefit.image}
                  alt={benefit.title}
                  width={32}
                  height={32}
                  className=" w-24 h-24 flex items-center justify-center bg-gradient-to-br from-blue-800 to-blue-600 shadow-md mb-4"
                />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-black my-3">{benefit.title}</h3>
              <p className="text-sm text-black text-left">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}