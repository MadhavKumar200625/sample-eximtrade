import React from 'react'
import ContactInfo from '../components/Contact/ContactInfo'
import ContactUs from '../components/ContactUs'
import Hero from '../components/Contact/Hero'


const page = () => {
  return (
    <main>
      <Hero></Hero>
    <ContactInfo></ContactInfo>
    <ContactUs></ContactUs>
    </main>
    
  )
}

export default page