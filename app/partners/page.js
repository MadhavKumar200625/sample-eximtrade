import React from 'react'
import Hero from '../components/Partners/Hero'
import ClinetsAndPartners from '../components/Partners/ClinetsAndPartners'
import PartnerToday from '../components/Partners/PartnerToday'
import ContactUs from '../components/ContactUs'


const page = () => {
  return (
    <main>
    <Hero></Hero>
    <ClinetsAndPartners></ClinetsAndPartners>
    <PartnerToday></PartnerToday>
    <ContactUs></ContactUs>
    </main>
  )
}

export default page