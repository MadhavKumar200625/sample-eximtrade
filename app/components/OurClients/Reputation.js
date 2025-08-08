// components/ClientsGrid.tsx
"use client";
import Image from "next/image";

const images = [
  "https://eximtradedata.com/images/tata.png",
  "https://eximtradedata.com/images/trafigura.png",
  "https://eximtradedata.com/images/mckinsey.png",
  "https://eximtradedata.com/images/mitsubishiCorporation-logo.webp",
  "https://eximtradedata.com/images/EY-logo.webp",
  "https://eximtradedata.com/images/lonza.png",
  "/clients/img7.jpg",
  "/clients/img8.jpg",
  "/clients/img9.jpg",
  "/clients/img10.jpg",
  "https://eximtradedata.com/images/kpmg.png",
  "/clients/img12.jpg",
  "/clients/img13.jpg",
  "/clients/img14.jpg",
  "/clients/img15.jpg",
  "https://eximtradedata.com/images/kpmg.png",
  "/clients/img17.jpg",
  "/clients/img18.jpg",
  "/clients/img19.jpg",
  "/clients/img20.jpg",
  "https://eximtradedata.com/images/kpmg.png",
  "/clients/img22.jpg",
  "/clients/img23.jpg",
  "/clients/img24.jpg",
  "/clients/img25.jpg"
];

export default function Reputation() {
  return (
    <section className="px-40 mx-auto  py-20 bg-white  to-white ">
      <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
        Our reputation is built on{" "}
        <span className="text-blue-600 drop-shadow-md">
          creating great outcomes
        </span>{" "}
        for clients
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
        {images.map((src, i) => (
          <div
            key={i}
            className="bg-white shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
          >
            <Image
              src={src}
              alt={`Client ${i + 1}`}
              width={200}
              height={100}
              className="w-full px-5 py-2  object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}