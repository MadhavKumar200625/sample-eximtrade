import React from "react";
import Hero from "../components/Pricing/Hero";
import CustomPlan from "../components/Pricing/CustomPlan";
import UniqueBenefits from "../components/Pricing/UniqueBenefits";
import ExclusiveFeatures from "../components/Pricing/ExclusiveFeatures";
import Inclusions from "../components/Pricing/inclusions";
import ClientsSection from "../components/ClientsSection";




const page = () => {
  return (
    <main>
      <Hero></Hero>
      <CustomPlan></CustomPlan>
      <UniqueBenefits></UniqueBenefits>
      <ExclusiveFeatures></ExclusiveFeatures>
      <Inclusions></Inclusions>
      <ClientsSection></ClientsSection>
    </main>
  );
};

export default page;
