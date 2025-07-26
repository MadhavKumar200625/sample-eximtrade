import Image from "next/image";
import Hero from "./components/Hero";
import CountryExportSection from "./components/ContryExportSection";
import GrowthSection from "./components/GrowthSection";
import IndustrySection from "./components/IndustrySection"
import SearchComponent from "./components/SearchComponent";
import CustomsSection from "./components/CustomsSection";
import GrowWithGloabalSection from "./GrowWithGloabalSection";
import WhyChooseUs from "./components/WhyChooseUs";
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
