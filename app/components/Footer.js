"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Subscribe Section */}
        <div className="md:col-span-2 space-y-4">
          <h3 className="text-xl font-semibold">Subscribe Newsletter</h3>
          <form className="flex items-center rounded ">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 w-full rounded m-2 text-gray-800 focus:outline-none bg-white"
            />
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg">
  Subscribe
</button>
          </form>
          <div className="text-sm text-gray-300 mt-4">
            Shpere Eximia Research Pvt Ltd <br />
            G-232, Noida Sector-63, Uttar Pradesh - 201301, India
            <br />
            <span className="block mt-2">+91-9625812393</span>
            <a href="mailto:Info@eximtradedata.com" className="underline">
              Info@eximtradedata.com
            </a>
          </div>
        </div>

        {/* Support / Legal / Company Row */}
        <div className="md:col-span-3 grid grid-cols-1 gap-8">
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div>
              <h4 className="font-semibold mb-2 text-blue-400">Support</h4>
              <ul className="space-y-1 text-gray-300">
                <li><Link href="/contact">Contact Us</Link></li>

                <li><Link href="/faq">Faqs</Link></li>

                <li><Link href="/pricing">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-blue-400">Legal</h4>
              <ul className="space-y-1 text-gray-300">
                <li><Link href="/privacy">Privacy Policy</Link></li>
                <li><Link href="/terms">Terms & Conditions</Link></li>
                <li><Link href="/refund-policy">Refunds Policy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-blue-400">Company</h4>
              <ul className="space-y-1 text-gray-300">
                <li><Link href="/about">About</Link></li>
                <li><a href="/">Why Choose Us</a></li>
                <li><Link href="/our-client">Our Clients</Link></li>
              </ul>
            </div>
          </div>

          {/* Solutions Row */}
          <div>
            <h4 className="font-semibold mb-2 text-blue-400">Solutions</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-300">
              <a href="#">Agribusiness</a>
              <a href="#">Asset Management</a>
              <a href="#">Academic and Education</a>
              <a href="#">Automotive</a>
              <a href="#">Aerospace and Defence</a>
              <a href="#">Construction</a>
              <a href="#">Chemical</a>
              <a href="#">Energy</a>
              <a href="#">Exporters</a>
              <a href="#">Importers</a>
              <a href="#">Law Firms</a>
              <a href="#">Retail</a>
              <a href="#">Sales and Marketing</a>
            </div>
          </div>

          {/* Important Links Row */}
          <div>
            <h4 className="font-semibold mb-2 text-blue-400">Important Links</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-300">
              <a href="#">Get TrialNew</a>
              <a href="#">Countries Covered</a>
              <a href="#">Global Companies</a>
              <a href="#">Global Ports</a>
              <a href="#">Industries Covered</a>
              <a href="#">Global Trade Database</a>
              <a href="#">Global Products</a>
              <a href="#">API Integration & Development</a>
              <a href="#">Global HSN Code List</a>
              <a href="#">Referral Partners</a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 text-sm text-gray-400 text-center">
        &copy; {new Date().getFullYear()} Shpere Eximia Research Pvt Ltd. All rights reserved.
      </div>
    </footer>
  );
}