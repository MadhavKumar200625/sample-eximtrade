import React from "react";
import Hero from "./Hero";
import TabsSection from "./TabsSection";
import Points from "./Points";
import Section4 from "./Section4";
import Section5 from "./Section5";
import { industries } from "./data";


// const industry = {
//   section1: {
//     title: "Unlock Agricultural Trade Insights\nwith Precision Data",
//     description:
//       "Access a wealth of information on global agricultural exports and imports. Stay ahead of market trends and analyze supply chain patterns to make data-driven decisions.\n\nExplore commodity-specific insights and gain a competitive edge in the agri-business industry.",
//     image: "https://eximtradedata.com/images/industry_md_banner.webp",
//   },
//   section2: {
//     heading: "Key Insights for industry",
//     points: [
//       {
//         heading: "Monitor Shipments",
//         description:
//           "Get into the shipment activities of the top suppliers in the world. Analyze their top selling products, pricing, markets and identify your competitors through our trade intelligence reports. Take all these parameters into your account and enhance your decision making process.",
//         icon: "https://eximtradedata.com/images/profitable_decision.svg",
//       },
//       {
//         heading: "Secure & Reliable",
//         description:
//           "Your data is protected with top-level encryption and regular audits.",
//         icon: "https://eximtradedata.com/images/discover_supplier.svg",
//       },
//       {
//         heading: "Real-time Analytics",
//         description:
//           "Gain insights from real-time data to make informed decisions quickly.",
//         icon: "https://eximtradedata.com/images/monitor_shipment.svg",
//       },
//     ],
//   },
//   section3: {
//     heading: "Get in-depth insights into the Global industry Market",
//     subheading:
//       "Our Trade Intelligence Platform reflects the top market trends, forecasts, product demand, pricing and brings the most profitable opportunities in the industry market. That assists you in making timely and beneficial decisions.",
//     points: [
//       {
//         heading: "Global Supplier Access",
//         description:
//           "Gain unparalleled access to suppliers across continents. Our platform connects you with verified trade sources, enabling seamless communication, pricing negotiation, and real-time insight into their shipment records to boost your sourcing strategy.",
//       },
//       {
//         heading: "Reliable Insights",
//         description:
//           "We provide well-researched insights for your industry. With historical trade patterns and forecasted demand, you’ll be equipped with reliable information to make confident decisions and identify untapped markets quickly.",
//       },
//       {
//         heading: "Real-Time Data Tracking",
//         description:
//           "Stay updated with the latest shipment movements and delivery schedules. Our intelligent tracking technology ensures you never miss an opportunity to follow your competition or expand your market footprint efficiently.",
//       },
//       {
//         heading: "Custom Market Reports",
//         description:
//           "Get personalized, data-driven market reports tailored to your business goals. Our experts compile sector-specific analytics to help you capitalize on trends and mitigate potential risks before they arise.",
//       },
//       {
//         heading: "Import/Export Visibility",
//         description:
//           "Visualize who is importing/exporting what and from where. This level of transparency helps you evaluate the demand-supply ratio, monitor tariffs and optimize your logistics based on customs data.",
//       },
//       {
//         heading: "Seamless API Access",
//         description:
//           "Integrate EximTradeData directly into your workflow with API support. Automate data access, query shipment records, and receive updates within your system, saving time and reducing manual errors.",
//       },
//     ],
//   },
//   section4: {
//     heading: "Get Expert Trade Intelligence Reports for Market Research",
//   },
//   section5: {
//     industries: [
//       {
//         image: "https://eximtradedata.com/images/automative_md_banner.webp",
//         title: "Automotive",
//         heading: "Global Car Parts Network",
//         description:
//           "Find exporters and importers for every major automobile component worldwide, from OEMs to aftermarket parts.",
//         link: "/automotive",
//       },
//       {
//         image: "https://eximtradedata.com/images/automative_md_banner.webp",
//         title: "Agriculture",
//         heading: "Farm Fresh Supply Chains",
//         description:
//           "Connect with leading exporters and distributors of grains, pulses, spices, and fresh produce around the globe.",
//         link: "/agriculture",
//       },
//       {
//         image: "https://eximtradedata.com/images/automative_md_banner.webp",
//         title: "Automotive",
//         heading: "Global Car Parts Network",
//         description:
//           "Find exporters and importers for every major automobile component worldwide, from OEMs to aftermarket parts.",
//         link: "/industries-covered/automotive",
//       },
//       {
//         image: "https://eximtradedata.com/images/automative_md_banner.webp",
//         title: "Agriculture",
//         heading: "Farm Fresh Supply Chains",
//         description:
//           "Connect with leading exporters and distributors of grains, pulses, spices, and fresh produce around the globe.",
//         link: "/industries-covered/agriculture",
//       },
//       // Add 2 more similarly
//     ],
//   },
// };

const page = async ({params}) => {
    const {slug} = await params

    const industry = industries[slug];

  return (
    <main>
      <Hero {...industry.section1} />
      {industry.section2 &&
      <TabsSection
        heading={industry.section2.heading}
        points={industry.section2.points}
      />
      }
      
      {industry.section3 &&
            <Points {...industry.section3} peviousSection={industries.section2? true:false} />
      }
      <Section4 {...industry.section4} />
      <Section5 industries={industry.section5.industries}/>
    </main>
  );
};

export default page;
