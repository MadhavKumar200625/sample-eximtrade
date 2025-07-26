import Image from "next/image";
import Hero from "./components/Hero";
import CountryExportSection from "./components/ContryExportSection";
import GrowthSection from "./components/GrowthSection";
import IndustrySection from "./components/IndustrySection"
import SearchComponent from "./components/SearchComponent";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero></Hero>
      <SearchComponent></SearchComponent>
      <CountryExportSection></CountryExportSection>
      <GrowthSection></GrowthSection>
      <IndustrySection></IndustrySection>
    </div>
  );
}
