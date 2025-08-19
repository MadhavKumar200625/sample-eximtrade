import React from 'react'
import Hero from './Hero'
import CountryLinksSection from "./CountryLinksSection"
import Stats from './Stats'
import SearchComponent from '../components/SearchComponent'
import GlobalImpact from './GlobalImpact'
import MarketIntel from './MarketIntel'
import DetailedTable from './DetailedTable'
import ImportantLinks from './ImportantLinks'
import CtaImage from './CtaImage'
import FAQSection from '../components/FAQ'


const faqs = [
  {
    question: "What are the top 3 major imports of Armenia?",
    answer: "Mineral fuels, Electrical machinery, Nuclear reactors are the main imports of Armenia."
  },
  {
    question: "What are the top 3 major exports of Armenia?",
    answer: "Natural or cultured, Ores, slag, Electrical machinery are the main exports of Armenia."
  },
  {
    question: "Who are Armenia's biggest trading partner countries?",
    answer: "Armenia’s biggest trading partner countries are Russia, Russia, and United Arab."
  },
  {
    question: "Who are Armenia's top 3 import partner countries?",
    answer: "Russia, China, and Iran are Armenia's top 3 destinations for product imports."
  },
  {
    question: "Who are Armenia's top 3 export partner countries?",
    answer: "Russia, United Arab, and China are Armenia's top 3 countries for product exports."
  },
  {
    question: "Which company provides accurate Armenia trade statistics?",
    answer: "Exim Trade Data Intelligence Platform gives you instant access to accurate Armenia trade statistics based on Armenia Shipment Data, bills of lading, and commercial invoices."
  }
];


const page = () => {
  return (
    <main>
        <Hero></Hero>
        <CountryLinksSection></CountryLinksSection>
        <Stats></Stats>
        <SearchComponent heading={"Search Country wise Armenia Import and Export Data"} subHeading={"Here, You can find the search bar through which you can search country wise Armenia import and export data by HS code and product. You will get a detailed report with all data fields such as product, HS code description, quantity, unit, price, origin/destination country, importer, exporter, and loading/unloading port information."}></SearchComponent>
        <GlobalImpact></GlobalImpact>
        <MarketIntel></MarketIntel>
        <DetailedTable></DetailedTable>
        <ImportantLinks></ImportantLinks>
        <CtaImage></CtaImage>
        <FAQSection faqs={faqs}></FAQSection>
    </main>
  )
}

export default page