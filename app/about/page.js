import React from 'react'
import HeroSection from '../components/About/HeroSection'
import BenifitsSection from '../components/About/BenifitsSection'
import ClientsSection from '../components/ClientsSection'
import CodeOfConductSection from '../components/About/CodeOfConductSection'
import TestimonialsSection from '../components/TestimonialsSection'
import ContactUs from '../components/ContactUs'
const page = () => {
  return (
    <main>
    <HeroSection></HeroSection>
    <BenifitsSection></BenifitsSection>
    <CodeOfConductSection></CodeOfConductSection>
    <ClientsSection></ClientsSection>
    <TestimonialsSection></TestimonialsSection>
    <ContactUs></ContactUs>
    </main>
  )
}

export default page