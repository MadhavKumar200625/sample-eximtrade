"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-200 text-white py-12 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Subscribe Section */}
        <div className="md:col-span-2  space-y-4">
          <h3 className="text-xl text-black font-semibold">
            Subscribe Newsletter
          </h3>
          <form className="flex flex-col items-center rounded w-full max-w-md">
            {/* Name Field */}
            <input
              type="text"
              placeholder="Your Name"
              className="px-4 py-2 w-full rounded m-2 text-black focus:outline-none bg-white"
            />

            {/* Email Field */}
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 w-full rounded m-2 text-black focus:outline-none bg-white"
            />

            {/* Mobile Number Field */}
            <input
              type="tel"
              placeholder="Mobile Number"
              className="px-4 py-2 w-full rounded m-2 mb-4 text-black focus:outline-none bg-white"
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-gradient-to-r w-full cursor-pointer bg-blue-600 px-5 py-2  hover:scale-105 transition-transform duration-300 shadow-lg m-2"
            >
              Subscribe
            </button>
          </form>
          <div className="text-lg text-black  mt-4">
            Shpere Eximia Research Pvt Ltd <br />
            G-232, Noida Sector-63, Uttar Pradesh - 201301, India
            <br />
            <br></br>
            <span className="block mt-2">+91-9625812393</span>
            <Link href="mailto:Info@eximtradedata.com" className="underline">
              Info@eximtradedata.com
            </Link>
          </div>
          <div className="mt-12 flex gap-5">
            <Link
              href="https://www.facebook.com/eximtradedataofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Facebook className="w-6 h-6 text-black  group-hover:text-blue-500 transition-all duration-300 group-hover:scale-110" />
            </Link>
            <Link
              href="https://www.instagram.com/eximtradedata/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Instagram className="w-6 h-6 text-black  group-hover:text-pink-500 transition-all duration-300 group-hover:scale-110" />
            </Link>
            <Link
              href="https://x.com/eximtradedataa"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="w-6 h-6 text-black  group-hover:text-sky-400 transition-all duration-300 group-hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className=""
                  viewBox="0 0 24 24"
                >
                  <path d="M21.5 2h-3.6l-5.4 7.2L6.7 2H2l7.9 10.5L2 22h3.6l5.8-7.8L17.3 22H22l-8.3-11L21.5 2z" />
                </svg>
              </div>
            </Link>
            <Link
              href="https://www.linkedin.com/company/exim-trade-data"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Linkedin className="w-6 h-6 text-black  group-hover:text-blue-700 transition-all duration-300 group-hover:scale-110" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/exim-trade-data"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="w-6 h-6 text-black  group-hover:text-red-500 transition-all duration-300 group-hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 "
                >
                  <title>Pinterest</title>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 4.43 2.606 8.25 6.343 10.02-.088-.85-.167-2.15.035-3.077.18-.823 1.163-5.24 1.163-5.24s-.296-.594-.296-1.472c0-1.378.799-2.406 1.793-2.406.845 0 1.25.635 1.25 1.396 0 .85-.543 2.122-.823 3.303-.235.992.496 1.8 1.47 1.8 1.765 0 3.118-1.86 3.118-4.54 0-2.374-1.707-4.03-4.143-4.03-2.822 0-4.48 2.115-4.48 4.3 0 .85.328 1.763.738 2.26.08.098.09.183.07.282-.075.31-.245.992-.277 1.13-.043.18-.14.22-.327.133-1.235-.574-2.006-2.37-2.006-3.813 0-3.107 2.256-5.96 6.5-5.96 3.412 0 6.065 2.43 6.065 5.677 0 3.397-2.143 6.13-5.12 6.13-1 0-1.94-.52-2.26-1.133l-.615 2.346c-.22.864-.82 1.946-1.22 2.607.92.283 1.89.437 2.9.437 6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                </svg>
              </div>
            </Link>
            <Link
              href="https://www.youtube.com/channel/UCsbKPsVwgAgqJi4EB20iBvg"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Youtube className="w-6 h-6 text-black  group-hover:text-red-600 transition-all duration-300 group-hover:scale-110" />
            </Link>
          </div>
        </div>

        {/* Support / Legal / Company Row */}
        <div className="md:col-span-3 grid grid-cols-1 gap-8">
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div>
              <h4 className="font-semibold mb-2 text-black text-lg">Support</h4>
              <ul className="space-y-1 text-black ">
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>

                <li>
                  <Link href="/faq">Faqs</Link>
                </li>

                <li>
                  <Link href="/pricing">Pricing</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-black text-lg">Legal</h4>
              <ul className="space-y-1 text-black ">
                <li>
                  <Link href="/privacy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/terms">Terms & Conditions</Link>
                </li>
                <li>
                  <Link href="/refund-policy">Refunds Policy</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-black text-lg">Company</h4>
              <ul className="space-y-1 text-black ">
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/services">Why Choose Us</Link>
                </li>
                <li>
                  <Link href="/our-client">Our Clients</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Solutions Row */}
          <div>
            <h4 className="font-semibold mb-2 text-black text-lg">Solutions</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-black">
              <Link href="/agribusiness">Agribusiness</Link>
              <Link href="/asset-management">Asset Management</Link>
              <Link href="/academic-and-education">Academic and Education</Link>
              <Link href="/automative">Automotive</Link>
              <Link href="/aerospace-and-defence">Aerospace and Defence</Link>
              <Link href="/construction">Construction</Link>
              <Link href="/chemical">Chemical</Link>
              <Link href="/energy">Energy Sector</Link>
              <Link href="/exporters">Exporters</Link>
              <Link href="/importers">Importers</Link>
              <Link href="/law-firms">Law Firms</Link>
              <Link href="/retail">Retail</Link>
              <Link href="/sales-and-marketing">Sales and Marketing</Link>
            </div>
          </div>

          {/* Important Links Row */}
          <div>
            <h4 className="font-semibold mb-2 text-black text-lg">
              Important Links
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-black ">
              <Link href="/get-started">Get Trial</Link>
              <Link href="/import-export-data-country-wise">Countries Covered</Link>
              <Link href="/global-companies-list">Global Companies</Link>

              <Link href="/global-ports">Global Ports</Link>

              <Link href="/industries-covered">Industries Covered</Link>

              <Link href="/global-trade-database">Global Trade Database</Link>
              <Link href="/global-products">Global Products</Link>
              <Link href="/api-development-and-integration-company">API Integration & Development</Link>
              <Link href="/global-hs-code-list">Global HSN Code List</Link>

              <Link href="/partners">Referral Partners</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 text-sm text-black  text-center">
        &copy; {new Date().getFullYear()} Shpere Eximia Research Pvt Ltd. All
        rights reserved.
      </div>
    </footer>
  );
}
