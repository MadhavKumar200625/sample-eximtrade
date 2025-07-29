import Image from "next/image";
import Hero from "./components/HomePage/Hero";
import CountryExportSection from "./components/HomePage/ContryExportSection";
import GrowthSection from "./components/HomePage/GrowthSection";
import IndustrySection from "./components/HomePage/IndustrySection"
import SearchComponent from "./components/HomePage/SearchComponent";
import CustomsSection from "./components/HomePage/CustomsSection";
import GrowWithGloabalSection from "./components/HomePage/GrowWithGloabalSection";
import WhyChooseUs from "./components/HomePage/WhyChooseUs";
import ClientsSection from "./components/ClientsSection";
import TestimonialsSection from "./components/TestimonialsSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero></Hero>
      <SearchComponent></SearchComponent>
      <CountryExportSection></CountryExportSection>
      <GrowthSection></GrowthSection>
      <IndustrySection></IndustrySection>
      <CustomsSection></CustomsSection>
      <GrowWithGloabalSection></GrowWithGloabalSection>
      <WhyChooseUs></WhyChooseUs>
      <ClientsSection></ClientsSection>
      <TestimonialsSection></TestimonialsSection>
    </div>
  );
}
