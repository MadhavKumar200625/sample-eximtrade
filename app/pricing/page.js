import React from "react";
import Hero from "../components/Pricing/Hero";
import CustomPlan from "../components/Pricing/CustomPlan";
import UniqueBenefits from "../components/Pricing/UniqueBenefits";
import ExclusiveFeatures from "../components/Pricing/ExclusiveFeatures";
import ClientsSection from "../components/ClientsSection";
import FAQ from "../components/FAQ";
import ContactUs from "../components/ContactUs";

const faqs = [
  {
    question: "What is Exim GTIS? How can Exim GTIS help my company?",
    answer:
      "Exim GTIS is the leading trade intelligence platform helping businesses to prosper in the global market.<br/>We provide expert market intelligence reports that highlight the latest market trends, product lists, port shipment records, importers and exporters list.<br/>Through our platform, you could mitigate financial risk by reaching genuine international buyers and suppliers, increasing ROI and brand presence.",
  },
  {
    question: "How many countries are covered in your database? What types of data do you provide?",
    answer:
      `<div class="space-y-4">
  <p class="text-zinc-700">
    Exim GTIS has a well-researched database.
  </p>
  <p class="text-zinc-700">
    Also, you could access the exclusive countries data including Turkey, Bangladesh, Thailand, Ghana, Chad, Mexico, Tanzania etc.
  </p>
  <p class="text-zinc-700">
    We provide detailed trade statistics reports based on the information collected from latest transactions, invoices, bills, port shipments, and customs departments.
  </p>
  
  <p class="font-semibold text-black">Our global trade database contains 4 types of data:</p>

  <div class="bg-white shadow-md rounded-xl p-4">
    <h4 class="font-semibold text-blue-600">Statistical Data</h4>
    <p class="text-zinc-700 mt-1">
      Helps identify market trends, demand, and evaluate product pricing. It includes Date of shipment, Product Quantity, Price, Country of Origin/Destination, etc.
    </p>
  </div>

  <div class="bg-white shadow-md rounded-xl p-4">
    <h4 class="font-semibold text-blue-600">Customs Data</h4>
    <p class="text-zinc-700 mt-1">
      Indicated by the customs department of global countries. Includes product HS Code, description, country, buyer, supplier name, and port of loading/unloading.
    </p>
  </div>

  <div class="bg-white shadow-md rounded-xl p-4">
    <h4 class="font-semibold text-blue-600">Mirror Data</h4>
    <p class="text-zinc-700 mt-1">
      Covers countries with limited data availability. Extracted from their trading partners’ records.
    </p>
  </div>

  <div class="bg-white shadow-md rounded-xl p-4">
    <h4 class="font-semibold text-blue-600">Bill of Lading Data</h4>
    <p class="text-zinc-700 mt-1">
      Based on company shipping details, excluding pricing.
    </p>
  </div>
</div>`,
  },
  {
    question: "What's the difference between the plans? How do I decide which plan is best for me?",
    answer:
      "We offer Starter, Basic, Plus, Pro, and Premium.<br/>Each plan has different search limits, download credits, and user licence.<br/>You can compare and select the most suitable plan or request a custom plan based on your budget and business needs.",
  },
  {
    question: "How can I subscribe to Exim GTIS? How does your point system work?",
    answer:
      `<div class="space-y-4">
  <p class="text-zinc-700">
    For subscribing to the Exim GTIS trade intelligence platform, you first need to visit our pricing plan page and compare among our given plans.

  </p>
  <p class="text-zinc-700">
Then, you click on the Request Demo button. After making the payment, your will receive an activation email and after the verification, your account will get activated.
  </p>
  <p class="text-zinc-700">
Our point system varies as per plans.
  </p>
  <p class="text-zinc-700">
Once your account is activated, you can access the database of all countries.
  </p>
  <p class="text-zinc-700">
The points & credits will be awarded on the basis of searches, and downloads available under the plan a user chooses.

  </p>
  <p class="text-zinc-700">
The points would be deducted on the basis of country and the data accessible under the user plan.
  </p>
  <p class="font-semibold text-black">For Example:</p>
  <div class="bg-white shadow-md rounded-xl p-4">
    <h4 class="font-semibold text-blue-600">Statistical Data</h4>
    <p class="text-zinc-700 mt-1">
For Indonesia Data, 1 point would be deducted for downloading 1 shipment.
    </p>
  </div>

  <div class="bg-white shadow-md rounded-xl p-4">
    <h4 class="font-semibold text-blue-600">Customs Data</h4>
    <p class="text-zinc-700 mt-1">
For Vietnam Trade Data, 1 point would be deducted for downloading 1 shipment.
    </p>
  </div>

  <div class="bg-white shadow-md rounded-xl p-4">
    <h4 class="font-semibold text-blue-600">Mirror Data</h4>
    <p class="text-zinc-700 mt-1">
For Turkey Direct Export Data, 10 points would be deducted for downloading 1 shipment.
    </p>
  </div>

   </p>
  <p class="text-zinc-700">
Feel free to connect with our experts for any kind of assistance.

  </p>
</div>`,
  },
  {
    question: "How much time will it take for my account to be activated?",
    answer:
      "Once you make the payment, you’ll receive an activation email. After verification, your account will be activated.",
  },
  {
    question: "How can I contact you for creating my Customized Data Plan as per my requirement and budget?",
    answer:
      "We provide customized plans tailored to your requirements. Simply email us at info@eximtradedata.com and our team will get back to you.",
  },
  {
    question: "How do I get customer support?",
    answer:
      "Our expert support team is available 24×7. For help or training, call us at +91-9625812393.",
  },
];




const page = () => {
  return (
    <main>
      <Hero></Hero>
      <CustomPlan></CustomPlan>
      <UniqueBenefits></UniqueBenefits>
      <ExclusiveFeatures></ExclusiveFeatures>
      <ClientsSection></ClientsSection>
      <FAQ faqs={faqs}></FAQ>
      <ContactUs></ContactUs>
    </main>
  );
};

export default page;
