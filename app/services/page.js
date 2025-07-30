import React from 'react'
import Hero from '../components/Services/Hero'
import Benifits from '../components/Services/Benifits'
import Features from '../components/Services/Features'
import BenefitsSection from '../components/Services/BenefitsSection'
import ImportExportSection from '../components/Services/ImportExportSection'
import ContactUs from '../components/ContactUs'

const page = () => {
  return (
    <main>
        <Hero></Hero>
        <Benifits></Benifits>
        <Features></Features>
        <BenefitsSection></BenefitsSection>
        <ImportExportSection></ImportExportSection>
        <ContactUs></ContactUs>
    </main>
  )
}

export default page