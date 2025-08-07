import Link from "next/link";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className=" pt-32 pb-14 bg-white">
      <div className="max-full mx-4 lg:mx-20 px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative w-full h-80">
          <img
            src="https://eximtradedata.com/images/partner_image.jpg"
            alt="Global Ports Data"
            className="w-full h-[100%]  shadow-lg"
          />
        </div>

        {/* Content */}
        <div className="lg:text-left text-center">
          <h2 className="text-3xl  md:text-4xl font-bold text-black mb-4 leading-tight">
            Be a <span className="text-blue-600">Profitable Partner</span> with
            Us!
          </h2>

          <p className="text-black mb-4 text-lg">
            Our mission is to provide more sustainable, cost-effective, and
            result-centric data solutions to our customers.
          </p>

          <p className="text-black mb-6 text-lg">
            If you share a similar interest or can assist us in providing a more
            comprehensive data solution, then you can partner with us.
          </p>

          <Link href="mailto:info@eximtradedata.com">
            <button className="relative overflow-hidden px-6 mx-1 py-3 bg-blue-600 cursor-pointer text-white text-md hover:scale-105  transition-all    font-semibold shadow-md group">
              Email Us 
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
