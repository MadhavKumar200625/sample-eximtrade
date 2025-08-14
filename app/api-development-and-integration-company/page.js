import React from 'react'
import Hero from './Hero'
import CustomApi from './CustomApi'
import BestApiSolutions from './BestApiSolutions'
import Advantages from './Advantages'
import HowToGetStarted from './HowToGetStarted'
import ExploreMore from './ExploreMore'
import ClientsSection from '../components/ClientsSection'
import FAQSection from '../components/FAQ'

const faq = [
  {
    question: "What is an API?",
    answer: "API stands for the Application Programming Interface. It acts as an interface between two applications. Through an API, you can integrate new applications with existing software systems.",
  },
  {
    question: "Which API services do you provide?",
    answer: "We offer a wide range of API services that includes RESTful API, FIX API, Trade API, Open API, Cloud API, Third-party API, API Maintenance & Integration services.",
  },
  {
    question: "What is a Trade API?",
    answer: "A Trade API is a quality product developed by Exim Trade Data developer team. It is the best application to streamline trade information and make the most out of the data. You can make various requests like gathering country wise import-export data, importer-exporter wise data, search by specific time duration, etc. Through this API, company’s can make their own market search portal and improve their company’s productivity.",
  },
  {
    question: "What are the benefits of using a Trade API?",
    answer: "There are various benefits of using our Trade API such as improved market research, global market insights, instant access to over 200+ countries import export records, global buyers suppliers shipment records, quantity, price evaluation etc.",
  },
  {
    question: "How to get started with your API?",
    answer: "We provide our customers with detailed API documentation. Through which you get a brief overview of our API and easy steps to integrate it into your application. Also, we provide complete support to our clients throughout the process.",
  },
  {
    question: "What is the cost of developing an API from Exim Trade Data?",
    answer: "Exim Trade Data provides the most cost-effective API development and integration services. Our team of dedicated developers, quality testers are fully experienced in delivering the most robust and prompt API project delivery.",
  },
  {
    question: "How to reach out to your project manager for any inquiry?",
    answer: (
      <>
        You can easily connect to one of our project managers to share your requirement at{" "}
        <a href="mailto:info@eximtradedata.com" className="text-blue-600 hover:underline">
          info@eximtradedata.com
        </a>{" "}
        or call at{" "}
        <a href="tel:+919625812393" className="text-blue-600 hover:underline">
          +91-9625812393
        </a>
        . We are 24*7 available for your assistance.
      </>
    ),
  },
];

const page = () => {
  return (
    <main>
        <Hero></Hero>
        <CustomApi></CustomApi>
        <BestApiSolutions></BestApiSolutions>
        <Advantages></Advantages>
        <HowToGetStarted></HowToGetStarted>
        <ExploreMore></ExploreMore>
        <ClientsSection></ClientsSection>
        <FAQSection faqs={faq}></FAQSection>
        
    </main>
  )
}

export default page