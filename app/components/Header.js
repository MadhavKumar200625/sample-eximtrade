"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import {
  Tractor,
  Car,
  Flame,
  BookOpen,
  Shield,
  Banknote,
  GraduationCap,
  Building2,
  Wallet,
  Landmark,
  Gavel,
  Hammer,
  FlaskConical,
  ShieldHalf,
  Truck,
  PackageSearch,
  Boxes,
  MonitorSmartphone,
  ShoppingCart,
  Megaphone,
} from "lucide-react";

const solutions = [
  { title: "Agribusiness", link: "/agri-business", icon: Tractor },
  { title: "Automotive", link: "/automotive", icon: Car },
  { title: "Energy Sector", link: "/energy-sector", icon: Flame },
  {
    title: "Research & Consulting",
    link: "/research-consulting",
    icon: BookOpen,
  },
  { title: "Insurance Companies", link: "/insurance-companies", icon: Shield },
  { title: "Financial Sector", link: "/financial-sector", icon: Banknote },
  {
    title: "Academic & Education",
    link: "/academic-education",
    icon: GraduationCap,
  },
  { title: "Corporation", link: "/corporation", icon: Building2 },
  { title: "Asset Management", link: "/asset-management", icon: Wallet },
  {
    title: "Government Agencies",
    link: "/government-agencies",
    icon: Landmark,
  },
  { title: "Law Firms", link: "/law-firms", icon: Gavel },
  { title: "Construction", link: "/construction", icon: Hammer },
  { title: "Chemical", link: "/chemical", icon: FlaskConical },
  {
    title: "Aerospace & Defence",
    link: "/aerospace-defence",
    icon: ShieldHalf,
  },
  { title: "Importers", link: "/importers", icon: Truck },
  { title: "Exporters", link: "/exporters", icon: Truck },
  {
    title: "Supply Chain & Logistics",
    link: "/supply-chain-logistics",
    icon: PackageSearch,
  },
  { title: "IT & Consulting", link: "/it-consulting", icon: MonitorSmartphone },
  { title: "Retail", link: "/retail", icon: ShoppingCart },
  { title: "Sales & Marketing", link: "/sales-marketing", icon: Megaphone },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  let closeTimer = null;

  const handleMouseEnter = () => {
    if (closeTimer) clearTimeout(closeTimer);
    setSolutionsOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimer = setTimeout(() => {
      setSolutionsOpen(false);
    }, 200); // short delay allows smooth movement
  };
  return (
    <header className="w-full bg-white shadow-xl fixed z-50 font-sans ">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
<img src="/logo.png" alt="Logo" className="h-10 w-auto flex-none" />
        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 items-center justify-center gap-6">
          <a href="#" className="hover:text-blue-600 transition">
            Home
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            About
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            Services
          </a>

          {/* Solutions dropdown */}
          <div
            className="relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="hover:text-blue-600 transition">
              Solutions
            </button>
            {solutionsOpen && (
              <div className="fixed left-1/2 -translate-x-1/2 top-16 z-50">
                <div className="w-[1000px] bg-white border shadow-xl grid grid-cols-4 p-8 rounded-xl">
                  {/* Left 3-column grid */}
                  <div className="col-span-3 grid grid-cols-3 gap-x-6 gap-y-4 pr-4">
                    {solutions.map(({ title, link, icon: Icon }) => (
                      <a
                        key={title}
                        href={link}
                        className="flex items-center gap-3 p-3 rounded-lg transition hover:bg-blue-100"
                      >
                        <Icon className="w-5 h-5 text-blue-600" />
                        <span className="text-gray-800 text-sm font-medium">
                          {title}
                        </span>
                      </a>
                    ))}
                  </div>

                  {/* Right column */}
                  <div className="pl-6 border-l">
                    <h4 className="text-md font-semibold text-blue-700 mb-2">
                      Solutions
                    </h4>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      Gain industry specific insights through our trade
                      intelligence platform. Identify potential business
                      opportunities in the global market with our expert
                      intelligence reports.
                    </p>
                    <button className="text-white bg-blue-600 px-4 py-2 text-sm rounded-full hover:bg-blue-700 transition">
                      View All Industries
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <a href="#" className="hover:text-blue-600 transition">
            Search Data
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            Countries
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            API
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            Pricing
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            Contact Us
          </a>
        </nav>

        <div className="hidden md:block">
          <button className="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-semibold text-white transition-all duration-300 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-lg group hover:scale-105">
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
            <span className="relative z-10">Get A Demo</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pt-2 pb-6 space-y-3 text-center animate-fade-in">
          <a href="#" className="block text-gray-800 hover:text-blue-600">
            Home
          </a>
          <a href="#" className="block text-gray-800 hover:text-blue-600">
            About
          </a>
          <a href="#" className="block text-gray-800 hover:text-blue-600">
            Services
          </a>
          <div className="text-gray-800 text-left">
  <button
    onClick={() => setSolutionsOpen(!solutionsOpen)}
    className="w-full flex items-center justify-center py-2 px-2 hover:text-blue-600"
  >
    <span>Solutions</span>
    <svg
      className={`w-4 h-4 ml-2 transform transition-transform duration-200 ${
        solutionsOpen ? "rotate-180" : "rotate-0"
      }`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </button>

  {/* Mobile Dropdown */}
  {solutionsOpen && (
    <div className="pl-4 space-y-2">
      {solutions.map(({ title, link, icon: Icon }) => (
        <a
          key={title}
          href={link}
          className="flex items-center justify-center gap-2 text-sm text-gray-700 hover:text-blue-600"
        >
          <Icon className="w-4 h-4 text-blue-500" />
          {title}
        </a>
      ))}
    </div>
  )}
</div>
          <a href="#" className="block text-gray-800 hover:text-blue-600">
            Search Data
          </a>
          <a href="#" className="block text-gray-800 hover:text-blue-600">
            Countries
          </a>
          <a href="#" className="block text-gray-800 hover:text-blue-600">
            API
          </a>
          <a href="#" className="block text-gray-800 hover:text-blue-600">
            Pricing
          </a>
          <a href="#" className="block text-gray-800 hover:text-blue-600">
            Contact Us
          </a>
          <button className="mt-4 w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-full font-semibold shadow-lg transition-all active:scale-95">
            Get A Demo
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
